// База данных советов по знакам зодиака
const horoscopeData = {
    aries: {
        icon: '♈',
        name: 'Овен',
        love: [
            "Сегодня звезды советуют проявить инициативу в отношениях. Сделайте первый шаг!",
            "Романтический сюрприз поможет укрепить вашу связь с партнером."
        ],
        career: [
            "Смело беритесь за новые проекты - сегодняшний день благоприятен для начинаний.",
            "Ваша энергия впечатляет начальство. Покажите, на что вы способны!"
        ],
        money: [
            "Неожиданная финансовая возможность появится на горизонте. Будьте внимательны.",
            "Хороший день для инвестиций в собственное образование."
        ],
        health: [
            "Физическая активность поможет снять стресс. Займитесь спортом!",
            "Обратите внимание на режим дня - это улучшит ваше самочувствие."
        ],
        mood: [
            "День энергии и энтузиазма! Зарядите своим настроением окружающих.",
            "Ваша уверенность в себе сегодня на высоте. Используйте это!"
        ]
    },
    taurus: {
        icon: '♉',
        name: 'Телец',
        love: [
            "Проявите терпение к партнеру - сегодня это особенно важно.",
            "Создайте уютную атмосферу для романтического вечера."
        ],
        career: [
            "Стабильность и методичность приведут к успеху. Не торопитесь.",
            "Хороший день для завершения текущих проектов."
        ],
        money: [
            "Финансовая стабильность - ваша сильная сторона. Продолжайте в том же духе.",
            "Возможна неожиданная премия или денежный подарок."
        ],
        health: [
            "Обратите внимание на питание. Полезная еда улучшит ваше самочувствие.",
            "Прогулка на свежем воздухе поможет восстановить силы."
        ],
        mood: [
            "День гармонии и спокойствия. Наслаждайтесь моментом.",
            "Ваша практичность помогает сохранять душевное равновесие."
        ]
    },
    gemini: {
        icon: '♊',
        name: 'Близнецы',
        love: [
            "Общение - ключ к успеху в отношениях. Поделитесь своими мыслями.",
            "Новые знакомства могут привести к интересным отношениям."
        ],
        career: [
            "Мультизадачность - ваша сильная сторона. Используйте это сегодня.",
            "Идеи приходят потоком. Записывайте самые интересные."
        ],
        money: [
            "Возможны неожиданные денежные поступления. Будьте готовы.",
            "Хороший день для обучения финансовой грамотности."
        ],
        health: [
            "Дыхательные упражнения помогут успокоить нервную систему.",
            "Смена обстановки пойдет на пользу вашему здоровью."
        ],
        mood: [
            "День перемен и новых впечатлений. Будьте открыты к новому!",
            "Ваша любознательность приводит к интересным открытиям."
        ]
    },
    cancer: {
        icon: '♋',
        name: 'Рак',
        love: [
            "Проявите заботу о близких - это укрепит ваши отношения.",
            "Доверьтесь своим чувствам в принятии важных решений."
        ],
        career: [
            "Интуиция подскажет верное решение в рабочих вопросах.",
            "Создайте уютную атмосферу на рабочем месте."
        ],
        money: [
            "Доверяйте интуиции в финансовых вопросах, но не забывайте о логике.",
            "Хороший день для планирования семейного бюджета."
        ],
        health: [
            "Забота о эмоциональном состоянии так же важна, как и о физическом.",
            "Водные процедуры помогут расслабиться и снять стресс."
        ],
        mood: [
            "День эмоциональной чувствительности. Окружите себя приятными людьми.",
            "Ваша эмпатия помогает понимать окружающих."
        ]
    },
    leo: {
        icon: '♌',
        name: 'Лев',
        love: [
            "Щедрость и внимание к партнеру укрепят ваши отношения.",
            "Не бойтесь проявлять свои чувства - сегодня это уместно."
        ],
        career: [
            "Лидерские качества помогут в решении сложных задач.",
            "Ваша уверенность впечатляет коллег. Используйте это!"
        ],
        money: [
            "Возможны приятные траты на себя и близких. Получите удовольствие!",
            "Хороший день для инвестиций в собственный имидж."
        ],
        health: [
            "Физическая активность принесет удовольствие и пользу.",
            "Солнечные ванны улучшат настроение и самочувствие."
        ],
        mood: [
            "День творчества и самовыражения. Покажите себя миру!",
            "Ваш оптимизм заряжает окружающих положительной энергией."
        ]
    },
    virgo: {
        icon: '♍',
        name: 'Дева',
        love: [
            "Внимание к деталям поможет избежать недоразумений в отношениях.",
            "Практичные советы будут appreciated вашим партнером."
        ],
        career: [
            "Систематизация и порядок приведут к успеху в работе.",
            "Анализ текущих процессов поможет найти точки роста."
        ],
        money: [
            "Планирование расходов спасет от ненужных трат.",
            "Хороший день для наведения порядка в финансовых документах."
        ],
        health: [
            "Регулярность в занятиях спортом принесет лучшие результаты.",
            "Здоровое питание улучшит самочувствие и внешний вид."
        ],
        mood: [
            "День ясности и порядка. Наведите порядок в мыслях и делах.",
            "Ваша практичность помогает решать сложные задачи."
        ]
    }
};

// Генерация звездного фона
function createStars() {
    const stars = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        stars.appendChild(star);
    }
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    initZodiacGrid();
    setupEventListeners(); // Симулируем загрузку
    simulateLoading();
});

