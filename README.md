# React + Vite
# Тестовое задание O-комплекс.

Реализован весь запрашиваемый функционал.

- сайт адаптирован под мобильные устройства и планшеты
- наполнение контентом отзывов из html обернутого в json
- наполнение контентом товары по апи
    - показывать первую страницу сразу
    - остальные страницы подгружаются ajax запросом, по мере прокрутки вниз
- при нажатии на кнопку "купить", она меняется на кнопки + и - и поле для ввода кол-ва товара, значение поля должно быть 1, кнопки должны добавляют и отбавляют товар, так же есть возможность вписать в поле для ввода любое кол-во.
- при изменении кол-ва какого-либо из товаров меняется информация в корзине (та что над полем с телефоном)
- набранные товары сохраняются при перезагрузке страницы
- маска в поле для телефона есть
- при нажатии кнопки "заказать" идет проверка того что телефон полностью введен
    - если всё хорошо - уходит запрос на сервер
    - если есть ошибки - появляется подсказка 
- после отправки запроса и получения ответа от сервера отображается попап что всё успешно 


### Запуск проекта локально 

Для клонирования репозитория выполните команду: git clone https://github.com/ReginaldLedu/O.git

Для установки зависимостей выполните команду: npm i

Для запуска проекта необходимо выполнить команды 
npm run build
npm run preview

Предлолжения по улучшению:

- Добавить в самой корзине функционал по удалению товара из корзины
- Зафиксировать header и в нем сделать навигационную панель  / бургер-меню для доступа к меню с любого места сайта / кнопку с плавным скроллом в начало

