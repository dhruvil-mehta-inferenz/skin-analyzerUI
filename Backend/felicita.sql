-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2024 at 10:00 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `felicita`
--

-- --------------------------------------------------------

--
-- Table structure for table `remediesinfos`
--

CREATE TABLE `remediesinfos` (
  `id` int(11) NOT NULL,
  `skinIssue` varchar(255) DEFAULT '',
  `type` varchar(255) DEFAULT '',
  `category` varchar(255) DEFAULT '',
  `title` varchar(255) DEFAULT '',
  `description` varchar(255) DEFAULT '',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `remediesinfos`
--

INSERT INTO `remediesinfos` (`id`, `skinIssue`, `type`, `category`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Wrinkles', 'General', 'Excellent', 'Sunscreen', ' Apply a broad-spectrum sunscreen with at least SPF 30 every day to protect your skin from UV damage, which can lead to premature aging and wrinkles.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(2, 'Wrinkles', 'General', 'Excellent', 'Hydration', ' Drink plenty of water and use a moisturizer containing hyaluronic acid to keep your skin hydrated and plump.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(3, 'Wrinkles', 'General', 'Good', 'Coconut Oil Massage', 'Gently massage extra-virgin coconut oil onto your skin before bed. Coconut oil is rich in antioxidants and can help improve skin elasticity.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(4, 'Wrinkles', 'General', 'Good', 'Green Tea Compress', 'Brew green tea, let it cool, and use a soft cloth to apply it to your face as a compress. Green tea contains antioxidants that can help reduce inflammation and improve skin texture.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(5, 'Wrinkles', 'General', 'Moderate', 'DIY Vitamin C Serum', ' Mix a small amount of vitamin C powder with aloe vera gel or distilled water. Apply this serum to your face in the evening. Vitamin C can boost collagen production and improve skin texture.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(6, 'Wrinkles', 'General', 'Moderate', 'Olive Oil and Honey Mask', ' Mix equal parts olive oil and honey to create a natural moisturizing mask. Apply it to your face, leave it on for 15-20 minutes, and then rinse off. Olive oil is rich in antioxidants and healthy fats.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(7, 'Wrinkles', 'General', 'Poor', 'Egg White Mask', ' Beat egg whites until frothy and apply them to your face. Leave it on for 15-20 minutes until it dries, then rinse with lukewarm water. Egg whites can temporarily tighten and firm the skin.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(8, 'Wrinkles', 'General', 'Poor', 'Banana and Avocado Mask', 'Mash a ripe banana and avocado together to create a paste. Apply it to your face and leave it on for 20-30 minutes before rinsing. Avocado provides nourishing fatty acids and vitamins.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(9, 'Dark_Circles', 'General', 'Excellent', 'Adequate Sleep', ' Ensure you are getting 7-9 hours of quality sleep each night to prevent the development of dark circles.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(10, 'Dark_Circles', 'General', 'Excellent', 'Cucumber Slices', 'Place chilled cucumber slices on your closed eyelids for 10-15 minutes. Cucumber has a soothing effect and can help reduce puffiness and mild discoloration.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(11, 'Dark_Circles', 'General', 'Good', 'Tea Bag Compress', 'Steep caffeinated tea bags (green tea or black tea) in hot water, let them cool, and place them over your closed eyes for 15 minutes. Caffeine can constrict blood vessels and reduce puffiness.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(12, 'Dark_Circles', 'General', 'Good', 'Cold Milk Compress', 'Soak a cotton pad in cold milk and place it over your eyes for about 15 minutes. The cold temperature and lactic acid in milk can help reduce puffiness and lighten dark circles.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(13, 'Dark_Circles', 'General', 'Moderate', 'Potato Slice Mask', 'Grate a potato, squeeze out the juice, and soak cotton pads in it. Place the pads over your eyes for 20 minutes. Potatoes contain enzymes that can help lighten skin and reduce dark circles.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(14, 'Dark_Circles', 'General', 'Moderate', 'Turmeric and Pineapple Mask', 'Mix a pinch of turmeric powder with fresh pineapple juice to create a paste. Apply the paste around your eyes and leave it on for 15-20 minutes before rinsing. Turmeric has anti-inflammatory and skin-brightening properties.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(15, 'Dark_Circles', 'General', 'Poor', 'Almond Oil Massage', 'Gently massage a few drops of almond oil around your eyes before bed. Almond oil is rich in vitamin E and can help improve circulation and lighten dark circles.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(16, 'Dark_Circles', 'General', 'Poor', 'Rosewater and Lemon Juice', 'Mix equal parts rosewater and fresh lemon juice. Soak cotton pads in the mixture and place them over your closed eyes for 15 minutes. Lemon juice contains vitamin C, which can help brighten the skin and reduce dark circles.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(17, 'Acne', 'General', 'Excellent', 'Honey and Cinnamon Mask', 'Mix equal parts honey and cinnamon to create a paste. Apply it to your face as a mask for about 10-15 minutes before rinsing. Honey has antibacterial properties that can help maintain clear skin.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(18, 'Acne', 'General', 'Excellent', 'Aloe Vera Gel', 'Apply fresh aloe vera gel to your face. Aloe vera has soothing and anti-inflammatory properties that can help keep your skin healthy.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(19, 'Acne', 'General', 'Good', 'Tea Tree Oil Spot Treatment', 'Dilute tea tree oil with a carrier oil (such as jojoba oil) and apply a small amount to individual acne spots. Tea tree oil has antimicrobial properties that can help reduce acne-causing bacteria.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(20, 'Acne', 'General', 'Good', 'Oatmeal and Yogurt Mask', 'Mix finely ground oatmeal with plain yogurt to create a paste. Apply the mask to your face for 15-20 minutes before rinsing. Oatmeal can exfoliate and soothe the skin.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(21, 'Acne', 'General', 'Moderate', 'Apple Cider Vinegar Toner', 'Mix equal parts of water and unfiltered apple cider vinegar. Apply the mixture to your face using a cotton ball as a toner. Apple cider vinegar has antimicrobial properties and can help balance the skin\'s pH.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(22, 'Acne', 'General', 'Moderate', 'Turmeric and Yogurt Mask', 'Mix turmeric powder with plain yogurt to create a paste. Apply the mask to your face, avoiding the eye area, and leave it on for 10-15 minutes before rinsing. Turmeric has anti-inflammatory and antibacterial properties.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(23, 'Acne', 'General', 'Poor', 'Green Tea and Honey Mask', 'Brew green tea, let it cool, and mix it with honey to create a mask. Apply it to your face and leave it on for 15-20 minutes before rinsing. Green tea contains antioxidants and honey has antibacterial properties.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(24, 'Acne', 'General', 'Poor', 'Clay Mask', 'Mix bentonite clay with water or apple cider vinegar to create a thick paste. Apply the mask to your face and let it dry before rinsing. Clay masks can help absorb excess oil and impurities.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(25, 'Spots', 'General', 'Excellent', 'Sunscreen', 'Apply a broad-spectrum sunscreen with at least SPF 30 daily to prevent the formation of new dark spots caused by sun exposure.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(26, 'Spots', 'General', 'Excellent', 'Lemon and Honey Toner', ' Mix equal parts lemon juice and honey. Apply the mixture to your face using a cotton ball as a toner. Lemon juice contains vitamin C, which can help brighten the skin.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(27, 'Spots', 'General', 'Good', 'Vitamin E Oil', 'Gently massage vitamin E oil onto the affected areas before bed. Vitamin E is known for its antioxidant properties and can help improve skin texture.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(28, 'Spots', 'General', 'Good', 'Papaya Mask', 'Mash ripe papaya and apply it to your face as a mask. Leave it on for about 15-20 minutes before rinsing. Papaya contains enzymes that can help exfoliate and lighten dark spots.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(29, 'Spots', 'General', 'Moderate', 'Yogurt and Turmeric Mask', ' Mix plain yogurt with a pinch of turmeric to create a paste. Apply the mask to your face and leave it on for 15-20 minutes before rinsing. Turmeric has skin-brightening properties.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(30, 'Spots', 'General', 'Moderate', 'Potato and Lemon Juice', ' Grate a potato and mix it with a few drops of lemon juice. Apply the mixture to your face and leave it on for 15 minutes before rinsing. Potatoes contain enzymes that can help lighten dark spots.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(31, 'Spots', 'General', 'Poor', 'Vitamin C Serum', 'Mix vitamin C powder with aloe vera gel to create a serum. Apply a small amount to the affected areas in the evening. Vitamin C can help reduce the appearance of dark spots.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(32, 'Spots', 'General', 'Poor', 'Red Onion Juice', ' Extract juice from a red onion and apply it to the dark spots. Leave it on for 10-15 minutes before rinsing. Onion juice contains antioxidants and compounds that may help lighten hyperpigmentation.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(33, 'Open_Pores', 'General', 'Excellent', 'Rosewater Toner', ' Apply rosewater to your face using a cotton ball as a toner. Rosewater has astringent properties that can help maintain the appearance of tight pores.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(34, 'Open_Pores', 'General', 'Excellent', 'Cucumber and Yogurt Mask', 'Blend cucumber with plain yogurt to create a mask. Apply it to your face and leave it on for 15-20 minutes before rinsing. Cucumber can help soothe and refresh the skin.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(35, 'Open_Pores', 'General', 'Good', 'Egg White Mask', 'Beat an egg white until frothy and apply it to your face. Leave it on until it dries and tightens, then rinse with lukewarm water. Egg whites can temporarily tighten and minimize the appearance of pores.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(36, 'Open_Pores', 'General', 'Good', 'Tomato and Lemon Juice', 'Mix tomato juice with a few drops of lemon juice. Apply the mixture to your face and leave it on for 10-15 minutes before rinsing. Tomatoes contain natural astringents that can help tighten pores.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(37, 'Open_Pores', 'General', 'Moderate', 'Apple Cider Vinegar Toner', 'Mix equal parts of water and unfiltered apple cider vinegar. Apply the mixture to your face using a cotton ball as a toner. Apple cider vinegar can help balance skin pH and minimize the appearance of pores.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(38, 'Open_Pores', 'General', 'Moderate', 'Baking Soda Scrub', 'Mix a small amount of baking soda with water to create a paste. Gently massage it onto your face in circular motions, then rinse. Baking soda can act as an exfoliant and help reduce pore size.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(39, 'Open_Pores', 'General', 'Poor', 'Clay Mask', 'Mix bentonite clay with water or apple cider vinegar to create a thick paste. Apply the mask to your face and let it dry before rinsing. Clay masks can help absorb excess oil and tighten pores.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(40, 'Open_Pores', 'General', 'Poor', 'Aloe Vera and Witch Hazel Toner', 'Mix equal parts aloe vera gel and witch hazel. Apply the mixture to your face as a toner. Witch hazel has astringent properties that can help minimize the appearance of pores.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(41, 'Pigmentation', 'General', 'Excellent', 'Turmeric and Honey Mask', 'Mix turmeric powder with honey to create a paste. Apply the mask to your face and leave it on for 10-15 minutes before rinsing. Turmeric has skin-brightening properties.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(42, 'Pigmentation', 'General', 'Excellent', 'Papaya Enzyme Mask', ' Mash ripe papaya and apply it to your face as a mask. Leave it on for about 15-20 minutes before rinsing. Papaya contains enzymes that can help exfoliate and improve skin texture.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(43, 'Pigmentation', 'General', 'Good', 'Yogurt and Lemon Juice Mask', 'Mix plain yogurt with a few drops of lemon juice. Apply the mask to your face and leave it on for 15-20 minutes before rinsing. Lemon juice contains vitamin C, which can help lighten pigmentation.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(44, 'Pigmentation', 'General', 'Good', 'Green Tea Toner', 'Brew green tea, let it cool, and apply it to your face using a cotton ball as a toner. Green tea has antioxidants that can help reduce inflammation and improve skin tone.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(45, 'Pigmentation', 'General', 'Moderate', 'Potato and Honey Mask', 'Grate a potato and mix it with honey. Apply the mixture to your face and leave it on for 15 minutes before rinsing. Potatoes contain enzymes that may help lighten pigmentation.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(46, 'Pigmentation', 'General', 'Moderate', 'Vitamin E Oil Massage', ' Gently massage vitamin E oil onto the affected areas before bed. Vitamin E has antioxidant properties that can help improve skin health.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(47, 'Pigmentation', 'General', 'Poor', 'Aloe Vera and Vitamin C Serum', 'Mix fresh aloe vera gel with a few drops of vitamin C serum. Apply the mixture to your face before bed. Vitamin C can help fade pigmentation and even out skin tone.', '2023-10-23 12:17:28', '2023-10-23 12:17:28'),
(48, 'Pigmentation', 'General', 'Poor', 'Licorice Root Mask', ' Mix licorice root powder with water to create a paste. Apply the mask to your face and leave it on for 15-20 minutes before rinsing. Licorice root has skin-lightening properties.', '2023-10-23 12:17:28', '2023-10-23 12:17:28');

-- --------------------------------------------------------

--
-- Table structure for table `scorecategories`
--

CREATE TABLE `scorecategories` (
  `id` int(11) NOT NULL,
  `categoryName` varchar(255) DEFAULT 'Basic Category Name',
  `categoryColor` varchar(255) DEFAULT '#000000',
  `minScore` int(11) DEFAULT 0,
  `maxScore` int(11) DEFAULT 100,
  `isActive` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `scorecategories`
--

INSERT INTO `scorecategories` (`id`, `categoryName`, `categoryColor`, `minScore`, `maxScore`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'Excellent', '#38D800', 80, 100, 1, '2023-09-07 11:54:59', '2023-09-07 11:54:59'),
(2, 'Good', '#D8C200', 60, 80, 1, '2023-09-07 11:57:19', '2023-09-07 11:57:19'),
(3, 'Moderate', '#FF7A00', 30, 60, 1, '2023-09-07 11:58:17', '2023-09-07 11:58:17'),
(4, 'Poor', '#FF0000', 0, 30, 1, '2023-09-07 11:59:02', '2023-09-07 11:59:02');

-- --------------------------------------------------------

--
-- Table structure for table `scorehistories`
--

CREATE TABLE `scorehistories` (
  `id` int(11) NOT NULL,
  `userUuid` int(11) NOT NULL DEFAULT 0,
  `concerns` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`concerns`)),
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `scorehistories`
--

INSERT INTO `scorehistories` (`id`, `userUuid`, `concerns`, `createdAt`, `updatedAt`) VALUES
(1, 1, '{\"wrinkles\":-258,\"spots\":40,\"darkCircles\":-314,\"pigmentation\":-413,\"openPores\":74,\"acne\":-57}', '2023-10-23', '2023-10-23'),
(2, 1, '{\"wrinkles\":-341,\"spots\":83,\"darkCircles\":-176,\"pigmentation\":-579,\"openPores\":86,\"acne\":27}', '2023-10-24', '2023-10-24'),
(3, 2, '{\"acne\":30}', '2023-11-03', '2023-11-03'),
(4, 2, '{\"acne\":30}', '2023-12-06', '2023-12-06'),
(5, 2, '{\"acne\":30}', '2023-12-07', '2023-12-07');

-- --------------------------------------------------------

--
-- Table structure for table `skinissues`
--

CREATE TABLE `skinissues` (
  `id` int(11) NOT NULL,
  `issueName` varchar(255) DEFAULT 'Basic',
  `issueColor` varchar(255) DEFAULT '#000000',
  `issueDefination` varchar(255) DEFAULT 'Defination',
  `displayOrder` int(11) DEFAULT 0,
  `isActive` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `skinissues`
--

INSERT INTO `skinissues` (`id`, `issueName`, `issueColor`, `issueDefination`, `displayOrder`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'Wrinkles', '#2DE100', 'An age-related skin condition characterized by fine lines and creases on the surface, often caused by a loss of collagen and elastin in the skin.', 2, 1, '2023-09-07 12:08:28', '2023-09-07 12:08:28'),
(2, 'Spots', '#FF7A00', 'A skin condition in which patches of brown spots appear on the skin.', 6, 1, '2023-09-07 12:26:08', '2023-09-07 12:26:08'),
(3, 'Dark_Circles', '#9500D7', 'A skin condition, which is usually found under your eyes happen when the skin beneath both eyes appears darkened.', 1, 1, '2023-09-07 12:26:43', '2023-09-07 12:26:43'),
(4, 'Pigmentation', '#D8004F', 'A skin condition when certain areas of your skin are darker than the rest. It\'s a fairly common skin concern that affects people of all skin types.', 5, 1, '2023-09-07 12:27:33', '2023-09-07 12:27:33'),
(5, 'Open_Pores', '#7367FF', 'A skin condition that have openings on the surface of skin that allow light, natural oil production to moisturise skin\'s outermost layer.', 4, 1, '2023-09-07 12:28:16', '2023-09-07 12:28:16'),
(6, 'Acne', '#2A98DE', 'An age-related skin condition which has sebaceous (oil) glands that connects to the hair follicle, which contains a fine hair.', 3, 1, '2023-09-07 12:28:55', '2023-09-07 12:28:55');

-- --------------------------------------------------------

--
-- Table structure for table `tipsinfos`
--

CREATE TABLE `tipsinfos` (
  `id` int(11) NOT NULL,
  `skinIssue` varchar(255) DEFAULT '',
  `type` varchar(255) DEFAULT '',
  `category` varchar(255) DEFAULT '',
  `description` varchar(255) DEFAULT '',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tipsinfos`
--

INSERT INTO `tipsinfos` (`id`, `skinIssue`, `type`, `category`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Wrinkles', 'General', 'Excellent', 'Avoid the sun as much as you can.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(2, 'Wrinkles', 'General', 'Excellent', 'Apply broad-spectrum sunscreen (SPF 30 or higher) daily to protect your skin from UV rays.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(3, 'Wrinkles', 'General', 'Excellent', 'Avoid Smoking as it can accelerate the aging process and lead to premature wrinkles.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(4, 'Wrinkles', 'General', 'Excellent', 'Eat a balanced diet rich in antioxidants, vitamins, and minerals to promote skin health.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(5, 'Wrinkles', 'General', 'Excellent', 'Establish a Basic Skincare Routine by cleaning, moisturizing, and using products with gentle ingredients suitable for your skin type.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(6, 'Wrinkles', 'General', 'Excellent', 'Limit Alcohol Intake as excessive alcohol consumption can dehydrate the skin and contribute to aging.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(7, 'Wrinkles', 'General', 'Excellent', 'Don\'t Skip Sunscreen as even if you don\'t have wrinkles yet, sunscreen is essential to prevent future damage.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(8, 'Wrinkles', 'General', 'Good', 'Incorporate retinol or prescription retinoids into your skincare routine to promote collagen production and reduce fine lines.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(9, 'Wrinkles', 'General', 'Good', 'Continue to keep your skin hydrated with moisturizers containing hyaluronic acid.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(10, 'Wrinkles', 'General', 'Good', 'Start using a hydrating eye cream to target crow\'s feet and under-eye wrinkles.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(11, 'Wrinkles', 'General', 'Good', 'Use gentle cleansers to avoid over-drying your skin and worsening wrinkles.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(12, 'Wrinkles', 'General', 'Good', 'Excessive exfoliation can lead to irritation and worsen wrinkles.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(13, 'Wrinkles', 'General', 'Good', 'Be gentle when applying skincare products to prevent unnecessary tugging on the skin.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(14, 'Wrinkles', 'General', 'Moderate', 'Use rich moisturizers and serums intensively that are designed to deeply hydrate and plump the skin.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(15, 'Wrinkles', 'General', 'Moderate', 'Look for skincare products with peptides, which may help stimulate collagen production.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(16, 'Wrinkles', 'General', 'Moderate', 'Consult a dermatologist for treatments like chemical peels, microdermabrasion, or laser therapy.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(17, 'Wrinkles', 'General', 'Moderate', 'Steer clear of harsh physical exfoliants that can irritate your skin further.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(18, 'Wrinkles', 'General', 'Moderate', ' Seek guidance from a dermatologist before trying advanced treatments to ensure they\'re appropriate for your skin type and condition.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(19, 'Wrinkles', 'General', 'Moderate', 'While it\'s important to use effective products, using too many products at once can overwhelm your skin.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(20, 'Wrinkles', 'General', 'Poor', 'Seek the advice of a dermatologist for more aggressive treatments like dermal fillers, Botox, or other injectables.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(21, 'Wrinkles', 'General', 'Poor', 'Consider non-invasive procedure options like ultrasound therapy or radiofrequency treatments for skin tightening.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(22, 'Wrinkles', 'General', 'Poor', 'Prioritize skin health by focusing on overall skin health with a balanced diet, hydration, and a consistent skincare routine.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(23, 'Wrinkles', 'General', 'Poor', ' Severe wrinkles often require professional intervention, so avoid attempting aggressive treatments on your own.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(24, 'Wrinkles', 'General', 'Poor', ' Continue to protect your skin from UV rays, as sun damage can exacerbate severe wrinkles.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(25, 'Wrinkles', 'General', 'Poor', 'Be cautious about using strong ingredients that can further irritate sensitive skin.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(26, 'Dark_Circles', 'General', 'Excellent', 'Get enough sleep, stay hydrated, and maintain a balanced diet rich in vitamins and minerals.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(27, 'Dark_Circles', 'General', 'Excellent', 'Protect your under-eye area from UV rays with sunscreen or sunglasses.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(28, 'Dark_Circles', 'General', 'Excellent', 'Use a mild, hydrating eye cream to maintain skin health.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(29, 'Dark_Circles', 'General', 'Excellent', 'Be gentle when applying or removing skincare products to prevent unnecessary friction.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(30, 'Dark_Circles', 'General', 'Excellent', 'You may not need intensive treatments if you don\'t have dark circles.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(31, 'Dark_Circles', 'General', 'Good', ' Aim for 7-9 hours of quality sleep each night to reduce puffiness and darkness.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(32, 'Dark_Circles', 'General', 'Good', 'Stay well-hydrated to maintain skin elasticity and prevent exacerbation of dark circles.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(33, 'Dark_Circles', 'General', 'Good', 'Use a brightening eye cream with ingredients like vitamin C, hyaluronic acid, and peptides to target discoloration.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(34, 'Dark_Circles', 'General', 'Good', 'Avoid excessive salt as high sodium intake can contribute to fluid retention and exacerbate puffiness.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(35, 'Dark_Circles', 'General', 'Good', ' Sun damage can worsen dark circles, so continue protecting your skin.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(36, 'Dark_Circles', 'General', 'Moderate', ' Consider using eye creams with ingredients like retinol, vitamin K, and licorice extract to address dark circles.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(37, 'Dark_Circles', 'General', 'Moderate', 'Apply a cold compress to the under-eye area to reduce puffiness and improve circulation.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(38, 'Dark_Circles', 'General', 'Moderate', 'Use a color-correcting concealer followed by a regular concealer to camouflage dark circles.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(39, 'Dark_Circles', 'General', 'Moderate', 'Avoid intoxication as intoxication may result in dark circles due to lack of sleep.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(40, 'Dark_Circles', 'General', 'Moderate', 'Allergic reactions can cause dark circles, so try to identify and avoid potential allergens.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(41, 'Dark_Circles', 'General', 'Moderate', 'While caffeine can temporarily constrict blood vessels, excessive consumption can lead to dehydration.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(42, 'Dark_Circles', 'General', 'Poor', 'Seek professional guidance to determine the underlying causes and appropriate treatments.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(43, 'Dark_Circles', 'General', 'Poor', 'Consider options like chemical peels, laser therapy, or fillers under the guidance of a dermatologist.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(44, 'Dark_Circles', 'General', 'Poor', ' Follow any prescribed skincare routines or treatments consistently.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(45, 'Dark_Circles', 'General', 'Poor', ' Be extremely gentle with the delicate under-eye area to prevent further irritation.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(46, 'Dark_Circles', 'General', 'Poor', 'Severe dark circles may require more advanced treatments rather than only relying on home remedies.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(47, 'Acne', 'General', 'Excellent', 'Maintain a cleansing routine by cleansing your face daily with a gentle cleanser to remove dirt and prevent clogged pores.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(48, 'Acne', 'General', 'Excellent', 'Choose skincare and makeup products labeled as non-comedogenic to reduce the risk of clogged pores.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(49, 'Acne', 'General', 'Excellent', 'Drink enough water and keep your skin hydrated with a suitable moisturizer.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(50, 'Acne', 'General', 'Excellent', 'Apply sunscreen daily to prevent sun damage that could contribute to future breakouts.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(51, 'Acne', 'General', 'Excellent', 'Excessive cleansing can strip the skin of natural oils and disrupt its balance.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(52, 'Acne', 'General', 'Excellent', 'Refrain from picking, squeezing, or popping any blemishes to prevent scarring and infection.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(53, 'Acne', 'General', 'Good', ' Use a mild exfoliant a few times a week to help unclog pores and remove dead skin cells.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(54, 'Acne', 'General', 'Good', 'Apply benzoyl peroxide or salicylic acid spot treatments to individual breakouts.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(55, 'Acne', 'General', 'Good', 'Continue with a balanced cleansing and moisturizing routine.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(56, 'Acne', 'General', 'Good', 'Refrain from using abrasive scrubs, as they can irritate and worsen acne.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(57, 'Acne', 'General', 'Good', 'If you wear makeup, choose non-comedogenic products and remove makeup thoroughly each night.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(58, 'Acne', 'General', 'Moderate', 'Seek professional advice for a personalized treatment plan, which may include prescription medications or topical treatments.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(59, 'Acne', 'General', 'Moderate', 'Follow your dermatologist\'s recommendations consistently.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(60, 'Acne', 'General', 'Moderate', 'Focus on a balanced diet with whole foods and limit foods high in sugars and dairy.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(61, 'Acne', 'General', 'Moderate', ' Refrain from picking or popping acne, as it can lead to scarring and infection.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(62, 'Acne', 'General', 'Moderate', ' While it\'s important to treat acne, excessive use of products can irritate the skin further.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(63, 'Acne', 'General', 'Poor', ' Work closely with your dermatologist and follow their prescribed treatments and medications.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(64, 'Acne', 'General', 'Poor', 'In severe cases, your dermatologist may recommend treatments like chemical peels, laser therapy, or oral medications.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(65, 'Acne', 'General', 'Poor', 'Severe acne often requires professional intervention, so avoid attempting aggressive treatments on your own.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(66, 'Acne', 'General', 'Poor', ' It\'s important to take any prescribed medications as directed by your dermatologist.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(67, 'Spots', 'General', 'Excellent', 'Apply broad-spectrum sunscreen (SPF 30 or higher) daily to prevent future dark spot formation.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(68, 'Spots', 'General', 'Excellent', 'Eat a balanced diet rich in antioxidants to support skin health.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(69, 'Spots', 'General', 'Excellent', 'Cleanse your face regularly with a mild cleanser to keep your skin healthy.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(70, 'Spots', 'General', 'Excellent', 'Protect your skin from excessive sun exposure and tanning beds to prevent dark spots.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(71, 'Spots', 'General', 'Excellent', 'Even without existing dark spots, sunscreen is essential for prevention.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(72, 'Spots', 'General', 'Good', 'onsider using products with ingredients like vitamin C, niacinamide, and alpha hydroxy acids (AHAs) to help fade dark spots.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(73, 'Spots', 'General', 'Good', 'Continue using sunscreen to prevent further darkening of existing spots.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(74, 'Spots', 'General', 'Good', 'Use gentle exfoliation (such as AHAs or BHAs) to help improve skin texture and promote spot fading.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(75, 'Spots', 'General', 'Good', 'Harsh physical exfoliants can irritate the skin and worsen dark spots.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(76, 'Spots', 'General', 'Good', 'Refrain from picking at dark spots, as this can lead to scarring and prolong healing.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(77, 'Spots', 'General', 'Moderate', 'Seek professional advice for targeted treatments such as prescription-strength topical creams or chemical peels.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(78, 'Spots', 'General', 'Moderate', ' Use products containing hydroquinone or kojic acid under the guidance of a dermatologist.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(79, 'Spots', 'General', 'Moderate', 'For heavy spots, it\'s best to avoid attempting aggressive treatments at home without professional guidance.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(80, 'Spots', 'General', 'Moderate', 'Adhere to the treatment plan prescribed by your dermatologist.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(81, 'Spots', 'General', 'Poor', 'Consult a dermatologist for advanced treatments like laser therapy, intense pulsed light (IPL), or microdermabrasion.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(82, 'Spots', 'General', 'Poor', 'Continue using sunscreen diligently to prevent further darkening and protect treated skin.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(83, 'Spots', 'General', 'Poor', 'While exfoliation can help, excessive use can damage the skin barrier and worsen dark spots.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(84, 'Spots', 'General', 'Poor', 'Be patient and consistent with treatments, as it may take time to see significant improvements.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(85, 'Open_Pores', 'General', 'Excellent', 'Cleanse your face daily to prevent dirt and oil buildup that can eventually lead to enlarged pores.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(86, 'Open_Pores', 'General', 'Excellent', 'Gently exfoliate a couple of times a week to remove dead skin cells and keep pores clear.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(87, 'Open_Pores', 'General', 'Excellent', 'Use sunscreen daily to protect your skin from sun damage that can affect pore health.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(88, 'Open_Pores', 'General', 'Excellent', 'Excessive cleansing can strip your skin of natural oils and potentially lead to issues.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(89, 'Open_Pores', 'General', 'Excellent', 'Rough exfoliation can irritate the skin and worsen the appearance of pores.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(90, 'Open_Pores', 'General', 'Good', 'Use products containing salicylic acid to help unclog pores and control oil production.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(91, 'Open_Pores', 'General', 'Good', 'Consider incorporating retinol or prescription retinoids into your routine to promote cell turnover and improve pore appearance.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(92, 'Open_Pores', 'General', 'Good', 'Use oil-free or mattifying products to control excess oil.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(93, 'Open_Pores', 'General', 'Good', 'Heavy makeup can clog pores, so opt for non-comedogenic and lightweight products.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(94, 'Open_Pores', 'General', 'Good', 'Avoid touching your face with dirty hands, as it can transfer bacteria and contribute to pore issues.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(95, 'Open_Pores', 'General', 'Moderate', 'Seek professional advice for targeted treatments like chemical peels, microdermabrasion, or laser therapy.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(96, 'Open_Pores', 'General', 'Moderate', 'Clay masks can help absorb excess oil and temporarily minimize the appearance of pores.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(97, 'Open_Pores', 'General', 'Moderate', ' Refrain from using harsh scrubs or aggressive treatments that could further irritate your skin.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(98, 'Open_Pores', 'General', 'Moderate', 'Using too many products can overwhelm your skin and exacerbate issues.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(99, 'Open_Pores', 'General', 'Poor', 'Consider more advanced options like fractional laser treatments or microneedling, under the guidance of a dermatologist.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(100, 'Open_Pores', 'General', 'Poor', 'Look into procedures that can improve overall skin texture and tighten pores.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(101, 'Open_Pores', 'General', 'Poor', 'Picking at your skin can worsen pore appearance and potentially lead to scarring.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(102, 'Open_Pores', 'General', 'Poor', 'Be patient with professional treatments, as significant improvements may take time.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(103, 'Pigmentation', 'General', 'Excellent', ' Apply broad-spectrum sunscreen (SPF 30 or higher) daily to prevent future pigmentation issues.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(104, 'Pigmentation', 'General', 'Excellent', 'Eat a balanced diet rich in antioxidants to support overall skin health.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(105, 'Pigmentation', 'General', 'Excellent', 'Protect your skin from excessive sun exposure and tanning beds to prevent pigmentation.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(106, 'Pigmentation', 'General', 'Excellent', 'Even without pigmentation, sunscreen is crucial for prevention.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(107, 'Pigmentation', 'General', 'Good', 'Consider using products with ingredients like vitamin C, niacinamide, kojic acid, or glycolic acid to help fade pigmentation.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(108, 'Pigmentation', 'General', 'Good', 'Continue using sunscreen to prevent further darkening of existing pigmentation.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(109, 'Pigmentation', 'General', 'Good', 'Gently exfoliate a couple of times a week to promote skin cell turnover.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(110, 'Pigmentation', 'General', 'Good', 'Harsh physical exfoliants can irritate the skin and worsen pigmentation.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(111, 'Pigmentation', 'General', 'Good', 'Refrain from picking at pigmented areas, as this can lead to scarring and prolong healing.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(112, 'Pigmentation', 'General', 'Moderate', 'Seek professional advice for targeted treatments like chemical peels, prescription creams, or laser therapy.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(113, 'Pigmentation', 'General', 'Moderate', 'Under the guidance of a dermatologist, consider using hydroquinone, a skin-lightening agent.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(114, 'Pigmentation', 'General', 'Moderate', 'For heavy pigmentation, it\'s best to avoid attempting aggressive treatments at home without professional guidance.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(115, 'Pigmentation', 'General', 'Moderate', 'Adhere to the treatment plan prescribed by your dermatologist.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(116, 'Pigmentation', 'General', 'Poor', 'Consult a dermatologist for advanced treatments like laser therapy, intense pulsed light (IPL), or chemical peels.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(117, 'Pigmentation', 'General', 'Poor', 'Follow professional recommendations consistently for best results.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(118, 'Pigmentation', 'General', 'Poor', ' Excessive exfoliation can damage the skin barrier and worsen pigmentation issues.', '2023-10-23 12:17:14', '2023-10-23 12:17:14'),
(119, 'Pigmentation', 'General', 'Poor', 'Be patient and realistic, as significant improvements may take time.', '2023-10-23 12:17:14', '2023-10-23 12:17:14');

-- --------------------------------------------------------

--
-- Table structure for table `userinfos`
--

CREATE TABLE `userinfos` (
  `id` int(11) NOT NULL,
  `userUuid` varchar(255) NOT NULL DEFAULT '',
  `source` varchar(255) NOT NULL DEFAULT 'WEB',
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userinfos`
--

INSERT INTO `userinfos` (`id`, `userUuid`, `source`, `createdAt`, `updatedAt`) VALUES
(1, '9ff2004d-544c-46e5-8032-2c9290b7012c', 'WEB', '2023-10-23', '2023-10-23'),
(2, '9ff2004d-544c-46e5-8032-2c9290b7012b', 'WEB', '2023-11-03', '2023-11-03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `remediesinfos`
--
ALTER TABLE `remediesinfos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scorecategories`
--
ALTER TABLE `scorecategories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scorehistories`
--
ALTER TABLE `scorehistories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skinissues`
--
ALTER TABLE `skinissues`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tipsinfos`
--
ALTER TABLE `tipsinfos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userinfos`
--
ALTER TABLE `userinfos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `userUuid` (`userUuid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `remediesinfos`
--
ALTER TABLE `remediesinfos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `scorecategories`
--
ALTER TABLE `scorecategories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `scorehistories`
--
ALTER TABLE `scorehistories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `skinissues`
--
ALTER TABLE `skinissues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tipsinfos`
--
ALTER TABLE `tipsinfos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT for table `userinfos`
--
ALTER TABLE `userinfos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
