<div class="modal fade" id="inq-modal" aria-hidden="true" data-bs-backdrop="static">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-6 shadow-lg" style="border: none;">
        <div class="modal-header pending_header2">
            <h5 class="modal-title text-white fw-bold" id="confirm_inquiryModalLabel"></h5>
                <button type="button" class="btn-close rounded-circle bg-light btn-light" id="customer-closeButton" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
    <form>
        <div class="modal-body">
        <div class="container">
            <!-- first section -->
            <div id="customer-section1" class="animate__animated animate__fadeIn">
            <div class="mb-3">
            <label class="form-label fw-bold opacity-75 fs-5"><i class="bi bi-list-ul me-2"></i>List of Items</label>
            <hr class="mt-2 mb-4">
                <div class="list-group" id="todo_list">
                    <!-- <div  class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                        <h6 class="mb-1">List group item heading</h6>
                        <small class="text-muted">3 days ago</small>
                        </div>
                        <p class="mb-1">Some placeholder content in a paragraph.</p>
                        <small class="text-muted">And some muted small print.</small>
                    </div> -->
                </div>
            </div>

            <input type="text" id="items-subtotal" value="0" hidden>

            <div class="d-flex w-100 justify-content-between fs-3 mt-5">
                <span class="fw-bold opacity-75 mt-1">Subtotal:</span>
                <span class="text-muted">&#8369;<span id="subtotals">0.00</span></span>
            </div>
            

            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label fw-bold opacity-75 hid" title="Required">Inquiry message <span class="fw-normal">(Optional)</span></label>
            <textarea class="form-control hid" id="cinq" rows="3"></textarea>
            <small></small>
            </div>

            <!-- <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    Check to confirm your inquries.
                </label>
            </div> -->

                <hr class="mt-4 mb-4">
            <div class="d-flex flex-nowrap mt-3 mb-4 gap-2 container pe-3">
            
                <input type="button" data-bs-dismiss="modal" value="Add another Item" class="btn btn-outline-secondary col-6 btn-lg">
                <button type="button" class="btn btn-outline-primary col-6 btn-lg" id="cNext">Check Out</button>
                
            </div>
            </div>


            <!-- Second section -->
            <div id="customer-section2" class="animate__animated animate__fadeIn">
            <div class="mb-3">
                <div class="row">
                    <div class="col">
                    <label for="exampleFormControlInput1" class="form-label fs-5 fw-bold opacity-75" title="Required">First Name <span class="fw-normal">*</span></label>
                    <input type="text" class="form-control form-control-lg" id="cfname">
                    </div>

                    <div class="col">
                    <label for="exampleFormControlInput1" class="form-label fs-5 fw-bold opacity-75" title="Required">Last Name <span class="fw-normal">*</span></label>
                    <input type="text" class="form-control form-control-lg" id="clname">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    <label for="exampleFormControlInput1" class="form-label fs-5 fw-bold mt-3 opacity-75" title="Required">Mobile Number <span class="fw-normal">*</span></label>
                    <input type="number" class="form-control number-arrows-hide form-control-lg" id="cnumber" onKeyDown="if(this.value.length==11 && event.keyCode!=8) return false;" placeholder="09XXXXXXXXX" title="Please enter a valid mobile number">
                    </div>

                    <div class="col">
                    <label for="exampleFormControlInput1" class="form-label fs-5 mt-3 fw-bold opacity-75" title="Required">Email Address<span class="fw-normal">*</span></label>
                    <input type="email" class="form-control form-control-lg" id="cemail" placeholder="johnwick@email.com" title="Please enter a valid email">
                    </div>
                </div>
            </div>

            <!-- <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
            <input type="number" class="form-control" id="cnumber" onKeyDown="if(this.value.length==11 && event.keyCode!=8) return false;" placeholder="">
            </div> -->

            <div class="mb-3">
            <label class="form-label fw-bold opacity-75 fs-5">Home Address  <span class="fw-normal">* (Street No. / City / Province)</span></label>
            <input type="text" class="form-control form-control-lg" id="caddress">
            </div>
            <hr class="mt-4 mb-4">
            <button type="button" class="btn btn-primary btn-lg form-control py-3  mb-4" id="csubmit">CONFIRM ORDER</button>

            </div>


        </div>
        </div>
    </form>
    </div>
</div>
</div>