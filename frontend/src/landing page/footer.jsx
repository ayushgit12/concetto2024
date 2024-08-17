import React from 'react'
import '../css/footer.css'

export const Footer = () => {
    return (
        <footer className="footer " style={{marginTop:"100px"}}>
            <div className="footer__parralax" style={{top:"-250px"}}>
                <div className="footer__parralax-secondplan"></div>
                <div className="footer__parralax-premierplan"></div>
            </div>
            <div className="container flex md:flex-row flex-col justify-between  items-center">
                <div class=" my-2 md:border-b-0 border-b-2 border-gray-800 py-6  md:w-3/12 w-full  footer__col ">
                    <p class="footer__col-title justify-center">
                       The Shop
                       </p>
                    <nav class="footer__nav">
                        <ul class="footer__nav-list items-center">
                            <li class="footer__nav-item">
                                <a href="" class="footer__nav-link">
                                    Legal Notice
                                </a>
                            </li>
                            <li class="footer__nav-item">
                                <a href="" class="footer__nav-link">
                                    Privacy Policy
                                </a>
                            </li>
                            <li class="footer__nav-item">
                                <a href="" class="footer__nav-link">
                                    Terms and Conditions
                                </a>
                            </li>
                            <li class="footer__nav-item">
                                <a href="" class="footer__nav-link">
                                    Delivery and Returns
                                </a>
                            </li>
                            <li class="footer__nav-item">
                                <a href="" class="footer__nav-link">
                                    Contest Rules
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class=" my-2 md:border-b-0 border-b-2 border-gray-800 py-6  md:w-3/12 w-full text-center footer__col">
                    <h3 class="footer__col-title justify-center">
                        <span>Our Networks</span></h3>
                    <nav class="footer__nav">
                        <ul class="footer__nav-list items-center">
                            <li class="footer__nav-item">
                                <a href="" class="footer__nav-link">
                                    <i data-feather="youtube"></i><span>Youtube</span>
                                </a>
                            </li>
                            <li class="footer__nav-item">
                                <a href="" class="footer__nav-link">
                                    <i data-feather="facebook"></i><span>Facebook</span>

                                </a>
                            </li>
                            <li class="footer__nav-item">
                                <a href="" class="footer__nav-link">
                                    <i data-feather="instagram"></i><span>Instagram</span>

                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className=' my-2 md:border-b-0 border-b-2 border-gray-800 py-6  md:w-3/12 w-full text-center flex md:flex-col flex-row items-center selection:'>
                    <div className="img md:w-full w-1/3 ">
                        <img className=' w-full object-cover' src="/finalLogo.png" alt="" />
                    </div>
                    <div className="about md:w-full w-2/3 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia ullam cum rerum reiciendis, quod fugiat </div>
                </div>
            </div>
        </footer>
    )
}
