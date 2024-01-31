import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <div className="footer">
            <div className="section-child">
                <div className="footer-child">
                    <ul className="footer-list">
                        <h3 className="liks">Quick Links</h3>
                        <li className='liks'>
                            <Link className="lik" to="/home">Home</Link>
                        </li>
                        <li className="liks">
                            <Link className="lik" to="/products">Products</Link>
                        </li>
                        <li className="liks">
                            <a className="lik" href="https://www.instagram.com/kyanlimited/" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <li className="liks">
                            </li>
                            <Link className="lik" to="/contact">Get Inquiry</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-child">
                    <ul className="footer-list">
                        <h3 className="links">Contact</h3>
                        <li className="link">kyannltd@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
