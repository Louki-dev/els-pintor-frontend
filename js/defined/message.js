(function () {
    $(document).ready(function(e){
        loadEmployee();
        loadSentMessage();

        $('#view-message').on('show.bs.modal', function(e) { 
            getSentMessageDetail({
                sent_message_id: $(e.relatedTarget).attr("data-info")
            });
        });
 
        $(document).on("click", "#done-modal", function(e) { 
            $('.modal').modal('hide');
        });

        $(document).on("click", "#createMessage", function(e) { 
            
            var $selected = [];

            $('#employee-contacts input:checked').each(function() {
                $selected.push($(this).val());
            });

            if ($selected.length == 0) {
                // Swal.fire('Something went wrong', 'Please Select atleast 1 number.', 'error');
                Swal.fire({
                    title: 'Oops...',
                    text: 'Please select atleast 1 number',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }

            if ($("#messageArea").val() == '') {
                // Swal.fire('Something went wrong', '', 'error');
                Swal.fire({
                    title: 'Oops...',
                    text: 'Message must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }

            $("#createMessage").prop("disabled", true);
            createMessage({
                message_content: $("#messageArea").val(),
                message_numbers: $selected
            });
            $("#createMessage").prop("disabled", false);

        });

    });

    $(document).on("change", "#selectallContact", function(e) { 
        $('#employee-contacts input:checkbox').each(function() {
            $(this).prop('checked', e.currentTarget.checked);
        });
    });

    $(document).on("change", "#selectallSentMessage", function(e) { 
        $('#sent-messages input:checkbox').each(function() {
            $(this).prop('checked', e.currentTarget.checked);
        });
    });


    $(document).on("click", "#selectedSentMessage", function(e) { 

        var selected = [];
        $('#sent-messages input:checked').each(function() {
            selected.push($(this).val());
        });

        if (selected.length > 0) {

            Swal.fire({
                title: 'Are you sure you want to delete these Message(s) ('+selected.length+')?',
                showCancelButton: true,
                confirmButtonText: 'Delete',
                confirmButtonColor: '#2691d9',
            }).then(function (result) {
                if (result.isConfirmed) { 
                    deleteSentMessage({
                        sent_message_id: selected
                    });
                } 
            });
        } else {
            // Swal.fire('Cannot delete the message.', 'Please select atleast 1 message!', 'error');
            Swal.fire({
                title: 'Oops...',
                text: 'Please select atleast 1 message',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
        }
    });

    function loadEmployee()
    {
        generateEmptyTemplate('#employee-contacts');
        ajaxRequest(null,
            {
                url: get_active_employee_list,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {

                    if (response_data.content.employees != null) {
                        if (response_data.content.employees.length > 0) {
                            generateContactMessage('#employee-contacts', response_data.content.employees);
                        }
                    }
                }
            });
    }

    function loadSentMessage()
    {
        generateEmptyTemplate('#sent-messages');

        ajaxRequest(null,
        {
            url: get_sent_message,
            type: "GET",
            headers: assignAuthHeader(),
            dataType: "json",
        },
        function (response_data) {
            if (response_data.status == true) {
                if (response_data.content != null) {
                    if (response_data.content.length > 0) {
                        generateTemplateSentMessage('#sent-messages', response_data.content);
                    }
                }
            }
        });
    }

    function deleteSentMessage(data)
    {
        ajaxRequest(data,
            {
                url: delete_sent_message,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    loadSentMessage();
                    // Swal.fire('Message is successfully removed!', '', 'success');
                    Swal.fire({
                        title: 'Message is successfully removed!',
                        text: '',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                } else {
                    // Swal.fire('Cannot delete the message.', ' Please check the data!', 'error');
                    Swal.fire({
                        title: 'Oh no!',
                        text: 'Cannot delete the message. Please check the data',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                }
            });
    }

    function getSentMessageDetail(data)
    {

        ajaxRequest(data,
            {
                url: get_sent_message_detail,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
        function (response_data) {
            if (response_data.status == true) {
                if (response_data.content.length > 0) {
                    generateTemplateMessageDetail("#view-message-detail-modal", response_data.content);
                }
            }
        });
    }


    function createMessage(data)
    {
        ajaxRequest(data,
            {
                url: create_message_api,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
        function (response_data) {
            if (response_data.status == true) {
                loadSentMessage();
                $('.modal').modal('hide');
                // Swal.fire('Message is successfully sent!', '', 'success');
                Swal.fire({
                    title: 'Message is successfully sent!',
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
            }
        });
    }
    $(document).ready(function () {
        // const tx = document.getElementsByTagName("textarea");
        const tx = document.getElementsByClassName("_txtarea2");
        for (let i = 0; i < tx.length; i++) {
        tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
        tx[i].addEventListener("input", OnInput, false);
        }
    
        function OnInput() {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
        }
    });
})()