import { Flex, Box, Center, FormControl, Input, FormLabel, HStack, RadioGroup, Radio, Button, } from "@chakra-ui/react";

function App() {
  return (
    <Box h="100vh">
      <Center
        as="header"
        h={150}
        bg="black"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="8"
      >
        Formulario
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="cal(100bh - 150px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >
          <FormControl
            display="flex"
            flexDir="column"
            gap="4"
          >
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">Nome Completo</FormLabel>
                <Input id="nome" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <Input id="email" />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nasc">Data de Nascimento</FormLabel>
                <Input id="nasc" type="date" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="natural">Naturalidade</FormLabel>
                <Input id="natural" />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="cel">Celular</FormLabel>
                <Input id="nasc" type="number" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="telefone">Telefone</FormLabel>
                <Input id="telefone" type="number" />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="endereco">Endereço</FormLabel>
                <Input id="endereco" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="cidade">Cidade</FormLabel>
                <Input id="cidade" />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel>Sexo</FormLabel>
                <RadioGroup defaultValue="Masculino">
                  <HStack spacing="24">
                    <Radio value="Masculino">Masculino</Radio>
                    <Radio value="Feminino">Feminino</Radio>
                    <Radio value="Outro">Outro</Radio>
                  </HStack>
                </RadioGroup>
              </Box>
            </HStack>

            <HStack justify="center">
              <Button
                w={240}
                p="6"
                type="submit"
                bg="black"
                color="white"
                fontWeight="bold"
                fontSize="xl"
                mt="2"
                transition="0.3s"
                _hover={{ bg: "white", color: "black", border: "1px solid black" }}
              >
                Enviar
              </Button>
            </HStack>

          </FormControl>
        </Center>
      </Flex>
    </Box>
  )
}

export default App
