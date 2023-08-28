export default function Product({name,brand, gender,category,price,stock,url}){
   
    return(
        <div id="product">

           <img src={url} alt={name}/> 
            <div id="row2">
                <p id="brand">
                    {brand} | {gender.toLowerCase()}
                </p>
                <p>
                    ${price}
                </p>
            </div>
            <h3>{name}</h3>
        </div>
    )
}