import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center pt-20">
      <Container size="narrow" className="text-center">
        <div className="mx-auto flex flex-col items-center gap-6">
          <span className="text-8xl font-bold text-brand-primary/20 md:text-9xl">404</span>
          <h1 className="text-3xl font-bold text-text-primary md:text-4xl">Page Not Found</h1>
          <p className="max-w-md text-text-secondary">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
          <Link href="/">
            <Button>
              <Home className="h-4 w-4" aria-hidden />
              Back to Home
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
