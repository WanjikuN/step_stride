export default function Product({name,brand, gender,category,price,stock,url}){
   
    return(
        <div id="product">
           <img src={url} alt={name}/> 
       
        </div>
    )
}