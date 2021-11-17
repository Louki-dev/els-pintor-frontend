<div class="modal fade" id="inq-modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-6 shadow">
        <div class="modal-header pending_header2">
            <h5 class="modal-title text-white fw-normal" id="confirm_inquiryModalLabel">Make An Inquiry</h5>
                <button type="button" class="btn-close rounded-circle bg-light btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
    <form>
        <div class="modal-body">
            <div class="mb-3">
                <div class="row">
                <div class="col">
                <label for="exampleFormControlInput1" class="form-label">First Name</label>
                <input type="text" class="form-control" id="cfname" placeholder="">
                </div>

                <div class="col">
                <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="clname" placeholder="">
                </div>
                </div>
            </div>

            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
            <input type="number" class="form-control" id="cnumber" onKeyDown="if(this.value.length==11 && event.keyCode!=8) return false;" placeholder="">
            </div>

            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="cemail" placeholder="">
            </div>

            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Inquiry Details</label>
            <textarea class="form-control _txtarea" id="cinq" rows="1"></textarea>
            </div>
          
            <div class=" d-grid gap-2 mb-2 mt-4">
                <button type="button" class="btn btn-outline-primary" id="csubmit">Submit</button>
                <input type="reset" value="Reset" class="btn btn-outline-secondary">
            </div>
        </div>
    </form>
    </div>
</div>
</div>