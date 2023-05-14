"use client";

import React, { FormEvent, useState } from "react";
import { Section } from "./common/Section";
import { SectionTitle } from "./common/SectionTitle";

const inputClassName =
	"bg-neutral-950 outline-none border-2 border-transparent focus:border-indigo-700 transition-colors p-2 px-4 rounded w-full";

enum EmailSentStatus {
	Loading,
	Success,
	Error,
	Idle,
}

export const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [emailSentStatus, setEmailSentStatus] = useState<EmailSentStatus>(EmailSentStatus.Idle);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setEmailSentStatus(EmailSentStatus.Loading);
		fetch("/api/email", {
			method: "POST",
			body: JSON.stringify({ name, email, message }),
		})
			.then((r) => {
				if (r.ok) {
					setEmailSentStatus(EmailSentStatus.Success);
				} else {
					setEmailSentStatus(EmailSentStatus.Error);
				}

				return r.json();
			})
			.then((data) => console.log({ data }))
			.catch((e) => {
				console.error(e);
				setEmailSentStatus(EmailSentStatus.Error);
			})
			.finally(() => {
				setTimeout(() => {
					setEmailSentStatus(EmailSentStatus.Idle);
				}, 3000);
			});
	};

	return (
		<Section id="contact">
			<SectionTitle>Contact</SectionTitle>
			<form onSubmit={handleSubmit}>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
					<input
						className={inputClassName}
						type={"text"}
						value={name}
						placeholder="Name:"
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						className={inputClassName}
						type={"email"}
						value={email}
						placeholder="Email:"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<textarea
					rows={10}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Message:"
					className={inputClassName}
				></textarea>

				<div className="flex flex-col justify-center">
					<button className="bg-indigo-900 hover:bg-indigo-700 p-3 px-6 mt-2 border-2 outline-none border-transparent transition-colors focus:border-indigo-500 rounded-md">
						{emailSentStatus === EmailSentStatus.Loading ? "Sending..." : "Send"}
					</button>

					{emailSentStatus === EmailSentStatus.Success && (
						<span className="text-green-500 mt-2 text-center">Email sent!</span>
					)}
					{emailSentStatus === EmailSentStatus.Error && (
						<span className="text-red-500 mt-2 text-center">Error sending email</span>
					)}
				</div>
			</form>
		</Section>
	);
};
