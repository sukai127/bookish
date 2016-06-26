var mysql = require('mysql');
var fs = require('fs');
var _ = require('lodash');

var books = JSON.parse(fs.readFileSync("./books.json"));

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'bookish-admin',
    password : 'password',
    database : 'bookish'
});

_.forEach(books, function (book) {
    var post = {
        'title': book.title,
        'author': book.author.join(','),
        'isbn': book.isbn[0],
        'asin': book.asin,
        'description': "讲述在预算和实践要求下，软件开发人员和项目经理如何使用敏捷开发完成项目使用真实案例讲解如何用极限编程来设计、测试、重构和绝对程包含了极具价值的可多次使用的C++和JAVA源代码重点讲述了如何使用UML和设计模式解决面向客户系统的问题"
    };

    connection.query("insert into book set ?", post, function (err) {
        if (err) {
            throw  err;
        }
    });
});

connection.end();

console.log('db migrate successful.');

