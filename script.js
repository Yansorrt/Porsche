// ==================== ПОЛНАЯ БАЗА ДАННЫХ PORSCHE ====================
const PORSCHE_DB = {
    "911": {
        name: "Porsche 911", desc: "Легендарный заднемоторный спорткар | 1963 - настоящее время",
        modifications: [
            { id: "911_carrera", name: "Carrera", years: "2019-н.в.", engine: "3.0 Twin-Turbo B6", volume: "2981 см³", power: 385, torque: "450 Нм", accel: "4.2 с", topSpeed: "293 км/ч", price: 112000, engineType: "Бензиновый", trans: "8-PDK", drive: "Задний", fuel: "9.5 л" },
            { id: "911_carrera_s", name: "Carrera S", years: "2019-н.в.", engine: "3.0 Twin-Turbo B6", volume: "2981 см³", power: 450, torque: "530 Нм", accel: "3.7 с", topSpeed: "308 км/ч", price: 128000, engineType: "Бензиновый", trans: "8-PDK", drive: "Задний", fuel: "9.8 л" },
            { id: "911_carrera_4s", name: "Carrera 4S", years: "2019-н.в.", engine: "3.0 Twin-Turbo B6", volume: "2981 см³", power: 450, torque: "530 Нм", accel: "3.6 с", topSpeed: "306 км/ч", price: 134000, engineType: "Бензиновый", trans: "8-PDK", drive: "Полный", fuel: "10.0 л" },
            { id: "911_turbo", name: "Turbo", years: "2020-н.в.", engine: "3.7 Twin-Turbo B6", volume: "3745 см³", power: 580, torque: "700 Нм", accel: "2.8 с", topSpeed: "320 км/ч", price: 195000, engineType: "Бензиновый", trans: "8-PDK", drive: "Полный", fuel: "11.1 л" },
            { id: "911_turbo_s", name: "Turbo S", years: "2020-н.в.", engine: "3.7 Twin-Turbo B6", volume: "3745 см³", power: 650, torque: "800 Нм", accel: "2.6 с", topSpeed: "330 км/ч", price: 225000, engineType: "Бензиновый", trans: "8-PDK", drive: "Полный", fuel: "11.3 л" },
            { id: "911_gt3", name: "GT3", years: "2021-н.в.", engine: "4.0 B6", volume: "3996 см³", power: 510, torque: "470 Нм", accel: "3.4 с", topSpeed: "318 км/ч", price: 178000, engineType: "Бензиновый", trans: "6-МКПП", drive: "Задний", fuel: "12.4 л" },
            { id: "911_gt3_rs", name: "GT3 RS", years: "2022-н.в.", engine: "4.0 B6", volume: "3996 см³", power: 525, torque: "465 Нм", accel: "3.2 с", topSpeed: "315 км/ч", price: 225000, engineType: "Бензиновый", trans: "7-PDK", drive: "Задний", fuel: "12.7 л" },
            { id: "911_sport_classic", name: "Sport Classic", years: "2022-н.в.", engine: "3.7 Twin-Turbo B6", volume: "3745 см³", power: 543, torque: "600 Нм", accel: "3.9 с", topSpeed: "315 км/ч", price: 275000, engineType: "Бензиновый", trans: "7-МКПП", drive: "Задний", fuel: "10.8 л" },
            { id: "911_dakar", name: "911 Dakar", years: "2023-н.в.", engine: "3.0 Twin-Turbo B6", volume: "2981 см³", power: 480, torque: "570 Нм", accel: "3.4 с", topSpeed: "240 км/ч", price: 225000, engineType: "Бензиновый", trans: "8-PDK", drive: "Полный", fuel: "11.0 л" },
            { id: "911_s_targa", name: "Targa 4S", years: "2019-н.в.", engine: "3.0 Twin-Turbo B6", volume: "2981 см³", power: 450, torque: "530 Нм", accel: "3.8 с", topSpeed: "304 км/ч", price: 142000, engineType: "Бензиновый", trans: "8-PDK", drive: "Полный", fuel: "10.1 л" }
        ]},
    "Taycan": {
        name: "Porsche Taycan", desc: "Первый электрический седан Porsche | С 2019 года",
        modifications: [
            { id: "taycan", name: "Taycan", years: "2019-н.в.", engine: "Электромотор", volume: "0 см³", power: 408, torque: "345 Нм", accel: "5.4 с", topSpeed: "230 км/ч", price: 85000, engineType: "Электрический", trans: "2-ступ.", drive: "Задний", fuel: "24 кВт·ч", battery: "79.2 кВт·ч", range: "430 км" },
            { id: "taycan_4s", name: "Taycan 4S", years: "2019-н.в.", engine: "Электромотор", volume: "0 см³", power: 530, torque: "640 Нм", accel: "4.0 с", topSpeed: "250 км/ч", price: 105000, engineType: "Электрический", trans: "2-ступ.", drive: "Полный", fuel: "26 кВт·ч", battery: "93.4 кВт·ч", range: "505 км" },
            { id: "taycan_turbo", name: "Turbo", years: "2019-н.в.", engine: "Электромотор", volume: "0 см³", power: 625, torque: "850 Нм", accel: "3.2 с", topSpeed: "260 км/ч", price: 152000, engineType: "Электрический", trans: "2-ступ.", drive: "Полный", fuel: "27 кВт·ч", battery: "93.4 кВт·ч", range: "485 км" },
            { id: "taycan_turbo_s", name: "Turbo S", years: "2019-н.в.", engine: "Электромотор", volume: "0 см³", power: 761, torque: "1050 Нм", accel: "2.8 с", topSpeed: "260 км/ч", price: 195000, engineType: "Электрический", trans: "2-ступ.", drive: "Полный", fuel: "28 кВт·ч", battery: "93.4 кВт·ч", range: "440 км" },
            { id: "taycan_cross", name: "Cross Turismo 4", years: "2021-н.в.", engine: "Электромотор", volume: "0 см³", power: 476, torque: "500 Нм", accel: "5.1 с", topSpeed: "220 км/ч", price: 98000, engineType: "Электрический", trans: "2-ступ.", drive: "Полный", fuel: "26 кВт·ч", battery: "93.4 кВт·ч", range: "456 км" },
            { id: "taycan_sport", name: "Sport Turismo", years: "2022-н.в.", engine: "Электромотор", volume: "0 см³", power: 625, torque: "850 Нм", accel: "3.2 с", topSpeed: "250 км/ч", price: 155000, engineType: "Электрический", trans: "2-ступ.", drive: "Полный", fuel: "27 кВт·ч", battery: "93.4 кВт·ч", range: "478 км" }
        ]},
    "Cayenne": {
        name: "Porsche Cayenne", desc: "Спортивный люксовый внедорожник | С 2002 года",
        modifications: [
            { id: "cayenne", name: "Cayenne", years: "2017-н.в.", engine: "3.0 Turbo V6", volume: "2995 см³", power: 340, torque: "450 Нм", accel: "6.2 с", topSpeed: "245 км/ч", price: 72000, engineType: "Бензиновый", trans: "8-Tiptronic", drive: "Полный", fuel: "9.9 л" },
            { id: "cayenne_s", name: "Cayenne S", years: "2017-н.в.", engine: "2.9 Twin-Turbo V6", volume: "2894 см³", power: 440, torque: "550 Нм", accel: "5.2 с", topSpeed: "265 км/ч", price: 92000, engineType: "Бензиновый", trans: "8-Tiptronic", drive: "Полный", fuel: "10.2 л" },
            { id: "cayenne_turbo", name: "Cayenne Turbo", years: "2017-н.в.", engine: "4.0 Twin-Turbo V8", volume: "3996 см³", power: 550, torque: "770 Нм", accel: "4.1 с", topSpeed: "286 км/ч", price: 135000, engineType: "Бензиновый", trans: "8-Tiptronic", drive: "Полный", fuel: "11.5 л" },
            { id: "cayenne_turbo_gt", name: "Turbo GT", years: "2021-н.в.", engine: "4.0 Twin-Turbo V8", volume: "3996 см³", power: 640, torque: "850 Нм", accel: "3.3 с", topSpeed: "300 км/ч", price: 198000, engineType: "Бензиновый", trans: "8-Tiptronic", drive: "Полный", fuel: "12.0 л" },
            { id: "cayenne_e_hybrid", name: "E-Hybrid", years: "2018-н.в.", engine: "3.0 V6 + Электромотор", volume: "2995 см³", power: 462, torque: "700 Нм", accel: "5.0 с", topSpeed: "253 км/ч", price: 88000, engineType: "Гибрид", trans: "8-Tiptronic", drive: "Полный", fuel: "3.4 л", electric: "48 км" },
            { id: "cayenne_turbo_se", name: "Turbo S E-Hybrid", years: "2019-н.в.", engine: "4.0 V8 + Электромотор", volume: "3996 см³", power: 680, torque: "900 Нм", accel: "3.8 с", topSpeed: "295 км/ч", price: 165000, engineType: "Гибрид", trans: "8-Tiptronic", drive: "Полный", fuel: "3.8 л", electric: "44 км" }
        ]},
    "Panamera": {
        name: "Porsche Panamera", desc: "Люксовый четырёхдверный спорт-седан | С 2009 года",
        modifications: [
            { id: "panamera", name: "Panamera", years: "2020-н.в.", engine: "2.9 V6", volume: "2894 см³", power: 330, torque: "450 Нм", accel: "5.3 с", topSpeed: "259 км/ч", price: 95000, engineType: "Бензиновый", trans: "8-PDK", drive: "Задний", fuel: "9.7 л" },
            { id: "panamera_4", name: "Panamera 4", years: "2020-н.в.", engine: "2.9 V6", volume: "2894 см³", power: 330, torque: "450 Нм", accel: "5.1 с", topSpeed: "257 км/ч", price: 99000, engineType: "Бензиновый", trans: "8-PDK", drive: "Полный", fuel: "10.0 л" },
            { id: "panamera_4s", name: "Panamera 4S", years: "2020-н.в.", engine: "2.9 Twin-Turbo V6", volume: "2894 см³", power: 440, torque: "550 Нм", accel: "4.1 с", topSpeed: "295 км/ч", price: 125000, engineType: "Бензиновый", trans: "8-PDK", drive: "Полный", fuel: "10.3 л" },
            { id: "panamera_gts", name: "Panamera GTS", years: "2020-н.в.", engine: "4.0 V8", volume: "3996 см³", power: 480, torque: "620 Нм", accel: "3.9 с", topSpeed: "300 км/ч", price: 145000, engineType: "Бензиновый", trans: "8-PDK", drive: "Полный", fuel: "11.0 л" },
            { id: "panamera_turbo", name: "Turbo S", years: "2020-н.в.", engine: "4.0 Twin-Turbo V8", volume: "3996 см³", power: 630, torque: "820 Нм", accel: "3.1 с", topSpeed: "315 км/ч", price: 190000, engineType: "Бензиновый", trans: "8-PDK", drive: "Полный", fuel: "11.5 л" },
            { id: "panamera_e_hybrid", name: "4 E-Hybrid", years: "2020-н.в.", engine: "2.9 V6 + Электромотор", volume: "2894 см³", power: 462, torque: "700 Нм", accel: "4.4 с", topSpeed: "280 км/ч", price: 108000, engineType: "Гибрид", trans: "8-PDK", drive: "Полный", fuel: "3.0 л", electric: "56 км" }
        ]},
    "Macan": {
        name: "Porsche Macan", desc: "Компактный спортивный кроссовер | С 2014 года",
        modifications: [
            { id: "macan", name: "Macan", years: "2021-н.в.", engine: "2.0 Turbo", volume: "1984 см³", power: 265, torque: "400 Нм", accel: "6.2 с", topSpeed: "232 км/ч", price: 65000, engineType: "Бензиновый", trans: "7-PDK", drive: "Полный", fuel: "8.5 л" },
            { id: "macan_t", name: "Macan T", years: "2022-н.в.", engine: "2.0 Turbo", volume: "1984 см³", power: 265, torque: "400 Нм", accel: "6.0 с", topSpeed: "232 км/ч", price: 69000, engineType: "Бензиновый", trans: "7-PDK", drive: "Полный", fuel: "8.6 л" },
            { id: "macan_s", name: "Macan S", years: "2021-н.в.", engine: "2.9 V6", volume: "2894 см³", power: 380, torque: "520 Нм", accel: "4.6 с", topSpeed: "259 км/ч", price: 78000, engineType: "Бензиновый", trans: "7-PDK", drive: "Полный", fuel: "9.8 л" },
            { id: "macan_gts", name: "Macan GTS", years: "2021-н.в.", engine: "2.9 V6", volume: "2894 см³", power: 440, torque: "550 Нм", accel: "4.3 с", topSpeed: "272 км/ч", price: 88000, engineType: "Бензиновый", trans: "7-PDK", drive: "Полный", fuel: "10.0 л" },
            { id: "macan_electric", name: "Macan Electric", years: "2024-н.в.", engine: "Электромотор", volume: "0 см³", power: 600, torque: "1000 Нм", accel: "3.3 с", topSpeed: "260 км/ч", price: 95000, engineType: "Электрический", trans: "2-ступ.", drive: "Полный", fuel: "20 кВт·ч", battery: "100 кВт·ч", range: "600 км" }
        ]},
    "718": {
        name: "Porsche 718", desc: "Среднемоторный спорткар (Boxster/Cayman) | С 2016 года",
        modifications: [
            { id: "718_boxster", name: "718 Boxster", years: "2016-н.в.", engine: "2.0 Turbo", volume: "1988 см³", power: 300, torque: "380 Нм", accel: "5.1 с", topSpeed: "275 км/ч", price: 68000, engineType: "Бензиновый", trans: "6-МКПП", drive: "Задний", fuel: "8.1 л" },
            { id: "718_cayman_s", name: "718 Cayman S", years: "2016-н.в.", engine: "2.5 Turbo", volume: "2497 см³", power: 350, torque: "420 Нм", accel: "4.6 с", topSpeed: "285 км/ч", price: 78000, engineType: "Бензиновый", trans: "6-МКПП", drive: "Задний", fuel: "8.7 л" },
            { id: "718_gts", name: "718 GTS 4.0", years: "2020-н.в.", engine: "4.0 B6", volume: "3995 см³", power: 400, torque: "430 Нм", accel: "4.5 с", topSpeed: "293 км/ч", price: 95000, engineType: "Бензиновый", trans: "6-МКПП", drive: "Задний", fuel: "11.0 л" },
            { id: "718_gt4", name: "718 Cayman GT4", years: "2019-н.в.", engine: "4.0 B6", volume: "3995 см³", power: 420, torque: "420 Нм", accel: "4.4 с", topSpeed: "304 км/ч", price: 105000, engineType: "Бензиновый", trans: "6-МКПП", drive: "Задний", fuel: "11.1 л" },
            { id: "718_gt4_rs", name: "718 GT4 RS", years: "2021-н.в.", engine: "4.0 B6", volume: "3995 см³", power: 500, torque: "450 Нм", accel: "3.4 с", topSpeed: "315 км/ч", price: 145000, engineType: "Бензиновый", trans: "7-PDK", drive: "Задний", fuel: "12.0 л" },
            { id: "718_spyder_rs", name: "718 Spyder RS", years: "2023-н.в.", engine: "4.0 B6", volume: "3995 см³", power: 500, torque: "450 Нм", accel: "3.4 с", topSpeed: "308 км/ч", price: 152000, engineType: "Бензиновый", trans: "7-PDK", drive: "Задний", fuel: "11.9 л" }
        ]},
    "918 Spyder": {
        name: "Porsche 918 Spyder", desc: "Гиперкар-гибрид | 2013-2015 | Легенда",
        modifications: [
            { id: "918_spyder", name: "918 Spyder", years: "2013-2015", engine: "4.6 V8 + 2 эл.мотора", volume: "4593 см³", power: 887, torque: "1280 Нм", accel: "2.6 с", topSpeed: "345 км/ч", price: 850000, engineType: "Гибрид", trans: "7-PDK", drive: "Полный", fuel: "3.3 л", electric: "31 км", special: "Гиперкар" }
        ]},
    "Carrera GT": {
        name: "Porsche Carrera GT", desc: "Легендарный суперкар | 2003-2006 | V10",
        modifications: [
            { id: "carrera_gt", name: "Carrera GT", years: "2003-2006", engine: "5.7 V10", volume: "5733 см³", power: 612, torque: "590 Нм", accel: "3.9 с", topSpeed: "330 км/ч", price: 550000, engineType: "Бензиновый", trans: "6-МКПП", drive: "Задний", fuel: "18.5 л", special: "Коллекционная" }
        ]}
};

