const entities = [
    {
        city: "Rostov-on-Don\nLCD admiral",
        area: "81 m2",
        time: "3.5 months",
        cost: "Upon request",
        img: "./img/admiral.jpg" 
    },
    {
        city: "Sochi\nThieves",
        area: "105 m2",
        time: "4 months",
        cost: "Upon request",
        img: "./img/sochi.jpg" 
    },
    {
        city: "Rostov-on-Don\nPatriotic",
        area: "93 m2",
        time: "3 months",
        cost: "Upon request",
        img: "./img/patriotic.jpg" 
    }
];

// Получаем элементы со страницы
const city = document.querySelector('#city');
const area = document.querySelector('#area');
const time = document.querySelector('#time');
const img = document.querySelector('#slider-img');

const dots = document.querySelectorAll('.dot');
const links = document.querySelectorAll('.nav-item');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let currentIndex = 0;

// Главная функция переключения слайда
function setSlide(index) {
    // Безопасная проверка индекса (на всякий случай)
    if (index < 0 || index >= entities.length) return;


    city.innerText = entities[index].city; 
    area.innerText = entities[index].area;
    time.innerText = entities[index].time;
    
    img.src = entities[index].img;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');

    links.forEach(link => link.classList.remove('active'));
    links[index].classList.add('active');

    currentIndex = index;
}

//  Обработчики кликов на стрелки (Кольцевая логика)
prevBtn.addEventListener('click', () => {
    let index = currentIndex - 1;
    if (index < 0) {
        index = entities.length - 1;
    }
    setSlide(index);
});

nextBtn.addEventListener('click', () => {
    let index = currentIndex + 1;
    if (index >= entities.length) {
        index = 0;
    }
    setSlide(index);
});

// Обработчики кликов на точки
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        setSlide(index);
    });
});

// Обработчики кликов на ссылки сверху
links.forEach((link, index) => {
    link.addEventListener('click', () => {
        setSlide(index);
    });
});

// Запускаем первый слайд при загрузке
setSlide(0);