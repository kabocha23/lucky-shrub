import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Box,
  Badge,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <Box
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor="white"
      color="black"
    >
      <Image src={imageSrc} alt={title} borderRadius="lg" />

      <VStack p="6" alignItems="start">
        <Heading color="black" fontWeight="semibold" size="md">
          {title}
        </Heading>
        <Text
          color="gray"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="sm"
        >
          {description}
        </Text>
        <HStack>
          <a>
            <Text
              color="black"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="sm"
            >
              See More
            </Text>
          </a>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
