import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-between py-24 px-8 bg-zinc-50 text-zinc-950 font-sans">
			{/* Header */}
			<div className="flex flex-row items-center gap-4">
				<Image
					src="/nina_logo.png"
					alt="Nina Laboratory Logo"
					width={120}
					height={120}
					className="object-contain"
				/>
				<div className="flex flex-col">
					<h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl leading-none">
						Nina
					</h1>
					<h2 className="text-2xl font-bold text-zinc-700 leading-none">
						Laboratory
					</h2>
					<p className="text-xs text-zinc-500 mt-1">
						created by{" "}
						<a
							href="https://github.com/pedroaz/"
							className="underline underline-offset-2 hover:text-zinc-950 transition-colors"
							target="_blank"
							rel="noopener noreferrer"
						>
							@pedroaz
						</a>
					</p>
				</div>
			</div>

			{/* Main Content - Cards */}
			{/* <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 max-w-7xl w-full my-12">
				<WobbleCard containerClassName="col-span-1 min-h-[300px] bg-pink-800">
					<div className="max-w-xs">
						<h2 className="text-left text-balance text-3xl font-bold tracking-tight text-white">
							Call Nina
						</h2>
						<p className="mt-4 text-left text-lg text-zinc-100/90">
							Direct voice communication interface.
						</p>
					</div>
				</WobbleCard>
				<WobbleCard containerClassName="col-span-1 min-h-[300px] bg-indigo-800">
					<div className="max-w-xs">
						<h2 className="text-left text-balance text-3xl font-bold tracking-tight text-white">
							Nina Controller
						</h2>
						<p className="mt-4 text-left text-lg text-zinc-100/90">
							Centralized management system.
						</p>
					</div>
				</WobbleCard>
				<WobbleCard containerClassName="col-span-1 min-h-[300px] bg-blue-900">
					<div className="max-w-xs">
						<h2 className="text-left text-balance text-3xl font-bold tracking-tight text-white">
							Nina Fast
						</h2>
						<p className="mt-4 text-left text-lg text-zinc-100/90">
							High-performance processing unit.
						</p>
					</div>
				</WobbleCard>
			</div> */}

			{/* Footer */}
			{/* <div className="flex justify-center w-full">
				<Button size="lg" variant="outline" className="text-base px-8">
					CV
				</Button>
			</div> */}
		</div>
	);
}
