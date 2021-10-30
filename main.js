// questo file verrà eseguito su TUTTE le pagine
window.onload = function() {
    document.getElementById('contenitoreBottoni').style.bottom = '0';
    document.getElementById('linkBottoni').style.bottom = '3.1em';
    document.getElementById('container').style.bottom = 'calc(-50% + 1rem)';
    document.getElementById('container').style.transform = 'translateY(-50%)';
}