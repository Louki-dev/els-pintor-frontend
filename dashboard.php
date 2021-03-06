<?php require_once __DIR__ . "/include/header.inc.php";?>
</head>
    <body id="dashboard_page">
<?php require_once __DIR__ . "/include/top-navigation.inc.php";?>
 
<div class="container-design-2 mt-2">
<div class="upper-section my-5">
    <div class="container-md">
        <div class="row row-cols-2 row-cols-sm-2 row-cols-xl-4 g-3">

            <div class="col">
                <div class="card shadow rounded animate__animated animate__slideInDown">
                    <div class="pending_header rounded text-light p-4 pe-4">
                        <h1 class="material-icons fs-1 float-start">person</h1>
                            <p class="fw-bold text-end fs-4 mb-0" id="emp_status_1">0</p>
                            <small class="card-text float-end fw-light">Subscribed</small>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card shadow rounded animate__animated animate__slideInDown">
                    <div class="pending_header rounded text-light p-4 pe-4">
                        <h1 class="material-icons fs-1 float-start">person</h1>
                        <p class="fw-bold text-end fs-4 mb-0" id="emp_status_0">0</p>
                        <small class="card-text float-end fw-light">Unsubscribed</small>                             
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card shadow rounded animate__animated animate__slideInDown">
                    <div class="pending_header rounded text-light p-4 pe-4">
                        <h1 class="material-icons fs-1 float-start">pending_actions</h1>
                        <p class="fw-bold text-end fs-4 mb-0" id="customer_status__1">0<p>
                        <small class="card-text float-end fw-light">Ongoing Projects </small>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card shadow rounded animate__animated animate__slideInDown">
                    <div class="pending_header rounded text-light p-4 pe-4">
                        <h1 class="material-icons fs-1 float-start">assignment_turned_in</h1>
                        <p class="fw-bold text-end fs-4 mb-0" id="customer_status_4">0</p>
                        <small class="card-text float-end fw-light">Completed Projects </small>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<form class="mb-4 container">
<div class="input-group flex-nowrap">
<span class="input-group-text pending_header text-white" style="cursor:default;">Search</span>
<input type="text" class="form-control"  id="search_d" placeholder="Search by last name">
</div>
</form>

<div class="center-section custom-m">
    <div class="container-md">
        <div class="row row-cols-1 row-cols-sm-1 row-cols-lg-3 g-3">

                <div class="accordion" id="accordionExample0">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button pending_header2 text-light fw-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseZero" aria-expanded="true" aria-controls="collapseOne">
                            Pending Requests
                            <small class="badge pending_header rounded-pill ms-1" id="customer_status_0">0</small>
                        </button>
                        </h2>
                        <div id="collapseZero" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample0">
                        <div class="accordion-body animate__animated animate__fadeIn">
                            <div class="list-group text-start" id="type-request-0">
                            </div>
                            <div id="type-request-paginate-0" class="mb-0 mt-3 animate__animated animate__fadeInDown pendd"></div>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="accordion " id="accordionExample1">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button pending_header2 text-light fw-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Approved Requests
                            <small class="badge pending_header rounded-pill ms-1" id="customer_status_1">0</small>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample1">
                        <div class="accordion-body animate__animated animate__fadeIn">
                            <div class="list-group text-start" id="type-request-1">
                            </div>
                            <div id="type-request-paginate-1" class="mb-0 mt-3 animate__animated animate__fadeInDown"></div>
                        </div>
                        </div>
                    </div>
                </div>
                    
                <div class="accordion" id="accordionExample2">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button pending_header2 text-light fw-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                            Turned Downs
                            <small class="badge pending_header rounded-pill ms-1" id="customer_status_2">0</small>
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                        <div class="accordion-body animate__animated animate__fadeIn">
                            <div class="list-group text-start" id="type-request-2">
                            </div>
                            <div id="type-request-paginate-2" class="mb-0 mt-3 animate__animated animate__fadeInDown"></div>
                        </div>
                        </div>
                    </div>
                </div>

        </div>
    </div>
</div>
</div>
<?php 
require_once __DIR__ . "/include/navigation.inc.php";
require_once __DIR__ . "/include/pending-progress.modal.inc.php";
require_once __DIR__ . "/include/approved-requeset.modal.inc.php";
require_once __DIR__ . "/include/approve-from-turndown.modal.inc.php";
require_once __DIR__ . "/include/turned-down.modal.inc.php";
require_once __DIR__ . "/include/choose-contacts.modal.inc.php";
require_once __DIR__ . "/include/choose_contacts_modal2.modal.inc.php";
require_once __DIR__ . "/include/confirm-admin.modal.inc.php";
require_once __DIR__ . "/include/script.inc.php"; 
?>
</body>
</html>