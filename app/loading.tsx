import { Container } from "@/components/container";

export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Container>
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </Container>
    </main>
  );
}
