import  express  from "express";
import VendedoresController from '../controllers/VendedoresController.js';

const VendedoresRoutes = express.Router();

const vendedoresController = new VendedoresController();
VendedoresRoutes.get('/vendedores', vendedoresController.findAll);
VendedoresRoutes.get('/vendedores/:id', vendedoresController.findOne);
VendedoresRoutes.post('/vendedores', vendedoresController.create);
VendedoresRoutes.put('/vendedores/:id', vendedoresController.update);
VendedoresRoutes.delete('/vendedores/:id', vendedoresController.delete);

export default VendedoresRoutes;