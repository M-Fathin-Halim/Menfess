var app1 = require('./app.js').app
var app2 = require('./admin.js').app

app2.listen(8080, (req, res) => {
	Host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
	console.log("Admin is running on port 8080")
})
app1.listen(3000, (req, res) => {
	Host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
	console.log("App is running on port 3000")
})
