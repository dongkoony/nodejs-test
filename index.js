const express = require("express") // express import
const mongoose = require('mongoose');
//변수 지정
const { 
    MONGO_USER, 
    MONGO_PASSWORD, 
    MONGO_IP, 
    MONGO_PORT 
} = require("./config/config");

const postRouter = require("./routes/postRoutes")

const app = express(); // express app 생성

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?
authSource=admin`;

const connectWithRetry = () => {
    mongoose
        .connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })
        .then(() => console.log("succesfilly connected to DB"))
        .catch((e) => {
            console.log(e);
            setTimeout(connectWithRetry, 5000); // 로그인 시도 후 5초 딜레이
        });
};

connectWithRetry();

app.get("/", (req, res) => {    // Arrow Function 가독성
    res.send("<h2> Hi My name is Donghyeon Shin</h2>"); // index.js > 출력 할 텍스트 내용 기입
});

// localhost:8000/api/v1/post //
app.use("/api/v1/posts", postRouter)
const port = process.env.PORT || 8000; // Localhost 8000 포트 사용

app.listen(port, () => console.log(`listening on port ${port}`)); //env 포트 환경 변수