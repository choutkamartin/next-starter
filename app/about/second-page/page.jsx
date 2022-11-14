import { Button } from "components/Button";

const Page = () => {
  return (
    <>
      <h1 className="text-6xl font-bold">Second page in about group</h1>
      <p className="mt-8 text-lg">
        Two pages can showcase the loading animation that happens on the route
        change.
      </p>
      <Button
        as="link"
        href="/about/first-page"
        size="xl"
        style="secondary"
        className="mt-8"
      >
        Go to first page
      </Button>
    </>
  );
};

export default Page;
