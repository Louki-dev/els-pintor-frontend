(function () {

    $(document).on('click', '#createTodo', createTodoList);
    $(document).ready(function() {loadTodoList();});

    $(document).on("click","#todo-done", function(e) { 
        $('.modal').modal('hide');
    });

    $(document).on("click", "#todo-update", function(e) { 
        updateProject({
            todo_id :$(this).attr('data-info'),
            status: 1
        });
    });
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
                title: 'Are you sure you want to delete these item(s) ('+selected.length+')?',
                showCancelButton: true,
                confirmButtonText: 'Delete',
                confirmButtonColor: '#2691d9',
            }).then(function (result){
                if (result.isConfirmed) { 
                    deleteProject({
                        todo_id: selected
                    });
                } 
            });
        }else {
            Swal.fire('Cannot delete the project.', 'Please select atleast 1 project!', 'error');
        }

    });

    $(document).on("click","#delete-todoList-completed", function(e) { 

        var selected = [];
        $('#todoContent-1 input:checked').each(function() {
            selected.push($(this).val());
        });
    
        if (selected.length > 0) {
            Swal.fire({
                title: 'Are you sure you want to delete these item(s) ('+selected.length+')?',
                showCancelButton: true,
                confirmButtonText: 'Delete',
                confirmButtonColor: '#2691d9',
            }).then(function (result) {
                if (result.isConfirmed) { 
                    deleteProject({
                        todo_id: selected
                    });
                } 
            });
        }else {
            Swal.fire('Cannot delete the project.', 'Please select atleast 1 project!', 'error');
        }

    });

    function loadTodoList()
    {
        generateEmptyTemplate("#todoContent-0");
        generateEmptyTemplate("#todoContent-1");

        ajaxRequest(null,
            {
                url: get_todo_list,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    if (response_data.content.length > 0 || typeof response_data.content.length == 'undefined') {
                        for (key in response_data.content) {
                            generateTodoTemplate('#todoContent-'+key, response_data.content[key], key);
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

        if (data.deadline == '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Due date must not be empty!',
            });
            return;
        }
        if (data.title == '') {
            Swal.fire('Something went wrong', 'Project name must not be empty', 'error');
            return;
        }
        if (data.address == '') {
            Swal.fire('Something went wrong', 'Address must not be empty', 'error');
            return;
        }
        if (data.description == '') {
            Swal.fire('Something went wrong', 'Description must not be empty', 'error');
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
                    $('.modal').modal('hide');
                    Swal.fire('Todo is successfully added!', '', 'success')
                    .then(function (result) {
                        $('#project-name').val("");
                        $('#project-address').val("");
                        $('#project-description').val("");
                        $('#project-date').val("");
                    });
                } else {
                    Swal.fire('Somethin went wrong', 'Unable to complete process. Select another date', 'error');
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

    function fetchIndividualProject (data)
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
                        getTodoModalTemplate("#todo-project-modal", response_data.content[0])
                    }
                }
            }
        );
    }

    function updateProject(data)
    {
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
                    loadTodoList();
                    $('.modal').modal('hide');
                    Swal.fire('Project successfully completed!', '', 'success');
                
                } else {
                    Swal.fire('Somethin went wrong', 'Required input must not be empty', 'error');
                }
            }
        );
    }

    function deleteProject(data)
    {

        ajaxRequest(
            data,
            {
                url: delete_todo_by_id,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    loadTodoList();
                    $('.modal').modal('hide');
                    Swal.fire('Project successfully deleted!', '', 'success');
                  
                } else {
                    Swal.fire('Cannot delete the project.', 'Please check the data!', 'error');
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