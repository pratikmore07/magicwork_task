const Contact = () => {
    return (
        <>

          

            <div className="container-fluid footup g-0 ">
                <div className="row py-5">
                    <div className="col-md-6  ">
                        <h3 className="text-center text-light  py-3">See our office</h3>
                        <h6 className="text-center text-light mb-5 ">Our service is totaly thin and light.</h6>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4235157481526!2d73.77913337465192!3d18.50975406950569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2be5f30e03177%3A0xcf51514169b70821!2z4KSu4KWF4KSc4KS_4KSV4KS14KSw4KWN4KSV4KWN4KS4IOCkhuCkryDgpJ_gpYAg4KS44KWL4KSy4KWN4KSv4KWB4KS24KSo4KWN4KS4IOCkquCljeCksOCkvi7gpLLgpL8u!5e0!3m2!1smr!2sin!4v1712404690527!5m2!1smr!2sin" width="80%" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    <div className="col-md-5 ">
                        <h3 className=" text-light  py-3">Contact us now</h3>
                        <h6 className=" text-light mb-5"> Our service is totaly thin and light.</h6>

                        <div>
                            <form class="needs-validation " novalidate>
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="fullname" placeholder="Enter full name" required />
                                    <div class="invalid-feedback">
                                        Please enter your full name.
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="company" placeholder="Enter your company" required />
                                    <div class="invalid-feedback">
                                        Please enter your company name.
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <input type="email" class="form-control" id="email" placeholder="Enter email" required />
                                    <div class="invalid-feedback">
                                        Please provide a valid email.
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <textarea class="form-control" id="message" rows="4" placeholder="Write your message here" required></textarea>

                                </div>
                                <button class="btn btn-primary mapbut text-center" type="submit">Submit</button>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
};
export default Contact;



