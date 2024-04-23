import Header from "./Header";

export default function Body() {
  const valuePro = [
    {
      title: "Cloud Infrastructure",
      content:
        "Leverage the power and flexibility of cloud computing with Allcast's robust cloud infrastructure. Our cloud hosting solutions provide scalable resources, high availability, and seamless integration with popular cloud platforms, ensuring your applications can grow and adapt to changing demands effortlessly.",
      href: "#",
      imgSrc: "assets/images/cloud-computing.svg",
    },
    {
      title: "cPanel Management",
      content:
        "Simplify website and server management with Allcast's intuitive cPanel control panel. From creating email accounts and managing databases to installing applications and monitoring resource usage, cPanel empowers you with a user-friendly interface and a vast array of tools at your fingertips.",
      href: "#",
      imgSrc: "assets/images/cpanel-color.svg",
    },
    {
      title: "Unlimited Domains",
      content:
        "With Allcast's unlimited domain hosting, you can host multiple websites and online projects on a single account, without any limitations. This cost-effective solution allows you to manage and expand your online presence with ease, catering to the needs of businesses, developers, and individuals alike.",
      href: "#",
      imgSrc: "assets/images/world.svg",
    },
  ];

  const pricingList = [
    {
      title: "startup",
      price: "$3.95/mo.",
      description: "for small business",
      items: [
        "one website",
        "10GB web space",
        "unlimited traffic",
        "ssl certificate",
        "shared resources",
      ],
    },
    {
      title: "grow big",
      price: "$6.45/mo.",
      description: "our Best Selling Plan",
      items: [
        "multiple website",
        "20GB web space",
        "unlimited traffic",
        "ssl certificate",
        "2x more resources",
      ],
    },
    {
      title: "go geek",
      price: "$11.95/mo.",
      description: "Great for enthusiasts",
      items: [
        "multiple website",
        "40GB web space",
        "unlimited traffic",
        "ssl certificate",
        "5x more resources",
      ],
    },
  ];
  return (
    <>
      <Header />
      <main>
        <section className="container mx-auto p-8 py-12 mb-32">
          {/* what is section */}
          <section className="w-full flex flex-col items-center justify-center gap-12 text-center mb-32">
            <img
              src="assets/images/what_is_section.jpg"
              alt=""
              loading="lazy"
              className="w-full max-w-lg rounded-md"
            />
            <h1 className="text-5xl">
              What is <span className="font-bold">Allcast</span>?
            </h1>
            <p className="max-w-2xl text-[var(--text-grey)]">
              Allcast is a web hosting platform offering high-performance,
              secure solutions. Its state-of-the-art infrastructure ensures
              optimal resource allocation and rapid data processing, allowing
              websites and applications to run seamlessly during peak traffic.
              Advanced security measures, including firewalls, vulnerability
              scanning, and robust backup systems, safeguard online ventures.
              Allcast's user-friendly control panel, comprehensive
              knowledgebase, and 24/7 support from skilled professionals
              demonstrate its commitment to customer satisfaction. With a focus
              on performance, security, and user experience, Allcast redefines
              industry standards.
            </p>
          </section>
          <section className="flex flex-col items-center justify-center gap-8 [&>*:nth-child(2)]:shadow-lg [&>*:nth-child(2)]:p-4  lg:flex-row mb-32">
            {valuePro.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-center gap-8 h-fit w-full max-w-lg lg:max-w-xs"
                >
                  <img src={item.imgSrc} alt="" className="size-20" />
                  <h1 className="text-xl">{item.title}</h1>
                  <p className="text-base text-[var(--text-grey)] max-w-md px-4">
                    {item.content}
                  </p>
                  <a
                    href={item.href}
                    className="capitalize text-[var(--primary-blue)]"
                  >
                    Read More
                  </a>
                </div>
              );
            })}
          </section>
        </section>
        {/* Competitive Pricing */}
        <section className="w-full flex flex-col items-center justify-center gap-12 text-center bg-[var(--primary-grey)] p-8 py-12 mb-32">
          <img
            src="assets/images/pricing-icon.svg"
            alt=""
            className="size-20"
          />
          <h1 className="text-5xl">
            <span className="font-bold">Competitive</span> Pricing
          </h1>
          <p className="max-w-2xl">
            At Allcast, we understand the importance of affordability without
            compromising on quality. Our pricing plans are designed to be
            competitive, offering exceptional value for your investment. Whether
            you're an individual, a small business, or a large enterprise, we
            have cost-effective solutions tailored to meet your specific
            requirements and budget. Experience top-notch web hosting services
            without breaking the bank, thanks to Allcast's commitment to
            delivering unbeatable prices in the industry.
          </p>
          <div className="flex flex-col items-center justify-center gap-8 [&>*:nth-child(2)]:shadow-lg [&>*:nth-child(2)]:p-4 [&>*:nth-child(2)]:py-8 [&>*:nth-child(2)]:bg-[var(--primary-blue)] [&>*:nth-child(2)]:!text-white  lg:flex-row mb-32">
            {pricingList.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-center gap-8 h-fit w-full max-w-lg lg:max-w-xs bg-white p-2 py-4 rounded-md"
                >
                  <h1 className="text-xl uppercase font-bold">{item.title}</h1>
                  <h2
                    className={
                      idx % 2 != 0
                        ? "font-bold text-4xl text-white"
                        : "font-bold text-4xl text-[var(--primary-blue)]"
                    }
                  >
                    {item.price}
                  </h2>
                  <p className="capitalize">{item.description}</p>
                  <hr className="w-full" />
                  <ul className="">
                    {item.items.map((item1, idx1) => {
                      return (
                        <li key={idx1} className="capitalize">
                          {item1}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="text-base h-[0.5px] max-w-md opacity-0">
                    This is an easter egg. David Bakare is the creator of this
                    site. Find me at https://github.com/3akare
                  </div>
                  <a
                    href="#"
                    className={
                      idx % 2 != 0
                        ? "capitalize p-4 bg-white text-[var(--primary-blue)] font-bold rounded-md"
                        : "capitalize p-4 bg-[var(--primary-blue)] text-white rounded-md"
                    }
                  >
                    Read More
                  </a>
                </div>
              );
            })}
          </div>
        </section>
        <section className="w-full flex flex-col items-center justify-center gap-12 text-center p-8 py-12 mb-32">
          <img src="assets/images/mail.svg" alt="" className="size-20" />
          <h1 className="text-5xl">
            <span className="font-bold">Contact</span> Us
          </h1>
          <p className="max-w-2xl">
            Have a question or need assistance? Get in touch with our
            knowledgeable support team via email or our online support portal.
            We're committed to promptly addressing your inquiries and ensuring a
            seamless web hosting experience with Allcast.
          </p>
          <form className="w-full flex flex-col justify-center items-center gap-8">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required={true}
              className="border-2 border-[var(--primary-grey)] border-solid w-full max-w-2xl p-2 indent-2 rounded-md focus:outline-none"
            />
            <textarea
              required={true}
              name="message-text"
              id="message-text"
              cols="20"
              rows="10"
              placeholder="Message"
              className="border-2 border-[var(--primary-grey)] border-solid w-full max-w-2xl p-2 indent-2 rounded-md focus:outline-none"
            />
            <button className="p-4 bg-[var(--primary-blue)] text-white rounded-md">
              Send Message
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
