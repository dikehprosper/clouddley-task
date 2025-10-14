import { NavLink } from 'react-router-dom';
import clouddleyCompanyLogo from '@/assets/images/clouddleyCompanyLogo.png';
import TwitterIcon from '@/assets/icons/TwitterIcon';
import GithubIcon from '@/assets/icons/GithubIcon';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='text-white py-[80px] mx-auto px-[200px] w-full'>
            <div className='flex justify-between items-start w-full mb-[32px]'>
                <div className=''>
                    <NavLink
                        to='/'
                    >
                        <img src={clouddleyCompanyLogo} alt="clouddleyCompanyLogo" className="h-[62px] w-[165px] object-contain" />
                    </NavLink>
                </div>

                <div className='flex justify-between gap-[30px] whitespace-nowrap'>
                    <div className='flex flex-col'>
                        <span className='leading-none tracking-[0px] font-medium text-[20px] text-text-4 mb-[30px]'>
                            Products
                        </span>
                        <div className='gap-[30px] flex flex-col leading-none tracking-[0px] text-text'>
                            <NavLink
                                to=''
                            >
                               Clouddley AI
                            </NavLink>
                            <NavLink
                                to=''
                            >
                                Triggr
                            </NavLink>
                        </div>
                    </div>
                     <div className='flex flex-col'>
                        <span className='leading-none tracking-[0px] font-medium text-[20px] text-text-4 mb-[30px]'>
                            Legal
                        </span>
                        <div className='gap-[30px] flex flex-col leading-none tracking-[0px] text-text'>
                            <NavLink
                                to=''
                            >
                               Privacy policy
                            </NavLink>
                            <NavLink
                                to=''
                            >
                               Terms & Conditions
                            </NavLink>
                            <NavLink
                                to=''
                            >
                              Cookie Policy
                            </NavLink>
                        </div>
                    </div> 
                    <div className='flex flex-col'>
                        <span className='leading-none tracking-[0px] font-medium text-[20px] text-text-4 mb-[30px]'>
                            Community
                        </span>
                        <div className='gap-[30px] flex flex-col leading-none tracking-[0px] text-text'>
                            <NavLink
                                to=''
                            >
                               Docs
                            </NavLink>
                            <NavLink
                                to=''
                            >
                                Discussion
                            </NavLink>
                        </div>
                    </div>
                     <div className='flex flex-col'>
                        <span className='leading-none tracking-[0px] font-medium text-[20px] text-text-4 mb-[30px]'>
                            Links
                        </span>
                        <div className='gap-[30px] flex flex-col leading-none tracking-[0px] text-text'>
                            <NavLink
                                to=''
                            >
                               GitHub
                            </NavLink>
                            <NavLink
                                to=''
                            >
                                Pricing
                            </NavLink>
                            <NavLink
                                to=''
                            >
                                Twitter
                            </NavLink>
                            <NavLink
                                to=''
                            >
                                Discord
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex justify-between items-center'>
                <p className='text-[12px] tracking-[-0.04px] text-text-4'>
                    Copyright © {currentYear} Clouddley Inc. All rights reserved &nbsp; | help@clouddley.com
                </p>
                <p className='flex items-center gap-[11px]'>
                <GithubIcon /> <TwitterIcon />
                </p>
            </div>
        </footer>
    );
};

export default Footer;