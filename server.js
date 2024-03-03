// MySQL + Node.js 접속 코드
var mysql = require('mysql2');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Qwer1234!',
    database: 'myboard'
});

conn.connect();

// conn.query("select * from post", function(err, rows, fields) {
//     if (err) throw err;
//     console.log(rows);
// });


const express = require('express');
const app = express();

app.listen(8080, function() {
    console.log("포트 8080으로 서버 대기중 ...")
});

app.get('/book', function(req, res) {
    res.send('도서 목록 관련 페이지입니다.');
})

// app.get('/', function(req, res) {
//     res.send(
//         '<html>\
//         <body>\
//         <h1>홈입니다.</h1>\
//         <marquee>장승훈님, 반갑습니다.</marquee>\
//         </body>\
//         </html>'
//     );
// })

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/list', function(req, res) {
    console.log('데이터베이스를 조회합니다.');
    conn.query("select * from post", function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
    });
});