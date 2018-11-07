
import mongoose from 'mongoose';

const PerfilSchema = new mongoose.Schema({
    empresa: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empresa',
        required: true
    }],
    nome: {
        type: String,
        require: true
    },
    __v: {
        type: Number,
        select : false
    },
});

export default mongoose.model('Perfil', PerfilSchema, 'Perfil');