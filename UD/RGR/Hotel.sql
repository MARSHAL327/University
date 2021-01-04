-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Дек 23 2020 г., 20:33
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
-- База данных: `Hotel`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Booking`
--

CREATE TABLE `Booking` (
  `guest_id` int(11) NOT NULL,
  `room_id` int(2) NOT NULL,
  `comeIn` datetime NOT NULL,
  `comeOut` datetime NOT NULL,
  `status` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Booking`
--

INSERT INTO `Booking` (`guest_id`, `room_id`, `comeIn`, `comeOut`, `status`) VALUES
(2, 1, '2020-12-22 00:00:00', '2020-12-25 00:00:00', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `Guest`
--

CREATE TABLE `Guest` (
  `guest_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `pasport` varchar(70) NOT NULL,
  `phone` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Guest`
--

INSERT INTO `Guest` (`guest_id`, `name`, `pasport`, `phone`) VALUES
(2, 'Александр', '235253', 2147483647);

-- --------------------------------------------------------

--
-- Структура таблицы `Order`
--

CREATE TABLE `Order` (
  `guest_id` int(11) NOT NULL,
  `service_id` int(10) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `Room`
--

CREATE TABLE `Room` (
  `room_id` int(2) NOT NULL,
  `cost` int(6) NOT NULL,
  `capacity` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Room`
--

INSERT INTO `Room` (`room_id`, `cost`, `capacity`) VALUES
(1, 1000, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `Service`
--

CREATE TABLE `Service` (
  `service_id` int(10) NOT NULL,
  `description` varchar(45) NOT NULL,
  `cost` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Booking`
--
ALTER TABLE `Booking`
  ADD PRIMARY KEY (`guest_id`,`room_id`),
  ADD KEY `room_id_idx` (`room_id`);

--
-- Индексы таблицы `Guest`
--
ALTER TABLE `Guest`
  ADD PRIMARY KEY (`guest_id`);

--
-- Индексы таблицы `Order`
--
ALTER TABLE `Order`
  ADD PRIMARY KEY (`guest_id`,`service_id`,`date`),
  ADD KEY `service_id_idx` (`service_id`);

--
-- Индексы таблицы `Room`
--
ALTER TABLE `Room`
  ADD PRIMARY KEY (`room_id`);

--
-- Индексы таблицы `Service`
--
ALTER TABLE `Service`
  ADD PRIMARY KEY (`service_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Guest`
--
ALTER TABLE `Guest`
  MODIFY `guest_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `Service`
--
ALTER TABLE `Service`
  MODIFY `service_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `Booking`
--
ALTER TABLE `Booking`
  ADD CONSTRAINT `guest-room` FOREIGN KEY (`guest_id`) REFERENCES `Guest` (`guest_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `room-guest` FOREIGN KEY (`room_id`) REFERENCES `Room` (`room_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `Order`
--
ALTER TABLE `Order`
  ADD CONSTRAINT `guest-service` FOREIGN KEY (`guest_id`) REFERENCES `Guest` (`guest_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `service-guest` FOREIGN KEY (`service_id`) REFERENCES `Service` (`service_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
