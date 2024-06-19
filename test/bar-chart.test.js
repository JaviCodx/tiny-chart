import { html } from "lit";
import { fixture, expect } from "@open-wc/testing";
import "../lib/bar-chart";

describe("TinyChart", () => {
  let element;
  const url = "https://api.tinybird.co/v0/pipes/yellow_tripdata_2017_pipe.json";
  const token =
    "p.eyJ1IjogIjdmOTIwMmMzLWM1ZjctNDU4Ni1hZDUxLTdmYzUzNTRlMTk5YSIsICJpZCI6ICJmZTRkNWFiZS05ZWIyLTRjMjYtYWZiZi0yYTdlMWJlNDQzOWEifQ.P67MfoqTixyasaMGH5RIjCrGc0bUKvBoKMwYjfqQN8c";

const q = `SELECT
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
  payment_type`;
  beforeEach(async () => {
    element = await fixture(
      html`<bar-chart url=${url} token=${token} q=${q}></bar-chart>`
    );
  });

  it("should render main container", () => {
    const main = element.shadowRoot.querySelector("#main");
    expect(main).to.exist;
  });

  it("should have correct url token and q ", async () => {
    expect(element.getAttribute("url")).to.equal(url);
    expect(element.getAttribute("token")).to.equal(token);
    expect(element.getAttribute("q")).to.equal(q);
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
