import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import Test from "./models.js";


const PORT = 5000;
const app = express();
                                             //auto_parts тут было rmp
const uri = `mongodb://admin:mongo721887@192.168.0.62/auto_parts?authSource=admin`;//F Никита врет

app.use(express.json());
app.use('/api', router);

// try{
//   app.post('/', async (req, res) => {
//     res.status(200).json('УРЯЯЯЯ сервер работает')
//     const {name, age} = req.body
//     const Test = Test.create(name, age)
//     console.log(req.query)//Вывод на экран сообщений /?name=...&surename=...
//     console.log(req.body)//Вывод для postman
//     })
//   }
//   catch(e){
//     res.status(500).json(e)
//   }

async function run(){
  try{
      await mongoose.connect(uri ,{
      authSource: 'admin',
      serverSelectionTimeoutMS: 5000
      })

      const count = await Test.countDocuments();
      if (count === 0) {
        console.log("НИЧЕГО нет в вашей коллекции")
      } else {
        console.log(`Ваша коллекция уже существует, записей: ${count}`);
      }

      // app.post('/', async (req, res) => {
      //   res.status(200).json('УРЯЯЯЯ сервер работает')
      //   const {name, age} = req.body
      //   const Test = Test.create(name, age)
      //   console.log(req.query)//Вывод на экран сообщений /?name=...&surename=...
      //   console.log(req.body)//Вывод для постмена
      // })

      app.listen(PORT, () =>{ 
      console.log(`Сервер начал работать на порту - ${PORT}`)
      });
  } catch(e){
      console.log(e)
      process.exit(1);
  }
}

run()