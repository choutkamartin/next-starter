import { Link } from "components/Link";
import { Button } from "components/Button";

const Header = () => {
  return (
    <header className="bg-black">
      <div className="mx-auto flex max-w-5xl items-center justify-between py-6">
        <nav className="flex gap-x-8">
          <Link href="#" style="primary">
            Nav link
          </Link>
          <Link href="#" style="primary">
            Nav link
          </Link>
          <Link href="#" style="primary">
            Nav link
          </Link>
          <Link href="#" style="primary">
            Nav link
          </Link>
        </nav>
        <Button href="#" as="link" size="lg" style="primary">
          Something
        </Button>
      </div>
    </header>
  );
};

export default Header;
