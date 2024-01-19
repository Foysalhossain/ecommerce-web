import footerLogo from '../../assets/logo/logo.png';
import Banner from '../../assets/image/footer-pattern.jpg';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";


const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'button',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
}

const FooterLinks = [
    {
        title: 'Home',
        link: '/#'
    },
    {
        title: 'About',
        link: '/#about'
    },
    {
        title: 'Contact',
        link: '/#contact'
    },
    {
        title: 'Blog',
        link: '/#blog'
    },
]

const Footer = () => {
    return (
        <div
            style={BannerImg}
            className='text-white'>
            <div className='container'>
                <div
                    data-aos="zoom-in"
                    className='grid md:grid-cols-3  pt-5'>
                    {/* company details */}
                    <div className='py-8 px-4'>
                        <h1
                            className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'
                        >
                            <img src={footerLogo} alt=""
                                className='max-w-[50px]'
                            />
                            Shopsy</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet placeat magni commodi in ratione temporibus.
                        </p>
                    </div>
                    {/* Footer Links */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link) => (
                                        <li
                                            key={link.title}
                                            className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'
                                        >
                                            <span>{link.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link) => (
                                        <li
                                            key={link.title}
                                            className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'
                                        >
                                            <span>{link.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* social links */}
                        <div>
                            <div className='flex items-center gap-3 mt-6'>
                                <a href="#">
                                    <FaInstagram className='text-3xl' />
                                </a>
                                <a href="#">
                                    <FaFacebook className='text-3xl' />
                                </a>
                                <a href="#">
                                    <FaLinkedin className='text-3xl' />
                                </a>
                            </div>
                            <div className='mt-6'>
                                <div className='flex items-center gap-3'>
                                    <FaLocationArrow />
                                    <p>Uttara, Dhaka, Bangladesh</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FaMobileAlt />
                                    <p>+88 012436677</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;