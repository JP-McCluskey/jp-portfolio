"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface ErrorBoundaryProps {
	children: React.ReactNode;
	fallback?: React.ReactNode;
}

export default function ErrorBoundary({
	children,
	fallback,
}: ErrorBoundaryProps) {
	const [hasError, setHasError] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const errorHandler = (error: ErrorEvent) => {
			console.error("Caught in error boundary:", error);
			setError(error.error);
			setHasError(true);
		};

		window.addEventListener("error", errorHandler);

		return () => {
			window.removeEventListener("error", errorHandler);
		};
	}, []);

	if (hasError) {
		return (
			fallback || (
				<div className="p-6 border rounded-lg bg-muted/10 my-4">
					<h3 className="text-lg font-medium mb-2">Something went wrong</h3>
					<p className="text-sm text-muted-foreground mb-4">
						{error?.message || "An unexpected error occurred"}
					</p>
					<Button
						variant="outline"
						size="sm"
						onClick={() => setHasError(false)}
					>
						Try again
					</Button>
				</div>
			)
		);
	}

	return children;
}
