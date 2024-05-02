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
            validate :  {
                validator : function(value){
                    const selectedDate = new Date(value);
                    const currentDate = new Date();

                    return selectedDate <= currentDate;
                },
                message : props => `${props.value} cannot be a future date!`,
            },
        },
        min_price : {
            type : Number,
            required : true,
            validate: {
                validator: function(value) {
                    // Ensure that min_price is less than or equal to max_price
                    return value <= this.max_price;
                },
                message: 'Minimum price cant be greater than maximum price',
            }
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