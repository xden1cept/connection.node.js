var express = require('express');
var mysql = require('mysql');
var app = express();


var connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database: "site_db"
});

connection.connect(function (error) {
	if (!!error) {
		console.log('error');
	}else{
		console.log('connected');
	}
});
app.get('/', function(req, resp){
    //READ
	connection.query("SELECT * FROM teams_table", function(error, rows, fields){
        if(!!error){
            console.log('Error in the query');
        }else{
            console.log("succesful query");
            console.log(rows)
        }
    });
    //update
    connection.query("UPDATE `articles` SET `title` = 'modified' WHERE `id` = 17;");
    connection.query("UPDATE `articles` SET `title` = 'modified' WHERE `id` = 19;");
    connection.query("UPDATE `articles` SET `title` = 'modified' WHERE `id` = 15;");
    //CREATE
    connection.query("INSERT INTO `articles` (`id`, `title`, `text`, `cyberdiscipline_id`, `pubdate`, `views`) VALUES (NULL, 'NEW', 'lorem ipsum', '1', '2018-10-15 08:00:00', '100')");
    connection.query("INSERT INTO `articles` (`id`, `title`, `text`, `cyberdiscipline_id`, `pubdate`, `views`) VALUES (NULL, 'NEW', 'lorem ipsum', '1', '2018-10-15 08:00:00', '100')");
    connection.query("INSERT INTO `articles` (`id`, `title`, `text`, `cyberdiscipline_id`, `pubdate`, `views`) VALUES (NULL, 'NEW', 'lorem ipsum', '1', '2018-10-15 08:00:00', '100')");
    //DELETE
    connection.query("DELETE FROM `articles` WHERE `id` = 21;");
    connection.query("DELETE FROM `articles` WHERE `id` = 22;");
    connection.query("DELETE FROM `articles` WHERE `id` = 23;");
    
});
app.listen(1337);
