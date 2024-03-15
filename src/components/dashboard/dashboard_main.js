
import Dashboard from './PieChart'
import PoCards from '../../common/po_process';
import '../../common/po_process.css';
import Donutchart from '../../components/dashboard/DoNutChart';
import Barchart from '../../components/dashboard/ContractBarChart';
import Vendorchart from '../../components/dashboard/VendorBarCharts';

function dashboardmain() {

    return (
       
        <div class="container-fluid" style={{backgroundColor:'rgb(240, 242, 245)'}}>
            <PoCards />
            <div class="row">
                <div class="col-xl-6">
                    <div class="card">
                        <div class="card-body">
                            <div id="canvasInvoiceId">
                                {/* <canvas id="invoiceChart" style="max-width: 1000px;"></canvas> */}
                                <Dashboard />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-6">
                    <div class="card">
                        <div class="card-body">
                            {/* <canvas id="contractChart" style="max-width: 1000px; height: 290px; width: 580px;"></canvas> */}
                            <Barchart />
                        </div>
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col-xl-3">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="mt-0 header-title mb-4">Invoices Report</h4>

                            <div class="cleafix">
                                <p class="float-left"><i class="mdi mdi-calendar mr-1 text-primary"></i> 01-Jan-2020 - 31-Dec-2020</p>
                                <h5 class="font-18 text-right">5000</h5>
                            </div>

                            <div id="ct-donut" class="ct-chart wid">
                                <Donutchart />
                            </div>

                            <div class="mt-4">
                                <table class="table mb-0">
                                    <tbody>
                                        <tr>
                                            <td><span class="badge badge-primary">HR</span></td>
                                            <td>HR</td>
                                            <td class="text-right">54.5%</td>
                                        </tr>
                                        <tr>
                                            <td><span class="badge badge-success">OPER</span></td>
                                            <td>OPERATION</td>
                                            <td class="text-right">28.0%</td>
                                        </tr>
                                        <tr>
                                            <td><span class="badge badge-warning">IT</span></td>
                                            <td>IT</td>
                                            <td class="text-right">17.5%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-xl-9">
                    <div class="card">
                        <div class="card-body">
                            {/* <canvas id="barChart" style="max-width: 1000px;"></canvas> */}
                            <Vendorchart id='barchart'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default dashboardmain;