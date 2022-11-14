import { Button } from "components/Button";

const Page = () => {
  return (
    <>
      <h1 className="text-6xl font-bold">Hi, this is Next.js 13!</h1>
      <p className="mt-8 text-lg">
        This little website is a starter project to showcase all the new things
        new version of Next.js has to offer.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button
          as="link"
          href="/second-page"
          size="xl"
          style="secondary"
          className="mt-2"
        >
          Second page
        </Button>
        <Button
          as="link"
          href="/not-found"
          size="xl"
          style="secondary"
          className="mt-2"
        >
          This will invoke a notFound function
        </Button>
      </div>
      <div className="prose  mt-4">
        <pre>
          <code>'use client';</code>
        </pre>
      </div>
    </>
  );
};

export default Page;
