
import React from 'react';
import ReactApexChart from 'react-apexcharts';
class ContractbarChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Remaining Days',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
                
            }
            ],
            
            options: {
                chart: {
                    type: 'bar', 
                },
                title : {
                    display : true,
                    text : "Purchase Contracts Expiring Within 30 Days",
                    style: {
                        fontSize:  '14px',
                        fontWeight:  'bold',
                        color:  '#fff'
                },
                },
                
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    title: {
                        text: 'Days',
                        style: {
                            fontSize:  '14px',
                            fontWeight:  'bold',
                            color:  '#fff'
                    },
                    },
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                    labels: {
                        style: {
                            colors: ['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'],
                            fontSize: '12px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                    },
                },
                yaxis: {
                    title: {
                        text: 'Contracts',
                        style: {
                            fontSize:  '14px',
                            fontWeight:  'bold',
                            color:  '#fff'
                    },
                    },
                    labels: {
                        style: {
                            colors: ['#fff'],
                            fontSize: '12px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    labels: {
                        colors: ['#fff'],
                    },
                }
               
            },
        };
    }



    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={300} width={550}/>
            </div>
        );
    }
}

export default ContractbarChart;