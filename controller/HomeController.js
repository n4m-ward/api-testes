class HomeController{
    async index(req,res){
        res.send("api funcionando")
    }
}

module.exports = new HomeController();