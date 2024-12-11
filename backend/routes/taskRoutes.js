const express=require("express")
const{createBook,getAllBooks,updateBooks,deleteBook} =require("../controllers/taskControllers")
const router=express.Router();

router.post('/createBook',auth,createBook)
router.get('/getAllBooks',getAllBooks)
router.put('/updateBook',updateBook)
router.delete('/deleteBook',deleteBook)