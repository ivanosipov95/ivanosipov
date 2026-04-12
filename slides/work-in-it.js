function buildPresentation() {
    const PRES_ID = '1AnsWpadG1QWpZw2VZYsER8SGPqF9U9_APAXGOkVYRcU';

    // ── ТЕМА ────────────────────────────────────────
    const THEME = 'light'; // 'dark' | 'light'
    // ────────────────────────────────────────────────

    const T = THEME === 'dark' ? {
        bg: '#111111', text: '#F0F0F0', muted: '#888888',
        line: '#FFFFFF', cardBg: '#1A1A1A', cardDivider: '#333333',
        num: '#444444', green: '#66BB6A', red: '#EF5350',
    } : {
        bg: '#FFFFFF', text: '#111111', muted: '#555555',
        line: '#111111', cardBg: '#F5F5F5', cardDivider: '#DDDDDD',
        num: '#BBBBBB', green: '#2E7D32', red: '#C62828',
    };

    const pres = SlidesApp.openById(PRES_ID);
    const existing = pres.getSlides();
    for (let i = existing.length - 1; i > 0; i--) existing[i].remove();
    const s1 = pres.getSlides()[0];
    s1.getPageElements().forEach(el => el.remove());

    const FONT = 'Courier New';
    const M = 50;
    const TW = 640;

    function setBg(s) { s.getBackground().setSolidFill(T.bg); }

    function addTxt(s, text, l, t, w, h, sz, color, bold) {
        const box = s.insertTextBox(text, l, t, w, h);
        box.getBorder().setTransparent();
        box.getFill().setTransparent();
        const st = box.getText().getTextStyle();
        st.setFontFamily(FONT);
        st.setFontSize(sz || 14);
        st.setForegroundColor(color || T.text);
        if (bold) st.setBold(true);
        return box;
    }

    function addLine(s, l, t, w) {
        const ln = s.insertLine(SlidesApp.LineCategory.STRAIGHT, l, t, l + w, t);
        ln.getLineFill().setSolidFill(T.line);
        ln.setWeight(0.5);
        return ln;
    }

    function addNum(s, n) {
        addTxt(s, String(n).padStart(2, '0'), M, 12, 40, 16, 9, T.num);
    }

    function addBox(s, text, x, y, w, h, sz) {
        const sh = s.insertShape(SlidesApp.ShapeType.RECTANGLE, x, y, w, h);
        sh.getFill().setSolidFill(T.cardBg);
        sh.getBorder().setTransparent();
        sh.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE);
        const tf = sh.getText();
        tf.setText(text);
        const st = tf.getTextStyle();
        st.setFontFamily(FONT);
        st.setFontSize(sz || 11);
        st.setForegroundColor(T.text);
        tf.getParagraphs().forEach(p =>
            p.getRange().getParagraphStyle()
                .setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER)
        );
        return sh;
    }

    function arr(s, symbol, x, y) {
        addTxt(s, symbol, x, y, 16, 18, 11, T.num);
    }

    function newSlide() {
        return pres.appendSlide(SlidesApp.PredefinedLayout.BLANK);
    }

    function slide(s, n, title, bodyText) {
        setBg(s);
        addNum(s, n);
        addTxt(s, title, M, 45, TW, 50, 26, T.text, true);
        addLine(s, M, 105, TW);
        if (bodyText) addTxt(s, bodyText, M, 118, TW, 255, 14, T.muted);
    }

    // Карточки — 3 штуки (ширина 190, отступ 25)
    function addCards3(s, items) {
        const cW = 190, cH = 185, cY = 118, gap = 25;
        items.forEach((card, i) => {
            const cX = M + i * (cW + gap);
            const sh = s.insertShape(SlidesApp.ShapeType.RECTANGLE, cX, cY, cW, cH);
            sh.getFill().setSolidFill(T.cardBg);
            sh.getBorder().setTransparent();
            addTxt(s, card.title, cX + 12, cY + 12, cW - 20, 24, 13, T.text, true);
            const div = s.insertLine(SlidesApp.LineCategory.STRAIGHT, cX + 12, cY + 40, cX + cW - 12, cY + 40);
            div.getLineFill().setSolidFill(T.cardDivider);
            div.setWeight(0.5);
            addTxt(s, card.body, cX + 12, cY + 50, cW - 20, cH - 58, 11, T.muted);
        });
    }

    // Карточки — 4 штуки (ширина 143, отступ 15)
    function addCards4(s, items) {
        const cW = 143, cH = 185, cY = 118, gap = 15;
        items.forEach((card, i) => {
            const cX = M + i * (cW + gap);
            const sh = s.insertShape(SlidesApp.ShapeType.RECTANGLE, cX, cY, cW, cH);
            sh.getFill().setSolidFill(T.cardBg);
            sh.getBorder().setTransparent();
            addTxt(s, card.title, cX + 10, cY + 12, cW - 16, 24, 12, T.text, true);
            const div = s.insertLine(SlidesApp.LineCategory.STRAIGHT, cX + 10, cY + 40, cX + cW - 10, cY + 40);
            div.getLineFill().setSolidFill(T.cardDivider);
            div.setWeight(0.5);
            addTxt(s, card.body, cX + 10, cY + 50, cW - 16, cH - 58, 10, T.muted);
        });
    }

    // 01 Титул
    setBg(s1);
    addNum(s1, 1);
    addTxt(s1, '~/io', 670, 12, 50, 16, 9, T.num);
    const titleBox = addTxt(s1, 'Как устроена работа в ИТ', 0, 155, 720, 75, 34, T.text, true);
    titleBox.getText().getParagraphs().forEach(p =>
        p.getRange().getParagraphStyle()
            .setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER)
    );
    addLine(s1, 40, 242, 640);

    // 02 О себе
    const s2 = newSlide();
    setBg(s2); addNum(s2, 2);
    addTxt(s2, 'Иван Осипов', M, 45, TW, 38, 26, T.text, true);
    addTxt(s2, 'Senior Software Engineer', M, 85, TW, 22, 13, T.muted);
    addLine(s2, M, 116, TW);
    addTxt(s2, '— 10 лет в разработке\n— Финтех, страхование, биотех\n— Работал с командами из разных стран\n— Ментор · ivanosipov.dev',
        M, 128, TW, 230, 14, T.muted);
    // 03 Что вас ждёт
    slide(newSlide(), 3, 'О чем поговорим',
        '— Типы компаний\n— Направления бизнеса\n— Типы трудоустройства\n— Роли в команде\n— Как выглядит рабочий день\n— Плюсы и минусы');

    // 04 Типы компаний (3 карточки)
    const s4 = newSlide();
    setBg(s4); addNum(s4, 4);
    addTxt(s4, 'Типы компаний', M, 45, TW, 50, 26, T.text, true);
    addLine(s4, M, 105, TW);
    addCards3(s4, [
        { title: 'Продуктовые', body: 'Строят свой продукт\nГлубокое погружение\nОдна команда надолго' },
        { title: 'Аутсорс',     body: 'Работают на клиентов\nРазные проекты\nБыстрая насмотренность' },
        { title: 'Стартапы',    body: 'Маленькая команда\nВсё быстро, без бюрократии\nРоли часто совмещаются' },
    ]);

    // 06 Направления бизнеса (3 карточки — анимируй вручную: View > Motion > Appear > On click)
    const s6 = newSlide();
    setBg(s6); addNum(s6, 6);
    addTxt(s6, 'Направления бизнеса', M, 45, TW, 50, 26, T.text, true);
    addLine(s6, M, 105, TW);
    addCards4(s6, [
        { title: 'Fintech',           body: 'Банки, платёжные сервисы\nВысокая ответственность\nЖёсткие стандарты безопасности' },
        { title: 'Biotech', body: 'Merck, AstraZeneca, Allianz\nСложные данные и процессы\nДругое ощущение от работы' },
        { title: 'Insurance', body: 'Allianz\n что то нужно добавить из статьи' },
        { title: 'E-commerce',        body: 'Wildberries, Ozon, Amazon\nВысокие нагрузки\nA/B-тесты на каждой кнопке' },
    ]);

    // 07 Трудоустройство (4 карточки — анимируй вручную)
    const s7 = newSlide();
    setBg(s7); addNum(s7, 7);
    addTxt(s7, 'Трудоустройство', M, 45, TW, 50, 26, T.text, true);
    addLine(s7, M, 105, TW);
    addCards4(s7, [
        { title: 'ТК РФ',        body: 'Отпуск, больничный\nСоцвыплаты\nСтабильность' },
        { title: 'ИП',           body: 'Налог ниже\nБольше свободы\nЛегко расстаться' },
        { title: 'Самозанятый',  body: '4–6% налог\nДо 2.4 млн/год\nОформление за 10 мин' },
        { title: 'Патент',       body: 'Минимальный налог\nОграничен по сумме\nИ типу работ' },
    ]);

    // 08 Роли в команде
    slide(newSlide(), 8, 'Роли в команде',
        '🔍  Аналитик\n' +
        '🎨  Дизайнер\n' +
        '💻  Разработчики — Frontend, Backend, Fullstack, Mobile\n' +
        '🧪  Тестировщики — ручное и автоматизированное\n' +
        '⚙️  DevOps\n' +
        '🏗️  Архитектор\n' +
        '🔒  Специалист по ИБ\n' +
        '📋  Project Manager\n' +
        '🔄  Scrum Master');

    // 10 Рабочий день — диаграмма
    const s10 = newSlide();
    setBg(s10); addNum(s10, 10);
    addTxt(s10, 'Как выглядит рабочий день', M, 45, TW, 50, 26, T.text, true);
    addLine(s10, M, 105, TW);

    // --- Обычный день (4 блока) ---
    addTxt(s10, 'ДЕНЬ', M, 118, 60, 14, 8, T.num);
    const dayItems = ['Стендап', 'Трекер', 'Код', 'Ревью'];
    const dW = 120, dH = 36, dY = 134, dSlot = 142;
    dayItems.forEach((item, i) => {
        addBox(s10, item, M + i * dSlot, dY, dW, dH, 11);
        if (i < dayItems.length - 1) arr(s10, '→', M + i * dSlot + dW + 2, dY + 9);
    });

    // --- Путь задачи (snake) ---
    addTxt(s10, 'ПУТЬ ЗАДАЧИ', M, 183, 110, 14, 8, T.num);

    const pW = 95, pH = 34, pSlot = 116, pY1 = 200;
    const row1 = ['Аналитик', 'Оценка', 'Код', 'Ревью', 'QA'];
    row1.forEach((item, i) => {
        addBox(s10, item, M + i * pSlot, pY1, pW, pH, 10);
        if (i < row1.length - 1) arr(s10, '→', M + i * pSlot + pW + 2, pY1 + 8);
    });

    // Вниз после QA
    const qaX = M + 4 * pSlot;
    arr(s10, '↓', qaX + pW / 2 - 6, pY1 + pH + 2);

    // Строка 2 — справа налево
    const pY2 = pY1 + pH + 22;
    const row2 = ['Security', 'Test', 'Staging', 'Прод'];
    row2.forEach((item, i) => {
        const pX = M + 4 * pSlot - i * pSlot;
        addBox(s10, item, pX, pY2, pW, pH, 10);
        if (i < row2.length - 1) arr(s10, '←', pX - 20, pY2 + 8);
    });

    // 11 Плюсы и минусы (два столбца)
    const s11 = newSlide();
    setBg(s11); addNum(s11, 11);
    addTxt(s11, 'Плюсы и минусы', M, 45, TW, 50, 26, T.text, true);
    addLine(s11, M, 105, TW);
    addTxt(s11, '+ Высокий доход\n+ Удалёнка\n+ Гибкий график\n+ Международность\n+ Крутое окружение', M, 118, 300, 220, 14, T.green);
    addTxt(s11, '− Работа в голове 24/7\n− Постоянное обучение\n− Выгорание', 360, 118, 300, 220, 14, T.red);

    // 12 Кому подойдёт
    slide(newSlide(), 12, 'Кому подойдёт ИТ',
        '— Нравится разбираться как устроены вещи\n— Можешь долго фокусироваться на задаче\n— Не пугает постоянное обучение\n— Комфортно с неопределённостью\n\nЕсли пока не уверен — это тоже нормально');

    // 13 Контакты
    const s13 = newSlide();
    setBg(s13);
    addNum(s13, 13);
    addTxt(s13, '~/io', 670, 12, 50, 16, 9, T.num);

    addTxt(s13, 'Спасибо за внимание!', M, 55, 600, 55, 34, T.text, true);
    addLine(s13, M, 122, TW);
    addTxt(s13, 'ivanosipov.dev\nt.me/osipov_ivan',
        M, 135, TW, 65, 13, T.muted);

    const QR_ARTICLE  = 'https://ivanosipov.dev/articles/work-in-it/';
    const QR_FEEDBACK = 'https://ivanosipov.dev/feedback/';
    const qrBase = 'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=';
    const QR_SIZE = 100;
    const QR_Y = 218;

    // QR горизонтально, широко расставлены
    s13.insertImage(qrBase + encodeURIComponent(QR_ARTICLE),  M,       QR_Y, QR_SIZE, QR_SIZE);
    s13.insertImage(qrBase + encodeURIComponent(QR_FEEDBACK), 540,     QR_Y, QR_SIZE, QR_SIZE);

    addTxt(s13, 'Статья',       M,   QR_Y + QR_SIZE + 6, 140, 20, 11, T.muted);
    addTxt(s13, 'Фидбэк форма', 540, QR_Y + QR_SIZE + 6, 140, 20, 11, T.muted);

    Logger.log('✓ Готово! Тема: ' + THEME + ', слайдов: ' + pres.getSlides().length);
}
