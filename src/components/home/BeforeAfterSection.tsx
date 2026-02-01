export function BeforeAfterSection() {
  const examples = [
    {
      title: "Healthy Tomatoes",
      description: "Kitchen garden tomatoes thriving with our vermicompost",
      before: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1592921870789-04563d55041c?w=400&h=300&fit=crop",
    },
    {
      title: "Lush Indoor Plants",
      description: "Money plants flourishing with organic nutrients",
      before: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=400&h=300&fit=crop",
    },
    {
      title: "Blooming Flowers",
      description: "Marigolds in full bloom with natural fertilizers",
      before: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            See the Difference
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Real results from gardeners using Mitti Shakti organic products
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {examples.map((example) => (
            <div
              key={example.title}
              className="group overflow-hidden rounded-xl bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={example.after}
                  alt={example.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Mitti Shakti Result
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {example.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {example.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
