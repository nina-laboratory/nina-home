"use client";

import mermaid from "mermaid";
import { useEffect, useRef } from "react";

mermaid.initialize({
	startOnLoad: false,
	theme: "base",
	securityLevel: "loose",
	themeVariables: {
		fontFamily: "var(--font-satoshi)",
		primaryColor: "#00000000",
		primaryTextColor: "hsl(222.2 47.4% 11.2%)", // Dark text for contrast on light mode or general happy vibe
		primaryBorderColor: "hsl(217.2 32.6% 17.5%)",
		lineColor: "hsl(217.2 32.6% 17.5%)", // Darker line for visibility
		secondaryColor: "#00000000",
		tertiaryColor: "#00000000",
		background: "transparent",
		mainBkg: "transparent",
		nodeBorder: "transparent", // Clean look
		clusterBkg: "transparent",
		clusterBorder: "transparent",
		defaultLinkColor: "hsl(217.2 32.6% 17.5%)",
		edgeLabelBackground: "#ffffff",
	},
	flowchart: {
		curve: "basis", // Smooth curves
		htmlLabels: true,
	},
});

interface MermaidProps {
	chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref.current) {
			mermaid.contentLoaded();
			// Unique ID for each render to avoid conflicts
			const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
			mermaid.render(id, chart).then((result) => {
				if (ref.current) {
					ref.current.innerHTML = result.svg;
				}
			});
		}
	}, [chart]);

	return (
		<div className="w-full flex justify-center py-4 overflow-x-auto">
			<div ref={ref} className="mermaid" />
		</div>
	);
}
