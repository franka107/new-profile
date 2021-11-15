import { Head, A, Spacer, Lead, Container, Title } from "../components/ui";
import Image from "next/image";

export default function TalksPage() {
  return (
    <>
      <Head>
        <title>Frank Cary | Contact</title>
      </Head>

      <div className="md:text-lg-">
        <Container size="some">
          <Spacer size="xl" />

          <Title>Contact</Title>

          <Spacer size="lg" />

          <Lead>
            <A href="mailto:fcaryv@gmail.com">Contact me</A> if you think I can
            help you with something!
          </Lead>

          {/* 
          <div className="lg:flex lg:flex-wrap lg:-mx-4">
            {talks.map((talk) => (
              <div
                className="mt-12 md:mt-16 lg:mt-20 lg:w-1/2 lg:px-4"
                key={talk.url}
              >
                <Talk talk={talk} />
              </div>
            ))}
          </div>
          */}

          {/*

          <div className="mt-20 mb-32 md:mt-32">
            <Title>Interviews</Title>

            <div className="grid w-2/3 grid-cols-1 gap-16 mx-auto mt-16 md:gap-x-6 lg:gap-x-8 md:w-full md:grid-cols-2 lg:grid-cols-3">
              {interviews.map((interview) => (
                <div key={interview.url}>
                  <Interview interview={interview} />
                </div>
              ))}
            </div>
          </div>
          */}
        </Container>
      </div>
    </>
  );
}

const Talk = ({ talk }) => {
  return (
    <>
      <a href={talk.url} className="block">
        <Image
          src={talk.image}
          width={talk.imageWidth}
          height={talk.imageHeight}
          className="max-w-full rounded-lg"
        />
      </a>
      <div className="leading-snug">
        <p className="mt-3 text-sm font-semibold text-gray-500 md:text-base lg:text-sm">
          {talk.presentedAt}
        </p>
        <p className="text-lg font-semibold md:text-2xl lg:text-xl lg:mt-1">
          <a href={talk.url}>{talk.title}</a>
        </p>
      </div>
    </>
  );
};

const Interview = ({ interview }) => {
  return (
    <>
      <div>
        <a href={interview.url} className="block shadow">
          <Image
            src={interview.image}
            width={interview.imageWidth}
            height={interview.imageHeight}
          />
        </a>
      </div>
      <div className="leading-snug">
        <p className="mt-3 text-sm font-semibold text-gray-500">
          {interview.byline}
        </p>
        <p className="mt-1 text-lg font-semibold">
          <a href={interview.url}>{interview.title}</a>
        </p>
      </div>
    </>
  );
};

const talks = [
  {
    title: "Stop Coding: You Have a Product Gap",
    presentedAt: "EmberCamp 2018",
    image: "/images/talks/embercamp2018.png",
    imageWidth: 3360,
    imageHeight: 1890,
    url: "https://www.youtube.com/watch?v=dWu2PxfFcUI",
  },
  {
    title: "Better Documentation with AddonDocs",
    presentedAt: "EmberConf 2018",
    image: "/images/talks/emberconf2018.png",
    imageWidth: 3360,
    imageHeight: 1890,
    url: "https://www.youtube.com/watch?v=PVzutIELrf4",
  },
  {
    title: "Common Principles of UI Development",
    presentedAt: "Manhattan JS, May 2017",
    image: "/images/talks/uipatterns2017.png",
    imageWidth: 3360,
    imageHeight: 1890,
    url: "https://www.slideshare.net/samselikoff/common-ui-patterns",
  },
  {
    title: "Deploying Ember Apps",
    presentedAt: "Ember NYC, January 2015",
    image: "/images/talks/embernyc2015.png",
    imageWidth: 3345,
    imageHeight: 1882,
    url: "https://youtu.be/nvB8iAwc2QQ?t=4560",
  },
  {
    title: "Bring Sanity to your Frontend Infrastucture with Ember JS",
    presentedAt: "EmberConf 2015",
    image: "/images/talks/emberconf2015.png",
    imageWidth: 3360,
    imageHeight: 1890,
    url: "https://www.youtube.com/watch?v=iwPsNTkyCcA",
  },
  {
    title: "Using D3 with Backbone, Angular and Ember",
    presentedAt: "OpenVis Conf 2014",
    image: "/images/talks/openvisconf2014.png",
    imageWidth: 3360,
    imageHeight: 1890,
    url: "https://www.youtube.com/watch?v=ca3pQWc2-Xs",
  },
  {
    title: "Introduction to D3",
    presentedAt: "Analytics BigData Cloud & Discovery Meetup, February 2014",
    image: "/images/talks/introtod32014.png",
    imageWidth: 2345,
    imageHeight: 1319,
    url: "https://www.youtube.com/watch?v=kFCDA1uzGFo",
  },
];

const interviews = [
  {
    url: "https://reactpodcast.simplecast.com/episodes/110",
    image: "/images/interviews/react-podcast.jpg",
    imageWidth: 600,
    imageHeight: 600,
    byline: "React Podcast #110",
    title: "Sam Selikoff on Finding a Full Stack React",
  },
  {
    url: "http://www.fullstackradio.com/133",
    image: "/images/interviews/fullstackradio.jpg",
    imageWidth: 700,
    imageHeight: 700,
    byline: "Full Stack Radio #133",
    title: "Sam Selikoff - Building Production-Ready SPAs Fast with Mirage.js",
  },
  {
    url: "http://www.fullstackradio.com/106",
    image: "/images/interviews/fullstackradio.jpg",
    imageWidth: 700,
    imageHeight: 700,
    byline: "Full Stack Radio #106",
    title: "Sam Selikoff - Single Page Application Architecture",
  },
  {
    url: "http://www.fullstackradio.com/89",
    image: "/images/interviews/fullstackradio.jpg",
    imageWidth: 700,
    imageHeight: 700,
    byline: "Full Stack Radio #89",
    title: "Sam Selikoff - Choosing Ember.js in 2018",
  },
  {
    url: "https://frontside.io/podcast/037-ember-cli-mirage-with-sam-selikoff/",
    image: "/images/interviews/thefrontside.jpg",
    imageWidth: 939,
    imageHeight: 939,
    byline: "The Frontside Podcast #37",
    title: "Ember CLI Mirage with Sam Selikoff",
  },
  {
    url: "https://emberweekend.com/episodes/consumer-driven-weekend/",
    image: "/images/interviews/emberweekend.png",
    imageWidth: 500,
    imageHeight: 500,
    byline: "Ember Weekend #19",
    title: "Consumer Driven Weekend with Sam Selikoff",
  },
  {
    url: "https://devchat.tv/js-jabber/jsj-364-ember-octane-with-sam-selikoff/",
    image: "/images/interviews/javascriptjabber.jpg",
    imageWidth: 500,
    imageHeight: 500,
    byline: "JavaScript Jabber #364",
    title: "Ember Octane with Sam Selikoff",
  },
  {
    url: "https://devchat.tv/my-javascript-story/mjs-121-sam-selikoff/",
    image: "/images/interviews/myjavascriptstory.jpg",
    imageWidth: 500,
    imageHeight: 500,
    byline: "My JavaScript Story #121",
    title: "Sam Selikoff",
  },
];
