import { ChatBubbleIcon, HeartIcon } from "@radix-ui/react-icons";
import { Container, Flex, Heading, Text, Card, Badge } from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container size="1">
        <Flex direction="column" pb={"4"}>
          <Heading>Coding Issue Tracker</Heading>
          <Text color="gray">
            Here you can track your coding issues relevant to your certain
            project.
          </Text>
        </Flex>

        <Flex gap={"4"} direction={"column"}>
          {/* card 1 */}
          <Card>
            <Flex gap={"2"} direction={"column"}>
              <Text>Issues #24 - button is wrong color</Text>
              <Flex gap={"4"}>
                <Badge color="orange">Devops</Badge>
                <Badge color="blue">UI</Badge>
              </Flex>
              <Text>
                This is an issue that is very serious. on a dashboard that only
                5 users use, there is a button that is the wrong shade of green.
                This mission is critical
              </Text>

              <Flex justify={"between"} pt="1">
                <Flex align={"center"}>
                  <ChatBubbleIcon />
                  <Text ml={"2"} size={"1"} color="gray">
                    2 comments
                  </Text>
                </Flex>
                <Flex align={"center"}>
                  <HeartIcon />
                </Flex>
              </Flex>
            </Flex>
          </Card>

          {/* card 2 */}
          <Card>
            <Flex gap={"2"} direction={"column"}>
              <Text>Issues #24 - button is wrong color</Text>
              <Flex gap={"4"}>
                <Badge color="red">Backend Team</Badge>
                <Badge color="blue">UI</Badge>
              </Flex>
              <Text>
                This is an issue that is very serious. on a dashboard that only
                5 users use, there is a button that is the wrong shade of green.
                This mission is critical
              </Text>

              <Flex justify={"between"} pt="1">
                <Flex align={"center"}>
                  <ChatBubbleIcon />
                  <Text ml={"2"} size={"1"} color="gray">
                    2 comments
                  </Text>
                </Flex>
                <Flex align={"center"}>
                  <HeartIcon />
                </Flex>
              </Flex>
            </Flex>
          </Card>

          {/* card 3 */}
          <Card>
            <Flex gap={"2"} direction={"column"}>
              <Text>Issues #24 - button is wrong color</Text>
              <Flex gap={"4"}>
                <Badge color="green">Hacking Team</Badge>
              </Flex>
              <Text>
                This is an issue that is very serious. on a dashboard that only
                5 users use, there is a button that is the wrong shade of green.
                This mission is critical
              </Text>

              <Flex justify={"between"} pt="1">
                <Flex align={"center"}>
                  <ChatBubbleIcon />
                  <Text ml={"2"} size={"1"} color="gray">
                    2 comments
                  </Text>
                </Flex>
                <Flex align={"center"}>
                  <HeartIcon />
                </Flex>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </main>
  );
}
