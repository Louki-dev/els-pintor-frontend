<?php require_once __DIR__ ."/include/header.inc.php";?>
</head>
    <body id="message_page">
<?php require_once __DIR__ . "/include/top-navigation.inc.php";?>
<div class="container-design-2 mt-1">
<div class="container-md">
<div class="container mt-5 mb-5">
    <div class="row">
      <!--------------------------Contacts------------------------------------------->
      <div class="col-lg-5">
          


        <!--------------------------Contact List------------------------------------------->
          <div class="card rounded-3 mb-4">
            <span href="#" class="pending_header text-light rounded-top p-2">
            <span class="fw-light text-light float-start mt-1 ps-3">
                Contacts
            </span>
            <div class="form-check form-switch ms-3 float-end mt-1">
                <input class="form-check-input" type="checkbox" id="selectallContact">
                <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                </div>
          </span>
              <div class="card-body animate__animated animate__fadeIn">
                <div class="card-body scrollarea p-0">
                  <div class="list-group fcapital" id="employee-contacts">
                  </div>
                </div>
                
              </div>
              <div class="d-grid gap-3 col-11 mx-auto mb-3">
                <button class="btn btn-outline-primary text-white select-contact"  data-bs-toggle="modal" data-bs-target="#create_message">Create Message</button>
                </div>
          </div>
        <!--------------------------End Contact List------------------------------------------->

      </div>
      <!--------------------------End Contacts------------------------------------------->




      <div class="col-lg-7">
      <form class="g-3 mb-4">
      <div class="input-group flex-nowrap">
      <span class="input-group-text pending_header text-white" id="searchclear" style="cursor:default;">Search</span>
      <input type="text" class="form-control" id="search_m" placeholder="Search by last name">
      </div>
      </form>
        <!--------------------------Sent Message------------------------------------------->            
        <div class="d-flex flex-column bg-white rounded-3">
          <span href="#" class="pending_header text-light rounded-top p-2">
            <span class="fw-light text-light float-start mt-1 ps-3">
                Sent Messages
            </span>
            <div class="dropdown">
            <a class="btn text-white material-icons float-end fs-5" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            more_vert
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><div class="form-check form-switch ms-3">
                <input class="form-check-input" type="checkbox" id="selectallSentMessage">
                <label class="form-check-label" for="flexSwitchCheckChecked">Select All</label>
                </div></li>
                <li><button class="dropdown-item btn" type="button" id="selectedSentMessage">Remove</button></li>   
            </ul>
            </div>
          </span>
          <div class="card-body animate__animated animate__fadeIn">
            <!------------------------------->
            <div class="list-group fcapital" id="sent-messages">
            </div>

            <!------------------------------->
          </div>
          <div id="sent-message-paginate" class="mb-3 mt-0 ms-3 animate__animated animate__fadeInDown"></div>
        </div>
        <!--------------------------End Sent Message------------------------------------------->
      </div>
    </div>
  </div>
</div>
</div>

<?php
require_once __DIR__ . "/include/navigation.inc.php";
require_once __DIR__ . "/include/view-message.modal.inc.php";
require_once __DIR__ . "/include/script.inc.php";
require_once __DIR__ . "/include/create-message.modal.inc.php";
require_once __DIR__ . "/include/confirm-admin.modal.inc.php";
?>
</body>
</html>