import { useState } from "react";

import { Container, Heading, Select, Box } from "@radix-ui/themes";

import { ANALYSIS_TIME_QUERY, ANALYSIS_TIME_KEYS } from "../enums";

function getChartDataTimeFrames(timeKey) {
  const { aggregateFunc, aggregatedName } = ANALYSIS_TIME_QUERY[timeKey];

  return {
    xAxisCol: aggregatedName,
    q: `SELECT
    ${aggregateFunc}(tpep_pickup_datetime) AS ${aggregatedName},
    COUNT(*) AS trip_count
FROM
    _
GROUP BY
    ${aggregatedName}
ORDER BY
    ${aggregatedName}`,
  };
}

function TripsChart() {
  const [analysisTimeKey, setAnalysisTimeKey] = useState(
    ANALYSIS_TIME_KEYS.HOURLY
  );

  const { xAxisCol, q } = getChartDataTimeFrames(analysisTimeKey);

  return (
    <Container size="3">
      <Heading as="h3">How are trips distributed by time frame?</Heading>
      <Box py="4">
        <Select.Root
          value={analysisTimeKey}
          onValueChange={setAnalysisTimeKey}
          defaultValue={analysisTimeKey}
        >
          <Select.Trigger />
          <Select.Content>
            <Select.Item value={ANALYSIS_TIME_KEYS.HOURLY}>By hour</Select.Item>
            <Select.Item value={ANALYSIS_TIME_KEYS.DAILY}>By day</Select.Item>
            <Select.Item value={ANALYSIS_TIME_KEYS.WEEKLY}>By week</Select.Item>
            <Select.Item value={ANALYSIS_TIME_KEYS.MONTHLY}>
              By month
            </Select.Item>
          </Select.Content>
        </Select.Root>
      </Box>

      <bar-chart
        url="https://api.tinybird.co/v0/pipes/yellow_tripdata_2017_pipe.json"
        token="p.eyJ1IjogIjdmOTIwMmMzLWM1ZjctNDU4Ni1hZDUxLTdmYzUzNTRlMTk5YSIsICJpZCI6ICJmZTRkNWFiZS05ZWIyLTRjMjYtYWZiZi0yYTdlMWJlNDQzOWEifQ.P67MfoqTixyasaMGH5RIjCrGc0bUKvBoKMwYjfqQN8c"
        q={q}
        xAxisCol={xAxisCol}
        yAxisCol="trip_count"
      />
    </Container>
  );
}

export default TripsChart;
