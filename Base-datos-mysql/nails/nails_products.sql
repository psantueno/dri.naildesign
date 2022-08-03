-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: nails
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) DEFAULT NULL,
  `precio` int NOT NULL,
  `imagen` varchar(26) NOT NULL,
  `category_id` int NOT NULL,
  `descuento` int NOT NULL,
  `descripcion` varchar(432) NOT NULL,
  `cantidad` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_categories` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Esmalte Velvet',900,'esmalte-velvet-mavala.webp',1,10,'Secado rápido y alta adherencia del esmalte. Mavala se preocupa por la salud de los consumidores sin parabenos y sin formaldehido. Sin níquel añadido y sin ingredientes animales.',NULL),(4,'Esmalte Smokey',1950,'smokey-blue.webp',1,20,'Secado rápido y alta adherencia del esmalte. Mavala se preocupa por la salud de los consumidores sin parabenos y sin formaldehido. Sin níquel añadido y sin ingredientes animales.',NULL),(7,'Esmalte Rose Hill',1200,'esmalte-rose.webp',1,15,'Secado rápido y alta adherencia del esmalte. Mavala se preocupa por la salud de los consumidores sin parabenos y sin formaldehido. Sin níquel añadido y sin ingredientes animales.',NULL),(8,'Esmalte Silver',1000,'esmalte-silver.webp',1,10,'Secado rápido y alta adherencia del esmalte. Mavala se preocupa por la salud de los consumidores sin parabenos y sin formaldehido. Sin níquel añadido y sin ingredientes animales.',NULL),(9,'Paleta de Maquillaje',2500,'paleta-maquillaje.jpeg',2,10,'Paleta de sombra de ojos se reinventa para revelar todo su savoir-faire de colores y efectos visuales. Más creativa más cargada de pigmentos y más rica en efectos permite explorar las múltiples facetas del color para expresar todos los aspectos de nuestra personalidad.',NULL),(10,'Delineador Líquido',1900,'rimel.jpeg',2,10,'Delineador líquido que te da el máximo control para crear el delineado que quieras y además dura 24 horas! Comenzá por delinea la esquina interior del párpado a lo largo de la línea de las pestañas siguiendo el contorno de tu ojo. Para un look más dramático traza una línea más gruesa en las esquinas exteriores.',NULL),(11,'Rímel Waterproof',1000,'rimel2.jpeg',2,10,'Con efecto de súper curvatura y definición larga duración y color ultra negro esta Súper Máscara para Pestañas seca muy rápido no hace grumos y es fácil de ser removida. Creá looks increíbles con este indispensable ítem.',NULL),(12,'Base Líquida',1200,'baseliquila.webp',2,10,'Textura fluida de efecto segunda piel esta base modulable proporciona una intensidad a medida.','3'),(13,'Base Dior',2200,'base-dior.jpeg',2,10,'Ofrece un acabado luminoso con cobertura modulable: del acabado más natural a la perfección de la alta cobertura.',NULL),(14,'Labial Ultracor',1500,'labial-ultracor.png',2,10,'Color vibrante y de alto cubrimiento (alta concentración de pigmentos y polvos). entos y polvos).',NULL),(15,'Brillo Pink',1200,'brillo-pink.webp',2,10,'Color y Brillo intenso con un espectacular efecto “húmedo”. Hidrata uniformemente los labios gracias a su característica tipo líquido.',NULL),(16,'Kit Sombras de Ojos',1500,'sombras.webp',2,10,'Nueva paleta de sombra para que luzcas unos ojos seductores y sorprendentemente intensos de larga duración diseñada para lograr cualquier apariencia desde sutil hasta sensual desde el día hasta la noche.',NULL),(17,'Quita Esmalte',800,'removedor_de_esmaltes.jpeg',3,10,'Removedor de esmalte de uñas. Deja las uñas con un aspecto saludable. Contiene vitaminas E B5 y seda hidrolizada.',NULL),(18,'Set manicura',1000,'acesorio-set-manicura.jpeg',3,10,'Este aparato permite cuidar las manos y los pies gracias a sus 7 cabezales revestidos de zafiro que pueden rotar a derecha o izquierda a dos velocidades distintas.',NULL),(19,'Kit para uñas',2000,'acesorio-kit-limpieza.jpeg',4,15,'Este kit permite limpiar el esmalte de las uñas de forma sencilla. Incluye 10 clips quitaesmalte un raspador un empujador de cutículas 5 limas dos bloques para pulir la superficie de las uñas y un cortador de cutículas. Para quitar el esmalte hay que meter los algodones con acetona en los clips y dejarlos puestos en las uñas durante unos minutos. Después con el raspador se retira el esmalte.',NULL),(20,'Secadora de uñas',800,'acesorio-lampara.jpeg',4,5,'Para que el esmalte de uñas se seque rápido y no se emborrone es recomendable contar con una lámpara especial para la manicura y pedicura. Este modelo tiene luz LED/UV que no daña los ojos y la piel. Sus 21 bombillas de luz blanca tienen 40 vatios de potencia y pueden durar hasta 5 años aun usándose de forma continua. Tiene también un sensor de manera que la luz se enciende automáticamente al colocar la mano bajo el dispositivo.',NULL),(21,'Hidratante de uñas',1800,'acesorio-therapy.jpeg',3,10,'Pintar y limar las uñas a veces no es suficiente para que luzcan bonitas ya que se pueden descascarillar y romper. Para evitar que las uñas se agrieten rompan o rajen el acondicionador para uñas de Eveline Cosmetics las refuerza endurece y protege. Además las regenera eficazmente y deja su superficie lisa y brillante en unos pocos días.',NULL),(22,'Set de diseño de uñas',2000,'acesorio-kit-limpieza.jpeg',3,15,'Para realizar intrincados y finos dibujos en las uñas es necesario contar con pinceles y accesorios especiales. Este set consta de 15 pinceles con distintos grosores y formas y 5 herramientas para crear puntos de diferentes tamaños. Incluye una bolsa con ranuras para clasificar todos los accesorios y transportarlos fácilmente.',NULL),(23,'Set de pedicura',800,'acesorio-set-mani.jpeg',3,10,'Para tener las uñas a punto no es necesario contar con una gran tecnología sino que se puede recurrir a accesorios tradicionales. Este set cuenta con 18 herramientas de acero inoxidable para hacer la manicura y la pedicura y cuidar el rostro. Entre otras cosas incluye varios cortaúñas unas tijeras una lima un raspador una pinza doble y una aguja para el acné.acesorio',NULL),(24,'Kit decoración de uñas',1800,'acesorio-deco.jpeg',3,10,'Para aquellos que disfrutan decorando sus uñas con dibujos y piedrecitas este kit es muy útil. Incluye 15 pinceles de uñas 4 cajitas con pedrería un cepillo cinco bolígrafos 10 rollos de cinta de rayas con colores surtidos 1 lima y un pulidor de uñas. Gracias a los pinceles de diversos grosores y formas se pueden pintar rayas finas flores hojas puntos…',NULL),(25,'Base metalica skalet Pro',1900,'product-1656919785470.jpg',4,10,'Esta es una prueba para rellenar el campo y debuggear errores en el controller','3'),(26,'Esmalte Karichi',1400,'product-1656954584426.jpeg',1,20,'Secado rápido y alta adherencia del esmalte. Mavala se preocupa por la salud de los consumidores sin parabenos y sin formaldehido. Sin níquel añadido y sin ingredientes animales.','6'),(27,'v',4,'product-1658266426934.jpeg',1,-4,'v','4');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-02 21:42:14
