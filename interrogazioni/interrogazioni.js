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
// Gennaio == 00 - Febbraio == 1 ...

italiano = {
    'materia':'Italiano',
    'giorno':'28',
    'mese':'1',
    'argomento':'Vittorio Alfieri - (?)',
    'gruppo':gruppi_italiano[0],
}

storia = {
    'materia':'Storia',
    'giorno':'24',
    'mese':'1',
    'argomento':'Forse: capp. 7 & 8',
    'gruppo':gruppi_italiano[2],
}

telecomunicazioni = {
    'materia':'Telecomunicazioni',
    'giorno':'0',
    'mese':'0',
    'argomento':'',
    'gruppo':gruppi_telecomunicazioni[0],
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
            document.getElementById('interrogati').innerHTML = '<h6>Dati mancanti. ' + '<br>';
        }
        else
        {
            document.getElementById('materia').innerText = interrogati['materia'];
            document.getElementById('data').innerText = interrogati['giorno'];
            document.getElementById('data').innerText += " " + nomeMese(parseInt(interrogati['mese'])+1 );
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
