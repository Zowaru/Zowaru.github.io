// questo file verrà eseguito su TUTTE le pagine

// SW
if ('serviceWorker' in navigator) 
{
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
}

// posizionamento iniziale componenti
document.getElementById('contenitoreBottoni').style.bottom = '0';
document.getElementById('linkBottoni').style.bottom = '3.1em';
document.getElementById('container').style.bottom = 'calc(-50% + 1rem)';
document.getElementById('container').style.transform = 'translateY(-50%)';


// animazione per il contenitore delle carte principali
function animazioneContainer()
{
    document.getElementById('container').style.bottom = '50%';
    setTimeout(() => {    
        document.getElementById('container').style.bottom = 'calc(-50% + 1rem)';
    }, 250);
}



// gestione data
    // ritorna giorno della settimana stringa-italiano
    function giornoSettimana(numero=1)
    {
        // numero: 0 - 6 -> { 0 == domenica - 1 == Lunedi - ... }
        let g
        switch (numero)
        {
            case 0:
                g = 'Domenica';
                break;

            case 1:
                g = 'Lunedí';
                break;

            case 2:
                g = 'Martedí';
                break;

            case 3:
                g = 'Mercoledí';
                break;

            case 4:
                g = 'Giovedí';
                break;

            case 5:
                g = 'Venerdí';
                break;

            case 6:
                g = 'Sabato';
                break;

            default:
                g = 'Errore';
                
        }

        return g;

    }

    // ritorna il nome del mese in base al numero
    function nomeMese(numero)
    {
        let m;
        switch (numero)
        {
            case 1:
                m = 'Gennaio';
                break;
                
            case 2:
                m = 'Febbraio';
                break;
                
            case 3:
                m = 'Marzo';
                break;
                
            case 4:
                m = 'Aprile';
                break;
                
            case 5:
                m = 'Maggio';
                break;
                
            case 6:
                m = 'Giugno';
                break;
                
            case 7:
                m = 'Luglio';
                break;
                
            case 8:
                m = 'Agosto';
                break;
                
            case 9:
                m = 'Settembre';
                break;
                
            case 10:
                m = 'Ottobre';
                break;
                
            case 11:
                m = 'Novembre';
                break;
                
            case 12:
                m = 'Dicembre';
                break;

            default:
                m = ''
                break;
            
        }
        
        return m;
    }

////////// FINE GESTIONE DATA //////////

