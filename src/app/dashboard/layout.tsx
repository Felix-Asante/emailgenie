import Logo from "@/components/Logo";
import {
	AdjustmentsHorizontalIcon,
	ArrowLeftOnRectangleIcon,
	ClipboardDocumentIcon,
	ClipboardDocumentListIcon,
	PlusCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { ReactNode } from "react";
import DashboardHeader from "./Header";
export default function Layout({ children }: { children: ReactNode }) {
	return (
		<main>
			<div className="grid grid-cols-[20%,80%]">
				<aside className=" bg-[#34363a] h-screen sticky left-0 top-0 ">
					<div className="flex flex-col justify-between h-full">
						<div className="py-6">
							<div className="pl-6 mb-3">
								<Logo width="150" />
							</div>
							<div className="mt-4">
								<button className="flex items-center gap-2 py-2 px-4 ml-6 bg-blue border-0 outline-none rounded-md text-white my-4">
									<PlusCircleIcon width={18} /> New Project
								</button>
								<button className="text-white flex items-center gap-2 mt-2 rounded-sm hover:bg-[#2C2C2C] p-2 pl-6 w-full">
									<ClipboardDocumentIcon width={18} />
									<Link href="/dashboard/projects">Projects</Link>
								</button>
								<button className="text-white flex items-center gap-2 mt-2 rounded-sm hover:bg-[#2C2C2C] p-2 pl-6 w-full">
									<ClipboardDocumentListIcon width={18} />
									<Link href="/dashboard/templates">Templates</Link>
								</button>
								<button className="text-white flex items-center gap-2 mt-2 rounded-sm hover:bg-[#2C2C2C] p-2 pl-6 w-full">
									<AdjustmentsHorizontalIcon width={18} />
									<Link href="/dashboard/tools">Tools</Link>
								</button>
							</div>
						</div>
						<div className="py-5 border-t border-t-gray-600 pl-7">
							<button className="flex items-center gap-1 text-white">
								<ArrowLeftOnRectangleIcon width={18} />
								Logout
							</button>
						</div>
					</div>
				</aside>
				<div>
					<DashboardHeader />
					{children}
				</div>
			</div>
		</main>
	);
}
