-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Янв 10 2021 г., 18:46
-- Версия сервера: 5.6.38
-- Версия PHP: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `gas_station`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `role`) VALUES
(1, 'admin', '123', 'admin'),
(2, 'John', 'qwerty', 'employee');

-- --------------------------------------------------------

--
-- Структура таблицы `Автозаправочная станция`
--

CREATE TABLE `Автозаправочная станция` (
  `Номер` int(11) NOT NULL,
  `Название` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Автозаправочная станция`
--

INSERT INTO `Автозаправочная станция` (`Номер`, `Название`) VALUES
(1, 'fisrst');

-- --------------------------------------------------------

--
-- Структура таблицы `Клиент`
--

CREATE TABLE `Клиент` (
  `Карта клиента` int(11) NOT NULL,
  `Номер телефона` varchar(20) NOT NULL,
  `ФИО` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Клиент`
--

INSERT INTO `Клиент` (`Карта клиента`, `Номер телефона`, `ФИО`) VALUES
(744565, '+79788117315', 'Джинория');

-- --------------------------------------------------------

--
-- Структура таблицы `Продажи топлива`
--

CREATE TABLE `Продажи топлива` (
  `id` int(11) NOT NULL,
  `Код топлива` int(11) NOT NULL,
  `Номер станции` int(11) NOT NULL,
  `Номер сотрудника` int(11) NOT NULL,
  `Время продажи` time NOT NULL,
  `Дата продажи` date NOT NULL,
  `Количество (л)` int(11) NOT NULL,
  `Номер клиента` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Продажи топлива`
--

INSERT INTO `Продажи топлива` (`id`, `Код топлива`, `Номер станции`, `Номер сотрудника`, `Время продажи`, `Дата продажи`, `Количество (л)`, `Номер клиента`) VALUES
(5, 13, 1, 9, '17:17:03', '2010-01-20', 67, 744565);

-- --------------------------------------------------------

--
-- Структура таблицы `Топливо`
--

CREATE TABLE `Топливо` (
  `Код топлива` int(11) NOT NULL,
  `Номер станции` int(11) NOT NULL,
  `Вид топлива` varchar(100) NOT NULL,
  `Цена за литр` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Топливо`
--

INSERT INTO `Топливо` (`Код топлива`, `Номер станции`, `Вид топлива`, `Цена за литр`) VALUES
(13, 1, 'бензин 98', 65);

-- --------------------------------------------------------

--
-- Структура таблицы `Сотрудник`
--

CREATE TABLE `Сотрудник` (
  `id` int(11) NOT NULL,
  `Номер станции` int(11) NOT NULL,
  `ФИО` varchar(255) NOT NULL,
  `Зарплата` int(11) NOT NULL,
  `Номер телефона` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Сотрудник`
--

INSERT INTO `Сотрудник` (`id`, `Номер станции`, `ФИО`, `Зарплата`, `Номер телефона`) VALUES
(9, 1, 'Саша', 10000, '+7 (978) 811-73-15');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `Автозаправочная станция`
--
ALTER TABLE `Автозаправочная станция`
  ADD PRIMARY KEY (`Номер`);

--
-- Индексы таблицы `Клиент`
--
ALTER TABLE `Клиент`
  ADD PRIMARY KEY (`Карта клиента`);

--
-- Индексы таблицы `Продажи топлива`
--
ALTER TABLE `Продажи топлива`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_sale_employee_id` (`Номер сотрудника`),
  ADD KEY `fk_sale_fuel_id` (`Код топлива`),
  ADD KEY `fk_sale_client_id` (`Номер клиента`),
  ADD KEY `fk_sale_employee_gas_station_id` (`Номер станции`);

--
-- Индексы таблицы `Топливо`
--
ALTER TABLE `Топливо`
  ADD PRIMARY KEY (`Код топлива`),
  ADD KEY `fk_fuel_gas_station_id` (`Номер станции`);

--
-- Индексы таблицы `Сотрудник`
--
ALTER TABLE `Сотрудник`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gas_station_id` (`Номер станции`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `Продажи топлива`
--
ALTER TABLE `Продажи топлива`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `Сотрудник`
--
ALTER TABLE `Сотрудник`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `Продажи топлива`
--
ALTER TABLE `Продажи топлива`
  ADD CONSTRAINT `fk_sale_client_id` FOREIGN KEY (`Номер клиента`) REFERENCES `Клиент` (`Карта клиента`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_sale_employee_gas_station_id` FOREIGN KEY (`Номер станции`) REFERENCES `Сотрудник` (`Номер станции`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_sale_employee_id` FOREIGN KEY (`Номер сотрудника`) REFERENCES `Сотрудник` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_sale_fuel_id` FOREIGN KEY (`Код топлива`) REFERENCES `Топливо` (`Код топлива`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `Топливо`
--
ALTER TABLE `Топливо`
  ADD CONSTRAINT `fk_fuel_gas_station_id` FOREIGN KEY (`Номер станции`) REFERENCES `Автозаправочная станция` (`Номер`);

--
-- Ограничения внешнего ключа таблицы `Сотрудник`
--
ALTER TABLE `Сотрудник`
  ADD CONSTRAINT `gas_station_id` FOREIGN KEY (`Номер станции`) REFERENCES `Автозаправочная станция` (`Номер`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
