const express = require('express');
const app = express();

const router = express.Router();
const port = 4999;

const userController = require('./controllers/userController.js')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get('/regform', userController.addUserFromForm);
router.post('/addNewUser', userController.addNewUser); 

app.get('/users', userController.getUsers);

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
