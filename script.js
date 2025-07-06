
const countdown = document.getElementById("countdown");
const releaseDate = new Date("2025-09-01T00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = releaseDate - now;

    if (distance < 0) {
        countdown.innerHTML = "Available Now.";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    countdown.innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m`;
}, 1000);
