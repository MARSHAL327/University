-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Янв 11 2021 г., 09:36
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
-- База данных: `VUZ_system_db`
--

-- --------------------------------------------------------

--
-- Структура таблицы `applicant`
--

CREATE TABLE `applicant` (
  `PASSPOR_NUM` int(11) NOT NULL DEFAULT '0',
  `FIO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `applicant`
--

INSERT INTO `applicant` (`PASSPOR_NUM`, `FIO`) VALUES
(329376, 'gruzdev a.o.'),
(346361, 'shvedenko a.s.'),
(376424, 'dzinoriya d.i.'),
(475914, 'borodin r.v.'),
(789123, 'shost o.v.'),
(846123, 'fio2'),
(2533236, 'testFIO');

-- --------------------------------------------------------

--
-- Структура таблицы `applicant_vuz_spec`
--

CREATE TABLE `applicant_vuz_spec` (
  `PASSPOR_NUM` int(11) DEFAULT NULL,
  `NAME_OF_VUZ` varchar(255) DEFAULT NULL,
  `CODE_SPEC` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `applicant_vuz_spec`
--

INSERT INTO `applicant_vuz_spec` (`PASSPOR_NUM`, `NAME_OF_VUZ`, `CODE_SPEC`) VALUES
(475914, 'kubgu', 5),
(376424, 'mgu', 2);

-- --------------------------------------------------------

--
-- Структура таблицы `exam`
--

CREATE TABLE `exam` (
  `CODE_SPECIALTY` int(11) DEFAULT NULL,
  `NAME_OF_VUZ` varchar(255) DEFAULT NULL,
  `PASSPORT_NUM` int(11) DEFAULT NULL,
  `SUBJECT_NUM` int(11) DEFAULT NULL,
  `MARK` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `exam`
--

INSERT INTO `exam` (`CODE_SPECIALTY`, `NAME_OF_VUZ`, `PASSPORT_NUM`, `SUBJECT_NUM`, `MARK`) VALUES
(2, 'mgu', 376424, 1, 5),
(5, 'kubgu', 475914, 4, 4);

-- --------------------------------------------------------

--
-- Структура таблицы `specialty`
--

CREATE TABLE `specialty` (
  `CODE_SPECIALTY` int(11) NOT NULL DEFAULT '0',
  `EDUCATION_MODE` char(1) DEFAULT NULL,
  `EDUCATION_TIME` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `specialty`
--

INSERT INTO `specialty` (`CODE_SPECIALTY`, `EDUCATION_MODE`, `EDUCATION_TIME`) VALUES
(1, 'o', 4),
(2, 'o', 4),
(3, 'z', 4),
(4, 'z', 6),
(5, 'o', 5);

-- --------------------------------------------------------

--
-- Структура таблицы `subject`
--

CREATE TABLE `subject` (
  `SUBJECT_NUM` int(11) NOT NULL,
  `SUBJECT_NAME` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `subject`
--

INSERT INTO `subject` (`SUBJECT_NUM`, `SUBJECT_NAME`) VALUES
(1, 'math'),
(2, 'phys'),
(3, 'tbd'),
(4, 'osa'),
(5, 'ota');

-- --------------------------------------------------------

--
-- Структура таблицы `VUZ`
--

CREATE TABLE `VUZ` (
  `NAME_OF_VUZ` varchar(255) NOT NULL,
  `ADDRESS` varchar(255) NOT NULL,
  `LVL_ACCRED` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `VUZ`
--

INSERT INTO `VUZ` (`NAME_OF_VUZ`, `ADDRESS`, `LVL_ACCRED`) VALUES
('kubgu', 'pravda', 7),
('mgtu', 'moscow', 7),
('mgu', 'ostrykova', 5),
('plehanova', 'gogolya', 2),
('rosgu', 'golubza', 1),
('sevgu', 'universitetskaya', 3);

-- --------------------------------------------------------

--
-- Структура таблицы `vuz_spec`
--

CREATE TABLE `vuz_spec` (
  `NAME_OF_VUZ` varchar(255) DEFAULT NULL,
  `SPEC_CODE` int(11) DEFAULT NULL,
  `NUM_PLACE` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `vuz_spec`
--

INSERT INTO `vuz_spec` (`NAME_OF_VUZ`, `SPEC_CODE`, `NUM_PLACE`) VALUES
('sevgu', 1, 30),
('mgu', 2, 28),
('plehanova', 3, 56),
('rosgu', 4, 16),
('kubgu', 5, 10);

-- --------------------------------------------------------

--
-- Дублирующая структура для представления `экзамены`
-- (См. Ниже фактическое представление)
--
CREATE TABLE `экзамены` (
`CODE_SPECIALTY` int(11)
,`NAME_OF_VUZ` varchar(255)
,`FIO` varchar(255)
,`SUBJECT_NAME` varchar(255)
,`MARK` int(11)
);

-- --------------------------------------------------------

--
-- Структура для представления `экзамены`
--
DROP TABLE IF EXISTS `экзамены`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `vuz_system_db`.`экзамены`  AS  select `vuz_system_db`.`exam`.`CODE_SPECIALTY` AS `CODE_SPECIALTY`,`vuz_system_db`.`exam`.`NAME_OF_VUZ` AS `NAME_OF_VUZ`,`vuz_system_db`.`applicant`.`FIO` AS `FIO`,`vuz_system_db`.`subject`.`SUBJECT_NAME` AS `SUBJECT_NAME`,`vuz_system_db`.`exam`.`MARK` AS `MARK` from ((`vuz_system_db`.`exam` join `vuz_system_db`.`subject`) join `vuz_system_db`.`applicant`) where ((`vuz_system_db`.`exam`.`PASSPORT_NUM` = `vuz_system_db`.`applicant`.`PASSPOR_NUM`) and (`vuz_system_db`.`subject`.`SUBJECT_NUM` = `vuz_system_db`.`exam`.`SUBJECT_NUM`)) ;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `applicant`
--
ALTER TABLE `applicant`
  ADD PRIMARY KEY (`PASSPOR_NUM`);

--
-- Индексы таблицы `applicant_vuz_spec`
--
ALTER TABLE `applicant_vuz_spec`
  ADD KEY `name_of_vuz_avs_fk` (`NAME_OF_VUZ`),
  ADD KEY `code_spec_avs_fk` (`CODE_SPEC`),
  ADD KEY `num_passport_avs_fk` (`PASSPOR_NUM`);

--
-- Индексы таблицы `exam`
--
ALTER TABLE `exam`
  ADD KEY `code_spec_exam_fk` (`CODE_SPECIALTY`),
  ADD KEY `name_of_vuz_exam_fk` (`NAME_OF_VUZ`),
  ADD KEY `passport_num_exam_fk` (`PASSPORT_NUM`),
  ADD KEY `subject_num_exam_fk` (`SUBJECT_NUM`);

--
-- Индексы таблицы `specialty`
--
ALTER TABLE `specialty`
  ADD PRIMARY KEY (`CODE_SPECIALTY`);

--
-- Индексы таблицы `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`SUBJECT_NUM`);

