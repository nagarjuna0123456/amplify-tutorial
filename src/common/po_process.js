import img1 from '../assets/images/services-icon/01.png';
import img2 from '../assets/images/services-icon/02.png';
import img3 from '../assets/images/services-icon/03.png';
import img4 from '../assets/images/users/user.jpg';
import './po_process.css';

function PoCards() {
    
return (
  <div class="row">
            <div class="col-xl-3 col-md-6">
                <div class="card mini-stat bg-primary text-white">
                    <div class="card-body">
                        <div class="mb-4">
                            <div class="float-left mini-stat-img mr-4">
                                <img src={img1} alt=""/>
                            </div>
                            <h5 class="font-16 text-uppercase mt-0"><strong>NEW</strong></h5>
                            <h4 class="font-500" id="newInvoiceCountPurchaseId">20</h4>
                            
                        </div>
                        <div class="pt-2">
                            <div class="float-right">
                                <a id="newInvoiceId" href="/payments/new_invoices/" class="text-white-50"><ion-icon name="arrow-forward-outline"></ion-icon></a>
                            </div>

                            <p class="text-white-50 mb-0">Over all</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <div class="card mini-stat bg-primary text-white">
                    <div class="card-body">
                        <div class="mb-4">
                            <div class="float-left mini-stat-img mr-4">
                                <img src={img2} alt=""/>
                            </div>
                            <h5 class="font-16 text-uppercase mt-0"><strong>HOLD</strong></h5>
                            <h4 class="font-500" id="holdInvoiceCountPurchaseId">0</h4>
                            
                        </div>
                        <div class="pt-2">
                            <div class="float-right">
                                <a id="holdInvoiceId" href="/payments/hold_invoices/" class="text-white-50"><ion-icon name="arrow-forward-outline"></ion-icon></a>
                            </div>

                            <p class="text-white-50 mb-0">Over all</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <div class="card mini-stat bg-primary text-white">
                    <div class="card-body">
                        <div class="mb-4">
                            <div class="float-left mini-stat-img mr-4">
                                <img src={img3} alt=""/>
                            </div>
                            <h5 class="font-16 text-uppercase mt-0"><strong>PROCESSED</strong></h5>
                            <h4 class="font-500" id="approvedInvoiceCountPurchaseId">10483</h4>
                            
                        </div>
                        <div class="pt-2">
                            <div class="float-right">
                                <a id="processedInvoiceId" href="/payments/approved_invoices/" class="text-white-50"><ion-icon name="arrow-forward-outline"></ion-icon></a>
                            </div>

                            <p class="text-white-50 mb-0">Over all</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <div class="card mini-stat bg-primary text-white">
                    <div class="card-body">
                        <div class="mb-4">
                            <div class="float-left mini-stat-img mr-4">
                                <img src={img4} alt=""/>
                            </div>
                            <h5 class="font-16 text-uppercase mt-0"><strong>REJECTED</strong></h5>
                            <h4 class="font-500" id="rejectedInvoiceCountPurchaseId">0</h4>
                        </div>
                        <div class="pt-2">
                            <div class="float-right">
                                <a id="rejectedInvoiceId" href="/payments/rejected_invoices/" class="text-white-50"><ion-icon name="arrow-forward-outline"></ion-icon></a>
                            </div>

                            <p class="text-white-50 mb-0">Over all</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}

export default PoCards;