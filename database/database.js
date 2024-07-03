import mongoose from "mongoose";

export const database = () => {
  mongoose
    .connect("mongodb+srv://todo:todo09876@cluster0.paf7ttk.mongodb.net/", {
      dbName: "crudApi",
    })
    .then(() => console.log("Database connected"))
    .catch((e) => {
      console.log("Connection Failed");
    });
};
