import React from 'react';

const Footer = () => {
    return (
        <div className="relative mt-20">
            {/* Curved Top Background */}
            <div className="absolute top-0 left-0 w-full h-16 bg-primary -skew-y-3 z-0"></div>

            <footer className="relative bg-primary text-primary-content p-10 z-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 " >
                    {/* Contact Section */}
                    <div>
                        <h6 className="footer-title">Contact</h6>
                        <p>Email: majedulislam223311@gmail.com</p>
                        <p>Phone: +880 123-456-7890</p>
                        <p>Address: Dhaka, Bangladesh</p>
                    </div>

                    {/* Follow Us Section */}
                    <div>
                        <h6 className="footer-title">Follow Us</h6>
                        <div className="flex gap-4 mt-2">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M9 8H6v4h3v12h5V12h4l1-4h-5V5c0-1.103.897-2 2-2h3V0h-4c-3.309 0-6 2.691-6 6v2z"/>
                                </svg>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 4.557a9.93 9.93 0 01-2.828.775A4.932 4.932 0 0023.337 2c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0016.616.75c-2.717 0-4.92 2.205-4.92 4.92 0 .385.044.76.128 1.12C7.728 6.683 4.1 4.718 1.671 1.739a4.822 4.822 0 00-.666 2.475c0 1.708.869 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.828a4.935 4.935 0 01-2.224.084c.626 1.956 2.444 3.379 4.6 3.419A9.867 9.867 0 010 19.54 13.936 13.936 0 007.548 21c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z"/>
                                </svg>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.33 3.608 1.304.975.975 1.242 2.242 1.304 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.33 2.633-1.304 3.608-.975.975-2.242 1.242-3.608 1.304-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.33-3.608-1.304-.975-.975-1.242-2.242-1.304-3.608C2.175 15.796 2.163 15.416 2.163 12s.012-3.584.07-4.849c.062-1.366.33-2.633 1.304-3.608C4.512 2.495 5.779 2.228 7.145 2.166 8.41 2.108 8.79 2.096 12 2.096M12 0C8.741 0 8.332.014 7.052.072 5.777.13 4.62.393 3.675 1.338 2.729 2.283 2.466 3.44 2.408 4.715.35 5.989.336 6.399.336 9.658s.014 3.669.072 4.949c.058 1.275.321 2.433 1.266 3.378.945.945 2.103 1.208 3.378 1.266 1.28.058 1.689.072 4.949.072s3.669-.014 4.949-.072c1.275-.058 2.433-.321 3.378-1.266.945-.945 1.208-2.103 1.266-3.378.058-1.28.072-1.689.072-4.949s-.014-3.669-.072-4.949c-.058-1.275-.321-2.433-1.266-3.378C20.433.393 19.275.13 18 .072 16.719.014 16.31 0 13.051 0H12zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Optional More Info */}
                    <div className="">
                        <p className="text-sm mt-8 lg:mt-0">© 2025 RoomMatch. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
