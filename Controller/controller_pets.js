import connect from "../Config/connection.js"

// nome tabela - pets   
let pet = {}
const con = await connect

pet.all = async function(req, res){
    try {
        let pet = await con.query("SELECT * FROM pets;")
        res.send(pet[0])
    } catch (e) {
        console.log("Erro...", e)        
    }
}

pet.create = async function(req, res){
    try {
        let pet = req.body
        let sql = "INSERT INTO pets (codigo_pet, nome_pet, genero_pet) VALUES (?, ?, ?);"
        let values = [pet.codigo_pet, pet.nome_pet, pet.genero_pet]
        let result = await con.query(sql, values)
        res.send({
            status: "Inserção realizada com sucesso",
            result: result
        })
    } catch (e) {
        console.log("Erro ao inserir dado", e)
    }
}

pet.update = async function(req, res) {
    try {
        let cod = req.params.codigo_pet
        let info = req.body
        let sql = "UPDATE pets SET nome_pet = ?, genero_pet = ? WHERE codigo_pet = ?;"
        let values = [info.nome_pet, info.genero_pet, cod];
        let result = await con.query(sql, values)
        res.send({
            status: "Atualização feita com sucesso ...",
            result: result
        })
    } catch (error) {
        console.log("Erro encontrado ao tentar efetuar a atualização ... ", error);
    }
}

pet.delete = async function(req, res){
    try {
        let cod = req.params.codigo_pet
        let sql = "DELETE FROM pets WHERE codigo_pet = ?"
        let result = await con.query(sql, [cod])

        res.send({
            status: "Exclusão realizada com sucesso do banco de dados ...",
            result: result
        })
    } catch (error) {
        console.log("Não foi possivel fazer a exclusão ...", error);
    }
}

pet.procurarNome = async function(req, res){
    try {
        let nomePet = req.query.nome_pet;
        if (!nomePet) {
            return res.status(400).send({ error: 'nome_pet é obrigatório' });
        }

        let sql = "SELECT * FROM pets WHERE nome_pet = ?";
        let [result] = await con.query(sql, [nomePet]);
        res.send({
            status: "Buscar por pet foi realizada com sucesso ...",
            result: result
        });
    } catch (error) {
        console.error("Não foi possível encontrar o pet ...", error);
        res.status(500).send({ error: 'Erro ao buscar pet' });
    }
}


export { pet }