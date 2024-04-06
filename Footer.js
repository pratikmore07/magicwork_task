
import foot from './img/foot.png'
import facebook from './img/facebook.png';
import twitter from './img/twitter.png';
import instagram from './img/instagram.png';


const Footer = () => {
    return (

        <div className='footer'>
            <section className="container-fluid py-5">
                <section className="  ">
                    <section className="row my-5 text-light">

                            <div className="row container text-center">
                                <div className="col-12 col-md-3 ">
                                    <img src={foot} className="img-fluid sec3img py-3 " alt="img nkt found" />


                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmoda tempor
                                        incididunt.</p>
                                    <div className="row">
                                        <div className="col-3">
                                           <a href="#fakelink"><img src={facebook} height={20} width={20} className="img-fluid sec3img py-3 " alt="img nkt found" /></a> 
                                        </div>

                                        <div className="col-3">
                                            <a href="#fakelink"><img src={twitter} height={20} width={20} className="img-fluid sec3img py-3 " alt="img nkt found" /></a>
                                        </div>

                                        <div className="col-3">
                                            <a href="#fakelink"><img src={instagram} height={20} width={20} className="img-fluid sec3img py-3 " alt="img nkt found" /></a>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-12 col-md-3 ">
                                    <h4 className="py-3">Navigation</h4>
                                    <ul className="text-decoration">
                                        <li>Home</li>
                                        <li>Overview</li>
                                        <li>About</li>
                                        <li>Buy now</li>
                                        <li>support</li>
                                    </ul>
                                </div>

                                <div className="col-12 col-md-3 ">
                                    <h3>347 567 78 90</h3>
                                    <h6 className="py-3">AVAILABLE FROM 12PM - 18PM</h6>
                                    <p>560 Judah St & 15th Ave, Apt 5 San Francisco, CA, 230903</p>

                                </div>

                                <div className="col-12 col-md-3 ">
                                    <h5>Info</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                                        incididunt Lorem ipsum dolor sit amet consectetur adipiscing elit sed.</p>
                                </div>
                            </div>
 
                        </section>
                    </section>
                </section>
            
        </div>


    );
};
export default Footer;