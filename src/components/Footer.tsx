import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const productSection = {
	title: "Product",
	items: [
		{ name: "Pricing", path: "/" },
		{ name: "EmailGenie reviews", path: "/" },
		{ name: "alternatives", path: "/" },
		{ name: "templates", path: "/" },
		{ name: "write in 25+ languages", path: "/" },
		{ name: "use free AI tools", path: "/" },
		{ name: "copy.ai promos", path: "/" },
	],
};
const companySection = {
	title: "company",
	items: [
		{ name: "blog", path: "/" },
		{ name: "careers", path: "/" },
		{ name: "community", path: "/" },
		{ name: "creator programs", path: "/" },
		{ name: "twitter", path: "/" },
		{ name: "linkedin", path: "/" },
		{ name: "affiliate program", path: "/" },
	],
};
const supportSection = {
	title: "support",
	items: [
		{ name: "weekly demos", path: "/" },
		{ name: "contact us", path: "/" },
		{ name: "report a bug", path: "/" },
		{ name: "report an outage", path: "/" },
		{ name: "request anew feature", path: "/" },
	],
};
const useCaseSection = {
	title: "use Case",
	items: [
		{ name: "For students", path: "/" },
		{ name: "For recruiters", path: "/" },
		{ name: "for email marketers", path: "/" },
		{ name: "for freelancer", path: "/" },
		{ name: "for content creators", path: "/" },
		{ name: "for bloggers", path: "/" },
		{ name: "for employees", path: "/" },
	],
};
export default function Footer() {
	return (
		<footer className="bg-[#2C2C2C]  p-3">
			<div className="max-w-5xl mx-auto">
				<Logo width="100" height="100" />
				<div className="grid grid-cols-2 md:grid-cols-4 gap-5  pb-3">
					<div>
						<h6 className="mb-2 text-white font-semibold text-lg capitalize">
							{productSection.title}
						</h6>
						{productSection.items.map((item) => (
							<Link
								href={item.path}
								key={item.name}
								className="text-sm text-white mb-1 block font-light capitalize footer-link"
							>
								{item.name}
							</Link>
						))}
					</div>
					<div>
						<h6 className="mb-2 text-white font-semibold text-lg capitalize">
							{companySection.title}
						</h6>
						{companySection.items.map((item) => (
							<Link
								href={item.path}
								key={item.name}
								className="text-sm text-white mb-1 block font-light capitalize footer-link"
							>
								{item.name}
							</Link>
						))}
					</div>
					<div>
						<h6 className="mb-2 text-white font-semibold text-lg capitalize">
							{supportSection.title}
						</h6>
						{supportSection.items.map((item) => (
							<Link
								href={item.path}
								key={item.name}
								className="text-sm text-white mb-1 block font-light capitalize footer-link"
							>
								{item.name}
							</Link>
						))}
					</div>
					<div>
						<h6 className="mb-2 text-white font-semibold text-lg capitalize">
							{useCaseSection.title}
						</h6>
						{useCaseSection.items.map((item) => (
							<Link
								href={item.path}
								key={item.name}
								className="text-sm text-white mb-1 block font-light capitalize w-fit footer-link"
							>
								{item.name}
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
