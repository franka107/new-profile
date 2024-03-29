import "../styles.css";
import "../fonts/Inter/inter.css";
import { animated, useTransition, useChain } from "react-spring";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  Twitter,
  GitHub,
  YouTube,
  Spotify,
  LinkedIn,
  Whatsapp,
} from "../components/logos";
import { useRef, useState } from "react";
import { Link } from "../components/ui";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

const AnimatedDialogOverlay = animated(DialogOverlay);

const Layout = ({ children }) => {
  const router = useRouter();
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  function handleClick(location) {
    setMobileNavIsOpen(false);
    router.push(location);
  }

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="57x57" href="https://raw.githubusercontent.com/franka107/new-profile/master/public/isotype.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="https://raw.githubusercontent.com/franka107/new-profile/master/public/isotype.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="https://raw.githubusercontent.com/franka107/new-profile/master/public/isotype.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="https://raw.githubusercontent.com/franka107/new-profile/master/public/isotype.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="https://raw.githubusercontent.com/franka107/new-profile/master/public/isotype.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="https://raw.githubusercontent.com/franka107/new-profile/master/public/isotype.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="https://raw.githubusercontent.com/franka107/new-profile/master/public/isotype.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="https://raw.githubusercontent.com/franka107/new-profile/master/public/isotype.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://raw.githubusercontent.com/franka107/new-profile/master/public/isotype.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="https://raw.githubusercontent.com/franka107/new-profile/master/public/isotype.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://raw.githubusercontent.com/franka107/new-profile/master/public/isotype.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="https://raw.githubusercontent.com/franka107/new-profile/master/public/isotype.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://raw.githubusercontent.com/franka107/new-profile/master/public/isotype.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="https://raw.githubusercontent.com/franka107/new-profile/master/public/isotype.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div className="flex flex-col min-h-screen font-sans text-base antialiased text-gray-800">
        <header className="px-6">
          <div className="pt-4 mx-auto max-w-7xl md:pt-6 xl:pt-8">
            <div className="flex justify-between pb-4 md:pb-0 md:border-b md:border-gray-200 md:justify-start">
              <NextLink href="/">
                <a className="text-sm font-light tracking-wide uppercase md:text-base lg:text-xl">
                  <span className="font-bold">Frank</span>Cary
                </a>
              </NextLink>
              <MobileNavButton
                isOpen={mobileNavIsOpen}
                setIsOpen={setMobileNavIsOpen}
              />
              <DesktopNav />
            </div>
            <MobileNav
              isOpen={mobileNavIsOpen}
              handleClick={handleClick}
              closeMenu={() => setMobileNavIsOpen(false)}
            />
          </div>
        </header>
        <main className="flex flex-col flex-1">{children}</main>
      </div>
    </>
  );
};

function MobileNavButton({ isOpen, setIsOpen }) {
  return (
    <button
      className="p-2 -m-2 text-gray-700 focus:outline-none md:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <svg fill="currentColor" viewBox="0 0 20 20" className="block w-4 h-4">
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </button>
  );
}

function ToolboxInternalLink(props) {
  function handleClick(e) {
    let isUnmodifiedLeftClick =
      (e.which === undefined || e.which === 1) && !e.ctrlKey && !e.metaKey;

    if (isUnmodifiedLeftClick) {
      e.preventDefault();
      props.onClick(props.to);
    }
  }

  return (
    <NextLink href={props.to}>
      <animated.a
        style={props.style}
        onClick={handleClick}
        className="block w-full py-10 mx-2 text-2xl font-semibold text-center text-gray-800 bg-white rounded-lg shadow-md"
      >
        {props.children}
      </animated.a>
    </NextLink>
  );
}

