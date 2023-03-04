var motos = ["MT-09", "Z-1000", "R-1", "BMW RR-1000", "BMW-1200R"]

function moto1(motos)
    {
        console.log(motos[0]);
    }

var motos1 = ["MT-09", "Z-1000", "R-1", "BMW RR-1000", "BMW-1200R"]

function moto1(motos1)
    {
        console.log(motos1.length);
    }


var motos2 = ["MT-09", "Z-1000", "R-1", "BMW RR-1000", "BMW-1200R"]

motos2.forEach(function(moto)
    {
        console.log(moto)
    });

    
    var motos = 
    {
        nombre:"MT-09",
        marca: "Yamaha", 
        costo: 44900000     
    }

    function imprimirCadaElemento(motos)
    {
        const arMotos = Object.values(motos);
        for (let i = 0; i < arMotos.length; i++){;
        console.log(arMotos[i]);
    }};