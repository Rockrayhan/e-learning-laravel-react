import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const AboutCounter = () => {




    return (
        <div className='py-10'>
            <div className='center about-counter'>
                <div className='text-white bg-teal-800 px-20 py-10 rounded-2xl '>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 justify-center'>
                        <div className="col-span-1 lg:col-span-1">
                            <h1 className='text-5xl font-semibold'>
                                <CountUp end={1500} duration={3} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>+
                            </h1>
                            <p> Students </p>
                        </div>
                        <div className="col-span-1 lg:col-span-1">
                            <h1 className='text-5xl font-semibold'>
                                <CountUp end={30} duration={3} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>+
                            </h1>
                            <p> Courses </p>
                        </div>
                        <div className="col-span-1 lg:col-span-1">
                            <h1 className='text-5xl font-semibold'>
                                <CountUp end={900} duration={3} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>+
                            </h1>
                            <p> Finished Seasons </p>
                        </div>
                        <div className="col-span-1 lg:col-span-1">
                            <h1 className='text-5xl font-semibold'>
                                <CountUp end={100} duration={3} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>%
                            </h1>
                            <p> Satisfaction Rate </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCounter;