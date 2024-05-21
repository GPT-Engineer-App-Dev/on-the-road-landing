import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to [Band Name]
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Join us on our journey as we tour the world, bringing our music to fans everywhere.
        </Text>
        <Box boxSize="sm">
          <Image src="/path-to-your-image.jpg" alt="Band Image" borderRadius="md" />
        </Box>
        <Button colorScheme="teal" size="lg">
          Get Tickets
        </Button>
        <VStack spacing={4}>
          <Text fontSize="md">Follow us on social media:</Text>
          <Box display="flex" justifyContent="space-around" width="100%">
            <Button as="a" href="https://facebook.com" target="_blank" leftIcon={<FaFacebook />} colorScheme="facebook">
              Facebook
            </Button>
            <Button as="a" href="https://twitter.com" target="_blank" leftIcon={<FaTwitter />} colorScheme="twitter">
              Twitter
            </Button>
            <Button as="a" href="https://instagram.com" target="_blank" leftIcon={<FaInstagram />} colorScheme="pink">
              Instagram
            </Button>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;