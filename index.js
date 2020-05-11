$(document).ready(function(){ 

    $('#ocultarsaludo').click(function(){//Cambiar vista de saludo a gastos fijos

        $("#saludo").hide(2000);
        $("#gastos-fijos").show(2000);
        $('#tooltip').tooltip('show');
        
    });
    $('#ocultargastos-fijos').click(function(){//Cambiar vista de gastos fijos a productos
        
        $("#gastos-fijos").hide(2000);
        $("#productos").show(2000);
        $('#tooltip').tooltip('hide');
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
    document.getElementById("work-name").innerHTML = workname;//Imprimir el nombre en el formulario estadisicas

}




function getdata(){ //obtiene los datos de los gastos y los suma
    
    var inputgastos1 = document.getElementById("inputgasto1").value;
    var inputgastos2 = document.getElementById("inputgasto2").value;
    var inputgastos3 = document.getElementById("inputgasto3").value;
    var inputgastos4 = document.getElementById("inputgasto4").value;
    resultgastos = (Number(inputgastos1)+Number (inputgastos2)+Number (inputgastos3)+Number (inputgastos4));

}

function product(){
    /*********Almacenar en variable lo que viene del input**************/    
    var name1 = document.getElementById("productname1").value;//nombre product1
    var pund1 = document.getElementById("preciou1").value;//precio und
    var pven1 = document.getElementById("preciov1").value;//precio venta
    var name2 = document.getElementById("productname2").value;//nombre product2
    var pund2 = document.getElementById("preciou2").value;//precio und
    var pven2 = document.getElementById("preciov2").value;//precio venta
    var name3 = document.getElementById("productname3").value;//nombre product3
    var pund3 = document.getElementById("preciou3").value;//precio und
    var pven3 = document.getElementById("preciov3").value;//precio venta
    var name4 = document.getElementById("productname4").value;//nombre product4
    var pund4 = document.getElementById("preciou4").value;//precio und
    var pven4 = document.getElementById("preciov4").value;//precio venta
    var ventas = document.getElementById("ventas").value;//cantidad de ventas
   /******** Calcular punto de equilibrio *************/
   var pe1 = (Number (resultgastos) /(Number(pven1)-Number(pund1)));
   var pe2 = (Number (resultgastos) /(Number(pven2)-Number(pund2)));
   var pe3 = (Number (resultgastos) /(Number(pven3)-Number(pund3)));
   var pe4 = (Number (resultgastos) /(Number(pven4)-Number(pund4)));
   /******** Calcular costo de los productos *************/
   var cos1 = ((Number(resultgastos)+Number(pund1))*Number(ventas));
   var cos2 = ((Number(resultgastos)+Number(pund2))*Number(ventas));
   var cos3 = ((Number(resultgastos)+Number(pund3))*Number(ventas));
   var cos4 = ((Number(resultgastos)+Number(pund4))*Number(ventas));
   
   /******** Calcular ventas *************/

   var vent1 = (Number(pven1)-Number(ventas));
   var vent2 = (Number(pven2)-Number(ventas));
   var vent3 = (Number(pven3)-Number(ventas));
   var vent4 = (Number(pven4)-Number(ventas));
   /******** Calcular utilidad de los productos *************/
   var cos1 = (Number(cos1)-Number(vent1));
   var cos2 = (Number(cos2)-Number(vent2));
   var cos3 = (Number(cos3)-Number(vent3));
   var cos4 = (Number(cos4)-Number(vent4));
   


   
   /***************Validacion inputs productos y musetra en la tabla********************/
   document.getElementById("name1").innerHTML= name1;//nombre1 
   document.getElementById("pe1").innerHTML=pe1;//imprime punto equilibrio 1
   document.getElementById("cos1").innerHTML=cos1;//imprime costos 1

   if (name2.length != 0) {//si esta vacio el input 2 lo oculta en la tabla, igual los que le siguen
    $('#product2').show(1);
    document.getElementById("name2").innerHTML= name2;//nombre2
    document.getElementById("pe2").innerHTML=pe2;//imprime punto equilibrio 2
    document.getElementById("cos2").innerHTML=cos2;//imprime costos 2
    
}
if (name3.length != 0) {
    $('#product3').show(1);
    document.getElementById("name3").innerHTML= name3;//nombre3
    document.getElementById("pe3").innerHTML=pe3;//imprime punto equilibrio 3
    document.getElementById("cos3").innerHTML=cos3;//imprime costos 3
}
if (name4.length != 0) {
    $('#product4').show(1);
    document.getElementById("name4").innerHTML= name4;//nombre 4
    document.getElementById("pe4").innerHTML=pe4;//imprime punto equilibrio 4
    document.getElementById("cos4").innerHTML=cos4;//imprime costos 4
    }
      
    /*****************Imprimir nombres*********************/
    
}

