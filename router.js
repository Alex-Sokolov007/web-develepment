import { Router } from "express";
import Test from "./models.js";
import PostController from "./models_contreoler"

const router = new Router();

router.post('/post', PostController.create)
router.get('/post', PostController.get_all)
router.get('/post/:id', PostController.get_one)
router.put('/post', PostController.apdete)
router.delete('/post/:id', PostController.delete)






























// router.post('/', async (req, res) => {//Модуль для post запросов и проверки правильности вводимых данныз
//   console.log('POST запрос к /api/');
//   console.log('Тело запроса:', req.body);
  
//   try {
//     const {name, age} = req.body;
    
//     if (!name || !age) {
//       return res.status(400).json({ 
//         error: 'Имя и возраст обязательны для заполнения' 
//       });
//     }
    
//     const post = await Test.create({name, age});
//     console.log('Созданный:', post);
//     res.status(201).json(post);
//   } catch (error) {
//     console.error('Ошибка создания:', error);
//     res.status(500).json({ error: error.message });
//   }
// });

// router.get('/', async (req, res) => {//Информация о количестве записей
//   console.log('GET запрос к /api/');
//   try {
//     const posts = await Test.find();
//     console.log(`Найдено ${posts.length} записей`);
//     res.json(posts);
//   } catch (error) {
//     console.error('Ошибка поиска:', error);
//     res.status(500).json({ error: error.message });
//   }
// });

// router.get('/:id', async (req, res) => {
//   console.log(`GET запрос к /api/${req.params.id}`);
//   try {
//     const post = await Test.findById(req.params.id);
//     if (!post) {
//       return res.status(404).json({ message: 'Post не найден' });
//     }
//     res.json(post);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.put('/:id', async (req, res) => {
//   try {
//     const {name, age} = req.body;
//     const post = await Test.findByIdAndUpdate(
//       req.params.id,
//       {name, age},
//       {new: true, runValidators: true}
//     );
//     if (!post) {
//       return res.status(404).json({ message: 'Post не найден' });
//     }
//     res.json(post);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     const post = await Test.findByIdAndDelete(req.params.id);
//     if (!post) {
//       return res.status(404).json({ message: 'Post не найден' });
//     }
//     res.json({ message: 'Post удален успешно' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// export default router;