import drledy from './img/drledy.png'


const Nurce = () => {
    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-12 col-md-6 mt-3">
                        <h3 className="py-3">We Provide High Quality services</h3>
                        <h4>Visit Our New Clinic in New York.</h4>
                        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur laboris nisi ut aliquip.</p>
                        <button className="py-3 nurcebtn text-center ">Contact us Now</button>
                    </div>

                    <div className="col-12 col-md-6">
                        <img src={drledy} className="img-fluid rounded-circle py-3 " alt="img nkt found" />

                    </div>
                </div>

            </div>


        </>
    )
};
export default Nurce;