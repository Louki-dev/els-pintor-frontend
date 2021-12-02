<div class="modal fade" id="request_modal-approve" tabindex="-1" aria-labelledby="pending_request_modal-0" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header pending_header2">
            <h5 class="modal-title text-white fw-normal" id="confirm_inquiryModalLabel">Customer Details</h5>
            <button type="button" class="btn-close btn-light rounded-circle bg-light" id="close_modal2" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form class="container">
            <div class="modal-body" id="pendingrequest">
                <input type="hidden" id="customr-id">
                    <div class="row">
                        <div class="col">
                            <p>Customer Name:
                                <span class="opacity-75 ps-2 fcapital" id="fullName2"></span>
                            </p>
                            <p>Email Address: 
                                <span class="opacity-75 ps-2" id="email2"></span>
                            </p>
                            <p>Address: 
                                <span class="opacity-75 ps-2" id="address2"></span>
                            </p>
                        </div>
                        <div class="col">
                            <p>Posted:
                                <span class="opacity-75 ps-2" id="dateCreated2"></span>
                            </p>
                            <p>Mobile Number: 
                                <span class="opacity-75 ps-2" id="mobileNumber2"></span>
                            </p>
                        </div>
                    </div><hr>
                    <h6 class="mt-3 ">Inquiry Details:</h6>
                    <p class="float-end">
                        <div class="ms-2 mt-2">
                        <textarea class="opacity-75 form-control bg-white textarea"  id="requestDetails2" disabled></textarea>
                        </div>
                    </p>
                    
                    <div class="row">
                        <div class="col">
                            <label for="project-date" class="col-form-label">Start Date:</label>
                            <input type="date" class="form-control" id="start-date2">
                        </div>
                        <div class="col">
                            <label for="project-date" class="col-form-label">Due Date:</label>
                            <input type="date" class="form-control" id="due-date2">
                        </div>
                    </div>
                   
            
                    
            </div>
                <div class="container d-grid gap-2 mb-4 mt-2">
                    <button type="button" class="btn btn-outline-primary" id="approve2">Approve</button>
                    <!-- <button type="button" class="btn btn-outline-secondary" id="turndown">Turndown</button> -->
                </div>
        </div>
        </form>
    </div>
</div>