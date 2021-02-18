/*lookup con estructura de 1:N */

db.Equipos_2020.aggregate([
    {$match: {Equipos:"Mercedes-AMG Petronas Motosport" } },
    {$lookup:{
        from:"Pilotos_2020",
        localField:"Equipos",
        foreignField:"Equipos",
        as:"Equipos_Pilotos"
    }
},
])

/* RESULTADO
{ "_id" : 1, 
"Monoplaza" : "Mercedes W11 F1 2020", 
"Año_debut" : ISODate("1954-07-04T00:00:00Z"), 
"Nº_pilotos" : 2, 
"Nº_empleados_fabrica" : 860, 
"Nº_mecanicos" : 42, 
"Equipos" : "Mercedes-AMG Petronas Motosport", 
"Equipos_Pilotos" : [ { 
    "_id" : 1, 
    "Pais" : "Reino Unido", 
    "Edad" : 36, 
    "Sueldo_Euros" : 47000000, 
    "Año_debut" : ISODate("2007-03-18T00:00:00Z"), 
    "Nº_parrilla" : 44, 
    "Equipos" : "Mercedes-AMG Petronas Motosport", 
    "Pilotos" : "Lewis Hamilton" }, 
    { 
        "_id" : 2, 
        "Pais" : "Finlandia", 
        "Edad" : 31, 
        "Sueldo_Euros" : 9000000, 
        "Año_debut" : ISODate("2012-03-25T00:00:00Z"), 
        "Nº_parrilla" : 77, 
        "Equipos" : "Mercedes-AMG Petronas Motosport", 
        "Pilotos" : "Valtteri Bottas" } ] }
*/

/*Con estructura de N:M*/

db.Equipos_2020.aggregate([
    {$match: {Nº_pilotos:2 } },
    {$lookup:{
        from:"Pilotos_2020",
        localField:"Equipos",
        foreignField:"Equipos",
        as:"Equipos_Pilotos"
    }
},
]
).pretty()

