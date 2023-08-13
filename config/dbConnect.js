import mongoose from 'mongoose'

export const connectDB = (url, port) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log(`connected to the database now .... on ${port}`)
    })
    .catch((err) => {
      console.log(`${err} did not connect to the database`)
    })
}

//module.exports = {connectDB}