
function Product(props) {
    return (
        <div className='product'>
            <img className="img" src={props.image} alt="product"></img>
            <p className="flower_name">{props.name}</p>
        </div>

    )
}
export default Product;