import Slider from "react-slick";

const TestimonialData = [
    {
        id: 1,
        name: "Victor",
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas fugit omnis et alias, harum quaerat in temporibus modi neque quam?',
        img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        id: 2,
        name: "Jon",
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas fugit omnis et alias, harum quaerat in temporibus modi neque quam?',
        img: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        id: 3,
        name: "Doe",
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas fugit omnis et alias, harum quaerat in temporibus modi neque quam?',
        img: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        id: 4,
        name: "Nicholas",
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas fugit omnis et alias, harum quaerat in temporibus modi neque quam?',
        img: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        id: 5,
        name: "Altena",
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas fugit omnis et alias, harum quaerat in temporibus modi neque quam?',
        img: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww',
    },
]

const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoPlay: true,
        autoPlaySpeed: 2000,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    return (
        <div className="py-10 mb-10">
            <div className="container">
                {/* Header section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">What our customers are saying</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold py-2">Testimonials</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum alias nihil corrupti ratione cupiditate explicabo placeat natus? Aperiam, deserunt unde!
                    </p>
                </div>
                {/* testimonials cards */}
                <div
                    data-aos="zoom-in"
                >
                    <Slider {...settings}>
                        {
                            TestimonialData.map((data) => (
                                <div
                                    key={data.id}
                                    className="my-6"
                                >
                                    <div
                                        className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                                    >
                                        <div className="mb-4">
                                            <img src={data.img} alt=""
                                                className="rounded-full w-20 h-20"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="space-y-3">
                                                <p
                                                    className="text-xs text-gray-500"
                                                >{data.text}</p>
                                                <h1
                                                    className="text-xl font-bold text-black/80 dark:text-light"
                                                >{data.name}</h1>
                                            </div>
                                        </div>
                                        <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                                            ,,
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;