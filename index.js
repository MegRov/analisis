$(document).ready(function(){ 

    $('#ocultarsaludo').click(function(){//Cambiar vista de saludo a gastos fijos

        $("#saludo").hide(2000);
        $("#gastos-fijos").show(2000);
        $('#tooltip').tooltip('show')
        
    });
    $('#ocultargastos-fijos').click(function(){//Cambiar vista de gastos fijos a productos
    
        $("#gastos-fijos").hide(2000);
        $("#productos").show(2000);
    });
    $('#verestadisticas').click(function(){//Cambiar vista de productos a estadisticas
    
        $("#productos").hide(2000);
        $("#estadisticas").show(2000);
    });
    $('#moreproducts').click(function(){//Añadir productos

    
        $("#producto1").hide(21334);
        $("#producto2").show(2000);
        $("#productonum").html('Añade tu producto 2');
            
            $('#moreproducts').click(function(){
                $("#productonum").hide(2000);                
                $("#productonum").html('Añade tu producto 3 ');
                $("#productonum").show(2000);
                $("#producto2").hide(21334);
                $("#producto3").show(2000);
                
                    
                    $('#moreproducts').click(function(){
                        $("#productonum").hide(2000);                
                        $("#productonum").html('Añade tu producto 4');
                        $("#productonum").show(2000);
                        $("#producto3").hide(21334);
                        $("#producto4").show(2000);
                        $("#moreproducts").hide(2342);
        
                        
                        
                        
                            });
                    });
                   

    });//fin añadir productos
    $('#morepreciosf').click(function(){//Añadir inputs gastos fijos        
        $("#inputgastos2").css('display','block');            
            $('#morepreciosf').click(function(){
                $("#inputgastos3").css('display','block');              
                    
                    $('#morepreciosf').click(function(){
                        $("#inputgastos4").css('display','block');                    
                        
                        
                        
                            });
                    });
        

    });
   



});
$(function () {//mantiene activos los tooltips
    $('[data-toggle="tooltip"]').tooltip()
    
  })
function workname(){//Guarda el nombre en variable
    var workname =document.getElementById("workname").value;
    console.log(workname);

}




function getdata(){ //obtiene los datos de los gastos y los suma
    
    var inputgastos1 = document.getElementById("inputgasto1").value;
    var inputgastos2 = document.getElementById("inputgasto2").value;
    var inputgastos3 = document.getElementById("inputgasto3").value;
    var inputgastos4 = document.getElementById("inputgasto4").value;
    var reultgastos =  console.log(Number(inputgastos1)+Number (inputgastos2)+Number (inputgastos3)+Number (inputgastos4));

}
