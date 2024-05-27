import StarRating from "./starRating"
export default function Product({products}){
    return(
        <>
        <div className="flex flex-col">
            <div className="text-xl flex flex-col gap-y-1 items-center font-semibold text-slate-600">
                <h1 className="">{products.name}</h1>
                <img className="w-24 h-24" src={products.image} alt="" />
            </div>
            <div className="self-start text-start font-medium text-sm text-slate-600 mt-2">
                <h2>Name: {products.name}</h2>
                <h2>Brand: {products.brand}</h2>
                <h2 className="">Price: <span className="text-lime-600 text-lg">${products.price}</span></h2>
                <h2 className="flex gap-1 items-center">Rating:<StarRating value={products.rating} text={`${products.numReviews} reviews`}/></h2> 
            </div>
        </div>
       

        </>
    )
}