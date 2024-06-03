import { Container, VStack, HStack, Box, Text, Button, IconButton, Input, InputGroup, InputLeftElement, Image } from "@chakra-ui/react";
import { FaWallet, FaCreditCard, FaMoneyBillWave, FaSearch, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={6} width="100%">
        <HStack width="100%" justifyContent="space-between">
          <Text fontSize="2xl" fontWeight="bold">
            WalkerTECH Wallet
          </Text>
          <IconButton aria-label="Add" icon={<FaPlus />} size="lg" />
        </HStack>

        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
          <Input type="text" placeholder="Search transactions" />
        </InputGroup>

        <VStack spacing={4} width="100%">
          <HStack width="100%" p={4} borderWidth={1} borderRadius="md" justifyContent="space-between" alignItems="center">
            <HStack>
              <Box boxSize="50px" borderRadius="full" overflow="hidden">
                <Image src="https://images.unsplash.com/photo-1554774853-d50f9c681ae2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3YWxsZXQlMjBpY29ufGVufDB8fHx8MTcxNzQzNTQzNXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Wallet Icon" />
              </Box>
              <VStack alignItems="flex-start">
                <Text fontSize="lg" fontWeight="bold">
                  My Wallet
                </Text>
                <Text color="gray.500">Balance: $1,200.00</Text>
              </VStack>
            </HStack>
            <IconButton aria-label="Wallet" icon={<FaWallet />} size="lg" />
          </HStack>

          <HStack width="100%" p={4} borderWidth={1} borderRadius="md" justifyContent="space-between" alignItems="center">
            <HStack>
              <Box boxSize="50px" borderRadius="full" overflow="hidden">
                <Image src="https://images.unsplash.com/photo-1637021536331-17abe5429592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcmVkaXQlMjBjYXJkJTIwaWNvbnxlbnwwfHx8fDE3MTc0MzU0MzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Credit Card Icon" />
              </Box>
              <VStack alignItems="flex-start">
                <Text fontSize="lg" fontWeight="bold">
                  Credit Card
                </Text>
                <Text color="gray.500">Balance: $3,500.00</Text>
              </VStack>
            </HStack>
            <IconButton aria-label="Credit Card" icon={<FaCreditCard />} size="lg" />
          </HStack>

          <HStack width="100%" p={4} borderWidth={1} borderRadius="md" justifyContent="space-between" alignItems="center">
            <HStack>
              <Box boxSize="50px" borderRadius="full" overflow="hidden">
                <Image src="https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb25leSUyMGljb258ZW58MHx8fHwxNzE3NDM1NDM2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Money Icon" />
              </Box>
              <VStack alignItems="flex-start">
                <Text fontSize="lg" fontWeight="bold">
                  Cash
                </Text>
                <Text color="gray.500">Balance: $500.00</Text>
              </VStack>
            </HStack>
            <IconButton aria-label="Cash" icon={<FaMoneyBillWave />} size="lg" />
          </HStack>
        </VStack>

        <Button colorScheme="teal" size="lg" width="100%">
          Add Funds
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
