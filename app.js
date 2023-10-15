/* Description: File utama untuk menjalankan aplikasi */

/* PACKAGE */
// Express
const express = require('express') // Import modul utama Express
const session = require('express-session') // Import modul untuk manajemen sesi
const layout = require('express-layout') // Import modul untuk mengatur tata letak

// Path
const path = require('path') // Import modul untuk mengatur path

// EJS
const ejs = require('ejs') // Import modul untuk mesin templat EJS

// Connect-Flash <Global Variable>
const flash = require('connect-flash') // Import modul untuk menangani pesan flash

// Express Variable
const app = express() // Membuat instance Express

/* PORT Configuration */
require('dotenv').config() // Memuat variabel lingkungan dari file .env

const port = process.env.PORT || 3000 // Menggunakan PORT dari variabel lingkungan atau default ke 3000

/* Session Configuration */
app.use(
  session({
    secret: 'thisisamazinglysecretsessionforyou', // Kunci rahasia untuk mengenkripsi data sesi
    resave: true, // Menyimpan ulang sesi bahkan jika tidak berubah selama permintaan
    saveUninitialized: true, // Menyimpan sesi bahkan jika tidak ada data yang telah ditetapkan
    name: 'bpcon.sid', // Nama cookie yang digunakan untuk menyimpan ID sesi di sisi klien
    proxy: true, // Mengatur penggunaan aplikasi di belakang proxy atau load balancer
    rolling: true, // Mengatur ID sesi agar diatur ulang setiap kali permintaan dilakukan
    unset: 'keep', // Mengatur perilaku saat menghapus properti sesi
  })
)

/* View Engine Configuration */
app.use(layout()) // Menggunakan modul layout
app.set('views', path.join(__dirname, 'Views')) // Menggunakan folder 'Views' sebagai folder views
app.set('view engine', 'ejs') // Menggunakan mesin templat EJS

/* Public Access */
app.use(express.static('public')) // Menggunakan middleware static untuk mengakses folder 'public'

/* Body Parser */
app.use(express.urlencoded({ extended: true })) // Menggunakan middleware body-parser untuk mengurai data dari form
app.use(express.json()) // Menggunakan middleware body-parser untuk mengurai data dari form

/* Routes */
app.use('/', require('./Routers/front.js')) // Menggunakan file 'front.js' sebagai rute

/* Start Server */
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
