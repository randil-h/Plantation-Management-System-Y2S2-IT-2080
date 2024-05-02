import mongoose from "mongoose";

const DiseaseSchema = mongoose.Schema(
    {
        disease_name: {
            type: String,
            required: true,
        },
        plant_id: {
            type: String,
            required: true,
            validate: {
                validator: function(value) {
                    return /^D\d{3}$/.test(value); // Regex to match 'D' followed by 3 digits
                },
                message: props => `${props.value} is not a valid plant ID. Plant ID should start with 'D' followed by 3 digits.`
            }
        },
        crop: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
            validate: {
                validator : function (value) {
                    const selectedDate = new Date(value);
                    const currentDate = new Date();

                    return selectedDate <= currentDate;
                },
                message: props => `${props.value} cannot be a future date!`,
            },
        },
        location: {
            type: String,
            required: true,
        },
        plant_count: {
            type: Number,
            required: true,
            validate: {
                validator: Number.isInteger,
                message: '{VALUE} is not an integer value'
            },
            min: 1,
        },
        treatment: {
            type: String,
            required: true,
        },
        severity: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const DiseasesRecord = mongoose.model('DiseasesRecord', DiseaseSchema);