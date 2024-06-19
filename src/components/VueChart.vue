<script setup lang="ts">
</script>

<template>
  <div>
    <bar-chart url="https://api.tinybird.co/v0/pipes/yellow_tripdata_2017_pipe.json"
      token="p.eyJ1IjogIjdmOTIwMmMzLWM1ZjctNDU4Ni1hZDUxLTdmYzUzNTRlMTk5YSIsICJpZCI6ICJmZTRkNWFiZS05ZWIyLTRjMjYtYWZiZi0yYTdlMWJlNDQzOWEifQ.P67MfoqTixyasaMGH5RIjCrGc0bUKvBoKMwYjfqQN8c"
      :q="`SELECT
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
  payment_type`"
      xAxisCol="payment_type_description"
      yAxisCol="payment_type_count" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
