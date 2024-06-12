$(document).ready(function() {
    $("#calcular-btn").click(function() {
        var formData = $("#operaciones-form").serialize();
        $.ajax({
            type: "POST",
            url: "operaciones.php",
            data: formData,
            success: function(data) {
                $("#resultado").html("<p>El resultado es: " + data + "</p>");
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText); // Mostrar errores en la consola
            }
        });
    });
});