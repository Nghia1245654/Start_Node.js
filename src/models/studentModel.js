import mongoose from 'mongoose';
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
        default: 18,
    },
    phone: {
        type: String,
        required: true,
        default: '0000000000',
    },
    skills
        : {
            type: [String],
            required: true,
            default: [],
        },

},
    {
        timestamps: true,
    },
);
const Student = mongoose.model('Student', studentSchema);
export default Student;
