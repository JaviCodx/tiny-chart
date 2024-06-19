import { useRef, useEffect } from "react";
import vueLogo from "../assets/vue.svg";

import { createApp } from "vue";
import VueChartVue from "./VueChart.vue";
import { Container, Heading, Flex } from "@radix-ui/themes";

function VueChart() {
  const ref = useRef(null);

  useEffect(() => {
    createApp(VueChartVue).mount("#vue");
  }, []);

  return (
    <Container size="3">
      <Flex justify="center" align="center" direction="column">
        <img src={vueLogo} className="logo react" alt="Vue logo" />
      </Flex>
      <div id="vue" ref={ref} />
    </Container>
  );
}

export default VueChart;

