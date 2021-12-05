<div class="modal fade" id="choose_contacts_modal" tabindex="-1" aria-labelledby="confirm_inquiryModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header pending_header2">
            <h5 class="modal-title text-white fw-normal" id="confirm_inquiryModalLabel">Choose An Employee To Disseminate</h5>
            <button type="button" class="btn-close btn-light rounded-circle bg-light" id="close_modal_choose_contact" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form class="container">
            <div class="modal-body">
                <div class="scrollarea2 mt-3" id="choose-active-contacts">
                </div>

                <div class="container mt-3">
                    <label for="" class="form-label">Your Message:</label>
                    <textarea class="form-control"  id="send_message" rows="8"></textarea>
                </div>
                <input type="hidden" id="custID" value="">
                <input type="hidden" id="custStat" value="">
                <input type="hidden" id="custStart" value="">
                <input type="hidden" id="custEnd" value="">
                <input type="hidden" id="custContract" value="">
                <div class="container d-grid gap-2 mb-4 mt-4">
                    <button type="button" class="btn btn-primary" id="sendSMS">SEND</button>
                </div>
                </div>
            </div>
        </form>
    </div>
</div>
