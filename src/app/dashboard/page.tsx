import { EnvelopeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const EmailTypes = [
	{
		id: 1,
		title: "Formal Email",
		description:
			"A formal email is used when conducting business with a new associate or executive, sending a professional inquiry, or corresponding about a job.",
	},
	{
		id: 2,
		title: "Thank You Email",
		description:
			"Writing a thank-you note or email is a way to show how much you appreciate the recipient.",
	},
	{
		id: 3,
		title: "Testimonial Email",
		description:
			"Testimonials lend social proof to your business, but they also show that you care about what your customers think.",
	},
];
export default function Dashboard() {
	return (
		<section className="bg-[#1E1E1E] h-screen">
			<section className="flex flex-col items-center gap-2 bg-[#2C2C2C] py-5">
				<h4 className="text-white text-2xl">
					What email do you want to write today
				</h4>
				<div className="flex items-center gap-2 bg-white rounded-md p-2 w-[45%] my-2">
					<MagnifyingGlassIcon width={18} />
					<input
						type="text"
						className="border-0 outline-none w-[80%]"
						placeholder="Describe what you want to write"
					/>
				</div>
				<p className="text-gray-300 text-sm">
					Tip: the more details you describe above, the better!
				</p>
			</section>
			<section className="my-4 px-7">
				<h5 className="text-white text-lg">Choose Email Type</h5>
				<div className="flex gap-3 mt-3">
					{EmailTypes.map((type) => (
						<Link
							href={`/projects/new?type=${type.title.toLowerCase()}`}
							key={type.id}
							className="rounded-md p-2 bg-[#2C2C2C] border-2 border-[#333] "
						>
							<div>
								<EnvelopeIcon width={18} color="white" />
								<p className="text-white font-bold my-1">{type.title}</p>
								<p className="font-light w-[17rem] text-gray-300 text-sm">
									{type.description}
								</p>
							</div>
						</Link>
					))}
				</div>
				<div className="mt-5">
					<h5 className="text-white text-lg">Saved Projects</h5>
					<p className="font-light text-center mt-8 text-gray-300 text-sm">
						You don&apos;t have any projects yet
					</p>
				</div>
			</section>
		</section>
	);
}
