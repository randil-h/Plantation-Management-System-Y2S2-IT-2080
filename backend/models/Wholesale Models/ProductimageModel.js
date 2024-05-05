import mongoose from "mongoose"

const ProductImageSchema = mongoose.Schema(
    {
        imageName: {
            type: String,
            required: true,
        },
        image:
        {
            data: Buffer,
            contentType: String
        }
    }
);

export const ProductImage = mongoose.model('ProductImages', ProductImageSchema);