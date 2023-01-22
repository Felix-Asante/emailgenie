import Navbar from "@/components/Navbar";

export default function Hero() {
	return (
		<header className="bg-black h-[29rem] pb-3 relative">
			<Navbar />
			<section className="flex flex-col items-center justify-center w-[75%] lg:w-[47%] 2xl:w-[30%] mx-auto h-full text-center">
				<h4 className="text-white text-4xl font-bold capitalize mb-3">
					Make All your <span className="text-gradient">cold email</span> wishes
					come True with emailGenie{" "}
				</h4>
				<p className="text-gray-300 font-light capitalize w-[70%]  text-lg mb-5">
					Simply input your desired intent and ant relevant information, and
					emailGenie does the rest.
				</p>
				<button className="p-3 mb-2 text-white bg-blue rounded-md capitalize">
					Start writing for free
				</button>
				<p className="text-gray-300 text-sm">No credit card required</p>
			</section>
			<div
				className="absolute top-[40%] left-0 h-[200px] w-[200px]"
				style={{
					background:
						"linear-gradient(90.54deg, #139EBC 36.69%, #AA1ECD 91.01%)",
					filter: "blur(100px)",
					transform: "rotate(-180deg)",
				}}
			/>
			<div
				className="absolute top-[40%] right-0 h-[200px] w-[200px]"
				style={{
					background:
						"linear-gradient(90.54deg, #139EBC 36.69%, #AA1ECD 91.01%)",
					filter: "blur(100px)",
					transform: "rotate(-180deg)",
				}}
			/>
		</header>
	);
}
