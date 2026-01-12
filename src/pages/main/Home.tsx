// import AppButton from "@/components/AppButton";
import { Avatar, Button, Card, Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import MainPage from "../MainPage";
function Home(): React.ReactElement {
  const [count, setCount] = useState<number>(0);

  return (
    <MainPage>
      <Flex flexDirection={"column"} gap={"3rem"}>
        <Flex flexDirection={"column"}>
          <Heading color="blue.600">button</Heading>
          <Flex>
            <Button variant={"typePopoverMoreBtn" as any}>Count </Button>
            <Button variant={"typeCopyBtn" as any}>Count </Button>
            {/* <AppButton variant="typeGrayLg" /> */}
            <Button variant={"typeGrayLg" as any}>Count </Button>
          </Flex>
        </Flex>
        {/* <divider  */}

        <Card.Root width="320px">
          <Card.Body gap="2">
            <Avatar.Root size="lg" shape="rounded">
              <Avatar.Image src={"https://picsum.photos/200/300"} />
              <Avatar.Fallback name="Nue Camp" />
            </Avatar.Root>

            <Avatar.Root>
              <Avatar.Fallback name="Sunny" />
              <Avatar.Image asChild>
                <img src="https://picsum.photos/200/300" alt="Sunny" />
              </Avatar.Image>
            </Avatar.Root>

            <Card.Title mb="2">Nue Camp</Card.Title>
            <Card.Description>
              This is the card body. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Card.Description>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <Button variant="outline">View</Button>
            <Button>Join</Button>
          </Card.Footer>
        </Card.Root>
      </Flex>
    </MainPage>
  );
}

export default Home;
