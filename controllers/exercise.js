const exerciseSchema = require('../models/exercise')

const solveProblems = async (req, res) => {
    // const Operations = {
    //     "addition": "+",
    //     "subtraction": "-",
    //     "multiplication": "*"
    // };
    // 
    const { operation_type, x, y } = req.body
   // my own idea
   const Operations = {
    addition : "addition",
    subtraction : "subtraction",
    multiplication : "multiplication"
   }
    
    // const result = operation_type === Operations.addition ? x + y : operation_type === Operations.multiplication ? x * y : x - y;
    const solution = (x, y) => {
        if (operation_type === Operations.addition){
            return x + y
        }
    
        if (operation_type === Operations.subtraction){
            return x - y
        }
    
        if (operation_type === Operations.multiplication){
            return x * y
        }
    
    }
    let result = solution(x,y)

    const answer = await exerciseSchema.create(req.body)
    res.status(200).json({"slackUsername": "Ogonnayacn", "operation_type": operation_type, "result": result})
    console.log(Error)
    // const answer =  exerciseSchema({
    //     x: x,
    //     y: y,
    //     operation_type: operation_type
    // })

    // answer.save().then(() => {
    //     return res.json({"slackname": "Ogonnayacn", operation_type: operation_type, result: result})
    // }).catch((err) => {
    //     console.log(err)
    //     res.status(500).json({message: "something went wrong, check your code"})
    // })
}

module.exports = {solveProblems};