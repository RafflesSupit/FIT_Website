 // Desktop Dropdown
 const desktopDropdownButton = document.getElementById('desktopDropdownButton');
 const desktopDropdownMenu = document.getElementById('desktopDropdownMenu');
 const desktopTriangle = document.getElementById('desktopTriangle');
 const dropDown = document.querySelector('.group');

    desktopDropdownButton.addEventListener('click', (e) => {
    e.stopPropagation();
    desktopDropdownMenu.classList.toggle('hidden');
    desktopTriangle.classList.toggle('rotate-180');
    desktopTriangle.classList.toggle('text-white');
    dropDown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
    if (!desktopDropdownButton.contains(e.target)) {
        desktopDropdownMenu.classList.add('hidden');
        desktopTriangle.classList.remove('rotate-180');
        desktopTriangle.classList.toggle('text-white');
        dropDown.classList.remove('active');
    }
    });

 // Mobile Hamburger Menu
 const hamburger = document.getElementById('hamburger');
 const mobileMenu = document.getElementById('mobileMenu');
 const overlay = document.getElementById('overlay');

    hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('translate-x-full');
    mobileMenu.classList.toggle('w-44');
    mobileMenu.classList.toggle('w-fit');
    overlay.classList.toggle('hidden');
    });

    overlay.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.add('w-44');
    mobileMenu.classList.remove('w-fit');
    overlay.classList.add('hidden');
    });

 // Mobile Dropdown
 const mobileDropdownButton = document.getElementById('mobileDropdownButton');
 const mobileDropdownMenu = document.getElementById('mobileDropdownMenu');
 const mobileTriangle = document.getElementById('mobileTriangle');

    mobileDropdownButton.addEventListener('click', () => {
    mobileDropdownMenu.classList.toggle('hidden');
    mobileDropdownButton.classList.toggle('text-transparent');
    mobileDropdownButton.classList.toggle('bg-clip-text');
    mobileDropdownButton.classList.toggle('bg-gradient-to-r');
    mobileDropdownButton.classList.toggle('from-pink-400');
    mobileDropdownButton.classList.toggle('via-purple-400');
    mobileDropdownButton.classList.toggle('to-blue-400');

    mobileTriangle.classList.toggle('rotate-180');
    mobileTriangle.classList.toggle('text-white');
    });

//countdown
const batasWaktu = new Date("2025-06-21T00:00:00").getTime();
const countDown = document.getElementById('countdown');

function formatJam(waktu) {
    return waktu < 10 ? "0" + waktu : waktu;
}

const interval = setInterval(()=>{
    const now = new Date().getTime();
    const jarak = batasWaktu - now;

    const hari = Math.floor(jarak / (1000 * 60 * 60 * 24));
    const jam = Math.floor((jarak % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const menit = Math.floor((jarak % (1000 * 60 * 60)) / (1000 * 60));
    const detik = Math.floor((jarak % (1000 * 60)) / 1000);

    countDown.innerHTML = `${formatJam(hari)} : ${formatJam(jam)} : ${formatJam(menit)} : ${formatJam(detik)}`;

    if (jarak < 0) {
        clearInterval(interval);
        countDown.innerHTML = "Waktu Habis!";
    }
},1000);