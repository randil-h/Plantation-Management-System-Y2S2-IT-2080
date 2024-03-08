import mongoose from 'mongoose';
const HarvestSchema = mongoose.Schema(
    {}
)




export const HarvestRecord = mongoose.model('TransactionsRecord', HarvestSchema);