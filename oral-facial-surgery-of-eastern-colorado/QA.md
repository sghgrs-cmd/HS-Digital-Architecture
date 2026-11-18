
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
- ✗ **За границей viewport (12)**:
    - `div.info` — от 24 до 393px
    - `div.info__row` — от 24 до 393px
    - `span.info__k` — от 58 до 393px
    - `span.info__v` — от 58 до 393px
    - `div.info__row` — от 24 до 393px
    - `span.info__k` — от 58 до 393px
- ✓ Цитаты в норме (максимум 345px)
- ✓ Реальный портрет загружен (800px)

### 768px (tablet)

Скриншот: `shots\768-tablet.png`

- ✓ Console errors: 0
- ✓ Внешние сетевые запросы: 0
- ✓ Горизонтального скролла нет (0 horizontal overflow)
- ✓ Все элементы внутри viewport
- ✓ Цитаты в норме (максимум 237px)
- ✓ Реальный портрет загружен (800px)

### 320px (phone-sm)

Скриншот: `shots\320-phone-sm.png`

- ✓ Console errors: 0
- ✓ Внешние сетевые запросы: 0
- ✓ Горизонтального скролла нет (0 horizontal overflow)
- ✗ **За границей viewport (12)**:
    - `span.school__v` — от 281 до 348px
    - `div.info` — от 24 до 393px
    - `div.info__row` — от 24 до 393px
    - `span.info__k` — от 58 до 393px
    - `span.info__v` — от 58 до 393px
    - `div.info__row` — от 24 до 393px
- ✗ **Слишком высокие цитаты (1)** — порог 420px:
    - 444px · «My 9 year old daughter needed a procedure done t…»
- ✓ Реальный портрет загружен (800px)

**Итог рендер-теста: 3 находок**
