import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface FormData {
	name: string;
	email: string;
	message: string;
}

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.GMAIL,
		pass: process.env.GMAIL_PASS,
	},
});

export async function POST(request: Request) {
	const data = (await request.json()) as FormData;
	if (!data.email || !data.name || !data.message) {
		return NextResponse.json(
			{ status: "rejected" },
			{
				status: 400,
			}
		);
	}

	const mailOptions = {
		from: data.email,
		to: process.env.GMAIL,
		subject: `Message from ${data.name} at ${data.email}`,
		text: data.message,
		// html: ""
	};

	const response = await transporter.sendMail(mailOptions);

	if (!response.messageId || !response.response) {
		return NextResponse.json(
			{ status: "rejected" },
			{
				status: 500,
			}
		);
	}

	return NextResponse.json({ lol: "hey" }, { status: 200 });
}