function MobileNav({ isOpen, handleClick, closeMenu }) {
  const springRef = useRef();
  const overlayTransitions = useTransition(isOpen, null, {
    ref: springRef,
    config: {
      mass: 1,
      tension: 200,
      friction: 20,
      clamp: true,
    },
    from: { alpha: 0, blur: 0 },
    leave: { alpha: 0, blur: 0 },
    enter: { alpha: 0.3, blur: 25 },
  });

  const transRef = useRef();
  const transitions = useTransition(
    isOpen ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [],
    null,
    {
      ref: transRef,
      unique: true,
      trail: 30,
      config: isOpen
        ? { mass: 1, tension: 180, friction: 14 }
        : { mass: 1, tension: 300, friction: 20, clamp: true },
      from: { opacity: 0, transform: "scale(0.9)" },
      enter: { opacity: 1, transform: "scale(1)" },
      leave: { opacity: 0, transform: "scale(0.9)" },
    }
  );

  useChain(isOpen ? [springRef, transRef] : [transRef, springRef], [
    0,
    isOpen ? 0 : 0.1,
  ]);

  return (
    <div className="md:hidden">
      {overlayTransitions.map(
        ({ item, key, props }) =>
          item && (
            <AnimatedDialogOverlay
              className={isOpen ? "" : "pointer-events-none"}
              key={key}
              style={{
                backdropFilter: props.blur.interpolate((v) => `blur(${v}px)`),
                WebkitBackdropFilter: props.blur.interpolate(
                  (v) => `blur(${v}px)`
                ),
                background: props.alpha.interpolate(
                  (v) => `rgba(120, 120, 120, ${v})`
                ),
              }}
              onDismiss={closeMenu}
            >
              {transitions.length > 0 && (
                <DialogContent
                  className="w-full max-w-lg p-4 m-0 mx-auto bg-transparent"
                  aria-label="Site nav"
                >
                  <button
                    onClick={closeMenu}
                    className="flex flex-wrap focus:outline-none"
                    style={{
                      WebkitTapHighlightColor: "transparent",
                    }}
                  >
                    <div className="w-1/3 px-2 mt-4">
                      <animated.a
                        style={{
                          ...transitions[1].props,
                          color: "#0A66C2",
                        }}
                        href="https://www.linkedin.com/in/fcaryv/"
                        className="flex items-center justify-center w-full h-12 bg-white rounded shadow-md focus:outline-none"
                      >
                        <LinkedIn className="h-6" />
                      </animated.a>
                    </div>
                    <div className="w-1/3 px-2 mt-4">
                      <animated.a
                        href="https://wa.link/6gw3t6"
                        style={{
                          ...transitions[2].props,
                        }}
                        className="flex items-center justify-center w-full h-12 bg-white rounded shadow-md focus:outline-none"
                      >
                        <Whatsapp className="h-6" />
                      </animated.a>
                    </div>
                    <div className="w-1/3 px-2 mt-4">
                      <animated.a
                        href="https://github.com/franka107"
                        style={{
                          ...transitions[3].props,
                          color: "#24292F",
                        }}
                        className="flex items-center justify-center w-full h-12 bg-white rounded shadow-md focus:outline-none"
                      >
                        <GitHub className="h-6" />
                      </animated.a>
                    </div>
                    {[
                      // { label: "Journal", url: "/work-journal" },
                      { label: "Projects", url: "/projects" },
                      // { label: "Podcast", url: "/podcast" },
                      //{ label: "Talks", url: "/talks" },
                      { label: "Contact", url: "/contact" },
                      // { label: "Blog", url: "/blog" },
                    ].map((link, i) => (
                      <div
                        className="flex items-center justify-center w-1/2 mt-6"
                        key={link.url}
                      >
                        <ToolboxInternalLink
                          style={{
                            ...transitions[4 + i].props,
                          }}
                          to={link.url}
                          onClick={handleClick}
                        >
                          {link.label}
                        </ToolboxInternalLink>
                      </div>
                    ))}
                  </button>
                </DialogContent>
              )}
            </AnimatedDialogOverlay>
          )
      )}
    </div>
  );
}

function DesktopNav() {
  return (
    <div className="items-center hidden ml-auto md:flex">
      {/* <DesktopNavLink to="/work-journal">Work journal</DesktopNavLink> */}
      <DesktopNavLink to="/projects">Projects</DesktopNavLink>
      {/* <DesktopNavLink to="/podcast">Podcast</DesktopNavLink> */}
      {/* <DesktopNavLink to="/talks">Talks</DesktopNavLink> */}
      <DesktopNavLink to="/contact">Contact</DesktopNavLink>
      {/* <DesktopNavLink to="/blog">Blog</DesktopNavLink> */}
    </div>
  );
}

function DesktopNavLink({ to, children }) {
  return (
    <Link href={to} activeClassName="text-gray-900">
      <a
        className="pb-4 ml-6 -mb-px text-gray-600 border-b border-transparent xl:pb-6 lg:ml-8 lg:text-base xl:text-lg hover:text-gray-900"
      // activeClassName="text-gray-900"
      // partiallyActive={true}
      >
        {children}
      </a>
    </Link>
  );
}
