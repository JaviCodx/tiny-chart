import tinyBirdLogo from "./assets/c.png";

import "./App.css";
import VueChart from "./components/VueChart";
import ReactChart from "./components/ReactChart";
import HTMLChart from "./components/HTMLChart";
import TripsChart from "./components/TripsChart";
import TipsChart from "./components/TipsChart";
import ShareChart from "./components/ShareChart";

import {
  Container,
  Heading,
  Grid,
  Section,
  Flex,
  Text,
  Link,
  Box,
  Tabs,
} from "@radix-ui/themes";

function App() {
  return (
    <Grid columns="1" gap="3" align="center">
      <Section>
        <Flex justify="center" align="center">
          <Heading align="center">Hello, this is my test for Tinybird</Heading>
          <img src={tinyBirdLogo} className="logo react" alt="tinyBirdLogo" />
        </Flex>
      </Section>
      <Section>
        <Container size="3">
          <Text>
            Here is the{" "}
            <Link href="https://www.nyc.gov/assets/tlc/downloads/pdf/data_dictionary_trip_records_yellow.pdf">
              data dictionary
            </Link>{" "}
          </Text>
        </Container>
      </Section>
      <Section>
        <TripsChart />
        <TipsChart />
      </Section>
      <Section>
        <Container size="3">
          <Flex justify="center" align="start">
            <Heading>
              Here is the cool part, since the charts are web components we can
              use them in any framework or plain html
            </Heading>
          </Flex>
        </Container>
        <Container size="3" pt="6">
          <Tabs.Root defaultValue="React">
            <Tabs.List>
              <Tabs.Trigger value="React">React</Tabs.Trigger>
              <Tabs.Trigger value="Vue">Vue</Tabs.Trigger>
              <Tabs.Trigger value="HTML">HTML</Tabs.Trigger>
              <Tabs.Trigger value="Share">Share!</Tabs.Trigger>
            </Tabs.List>
            <Box pt="3">
              <Heading>
                How are payment methods distributed across trips?
              </Heading>
              <Tabs.Content value="React">
                <ReactChart />
              </Tabs.Content>
              <Tabs.Content value="Vue">
                <VueChart />
              </Tabs.Content>
              <Tabs.Content value="HTML">
                <HTMLChart />
              </Tabs.Content>
              <Tabs.Content value="Share">
              <ShareChart />
              </Tabs.Content>
            </Box>
          </Tabs.Root>
        </Container>
      </Section>
    </Grid>
  );
}

export default App;
