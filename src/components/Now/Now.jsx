const Now = () => {
  return (
    <section
      id="now"
      className="border-t border-bone/10 px-4 py-14 sm:px-8"
    >
      <h2 className="sr-only">now</h2>
      <div className="mx-auto flex max-w-2xl flex-wrap items-baseline gap-x-3 gap-y-1">
        <p className="font-mono text-sm text-slate">now — august 2026</p>
        <p className="text-lg text-bone">
          Building doodlydoo, shipping iykykprints orders.
        </p>
      </div>
    </section>
  );
};

export default Now;
