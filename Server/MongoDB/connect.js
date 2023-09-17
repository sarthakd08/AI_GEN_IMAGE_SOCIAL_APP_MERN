

import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
        .then(() => console.log('MongoDB Connected'))
        .catch(() => console.log('Error Connection to DB'))
}

export default connectDB