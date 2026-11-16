
## 5. Рендер-тест (index.html)


### 1440px (desktop)

Скриншот: `shots\1440-desktop.png`

- ✓ Console errors: 0
- ✓ Внешние сетевые запросы: 0
- ✓ Горизонтального скролла нет (0 horizontal overflow)
- ✓ Все элементы внутри viewport
- ✓ Цитаты в норме (максимум 383px)
- ✓ Реальный портрет загружен (800px)

### 390px (mobile)

Скриншот: `shots\390-mobile.png`

- ✓ Console errors: 0
- ✓ Внешние сетевые запросы: 0
- ✓ Горизонтального скролла нет (0 horizontal overflow)
- ✓ Все элементы внутри viewport
- ✗ **Слишком высокие цитаты (1)** — порог 420px:
    - 517px · «I want to take a moment to give Dr. Mati and the…»
- ✓ Реальный портрет загружен (800px)

### 768px (tablet)

Скриншот: `shots\768-tablet.png`

- ✓ Console errors: 0
- ✓ Внешние сетевые запросы: 0
- ✓ Горизонтального скролла нет (0 horizontal overflow)
- ✓ Все элементы внутри viewport
- ✓ Цитаты в норме (максимум 386px)
- ✓ Реальный портрет загружен (800px)

### 320px (phone-sm)

Скриншот: `shots\320-phone-sm.png`

- ✓ Console errors: 0
- ✓ Внешние сетевые запросы: 0
- ✓ Горизонтального скролла нет (0 horizontal overflow)
- ✗ **За границей viewport (1)**:
    - `span.school__v` — от 237 до 328px
- ✗ **Слишком высокие цитаты (1)** — порог 420px:
    - 690px · «I want to take a moment to give Dr. Mati and the…»
- ✓ Реальный портрет загружен (800px)

**Итог рендер-теста: 3 находок**
