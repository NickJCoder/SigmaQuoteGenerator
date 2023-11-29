const quotes = [
    "Don't let a good day distract you from the failure you've become.",
    "Dream big, but remember, dreams are just your mind's way of messing with you.",
    "Success is for those who can't handle the glory of failure.",
    "Believe in yourself, even if everyone else thinks you're delusional.",
    "The road to success is paved with potholes of self-doubt.",
    "Stay positive; there's a good chance things can't get any worse.",
    "You're not a failure until you stop failing and start succeeding.",
    "Strive for greatness, or at least mediocrity – whatever works for you.",
    "The only thing standing between you and success is your lack of talent.",
    "Hard work pays off, but laziness pays off now.",
    "Every setback is a setup for a comeback that may or may not happen.",
    "Follow your dreams, unless they involve responsibility or effort.",
    "The glass is half full, but it's probably filled with regret and bad decisions.",
    "You're not lost; you're just on an unplanned adventure to nowhere.",
    "The early bird catches the worm, but the second mouse gets the cheese – and a break.",
    "Success is 1% inspiration, 99% convincing yourself that you're inspired.",
    "Be yourself, because everyone else is taken and probably doing better.",
    "When life gives you lemons, make lemonade and then find someone to sell it to.",
    "Procrastinate now; don't put it off until later.",
    "You miss 100% of the shots you don't take, but you probably wouldn't have made them anyway.",
    "The only limit to your success is the extent of your procrastination.",
    "If you can dream it, you can probably find an excuse not to do it.",
    "It's not about how hard you hit, it's about how many times you can complain and still do nothing.",
    "Don't stop when you're tired; stop when you're completely exhausted and demotivated.",
    "Success is the sum of small efforts repeated every day, and by small efforts, I mean minimal effort.",
    "Follow your passion, unless your passion is for napping, in which case, absolutely follow it.",
    "The only disability in life is a bad attitude, or maybe a lack of WiFi.",
    "The only way to do great work is to avoid it and hope someone else does it for you.",
    "Believe you can, and you're halfway there, unless you're trying to reach the remote."
];

function generateQuote() {
    const quoteElement = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

const video = document.querySelector("video");
video.volume = 0.1;

function toggleMute() {
    const video = document.getElementById("backgroundVideo");
    const muteIcon = document.getElementById("muteIcon");

    video.muted = !video.muted;

