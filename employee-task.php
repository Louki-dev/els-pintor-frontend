<?php require_once __DIR__ ."/include/header.inc.php";?>
</head>
    <body>
<?php require_once __DIR__ . "/include/top-navigation.inc.php";?>
<div class="container-design-2">
    <div class="container mt-5">
    
    <p class="mt-5 fs-3 animate__animated animate__fadeIn">Employee Task
    <button type="add" class="btn btn-primary float-end animate__animated animate__fadeInRight" id="backToemp">Back</button>
    </p>
    
    <hr>
        <div class="container d-flex mt-3 mb-3" id="emp__">
            
        </div>
        <form class="g-3 mb-3">
            <div class="input-group flex-nowrap animate__animated animate__fadeIn">
            <span class="input-group-text pending_header text-white" id="searchclear" style="cursor:default;">Search</span>
            <input type="text" class="form-control" id="search_customer" placeholder="Search by last name">
            </div>
        </form>
        
        <div class="col">
        <table class="table_d shadow">
            <thead>
            <tr class="pending_header text-light">
                <th scope="col"><i class="material-icons">assignment_ind</i></th>
                <th scope="col">CUSTOMER</th>
                <th scope="col">START DATE</th>
                <th scope="col">END DATE</th>
                <th scope="col">DATE COMPLETED</th>
                <th scope="col">STATUS</th>
            </tr>
            </thead>
            <tbody id="employee-list-task" class="animate__animated animate__fadeIn"></tbody>
        </table>
        </div>
        <div id="employee-paginate-task" class="mb-5 mt-3 animate__animated animate__fadeInDown"></div>
    </div>
</div>


<?php
require_once __DIR__ . "/include/navigation.inc.php";
?>
</body>
</html>