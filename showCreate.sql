CREATE TABLE `users` (
 `ID` int(11) NOT NULL AUTO_INCREMENT,
 `userName` varchar(255) DEFAULT NULL,
 `age` tinyint(4) DEFAULT NULL,
 PRIMARY KEY (`ID`)
);

CREATE TABLE `score` (
 `uID` int(11) NOT NULL,
 `type` enum('soccer','handball','basketball') NOT NULL DEFAULT 'soccer',
 `point` smallint(6) DEFAULT NULL,
 PRIMARY KEY (`type`,`uID`),
 KEY `score_ibfk_1` (`uID`),
 CONSTRAINT `score_ibfk_1` FOREIGN KEY (`uID`) REFERENCES `users` (`ID`) ON DELETE CASCADE
)




