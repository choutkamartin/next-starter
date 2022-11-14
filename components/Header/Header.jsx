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
    <header className="px-4">
      <div className="mx-auto flex max-w-7xl flex-col flex-wrap lg:items-center justify-between gap-8 border-b border-black py-6 lg:flex-row">
        <div className="text-black">
          <div className="text-xl font-bold uppercase tracking-widest">
            Next.js 13
          </div>
          <span>Starter pack</span>
        </div>
        <nav className="flex flex-col gap-4 lg:flex-row">
          {links.map((item, index) => {
            return (
              <Link href={item.href} style="secondary" as="link" key={index}>
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
