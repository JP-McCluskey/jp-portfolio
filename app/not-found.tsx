import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
			<h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
			<p className="text-muted-foreground mb-6 max-w-md">
				The page you're looking for doesn't exist or has been moved.
			</p>
			<Button asChild>
				<Link href="/">Return Home</Link>
			</Button>
		</div>
	);
}
