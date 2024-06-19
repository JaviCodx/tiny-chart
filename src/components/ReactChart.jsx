import reactLogo from "../assets/react.svg";

import { Container, Flex } from "@radix-ui/themes";

function ReactChart() {
  return (
    <Container size="3">
      <Flex justify="center" align="center" direction="column">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </Flex>
      <bar-chart
        url="https://api.tinybird.co/v0/pipes/yellow_tripdata_2017_pipe.json"
        token="p.eyJ1IjogIjdmOTIwMmMzLWM1ZjctNDU4Ni1hZDUxLTdmYzUzNTRlMTk5YSIsICJpZCI6ICJmZTRkNWFiZS05ZWIyLTRjMjYtYWZiZi0yYTdlMWJlNDQzOWEifQ.P67MfoqTixyasaMGH5RIjCrGc0bUKvBoKMwYjfqQN8c"
        q={`SELECT
            payment_type,
            CASE
              WHEN payment_type = 1 THEN 'Credit card'
              WHEN payment_type = 2 THEN 'Cash'
              WHEN payment_type = 3 THEN 'No charge'
              WHEN payment_type = 4 THEN 'Dispute'
              WHEN payment_type = 5 THEN 'Unknown'
              WHEN payment_type = 6 THEN 'Voided trip'
              ELSE 'other'
            END AS payment_type_description,
            COUNT() as payment_type_count
          FROM
            _
          GROUP BY
            payment_type`}
        xAxisCol="payment_type_description"
        yAxisCol="payment_type_count"
      />
    </Container>
  );
}

export default ReactChart;
