<?php require_once __DIR__ ."/include/header.inc.php";?>
</head>
    <body id="employee_page">
<?php require_once __DIR__ . "/include/top-navigation.inc.php";?>
<div class="container-design-2">
    <div class="container mt-4">
        <div class="button-pos mt-5 float-end">
            <button type="add" class="btn btn-primary mb-3 animate__animated animate__fadeInUp" data-bs-toggle="modal" data-bs-target="#emp_create">Add Employee</button>
        </div>

        <form class="g-3 mb-3">
        <div class="input-group flex-nowrap">
        <span class="input-group-text pending_header text-white" id="searchclear" style="cursor:default;">Search</span>
        <input type="text" class="form-control" id="search_emp" placeholder="Search by last name">
        </div>
        </form>

        <div class="col">
        <table class="table_d shadow">
            <thead>
            <tr class="pending_header text-light">
                <th scope="col"><i class="material-icons">badge</i></th>
                <th scope="col">EMPLOYEE</th>
                <th scope="col">STATUS</th>
                <th scope="col">ACTION</th>
            </tr>
            </thead>
            <tbody id="employee-list-data" class="animate__animated animate__fadeIn"></tbody>
        </table>
        </div>
        <div id="employee-paginate" class="mb-5 mt-3 animate__animated animate__fadeInDown"></div>

        <hr class="container">

        <div class="mt-5">
            <h4 class="fs-5 mb-4">Get Employee to subscribed the system</h4>
            <p class="text-muted">1. Subscribers need to text "INFO" to 225650607. For Globe users, send to 21580607.</p>
            <p class="text-muted">2. Upon Receipt of the 'Welcome Message', the subscriber needs to reply YES.</p>
            <p class="text-muted">3. After The subscriber replies (Yes), reload or refresh the page.</p>
        </div>

    </div>
</div>


<?php
require_once __DIR__ . "/include/navigation.inc.php";
require_once __DIR__ . "/include/script.inc.php";
require_once __DIR__ ."/include/create-employee.modal.inc.php";
require_once __DIR__ ."/include/update-employee.modal.inc.php";
require_once __DIR__ . "/include/confirm-admin.modal.inc.php";
?>
</body>
</html>