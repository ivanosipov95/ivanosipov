---
title: "Markdown Showcase"
date: "2025-03-21"
description: "Демонстрация всех элементов markdown для проверки стилей."
tags: ["markdown", "тест", "showcase"]
preview: true
---

Это статья-демонстрация всех поддерживаемых элементов markdown. Используется для проверки типографики и стилей.

## Текст и форматирование

Обычный параграф с **жирным текстом**, *курсивом*, ~~зачёркнутым~~ и `инлайн кодом`. Также можно комбинировать: ***жирный курсив*** и **`жирный код`**.

Ссылка на [Astro документацию](https://docs.astro.build) и автоматическая ссылка: https://example.com

## Цитаты

> Код — это не просто инструкции для машины. Это способ общения между разработчиками.
>
> — Мартин Фаулер

Вложенная цитата:

> Первый уровень цитаты
>
> > Вложенная цитата с **форматированием**

## Списки

Маркированный список:

- React и его экосистема
- TypeScript для типобезопасности
- Vite для быстрой сборки
  - HMR за миллисекунды
  - Поддержка ESM из коробки

Нумерованный список:

1. Спроектировать архитектуру
2. Написать код
3. Покрыть тестами
4. Задеплоить

Чеклист:

- [x] Настроить проект
- [x] Добавить линтер
- [ ] Написать тесты
- [ ] Настроить CI/CD

## Код

Инлайн: функция `Array.prototype.flatMap()` доступна в ES2019.

### TypeScript

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

async function fetchUsers(role?: User['role']): Promise<User[]> {
  const response = await fetch('/api/users');
  const users: User[] = await response.json();

  if (role) {
    return users.filter(user => user.role === role);
  }

  return users;
}

// Использование
const admins = await fetchUsers('admin');
console.log(`Found ${admins.length} admins`);
```

### React компонент

```tsx
import { useState, useCallback } from 'react';

interface CounterProps {
  initial?: number;
  step?: number;
}

export function Counter({ initial = 0, step = 1 }: CounterProps) {
  const [count, setCount] = useState(initial);

  const increment = useCallback(() => {
    setCount(prev => prev + step);
  }, [step]);

  return (
    <button onClick={increment}>
      Count: {count}
    </button>
  );
}
```

### CSS

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

@media (prefers-color-scheme: dark) {
  .container {
    background: #1a1a1a;
    color: #e0e0e0;
  }
}
```

### Bash

```bash
# Установка зависимостей и запуск
npm install
npm run dev

# Docker
docker compose up -d
docker logs -f app
```

### JSON

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "strict": true,
    "jsx": "react-jsx"
  },
  "include": ["src/**/*"]
}
```

## Таблицы

| Инструмент | Категория | Использование |
|:-----------|:---------:|------------:|
| React | UI | Компоненты |
| TypeScript | Язык | Типизация |
| Vite | Сборка | Dev/Prod |
| Jest | Тесты | Unit |
| Cypress | Тесты | E2E |

## Изображения

![Placeholder](https://placehold.co/800x400/1a1a1a/666?text=Placeholder+Image)

## Горизонтальный разделитель

Контент до разделителя.

---

Контент после разделителя.

## Сноски

Astro поддерживает статическую генерацию[^1] и серверный рендеринг[^2].

[^1]: SSG — генерация HTML на этапе сборки.
[^2]: SSR — генерация HTML на сервере при каждом запросе.
