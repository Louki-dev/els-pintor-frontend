<div class="modal fade" id="inq-modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-6 shadow-lg" style="border: none;">
        <div class="modal-header pending_header2">
            <h5 class="modal-title text-white fw-normal" id="confirm_inquiryModalLabel">My Inquiries</h5>
                <button type="button" class="btn-close rounded-circle bg-light btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
    <form>
        <div class="modal-body">
        <div class="container">
            <div class="mb-3">
                <div class="row">
                    <div class="col">
                    <label for="exampleFormControlInput1" class="form-label" title="Required">First Name *</label>
                    <input type="text" class="form-control" id="cfname" placeholder="">

                    <label for="exampleFormControlInput1" class="form-label mt-3" title="Required">Mobile Number *</label>
                    <input type="number" class="form-control" id="cnumber" onKeyDown="if(this.value.length==11 && event.keyCode!=8) return false;" placeholder="">
                    </div>

                    <div class="col">
                    <label for="exampleFormControlInput1" class="form-label" title="Required">Last Name *</label>
                    <input type="text" class="form-control" id="clname" placeholder="">

                    <label for="exampleFormControlInput1" class="form-label mt-3" title="Required">Email address *</label>
                    <input type="email" class="form-control" id="cemail" placeholder="">
                    </div>
                </div>
            </div>

            <!-- <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
            <input type="number" class="form-control" id="cnumber" onKeyDown="if(this.value.length==11 && event.keyCode!=8) return false;" placeholder="">
            </div> -->

            <div class="mb-3">
            <label class="form-label">Address *</label>
            <input type="text" class="form-control" id="caddress" placeholder="">
            </div>

            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label" title="Required">Inquiry Details *</label>
            <textarea class="form-control " id="cinq" rows="8"></textarea>
            </div>

            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    Check to confirm your inquries.
                </label>
            </div>

            <center>
                <hr>
            <div class="d-flex flex-nowrap mt-3 mb-0 gap-2 container pe-3 mb-4">
            
                <input type="button" data-bs-dismiss="modal" value="Add another Inquiry" class="btn btn-outline-secondary col-6 btn-lg">
                <button type="button" class="btn btn-outline-primary col-6 btn-lg" id="csubmit" disabled>Submit Inquiry</button>
                
            </div>
            </center>
        </div>
        </div>
    </form>
    </div>
</div>
</div>