# @monowebo/backend

Шаблон сервера

## 🏗 Подготовка к запуску

1. Установить зависимости (один раз для всего монорепозитория):

    ```sh
    rush update
    ```

2. Собрать локальные зависимости:

    ```sh
    rush build -T backend
    ```

## 🚀 Запуск

Запуск сервера в режиме разработки осуществляется командой:

```sh
rushx start
```

В этом режиме **Nodemon** отслеживает изменения в исходном коде и выполняет "горячую перезагрузку" сервера

## 🛠 Сборка

Запуск production-сборки осуществляется командой:

```sh
rushx build
```
