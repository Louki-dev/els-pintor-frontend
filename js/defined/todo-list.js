(function () {

    $(document).on('click', '#createTodo', createTodoList);
    $(document).ready(function ()
    {
        loadTodoList();
        loadCompletedList();
    });

    $(document).on("click","#todo-done", function(e) { 
        $('.modal').modal('hide');
    });

    $(document).on("click", "#todo-update", function (e) {
        updateProject({
            todo_id :$(this).attr('data-info'),
            status: 4
        });
    });

    var typingTimer;               
    var doneTypingInterval = 1000;  

    $(document).on('keyup', '#search_t',function (){
        $('#search_t').keyup(function(){
            clearTimeout(typingTimer);
            if ($('#search_t').val()) {
                typingTimer = setTimeout(doneTyping, doneTypingInterval);
            }else{
                loadTodoList();
                loadCompletedList();
            }
        });
    });

    function doneTyping () {
        loadTodoList();
        loadCompletedList();
    }

    // selectall-inprogress

    $(document).on("change","#selectall-inprogress", function(e) { 
        $('#todoContent-0 input:checkbox').each(function() {
            $(this).prop('checked', e.currentTarget.checked);
        });

    });

    $(document).on("change", "#selectall-completed", function(e) { 
        $('#todoContent-1 input:checkbox').each(function() {
            $(this).prop('checked', e.currentTarget.checked);
        });
    });

    $(document).on("click","#delete-todoList-inprogress", function(e) { 

        var selected = [];
        $('#todoContent-0 input:checked').each(function() {
            selected.push($(this).val());
        });

        if (selected.length > 0) {

            Swal.fire({
                title: 'Are you sure you want to remove these item(s) ('+selected.length+')?',
                showCancelButton: true,
                confirmButtonText: 'Yes, remove it!',
                confirmButtonColor: '#2691d9',
                icon: "question",
            }).then(function (result){
                if (result.isConfirmed) {
                    $('#confirm-pass-admin').val("");
                    $('#confirm-admin-modal').modal('show');
                    var todoId = selected;
                    confirmAdmin(todoId);
                } else {
                    var items = document.getElementsByName('todo-uncheck');
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].type == 'checkbox')
                            items[i].checked = false;
                    }
                }
                
            });
        }else {
            Swal.fire({
                title: 'Oh no!',
                text: 'Cannot remove the project. Select atleast 1 project',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
            
        }

    });

    $(document).on("click","#delete-todoList-completed", function(e) { 

        var selected = [];
        $('#todoContent-1 input:checked').each(function() {
            selected.push($(this).val());
        });
    
        if (selected.length > 0) {
            Swal.fire({
                title: 'Are you sure you want to remove these item(s) ('+selected.length+')?',
                showCancelButton: true,
                confirmButtonText: 'Yes, remove it!',
                confirmButtonColor: '#2691d9',
                icon: "question",
            }).then(function (result) {
                if (result.isConfirmed) { 
                    $('#confirm-pass-admin').val("");
                    $('#confirm-admin-modal').modal('show');
                    var todoId = selected;
                    confirmAdmin(todoId);
                } else {
                    var items = document.getElementsByName('todo-uncheck');
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].type == 'checkbox')
                            items[i].checked = false;
                    }
                }
                
            });
        }else {
            // Swal.fire('Cannot delete the project.', 'Please select atleast 1 project!', 'error');
            Swal.fire({
                title: 'Oh no!',
                text: 'Cannot remove the project. Select atleast 1 project',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
        }

    });

    function loadTodoList()
    {
        generateEmptyTemplate("#todoContent-0");

        ajaxRequest(null,
            {
                url: get_todo_list,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
                data: {
                    search: $("#search_t").val()
                }
            },
            function (response_data) {
                if (response_data.status == true) {
                    if (response_data.content.length > 0 || typeof response_data.content.length == 'undefined') {

                        if (response_data.content[1]) {
                            $('#todoContent-paginate-0').pagination({
                                dataSource: response_data.content[1],
                                callback: function(data, pagination) {
                                    generateTodoTemplate('#todoContent-0', data, 1);
                                }
                            });
                        }
                    }
                }
            }
        );
    }

    function loadCompletedList()
    {
        generateEmptyTemplate("#todoContent-1");

        ajaxRequest(null,
            {
                url: get_completed_list,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
                data: {
                    search: $("#search_t").val()
                }
            },
            function (response_data) {
                if (response_data.status == true) {
                    if (response_data.content.length > 0 || typeof response_data.content.length == 'undefined') {

                        if (response_data.content[4]) {
                            $('#todoContent-paginate-1').pagination({
                                dataSource: response_data.content[4],
                                callback: function(data, pagination) {
                                    generateTodoTemplate('#todoContent-1', data, 4);
                                }
                            });
                        }
                    }
                }
            }
        );
    }


    function createTodoList()
    {

        var data = {
            title: $('#project-name').val(),
            address: $('#project-address').val(),
            description: $('#project-description').val(),
            deadline: $('#project-date').val(),
        };

        if (data.title == '') {
            Swal.fire({
                title: 'Oops...',
                text: 'Project name must not be empty',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
            return;
        }
        if (data.deadline == '') {
            Swal.fire({
                title: 'Oops...',
                text: 'Due date must not be empty',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
            return;
        }
        if (data.address == '') {
            Swal.fire({
                title: 'Oops...',
                text: 'Address must not be empty',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
            return;
        }
        if (data.description == '') {
            Swal.fire({
                title: 'Oops...',
                text: 'Description must not be empty',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
            return;
        }

        ajaxRequest(
            data,
            {
                url: create_todo_list,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    loadTodoList();
                    loadCompletedList();
                    $('.modal').modal('hide');
                    Swal.fire({
                        title: 'Todo is successfully added!',
                        text: '',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    })
                    .then(function (result) {
                        $('#project-name').val("");
                        $('#project-address').val("");
                        $('#project-description').val("");
                        $('#project-date').val("");
                    });
                } else {
                    Swal.fire({
                        title: 'Oh no!',
                        text: 'Something went wrong. Due date must be later than today.',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                }
            }
        );
    }

    $(document).on('show.bs.modal','#update_todo', function (e) {
        fetchIndividualProject(
            {
                todo_id:  $(e.relatedTarget).attr("data-info")
            }
        );
    });

    function fetchIndividualProject(data)
    {
        ajaxRequest(
            data,
            {
                url: get_todo_detail,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    if (response_data.content.length > 0) {
                        getTodoModalTemplate("#todo-project-modal", response_data.content[0]);
                    }
                }
            }
        );
    }

    function updateProject(data)
    {
        Swal.fire({
            title: 'Are you sure this project is complete?',
            showCancelButton: true,
            confirmButtonText: 'Complete',
            confirmButtonColor: '#2691d9',
        }).then(function (result) {
            if (result.isConfirmed) { 
                ajaxRequest(
                    data,
                    {
                        url: update_todo_by_id,
                        type: "POST",
                        headers: assignAuthHeader(),
                        dataType: "json",
                    },
                    function (response_data) {
                        if (response_data.status == true) {
                            // loadTodoList();
                            // loadCompletedList();
                            $('.modal').modal('hide');
                            // Swal.fire('Project successfully completed!', '', 'success');
                            Swal.fire({
                                title: 'Project successfully completed!',
                                text: '',
                                icon: 'success',
                                confirmButtonText: 'OK',
                                confirmButtonColor: '#2691d9',
                            }).then(function (result) {
                                if (result.isConfirmed) {
                                    window.location.reload(true);     
                                }
                            }); 
                        
                        } else {
                            // Swal.fire('Somethin went wrong', 'Required input must not be empty', 'error');
                            Swal.fire({
                                title: 'Oh no!',
                                text: 'Something went wrong. Unable to complete process',
                                icon: 'error',
                                confirmButtonText: 'OK',
                                confirmButtonColor: '#2691d9',
                            });
                        }
                    }
                ); 
            } 
        });
    }

    function confirmAdmin(todoId)
    {
        $(document).on("click","#confirm-pass-submit", function(e) {
            var checkAdmin = {
                check_pass: $('#confirm-pass-admin').val()
            };
            var todo_ongoing_delete = {
                todo_id: todoId
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
                        deleteProject(todo_ongoing_delete)
                    }else {
                        Swal.fire({
                            title: 'Oh no!',
                            text: response_data.error,
                            icon: 'error',
                            confirmButtonText: 'OK',
                            confirmButtonColor: '#2691d9',
                        });
                    }
                }
            );
        });
    }

    function deleteProject(todo_ongoing_delete)
    {
     ajaxRequest(
            todo_ongoing_delete,
            {
                url: delete_todo_by_id,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    // loadTodoList();
                    // loadCompletedList();
                    $('.modal').modal('hide');
                    Swal.fire({
                        title: 'Removed!',
                        text: 'Project has been removed.',
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
                        text: 'Cannot remove the project. Please check the data',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                }
            }
        );
    }

    $(document).on('click','#resetTodo',function (){
        $('#project-name').val("");
        $('#project-date').val("");
        $('#project-address').val("");
        $('#project-description').val("");
    });

    
})();