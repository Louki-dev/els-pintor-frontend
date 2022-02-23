<div class="modal fade" id="newService" tabindex="-1" aria-labelledby="todoModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-6 shadow">
        <div class="modal-header pending_header2">
            <h5 class="modal-title text-white fw-normal" id="confirm_inquiryModalLabel">Add Service</h5>
                <button type="button" class="btn-close rounded-circle bg-light btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
    <form enctype="multipart/form-data">
        <div class="modal-body">
        <div class="container">
            <div class="row g-2 mb-3">
                <div class="col-md">
                    <label for="serv_name" class="form-label">Name of Service:</label>
                    <input type="text" class="form-control" id="serv_name">
                </div>
                <div class="col-md">
                    <label for="serv_price" class="form-label">Price Rate:</label><span> 
                    <input class="form-control" type="number" id="serv_price">
                </div>
            </div>

                <div class="mb-3">
                    <label for="serv_image" class="form-label mt-3">Upload Image File:</label> 
                    <input class="form-control" type="file" accept="image/jpeg, image/png" name="image" id="serv_image" >
                    <canvas id="serv_image_canvas" style="display: none;"></canvas>
                </div>
            
                <div class="mb-3">
                    <label for="serv_description" class="form-label">Description:</label> 
                    <textarea class="form-control _txtarea"  id="serv_description" rows="1"></textarea>
                </div>   
            
                <div class="mt-4">Symbol:
                <div class="btn-group">
                <button class="btn btn-sm dropdown-toggle b-active" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                   <input type="text" id="serv_symbol" class="b-none" disabled>
                </button>
                <ul class="dropdown-menu">
                    <li><button class="dropdown-item" type="button" id="symbol-m2">Square Meter (m2)</button></li>
                    <li><button class="dropdown-item" type="button" id="symbol-pu">Unit (pu)</button></li>
                </ul>
                </div></div>
                <p id="add-symbol-service"></p>

            <div class=" d-grid gap-2 mb-3 mt-5">
                <button type="button" class="btn btn-outline-primary" id="AddService">Submit</button>
                <button type="button" class="btn btn-outline-secondary" id="resetService">Reset</button>
            </div>
        </div>
        </div>
    </form>
    </div>
</div>
</div>