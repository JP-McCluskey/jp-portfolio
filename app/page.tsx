import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import Link from "next/link";
import ContactForm from "./components/contact-form";
import ProjectCard from "./components/project-card";
import TechStack from "./components/tech-stack";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

export default function Page() {
	return (
		<div className="min-h-screen bg-background">
			<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex h-16 items-center justify-between">
						<div className="flex items-center">
							<Link className="flex items-center space-x-2" href="/">
								<span className="font-bold text-lg">JP McCluskey</span>
							</Link>
							<nav className="hidden md:ml-6 md:flex md:space-x-8">
								<Link
									href="#about"
									className="text-sm font-medium transition-colors hover:text-primary"
								>
									About
								</Link>
								<Link
									href="#projects"
									className="text-sm font-medium transition-colors hover:text-primary"
								>
									Projects
								</Link>
								<Link
									href="#contact"
									className="text-sm font-medium transition-colors hover:text-primary"
								>
									Contact
								</Link>
							</nav>
						</div>
						<div className="flex items-center">
							<a
								href="https://docs.google.com/document/d/1q60Thejw8TiBcO3ANdMSLdbZ6uWL5sW_SDhm091jg_g/edit?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
								className="hidden md:inline-flex"
							>
								<Button variant="outline">Resume</Button>
							</a>
							<Sheet>
								<SheetTrigger asChild>
									<Button variant="ghost" size="icon" className="md:hidden">
										<Menu className="h-5 w-5" />
										<span className="sr-only">Toggle menu</span>
									</Button>
								</SheetTrigger>
								<SheetContent side="right">
									<SheetHeader>
										<SheetTitle>Menu</SheetTitle>
										<SheetDescription>
											Navigate through JP McCluskey's portfolio
										</SheetDescription>
									</SheetHeader>
									<nav className="flex flex-col space-y-4 mt-4">
										<Link
											href="#about"
											className="text-sm font-medium transition-colors hover:text-primary"
										>
											About
										</Link>
										<Link
											href="#projects"
											className="text-sm font-medium transition-colors hover:text-primary"
										>
											Projects
										</Link>
										<Link
											href="#contact"
											className="text-sm font-medium transition-colors hover:text-primary"
										>
											Contact
										</Link>
										<a
											href="https://docs.google.com/document/d/1q60Thejw8TiBcO3ANdMSLdbZ6uWL5sW_SDhm091jg_g/edit?usp=sharing"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Button variant="outline" className="w-full">
												Resume
											</Button>
										</a>
									</nav>
								</SheetContent>
							</Sheet>
						</div>
					</div>
				</div>
			</header>

			<main className="container px-4 md:px-6">
				<section id="about" className="py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
									Jean-Philippe McCluskey
								</h1>
								<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
									Full Stack Software Engineer with a passion for creating
									innovative and efficient solutions. Based in Canada, I bring a
									diverse background and a unique blend of technical and
									leadership expertise. With a Bachelor's degree in Computer
									Engineering from Queen's University and years of professional
									experience, I specialize in JavaScript (React/TypeScript), Go,
									GraphQL, SQL, and more. My journey has taken me from
									developing full-stack applications for startups like Tread and
									Javelin Sports to leading groups on adventurous expeditions
									across Canada and Europe with Backroads, ALIVE Outdoors, and
									Camp Temagami.
								</p>
							</div>
							<div className="space-x-4">
								<Link href="https://github.com/JP-McCluskey" target="_blank">
									<Button variant="outline" size="icon">
										<Github className="h-4 w-4" />
										<span className="sr-only">GitHub</span>
									</Button>
								</Link>
								<Link
									href="https://www.linkedin.com/in/jeanphilippemccluskey/"
									target="_blank"
								>
									<Button variant="outline" size="icon">
										<Linkedin className="h-4 w-4" />
										<span className="sr-only">LinkedIn</span>
									</Button>
								</Link>
								<a href="mailto:jeanphilippe.mccluskey@gmail.com">
									<Button variant="outline" size="icon">
										<Mail className="h-4 w-4" />
										<span className="sr-only">Email</span>
									</Button>
								</a>
							</div>
						</div>
					</div>
				</section>

				<section id="projects" className="py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
							Projects
						</h2>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							<ProjectCard
								title="Sproutify App"
								description="A full-stack house plant tracking platform built with Typescript.js, Supabase and PlantNet API."
								image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-26%20at%2010.26.58%E2%80%AFAM-95ve2nmC2LZNGmR0tnrGnpfGpg2ttH.png"
								link="https://github.com/JP-McCluskey/Sproutify"
								tags={[
									"Typescript",
									"Tailwind CSS",
									"React Hook Form",
									"Zod validation",
									"PostgreSQL",
									"Row Level Security (RLS)",
								]}
							/>
							<ProjectCard
								title="Tattoo Booker"
								description="A comprehensive booking platform for tattoo artists and cosmetic services, featuring real-time availability and secure payments."
								image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-27%20at%2012.11.45%E2%80%AFPM-iRyYQdYpkGdnZShzUeyYerMy4n6eHZ.png"
								link="https://github.com/JP-McCluskey/TattooBooker"
								tags={["Typescript", "Node.js", "PostgreSQL", "Netlify"]}
							/>
							<ProjectCard
								title="Google Doc Table Scraper"
								description="A React application that scrapes tables from Google Docs and visualizes the data in both tabular and coordinate plane formats."
								image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-23%20at%204.36.39%E2%80%AFPM-ahdpPXwg8Okuaj3TxGiahfbFcTnkmT.png"
								link="https://github.com/JP-McCluskey/GoogleDocTableScraper"
								tags={["React", "TypeScript", "TailwindCSS"]}
							/>
						</div>
					</div>
				</section>

				<section className="py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
							Tech Stack
						</h2>
						<TechStack />
					</div>
				</section>

				<section id="contact" className="py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="mx-auto max-w-2xl">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
								Get in Touch
							</h2>
							<ContactForm />
						</div>
					</div>
				</section>
			</main>

			<footer className="border-t">
				<div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
					<p className="text-xs text-gray-500 dark:text-gray-400">
						© 2025 LuskeyLabs. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
