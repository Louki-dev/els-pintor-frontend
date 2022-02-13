<div class="modal fade" id="inq-modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-6 shadow-lg" style="border: none;">
        <div class="modal-header pending_header2">
            <h5 class="modal-title text-white fw-bold" id="confirm_inquiryModalLabel">Your Cart</h5>
                <button type="button" class="btn-close rounded-circle bg-light btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
    <form>
        <div class="modal-body">
        <div class="container">
            <div class="mb-3">
                <div class="row">
                    <div class="col">
                    <label for="exampleFormControlInput1" class="form-label fw-bold opacity-75" title="Required">First Name </label>
                    <input type="text" class="form-control" id="cfname" placeholder="John">

                    <label for="exampleFormControlInput1" class="form-label mt-3 fw-bold opacity-75" title="Required">Mobile Number </label>
                    <input type="number" class="form-control" id="cnumber" onKeyDown="if(this.value.length==11 && event.keyCode!=8) return false;" placeholder="09XXXXXXXXX" title="Please enter a valid mobile number">
                    </div>

                    <div class="col">
                    <label for="exampleFormControlInput1" class="form-label fw-bold opacity-75" title="Required">Last Name </label>
                    <input type="text" class="form-control" id="clname" placeholder="Wick">

                    <label for="exampleFormControlInput1" class="form-label mt-3 fw-bold opacity-75" title="Required">Email </label>
                    <input type="email" class="form-control" id="cemail" placeholder="johnwick@email.com" title="Please enter a valid email">
                    </div>
                </div>
            </div>

            <!-- <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
            <input type="number" class="form-control" id="cnumber" onKeyDown="if(this.value.length==11 && event.keyCode!=8) return false;" placeholder="">
            </div> -->

            <div class="mb-3">
            <label class="form-label fw-bold opacity-75">Address  </label>
            <input type="text" class="form-control" id="caddress" placeholder="Street No. / City / Province">
            </div>

            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label fw-bold opacity-75" title="Required">Items / Services</label>
            <textarea class="form-control " id="cinq" rows="8"></textarea>
            </div>

            <!-- <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    Check to confirm your inquries.
                </label>
            </div> -->

            <center>
                <hr class="mt-4 mb-4">
            <div class="d-flex flex-nowrap mt-3 mb-4 gap-2 container pe-3">
            
                <input type="button" data-bs-dismiss="modal" value="Add another Item" class="btn btn-outline-secondary col-6 btn-lg">
                <button type="button" class="btn btn-outline-primary col-6 btn-lg" id="csubmit">Submit Inquiry</button>
                
            </div>
            </center>
        </div>
        </div>
    </form>
    </div>
</div>
</div>