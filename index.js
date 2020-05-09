$(document).ready(function(){//Cambiar vista de saludo a gastos fijos

    $('#ocultarsaludo').click(function(){

        $("#saludo").hide(2000);
        $("#gastos-fijos").show(2000);
    });
});
$(document).ready(function(){//Cambiar vista de gastos fijos a productos

    $('#ocultargastos-fijos').click(function(){

        $("#gastos-fijos").hide(2000);
        $("#productos").show(2000);
    });
});