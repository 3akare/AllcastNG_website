export default function HeaderBody() {
  return (
    <section className="container mx-auto p-8 flex flex-col gap-12 items-center justify-center text-center">
      <h2 className="text-base tracking-wider font-normal uppercase">
        Award Winning Web Hosting
      </h2>
      <h1 className="text-6xl max-w-xl font-semibold">
        Safe House for Web Projects
      </h1>
      <p className="max-w-2xl">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
      <a
        href="#"
        className="capitalize p-4 bg-[var(--primary-blue)] text-white rounded-md"
      >
        Get Started
      </a>
    </section>
  );
}
