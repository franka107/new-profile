import { Head, Lead, Title, Spacer, Container, A } from "../components/ui";
import {
  Twitter,
  GitHub,
  YouTube,
  LinkedIn,
  Spotify,
} from "../components/logos";
import NextLink from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frank Cary</title>
      </Head>

      <Container size="some">
        <Spacer size="xl" />

        <Title>Hello!</Title>

        <Spacer size="lg" />

        <Lead>
          I'm Frank Cary, and since 2017 I started with this software
          development path. I am currently specializing in android development
          with Kotlin.
        </Lead>
      </Container>

      <div className="mt-6 sm:hidden">
        <HomepageImage />
      </div>

      <Container size="some">
        <div className="flex items-center justify-between mt-5 text-xs font-medium text-gray-700 sm:justify-start smm:justify-center smm:text-sm lg:text-base lg:mt-8">
          <a
            href="https://www.linkedin.com/in/fcaryv/"
            className="flex items-center hover:text-gray-800 smm:px-4 sm:pl-0 sm:pr-6 lg:pr-8"
          >
            <LinkedIn className="h-4 mr-2" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.youtube.com/channel/UCNV88nuLrG-ODkthH6NuZgg"
            className="flex items-center hover:text-gray-800 smm:px-4 sm:pl-0 sm:pr-6 lg:pr-8"
          >
            <YouTube className="h-4 mr-2" />
            <span>YouTube</span>
          </a>
          <a
            href="https://github.com/franka107"
            className="flex items-center hover:text-gray-800 smm:px-4 sm:pl-0 sm:pr-6 lg:pr-8"
          >
            <GitHub className="h-4 mr-2" />
            <span>GitHub</span>
          </a>
          <a
            href="https://open.spotify.com/show/5WiXJ1IKTerBTvA7dozjcQ"
            className="flex items-center hover:text-gray-800 smm:px-4 sm:pl-0 sm:pr-6 lg:pr-8"
          >
            <Spotify className="h-4 mr-2" />
            <span>Spotify</span>
          </a>
        </div>

        <div className="hidden mt-12 sm:block">
          <HomepageImage className="rounded-lg" />
        </div>

        <div className="mt-16 md:text-lg lg:flex lg:flex-wrap lg:-mx-4">
          <div className="lg:w-1/2 lg:px-4">
            <Section>
              <SectionTitle link="/projects">Projects</SectionTitle>
              <SectionBody>
                <p>
                  I am working on a {" "}
                  <A href={"https://play.google.com/store/apps/details?id=com.satcheck.tracker"}>
                    tracker for public transport
                  </A>  in the city of Arequipa using the latest technologies of native Android development {" "}
                </p>
                <p className="mt-6">
                  I was working before on{" "}
                  <A href="https://marketplace.visualstudio.com/items?itemName=IdeasCloud.icextension">
                    IdeasCloud Setup Editor
                  </A>
                  , a VSCode extension that lets you create advanced apps like
                  backend and frontend abstracting programming language and
                  allows you to do it in JSON files.
                </p>
                <p className="mt-6">
                  I'm also working together with other developers on the{" "}
                  <A href="https://contigopecuario.com">Contigo Pecuario</A>{" "}
                  project, a web application to manage all livestock control
                  processes.
                </p>
              </SectionBody>
            </Section>
          </div>

          <div className="lg:w-1/2 lg:px-4">
            <Section>
              <SectionTitle link="/podcast">Podcast</SectionTitle>
              <SectionBody>
                <p>
                  Join my channel, guests on a weekly podcast where we chat
                  about all things code development and self-improvement!
                </p>
                <p className="mt-6">
                  <A href="https://open.spotify.com/show/5WiXJ1IKTerBTvA7dozjcQ">
                    → Check out in Spotify
                  </A>
                </p>
              </SectionBody>
            </Section>
          </div>

          {/*
          <div className="lg:w-1/2 lg:px-4">
            <Section>
              <SectionTitle link="/talks">Talks & Interviews</SectionTitle>
              <SectionBody>
                <p>
                  I've given several conference talks and talked about my open
                  source work on a few podcasts.{" "}
                  <A href="/talks">Check them out here.</A>
                </p>
              </SectionBody>
            </Section>
          </div>
          */}

          {/* <div className="lg:w-1/2 lg:px-4">
            <Section>
              <SectionTitle link="/blog">Blog</SectionTitle>
              <SectionBody>
                <p>
                  You can find my writing on <A href="/blog">my blog</A>.
                </p>
              </SectionBody>
            </Section>
          </div> */}
        </div>
      </Container>

      <div className="mt-20 md:mt-32 lg:mt-48">
        <Container size="some">
          <Title size="sm">Life</Title>
          <Lead>
            I was born in the beautiful city of Arequipa, in the country of Peru.
          </Lead>
          <Lead>
            I am currently living here and I am eager to travel and explore new countries and cities.
          </Lead>
        </Container>
      </div>

      <div>
        <div className="mx-auto mt-16 xl:max-w-6xl">
          <ImageCard
            src="https://raw.githubusercontent.com/franka107/new-profile/master/public/images/arequipa.jpg"
            title="Arequipa City"
            date="2000–Present"
            width={5567}
            height={3132}
          />
          {/* <div className="flex xl:mt-10 xl:-mx-6">
            <div className="w-1/2 xl:px-6">
              <ImageCard
                src="/images/burlington-square.jpeg"
                title="Burlington"
                date="2014–2015"
                width={2448}
                height={2448}
              />
            </div>
            <div className="w-1/2 xl:px-6">
              <ImageCard
                src="/images/boston-square.jpg"
                title="Boston"
                date="2010–2014"
                width={3456}
                height={3456}
              />
            </div>
          </div> */}
        </div>
      </div>

      <div className="mt-16" />
    </>
  );
}

