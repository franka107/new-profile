import { Head, Title, Container, Lead, Spacer, A } from "../components/ui";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Frank Cary | Projects</title>
      </Head>

      <div className="pb-8">
        <Container size="some">
          <Spacer size="xl" />

          <Title>Projects</Title>

          <Spacer size="lg" />

          <Lead>
            My main project is{" "}
            <A href="https://www.facebook.com/tdevts">T-devs</A>, an enterprise
            to build software and I'm currently working on it.
          </Lead>

          <Lead>
            The rest of my time is currently spent learning about serverless
            development. In my free time, I do things out of this theme like
            deports.
          </Lead>

          <div className="md:mt-4 ">
            <div className="">
              <div className="md:flex md:-mx-4">
                <div className="mt-12 md:w-1/2 md:mx-4">
                  <a href="https://www.facebook.com/tdevts">
                    <Image
                      src="/images/projects/tdevs.png"
                      width={1776}
                      height={1000}
                      className="rounded-lg shadow-lg"
                    />
                  </a>
                </div>
                <div className="mt-12 md:w-1/2 md:mx-4">
                  <a href="https://marketplace.visualstudio.com/items?itemName=IdeasCloud.icextension">
                    <Image
                      src="/images/projects/ideascloud.png"
                      width={1000}
                      height={562}
                      className="rounded-lg shadow-lg"
                    />
                  </a>
                </div>
              </div>

              <div className="mt-16 mb-32 md:mt-24">
                <p className="text-2xl font-semibold md:text-2xl">
                  Previous work
                </p>

                <div className="flex flex-wrap mt-4 -mx-2">
                  <div className="w-full px-2 md:w-1/3">
                    <PastProjectCard href="https://ideascloud.io/setup-docs">
                      IdeasCloud Docs
                    </PastProjectCard>
                  </div>
                  {/*
                  <div className="w-full px-2 md:w-1/3">
                    <PastProjectCard href="https://embermap.github.io/ember-data-storefront/">
                      Storefront
                    </PastProjectCard>
                  </div>
                  <div className="w-full px-2 md:w-1/3">
                    <PastProjectCard href="https://github.com/embermap/ember-cli-tailwind">
                      Ember CLI Tailwind
                    </PastProjectCard>
                  </div>
                  */}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

const PastProjectCard = (props) => (
  <a
    className="flex items-center justify-center block h-24 px-4 mt-4 font-medium leading-snug text-center text-gray-600 bg-white rounded shadow hover:text-gray-700"
    href={props.href}
  >
    <p>{props.children}</p>
  </a>
);
