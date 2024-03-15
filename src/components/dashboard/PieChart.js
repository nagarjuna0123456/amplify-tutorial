import React from 'react';
import ReactApexChart from 'react-apexcharts';

class PieChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [44, 55, 13, 43, 22],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                title : {
                    display : true,
                    text : "Invoices at Finance",
                    style: {
                        fontSize:  '14px',
                        fontWeight:  'bold',
                        color:  '#fff'
                },
                },
                labels: ["Approved","Hold","Rejected","Paid","Partly Paid"],
                
                legend : {
                    position : 'right',
                    labels: {
                        colors: ['#fff'],
                    },
                  
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        };
    }



    render() {
        return (
            <div id="chart" >
                <ReactApexChart options={this.state.options} series={this.state.series} type="pie" height={310} width={550}/>
            </div>
        );
    }
}

export default PieChart;