

import sec31 from './img/sec31.png'
import sec32 from './img/sec32.png'
import sec33 from './img/sec33.png'
import sec34 from './img/sec34.png'

const Section3 = () => {
    return (
        <>

            <div className=''>
                <section className="container-fluid py-5">
                    <section className="container ">
                        <section className="row ps-5" >
                            <div className='col-12 text-center pb-4'>
                                <h3>New Latest Offers</h3>
                                <h5>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</h5>
                            </div>

                            <div className="card border-0  col-12 col-md-6" id="cardp">
                                <div className="row g-0 mb-4 ">
                                    <div className="col-md-4">
                                        <img src={sec31} className="img-fluid sec3img  rounded-2 h-100  " alt="img nkt found" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h4 className="card-title h4  ">White kitchen</h4>
                                            <h6 className="card-text   fs-6">Lorem ipsum dolor sit elite.</h6>
                                            <h6>Rooms: <span>2</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Size: <span className='ms-3'>235 m²</span></h6>
                                            <h6>Bathrooms: <span>3</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Garage: <span>Yes</span></h6>
                                            <h6> Price: <span>$4000</span></h6>
                                            <button type="submit" class="btn sec3btn text-dark"><b>Contact Now</b></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card border-0 col-12 col-md-6" id="cardp">
                                <div className="row g-0 mb-4 ">
                                    <div className="col-md-4">
                                        <img src={sec33} className="img-fluid sec3img rounded-2 h-100  " alt="img nkt found" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h4 className="card-title h4  ">Pro Salon</h4>
                                            <h6 className="card-text   fs-6">Lorem ipsum dolor sit elite.</h6>
                                            <h6>Rooms: <span>4</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Size: <span className='ms-3'>435 m²</span></h6>
                                            <h6>Bathrooms: <span>4</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Garage: <span>Yes</span></h6>
                                            <h6> Price: <span>$10000</span></h6>
                                            <button type="button" class="btn sec3btn text-dark"><b>Contact Now</b></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>

                        <section className="row m-5" >

                            <div className="card border-0 col-12 col-md-6" id="cardp">
                                <div className="row g-0 mb-4 ">
                                    <div className="col-md-4">
                                        <img src={sec33} className="img-fluid sec3img  " alt="img nkt found" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h4 className="card-title h4  ">White kitchen</h4>
                                            <h6 className="card-text   fs-6">Lorem ipsum dolor sit elite.</h6>
                                            <h6>Rooms: <span>2</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Size: <span className='ms-3'>235 m²</span></h6>
                                            <h6>Bathrooms: <span>3</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Garage: <span>Yes</span></h6>
                                            <h6> Price: <span>$24000</span></h6>
                                            <button type="button" class="btn sec3btn text-dark"><b>Contact Now</b></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card border-0 col-12 col-md-6" id="cardp">
                                <div className="row g-0 mb-4 ">
                                    <div className="col-md-4">
                                        <img src={sec34} className="img-fluid sec3img rounded-2 h-100  " alt="img nkt found" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h4 className="card-title h4  ">Pro Salon</h4>
                                            <h6 className="card-text   fs-6">Lorem ipsum dolor sit elite.</h6>
                                            <h6>Rooms: <span>4</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Size: <span className='ms-3'>435 m²</span></h6>
                                            <h6>Bathrooms: <span>4</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Garage: <span>No</span></h6>
                                            <h6> Price: <span>$4000</span></h6>
                                            <button type="button" class="btn sec3btn text-dark"><b>Contact Now</b></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </section>
                </section>
            </div >

        </>
    );
};
export default Section3;