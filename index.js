$(document).ready(function(){ 

    /***********redireccionamiento botones "siguiente" **************/

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
        $('#tooltipventas').tooltip('show');
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
                $('#tooltip').tooltip('hide');
            $('#morepreciosf').click(function(){
                $("#inputgastos3").css('display','block');              
                    
                    $('#morepreciosf').click(function(){
                        $("#inputgastos4").css('display','block');                    
                        
                        
                        
                            });
                    });
        

    });

    /***********Redireccionamiento cotones regresar *********************/
    $('#rsaludo').click(function(){//Cambiar vista de gastos fijos a saludo

        $("#gastos-fijos").hide(2000);
        $("#saludo").show(2000);
        $('#tooltip').tooltip('hide');
        
    });
    $('#rgastos-fijos').click(function(){//Cambiar vista de productos a gastos fijos
        
        $("#productos").hide(2000);
        $("#gastos-fijos").show(2000);
        $('#tooltip').tooltip('show');
    });
    $('#rproducts').click(function(){//Cambiar vista de  estadisticas a productos 
        
        $("#productos").show(2000);
        $("#estadisticas").hide(2000);
        $('#tooltipventas').tooltip('hide');
    });  
           



});
$(function () {//mantiene activos los tooltips
    $('[data-toggle="tooltip"]').tooltip()
    
  })
function workname(){//Guarda el nombre en variable
    var workname =document.getElementById("workname").value;
    document.getElementById("work-name").innerHTML = workname;//Imprimir el nombre en el formulario estadisicas

}




