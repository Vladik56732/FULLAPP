const express = require('express')
const app = express()
// const names = ['Vitaly', 'Mihail', 'Ilia', 'Artem', 'Maksim']
// const cars = ['Lamborgini', 'Audi', 'Porshe']

// app.set('view engine', 'ejs')
// // app.use(express.static('public'))
// app.get('/', function (req, res) {
//     res.redirect('/home')
// })
// app.get('/home', function (req, res) {
//     res.render('home', { names })
// })
// app.get('/cars', function (req, res) {
//     res.render('cars', { cars })
// })
app.listen(3000, () => {
    console.log('http://localhost:3000')
})
