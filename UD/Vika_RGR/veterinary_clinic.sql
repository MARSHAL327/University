-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Дек 20 2020 г., 12:36
-- Версия сервера: 10.4.14-MariaDB
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `veterinary_clinic`
--

-- --------------------------------------------------------

--
-- Структура таблицы `diagnosis`
--

CREATE TABLE `diagnosis` (
  `id` int(11) NOT NULL,
  `name` char(30) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `diagnosis`
--

INSERT INTO `diagnosis` (`id`, `name`) VALUES
(1, 'Otravlenie'),
(2, 'Otit'),
(4, 'Lishai'),
(5, 'Gelmintoz'),
(6, 'Artrit'),
(7, 'Gepatit'),
(8, 'Dermatit'),
(9, 'Avitamnoz'),
(10, 'Chistit'),
(11, 'Bronhit'),
(12, 'Beremennost'),
(13, 'Zubnoi kamen'),
(14, 'Stress'),
(15, 'Traheit');

-- --------------------------------------------------------

--
-- Структура таблицы `drug`
--

CREATE TABLE `drug` (
  `id` int(11) NOT NULL,
  `name` char(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cost` char(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `drug`
--

INSERT INTO `drug` (`id`, `name`, `cost`) VALUES
(1, 'Chiprovet chapli', '212 rub'),
(2, 'Optimmun maz', '1895 rub'),
(4, 'Aktivirovanniy ugol', '50 rub'),
(5, 'Polisorb', '290 rub'),
(6, 'Fugin', '785 rub'),
(7, 'Sanoderm', '1000 rub'),
(8, 'Orozim', '895 rub'),
(9, 'Ynitabs vitamins', '345 rub'),
(10, 'Natures Miracle Shampoo', '467 rub'),
(11, 'KogaPET GIGI vitamin', '5470 rub'),
(12, 'Fenpraz Forte', '337 rub'),
(13, 'Stop-stress', '206 rub'),
(14, 'Gepatovet', '623 rub'),
(15, 'Konvenia', '3472 rub'),
(16, 'Bonharen', '2900 rub');

-- --------------------------------------------------------

--
-- Структура таблицы `medical_card`
--

CREATE TABLE `medical_card` (
  `id` int(11) NOT NULL,
  `id_pet` int(11) NOT NULL,
  `id_veterinarian_m` int(11) NOT NULL,
  `id_treatment` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `medical_card`
--

INSERT INTO `medical_card` (`id`, `id_pet`, `id_veterinarian_m`, `id_treatment`) VALUES
(1012, 3, 18, 3),
(1013, 4, 17, 4),
(1014, 5, 16, 5),
(1015, 6, 15, 6),
(1016, 7, 14, 7),
(1017, 8, 13, 8),
(1018, 9, 12, 9),
(1019, 10, 11, 10),
(1020, 11, 10, 11),
(1021, 12, 9, 12),
(1022, 13, 8, 13),
(1024, 15, 6, 15),
(1027, 18, 3, 3),
(1029, 20, 1, 5),
(1031, 22, 18, 7),
(1032, 23, 17, 8),
(1033, 24, 16, 9),
(1034, 25, 15, 10);

-- --------------------------------------------------------

--
-- Структура таблицы `owner`
--

CREATE TABLE `owner` (
  `id` int(11) NOT NULL,
  `FIO` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` char(35) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` char(15) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `owner`
--

INSERT INTO `owner` (`id`, `FIO`, `address`, `phone`) VALUES
(2, 'Gromov D.G', 'Sevastopol, st.Bocmanskaya 7', '+79787320421'),
(3, 'Omelko D.A.', 'Sevastopol, st.Leninskaya 21', '+79787220529'),
(4, 'Kirimov H.H.', 'Sevastopol, st.Lisa Chaika 2', '+79787320522'),
(5, 'Sobolev F.M.', 'Sevastopol, st.Voronchovskaya', '+79787320777'),
(6, 'Arova K.A.', 'Sevastopol, st.Balaklavskaya', '+79787325520'),
(7, 'Yrchenko G.G', 'Sevastopol, st.Bermana', '+79787325888'),
(8, 'Aristarova D.D', 'Sevastopol, st.Galini Petrovoi', '+79787321333'),
(9, 'Doronin G.Y.', 'Sevastopol, st.Posharova', '+79787327656'),
(10, 'Zorina E.A.', 'Sevastopol, st.Portovaya', '+79787329087'),
(11, 'Reutov M.L.', 'Sevastopol, st.Strelkovya', '+79787308976'),
(12, 'Diadenko O.O.', 'Sevastopol, st.Stepanyana', '+79787329087'),
(13, 'Sumar J.J.', 'Sevastopol, st.Balaklavskaya', '+79787321234'),
(14, 'Pulozov T.S.', 'Sevastopol, st.Voronchovskaya', '+79787320590'),
(15, 'Livich J.J.', 'Sevastopol, st.Bermana', '+79787325111'),
(16, 'Dumak A.L.', 'Sevastopol, st.Lisa Chaika', '+79787325365'),
(17, 'Gorin V.V.', 'Sevastopol, st.Locmanskaya', '+79787325764'),
(18, 'Fokin A.A.', 'Sevastopol, st.Leninskaya 12', '+79787325071'),
(19, 'Sunduk A.A.', 'Sevastopol, st.Bocmanskaya 9', '+79787325509'),
(20, 'Ketruk N.B.', 'Sevastopol, st.Galini Petrovoi 1', '+79787325162');

-- --------------------------------------------------------

--
-- Структура таблицы `pet`
--

CREATE TABLE `pet` (
  `id` int(11) NOT NULL,
  `id_owner` int(11) NOT NULL,
  `id_veterinarian` int(11) NOT NULL,
  `category` char(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `breed` char(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nickname` char(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sex` int(11) NOT NULL,
  `date_of_birth` char(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `pet`
--

INSERT INTO `pet` (`id`, `id_owner`, `id_veterinarian`, `category`, `breed`, `nickname`, `sex`, `date_of_birth`) VALUES
(2, 2, 19, 'dog', 'Doberman', 'Zevs', 2, '10.10.2018'),
(3, 3, 18, 'horse', 'Ahaltekinskaya', 'Lucky', 2, '11.11.2017'),
(4, 4, 17, 'parrot', 'Volnistiy', 'Stesha', 1, '22.02.2020'),
(5, 5, 16, 'cat', 'Ashera', 'Kleo', 1, '21.03.2019'),
(6, 6, 15, 'cat', 'Bengal', 'Sirop', 2, '15.09.2018'),
(7, 7, 14, 'dog', 'Korgi', 'Limon', 2, '22.04.2017'),
(8, 8, 13, 'dog', 'Shpich', 'Gucci', 2, '12.08.2019'),
(9, 9, 12, 'parrot', 'Ara', 'Desh', 2, '10.10.2016'),
(10, 10, 11, 'cat', 'Britanskaya', 'Molly', 1, '24.11.2015'),
(11, 11, 10, 'cat', 'Kanaani', 'Tessa', 1, '27.10.2017'),
(12, 12, 9, 'horse', 'Bulonskaya', 'Afrodita', 1, '21.08.2018'),
(13, 13, 8, 'horse', 'Konnemar', 'Dshedi', 2, '22.12.2017'),
(14, 14, 7, 'horse', 'Pinto', 'Grap', 2, '29.07.2015'),
(15, 15, 6, 'dog', 'Shetli', 'Kira', 1, '14.05.2020'),
(16, 16, 5, 'dog', 'Bigl', 'Chappi', 2, '15.05.2020'),
(17, 17, 4, 'dog', 'Malamut', 'Chak', 2, '12.09.2017'),
(18, 18, 3, 'parrot', 'Volnistiy', 'Margo', 1, '15.03.2019'),
(20, 20, 1, 'cat', 'Karaket', 'Mellin', 1, '10.10.2015'),
(22, 2, 18, 'cat', 'Mein-Kyn', 'Diesel', 2, '20.04.2020'),
(23, 3, 17, 'dog', 'Taksa', 'Mira', 1, '19.01.2019'),
(24, 4, 16, 'dog', 'Doberman', 'Hippo', 2, '20.02.20'),
(25, 5, 15, 'dog', 'Shetli', 'Triks', 1, '17.07.2017');

-- --------------------------------------------------------

--
-- Структура таблицы `sex`
--

CREATE TABLE `sex` (
  `id` int(11) NOT NULL,
  `sex` char(10) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `sex`
--

INSERT INTO `sex` (`id`, `sex`) VALUES
(1, 'woman'),
(2, 'man');

-- --------------------------------------------------------

--
-- Структура таблицы `treatment`
--

CREATE TABLE `treatment` (
  `id` int(11) NOT NULL,
  `id_diagnosis` int(11) NOT NULL,
  `id_drug` int(11) NOT NULL,
  `prescribing` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_start` char(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_end` char(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `treatment`
--

INSERT INTO `treatment` (`id`, `id_diagnosis`, `id_drug`, `prescribing`, `date_start`, `date_end`) VALUES
(3, 1, 4, 'Prinimat 3 raza v den s vodoi(cat: 0,2-2g,dog:0,5-2g,horse:20-150g,bird:0,2-1g)', '11.09.2020', '15.09.2020'),
(4, 4, 7, 'Mazat tonkim sloem 2 raza v sutki na protiahenii 2 nedeli', '10.10.2020', '24.10.2020'),
(5, 5, 12, 'Odnokratno opredelit po masse shivotnogo', '11.10.2020', '12.10.2020'),
(6, 6, 16, 'Odnokratno.Menee 5kg-0,1ml,bolee 5kg - 0,05ml,0,0,1 ml na 1 kg(horse)', '22.09.2020', '24.09.2020'),
(7, 7, 14, '2 raza v den,4 nedeli', '25.09.2020', '27.10.2020'),
(8, 8, 15, 'Odnokratno.Vvod podkozhno,1ml na 10 kg', '10.11.2020', '12.11.2020'),
(9, 9, 11, '10kg-1 tablenka,do 5-1/2 tabletki.2 nedeli', '01.09.2020', '14.09.2020'),
(10, 10, 15, 'Odnokratno.Vvod podkozhno,1ml na 10 kg', '02.10.2020', '02.10.2020'),
(11, 11, 15, 'Dvukratno.Vvod podkozhno,1ml na 10 kg', '21.09.2020', '05.10.2020'),
(12, 12, 9, 'Na protiashenii vsego sroka', '02.08.2020', '04.10.2020'),
(13, 13, 8, 'Cat-1sm.Dog<5kg-1sm.Dog 5-20kg-2sm.Dog>20kg-5sm', '05.11.2020', '15.11.2020'),
(15, 15, 15, 'Odnokratno.Vvod podkozhno,1ml na 10 kg', '11.10.2020', '21.10.2020');

-- --------------------------------------------------------

--
-- Структура таблицы `veterinarian`
--

CREATE TABLE `veterinarian` (
  `id` int(11) NOT NULL,
  `FIO` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` char(35) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` char(15) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `veterinarian`
--

INSERT INTO `veterinarian` (`id`, `FIO`, `address`, `phone`) VALUES
(1, 'Karev M.O.', 'Sevastopol, st.Voronchovskaya 9', '+79787320512'),
(3, 'Efremova K.A.', 'Sevastopol, st.Stepanyan', '+79787220524'),
(4, 'Kirimov H.H.', 'Sevastopol, st.Fontannaya 2', '+79787320525'),
(5, 'Likov D.D', 'Sevastopol, st.Voronchovskaya', '+79787320726'),
(6, 'Saveliev K.R.', 'Sevastopol, st.Leninskaya', '+79787325527'),
(7, 'Grinina A.L.', 'Sevastopol, st.Hrushova', '+79787325828'),
(8, 'Hopiek B.N.', 'Sevastopol, st.Flotskya', '+79787321329'),
(9, 'Vasiliev V.V.', 'Sevastopol, st.Hrushova', '+79787327630'),
(10, 'Dobishev E.A.', 'Sevastopol, st.Cherchova', '+79787329031'),
(11, 'Timurov M.L.', 'Sevastopol, st.Cehova', '+79787308956'),
(12, 'Pinchenko P.O.', 'Sevastopol, st.Sherpaka', '+79787329027'),
(13, 'Basov L.J.', 'Sevastopol, st.Estonskya', '+79787321230'),
(14, 'Volga Z.S.', 'Sevastopol, st.Ydina', '+79787320597'),
(15, 'Ravich K.J.', 'Sevastopol, st.Symskaya', '+79787325312'),
(16, 'Doroshev L.L.', 'Sevastopol, st.Hrushova', '+79787325222'),
(17, 'Maslov A.V.', 'Sevastopol, st.Stepanyan', '+79787325709'),
(18, ' Naumchik S.A.', 'Sevastopol, st.Ydina', '+79787325045'),
(19, 'Brunov B.A.', 'Sevastopol, st.Estonskya', '+79787325507'),
(20, 'Michalchenko N.N.', 'Sevastopol, st.Galini Petrovoi 1', '+79787325189');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `diagnosis`
--
ALTER TABLE `diagnosis`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `drug`
--
ALTER TABLE `drug`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `medical_card`
--
ALTER TABLE `medical_card`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_Treatment` (`id_treatment`),
  ADD KEY `FK_Pet` (`id_pet`),
  ADD KEY `FK_Veterinarian_m` (`id_veterinarian_m`);

--
-- Индексы таблицы `owner`
--
ALTER TABLE `owner`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `pet`
--
ALTER TABLE `pet`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_Owner` (`id_owner`),
  ADD KEY `FK_Veterinarian` (`id_veterinarian`),
  ADD KEY `FK_Sex` (`sex`);

--
-- Индексы таблицы `sex`
--
ALTER TABLE `sex`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `treatment`
--
ALTER TABLE `treatment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_DIAGNOSIS` (`id_diagnosis`),
  ADD KEY `FK_DRUG` (`id_drug`);

--
-- Индексы таблицы `veterinarian`
--
ALTER TABLE `veterinarian`
  ADD PRIMARY KEY (`id`);

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `medical_card`
--
ALTER TABLE `medical_card`
  ADD CONSTRAINT `FK_Pet` FOREIGN KEY (`id_pet`) REFERENCES `pet` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_Treatment` FOREIGN KEY (`id_treatment`) REFERENCES `treatment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_Veterinarian_m` FOREIGN KEY (`id_veterinarian_m`) REFERENCES `veterinarian` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `pet`
--
ALTER TABLE `pet`
  ADD CONSTRAINT `FK_Owner` FOREIGN KEY (`id_owner`) REFERENCES `owner` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_Sex` FOREIGN KEY (`sex`) REFERENCES `sex` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_Veterinarian` FOREIGN KEY (`id_veterinarian`) REFERENCES `veterinarian` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `treatment`
--
ALTER TABLE `treatment`
  ADD CONSTRAINT `FK_DIAGNOSIS` FOREIGN KEY (`id_diagnosis`) REFERENCES `diagnosis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_DRUG` FOREIGN KEY (`id_drug`) REFERENCES `drug` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
