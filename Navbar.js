import logo from './img/logo.png';
import facebook from './img/facebook.png';
import twitter from './img/twitter.png';
import instagram from './img/instagram.png';


const Navbar = () => {
    return (
        <>
            <div className="container-fluid g-0 overflow-hidden">
                <div className='navimg '>
                    <img src={logo} className="img-fluid " alt="img not found" />
                </div>
                <div className="row p-0">
                    <div className="col-8">

                        <nav class="navbar navbar-expand-lg bg-white">
                            <div class="container">
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <a class="nav-link    px-4 " aria-current="page" href="#">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link px-4 " href="#">About</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link px-4 " href="#">Services</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link px-4 " href="#">Blog</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link px-4 " href="#">Testimonials</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link px-4  ">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className='col-4 mt-2 '>
                        <img src={facebook} className="img-fluid p-3" alt="img not found" />
                        <img src={twitter} className="img-fluid p-3" alt="img not found" />
                        <img src={instagram} className="img-fluid p-3" alt="img not found" />
                    </div>
                </div>
            </div>

        </>
    );
};
export default Navbar;