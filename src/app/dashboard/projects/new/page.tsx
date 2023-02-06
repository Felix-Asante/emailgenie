import EmailCopy from "./EmailCopy";
import NoResult from "./NoResult";

export default function NewProject() {
	return (
		<div className="flex h-full">
			<form className="w-[60%] p-3 border-r-2 border-r-[#333] h-full px-8 ">
				<div className="my-3">
					<label htmlFor="recipient" className="text-white mb-1 block">
						To:
					</label>
					<input
						type="text"
						id="recipient"
						className="w-full p-2 outline-none  border-2 border-[#333] focus:border-blue rounded-md bg-transparent text-white"
					/>
				</div>
				<div className="my-3">
					<label htmlFor="recipient" className="text-white mb-1 block">
						Address{" "}
						<span className="text-gray-300 text-sm">
							(separate address with comma)
						</span>
					</label>
					<textarea
						rows={2}
						id="recipient"
						className="resize-none w-full p-2 outline-none  border-2 border-[#333] focus:border-blue rounded-md bg-transparent text-white"
					/>
				</div>
				<div className="my-3">
					<label htmlFor="purpose" className="text-white mb-1 block">
						Purpose
					</label>
					<textarea
						rows={2}
						id="purpose"
						className="resize-none w-full p-2 outline-none  border-2 border-[#333] focus:border-blue rounded-md bg-transparent text-white"
					/>
				</div>
				<div className="my-3">
					<label htmlFor="tone" className="text-white mb-1 block">
						Tone
					</label>
					<select
						name="tone"
						id="tone"
						className="w-full p-2 outline-none  border-2 border-[#333] focus:border-blue rounded-md bg-transparent text-white"
					>
						<option value="Friendly">Friendly</option>
						<option value="Professional">Professional</option>
						<option value="Worried">Worried</option>
						<option value="Rude">Rude</option>
					</select>
				</div>

				<div className="flex justify-end">
					<button
						type="submit"
						className="bg-blue text-white py-2 px-4 text-center flex mt-7 rounded-md"
					>
						Generate Email
					</button>
				</div>
			</form>
			<div className="w-[40%] px-4">
				{/* <NoResult /> */}
				<EmailCopy />
			</div>
		</div>
	);
}
