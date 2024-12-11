const book=require("../userModels/.js")

//create
export const createBook=async(req,res)=>{
    try{
    const book=req.body()
    const savedBook=await new book.save();
    res.status(200).json(savedBook)
    }
    catch(err){
        res.status(500).json(err.message)
    }
}

export const getAllBookd=async(req,res)=>{
    try{
    const books=await book.getAll();
    res.status(200).json(books)
    }
    catch(err){
        res.status(500).json(err.message)
    }
}


export const updateBook=async(req,res)=>{
    try{
    const id=req.params.id
    const respectivebook=await findById(id)
    res.status(200).json(respectivebook)
    }
    catch(err){
        res.status(500).json(err.message)
    }
}
export const deleteBook=async(req,res)=>{
    try{
    const id=req.params.id;
    const deletebook=await findByidAndDelete(id)
    res.status(200).json(deletebook)
    }
    catch(error){
        res.status(500).json(error.message)
    }
}


