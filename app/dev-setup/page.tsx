"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Mermaid = dynamic(() => import("@/components/Mermaid"), { ssr: false });

export default function DevSetupPage() {
	return (
		<main className="flex min-h-screen flex-col items-center p-8 lg:p-24 gap-12">
			{/* Title Section */}
			<div className="flex flex-col items-center text-center gap-6 max-w-4xl w-full">
				<h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
					Dev Setup
				</h1>

				{/* Placeholder Image - Using a generic tech/abstract placeholder for now or existing logo if preferred */}
				<div className="relative w-full h-[300px] rounded-xl border border-border overflow-hidden shadow-lg">
					<Image
						src="/assets/dev-setup-banner.png"
						alt="Dev Setup Banner"
						fill
						className="object-cover"
						priority
					/>
				</div>
			</div>

			{/* Content Tabs */}
			<div className="w-full max-w-5xl">
				<Tabs defaultValue="dev-flow" className="w-full">
					<TabsList className="grid w-full grid-cols-5">
						<TabsTrigger value="dev-flow">Development Flow</TabsTrigger>
						<TabsTrigger value="tech-stack">Tech Stack</TabsTrigger>
						<TabsTrigger value="testing">Testing</TabsTrigger>
						<TabsTrigger value="cicd">CI/CD</TabsTrigger>
						<TabsTrigger value="nina-controller">Controller</TabsTrigger>
					</TabsList>

					<TabsContent value="dev-flow" className="mt-8 space-y-6">
						<div className="flex flex-col gap-4">
							<h2 className="text-2xl font-bold">Development Flow</h2>
							<p className="text-muted-foreground">
								Our development process is designed for speed and reliability,
								leveraging agentic workflows.
							</p>
							<div className="p-8 bg-transparent w-full overflow-hidden flex justify-center">
								<div className="w-full transform scale-110">
									{" "}
									{/* Make it bigger */}
									<Mermaid
										chart={`
flowchart LR
    %% Definitions
    classDef nodeStyle fill:#3b82f6,stroke:none,color:#ffffff,rx:12,ry:12,padding:20px;
    classDef mainFlow fill:#8b5cf6,stroke:none,color:#ffffff,rx:12,ry:12,padding:20px;
    classDef checkStyle fill:#f59e0b,stroke:none,color:#ffffff,rx:50,ry:50,padding:20px;
    classDef endStyle fill:#10b981,stroke:none,color:#ffffff,rx:12,ry:12,padding:20px;

    %% Nodes
    A[User Request]:::nodeStyle
    B[Planning Agent]:::mainFlow
    C{Approval?}:::checkStyle
    D[Execution Agent]:::mainFlow
    E[Verification Agent]:::mainFlow
    F{Tests Pass?}:::checkStyle
    G[Merge]:::endStyle

    %% Connections
    A --> B
    B --> C
    C -- Yes --> D
    C -- No --> B
    D --> E
    E --> F
    F -- Yes --> G
    F -- No --> D

    %% Link Styling
    linkStyle default stroke:#64748b,stroke-width:3px,fill:none;
                                    `}
									/>
								</div>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="tech-stack" className="mt-8 space-y-6">
						<div className="flex flex-col gap-4">
							<h2 className="text-2xl font-bold">Tech Stack</h2>
							<p className="text-muted-foreground">
								Built with modern, high-performance tools for maximum
								efficiency.
							</p>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
								<div className="p-6 border rounded-xl bg-card hover:shadow-lg transition-shadow">
									<h3 className="font-bold text-lg mb-2 text-blue-500">Core</h3>
									<ul className="list-disc pl-5 space-y-1 text-muted-foreground">
										<li>Next.js 16 (App Router)</li>
										<li>React 19</li>
										<li>TypeScript</li>
										<li>Bun (Runtime)</li>
									</ul>
								</div>
								<div className="p-6 border rounded-xl bg-card hover:shadow-lg transition-shadow">
									<h3 className="font-bold text-lg mb-2 text-violet-500">
										Styling & UI
									</h3>
									<ul className="list-disc pl-5 space-y-1 text-muted-foreground">
										<li>Tailwind CSS 4</li>
										<li>Shadcn UI</li>
										<li>Lucide Icons</li>
										<li>Motion (Framer)</li>
									</ul>
								</div>
								<div className="p-6 border rounded-xl bg-card hover:shadow-lg transition-shadow">
									<h3 className="font-bold text-lg mb-2 text-green-500">
										Quality & Ops
									</h3>
									<ul className="list-disc pl-5 space-y-1 text-muted-foreground">
										<li>Biome (Lint/Format)</li>
										<li>Playwright (E2E)</li>
										<li>GitHub Actions</li>
									</ul>
								</div>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="testing" className="mt-8 space-y-6">
						<div className="flex flex-col gap-4">
							<h2 className="text-2xl font-bold">Testing Strategy</h2>
							<p className="text-muted-foreground">
								We rely on comprehensive e2e testing using Playwright to ensure
								stability.
							</p>
							<div className="grid gap-4 md:grid-cols-2">
								<div className="p-6 border rounded-lg bg-card/50">
									<h3 className="font-semibold mb-2">E2E Testing</h3>
									<p className="text-sm text-muted-foreground">
										Full user flow verification running against production-like
										environments.
									</p>
								</div>
								<div className="p-6 border rounded-lg bg-card/50">
									<h3 className="font-semibold mb-2">Linting & Formatting</h3>
									<p className="text-sm text-muted-foreground">
										Biome ensures code quality and consistent styling across the
										codebase.
									</p>
								</div>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="cicd" className="mt-8 space-y-6">
						<div className="flex flex-col gap-4">
							<h2 className="text-2xl font-bold">CI/CD Pipeline</h2>
							<p className="text-muted-foreground">
								Automated pipelines for building, testing, and deploying Nina
								applications.
							</p>
							<div className="border border-border rounded-lg p-6 bg-card">
								<Mermaid
									chart={`
gitGraph
    commit
    commit
    branch develop
    checkout develop
    commit
    commit
    checkout main
    merge develop
    commit tag: "v1.0.0"
                                    `}
								/>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="nina-controller" className="mt-8 space-y-6">
						<div className="flex flex-col gap-4">
							<h2 className="text-2xl font-bold">Nina Controller</h2>
							<p className="text-muted-foreground">
								The central nervous system for managing all Nina agents and
								workflows.
							</p>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>Orchestrates agent communication</li>
								<li>Manages shared state and memory</li>
								<li>Handles user permissions and security</li>
							</ul>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</main>
	);
}
