// Import modul Express dan membuat instance Router
const router = require('express').Router()

/* Pages Handle */
// Menghandle permintaan GET ke URL root ('/') dan merender halaman 'index.ejs'
router.get('/', (req, res) => {
    res.render('Pages/Front/index.ejs', { page: 'Front Page' })
})

/* Post Handle */
// Menghandle permintaan POST ke URL root ('/')
router.post('/', (req, res) => {

})

// Mengekspor router untuk digunakan dalam aplikasi Express utama
module.exports = router
