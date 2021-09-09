# @monowebo/frontend

Шаблон клиента

## 🏗 Подготовка к запуску

1. Установить зависимости (один раз для всего монорепозитория):

    ```sh
    rush update
    ```

2. Собрать локальные зависимости:

    ```sh
    rush build -T frontend
    ```

## 🚀 Запуск

Запуск development-сервера осуществляется командой:

```sh
rushx start
```

В этом режиме **Snowpack** отслеживает изменения в исходном коде и выполняет "горячую замену" модулей ([HMR](https://www.snowpack.dev/concepts/hot-module-replacement)) клиента без перезагрузки страницы в браузере

## 🧩 Разработка компонентов в изоляции

Компоненты приложения можно разрабатывать в отдельном окружении — [Storybook](https://storybook.js.org)

Его запуск осуществляется командой:

```sh
rushx storybook
```

В **Storybook** появляются story (файлы с расширением `.stories.tsx` или `.stories.mdx`), имеющиеся в исходном коде проекта

## 🛠 Сборка

Запуск production-сборки осуществляется командой:

```sh
rushx build
```

Для оптимизации сборки используется [Webpack плагин](https://www.npmjs.com/package/@snowpack/plugin-webpack) для **Snowpack**
