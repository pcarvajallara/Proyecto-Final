-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-06-2022 a las 21:23:33
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hotel`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitacion`
--

CREATE TABLE `habitacion` (
  `id_habitacion` int(11) NOT NULL,
  `cama_habitacion` int(11) NOT NULL,
  `numero_habitacion` int(11) NOT NULL,
  `edificio_habitacion` varchar(50) NOT NULL,
  `imagen` varchar(50) NOT NULL,
  `precio` varchar(15) NOT NULL,
  `descripcion` varchar(160) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `habitacion`
--

INSERT INTO `habitacion` (`id_habitacion`, `cama_habitacion`, `numero_habitacion`, `edificio_habitacion`, `imagen`, `precio`, `descripcion`) VALUES
(1, 1, 101, 'Principal', 'img/hab1.jpg', '8000', 'Habitacion de lujo con una vista impresionante.'),
(2, 2, 102, 'Principal', 'img/hab2.jpg', '', ''),
(3, 1, 103, 'Azul', 'img/hab3.jpg', '', ''),
(4, 2, 104, 'blanco', 'img/hab4.jpg', '', ''),
(5, 1, 105, 'Principal', 'img/hab5.jpg', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oferta`
--

CREATE TABLE `oferta` (
  `id_oferta` int(11) NOT NULL,
  `id_habitacion` int(11) NOT NULL,
  `precio` varchar(15) NOT NULL,
  `descripcion` varchar(160) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `oferta`
--

INSERT INTO `oferta` (`id_oferta`, `id_habitacion`, `precio`, `descripcion`) VALUES
(1, 102, '8000', 'Oferta limitada\r\nHabitacion con vistas a la piscina\r\nApartamento entero, 1 dormitorio, 1 sala de estar,1 baño,1 cocina 58m²\r\n2 camas (1 sofá cama, 1 dob'),
(2, 103, '9500', 'Habitación Deluxe\r\n2 camas dobles grandes\r\nTodo incluido\r\nCancelación GRATIS,Sin pago por adelantado\r\nPuede cancelar más tarde.Aprovecha y consigue un buen prec');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE `reserva` (
  `id_reserva` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_oferta` int(11) NOT NULL,
  `fecha_entrada` varchar(15) NOT NULL,
  `fecha_salida` varchar(15) NOT NULL,
  `habitacion_reserva` varchar(5) NOT NULL,
  `persona_reserva` int(5) NOT NULL,
  `estado` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reserva`
--

INSERT INTO `reserva` (`id_reserva`, `id_usuario`, `id_oferta`, `fecha_entrada`, `fecha_salida`, `habitacion_reserva`, `persona_reserva`, `estado`) VALUES
(1, 1, 5, '10/06/2022', '15/06/2022', '105', 2, 'disponible'),
(2, 2, 4, '09/06/2022', '12/06/2022', '101', 2, 'disponible');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_usuario`
--

CREATE TABLE `tb_usuario` (
  `id_usuario` int(10) NOT NULL,
  `nombre_usuario` varchar(50) NOT NULL,
  `correo_usuario` varchar(50) NOT NULL,
  `contrasena_usuario` varchar(15) NOT NULL,
  `direccion_usuario` varchar(50) NOT NULL,
  `telefono_usuario` varchar(12) NOT NULL,
  `tipo_usuario` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tb_usuario`
--

INSERT INTO `tb_usuario` (`id_usuario`, `nombre_usuario`, `correo_usuario`, `contrasena_usuario`, `direccion_usuario`, `telefono_usuario`, `tipo_usuario`) VALUES
(1, 'Carlos Lora', 'clora@hotmail.com', '1234', 'c/ 27 de febrero no3', '8096778787', 1),
(2, 'Maria Diaz', 'mdiaz@gmail.com', '12345', 'Distrito Nacional', '8099099090', 2),
(3, 'Lucia Arias', 'larias@hotmail.com ', '1212', 'Ensanche Espaillat', '8292325555', 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `habitacion`
--
ALTER TABLE `habitacion`
  ADD PRIMARY KEY (`id_habitacion`);

--
-- Indices de la tabla `oferta`
--
ALTER TABLE `oferta`
  ADD PRIMARY KEY (`id_oferta`);

--
-- Indices de la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`id_reserva`);

--
-- Indices de la tabla `tb_usuario`
--
ALTER TABLE `tb_usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `habitacion`
--
ALTER TABLE `habitacion`
  MODIFY `id_habitacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `oferta`
--
ALTER TABLE `oferta`
  MODIFY `id_oferta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `reserva`
--
ALTER TABLE `reserva`
  MODIFY `id_reserva` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tb_usuario`
--
ALTER TABLE `tb_usuario`
  MODIFY `id_usuario` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
