"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import * as React from "react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Navigation() {
	const [isOpen, setIsOpen] = React.useState(false);

	// Lock body scroll when mobile menu is open
	React.useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
				<div className="mr-4 hidden md:flex">
					<Link href="/" className="mr-6 flex items-center space-x-2">
						<span className="hidden font-bold sm:inline-block">
							Nina Laboratory
						</span>
					</Link>
					<NavigationMenu>
						<NavigationMenuList>
							{/* Desktop Navigation Items */}

							<NavigationMenuItem>
								<NavigationMenuTrigger>Apps</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										<ListItem href="/apps/call-nina" title="Call Nina">
											Voice interface for rapid interaction.
										</ListItem>
										<ListItem
											href="/apps/nina-controller"
											title="Nina Controller"
										>
											Centralized control for your agent swarm.
										</ListItem>
										<ListItem href="/apps/nina-fast" title="Nina Fast">
											High-performance processing unit.
										</ListItem>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link
										href="/dev-setup"
										className={navigationMenuTriggerStyle()}
									>
										Dev Setup
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link
										href="/who-is-nina"
										className={navigationMenuTriggerStyle()}
									>
										Who is Nina
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>

				{/* Mobile Logo centered or left if needed, here just keeping it simple */}
				<div className="flex md:hidden">
					<Link href="/" className="flex items-center space-x-2">
						<span className="font-bold">Nina Laboratory</span>
					</Link>
				</div>

				{/* Mobile Menu Toggle */}
				<button
					type="button"
					className="inline-flex items-center justify-center rounded-md p-2.5 text-foreground md:hidden"
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle menu"
				>
					{isOpen ? (
						<X className="h-6 w-6" aria-hidden="true" />
					) : (
						<Menu className="h-6 w-6" aria-hidden="true" />
					)}
				</button>
			</div>

			{/* Mobile Menu Overlay */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="border-b border-border/40 bg-background md:hidden px-4 pb-4"
					>
						<nav className="flex flex-col space-y-4 py-4">
							<div className="flex flex-col space-y-2">
								<span className="text-sm font-medium text-muted-foreground">
									Apps
								</span>
								<Link
									href="/apps/call-nina"
									className="pl-4 text-sm transition-colors hover:text-primary"
									onClick={() => setIsOpen(false)}
								>
									Call Nina
								</Link>
								<Link
									href="/apps/nina-controller"
									className="pl-4 text-sm transition-colors hover:text-primary"
									onClick={() => setIsOpen(false)}
								>
									Nina Controller
								</Link>
								<Link
									href="/apps/nina-fast"
									className="pl-4 text-sm transition-colors hover:text-primary"
									onClick={() => setIsOpen(false)}
								>
									Nina Fast
								</Link>
							</div>
							<Link
								href="/dev-setup"
								className="text-sm font-medium transition-colors hover:text-primary"
								onClick={() => setIsOpen(false)}
							>
								Dev Setup
							</Link>
							<Link
								href="/who-is-nina"
								className="text-sm font-medium transition-colors hover:text-primary"
								onClick={() => setIsOpen(false)}
							>
								Who is Nina
							</Link>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
