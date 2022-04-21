const express = require("express")
const app = express()
const https = require('https')

app.get("/", function(req, res){
  res.sendFile(__dirname +"/index.html")
})

app.get('/news.html',((req, res) => {
  res.sendFile(__dirname + '/news.html')
}))

app.get('/currency.html',((req, res) => {
  res.sendFile(__dirname + '/currency.html')
}))

app.use(express.static("public"));

https.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=09271bd94e8d4368912f068e16a90f4c', (resp) => {
})

https.get(' https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=09271bd94e8d4368912f068e16a90f4c', (resp) => {
})

https.get('https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=09271bd94e8d4368912f068e16a90f4c', (resp) => {
})

https.get('https://newsapi.org/v2/top-headlines?q=trump&apiKey=09271bd94e8d4368912f068e16a90f4c', (resp) => {
})


app.listen(3030, function(){
  console.log("assignment at 3030 port")
})
