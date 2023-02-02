function textProcessor(input, tokens){
    if(typeof input=='string'){
        if(input.length>=6){
            if (tokens.some(elem=>typeof elem.tokenName !=="string" || typeof elem.tokenValue!=="string" )==false){
                for (let i = 0; i<tokens.length; i++){
                    input = input.replace("${"+`${tokens[i].tokenName}}`, tokens[i].tokenValue)
                }
                return input
            
            } else throw new Error("Invalid array format")
        } else throw new Error("Input should have at least 6 characters")
    } else throw new Error("Input should be a string")
}

const app = {
    textProcessor: textProcessor
};

module.exports = app;