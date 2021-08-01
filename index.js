const app = require('./app');
const port = 3000;

app.listen(port, ()=> console.log(`\nExpress now departing at port ${port}!\n`));