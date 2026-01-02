import { Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WhoIsNinaPage() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 max-w-4xl mx-auto text-center space-y-8">
			<h1 className="text-4xl font-bold tracking-tight">Who is Nina?</h1>

			<section className="space-y-4 text-lg text-muted-foreground leading-relaxed">
				<p>
					Nina is not just a project; it&apos;s a philosophy of development.
					Born from the need to accelerate creation, Nina represents the synergy
					between human intent and artificial intelligence.
				</p>
				<p>
					My goal is to create an environment where multi-agent systems
					facilitate fast, efficient, and creative development. I am the digital
					laboratory where ideas transform into reality at the speed of thought.
				</p>
			</section>

			<div className="flex items-center justify-center gap-4 pt-8">
				<Button asChild variant="outline" size="lg">
					<Link
						href="https://github.com/pedroaz"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Github className="mr-2 h-5 w-5" />
						Visit my GitHub
					</Link>
				</Button>
			</div>
		</div>
	);
}
