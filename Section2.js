import sec2 from './img/sec2.png'
const Section2 = () => {
    return (
        <>

            <div className='sec2'>
                <section className="container-fluid my-5">
                    <section className="container ">
                        <section className="row " >

                            <div className="col-lg-6 my-5 me-auto">
                                <img src={sec2} className="img-fluid  " alt="img not found" />
                            </div>
                            <div className="col-lg-6 my-5 ms-auto ">
                                <h4 className='sec2h4 mt-3'>GET FREE SUPPORT</h4>
                                <h1 className='text-white my-3'>Get The Most Amazing Builder!</h1>
                                <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <button type="button" class="btn btn-info text-light"><b>Live Demo</b></button>
                            </div>
 
                        </section>
                    </section>
                </section>
            </div>

        </>
    );
};
export default Section2;