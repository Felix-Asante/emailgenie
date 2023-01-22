import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between max-w-5xl mx-auto p-3">
			<Logo />
			<div className="flex items-center gap-7">
				<Link href="/login" className="text-white">
					Login
				</Link>
				<button className="btn p-2 rounded-md text-white bg-blue">
					Get Started - It&apos;s Free
				</button>
			</div>
		</nav>
	);
}