function getdata(){ //obtiene los datos de los gastos fijos y los suma
    
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
    ventas = document.getElementById("ventas").value;//cantidad de ventas

    if (name2.length === 0) {//si no hay nada todo es igual a 0
        pven2=0;
        pund2=0;
        utld2=0;        
    }
    if (name3.length === 0) {
        pven3=0;
        pund3=0;
        utld3=0;        
    }
    if (name4.length === 0) {
        pven4=0;
        pund4=0;
        utld4=0;        
    }
    if (ventas ===0 ){
        ventas=0;
    }
    

 
   /******** Calcular punto de equilibrio *************/
  var pe1 = (Number (resultgastos) /(Number(pven1)-Number(pund1)));
  var pe2 = (Number (resultgastos) /(Number(pven2)-Number(pund2)));               //bien
  var pe3 = (Number (resultgastos) /(Number(pven3)-Number(pund3)));
  var pe4 = (Number (resultgastos) /(Number(pven4)-Number(pund4)));
  
  /******** Calcular costo de los productos *************/
  var cos1 = (Number(resultgastos)+Number(pund1)*Number(ventas));
  var cos2 = (Number(resultgastos)+Number(pund2)*Number(ventas));
  var cos3 = (Number(resultgastos)+Number(pund3)*Number(ventas));                  //bien
  var cos4 = (Number(resultgastos)+Number(pund4)*Number(ventas));
 
  /******** Calcular ventas *************/
  var vent1 = (Number(pven1)*Number(ventas));                                   
  var vent2 = (Number(pven2)*Number(ventas));
  var vent3 = (Number(pven3)*Number(ventas));                                       //bien
  var vent4 = (Number(pven4)*Number(ventas));
  /******** Calcular utilidad de los productos *************/
  var utilidad1 = Number(vent1)-Number(cos1);
  var utilidad2 = Number(vent2)-Number(cos2);                                     //bien
  var utilidad3 = Number(vent3)-Number(cos3);
  var utilidad4 = Number(vent4)-Number(cos4);

    if (name2.length === 0) {//si no hay nada todo es igual a 0
        pe2=0;
        cos2=0;
        vent2=0;
        utilidad2= 0;     

    }
    if (name3.length === 0) {
        pe3=0;
        cos3=0;
        vent3=0;
        utilidad3= 0;       
        
    }
    if (name4.length === 0) {            
        pe4=0;
        cos4=0;
        vent4=0;
        utilidad4= 0;      
    }

/***************Calcular totales **********************/  
var totalpe= (Number(pe1)+Number(pe2)+Number(pe3)+Number(pe4)/4);//total punto de equilibrio
var totalutld = (Number(utilidad1)+Number(utilidad2)+Number(utilidad3)+Number(utilidad4));//total utilidades
var totalvent = (Number(vent1)+Number(vent2)+Number(vent3)+Number(vent4));//total ventas
var totalcost = (Number(cos1)+Number(cos2)+Number(cos3)+Number(cos4));//total costos

   

   
   /***************Validacion inputs productos y musetra en la tabla********************/
   document.getElementById("recordar").innerHTML=(new Intl.NumberFormat('en-CA', {style:'currency', currency: 'CAD', useGrouping:true }).format(resultgastos.toFixed()));//imprime gastos fijos arriendo,nomina etc..
   document.getElementById("name1").innerHTML= name1;//imprime nombre1  en la tabla 
   document.getElementById("pe1").innerHTML=pe1.toFixed();//imprime punto equilibrio 1 en la tabla
   document.getElementById("cos1").innerHTML=(new Intl.NumberFormat('en-CA', {style:'currency', currency: 'CAD', useGrouping:true }).format(cos1.toFixed()));//imprime costos 1 en la tabla
   
   
   if (name2.length != 0) {//si esta vacio el input 2 lo oculta en la tabla, igual los que le siguen
    $('#product2').show(1);
    document.getElementById("name2").innerHTML= name2;//nombre2
    document.getElementById("pe2").innerHTML=pe2.toFixed();//imprime punto equilibrio 2
    document.getElementById("cos2").innerHTML=(new Intl.NumberFormat('en-CA', {style:'currency', currency: 'CAD', useGrouping:true }).format(cos2));//imprime costos 2
    
}
if (name3.length != 0) {
    $('#product3').show(1);
    document.getElementById("name3").innerHTML= name3;//nombre3
    document.getElementById("pe3").innerHTML=pe3.toFixed();//imprime punto equilibrio 3
    document.getElementById("cos3").innerHTML=(new Intl.NumberFormat('en-CA', {style:'currency', currency: 'CAD', useGrouping:true }).format(cos3));//imprime costos 3
}
if (name4.length != 0) {
    $('#product4').show(1);
    document.getElementById("name4").innerHTML= name4;//nombre 4
    document.getElementById("pe4").innerHTML=pe4.toFixed();//imprime punto equilibrio 4
    document.getElementById("cos4").innerHTML=(new Intl.NumberFormat('en-CA', {style:'currency', currency: 'CAD', useGrouping:true }).format(cos4));//imprime costos 4
    document.getElementById("utld4").innerHTML=utilidad4;//imprime la utilidad
}
  

   
$('#calcular').click(function(){
    $('#tooltipventas').tooltip('hide');
    $('.calcular').show(123);
    document.getElementById("utld1").innerHTML=(new Intl.NumberFormat('en-CA', {style:'currency', currency: 'CAD', useGrouping:true }).format(utilidad1));//imprime la utilidad
    document.getElementById("utld2").innerHTML=(new Intl.NumberFormat('en-CA', {style:'currency', currency: 'CAD', useGrouping:true }).format(utilidad2));//imprime la utilidad
    document.getElementById("utld3").innerHTML=(new Intl.NumberFormat('en-CA', {style:'currency', currency: 'CAD', useGrouping:true }).format(utilidad3));//imprime la utilidad
    document.getElementById("totalpe").innerHTML=(new Intl.NumberFormat('en-CA', {style:'currency', currency: 'CAD', useGrouping:true }).format(totalpe.toFixed()));
    document.getElementById("totalcost").innerHTML=(new Intl.NumberFormat('en-CA', {style:'currency', currency: 'CAD', useGrouping:true }).format(totalcost));
    document.getElementById("totalutl").innerHTML=(new Intl.NumberFormat('en-CA', {style:'currency', currency: 'CAD', useGrouping:true }).format(totalutld));   
        $('#calcular').click(function(){
            $('#tooltippe').tooltip('show');

            
    });
});

}


