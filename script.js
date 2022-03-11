function clear()
{
    document.getElementById("anim").style.display = 'none';
    start();
    setInterval(time,1000);
}

setTimeout(clear,3500);

function start()
{
    document.getElementById("begin").style.display = "block";
}

function time()
{
    let today = new Date();
    let fest = new Date(2022,2,23);
    time = fest-today;
    let days = Math.floor(time/(86400 * 1000));
    time -= days*(86400*1000);
    let hours = Math.floor(time/(60 * 60 * 1000 ));
    time -= hours * (60 * 60 * 1000);
    let minutes = Math.floor(time/(60 * 1000));
    time -= minutes*(60*1000);
    let sec = Math.floor(time/1000);
    document.getElementById("time").innerHTML = `${days}d ${hours}h ${minutes}m ${sec}s`;
    
}
