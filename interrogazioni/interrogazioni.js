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
        'Amato','D\'Aria','Colella','Mocchi','Esposito', 'D\'Onghia'
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
    'data':'8 Novembre',
    'argomento':'Galilei - Ignazzi',
    'gruppo':gruppi_italiano[2],
}

storia = {
    'materia':'Storia',
    'data':'10 Novembre',
    'argomento':'Capitolo 3',
    'gruppo':gruppi_storia[2],
}

telecomunicazioni = {
    'materia':'Telecomunicazioni',
    'data':'3 Novembre',
    'argomento':'',
    'gruppo':gruppi_telecomunicazioni[2],
}


//

compilaDati(italiano);

function compilaDati(interrogati)
{
    document.getElementById('materia').innerText = interrogati['materia'];
    document.getElementById('data').innerText = interrogati['data'];
    document.getElementById('argomento').innerText = interrogati['argomento'];

    document.getElementById('interrogati').innerText = "";
    interrogati['gruppo'].forEach(alunno => {
        document.getElementById('interrogati').innerText += "\n" + alunno;
    });
}