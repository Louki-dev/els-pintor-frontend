<div class="modal fade" id="editService" tabindex="-1" aria-labelledby="todoModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-6 shadow">
        <div class="modal-header pending_header2">
            <h5 class="modal-title text-white fw-normal" id="confirm_inquiryModalLabel">Edit Service</h5>
                <button type="button" class="btn-close rounded-circle bg-light btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
 
        <div class="modal-body">
            <div class="mb-3 container" id="view-service-detail"></div>

            <div class="container"><div class="mt-4">Symbol:
                <div class="btn-group">
                <button class="btn btn-sm dropdown-toggle b-active" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                   <input type="text" id="eserv_symbol" class="b-none" disabled>
                </button>
                <ul class="dropdown-menu">
                    <li><button class="dropdown-item" type="button" id="upd-symbol-m2">Square Meter (m2)</button></li>
                    <li><button class="dropdown-item" type="button" id="upd-symbol-pu">Unit (pu)</button></li>
                </ul>
                </div></div>
                <p id="upd-symbol-service"></p>
            
                <div class="mt-4">Status:
                <div class="btn-group">
                <button class="btn btn-sm dropdown-toggle b-active" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                   <input type="text" id="eserv_status" class="b-none" disabled>
                </button>
                <ul class="dropdown-menu">
                    <li><button class="dropdown-item" type="button" id="available">Available</button></li>
                    <li><button class="dropdown-item" type="button" id="not-available">Not Available</button></li>
                </ul>
                </div></div>
                <p id="upd-stat-service"></p>
            

            <div class=" d-grid gap-2 mb-3 mt-5">
                <button type="button" class="btn btn-outline-primary" id="UpdateService">Update</button>
                <button type="button" class="btn btn-outline-danger" id="DeleteService">Remove</button>
            </div></div> 
            
        </div>

    </div>
</div>
</div>