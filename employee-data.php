<?php require_once __DIR__ ."/include/header.inc.php";?>
</head>
    <body id="employee_page">
    <div class="navigation">
        <nav class="navbar navbar-light navbar-expand-lg pending_header">
            <div class="container-fluid">
                <a class="navbar-brand" class="text-white" href="#">DASHBOARD</a>
            </div>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <button class="nav-link btn btn-sm text-white" id="logout">
                            <span class="material-icons material-icons-outlined">
                                logout
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
            </nav>
    </div>

<div class="container">
        <div class="button-pos mt-5 float-end">
            <button type="add" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#emp_create">Create New +</button>
            </div>
        
        <div class="col"><table class="table_d">
        <caption> </caption>
        <thead>
          <tr class="pending_header text-light">
            <th scope="col"><i class="material-icons">badge</i></th>
            <th scope="col">EMPLOYEE</th>
            <th scope="col">MOBILE NUMBER</th>
            <th scope="col">EMAIL</th>
            <th scope="col">STATUS</th>
          </tr>
        </thead>
        <tbody id="employee-list-data"></tbody>
      </table></div>

</div>


<?php
require_once __DIR__ . "/include/navigation.inc.php";
require_once __DIR__ . "/include/script.inc.php";
require_once __DIR__ ."/include/create-employee.modal.inc.php";
require_once __DIR__ ."/include/update-employee.modal.inc.php";
?>
</html>