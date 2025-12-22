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
		<main className="min-h-screen flex flex-col bg-background">
			<div className="flex-1 w-full max-w-screen-xl mx-auto px-4 py-8 md:px-8 md:py-16 space-y-16 md:space-y-24">
				{/* Intro Section */}
				<section className="flex flex-col items-center text-center gap-6 pt-8 md:pt-12 max-w-3xl mx-auto">
					<h1 className="text-4xl font-extrabold tracking-tighter lg:text-6xl text-foreground/90">
						Hey my name is Nina,
					</h1>

					<div className="relative w-40 h-40 md:w-56 md:h-56">
						<Image
							src="/nina_logo.png"
							alt="Nina Laboratory Logo"
							fill
							className="object-contain"
							priority
						/>
					</div>

					<div className="flex flex-col gap-6 items-center">
						<p className="text-lg md:text-xl text-muted-foreground">
							and I want to
						</p>
						<blockquote className="text-xl md:text-3xl font-medium text-foreground/90 italic border-l-4 border-primary pl-6 py-2 tracking-tight max-w-2xl text-left md:text-center md:border-l-0 md:border-t-0 md:pl-0">
							&quot;Create environment for fast app development, using a agentic
							approach&quot;
						</blockquote>
					</div>
				</section>

				{/* Full Story Section */}
				<section className="max-w-3xl mx-auto text-center space-y-6">
					<h2 className="text-3xl font-bold tracking-tight">Full Story</h2>
					<p className="text-base md:text-lg text-muted-foreground leading-relaxed text-left md:text-center px-2 md:px-0">
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
				<section className="w-full max-w-5xl mx-auto flex flex-col items-center gap-8 md:gap-12 pb-12">
					<h2 className="text-3xl font-bold tracking-tight">My Apps</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
						{apps.map((app) => (
							<div key={app.title} className="group h-full">
								<Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:border-primary/50 border-border/60 bg-card text-card-foreground">
									<CardHeader>
										<div className="text-primary">{app.icon}</div>
										<CardTitle className="text-xl">{app.title}</CardTitle>
									</CardHeader>
									<CardContent className="flex-1">
										<CardDescription className="text-muted-foreground text-sm md:text-base">
											{app.description}
										</CardDescription>
									</CardContent>
								</Card>
							</div>
						))}
					</div>
				</section>
			</div>

			<footer className="w-full py-8 text-center text-sm text-muted-foreground border-t border-border/40 bg-muted/20">
				<p>Nina Laboratory &copy; {new Date().getFullYear()}</p>
			</footer>
		</main>
	);
}
