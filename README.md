# Car Rental App

## Project Description

Car Rental App is a web application for renting cars. Users can browse the car catalog, filter cars by brand and price, view detailed information about each car, and book it online.

## Key Features

- **Home Page:** `Hero` component to present the service.
- **Car Catalog:** browse the list of cars with filters for brand, price, and favorites.
- **Car Details:** detailed information about each car, including:
  - General info (`GeneralInfo`)
  - Rental conditions (`Conditions`)
  - Technical specifications (`Specifications`)
  - Accessories and functionalities (`AccesAndFunc`)
- **Booking:** car booking form (`BookingForm`) with validation.
- **Favorites:** ability to add cars to a favorites list.

## Technologies Used

- React
- Redux Toolkit
- React Router
- CSS Modules
- Formik (for forms)
- MUI (for calendar and UI components)
- Toast notifications

## Project Structure

```text
public/
└─ assets/
src/
├─ components/
│ ├─ CarCard/
│ ├─ CarDetailsComponents/
│ │ ├─ BookingForm/
│ │ ├─ GeneralInfo/
│ │ ├─ Conditions/
│ │ ├─ Specifications/
│ │ └─ AccesAndFunc/
│ ├─ CatalogFilters/
│ ├─ CatalogList/
│ ├─ Header/
│ ├─ Hero/
│ ├─ Layout/
│ ├─ Loader/
│ └─ NotFoundModal/
├─ redux/
│ ├─ cars/
│ ├─ brands/
│ └─ favourites/
├─ pages/
│ ├─ MainPage.jsx
│ ├─ Catalog.jsx
│ ├─ NotFound/
│ └─ CarDetails/
└─ utils/
```

## Usage

Go to the Home page to see the service overview.

Open the Catalog page to browse available cars.

Use filters to sort by brand, price, or favorites.

Click on a car to view detailed information and book it.

## Author

Karina Hurzan
FullStack Developer | Passionate about React and modern web technologies
GitHub: [https://github.com/karinahurzan]
LinkedIn: [https://www.linkedin.com/in/karina-hurzan/]

---

# Додаток для прокату автомобілів

## Опис проекту

Додаток для прокату автомобілів – це веб-додаток для прокату автомобілів. Користувачі можуть переглядати каталог автомобілів, фільтрувати автомобілі за маркою та ціною, переглядати детальну інформацію про кожен автомобіль та бронювати його онлайн.

## Основні характеристики

- **Home Page:** Компонент `Hero` для представлення послуги.
- **Car Catalog:** перегляд списку автомобілів з фільтрами за маркою, ціною та обраним.
- **Car Details:** детальна інформація про кожен автомобіль, включаючи:
  - General info (`GeneralInfo`)
  - Rental conditions (`Conditions`)
  - Technical specifications (`Specifications`)
  - Accessories and functionalities (`AccesAndFunc`)
- **Booking:** форма бронювання автомобіля (`BookingForm') з перевіркою.
- **Favorites:** можливість додавати автомобілі до списку обраного.

## Використані технології

- React
- Redux Toolkit
- React Router
- CSS модулі
- Formik (для форм)
- MUI (для календаря та компонентів інтерфейсу користувача)
- Toast сповіщення

## Структура проекту

```text
public/
└─ assets/
src/
├─ components/
│ ├─ CarCard/
│ ├─ CarDetailsComponents/
│ │ ├─ BookingForm/
│ │ ├─ GeneralInfo/
│ │ ├─ Conditions/
│ │ ├─ Specifications/
│ │ └─ AccesAndFunc/
│ ├─ CatalogFilters/
│ ├─ CatalogList/
│ ├─ Header/
│ ├─ Hero/
│ ├─ Layout/
│ ├─ Loader/
│ └─ NotFoundModal/
├─ redux/
│ ├─ cars/
│ ├─ brands/
│ └─ favourites/
├─ pages/
│ ├─ MainPage.jsx
│ ├─ Catalog.jsx
│ ├─ NotFound/
│ └─ CarDetails/
└─ utils/
```

## Використання

Перейдіть на головну сторінку, щоб переглянути огляд послуг.

Відкрийте сторінку каталогу, щоб переглянути доступні автомобілі.

Використовуйте фільтри для сортування за брендом, ціною або обраним.

Натисніть на автомобіль, щоб переглянути детальну інформацію та забронювати його.

## Автор

Каріна Хурзан
FullStack-розробник | Пристрасна до React та сучасних веб-технологій
GitHub: [https://github.com/karinahurzan]
LinkedIn: [https://www.linkedin.com/in/karina-hurzan/]
