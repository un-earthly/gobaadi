"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center pt-20">
      <Container size="narrow" className="text-center">
        <div className="mx-auto flex flex-col items-center gap-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
            <AlertTriangle className="h-10 w-10 text-red-500" aria-hidden />
          </div>
          <h1 className="text-3xl font-bold text-text-primary">Something went wrong</h1>
          <p className="max-w-md text-text-secondary">
            We apologize for the inconvenience. Please try again or contact our support team.
          </p>
          <Button onClick={reset}>Try Again</Button>
        </div>
      </Container>
    </div>
  );
}
