import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({//Тут определяется структура query запросов
  name: String,
  age: Number
}, {
  collection: "auto_parts" // ВАЖНО. ИМЯ ВАШЕЙ БД. 
});
const Test = mongoose.model("Test", TestSchema);
export default Test;