--
-- Индексы таблицы `VUZ`
--
ALTER TABLE `VUZ`
  ADD PRIMARY KEY (`NAME_OF_VUZ`);

--
-- Индексы таблицы `vuz_spec`
--
ALTER TABLE `vuz_spec`
  ADD KEY `name_of_vuz_fk` (`NAME_OF_VUZ`),
  ADD KEY `code_spec_fk` (`SPEC_CODE`);

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `applicant_vuz_spec`
--
ALTER TABLE `applicant_vuz_spec`
  ADD CONSTRAINT `code_spec_avs_fk` FOREIGN KEY (`CODE_SPEC`) REFERENCES `vuz_spec` (`SPEC_CODE`),
  ADD CONSTRAINT `name_of_vuz_avs_fk` FOREIGN KEY (`NAME_OF_VUZ`) REFERENCES `vuz_spec` (`NAME_OF_VUZ`),
  ADD CONSTRAINT `num_passport_avs_fk` FOREIGN KEY (`PASSPOR_NUM`) REFERENCES `applicant` (`PASSPOR_NUM`);

--
-- Ограничения внешнего ключа таблицы `exam`
--
ALTER TABLE `exam`
  ADD CONSTRAINT `code_spec_exam_fk` FOREIGN KEY (`CODE_SPECIALTY`) REFERENCES `applicant_vuz_spec` (`CODE_SPEC`),
  ADD CONSTRAINT `name_of_vuz_exam_fk` FOREIGN KEY (`NAME_OF_VUZ`) REFERENCES `applicant_vuz_spec` (`NAME_OF_VUZ`),
  ADD CONSTRAINT `passport_num_exam_fk` FOREIGN KEY (`PASSPORT_NUM`) REFERENCES `applicant_vuz_spec` (`PASSPOR_NUM`),
  ADD CONSTRAINT `subject_num_exam_fk` FOREIGN KEY (`SUBJECT_NUM`) REFERENCES `subject` (`SUBJECT_NUM`);

--
-- Ограничения внешнего ключа таблицы `vuz_spec`
--
ALTER TABLE `vuz_spec`
  ADD CONSTRAINT `code_spec_fk` FOREIGN KEY (`SPEC_CODE`) REFERENCES `specialty` (`CODE_SPECIALTY`),
  ADD CONSTRAINT `name_of_vuz_fk` FOREIGN KEY (`NAME_OF_VUZ`) REFERENCES `VUZ` (`NAME_OF_VUZ`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
