export default function intro({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full bg-black py-24 px-4">
      <p className="mx-auto max-w-4xl text-center text-white text-xl md:text-3xl leading-relaxed">
        {children}
      </p>
    </section>
  );
}