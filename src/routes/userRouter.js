// Importa o módulo Router do Express para criar um roteador
const { Router } = require('express');

// Cria um novo roteador Express
const router = Router();

// Importa a função 'storeUser' do módulo 'usersController'
const { storeUser } = require('../controller/usersController');

// Define uma rota POST para o endpoint '/user/create'
// Quando uma requisição POST for feita para '/user/create', a função 'storeUser' será chamada
router.post('/user/create', storeUser);

// Exporta o roteador para que possa ser utilizado em outros módulos
module.exports = router;