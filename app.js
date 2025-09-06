// База данных советов по знакам зодиака
const horoscopeData = {
    aries: { icon: '♈', name: 'Овен', love: ["Сегодня звезды советуют проявить инициативу в отношениях. Сделайте первый шаг!", "Романтический сюрприз поможет укрепить вашу связь с партнером."], career: ["Смело беритесь за новые проекты - сегодняшний день благоприятен для начинаний.", "Ваша энергия впечатляет начальство. Покажите, на что вы способны!"], money: ["Неожиданная финансовая возможность появится на горизонте. Будьте внимательны.", "Хороший день для инвестиций в собственное образование."], health: ["Физическая активность поможет снять стресс. Займитесь спортом!", "Обратите внимание на режим дня - это улучшит ваше самочувствие."], mood: ["День энергии и энтузиазма! Зарядите своим настроением окружающих.", "Ваша уверенность в себе сегодня на высоте. Используйте это!"] },
    taurus: { icon: '♉', name: 'Телец', love: ["Проявите терпение к партнеру - сегодня это особенно важно.", "Создайте уютную атмосферу для романтического вечера."], career: ["Стабильность и методичность приведут к успеху. Не торопитесь.", "Хороший день для завершения текущих проектов."], money: ["Финансовая стабильность - ваша сильная сторона. Продолжайте в том же духе.", "Возможна неожиданная премия или денежный подарок."], health: ["Обратите внимание на питание. Полезная еда улучшит ваше самочувствие.", "Прогулка на свежем воздухе поможет восстановить силы."], mood: ["День гармонии и спокойствия. Наслаждайтесь моментом.", "Ваша практичность помогает сохранять душевное равновесие."] },
    gemini: { icon: '♊', name: 'Близнецы', love: ["Общение - ключ к успеху в отношениях. Поделитесь своими мыслями.", "Новые знакомства могут привести к интересным отношениям."], career: ["Мультизадачность - ваша сильная сторона. Используйте это сегодня.", "Идеи приходят потоком. Записывайте самые интересные."], money: ["Возможны неожиданные денежные поступления. Будьте готовы.", "Хороший день для обучения финансовой грамотности."], health: ["Дыхательные упражнения помогут успокоить нервную систему.", "Смена обстановки пойдет на пользу вашему здоровью."], mood: ["День перемен и новых впечатлений. Будьте открыты к новому!", "Ваша любознательность приводит к интересным открытиям."] },
    cancer: { icon: '♋', name: 'Рак', love: ["Проявите заботу о близких - это укрепит ваши отношения.", "Доверьтесь своим чувствам в принятии важных решений."], career: ["Интуиция подскажет верное решение в рабочих вопросах.", "Создайте уютную атмосферу на рабочем месте."], money: ["Доверяйте интуиции в финансовых вопросах, но не забывайте о логике.", "Хороший день для планирования семейного бюджета."], health: ["Забота о эмоциональном состоянии так же важна, как и о физическом.", "Водные процедуры помогут расслабиться и снять стресс."], mood: ["День эмоциональной чувствительности. Окружите себя приятными людьми.", "Ваша эмпатия помогает понимать окружающих."] },
    leo: { icon: '♌', name: 'Лев', love: ["Щедрость и внимание к партнеру укрепят ваши отношения.", "Не бойтесь проявлять свои чувства - сегодня это уместно."], career: ["Лидерские качества помогут в решении сложных задач.", "Ваша уверенность впечатляет коллег. Используйте это!"], money: ["Возможны приятные траты на себя и близких. Получите удовольствие!", "Хороший день для инвестиций в собственный имидж."], health: ["Физическая активность принесет удовольствие и пользу.", "Солнечные ванны улучшат настроение и самочувствие."], mood: ["День творчества и самовыражения. Покажите себя миру!", "Ваш оптимизм заряжает окружающих положительной энергией."] },
    virgo: { icon: '♍', name: 'Дева', love: ["Внимание к деталям поможет избежать недоразумений в отношениях.", "Практичные советы будут appreciated вашим партнером."], career: ["Систематизация и порядок приведут к успеху в работе.", "Анализ текущих процессов поможет найти точки роста."], money: ["Планирование расходов спасет от ненужных трат.", "Хороший день для наведения порядка в финансовых документах."], health: ["Регулярность в занятиях спортом принесет лучшие результаты.", "Здоровое питание улучшит самочувствие и внешний вид."], mood: ["День ясности и порядка. Наведите порядок в мыслях и делах.", "Ваша практичность помогает решать сложные задачи."] },
    libra: { icon: '♎', name: 'Весы', love: ["Баланс и гармония - ключ к успешным отношениям сегодня.", "Компромисс поможет решить любые разногласия."], career: ["Сотрудничество принесет лучшие результаты, чем работа в одиночку.", "Ваше чувство справедливости поможет в принятии решений."], money: ["Взвешенные финансовые решения принесут стабильность.", "Хороший день для планирования совместных покупок."], health: ["Баланс между работой и отдыхом улучшит самочувствие.", "Йога или медитация помогут найти внутреннюю гармонию."], mood: ["День гармонии и красоты. Окружите себя прекрасным.", "Ваш дипломатический подход помогает в общении."] },
    scorpio: { icon: '♏', name: 'Скорпион', love: ["Глубокие эмоциональные связи укрепят ваши отношения.", "Доверие - основа успеха в личной жизни сегодня."], career: ["Интуиция подскажет верное решение в сложных ситуациях.", "Ваша настойчивость поможет достичь цели."], money: ["Стратегическое планирование finances принесет результаты.", "Возможны неожиданные источники дохода."], health: ["Глубокий отдых и восстановление сил важны сегодня.", "Внимание к деталям поможет сохранить здоровье."], mood: ["День трансформации и глубины. Прислушайтесь к интуиции.", "Ваша страсть и целеустремленность вдохновляют."] },
    sagittarius: { icon: '♐', name: 'Стрелец', love: ["Приключения и новые впечатления укрепят отношения.", "Оптимизм и чувство юмора - ваши лучшие помощники."], career: ["Расширение горизонтов принесет новые возможности.", "Международные связи могут быть особенно удачными."], money: ["Инвестиции в образование и путешествия окупятся.", "Возможны неожиданные финансовные возможности."], health: ["Активный отдых на природе улучшит самочувствие.", "Долгие прогулки принесут пользу и удовольствие."], mood: ["День свободы и приключений. Исследуйте новое!", "Ваш оптимизм заразителен для окружающих."] },
    capricorn: { icon: '♑', name: 'Козерог', love: ["Надежность и стабильность - основа отношений сегодня.", "Серьезный подход к чувствам будет оценен партнером."], career: ["Дисциплина и трудолюбие приведут к успеху.", "Долгосрочное планирование особенно эффективно."], money: ["Консервативный подход к финансам принесет стабильность.", "Хороший день для инвестиций в недвижимость."], health: ["Регулярность и режим - ключ к хорошему самочувствию.", "Умеренные физические нагрузки принесут пользу."], mood: ["День ответственности и достижений. Двигайтесь к цели!", "Ваша надежность вызывает уважение окружающих."] },
    aquarius: { icon: '♒', name: 'Водолей', love: ["Дружба и интеллектуальная связь укрепят отношения.", "Нестандартный подход к романтике будет оценен."], career: ["Инновационные идеи принесут успех в работе.", "Сотрудничество с единомышленниками особенно продуктивно."], money: ["Инвестиции в технологии и innovation могут быть удачными.", "Хороший день для финансового планирования будущего."], health: ["Техники релаксации и meditation помогут снять stress.", "Необычные виды fitness принесут удовольствие."], mood: ["День инноваций и свободы. Мечтайте о будущем!", "Ваша оригинальность вдохновляет окружающих."] },
    pisces: { icon: '♓', name: 'Рыбы', love: ["Романтика и духовная связь укрепят отношения.", "Эмпатия и понимание - ключ к гармонии сегодня."], career: ["Творческий подход принесет успех в работе.", "Интуиция подскажет верное направление действий."], money: ["Инвестиции в искусство и beauty могут быть удачными.", "Доверяйте интуиции в финансовых вопросах."], health: ["Водные процедуры и отдых у воды улучшат самочувствие.", "Медитация и dream work особенно полезны сегодня."], mood: ["День мечтаний и inspiration. Прислушайтесь к сердцу!", "Ваша чувствительность - это сила, а не слабость."] }
};

