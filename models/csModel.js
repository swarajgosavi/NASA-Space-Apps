import mongoose from "mongoose";

const projectSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        creator: {
            type: String,
            required: true,
        },
        Year: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Project = mongoose.model('Project', projectSchema);