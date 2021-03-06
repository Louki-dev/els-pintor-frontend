<?php require_once __DIR__ ."/include/header.inc.php";?>
</head>
<body id="todo_page">
<?php require_once __DIR__ . "/include/top-navigation.inc.php";?>

<div class="container-design-2 mt-5">
    <div class="container-md ">

    <form class="g-3 mb-4">
    <div class="input-group flex-nowrap">
    <span class="input-group-text pending_header text-white" id="searchclear" style="cursor:default;">Search</span>
    <input type="text" class="form-control" id="search_t" placeholder="Search by last name">
    </div>
    </form>
    
        <div class="row row-cols-1 row-cols-sm-1 row-cols-lg-2 g-3">
            <div class="col">

                <div class="list-group mb-5">   
                    <div class="card shadow-sm">
                        <div class="card-header pending_header p-2">
                            <span class="fw-light text-light float-start mt-2 ps-3">
                                Ongoing
                            </span>
                          
                            <div class="dropdown">
                            <a class="btn text-white material-icons float-end" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            more_vert
                            </a>
                            <!-- <span class="material-icons btn text-white float-end" data-bs-toggle="modal" data-bs-target="#todo" title="New Project">
                            post_add
                            </span> -->
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><div class="form-check form-switch ms-3">
                                <input class="form-check-input" type="checkbox" id="selectall-inprogress">
                                <label class="form-check-label" for="flexSwitchCheckChecked">Select All</label>
                                </div></li>
                                <li><input class="dropdown-item" type="submit" id="delete-todoList-inprogress" name='but_delete' value="Remove"></li>
                                <!-- <li><hr class="dropdown-divider"></li> -->
                                <!-- <li><input class="dropdown-item" type="submit" data-bs-toggle="modal" data-bs-target="#todo" value="New project..."></li>    -->
                            </ul>
                            </div>
                        </div>
                        <div class="card-body animate__animated animate__fadeIn" id="todoContent-0"></div>
                        <div id="todoContent-paginate-0" class="mb-3 mt-0 ms-3 animate__animated animate__fadeInDown"></div>
                    </div>
                </div>

            </div>
 
            <div class="col">
                <div class="list-group">
                    <div class="card shadow-sm">
                        <div class="card-header pending_header p-2">
                            <span class="fw-light text-light float-start mt-2 ps-3">
                                Completed 
                            </span>
                            <div class="dropdown">
                            <a class="btn text-white material-icons float-end" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            more_vert
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><div class="form-check form-switch ms-3">
                                <input class="form-check-input" type="checkbox" id="selectall-completed">
                                <label class="form-check-label" for="flexSwitchCheckChecked">Select All</label>
                                </div></li>
                                <li><input class="dropdown-item" type="submit" id="delete-todoList-completed" name='but_delete' value="Remove"></li> 
                            </ul>
                            </div>
                        </div>
                        <div class="card-body animate__animated animate__fadeIn" id="todoContent-1"></div>
                
                        <div id="todoContent-paginate-1" class="mb-3 mt-0 float-end ms-3 animate__animated animate__fadeInDown"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


        
<?php
require_once __DIR__ ."/include/view-project.modal.inc.php";
require_once __DIR__ . "/include/create-todo.inc.php";
require_once __DIR__ . "/include/navigation.inc.php";
require_once __DIR__ . "/include/script.inc.php";
require_once __DIR__ . "/include/confirm-admin.modal.inc.php";
?>
</body>
</html>