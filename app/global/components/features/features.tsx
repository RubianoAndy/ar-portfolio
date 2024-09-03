'use client';

const Features = () => {
    const featuresOptions = [
        {
            icon: 'fas fa-medal',
            name: 'Excellent Services',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
            icon: 'fas fa-poll',
            name: 'Grow your market',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
            icon: 'fas fa-lightbulb',
            name: 'Launch time',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
            icon: 'fas fa-lightbulb',
            name: 'Launch time',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
    ];

    return (
        <div className="flex flex-col w-full bg-white py-4 md:py-8 space-y-8">
            <div className="flex container mx-auto text-center justify-center">
                <div className="w-full md:w-1/2 px-4">
                    <h2 className="text-4xl lg:text-5xl font-semibold text-black">Build something</h2>
                    {/* <p className="text-lg mt-4 mb-4 text-black">
                        Put the potentially record low maximum sea ice extent this year
                        down to low ice. According to the National Oceanic and
                        Atmospheric Administration, Ted, Scambos.
                    </p> */}
                </div>
            </div>

            <div className="flex container mx-auto">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-wrap justify-center">
                        {featuresOptions.map((feature, index) => (
                            <div key={index} className="w-full md:w-1/3 px-4 text-center">
                                <div className="text-black p-3 w-24 h-24 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className={`${feature.icon} text-5xl text-green-700`}></i>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-black">
                                    {feature.name}
                                </h5>
                                <p className="mt-2 mb-4 text-blueGray-400">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;