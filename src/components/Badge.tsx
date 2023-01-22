import { ReactNode } from "react";

export default function Badge({ children }: { children: ReactNode }) {
	return (
		<button className="p-1 px-3 rounded-full outline-none border text-white border-white">
			{children}
		</button>
	);
}
