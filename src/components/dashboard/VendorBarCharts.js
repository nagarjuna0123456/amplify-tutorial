
import React from 'react';
import ReactApexChart from 'react-apexcharts';
class VendorbarChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Invoice(in Lakhs)',
                data: [700000, 650000, 640000, 550000, 500000, 450000, 350000, 300000, 250000, 200000]
            }
            ],
            
            options: {
                chart: {
                    type: 'bar',   
                },
                title : {
                    display : true,
                    text : "Top 10 Vendor Payments",
                    style: {
                        fontSize:  '14px',
                        fontWeight:  'bold',
                        color:  '#fff'
                },
                },
                labels: ["Invoice (In Lakhs)"],
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
                        text: 'Total Invoice Value (INR Lakhs)',
                        style: {
                            fontSize:  '14px',
                            fontWeight:  'bold',
                            color:  '#fff'
                    },
                    },
                    categories: ['ABC Services Ltd', 'BCD Services Ltd', 'XYZ Services Ltd', 'Adam Tech Ltd', 'Muti Tech Services', 'ceramics Ltd', ['Avantis', 'Regtech', 'Private', 'Limited'], ['IIJT','Education', 'Private', 'Limited'],['IIJT', 'Medicals', 'Private', 'Limited'], ['Keystone', 'Solutions', 'Private','Limited']],
                    
                    labels: {
                        style: {
                            colors: ['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'],
                            fontSize: '12px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                    },
                    
                },
                yaxis: {
                    title: {
                        text: 'Vendors',
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
                    horizontalAlign: 'left',
                    offsetX: 40
                  }
            },
        };
    }



    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={445}/>
            </div>
        );
    }
}

export default VendorbarChart;