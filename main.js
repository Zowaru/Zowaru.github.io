// questo file verrà eseguito su TUTTE le pagine

// avvia service-worker
if ('serviceWorker' in navigator) 
{
  window.addEventListener('load', async () => {
    try 
    {
      const reg = await navigator.serviceWorker.register('/service-worker.js');
      console.log('Service worker avviato. ', reg);
    } 
    catch (err) 
    {
      console.log('registrazione service worker fallita - E: ', err);
    }

  });
}


// posizionamento iniziale componenti
document.getElementById('contenitoreBottoni').style.bottom = '0';
document.getElementById('linkBottoni').style.bottom = '3.1em';
document.getElementById('container').style.bottom = 'calc(-50% + 1rem)';
document.getElementById('container').style.transform = 'translateY(-50%)';


// mostra in base al giorno


function animazioneContainer()
{
    document.getElementById('container').style.bottom = '50%';
    setTimeout(() => {    
        document.getElementById('container').style.bottom = 'calc(-50% + 1rem)';
    }, 500);
}

