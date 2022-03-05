(function () {
    $(document).ready(function (e) {
        // prevents / disable ENTER key to reload page
        $('form').on('submit', function (e) {
            e.preventDefault();
        });

        loadEmployee();
        loadSentMessage();

        $('#view-message').on('show.bs.modal', function (e) {
            getSentMessageDetail({
                sent_message_id: $(e.relatedTarget).attr("data-info")
            });
        });

        $(document).on("click", "#done-modal", function (e) {
            $('.modal').modal('hide');
        });

        $(document).on("click", "#createMessage", function (e) {

            var $selected = [];

            $('#employee-contacts input:checked').each(function () {
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

    var typingTimer;
    var doneTypingInterval = 1000;

    $(document).on('keyup', '#search_m', function () {
        $('#search_m').keyup(function () {
            clearTimeout(typingTimer);
            if ($('#search_m').val()) {
                typingTimer = setTimeout(doneTyping, doneTypingInterval);
            } else {
                loadSentMessage();
            }
        });
    });

    function doneTyping() {
        loadSentMessage();
    }

    $(document).on("change", "#selectallContact", function (e) {
        $('#employee-contacts input:checkbox').each(function () {
            $(this).prop('checked', e.currentTarget.checked);
        });
    });

    $(document).on("change", "#selectallSentMessage", function (e) {
        $('#sent-messages input:checkbox').each(function () {
            $(this).prop('checked', e.currentTarget.checked);
        });
    });


    $(document).on("click", "#selectedSentMessage", function (e) {

        var selected = [];
        $('#sent-messages input:checked').each(function () {
            selected.push($(this).val());
        });

        if (selected.length > 0) {

            Swal.fire({
                title: 'Are you sure you want to remove these Message(s) (' + selected.length + ')?',
                showCancelButton: true,
                confirmButtonText: 'Yes, remove it!',
                confirmButtonColor: '#2691d9',
                icon: "question",
            }).then(function (result) {
                if (result.isConfirmed) {
                    $('#confirm-pass-admin').val("");
                    $('#confirm-admin-modal').modal('show');
                    var messageId = selected;
                    confirmAdmin(messageId);
                }
            });
        } else {
            Swal.fire({
                title: 'Oh no!',
                text: 'Cannot remove the message. Please select atleast 1 message',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
        }
    });

    function loadEmployee() {
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

    function loadSentMessage($offset = 0, $limit = 5, rowOffset = 0) {
        generateEmptyTemplate('#sent-messages');

        ajaxRequest(
            {
                search: $("#search_m").val()
            },
            {
                url: get_sent_message,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json"
            },
            function (response_data) {
                if (response_data.status == true) {
                    if (response_data.content != null) {
                        if (response_data.content.messages.length > 0) {

                            // renderPagination(response_data.content.count, "#message-paginate", 'message', rowOffset, $limit)
                            $('#sent-message-paginate').pagination({
                                dataSource: response_data.content.messages,
                                callback: function (data, pagination) {
                                    generateTemplateSentMessage('#sent-messages', data);
                                }
                            })
                        }
                    }
                }
            });
    }

    function confirmAdmin(messageId) {
        $(document).on("click", "#confirm-pass-submit", function (e) {
            var checkAdmin = {
                check_pass: $('#confirm-pass-admin').val()
            };
            var message_payload = {
                sent_message_id: messageId
            };

            if (checkAdmin.check_pass == '') {
                Swal.fire({
                    title: 'Admin password is required!',
                    text: '',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                $('#confirm-pass-admin').val("");
                return;
            }
            ajaxRequest(checkAdmin,
                {
                    url: check_admin,
                    type: "POST",
                    headers: assignAuthHeader(),
                    dataType: "json",
                },
                function (response_data) {
                    if (response_data.status == true) {
                        $('.modal').modal('hide');
                        $('#confirm-pass-admin').val("");
                        deleteSentMessage(message_payload)
                    } else {
                        Swal.fire({
                            title: 'Oh no!',
                            text: response_data.error,
                            icon: 'error',
                            confirmButtonText: 'OK',
                            confirmButtonColor: '#2691d9',
                        });
                        $('#confirm-pass-admin').val("");
                    }
                }
            );
        });
    }

    function deleteSentMessage(message_payload) {

        ajaxRequest(message_payload,
            {
                url: delete_sent_message,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    // loadSentMessage();
                    // loadEmployee();
                    Swal.fire({
                        title: 'Success!',
                        text: 'Message has been removed.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            window.location.reload(true);
                        }
                    });
                } else {
                    Swal.fire({
                        title: 'Oh no!',
                        text: 'Cannot remove the message. Please check the data',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                }
            });

    }

    function getSentMessageDetail(data) {

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


    function createMessage(data) {
        ajaxRequest(data,
            {
                url: create_message_api,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    // loadSentMessage();
                    // loadEmployee();
                    $('.modal').modal('hide');
                    $('#messageArea').val("");
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your message has been sent.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            window.location.reload(true);
                        }
                    });
                } else {
                    // Swal.fire('Somethin went wrong', 'Unable to complete process. Select another date', 'error');
                    Swal.fire({
                        title: 'Oh no!',
                        text: 'Something went wrong. ' + response_data.error.error,
                        icon: 'error',
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