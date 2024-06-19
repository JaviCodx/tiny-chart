import { LitElement, css, html } from "lit";
import { Task } from "@lit/task";
import * as echarts from "echarts/dist/echarts";
import { customElement, property } from "lit/decorators.js";



/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

export default class BarChart extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  static get properties() {
    return {
      chart: { attribute: false },
      token: { type: String },
      url: { type: String },
      q: { type: String },
      xAxisCol: { type: String },
      yAxisCol: { type: String },
    };
  }

  static styles = css`

  #main {
       height: 500px;
      width: 809px;
  }
    .loading_chart {
      display: inline-block;
      height: 100%;
      width: 100%;
      position: relative;
      overflow: hidden;
      background-color: #dddbdd;
    }

    .loading_chart::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);

      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0.2) 20%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0)
      );
      animation: shimmer 5s infinite;
      content: "";
    }

    @keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }
  `;

  constructor() {
    super();
    this.chart = null;
    this.token =
      "";
    this.url =
      "";
      this.q = ''
      this.xAxisCol=''
      this.yAxisCol=''

  }
  renderChart(options) {
    (
      this.chart ||
      echarts.init(this.renderRoot?.querySelector("#main") ?? null)
    )?.setOption(options);
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    this.chart?.dispose()
  }
  _getData = new Task(this, {
    task: async ([url, token, q, xAxisCol, yAxisCol], { signal }) => {
      const newUrl = new URL(url);
      newUrl.searchParams.append("q", q);
      const response = await fetch(
        newUrl,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        { signal }
      );
      if (!response.ok) {
        throw new Error(response.status);
      }

      const { data } = await response.json();

      const options = {
        xAxis: {
          data: data.map((p) => p[xAxisCol]),
        },
        yAxis: {},
        tooltip: {},
        series: [
          {
            name: yAxisCol,
            type: "bar",
            data: data.map((p) =>  p[yAxisCol]),
          },
        ],
      };
      this.renderChart(options);
    },
    args: () => [this.url, this.token, this.q, this.xAxisCol, this.yAxisCol],
  });

  render() {
    return html`
        <div id="main">
          ${this._getData.render({
            pending: () => html`<div class="loading_chart" />`,
            error: (e) => html`<p>Error: ${e}</p>`,
          })}
        </div>
    `;
  }
}

window.customElements.define("bar-chart", BarChart);
