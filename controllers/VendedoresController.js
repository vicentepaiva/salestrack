let vendedores = [];

function findAll() {
    return vendedores;
}

function findOne(id) {
    return vendedores.find(v => v.id === parseInt(id));
}

function create(vendedor) {
    vendedor.id = vendedores.length + 1;
    vendedores.push(vendedor);
    return vendedor;
}

function update(vendedor, id) {
    const index = vendedores.findIndex(v => v.id === parseInt(id));
    if (index !== -1) {
        vendedores[index] = { ...vendedores[index], ...vendedor };
        return vendedores[index];
    }
    return null;
}

function deleteById(id) {
    const index = vendedores.findIndex(v => v.id === parseInt(id));
    if (index !== -1) {
        const vendedor = vendedores.splice(index, 1);
        return vendedor[0];
    }
    return null;
}

class VendedoresController {

    findAll(req, res) {
        const data = findAll();
        return res.json(data);
    }

    findOne(req, res) {
        const id = req.params.id;
        const data = findOne(id);
        return res.json(data);
    }

    create(req, res) {
        const body = req.body;
        const data = create(body);
        return res.json(data);
    }

    update(req, res) {
        const body = req.body;
        const id = req.params.id;
        const data = update(body, id);
        return res.json(data);
    }

    delete(req, res) {
        const id = req.params.id;
        const data = deleteById(id);
        return res.json(data);
    }
}

export default VendedoresController;
