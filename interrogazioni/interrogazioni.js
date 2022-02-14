// NON MODIFICARE I SEGUENTI VETTORI

gruppi_italiano = [
    [
        'Amato','Colella','Mocchi','Esposito'
    ],
    [
        'Rizzo','Di Bari','Pappadá','Palmisano'
    ],
    [
        'Pagliarulo','Moro','Dinapoli','Masciandare'
    ],
    [
        'D\'Onghia','Lucarella','Perrini','D\'Aria'
    ]
];

gruppi_telecomunicazioni = [
    [
        'Pappadá','Palmisano V.'
    ],
    [
        'Rizzo','Di Bari'
    ],
    [
        'Moro','Dinapoli'
    ],
    [
        'Pagliarulo','Masciandare'
    ],
    [
        'Perrini','amato'
    ],
    [
        'Lucarella','D\'Onghia'
    ],
    [
        'Colella','Mocchi'
    ],
    [
        'D\'Aria','Esposito'
    ]
];


// INTERROGAZIONI ----

italiano = {
    'materia':'Italiano',
    'giorno':'17',
    'mese':'1',
    'argomento':'Arcadia e Shrekspir',
    'gruppo':gruppi_italiano[3],
}

storia = {
    'materia':'Storia',
    'giorno':'1',
    'mese':'1',
    'argomento':'Capitolo 6 (credo)',
    'gruppo':gruppi_italiano[1],
}

telecomunicazioni = {
    'materia':'Telecomunicazioni',
    'giorno':'1',
    'mese':'1',
    'argomento':'',
    'gruppo':gruppi_telecomunicazioni[6],
}


//

var data = new Date()
var pomeriggio = 0;
if (data.getHours() > 13){pomeriggio = 1}

// controlli: se giorno è passato 
function compilaDati(interrogati, animazione=true)
{
    if (animazione)
        animazioneContainer();
 
    setTimeout(() => {
        document.getElementById('argomento').innerText = "";

        if ( ( (data.getMonth() > interrogati['mese']) && ( data.getMonth() < 7) )   ||   ( data.getDate() == parseInt(interrogati['giorno'])  && data.getHours() > 13 )    ||    (data.getDate() > parseInt(interrogati['giorno'])) )
        {
            document.getElementById('materia').innerText = interrogati['materia'];
            document.getElementById('data').innerText = 'Non aggiornato!';
            document.getElementById('interrogati').innerHTML = '<h6>Dati mancanti. ' + '<br>' +'Se credi sia un problema, rompi le palle a Perrini o ' + '<br>' +'a Colella.</h6>';
        }
        else
        {
            document.getElementById('materia').innerText = interrogati['materia'];
            document.getElementById('data').innerText = interrogati['giorno'];
            document.getElementById('data').innerText += " " + nomeMese(parseInt(interrogati['mese']) );
            document.getElementById('argomento').innerText = interrogati['argomento'];

            document.getElementById('interrogati').innerText = "";
            interrogati['gruppo'].forEach(alunno => {
                document.getElementById('interrogati').innerText += alunno + '\n';
            });
        }
        
    }, 250); 
}

//

compilaDati(italiano, false)
