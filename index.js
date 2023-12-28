import express from 'express'

const app = express()
const port = 3000

//following are used to get the body from request
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//params
app.get('/student/:id', (req, res)=> {
    console.log(req.params)
    res.send(`StudentID ${req.params.id}`)
}) 

app.get('/student/:name/:id', (req, res)=> {
    console.log(req.params)
    res.send(`StudentID ${req.params.id}, Name ${req.params.name}`)
}) 

app.get('/train/:from-:to', (req, res)=> {
    console.log(req.params)
    res.send(`From ${req.params.from}, To ${req.params.to}`)
})

app.get('/bus/:from.:to', (req, res)=> {
    console.log(req.params)
    res.send(`From ${req.params.from}, To ${req.params.to}`)
})

//params with regexp
app.get('/employee/:id([0-9]{2})',  (req, res)=> {
    console.log(req.params)
    res.send(`EmployeeID: ${req.params.id}`)
}) //exp written inside () after id is regexp [0-9]{2} (0 to 9 having 2 digits)

app.get('/:id(post|3)', (req, res)=> {
    console.log(req.params)
    res.send(`EmployeeID: ${req.params.id}`)
}) //not case sensitive

//Query string or query parameters
app.get('/users', (req, res)=> {
    console.log(req.query)
    res.send('Success')
}) //the endpoint will be "/users?id=18" (the symbol "?" & "=" is used) 

//body 
app.post('/getBody', (req, res) => {
    console.log(req.body)
    res.send('success')
})

//redirect to other methods
app.get('/redirect', (req, res) => {
    console.log(req.body)
    res.redirect('/redirected')
})
app.get('/redirected', (req, res) => {
    console.log(req.body)
    res.send('Success')
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})

