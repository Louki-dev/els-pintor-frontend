<div class="modal fade" id="request_modal-2" tabindex="-1" aria-labelledby="confirm_inquiryModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header pending_header2">
            <h5 class="modal-title text-white fw-normal" id="confirm_inquiryModalLabel">Customer Details</h5>
            <button type="button" class="btn-close btn-light rounded-circle bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form class="container">
            <div class="modal-body">
                <input type="hidden" id="customer-id" value="">
                <div class="row">
                    <div class="col">
                        <p>Customer Name:
                            <span class="opacity-75 ps-2 fcapital" id="fullName"></span>
                        </p>
                        <p>Email: 
                            <span class="opacity-75 ps-2" id="email"></span>
                        </p>
                        <p>Address: 
                            <span class="opacity-75 ps-2" id="address"></span>
                        </p>
                    </div>
                    <div class="col">
                        <!-- <p>Posted:
                            <span class="opacity-75 ps-2" id="dateCreated"></span>
                        </p> -->
                        <p>Mobile Number: 
                            <span class="opacity-75 ps-2" id="mobileNumber"></span>
                        </p>
                        <p>Start Date: 
                            <span class="opacity-75 ps-2" id="start-date"></span>
                        </p>
                        <p>Due Date: 
                            <span class="opacity-75 ps-2" id="due-date"></span>
                        </p>
                    </div>
                </div><hr>
                <h6 class="mt-3">Inquiry Details:</h6>
                <p class="float-end">
                    <div class="ms-2 mt-2">
                    <textarea class="opacity-75 form-control bg-white textarea" id="requestDetails" disabled></textarea>
                    </div>
                </p>
                <button type="button" class="btn float-end text-muted hover" title="" id="deleteRequest">Remove</button>
            </div>
            <div class="container d-grid gap-2 mb-4 mt-2">
                <!-- <button type="button" id="approved" class="btn btn-outline-success">Approve</button> -->
            </div>
            </div>
        </form>
    </div>
</div>