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

    function notes(s, text) {
        s.getNotesPage().getSpeakerNotesShape().getText().setText(text);
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
        return s;
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
    notes(s1, 'Это моя первая статья в блоге — решил начать не с кода, а с чего-то более человеческого. Разберёмся как выглядит работа в ИТ изнутри: какие бывают компании, кто в них работает и как выглядит рабочая рутина.');

    // 02 О себе
    const s2 = newSlide();
    setBg(s2); addNum(s2, 2);
    addTxt(s2, 'Иван Осипов', M, 45, TW, 38, 26, T.text, true);
    addTxt(s2, 'Senior Software Engineer', M, 85, TW, 22, 13, T.muted);
    addLine(s2, M, 116, TW);
    addTxt(s2, '— 10 лет в разработке\n— Финтех, страхование, биотех\n— Работал с командами из разных стран\n— Ментор · ivanosipov.dev',
        M, 128, TW, 230, 14, T.muted);
    notes(s2, '10 лет в разработке. Работал в продуктовых компаниях и аутсорсе. Проекты в Германии, Швейцарии, США. Финтех, страхование, биотех — разные направления, разные команды, разные страны. Сейчас веду блог и занимаюсь менторством.');

    // 03 О чем поговорим
    const s3 = slide(newSlide(), 3, 'О чем поговорим',
        '— Типы компаний\n— Направления бизнеса\n— Типы трудоустройства\n— Роли в команде\n— Как выглядит рабочий день\n— Плюсы и минусы');
    notes(s3, 'Пройдёмся по каждому пункту. Это взгляд изнутри — мой личный опыт. Ваш опыт и видение могут отличаться, это нормально.');

    // 04 Типы компаний
    const s4 = newSlide();
    setBg(s4); addNum(s4, 4);
    addTxt(s4, 'Типы компаний', M, 45, TW, 50, 26, T.text, true);
    addLine(s4, M, 105, TW);
    addCards3(s4, [
        { title: 'Продуктовые', body: 'Строят свой продукт\nГлубокое погружение\nОдна команда надолго' },
        { title: 'Аутсорс',     body: 'Работают на клиентов\nРазные проекты\nБыстрая насмотренность' },
        { title: 'Стартапы',    body: 'Маленькая команда\nВсё быстро, без бюрократии\nРоли часто совмещаются' },
    ]);
    notes(s4, 'Продуктовые: Яндекс, Авито, Тинькофф — строят своё, команда сфокусирована на одном продукте глубоко и надолго.\n\nАутсорс: компания продаёт твоё время другим бизнесам. Полгода на немецкий банк, потом перекидывают на американский стартап.\n\nСтартапы: сегодня пишешь код, завтра настраиваешь сервер, послезавтра общаешься с клиентом. Рамки размытые — и это одновременно плюс и минус.');

    // 05 Направления бизнеса
    const s6 = newSlide();
    setBg(s6); addNum(s6, 5);
    addTxt(s6, 'Направления бизнеса', M, 45, TW, 50, 26, T.text, true);
    addLine(s6, M, 105, TW);
    addCards4(s6, [
        { title: 'Fintech',      body: 'Банки, платёжные сервисы\nВысокая ответственность\nЖёсткие стандарты безопасности' },
        { title: 'Biotech',      body: 'Merck, AstraZeneca\nВизуализация генома\nДругое ощущение от работы' },
        { title: 'Insurance',    body: 'Allianz, 2 года в Германии\nСтрахуют буквально всё\nУмные калькуляторы риска' },
        { title: 'E-commerce',   body: 'Wildberries, Ozon, Amazon\nВысокие нагрузки\nA/B-тесты на каждой кнопке' },
    ]);
    notes(s6, 'Fintech: платят выше, но не просто так. Код может быть очень старым. Цена ошибки — деньги людей. В Сбере выдавали два компьютера: один для кода без интернета, другой для интернета без разработки.\n\nBiotech: я делал визуализацию генома для Merck и AstraZeneca. Тогда не знал кто это. Осознал масштаб во время ковида — именно они первыми зарегистрировали вакцины.\n\nInsurance: жил в Германии 2 года. Там страхуют потерю ключей, разбитый у друзей телевизор, ответственность перед соседями. Работал на Allianz — страховали компании, не физлиц, цифры запредельные.\n\nE-commerce: Чёрная пятница — сотни тысяч заказов в минуту. Каждая секунда задержки — прямые потери выручки. Одни из сложнейших задач по нагрузкам.');

    // 06 Трудоустройство
    const s7 = newSlide();
    setBg(s7); addNum(s7, 6);
    addTxt(s7, 'Трудоустройство', M, 45, TW, 50, 26, T.text, true);
    addLine(s7, M, 105, TW);
    addCards4(s7, [
        { title: 'ТК РФ',        body: 'Отпуск, больничный\nСоцвыплаты\nСтабильность' },
        { title: 'ИП',           body: 'Налог ниже\nБольше свободы\nЛегко расстаться' },
        { title: 'Самозанятый',  body: '4–6% налог\nДо 2.4 млн/год\nОформление за 10 мин' },
        { title: 'Патент',       body: 'Минимальный налог\nОграничен по сумме\nИ типу работ' },
    ]);
    notes(s7, 'ТК РФ — стандартный контракт, отпуска и больничные оплачиваются.\n\nИП — компании готовы платить больше, потому что не делают соцвыплаты и с тобой легко расстаться. Если это устраивает — может быть выгоднее.\n\nСамозанятый — самый простой старт: 4% с физлиц, 6% с юрлиц, до 2.4 млн в год, оформляется за 10 минут через приложение "Мой налог". Идеально для фриланса.\n\nПатент — схожая с ИП история, но для специфических видов деятельности. Стоит изучить отдельно.');

    // 07 Роли в команде
    const s8 = slide(newSlide(), 7, 'Роли в команде',
        '🔍  Аналитик\n' +
        '🎨  Дизайнер\n' +
        '💻  Разработчики — Frontend, Backend, Fullstack, Mobile\n' +
        '🧪  Тестировщики — ручное и автоматизированное\n' +
        '⚙️  DevOps\n' +
        '🏗️  Архитектор\n' +
        '🔒  Специалист по ИБ\n' +
        '📋  Project Manager\n' +
        '🔄  Scrum Master');
    notes(s8, 'Аналитик — переводит с языка бизнеса на технический, оформляет ТЗ. Бывает бизнес- и системный.\n\nДизайнер — UI (как выглядит) и UX (как работает), часто совмещает обе роли.\n\nРазработчики делятся на Frontend, Backend, Fullstack и Mobile.\n\nQA: ручной тестировщик прокликивает интерфейс, автоматизатор пишет тесты.\n\nDevOps — деплой, CI/CD, мониторинг. Нередко эта роль ложится на разработчиков.\n\nАрхитектор — вырастает из опытных разработчиков, проектирует систему целиком.\n\nСпециалист по ИБ — в fintech и enterprise без него не обойтись.\n\nPM — одна из самых размытых ролей, понимание сильно отличается от компании к компании.\n\nScrum Master — редкая роль, часто совмещается с другой позицией.');

    // 08 Рабочий день
    const s10 = newSlide();
    setBg(s10); addNum(s10, 8);
    addTxt(s10, 'Как выглядит рабочий день', M, 45, TW, 50, 26, T.text, true);
    addLine(s10, M, 105, TW);
    addTxt(s10, 'ДЕНЬ', M, 118, 60, 14, 8, T.num);
    const dayItems = ['Стендап', 'Трекер', 'Код', 'Ревью'];
    const dW = 120, dH = 36, dY = 134, dSlot = 142;
    dayItems.forEach((item, i) => {
        addBox(s10, item, M + i * dSlot, dY, dW, dH, 11);
        if (i < dayItems.length - 1) arr(s10, '→', M + i * dSlot + dW + 2, dY + 9);
    });
    addTxt(s10, 'ПУТЬ ЗАДАЧИ', M, 183, 110, 14, 8, T.num);
    const pW = 95, pH = 34, pSlot = 116, pY1 = 200;
    const row1 = ['Аналитик', 'Оценка', 'Код', 'Ревью', 'QA'];
    row1.forEach((item, i) => {
        addBox(s10, item, M + i * pSlot, pY1, pW, pH, 10);
        if (i < row1.length - 1) arr(s10, '→', M + i * pSlot + pW + 2, pY1 + 8);
    });
    const qaX = M + 4 * pSlot;
    arr(s10, '↓', qaX + pW / 2 - 6, pY1 + pH + 2);
    const pY2 = pY1 + pH + 22;
    const row2 = ['Security', 'Test', 'Staging', 'Прод'];
    row2.forEach((item, i) => {
        const pX = M + 4 * pSlot - i * pSlot;
        addBox(s10, item, pX, pY2, pW, pH, 10);
        if (i < row2.length - 1) arr(s10, '←', pX - 20, pY2 + 8);
    });
    notes(s10, 'Стендап — 10-15 минут. Три вопроса: что сделал вчера, что планирую сегодня, есть ли блокеры. Это не отчёт руководству, а синхронизация команды.\n\nОсновная часть дня — задачи из трекера (Jira, YouTrack). Параллельно переписки в Slack или Teams — обсуждения, уточнения, вопросы.\n\nОт взятия задачи в работу до появления на проде может пройти день, а может — неделя. Зависит от сложности и процессов в команде.');

    // 09 Плюсы и минусы
    const s11 = newSlide();
    setBg(s11); addNum(s11, 9);
    addTxt(s11, 'Плюсы и минусы', M, 45, TW, 50, 26, T.text, true);
    addLine(s11, M, 105, TW);
    addTxt(s11, '+ Высокий доход\n+ Удалёнка\n+ Гибкий график\n+ Международность\n+ Крутое окружение', M, 118, 300, 220, 14, T.green);
    addTxt(s11, '− Работа в голове 24/7\n− Постоянное обучение\n− Выгорание', 360, 118, 300, 220, 14, T.red);
    notes(s11, 'ИТ традиционно одна из самых высокооплачиваемых сфер. Удалёнка и гибкий график — норма для большинства компаний. Международность: знаешь английский — перед тобой весь мировой рынок.\n\nНо: работа часто выходит за рамки рабочего времени. Это не про переработки — голова просто продолжает думать о задаче после закрытия ноутбука.\n\nПостоянное обучение — для кого-то плюс, для кого-то нет. Выгорание реально при интенсивной умственной работе и дедлайнах. Важно вовремя замечать.');

    // 10 Кому подойдёт
    const s12 = slide(newSlide(), 10, 'Кому подойдёт ИТ',
        '— Нравится разбираться как устроены вещи\n— Можешь долго фокусироваться на задаче\n— Не пугает постоянное обучение\n— Комфортно с неопределённостью\n\nЕсли пока не уверен — это тоже нормально');
    notes(s12, 'Большинство работы — это не вдохновение, а методичное решение проблем. Нужно уметь фокусироваться.\n\nТехнологии меняются быстро, и это навсегда — к этому нужно быть готовым.\n\nНеопределённость особенно актуальна для стартапов и аутсорса — задачи часто меняются на ходу.\n\nЕсли всё это про тебя — скорее всего, впишешься. Многие приходят в ИТ без чёткого понимания и находят своё место уже в процессе.');

    // 11 Контакты
    const s13 = newSlide();
    setBg(s13);
    addNum(s13, 11);
    addTxt(s13, '~/io', 670, 12, 50, 16, 9, T.num);
    addTxt(s13, 'Спасибо за внимание!', M, 55, 600, 55, 34, T.text, true);
    addLine(s13, M, 122, TW);
    addTxt(s13, 'ivanosipov.dev\nt.me/osipov_ivan', M, 135, TW, 65, 13, T.muted);
    const QR_ARTICLE  = 'https://ivanosipov.dev/articles/work-in-it/';
    const QR_FEEDBACK = 'https://ivanosipov.dev/feedback/';
    const qrBase = 'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=';
    const QR_SIZE = 100;
    const QR_Y = 218;
    s13.insertImage(qrBase + encodeURIComponent(QR_ARTICLE),  M,   QR_Y, QR_SIZE, QR_SIZE);
    s13.insertImage(qrBase + encodeURIComponent(QR_FEEDBACK), 540, QR_Y, QR_SIZE, QR_SIZE);
    addTxt(s13, 'Статья',       M,   QR_Y + QR_SIZE + 6, 140, 20, 11, T.muted);
    addTxt(s13, 'Фидбэк форма', 540, QR_Y + QR_SIZE + 6, 140, 20, 11, T.muted);
    notes(s13, 'Полная статья на сайте — там все детали, таблицы сравнения, больше примеров из личного опыта. QR-код слева ведёт прямо на неё.\n\nЕсли есть вопросы или хочешь поделиться своим опытом — буду рад фидбэку по QR-коду справа.\n\nМожно записаться на консультацию: calendlab.ru/c/consulting');

    Logger.log('✓ Готово! Тема: ' + THEME + ', слайдов: ' + pres.getSlides().length);
}
