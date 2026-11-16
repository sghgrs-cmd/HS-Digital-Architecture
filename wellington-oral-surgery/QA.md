
## 5. Рендер-тест (index.html)


### 1440px (desktop)

Скриншот: `shots\1440-desktop.png`

- ✓ Console errors: 0
- ✓ Внешние сетевые запросы: 0
- ✓ Горизонтального скролла нет (0 horizontal overflow)
- ✓ Все элементы внутри viewport
- ✓ Цитаты в норме (максимум 330px)
- ✓ Реальный портрет загружен (800px)

### 390px (mobile)

Скриншот: `shots\390-mobile.png`

- ✓ Console errors: 0
- ✓ Внешние сетевые запросы: 0
- ✓ Горизонтального скролла нет (0 horizontal overflow)
- ✓ Все элементы внутри viewport
- ✗ **Слишком высокие цитаты (1)** — порог 420px:
    - 444px · «I had an excellent experience with my wisdom tee…»
- ✓ Реальный портрет загружен (800px)

### 768px (tablet)

Скриншот: `shots\768-tablet.png`

- ✓ Console errors: 0
- ✓ Внешние сетевые запросы: 0
- ✓ Горизонтального скролла нет (0 horizontal overflow)
- ✓ Все элементы внутри viewport
- ✓ Цитаты в норме (максимум 297px)
- ✓ Реальный портрет загружен (800px)

### 320px (phone-sm)

Скриншот: `shots\320-phone-sm.png`

- ✓ Console errors: 0
- ✓ Внешние сетевые запросы: 0
- ✓ Горизонтального скролла нет (0 horizontal overflow)
- ✗ **За границей viewport (2)**:
    - `span.school__v` — от 246 до 338px
    - `span.school__v` — от 286 до 342px
- ✗ **Слишком высокие цитаты (2)** — порог 420px:
    - 542px · «I had an excellent experience with my wisdom tee…»
    - 468px · «My dentist recommended Dr. Harris to have my wis…»
- ✓ Реальный портрет загружен (800px)

**Итог рендер-теста: 3 находок**