/* RESULTADO
{
        "_id" : 1,
        "Monoplaza" : "Mercedes W11 F1 2020",
        "Año_debut" : ISODate("1954-07-04T00:00:00Z"),
        "Nº_pilotos" : 2,
        "Nº_empleados_fabrica" : 860,
        "Nº_mecanicos" : 42,
        "Equipos" : "Mercedes-AMG Petronas Motosport",
        "Equipos_Pilotos" : [
                {
                        "_id" : 1,
                        "Pais" : "Reino Unido",
                        "Edad" : 36,
                        "Sueldo_Euros" : 47000000,
                        "Año_debut" : ISODate("2007-03-18T00:00:00Z"),
                        "Nº_parrilla" : 44,
                        "Equipos" : "Mercedes-AMG Petronas Motosport",
                        "Pilotos" : "Lewis Hamilton"
                },
                {
                        "_id" : 2,
                        "Pais" : "Finlandia",
                        "Edad" : 31,
                        "Sueldo_Euros" : 9000000,
                        "Año_debut" : ISODate("2012-03-25T00:00:00Z"),
                        "Nº_parrilla" : 77,
                        "Equipos" : "Mercedes-AMG Petronas Motosport",
                        "Pilotos" : "Valtteri Bottas"
                }
        ]
}
{
        "_id" : 2,
        "Monoplaza" : "Ferrari SF1000",
        "Año_debut" : ISODate("1950-05-21T00:00:00Z"),
        "Nº_pilotos" : 2,
        "Nº_empleados_fabrica" : 960,
        "Nº_mecanicos" : 60,
        "Equipos" : "Scuderia Ferrari",
        "Equipos_Pilotos" : [
                {
                        "_id" : 5,
                        "Pais" : "Mónaco",
                        "Edad" : 23,
                        "Año_debut" : ISODate("2017-10-01T00:00:00Z"),
                        "Nº_parrilla" : 16,
                        "Equipos" : "Scuderia Ferrari",
                        "Pilotos" : "Charles Leclerc",
                        "Sueldo_Euros" : 9000000
                },
                {
                        "_id" : 6,
                        "Pais" : "Alemania",
                        "Edad" : 33,
                        "Año_debut" : ISODate("2007-06-17T00:00:00Z"),
                        "Nº_parrilla" : 5,
                        "Equipos" : "Scuderia Ferrari",
                        "Pilotos" : "Sebastian Vettel",
                        "Sueldo_Euros" : 35000000
                }
        ]
}
{
        "_id" : 3,
        "Monoplaza" : "Red Bull RB16",
        "Año_debut" : ISODate("2005-03-06T00:00:00Z"),
        "Nº_pilotos" : 2,
        "Nº_empleados_fabrica" : 740,
        "Nº_mecanicos" : 55,
        "Equipos" : "Red Bull Racing",
        "Equipos_Pilotos" : [
                {
                        "_id" : 3,
                        "Pais" : "Países Bajos",
                        "Edad" : 23,
                        "Año_debut" : ISODate("2015-03-29T00:00:00Z"),
                        "Nº_parrilla" : 33,
                        "Equipos" : "Red Bull Racing",
                        "Pilotos" : "Max Verstappen",
                        "Sueldo_Euros" : 16000000
                },
                {
                        "_id" : 4,
                        "Pais" : "Reino Unido",
                        "Edad" : 24,
                        "Año_debut" : ISODate("2019-08-04T00:00:00Z"),
                        "Nº_parrilla" : 23,
                        "Equipos" : "Red Bull Racing",
                        "Pilotos" : "Alexander Albon",
                        "Sueldo_Euros" : 2000000
                }
        ]
}
{
        "_id" : 4,
        "Monoplaza" : "McLaren MCL35",
        "Año_debut" : ISODate("1966-05-22T00:00:00Z"),
        "Nº_pilotos" : 2,
        "Nº_empleados_fabrica" : 690,
        "Nº_mecanicos" : 36,
        "Equipos" : "McLaren",
        "Equipos_Pilotos" : [
                {
                        "_id" : 7,
                        "Pais" : "España",
                        "Edad" : 26,
                        "Año_debut" : ISODate("2015-03-29T00:00:00Z"),
                        "Nº_parrilla" : 55,
                        "Equipos" : "McLaren",
                        "Pilotos" : "Carlos Sainz Jr.",
                        "Sueldo_Euros" : 4500000
                },
                {
                        "_id" : 8,
                        "Pais" : "Reino Unido",
                        "Edad" : 21,
                        "Año_debut" : ISODate("2018-10-07T00:00:00Z"),
                        "Nº_parrilla" : 4,
                        "Equipos" : "McLaren",
                        "Pilotos" : "Lando Norris",
                        "Sueldo_Euros" : 1500000
                }
        ]
}
{
        "_id" : 5,
        "Monoplaza" : "Renault RS20",
        "Año_debut" : ISODate("1977-07-16T00:00:00Z"),
        "Nº_pilotos" : 2,
        "Nº_empleados_fabrica" : 620,
        "Nº_mecanicos" : 40,
        "Equipos" : "Renault F1 Team",
        "Equipos_Pilotos" : [
                {
                        "_id" : 9,
                        "Pais" : "Australia",
                        "Edad" : 31,
                        "Año_debut" : ISODate("2009-12-01T00:00:00Z"),
                        "Nº_parrilla" : 3,
                        "Equipos" : "Renault F1 Team",
                        "Pilotos" : "Daniel Ricciardo",
                        "Sueldo_Euros" : 20000000
                },
                {
                        "_id" : 10,
                        "Pais" : "Francia",
                        "Edad" : 24,
                        "Año_debut" : ISODate("2016-08-28T00:00:00Z"),
                        "Nº_parrilla" : 31,
                        "Equipos" : "Renault F1 Team",
                        "Pilotos" : "Esteban Ocon",
                        "Sueldo_Euros" : 4000000
                }
        ]
}
{
        "_id" : 6,
        "Monoplaza" : "Racing Point RP20",
        "Año_debut" : ISODate("2018-08-24T00:00:00Z"),
        "Nº_pilotos" : 2,
        "Nº_empleados_fabrica" : 405,
        "Nº_mecanicos" : 38,
        "Equipos" : "Racing Point Formula One Team",
        "Equipos_Pilotos" : [
                {
                        "_id" : 11,
                        "Pais" : "México",
                        "Edad" : 31,
                        "Año_debut" : ISODate("2011-03-27T00:00:00Z"),
                        "Nº_parrilla" : 11,
                        "Equipos" : "Racing Point Formula One Team",
                        "Pilotos" : "Sergio Pérez",
                        "Sueldo_Euros" : 4000000
                },
                {
                        "_id" : 12,
                        "Pais" : "Canada",
                        "Edad" : 22,
                        "Año_debut" : ISODate("2017-03-26T00:00:00Z"),
                        "Nº_parrilla" : 18,
                        "Equipos" : "Racing Point Formula One Team",
                        "Pilotos" : "Lance Stroll",
                        "Sueldo_Euros" : 1500000
                }
        ]
}
{
        "_id" : 7,
        "Monoplaza" : "Alpha Tauri AT01",
        "Año_debut" : ISODate("2006-03-12T00:00:00Z"),
        "Nº_pilotos" : 2,
        "Nº_empleados_fabrica" : 400,
        "Nº_mecanicos" : 30,
        "Equipos" : "Scuderia AlphaTauri",
        "Equipos_Pilotos" : [
                {
                        "_id" : 17,
                        "Pais" : "Francia",
                        "Edad" : 25,
                        "Año_debut" : ISODate("2017-10-01T00:00:00Z"),
                        "Nº_parrilla" : 10,
                        "Equipos" : "Scuderia AlphaTauri",
                        "Pilotos" : "Pierre Gasly",
                        "Sueldo_Euros" : 1000000
                },
                {
                        "_id" : 18,
                        "Pais" : "Rusia",
                        "Edad" : 26,
                        "Año_debut" : ISODate("2014-03-16T00:00:00Z"),
                        "Nº_parrilla" : 26,
                        "Equipos" : "Scuderia AlphaTauri",
                        "Pilotos" : "Daniil Kvyat",
                        "Sueldo_Euros" : 750000
                }
        ]
}
{
        "_id" : 8,
        "Monoplaza" : "Alfa Romeo C39",
        "Año_debut" : ISODate("1950-05-13T00:00:00Z"),
        "Nº_pilotos" : 2,
        "Nº_empleados_fabrica" : 360,
        "Nº_mecanicos" : 29,
        "Equipos" : "Alfa Romeo Racing",
        "Equipos_Pilotos" : [
                {
                        "_id" : 13,
                        "Pais" : "Finlandia",
                        "Edad" : 41,
                        "Año_debut" : ISODate("2001-03-04T00:00:00Z"),
                        "Nº_parrilla" : 7,
                        "Equipos" : "Alfa Romeo Racing",
                        "Pilotos" : "Kimi Räikkönen",
                        "Sueldo_Euros" : 6000000
                },
                {
                        "_id" : 14,
                        "Pais" : "Italia",
                        "Edad" : 27,
                        "Año_debut" : ISODate("2017-03-26T00:00:00Z"),
                        "Nº_parrilla" : 99,
                        "Equipos" : "Alfa Romeo Racing",
                        "Pilotos" : "Antonio Giovinazzi",
                        "Sueldo_Euros" : 500000
                }
        ]
}
{
        "_id" : 9,
        "Monoplaza" : "Haas VF-20",
        "Año_debut" : ISODate("2016-03-20T00:00:00Z"),
        "Nº_pilotos" : 2,
        "Nº_empleados_fabrica" : 225,
        "Nº_mecanicos" : 43,
        "Equipos" : "Haas F1 Team",
        "Equipos_Pilotos" : [
                {
                        "_id" : 15,
                        "Pais" : "Dinamarca",
                        "Edad" : 28,
                        "Año_debut" : ISODate("2014-03-16T00:00:00Z"),
                        "Nº_parrilla" : 20,
                        "Equipos" : "Haas F1 Team",
                        "Pilotos" : "Kevin Magnussen",
                        "Sueldo_Euros" : 2000000
                },
                {
                        "_id" : 16,
                        "Pais" : "Francia",
                        "Edad" : 34,
                        "Año_debut" : ISODate("2009-08-23T00:00:00Z"),
                        "Nº_parrilla" : 8,
                        "Equipos" : "Haas F1 Team",
                        "Pilotos" : "Romain Grosjean",
                        "Sueldo_Euros" : 2000000
                }
        ]
}
{
        "_id" : 10,
        "Monoplaza" : "Williams FW43",
        "Año_debut" : ISODate("1977-05-08T00:00:00Z"),
        "Nº_pilotos" : 2,
        "Nº_empleados_fabrica" : 575,
        "Nº_mecanicos" : 45,
        "Equipos" : "Williams Racing",
        "Equipos_Pilotos" : [
                {
                        "_id" : 19,
                        "Pais" : "Reino Unido",
                        "Edad" : 23,
                        "Año_debut" : ISODate("2019-06-30T00:00:00Z"),
                        "Nº_parrilla" : 63,
                        "Equipos" : "Williams Racing",
                        "Pilotos" : "George Russell",
                        "Sueldo_Euros" : 750000
                },
                {
                        "_id" : 20,
                        "Pais" : "Canada",
                        "Edad" : 25,
                        "Año_debut" : ISODate("2020-07-05T00:00:00Z"),
                        "Nº_parrilla" : 6,
                        "Equipos" : "Williams Racing",
                        "Pilotos" : "Nicholas Latifi",
                        "Sueldo_Euros" : 750000
                }
        ]
}
*/