<div class="modal fade" id="editService" tabindex="-1" aria-labelledby="todoModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-6 shadow">
        <div class="modal-header pending_header2">
            <h5 class="modal-title text-white fw-normal" id="confirm_inquiryModalLabel">Edit Service</h5>
                <button type="button" class="btn-close rounded-circle bg-light btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
 
        <div class="modal-body">
            <div class="row g-2 mb-3">
                <input type="hidden" id="eserv_id">
                <div class="col-md">
                    <label for="serv_name" class="form-label">Name of Service:</label>
                    <input type="text" class="form-control" id="eserv_name">
                </div>
                <div class="col-md">
                    <label for="serv_price" class="form-label">Price Rate:</label><span> 
                    <input class="form-control" type="number" id="eserv_price">
                </div>
            </div>
            
                <div class="mb-3">
                    <label for="serv_description" class="form-label">Description:</label> 
                    <textarea class="form-control textarea2"  id="eserv_description" rows="3"></textarea>
                </div>     
            <div class=" d-grid gap-2 mb-3 mt-5">
                <button type="button" class="btn btn-outline-primary" id="UpdateService">Update</button>
                <button type="button" class="btn btn-outline-secondary" id="DeleteService">Delete</button>
            </div>
        </div>

    </div>
</div>
</div>