import Image from "next/image";

export default function NoResult() {
	return (
		<div className="h-full flex flex-col gap-3 justify-center items-center text-gray-300 text-sm px-12 text-center">
			<Image src="/document.png" width={100} height={100} alt="copy" />
			<p>Your copy created by artificial intelligence will appear here.</p>
		</div>
	);
}
