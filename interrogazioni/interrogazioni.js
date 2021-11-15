// NON MODIFICARE I SEGUENTI VETTORI

gruppi_italiano = [
    [
        'Amato','D\'Aria','Colella','Mocchi','Esposito'
    ],
    [
        'Rizzo','Di Bari','Pappadá','Palmisano V.'
    ],
    [
        'Pagliarulo','Moro','Dinapoli','Masciandare'
    ],
    [
        'D\'Onghia','Lucarella','Perrini','Palmisano D.'
    ]
];

gruppi_storia = [
    [
        'Pagliarulo','Moro','Dinapoli','Masciandare'
    ],
    [
        'D\'Onghia','Lucarella','Perrini','Palmisano D.'
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
        'Perrini','Palmisano D.'
    ],
    [
        'Lucarella','D\'Onghia'
    ],
    [
        'Colella','Mocchi'
    ],
    [
        'D\'Aria','Esposito'
    ],
    [
        'Amato'
    ]
];


// INTERROGAZIONI ----

italiano = {
    'materia':'Italiano',
    'data':'17 Novembre',
    'argomento':'Galillei, Ignazzi',
    'gruppo':gruppi_italiano[3],
}

storia = {
    'materia':'Storia',
    'data':'18 Novembre',
    'argomento':'Capitolo 3',
    'gruppo':gruppi_storia[3],
}

telecomunicazioni = {
    'materia':'Telecomunicazioni',
    'data':'18 Novembre',
    'argomento':'',
    'gruppo':gruppi_telecomunicazioni[4],
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
