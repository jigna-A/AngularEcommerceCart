const db = require('./db')

const getProducts = ()=>{
    return db.Product.find().then(
        (result)=>{
            if(result){
                return {
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return {
                    status:false,
                    statusCode:404,
                    message:'no product found'
                }
            }
        }
    )
}
const getMenproduct = ()=>{
    return db.Menproduct.find().then(
        (result)=>{
            if(result){
                return {
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return {
                    status:false,
                    statusCode:404,
                    message:'no product found'
                }
            }
        }
    )
}

const getwomenproduct = ()=>{
    return db.Womenproduct.find().then(
        (result)=>{
            if(result){
                return {
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return {
                    status:false,
                    statusCode:404,
                    message:'no product found'
                }
            }
        }
    )
}




module.exports={
    getProducts,
    getMenproduct,
    getwomenproduct
}
