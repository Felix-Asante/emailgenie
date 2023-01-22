import HowItWork from "./HowItWork";

const STEPS = [
	{
		number: 1,
		title: "Simply Search or select the type of email you want to write",
		image: "/search-email-template.png",
	},
	{
		number: 2,
		title: "Fill out the necessary details for better response from AI",
		image: "/fill-out.png",
	},
	{
		number: 3,
		title: "Choose the best response according to yor requirements ",
		image: "/send.png",
	},
];
export default function HowItWorks() {
	return (
		<section className="my-8">
			<h5 className="text-xl mb-6 text-center">How It Works ?</h5>
			<div className="max-w-7xl mx-auto px-3">
				{STEPS.map((step) => (
					<HowItWork key={step.number} {...step} />
				))}
			</div>
		</section>
	);
}
