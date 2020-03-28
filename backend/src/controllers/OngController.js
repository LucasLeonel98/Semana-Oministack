const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
       return response.json(ongs); 
    },

    async create(request, response){
        const {name, city, whatsapp, uf, email} = request.body;

        const id = generateUniqueId();
    
        await connection('ongs').insert({
            id,
            name, 
            city, 
            whatsapp, 
            uf, 
            email
        });
    
       return response.json({id}); 
    }
};