import { Link } from 'react-router-dom';
import { qatar } from '../index';

export default function Planes() {
    // Check the screen width
    const isScreenSmall = window.innerWidth < 600;

    return (
        <div className="farms">
            <div className="farms_title">
                <p className="farm_title">Exportation</p>
            </div>

            {!isScreenSmall && (
                <div className="farms_parent">
                    <div className="planes_description">

                        <p className="farm_desc">
                            Kyan Exports Limited ensures unparalleled reliability
                            in flower sourcing from Kenya by utilizing a robust
                            transportation network that includes airlines such as
                            Qatar Airways, Emirates, Saudi Airlines, DHL, Ethiopian
                            Airlines, Etihad Airways, and Kenya Airways. Leveraging these
                            reputable carriers enables us to operate with heightened
                            efficiency, speed, and reliability, ensuring prompt and
                            secure delivery of our exquisite blooms.
                        </p>
                        <Link to="/contact">
                            <button className="view_expo">
                                Get Enquiry
                            </button>
                        </Link>
                    </div>
                    <div className="farms_img">
                        <img className="img_planes" src={qatar} alt='exp'></img>
                    </div>
                </div>
            )}
            {isScreenSmall && (
                <div className="planes_parent">
                    <div className="phone_planes">
                        <img className="img_planes" src={qatar} alt='img'></img>
                    </div>
                    <div className='phones_description'>
                        <p className="phones_desc">
                            Kyan Exports Limited ensures unparalleled reliability
                            in flower sourcing from Kenya by utilizing a robust
                            transportation network that includes airlines such as
                            Qatar Airways, Emirates, Saudi Airlines, DHL, Ethiopian
                            Airlines, Etihad Airways, and Kenya Airways. Leveraging these
                            reputable carriers enables us to operate with heightened
                            efficiency, speed, and reliability, ensuring prompt and
                            secure delivery of our exquisite blooms.
                        </p>
                    </div>
                    <Link to="/contact">
                        <button className="view_expo">
                            Get Enquiry
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}
