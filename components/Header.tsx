import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Button } from '@chakra-ui/button';

export default function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.4"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />

      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
          <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
              <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
              <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text" >Muhammad Ma'sum</Text>
              <Text color={isDark ? "gray.200" : "gray.500"}>Hello guys, I'm someone who loves programming, especially website development. I am always learning and keep learning to improvise existing technology, and now I am working as a web developer</Text>
                    <Button mt={8} colorScheme="messenger" onClick={() =>
                        window.open("https://github.com/muhmasum50")
                    }>Find Me</Button>
          </Box>
          <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://gibei.stiesia.ac.id/uploads/fotopengguna/user_bei-20201216_185509.jpeg' 
            />
      </Flex>
    </Stack>
  );
}
