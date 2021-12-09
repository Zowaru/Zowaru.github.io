// NON MODIFICARE I SEGUENTI VETTORI

gruppi_italiano = [
    [
        'Amato','Colella','Mocchi','Esposito'
    ],
    [
        'Rizzo','Di Bari','Pappadá','Palmisano V.'
    ],
    [
        'Pagliarulo','Moro','Dinapoli','Masciandare'
    ],
    [
        'D\'Onghia','Lucarella','Perrini','D\'Aria'
    ]
];

gruppi_storia = [
    [
        'Pagliarulo','Moro','Dinapoli','Masciandare'
    ],
    [
        'D\'Onghia','Lucarella','Perrini','D\'Aria'
    ],
    [
        'Amato','D\'Aria','Colella','Mocchi','Esposito', 
    ],
    [
        'Rizzo','Di Bari','Pappadá','Palmisano V.'
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
    'data':'13 Dicembre',
    'argomento':'Shakespeare - Ignazzi',
    'gruppo':gruppi_italiano[2],
}

storia = {
    'materia':'Storia',
    'data':'16 Dicembre',
    'argomento':'Capitolo 4 - Capitolo 5',
    'gruppo':gruppi_storia[2],
}

telecomunicazioni = {
    'materia':'Telecomunicazioni',
    'data':'-',
    'argomento':'',
    'gruppo':gruppi_telecomunicazioni[6],
}


//

document.getElementById('materia').innerText = italiano['materia'];
document.getElementById('data').innerText = italiano['data'];
document.getElementById('argomento').innerText = italiano['argomento'];

document.getElementById('interrogati').innerText = "";
italiano['gruppo'].forEach(alunno => {
    document.getElementById('interrogati').innerText += "\n" + alunno;
});


function compilaDati(interrogati)
{
    animazioneContainer();

    setTimeout(() => {
        document.getElementById('materia').innerText = interrogati['materia'];
        document.getElementById('data').innerText = interrogati['data'];
        document.getElementById('argomento').innerText = interrogati['argomento'];

        document.getElementById('interrogati').innerText = "";
        interrogati['gruppo'].forEach(alunno => {
            document.getElementById('interrogati').innerText += "\n" + alunno;
        });
    }, 500); 
}
