

function pingController(req, res)
{
    return res.json({
        message : "PONG"
    })

}

module.exports ={
    pingController
}