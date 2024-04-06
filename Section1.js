import section11 from './img/section11.png';
import section12 from './img/section12.png';
import section13 from './img/section13.png';

const Section1 = () => {
    return (
        <>
            <div className="section1 my-5">
                <div className='cotainer'>
                    <section className="row  ">
                        <div className="col-md-3 col-12 sec1card  ">
                            <img src={section11} className="img-fluid ms-auto " alt="img not found" />
                            <div className="card-body">
                                <h4 className="mt-3">Shared Hosting</h4>
                                <p className=" mt-2">Lorem ipsum dolor sit Seamlessly empower fully researched growth strategies interoperable internal.</p>
                                <button type="button" class="btn btn-outline-danger"><i class="fa-regular fa-clipboard"></i> Order Now</button>
                            </div>
                        </div>

                        <div className="col-md-3 col-12 ">
                            <img src={section12} className="img-fluid ms-auto " alt="img not found" />
                            <div className="card-body">
                                <h4 className="mt-3">VPS</h4>
                                <p className=" mt-2">Lorem ipsum dolor sit Seamlessly empower fully researched growth strategies interoperable internal.</p>
                                <button type="button" class="btn btn-outline-danger"> Order Now</button>
                            </div>
                        </div>

                        <div className="col-md-3 col-12 ">
                            <img src={section13} className="img-fluid ms-auto " alt="img not found" />
                            <div className="card-body">
                                <h4 className="mt-3">Dedicated Server</h4>
                                <p className=" mt-2">Lorem ipsum dolor sit Seamlessly empower fully researched growth strategies interoperable internal.</p>
                                <button type="button" class="btn btn-outline-danger"> Order Now</button>
                            </div>
                        </div>

                    </section>
                </div>
            </div>

        </>
    );
};
export default Section1;
