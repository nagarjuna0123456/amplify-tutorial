
import React from 'react';
import ReactApexChart from 'react-apexcharts';
class DonutChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [44, 55, 33],
            options: {
                chart: {
                    type: 'donut',
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show:false,
                    position: 'right',
                    offsetY: 0,
                }
            },


        };
    }

    render() {
        return (
            <div>
                <div class="chart-wrap">
                    <div id="chart">
                        <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height="250"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default DonutChart;