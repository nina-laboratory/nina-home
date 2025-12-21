import { Gamepad2, Phone, Zap } from "lucide-react";
import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

// App data structure
const apps = [
	{
		title: "Call Nina",
		description: "Voice interface for rapid interaction.",
		icon: <Phone className="w-10 h-10 mb-4" />,
	},
	{
		title: "Nina Controller",
		description: "Centralized control for your agent swarm.",
		icon: <Gamepad2 className="w-10 h-10 mb-4" />,
	},
	{
		title: "Nina Fast",
		description: "High-performance processing unit.",
		icon: <Zap className="w-10 h-10 mb-4" />,
	},
];

export default function Home() {
	return (
		<main className="min-h-screen bg-background flex flex-col">
			<div className="flex-1 flex flex-col items-center justify-center p-8 gap-16">
				{/* Intro Section */}
				<div className="flex flex-col items-center text-center gap-6 max-w-2xl">
					<h1 className="text-4xl font-extrabold tracking-tighter lg:text-5xl text-foreground/90">
						Hey my name is Nina,
					</h1>

					<div className="relative w-40 h-40">
						<Image
							src="/nina_logo.png"
							alt="Nina Laboratory Logo"
							fill
							className="object-contain"
							priority
						/>
					</div>

					<div className="flex flex-col gap-4">
						<p className="text-lg text-muted-foreground">My goal is</p>
						<blockquote className="text-2xl md:text-3xl font-medium text-foreground/90 italic border-l-4 border-primary pl-6 py-2 tracking-tight">
							&quot;Create environment for fast app development, using a multi
							agent setup&quot;
						</blockquote>
					</div>
				</div>

				{/* Full Story Section */}
				<section className="max-w-3xl text-center space-y-4">
					<h2 className="text-3xl font-bold">Full Story</h2>
					<p className="text-lg text-muted-foreground leading-relaxed">
						Hey, my name is actually{" "}
						<a
							href="https://pedroaz.de"
							target="_blank"
							rel="noopener noreferrer"
							className="font-medium text-foreground hover:text-primary underline underline-offset-4 transition-colors"
						>
							Pedro Azevedo
						</a>
						, Nina is actually my&nbsp;
						<a
							href="/who-is-nina"
							className="font-medium text-foreground hover:text-primary underline underline-offset-4 transition-colors"
						>
							dog
						</a>
						, but this is her lab.
						<br />
						<br />I was always a person that created several apps to make my
						life easier. But after a while I always stopped using them, because
						they were hard to add new features and to maintain.
						<br />
						<br />
						This is why I created Nina, a Development setup that makes my
						applications easier to develop, test and deploy.
						<br />
						<br />
						It provides a save environment for LLMs to work, leaveraging fast
						build, tests and iteration. Maximaxing feature deliveries with high
						confidence.
					</p>
				</section>

				{/* Apps Section */}
				<section className="w-full max-w-5xl flex flex-col items-center gap-8">
					<h2 className="text-3xl font-bold">My Apps</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
						{apps.map((app) => (
							<div key={app.title} className="group perspective-1000">
								<Card className="h-full transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-primary/50 border-border/60 bg-card text-card-foreground">
									<CardHeader>
										<div className="text-primary">{app.icon}</div>
										<CardTitle className="text-xl">{app.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<CardDescription className="text-muted-foreground">
											{app.description}
										</CardDescription>
									</CardContent>
								</Card>
							</div>
						))}
					</div>
				</section>
			</div>

			<footer className="w-full py-6 text-center text-sm text-muted-foreground">
				Nina Laboratory &copy; {new Date().getFullYear()}
			</footer>
		</main>
	);
}
