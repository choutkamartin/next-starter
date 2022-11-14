import { Link } from "components/Link";

const links = [
  {
    name: "Links",
    children: [
      {
        name: "Link number 1",
        href: "#",
      },
      {
        name: "Link number 2",
        href: "#",
      },
      {
        name: "Link number 3",
        href: "#",
      },
      {
        name: "Link number 4",
        href: "#",
      },
    ],
  },
  {
    name: "Links",
    children: [
      {
        name: "Link number 1",
        href: "#",
      },
      {
        name: "Link number 2",
        href: "#",
      },
      {
        name: "Link number 3",
        href: "#",
      },
      {
        name: "Link number 4",
        href: "#",
      },
    ],
  },
  {
    name: "Links",
    children: [
      {
        name: "Link number 1",
        href: "#",
      },
      {
        name: "Link number 2",
        href: "#",
      },
      {
        name: "Link number 3",
        href: "#",
      },
      {
        name: "Link number 4",
        href: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-black py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-3">
        {links.map((item, index) => {
          return (
            <div className="flex flex-col space-y-8" key={index}>
              <h2 className="text-xl font-bold uppercase tracking-widest text-white">
                {item.name}
              </h2>
              <ul className="flex flex-col space-y-4">
                {item.children.map((child, index) => {
                  return (
                    <li key={index}>
                      <Link href={child.href}>{child.name}</Link>
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
