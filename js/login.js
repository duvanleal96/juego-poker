/*   $("#FormLogin").on('submit', function(e) {
        e.preventDefault();
        var datos = $(this).serializeArray();
        console.log(datos);
        $.ajax({
            url: $(this).attr("action"),
            data: datos,
            type: $(this).attr("method"),
            success: function(data) {
                //console.log(data);
                var resultado = JSON.parse(data);
                //console.log(resultado);
               

                    if (resultado.Usuario == 'admin' && resultado.clave =='1234') {
                        setTimeout(function() {
                            window.location.href = "../html/cartas.html";
                        }, 2000);
                    
                 }
            }
        });
    });
});/*