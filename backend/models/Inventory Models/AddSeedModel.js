import mongoose from 'mongoose';
const AddSeedSchema = mongoose.Schema(
    {
        add_seed: {
            type: String,
            required: true,
        },
        seedadd_no: {
            type: String,
            required: true,
        },
        seed_store: {
            type: String,
            required: true,
        },
        seed_stock: {
            type: String,
            required: true,
        },
        seed_expire: {
            type: Date,
            required: true,
        },

    },
    {
        timestamps:true,
    }
);

export const AddSeedRecord = mongoose.model('AddSeedRecord', AddSeedSchema);















