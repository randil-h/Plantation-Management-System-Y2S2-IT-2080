import mongoose from "mongoose";

const MarketPriceSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
        },
        type: {
            type : String,
            required : true,
        },
        date : {
            type : String,
            required : true,
        },
        min_price : {
            type : Number,
            required : true,
        },
        max_price : {
            type : Number,
            required : true,
        },
    },
    {
        timestamps : true,
    },
);

export const MarketPriceRecord = mongoose.model('MarketPriceRecord', MarketPriceSchema);