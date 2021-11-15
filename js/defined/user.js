(function () {
    $(document).ready(function () {
        loadUser();
    });

    function loadUser()
    {
        ajaxRequest(null,
            {
            url: get_user,
            type: "GET",
            headers: assignAuthHeader(),
            dataType: "json"
        },
        function (response_data) {
            if (response_data.status == true) {
                if (response_data.content != null) {
                    if (response_data.content.length > 0) {
                        generateUser('#user_data', response_data.content);
                    }
                }
            }
        });
    }

})()