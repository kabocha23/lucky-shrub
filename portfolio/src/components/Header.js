import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef(null);
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleScroll = () => {
    const position = window.scrollY;
    console.log(position);
    if (position > lastScrollY) {
      console.log("down");
    } else if (lastScrollY > position) {
      console.log("up");
    }
    setLastScrollY(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box
        color="white"
        maxWidth="1280px"
        margin="0 auto"
        ref={navRef}
        translateY={0}
      >
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>
              {socials.map((social, index) => {
                return (
                  <a key={index} href={social.url}>
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </a>
                );
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <Link onClick={handleClick("projects")} cursor="pointer">
                Projects
              </Link>
              <Link onClick={handleClick("contactme")} cursor="pointer">
                Contact Me
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