function HomepageImage({ className }) {
  return (
    <img
      src="https://raw.githubusercontent.com/franka107/new-profile/master/public/images/frank.jpg"
      width={1616}
      height={1080}
      className={`${className} h-full w-full object-cover object-top`}
    />
  );
}
function Section({ children }) {
  return <section className="mt-10 md:mt-16 lg:mt-20">{children}</section>;
}

function SectionTitle({ link, children }) {
  const T = ({ children }) => (
    <h2 className="text-2xl font-semibold text-gray-900 md:text-2xl lg:text-2-5xl">
      {children}
    </h2>
  );

  if (link) {
    return (
      <NextLink href={link}>
        <a className="inline-block">
          <T>
            {children}
            <Chevron className="w-4 h-4 ml-1 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          </T>
        </a>
      </NextLink>
    );
  } else {
    return <T>{children}</T>;
  }
}

function SectionBody({ children }) {
  return <div className="mt-2 md:mt-4 lg:mt-6">{children}</div>;
}

function Chevron(props) {
  return (
    <svg
      className={`inline fill-current ${props.className}`}
      viewBox="0 0 20 20"
    >
      <g id="Page-1" stroke="none" strokeWidth="1">
        <g id="icon-shape">
          <polygon
            id="Combined-Shape"
            points="12.9497475 10.7071068 13.6568542 10 8 4.34314575 6.58578644 5.75735931 10.8284271 10 6.58578644 14.2426407 8 15.6568542 12.9497475 10.7071068"
          ></polygon>
        </g>
      </g>
    </svg>
  );
}

function ImageCard({ src, title, date, width, height }) {
  return (
    <div className="relative">
      <img
        className="object-cover w-full h-full xl:rounded-lg"
        src={src}
        width={width}
        height={height}
      />
      <div className="absolute bottom-0 w-full py-2 pl-3 text-white md:pl-4 md:py-4 bg-gradient-to-t from-black.85 xl:bg-none xl:static xl:text-gray-900 xl:px-0">
        <p className="text-sm font-semibold sm:text-base xl:text-lg xl:font-medium">
          {title}
        </p>
        <p className="text-xs sm:text-sm xl:text-gray-700">{date}</p>
      </div>
    </div>
  );
}
