export default function HeaderBody() {
  return (
    <section className="w-screen flex items-center justify-center h-[90vh]">
      <div className="container mx-auto p-8 flex flex-col gap-12 items-center justify-center text-center">
        <h2 className="text-sm tracking-wider font-normal uppercase">
          Award Winning Web Hosting
        </h2>
        <h1 className="text-6xl max-w-xl font-semibold">
          Safe House for Web Projects
        </h1>
        <p className="max-w-2xl">
          Reliable and secure hosting solutions for your websites and
          applications. Our state-of-the-art infrastructure ensures optimal
          performance, scalability, and peace of mind for your online ventures.
        </p>
        <a
          href="#"
          className="capitalize p-4 bg-[var(--primary-blue)] text-white rounded-md"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
