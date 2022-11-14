import { Button } from "components/Button";

const Page = () => {
  return (
    <>
      <h1 className="text-6xl font-bold">First page in about group</h1>
      <p className="mt-8 text-lg">
        Two pages can showcase the loading animation that happens on the route
        change.
      </p>
      <Button
        as="link"
        href="/about/second-page"
        size="xl"
        style="secondary"
        className="mt-8"
      >
        Go to second page
      </Button>
    </>
  );
};

export default Page;
