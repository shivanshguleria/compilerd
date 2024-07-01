const { respond, respondWithException } = require('../loader').helpers
const { codeTransformer } = require('../transformers/code.transformer')
const codeService = require('../services/code.service')
const { isValidForExecute } = require('../validators/code.validator')
const ques = require('../tests/data/testJson')
const execute = async (req, res) => {
    try {
        const validatedData = await isValidForExecute(req.body)
        const responseBody = await codeService.execute(validatedData, res)
        return respond(res, responseBody.statusCode, codeTransformer.transform(responseBody))
    } catch (error) {
        respondWithException(res, error)
    }
}

const runCode = async (req, res) => {
    try {
        const id = req.body.id
        delete req.body.id
        const validatedData = await isValidForExecute(req.body)
        const responseBody = await codeService.execute(validatedData, res)
        const out = responseBody.output
        responseBody.flag = 0
        if (ques.ques[id].exp.output.desc.value === out.replace("\n","")){
            responseBody.flag = 1
            return respond(res, responseBody.statusCode, codeTransformer.transform(responseBody))
        } 
        else {
            responseBody.errorMessage = "Wrong solution"
        return respond(res, responseBody.statusCode, codeTransformer.transform(responseBody))
        }
    } catch (error) {
        respondWithException(res, error)
    }
}
module.exports = {
    execute, runCode }