function initZodiacGrid() {
    const grid = document.getElementById('zodiac-grid');
    const zodiacSigns = [
        {id: 'aries', icon: '♈', name: 'Овен'},
        {id: 'taurus', icon: '♉', name: 'Телец'},
        {id: 'gemini', icon: '♊', name: 'Близнецы'},
        {id: 'cancer', icon: '♋', name: 'Рак'},
        {id: 'leo', icon: '♌', name: 'Лев'},
        {id: 'virgo', icon: '♍', name: 'Дева'},
        {id: 'libra', icon: '♎', name: 'Весы'},
        {id: 'scorpio', icon: '♏', name: 'Скорпион'},
        {id: 'sagittarius', icon: '♐', name: 'Стрелец'},
        {id: 'capricorn', icon: '♑', name: 'Козерог'},
        {id: 'aquarius', icon: '♒', name: 'Водолей'},
        {id: 'pisces', icon: '♓', name: 'Рыбы'}
    ];

    zodiacSigns.forEach(sign => {
        const item = document.createElement('div');
        item.className = 'zodiac-item';
        item.dataset.sign = sign.id;
        item.innerHTML = `
            <div class="zodiac-icon">${sign.icon}</div>
            <div>${sign.name}</div>
        `;
        grid.appendChild(item);
    });
}

function setupEventListeners() {
    function setupEventListeners() {
    console.log('Функция setupEventListeners запущена'); // Отладка
    
    const backButton = document.getElementById('category-back-btn');
    console.log('Найдена кнопка назад:', backButton); // Отладка
    let selectedSign = null;
    let selectedCategory = null;

    // Выбор знака зодиака
    document.querySelectorAll('.zodiac-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.zodiac-item').forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
            selectedSign = this.dataset.sign;
            
            // Показываем раздел с категориями
            document.getElementById('zodiac-section').classList.add('hidden');
            document.getElementById('category-section').classList.remove('hidden');
            document.getElementById('category-section').classList.add('fade-in');
        });
    });

    // Выбор категории
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectedCategory = this.dataset.category;
            showAdvice(selectedSign, selectedCategory);
        });
    });

    // Кнопка "Назад" в категориях (возврат к выбору знака)
    const backButton = document.getElementById('category-back-btn');
    if (backButton) {
        backButton.addEventListener('click', function() {
            console.log('Кнопка "Назад" нажата!'); // Для отладки
            document.getElementById('category-section').classList.add('hidden');
            document.getElementById('zodiac-section').classList.remove('hidden');
            document.getElementById('zodiac-section').classList.add('fade-in');
            
            // Сбрасываем выбор знака
            document.querySelectorAll('.zodiac-item').forEach(i => i.classList.remove('selected'));
            selectedSign = null;
        });
    } else {
        console.error('Кнопка category-back-btn не найдена!');
    }

    // Кнопка "Назад" в результате (возврат к выбору категории)
    const resultBackButton = document.getElementById('back-btn');
    if (resultBackButton) {
        resultBackButton.addEventListener('click', function() {
            document.getElementById('result-section').classList.add('hidden');
            document.getElementById('category-section').classList.remove('hidden');
            document.getElementById('category-section').classList.add('fade-in');
        });
    }

    // Кнопка "Поделиться"
    const shareButton = document.getElementById('share-btn');
    if (shareButton) {
        shareButton.addEventListener('click', shareAdvice);
    }
}

function showAdvice(sign, category) {
    const signData = horoscopeData[sign];
    const adviceList = signData[category];
    const randomAdvice = adviceList[Math.floor(Math.random() * adviceList.length)];

    // Обновляем интерфейс
    document.getElementById('result-icon').textContent = signData.icon;
    document.getElementById('result-title').textContent = `Совет для ${signData.name}`;
    document.getElementById('advice-text').textContent = randomAdvice;

    // Показываем раздел с результатом
    document.getElementById('category-section').classList.add('hidden');
    document.getElementById('result-section').classList.remove('hidden');
    document.getElementById('result-section').classList.add('fade-in');

    // Сохраняем текущий совет для возможности поделиться
    window.currentAdvice = {
        sign: signData.name,
        icon: signData.icon,
        category: category,
        advice: randomAdvice
    };
}

function shareAdvice() {
    const advice = window.currentAdvice;
    const shareText = `🔮 ${advice.icon} АстроГид для ${advice.sign}:\n\n${advice.advice}\n\n#астрогид #гороскоп #${advice.sign}`;
    
    // Проверяем, находится ли приложение в ВК
    if (typeof VK !== 'undefined' && VK.Share) {
        VK.Share.show({
            title: 'Мой астрологический совет',
            text: shareText,
            image: 'https://example.com/astrogid-image.jpg',
            url: window.location.href
        });
    } else {
        // Альтернатива, если не в ВК
        if (navigator.share) {
            navigator.share({
                title: 'АстроГид - Мой совет',
                text: shareText,
                url: window.location.href
            });
        } else {
            // Копирование в буфер обмена
            navigator.clipboard.writeText(shareText).then(() => {
                alert('Совет скопирован в буфер обмена! Поделитесь им вручную.');
            });
        }
    }
}

// Функция для скрытия индикатора загрузки
function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
}

// Симуляция загрузки
function simulateLoading() {
    const progressBar = document.querySelector('.loading-progress');
    let progress = 0;
    
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progressBar) {
            progressBar.style.width = Math.min(progress, 100) + '%';
        }
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(hideLoader, 500);
        }
    }, 200);
}

// Или используйте реальное событие загрузки
window.addEventListener('load', hideLoader);

// На всякий случай: скрыть loader через 5 секунд максимум
setTimeout(hideLoader, 5000);

// Инициализация VK API
if (typeof VK !== 'undefined') {
    VK.init(function() {
        console.log('VK API initialized');
    });
}
