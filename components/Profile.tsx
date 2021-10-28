import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Heading, Text, Badge } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import Icon from "@chakra-ui/icon";
import { FaLaravel, FaReact } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";

export default function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          7+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of Experience
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="2xl">
          Framework 
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="black" p="4" as={FaLaravel} w="24" h="24" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
             Laravel
            </Text>
          </Flex>
          
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="black" p="4" as={DiCodeigniter} w="24" h="24" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              CodeIgniter
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon as={FaReact} p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Next JS
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
