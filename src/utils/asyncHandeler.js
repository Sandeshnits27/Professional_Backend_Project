const asyncHandeler =() =>{}
 
    const asyncHandler = (requestHandler) =>{
        (req,res,next)=>{
            Promise.resolve(requestHandler(requestHandler,res,next)).thencatch((err)=>next(err))
        }
    }


export {asyncHandeler}