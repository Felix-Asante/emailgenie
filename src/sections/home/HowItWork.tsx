import Image, { StaticImageData } from "next/image";

interface Props {
	number: number;
	title: string;
	image: string | StaticImageData;
}
export default function HowItWork({ number, title, image }: Props) {
	return (
		<section className="mb-12">
			<div className="flex items-center justify-center mb-5 gap-2">
				<div className="text-white w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-t from-[#139EBC] to-[#AA1ECD] text-center">
					{number}
				</div>
				<p>{title}</p>
			</div>
			<div className="w-full h-[300px] relative">
				<Image
					src={image}
					alt="illustration"
					fill
					style={{ objectFit: "contain" }}
				/>
			</div>
		</section>
	);
}
