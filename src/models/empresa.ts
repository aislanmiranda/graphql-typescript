import mongoose from 'mongoose';

const EmpresaSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    fantasia: {
        type: String,
        require: false,
        default: ''
    },
    email: {
        type: String,
        require: true
    },
    __v: {
        type: Number,
        select : false
    }
});

export default mongoose.model('Empresa', EmpresaSchema, 'Empresa');