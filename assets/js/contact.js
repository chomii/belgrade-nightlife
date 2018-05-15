$('#contactForm').on('submit',
    function(event) {
        event.preventDefault();
        
        $.ajax({
            type: "POST",
            url: '../handler.php',
            data: $('#contactForm').serialize(),
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Accept", "application/json");
            },
            success: function(response) {
                data = JSON.parse(response);
                success = data.success;
                message = data.message;
                alert(message);
                if(success) location.reload();
            }
        });        
    }
);