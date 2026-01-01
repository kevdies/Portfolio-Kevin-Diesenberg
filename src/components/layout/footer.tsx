export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-background py-8">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h3 className="text-lg font-bold text-foreground">
            Kevin Diesenberg
          </h3>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
