import { Link } from "components/Link";
import { Button } from "components/Button";

const links = [
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
  {
    name: "Not found",
    href: "/not-found",
  },
];

const Header = () => {
  return (
    <header className="bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-6">
        <div className="">
          <div className="text-xl font-bold uppercase tracking-widest text-white">
            Next.js 13
          </div>
          <span className="text-white">Starter pack</span>
        </div>
        <nav className="flex gap-x-8">
          {links.map((item, index) => {
            return (
              <Link href={item.href} style="primary" key={index}>
                {item.name}
              </Link>
            );
          })}
        </nav>
        <Button href="/second-page" as="link" size="xl" style="primary">
          Something
        </Button>
      </div>
    </header>
  );
};

export default Header;
