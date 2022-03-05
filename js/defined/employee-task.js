(function () {

    $(document).ready(function () {
        loadCustomer();

        //URL get params. Store the name parameter in URL (?emp=...) and in current page, parse URL and get all params from prev page.
        window.onload = function () {
            var url = document.location.href,
                params = url.split('?')[1].split('&'),
                data = {}, tmp;
            for (var i = 0, l = params.length; i < l; i++) {
                tmp = params[i].split('=');
                data[tmp[0]] = tmp[1];
            }
            var emp_id_data = data.dQSbcIC; //emp is from the url param

            assignEmployee({
                empId: emp_id_data
            });

            loadCustomer({
                search: $("#search_customer").val(),
                empId: emp_id_data,
            });

            //setup before functions
            var typingTimer;                //timer identifier
            var doneTypingInterval = 1000;  //time in ms (5 seconds)

            //on keyup, start the countdown
            $(document).on('keyup', '#search_customer', function () {
                $('#search_customer').keyup(function () {
                    clearTimeout(typingTimer);
                    if ($('#search_customer').val()) {
                        typingTimer = setTimeout(doneTyping, doneTypingInterval);
                    } else {
                        loadCustomer({
                            search: $("#search_customer").val(),
                            empId: emp_id_data,
                        });
                    }
                });
            });

            //user is "finished typing," do something
            function doneTyping() {
                loadCustomer({
                    search: $("#search_customer").val(),
                    empId: emp_id_data,
                });
            }

        }
    });


    $(document).on('click', '#backToemp', function () {
        window.location.replace("employee-data.php");

    });



    function loadCustomer(data) {
        generateEmptyTableTemplate('#employee-list-task');
        ajaxRequest(data,
            {
                url: get_employee_task,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {

                    if (response_data.content.count != 0) {

                        $('#employee-paginate-task').pagination({
                            dataSource: response_data.content.customers,
                            callback: function (data, pagination) {
                                generateEmployeeTask("#employee-list-task", data);
                            }
                        });

                    }
                }
            });
    }

    function generateEmployeeTask($elem, $content) {
        $($elem).empty();

        for (var el = 0; el < $content.length; el++) {

            $html = [
                '<tr>',
                '<td data-label="Customer Information" class="txt_uppercase">',
                '<span class="material-icons ' + ($content[el].customer_status == 4 ? "approved" : "offline" && ($content[el].customer_status == 2 ? "turndown" : "offline" && ($content[el].customer_status == 3 ? "turndown" : "offline"))) + '">' + ($content[el].customer_status == 1 ? "format_paint" : "assignment_turned_in" && ($content[el].customer_status == 2 ? "highlight_off" : "assignment_turned_in" && ($content[el].customer_status == 3 ? "highlight_off" : "assignment_turned_in"))) + '</span></td>',
                '<td data-label="Customer Name"><span class="fcapital">',
                '<span id=" ' + $content[el].customer_id + '">' + $content[el].customer_first_name + '</span> ',
                '<span id=" ' + $content[el].customer_id + '">' + $content[el].customer_last_name + '</span></span>',
                '</td>',
                '<td id=" ' + $content[el].customer_id + '" data-label="Start Date">' + humanReadableDate($content[el].customer_start_date) + '</td>',
                '<td id=" ' + $content[el].customer_id + '" data-label="End Date">' + humanReadableDate($content[el].customer_due_date) + '</td>',
                '<td id=" ' + $content[el].customer_id + '" data-label="Date Completed" ><span class="' + ($content[el].customer_status == 1 ? "offline" : "" && ($content[el].customer_status == 2 ? "turndown" : "")) + '">' + ($content[el].customer_completed_at == null ? "-" : humanReadableDate($content[el].customer_completed_at)) + '</span></td>',
                '<td data-label="Status"><span class="' + ($content[el].customer_status == 1 ? "offline" : "approved" && ($content[el].customer_status == 2 ? "turndown" : "approved" && ($content[el].customer_status == 3 ? "turndown" : "approved"))) + '">' + ($content[el].customer_status == 1 ? "Ongoing" : "Completed" && ($content[el].customer_status == 2 ? "Canceled" : "Completed" && ($content[el].customer_status == 3 ? "Removed" : "Completed"))) + '</span></td>',
                '</tr>'
            ];

            $($elem).append($html.join(""));

        }

    }

    function assignEmployee(data) {
        ajaxRequest(data,
            {
                url: get_assign_employee,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    if (response_data.content.employee != null) {
                        if (response_data.content.employee.length > 0) {
                            generateAssignEmployee('#emp__', response_data.content.employee);
                        }
                    }
                }

            });
    }

    function generateAssignEmployee($elem, $content) {
        $($elem).empty();

        for (var el = 0; el < $content.length; el++) {

            $html = [
                '<div href="/" class="d-flex align-items-center mb-lg-0 me-lg-auto text-dark text-decoration-none animate__animated animate__fadeInUp">',
                '<span class="material-icons me-2 pending fs-3">account_circle</span>',
                '<span class="fs-5 fw-light">' + $content[el].emp_first_name + ' ' + $content[el].emp_last_name + '',
                '</span>',
                '</div>'
            ];

            $($elem).append($html.join(""));
        }
    }


})()