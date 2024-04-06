import img80 from './img/8k-removebg-preview.png';
import img81 from './img/mik-removebg-preview.png';
import img82 from './img/like-removebg-preview.png';
import img83 from './img/umb-removebg-preview (1).png';

import CountUp from 'react-countup';



const Counter = () => {
    return (
        <>
            <div className="container-fluid counter Count g-0 overflow-hidden">
                <div className="row p-3 text-center">
                    <div className="col-12 col-md-3">
                        <img src={img80} className="img-fluid" alt="img not found" />

                        <h1 className='value text-light p-2'>
                            <CountUp end={+8} start={0} duration={2} delay={0} />
                        </h1>


                        <p className=" text-light">Seamlessly empower fully researched growth strategies.</p>
                    </div>
                    <div className="col-12 col-md-3 ">
                        <img src={img81} className="img-fluid" alt="img not found" />
                        {/* <p className="fs-1 text-light">+15 Speakers</p> */}
                        <h1 className='value text-light p-2'>
                            <CountUp end={+15} start={0} duration={2} delay={0} />
                        </h1>


                        <p className=" text-light">Seamlessly empower fully researched growth strategies.</p>
                    </div>
                    <div className="col-12 col-md-3">
                        <img src={img82} className="img-fluid" alt="img not found" />
                        {/* <p className="fs-1 text-light">+1.4M likes</p> */}
                        <h1 className='value text-light'>
                            <CountUp end={+1.4} start={0} duration={2} delay={0} />
                        </h1>

                        <p className=" text-light">Seamlessly empower fully researched growth strategies.</p>
                    </div>
                    <div className="col-12 col-md-3">
                        <img src={img83} className="img-fluid" alt="img not found" />
                        {/* <p className="fs-1 text-light">+75 Projects</p> */}
                        <h1 className='value text-light p-2'>
                            <CountUp end={+75} start={0} duration={2} delay={0} />
                        </h1>

                        <p className=" text-light">Seamlessly empower fully researched growth strategies.</p>
                    </div>
 
                </div>
            </div>

        </>
    )
};
export default Counter;
