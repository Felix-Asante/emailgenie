import {
	DocumentDuplicateIcon,
	HeartIcon,
	PencilIcon,
} from "@heroicons/react/24/outline";

export default function EmailCopy() {
	return (
		<>
			<div className="mx-3 mt-6 p-3 rounded-md text-white bg-[#34363a]">
				<p className="mb-2">Dear User,</p>
				<p className="text-sm text-white mb-2">
					I&apos;m writing to express my interest in the UI designer role at
					[company name]. I have a Btech in Computer Science and I would love to
					work with you.
				</p>
				<p className="text-sm text-white mb-2">
					I can&apos;t tell you how much I appreciate your time and
					consideration, but I do want to provide a quick overview of my skills:
					I am an expert in web design and I have experience working on projects
					that involve user-centered design, user experience, information
					architecture, and visual design.
				</p>
				<p className="text-sm text-white mb-2">
					Thank you again for your consideration! Please let me know if
					there&apos;s anything else I can help you with asap. <br />
					<br /> Best regards, <br /> [name of writer]
				</p>
			</div>
			<div className="flex items-center gap-3 mt-4 mx-3">
				<button className="rounded-md shadow-lg hover:bg-blue text-white py-1 px-2 flex gap-2 items-center bg-[#34363a]">
					<HeartIcon width={15} /> Save
				</button>
				<button className="rounded-md shadow-lg hover:bg-blue text-white py-1 px-2 flex gap-2 items-center bg-[#34363a]">
					<DocumentDuplicateIcon width={15} /> Copy text
				</button>
				<button className="rounded-md shadow-lg hover:bg-blue text-white py-1 px-2 flex gap-2 items-center bg-[#34363a]">
					<PencilIcon width={15} /> Edit text
				</button>
			</div>
		</>
	);
}
