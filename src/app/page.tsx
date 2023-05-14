import Image from "next/image";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Container } from "../components/common/Container";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";

export default function Home() {
	return (
		<Container>
			<Hero />
			<About />
			<Projects />
			<Contact />
		</Container>
	);
}