// Основная функция инициализации
function initApp() {
    console.log('Инициализация приложения...');
    
    // Сразу скрываем loader чтобы не зависал
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'none';
    }
    
    // Показываем основной контент
    const container = document.querySelector('.container');
    if (container) {
        container.style.display = 'block';
    }
    
    // Инициализируем компоненты
    createStars();
    initZodiacGrid();
    setupEventListeners();
    
    console.log('Приложение инициализировано');
}

// Генерация звездного фона
function createStars() {
    const stars = document.getElementById('stars');
    if (!stars) return;
    
    stars.innerHTML = '';
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 2 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        stars.appendChild(star);
    }
}

function initZodiacGrid() {
    const grid = document.getElementById('zodiac-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
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
    let selectedSign = null;

    // Выбор знака зодиака
    document.querySelectorAll('.zodiac-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.zodiac-item').forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
            selectedSign = this.dataset.sign;
            
            document.getElementById('zodiac-section').classList.add('hidden');
            document.getElementById('category-section').classList.remove('hidden');
        });
    });

    // Выбор категории
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (!selectedSign) return;
            const category = this.dataset.category;
            showAdvice(selectedSign, category);
        });
    });

    // Кнопка "Назад" в категориях
    const categoryBackBtn = document.getElementById('category-back-btn');
    if (categoryBackBtn) {
        categoryBackBtn.addEventListener('click', function() {
            document.getElementById('category-section').classList.add('hidden');
            document.getElementById('zodiac-section').classList.remove('hidden');
            document.querySelectorAll('.zodiac-item').forEach(i => i.classList.remove('selected'));
        });
    }

    // Кнопка "Назад" в результате
    const resultBackBtn = document.getElementById('back-btn');
    if (resultBackBtn) {
        resultBackBtn.addEventListener('click', function() {
            document.getElementById('result-section').classList.add('hidden');
            document.getElementById('category-section').classList.remove('hidden');
        });
    }

    // Кнопка "Поделиться"
    const shareBtn = document.getElementById('share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            if (window.currentAdvice) {
                navigator.clipboard.writeText(
                    `🔮 ${window.currentAdvice.icon} АстроГид для ${window.currentAdvice.sign}:\n\n${window.currentAdvice.advice}`
                ).then(() => {
                    alert('Совет скопирован!');
                });
            }
        });
    }
}

function showAdvice(sign, category) {
    if (!horoscopeData[sign] || !horoscopeData[sign][category]) return;
    
    const signData = horoscopeData[sign];
    const adviceList = signData[category];
    const randomAdvice = adviceList[Math.floor(Math.random() * adviceList.length)];

    document.getElementById('result-icon').textContent = signData.icon;
    document.getElementById('result-title').textContent = `Совет для ${signData.name}`;
    document.getElementById('advice-text').textContent = randomAdvice;

    document.getElementById('category-section').classList.add('hidden');
    document.getElementById('result-section').classList.remove('hidden');

    window.currentAdvice = {
        sign: signData.name,
        icon: signData.icon,
        advice: randomAdvice
    };
}

// Запускаем приложение сразу
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM готов');
    setTimeout(initApp, 100); // Небольшая задержка для гарантии
});

// На всякий случай - fallback
setTimeout(initApp, 2000);
