import cloud from './img/cloud.png'

const Section4 = () => {
    return (
        <>

            <div className="container-fluid sec4">
                <div className="row py-5">
                    <div className="col-12 sec_4 text-light">
                            <img src={cloud} height={100} width={100} className="img-fluid rounded-circle py-3 " alt="img nkt found" />
                         
                        <h1 className="sec4h1">
                            Download Software From <br /> Themeforest Today!
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et <br />
                            dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut <br />
                            aliquip ex commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum <br />
                            dolore eu fugiat nulla pariatur.
                        </p>
                        <button type="button" class="btn btn-info">Download Flatpack</button>


                    </div>


                </div>
            </div>
        </>
    )
}
export default Section4;