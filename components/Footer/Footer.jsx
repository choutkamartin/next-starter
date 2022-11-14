import { Link } from "components/Link";

const links = [
  {
    name: "Links",
    children: [
      {
        name: "Index",
        href: "/",
      },
      {
        name: "Second page",
        href: "/second-page",
      },
      {
        name: "First page in group",
        href: "/about/first-page",
      },
      {
        name: "Second page in group",
        href: "/about/second-page",
      },
    ],
  },
  {
    name: "Links",
    children: [
      {
        name: "Not found",
        href: "/not-founs",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto grid max-w-7xl grid-cols-1 border-t border-black py-16 lg:grid-cols-3">
        {links.map((item, index) => {
          return (
            <div className="flex flex-col space-y-8" key={index}>
              <h2 className="text-xl font-bold uppercase tracking-widest text-black">
                {item.name}
              </h2>
              <ul className="flex flex-col space-y-4">
                {item.children.map((child, index) => {
                  return (
                    <li key={index}>
                      <Link href={child.href} as="link" style="secondary">
                        {child.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
