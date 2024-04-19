export default function Body() {
  const list = [1, 2, 3];
  return (
    <main>
      <section className="container mx-auto p-8 py-12">
        {/* what is section */}
        <section className="w-full flex flex-col items-center justify-center gap-12 text-center mb-32">
          <img
            src="src/assets/images/What-is-Section.png"
            alt=""
            className="w-full max-w-lg"
          />
          <h1 className="text-5xl">
            What is <span className="font-bold">Allcast</span>?
          </h1>
          <p className="max-w-2xl text-[var(--text-grey)]">
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis.
          </p>
        </section>
        <section className="flex flex-col items-center justify-center gap-8 [&>*:nth-child(2)]:shadow-lg [&>*:nth-child(2)]:p-4  lg:flex-row mb-32">
          {list.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center gap-8 h-fit w-full max-w-lg lg:max-w-xs"
              >
                <img
                  src="src/assets/images/cloud-infrastructure.png"
                  alt=""
                  className="size-24"
                />
                <h1 className="text-xl">Cloud Infrastructure</h1>
                <p className="text-base text-[var(--text-grey)] max-w-md">
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip commodo.
                </p>
                <a href="#" className="capitalize text-[var(--primary-blue)]">
                  Read More
                </a>
              </div>
            );
          })}
        </section>
      </section>
      {/* Competitive Pricing */}
      <section className="w-full flex flex-col items-center justify-center gap-12 text-center bg-[var(--primary-grey)] p-8 py-12">
        <h1 className="text-5xl">
          <span className="font-bold">Competitive</span> Pricing
        </h1>
        <p className="max-w-2xl">
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis.
        </p>
        <div className="flex flex-col items-center justify-center gap-8 [&>*:nth-child(2)]:shadow-lg [&>*:nth-child(2)]:p-4  lg:flex-row mb-32">
          {list.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center gap-8 h-fit w-full max-w-lg lg:max-w-xs bg-white p-2 rounded-md"
              >
                <h1 className="text-xl uppercase font-bold">StartUp</h1>
                <h2 className="font-bold text-4xl">$3.95/mo.</h2>
                <p>Best Selling Plan</p>
                <hr className="w-full" />
                <ul className="">
                  <li className="capitalize">One website</li>
                  <li className="capitalize">10GB Web Space</li>
                  <li className="capitalize"> Unlimited</li>
                  <li className="capitalize">SSL certificate</li>
                  <li className="capitalize">Shared Resources</li>
                </ul>
                <div className="text-base h-[0.5px] max-w-md opacity-0">
                  This is an easter egg. David Bakare is the creator of this
                  site. Find me at https://github.com/3akare
                </div>
                <a
                  href="#"
                  className="capitalize p-4 bg-[var(--primary-blue)] text-white rounded-md"
                >
                  Read More
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
