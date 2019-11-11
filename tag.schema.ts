import * as mongoose from 'mongoose';

export interface Cat extends mongoose.Document {
    name: string;
    description: string;
    summarry: string;

    dependencies: Cat[];
}



export const TagSchema = new mongoose.Schema<Cat>();
TagSchema.add({
    name: String,
    description: String,
    summarry: String,

    dependencies: [TagSchema]
});