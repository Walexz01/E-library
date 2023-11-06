"use client";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Show,
  useColorModeValue,
} from "@chakra-ui/react";

const MockUp = ({ children }: { children: React.ReactNode }) => {
  const bg = useColorModeValue("white", "#141627");
  const mainBg = useColorModeValue("#f7f8fa", "#1e2037");

  return (
    <Flex direction={"column"} gap={10}>
      <div>header</div>
      <Grid
        boxSizing="border-box"
        templateAreas={{
          base: `"dash"`,
          lg: `"nav dash"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "70px 1fr",
          xl: "190px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem
            width={{ lg: "70px", xl: "190px" }}
            area={"nav"}
            bgColor={bg}
          >
            <div>nav</div>
          </GridItem>
        </Show>

        <GridItem w={"100%"} bgColor={mainBg} area={"dash"}>
          <Box pt={"70px"} px={"10px"} pb={"20px"} width={"100%"}>
            {children}
          </Box>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default MockUp;
