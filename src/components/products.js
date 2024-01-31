import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Header from "./header";
import Product from "./product";
import Footer from './footer';

function Products() {
    const [displayedProducts, setDisplayedProducts] = useState(12); // Initial number of products to display

    const loadMoreProducts = () => {
        setDisplayedProducts(prevCount => prevCount + 3); // Increase the count when the button is clicked
    };


    let products = [
        { name: "Red Roses", image: "https://images.pexels.com/photos/196664/pexels-photo-196664.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "White Roses", image: "https://media.istockphoto.com/id/177267010/photo/white-roses-as-a-background.jpg?s=612x612&w=0&k=20&c=IjiO-uLV6dbgHBhQoJYajc4Z7yiJQUsWShAV-abDRdA=" },
        { name: "Peach Roses", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdVKN-LyTV-vL_o9T7-_65kXfnkufo82nuFfXRCn1bLVLk84W3g1-s-7y64diwOBskF8&usqp=CAU" },
        { name: "Yellow Roses", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2NgaLH3cGUuFCU3ApGca2H_t08hemB7UPA&usqp=CAU" },
        { name: "Bicolor Roses", image: "https://www.subatigroup.com/wp-content/uploads/2019/05/ATOMIC-edited-300x300.png" },
        { name: "Pink Roses", image: "https://syncwithlove.com/wp-content/uploads/2023/10/hot-pink-rose-background-michael-ledray.jpg" },
        { name: "Fuschia Roses", image: "https://www.subatigroup.com/wp-content/uploads/2019/05/ALICIA-edited-300x300.png" },
        { name: "Gysophila Million Star", image: "https://mistyflowers.com/wp-content/uploads/2020/08/Gypsophila_MillionStars_Square.jpg" },
        { name: "Carnation", image: "https://cdn.britannica.com/38/189538-050-6EC8A082/carnation-flowers.jpg" },
        { name: "Limonium", image: "https://www.gardenia.net/wp-content/uploads/2023/05/limonium-sinuatum.webp" },
        { name: "Oriental Lilies", image: "https://www.gardenia.net/wp-content/uploads/2023/05/Oriental-lilies.webp" },
        { name: "Bird of Paradise", image: "https://www.planetnatural.com/wp-content/uploads/2023/07/Bird-of-paradise-flower-close-up-view.jpg" },
        { name: "Eucalyptus", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdK-_mLcunXBl7s3zsuJsFJnn1cpP6BVKJA&usqp=CAU" },
        { name: "Craspedia", image: "https://www.outsidepride.com/images/products/detail/gardenflower/craspediaglobosa.jpg" },
        { name: "Lilies", image: "https://www.flowerdelivery.co.ke/wp-content/uploads/2019/03/Stargazer_Lily-1.jpg" },
        { name: "#Lotus", image: "https://www.subatigroup.com/wp-content/uploads/2023/08/LOTUS-300x300.jpg" },
        { name: "#Luv", image: "https://www.subatigroup.com/wp-content/uploads/2022/04/LUV-min-300x300.jpg" },
        { name: "#New Look", image: "https://www.subatigroup.com/wp-content/uploads/2023/08/NEW-LOOK-300x300.jpg" },
        { name: "#WishFul", image: "https://www.subatigroup.com/wp-content/uploads/2023/08/WISHFUL-300x300.jpg" },
        { name: "Ace Pink", image: "https://www.subatigroup.com/wp-content/uploads/2019/05/ACE_PINK-edited-300x300.png" },
        { name: "Albtros", image: "https://www.subatigroup.com/wp-content/uploads/2022/04/ALBATROS-300x300.jpg" },
        { name: "Alicia", image: "https://www.subatigroup.com/wp-content/uploads/2019/05/ALICIA-edited-300x300.png" },
        { name: "Angel Bombastic", image: "https://www.subatigroup.com/wp-content/uploads/2023/08/ANGEL-BOMBASTIC-300x300.jpg" },
        { name: "Annakarina", image: "https://www.subatigroup.com/wp-content/uploads/2019/05/ANNAKARINA-edited-300x300.png" },
        { name: "Antique Trendsetter", image: "https://www.subatigroup.com/wp-content/uploads/2023/08/ANTIQUE-TRENDSETTER-300x300.jpg" },
        { name: "Babe", image: "https://www.subatigroup.com/wp-content/uploads/2019/05/BABE-edited-300x300.png" },
        { name: "Baby Love", image: "https://www.subatigroup.com/wp-content/uploads/2019/05/BABY_LOVE-edited-300x300.png" },
        { name: "Bellalinda Cerise", image: "https://www.subatigroup.com/wp-content/uploads/2019/05/IMG_9592-Bellalinda-cerise-2-300x300.jpg" },
        { name: "Bellalinda Pink", image: "https://www.subatigroup.com/wp-content/uploads/2022/04/BELLALINDA-PINK-min-300x300.jpg" },
        { name: "Bermuda", image: "https://www.subatigroup.com/wp-content/uploads/2022/06/BERMUDA-300x300.jpg" },
        { name: "Blue Berry", image: "https://www.subatigroup.com/wp-content/uploads/2019/05/BLUE_BERRY-edited-300x300.png" },
        { name: "Bogart BB", image: "https://www.subatigroup.com/wp-content/uploads/2022/04/BOGART-BB-min-300x300.jpg" },
        { name: "Bombastic", image: "https://www.subatigroup.com/wp-content/uploads/2019/05/BOMBASTIC-edited-300x300.png" },
        { name: "Boulevard", image: "https://www.subatigroup.com/wp-content/uploads/2019/05/BOULEVARD-300x300.jpg" },
        { name: "Brook", image: "https://www.subatigroup.com/wp-content/uploads/2022/06/BROOK-300x300.jpg" },
        { name: "Camouflage", image: "https://www.subatigroup.com/wp-content/uploads/2019/05/CAMOUFLAGE-300x300.jpg" },
        { name: "Caric", image: "https://www.subatigroup.com/wp-content/uploads/2019/05/CARICE-300x300.jpg" },
        { name: "Carousel", image: "https://www.subatigroup.com/wp-content/uploads/2019/05/CAROUSEL-edited-300x300.png" },
        { name: "Celeb", image: "https://www.subatigroup.com/wp-content/uploads/2022/06/CELEB-300x300.jpg" },
        { name: "Charming Babe", image: "https://www.subatigroup.com/wp-content/uploads/2019/05/CHARMING_BABE-edited-300x300.png" }
    ]

    const visibleProducts = products.slice(0, displayedProducts);

    return (
        <div>
            <Header />
            <div className="products">
                {visibleProducts.map((product, index) => (
                    <Product key={index} name={product.name} image={product.image} />
                ))}
            </div>
            {displayedProducts < products.length && (
                <div className="viewMore">
                    <button className="view" onClick={loadMoreProducts}>
                        View More
                    </button>
                    <Link to="/contact">
                        <button className="view">
                            Get Enquiry
                        </button>
                    </Link>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default Products;
