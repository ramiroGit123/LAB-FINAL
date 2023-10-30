function index(req, res) {
    res.send("Index");
}

function holaMundo(req, res) {
    res.send("Hola Mundo!");
}

function holaNombre(req, res) {
    let name = req.params.name ?? "amigo";
    res.send(`Hola ${name}`);
}

export {index, holaMundo, holaNombre};