// Глобальные переменные
let currentModel = "911";
let favorites = JSON.parse(localStorage.getItem('porsche_favs') || '[]');
let compareList = [];
let cart = [];

// TOAST УВЕДОМЛЕНИЯ
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

// ЗАГРУЗКА МОДЕЛЕЙ В МЕНЮ
function loadModelButtons() {
    const container = document.getElementById('modelButtons');
    container.innerHTML = '';
    for (const [key, model] of Object.entries(PORSCHE_DB)) {
        const btn = document.createElement('button');
        btn.className = `model-btn ${key === currentModel ? 'active' : ''}`;
        btn.innerHTML = `<i class="fas fa-car"></i> ${model.name}`;
        btn.onclick = () => {
            currentModel = key;
            document.querySelectorAll('.model-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('modelTitle').innerHTML = model.name;
            document.getElementById('modelDesc').innerHTML = model.desc;
            renderModifications();
        };
        container.appendChild(btn);
    }
    document.getElementById('totalModels').innerText = Object.values(PORSCHE_DB).reduce((sum, m) => sum + m.modifications.length, 0);
}

// ФИЛЬТРЫ
function renderModifications() {
    const modelData = PORSCHE_DB[currentModel];
    let mods = [...modelData.modifications];
    
    const search = document.getElementById('searchInput').value.toLowerCase();
    const yearVal = document.getElementById('yearFilter').value;
    const engineVal = document.getElementById('engineFilter').value;
    const maxPower = parseInt(document.getElementById('powerFilter').value);
    const maxPrice = parseInt(document.getElementById('priceFilter').value);
    
    mods = mods.filter(m => {
        if (search && !m.name.toLowerCase().includes(search) && !m.engine.toLowerCase().includes(search)) return false;
        if (yearVal !== 'all') { const y = parseInt(m.years.split('-')[0]); if (y !== parseInt(yearVal)) return false; }
        if (engineVal !== 'all' && m.engineType !== engineVal) return false;
        if (m.power > maxPower) return false;
        if (m.price > maxPrice) return false;
        return true;
    });
    
    document.getElementById('resultsCount').innerHTML = `Найдено: ${mods.length} модификаций`;
    
    const grid = document.getElementById('modificationsGrid');
    grid.innerHTML = mods.map(mod => `
        <div class="mod-card" data-id="${mod.id}">
            <div class="mod-header"><span class="mod-name">${mod.name}</span><span class="mod-badge">${mod.years}</span></div>
            <div class="mod-body">
                <div class="spec-grid">
                    <div class="spec-item"><span class="label">Двигатель</span><span class="value">${mod.engine}</span></div>
                    <div class="spec-item"><span class="label">Объём</span><span class="value">${mod.volume}</span></div>
                    <div class="spec-item"><span class="label">Мощность</span><span class="value">${mod.power} л.с.</span></div>
                    <div class="spec-item"><span class="label">0-100 км/ч</span><span class="value">${mod.accel}</span></div>
                    <div class="spec-item"><span class="label">Макс. скорость</span><span class="value">${mod.topSpeed}</span></div>
                    <div class="spec-item"><span class="label">Привод</span><span class="value">${mod.drive}</span></div>
                    ${mod.battery ? `<div class="spec-item"><span class="label">Батарея</span><span class="value">${mod.battery}</span></div>` : ''}
                    ${mod.range ? `<div class="spec-item"><span class="label">Запас хода</span><span class="value">${mod.range}</span></div>` : ''}
                </div>
                <div class="mod-price">€${mod.price.toLocaleString()}</div>
                <div class="mod-actions">
                    <button class="btn-details" onclick="showDetails('${currentModel}', '${mod.id}')"><i class="fas fa-info-circle"></i> Детали</button>
                    <button class="btn-compare" onclick="addToCompare('${mod.id}', '${currentModel}')"><i class="fas fa-chart-line"></i></button>
                    <button class="btn-fav ${favorites.includes(mod.id) ? 'active' : ''}" onclick="toggleFavorite('${mod.id}')"><i class="fas fa-heart"></i></button>
                    <button class="btn-cart" onclick="addToCart('${mod.id}')"><i class="fas fa-cart-plus"></i></button>
                </div>
            </div>
        </div>
    `).join('');
}

function showDetails(modelKey, modId) {
    const mod = PORSCHE_DB[modelKey].modifications.find(m => m.id === modId);
    const modal = document.getElementById('detailsModal');
    document.getElementById('modalDetails').innerHTML = `
        <div style="padding:1.5rem">
            <h2 style="color:#e63946">${PORSCHE_DB[modelKey].name} ${mod.name}</h2>
            <div class="details-grid">
                ${Object.entries(mod).filter(([k]) => k !== 'id').map(([k, v]) => `<div class="detail-card"><strong>${k}:</strong><br>${v}</div>`).join('')}
            </div>
            <button onclick="closeModal()" style="margin:1rem 0 0;padding:12px;background:#e63946;color:white;border:none;border-radius:40px;width:100%">Закрыть</button>
        </div>
    `;
    modal.style.display = 'flex';
}

function addToCompare(modId, modelKey) {
    if (compareList.length >= 4) { showToast('Максимум 4 модели для сравнения'); return; }
    const mod = PORSCHE_DB[modelKey].modifications.find(m => m.id === modId);
    if (mod && !compareList.find(c => c.id === modId)) {
        compareList.push({ ...mod, modelName: PORSCHE_DB[modelKey].name });
        updateComparePanel();
        showToast('Добавлено в сравнение');
    }
}

function updateComparePanel() {
    document.getElementById('compareCount').innerText = compareList.length;
    document.getElementById('compareBadge').innerText = compareList.length;
    const container = document.getElementById('compareItems');
    container.innerHTML = compareList.map(item => `
        <div class="compare-item">
            <h4>${item.modelName} ${item.name}</h4>
            <div>💰 €${item.price.toLocaleString()}</div><div>⚡ ${item.power} л.с.</div>
            <div>🚀 ${item.accel}</div><div>🔧 ${item.engine}</div>
            <button onclick="removeFromCompare('${item.id}')" style="margin-top:8px;padding:6px;background:#e63946;color:white;border:none;border-radius:20px">Удалить</button>
        </div>
    `).join('');
    if (compareList.length === 0) container.innerHTML = '<div style="padding:1rem;text-align:center">Нет моделей для сравнения</div>';
}

function removeFromCompare(id) { compareList = compareList.filter(c => c.id !== id); updateComparePanel(); }

function toggleFavorite(id) {
    if (favorites.includes(id)) favorites = favorites.filter(f => f !== id);
    else favorites.push(id);
    localStorage.setItem('porsche_favs', JSON.stringify(favorites));
    document.getElementById('favoritesBadge').innerText = favorites.length;
    document.getElementById('favStat').innerText = favorites.length;
    renderModifications();
    showToast(favorites.includes(id) ? 'Добавлено в избранное' : 'Удалено из избранного');
}

function addToCart(id) {
    for (const [modelKey, model] of Object.entries(PORSCHE_DB)) {
        const mod = model.modifications.find(m => m.id === id);
        if (mod) {
            cart.push({ ...mod, modelName: model.name });
            document.getElementById('cartBadge').innerText = cart.length;
            updateCartPanel();
            showToast(`${model.name} ${mod.name} добавлен в корзину`);
            break;
        }
    }
}

function updateCartPanel() {
    const container = document.getElementById('cartItems');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cartTotal').innerText = `€${total.toLocaleString()}`;
    container.innerHTML = cart.map((item, idx) => `
        <div class="cart-item">
            <div><strong>${item.modelName} ${item.name}</strong><br>€${item.price.toLocaleString()}</div>
            <button onclick="removeFromCart(${idx})" style="background:#e63946;color:white;border:none;border-radius:20px;padding:6px 12px">Удалить</button>
        </div>
    `).join('');
    if (cart.length === 0) container.innerHTML = '<div style="text-align:center">Корзина пуста</div>';
}

function removeFromCart(idx) { cart.splice(idx, 1); document.getElementById('cartBadge').innerText = cart.length; updateCartPanel(); showToast('Удалено из корзины'); }

function closeModal() { document.getElementById('detailsModal').style.display = 'none'; document.getElementById('testdriveModal').style.display = 'none'; }

// ЗАПОЛНЕНИЕ ГОДОВ
function loadYears() {
    const years = new Set();
    for (const model of Object.values(PORSCHE_DB)) {
        model.modifications.forEach(m => { const y = parseInt(m.years.split('-')[0]); years.add(y); });
    }
    const sorted = Array.from(years).sort((a,b)=>b-a);
    const select = document.getElementById('yearFilter');
    select.innerHTML = '<option value="all">Все</option>' + sorted.map(y => `<option value="${y}">${y}</option>`).join('');
}

// ИНИЦИАЛИЗАЦИЯ
function init() {
    loadModelButtons();
    loadYears();
    renderModifications();
    document.getElementById('favoritesBadge').innerText = favorites.length;
    document.getElementById('favStat').innerText = favorites.length;
    
    document.getElementById('searchInput').addEventListener('input', renderModifications);
    document.getElementById('yearFilter').addEventListener('change', renderModifications);
    document.getElementById('engineFilter').addEventListener('change', renderModifications);
    document.getElementById('powerFilter').addEventListener('input', (e) => {
        document.getElementById('powerValue').innerText = `до ${e.target.value} л.с.`;
        renderModifications();
    });
    document.getElementById('priceFilter').addEventListener('input', (e) => {
        document.getElementById('priceValue').innerText = `до €${parseInt(e.target.value).toLocaleString()}`;
        renderModifications();
    });
    document.getElementById('resetFilters').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        document.getElementById('yearFilter').value = 'all';
        document.getElementById('engineFilter').value = 'all';
        document.getElementById('powerFilter').value = '900';
        document.getElementById('priceFilter').value = '600000';
        document.getElementById('powerValue').innerText = 'до 900 л.с.';
        document.getElementById('priceValue').innerText = 'до €600 000+';
        renderModifications();
    });
    
    document.getElementById('compareBtn').onclick = () => { document.getElementById('comparePanel').classList.add('open'); document.getElementById('overlay').classList.add('active'); };
    document.getElementById('cartBtn').onclick = () => { document.getElementById('cartPanel').classList.add('open'); document.getElementById('overlay').classList.add('active'); updateCartPanel(); };
    document.getElementById('closeCompare').onclick = () => { document.getElementById('comparePanel').classList.remove('open'); document.getElementById('overlay').classList.remove('active'); };
    document.getElementById('closeCart').onclick = () => { document.getElementById('cartPanel').classList.remove('open'); document.getElementById('overlay').classList.remove('active'); };
    document.getElementById('clearCompare').onclick = () => { compareList = []; updateComparePanel(); showToast('Сравнение очищено'); };
    document.getElementById('overlay').onclick = () => { document.getElementById('comparePanel').classList.remove('open'); document.getElementById('cartPanel').classList.remove('open'); document.getElementById('overlay').classList.remove('active'); };
    document.getElementById('testDriveBtn').onclick = () => {
        const select = document.getElementById('testdriveModel');
        select.innerHTML = Object.entries(PORSCHE_DB).map(([k, v]) => `<option>${v.name}</option>`).join('');
        document.getElementById('testdriveModal').style.display = 'flex';
    };
    document.getElementById('showFavoritesBtn').onclick = () => { showToast(`В избранном ${favorites.length} моделей`); };
    document.querySelectorAll('.close-modal, .close-testdrive').forEach(btn => btn.onclick = closeModal);
    document.getElementById('testdriveForm').onsubmit = (e) => { e.preventDefault(); showToast('Заявка на тест-драйв отправлена!'); closeModal(); };
    document.getElementById('checkoutBtn').onclick = () => { showToast('Заказ оформлен! С вами свяжется менеджер'); cart = []; updateCartPanel(); document.getElementById('cartBadge').innerText = 0; document.getElementById('cartPanel').classList.remove('open'); document.getElementById('overlay').classList.remove('active'); };
}

init();