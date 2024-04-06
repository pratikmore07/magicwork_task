import image2 from './img/image2.jpg'
import image3 from './img/image3.jpg'
import image4 from './img/image4.jpg'
// import next from './img/next.png'
// import leftarrow from './img/leftarrow.png'

const Hero = () => {
    return (
        <>
            <div className="herosec p-5 mx-auto ">
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner text-light">
                        <div class="carousel-item active" data-bs-interval="5000">
                            <img src={image2} className="img-fluid " alt="img not found" />

                            <div class="carousel-caption text-start text-light ">
                                <h3>Thumbnail label</h3>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec.</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="4000">
                            <img src={image3} className="img-fluid " alt="img not found" />

                            <div class="carousel-caption text-start text-light ">
                                <h3>Thumbnail label</h3>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={image4} className="img-fluid text-light " alt="img not found" />

                            <div class="carousel-caption text-start  ">
                                <h3>Thumbnail label</h3>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon " aria-hidden="true">
                            {/* <img src={leftarrow} height={50} width={50} className="img-fluid ms-5" alt="img not found" /> */}
                        </span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class=" carousel-control-next-icon" aria-hidden="true">
                            {/* <img src={next} height={50} width={50} className="img-fluid ms-5" alt="img not found" /> */}
                        </span>
                    </button>
                </div>
            </div>


        </>
    );
};
export default Hero;