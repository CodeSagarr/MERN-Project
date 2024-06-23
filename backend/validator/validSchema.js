const zod = require('zod');

const newSchema = zod.object({
    username:zod.string({required_error:'username are required'})
    .trim()
    .min(3,{message:'3 character are used be required'})
    .max(244,{message:'long username are not required'}),

    email:zod.string({required_error:'email are required'})
    .trim()
    .email({message:'invalid email'})
    .min(3,{message:'3 character are used be required'})
    .max(244,{message:'long email are not required'}),

    password:zod.string({required_error:'password are required'})
    .trim()
    .min(3,{message:'3 character are used be required'})
    .max(244,{message:'long password are not required'}),
})

const signSchema = zod.object({
    email:zod.string({required_error:'email are required'})
    .trim()
    .email({message:'invalid email'})
    .min(1,{message:'1 character are must be required'})
    .max(244,{message:'long email are not valid'}),

    password:zod.string({required_error:'password are required'})
    .trim()
    .min(2,{message:'3 character are must be required'})
    .max(244,{message:'long password are not valid'}),

})

module.exports ={newSchema,signSchema} ;