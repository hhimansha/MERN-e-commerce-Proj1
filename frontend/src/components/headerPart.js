import React from "react";
import { Link, useLocation } from 'react-router-dom';
import img1 from './images/headerLogo.png';
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
//import img2 from './images/hero.jpg';

function HeaderPart() {

    const {Logout} = useLogout()
    const {user} = useAuthContext()

    const handleClick = () => {
        Logout();
    }
    

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <nav className="flex py-3 max-w-screen-2xl mx-auto ">
                <div className="flex items-center mx-auto ">
            
                    <Link to="/" className="navbar-brand">
                        <div>
                        <img src={img1} alt="Logo" width="170"  className="d-inline-block align-text-top" />
                        </div>
                    </Link>

                    <form className="d-flex items-center mx-50" role="search">
                        <input className="p-2  border border-gray-300 rounded-full w-80 pl-5" type="search" placeholder="Search your book here" aria-label="Search" />
                        <button type="submit">
                            <img width="30"src="https://img.icons8.com/ios/100/search--v1.png" alt="search--v1" className=" -mb-2.5 ml-2"/>
                        </button>
                    </form>
                    
                    <div className="login-Section flex items-center">
                        <Link to='/cart'>
                        <div className="cart-img w-10 h-10 mx-4">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEXElEQVR4nO2cW4hWVRiGHxU1wQsPUTiNF6YoGFQmCeb5whLHzPAqjTEwvAjUlFQyk2oulDyAYomnCxPMAyl4GJEYJM1D4pWliKIXohOKWv521mbiw/en3T/OMO4c17fG9cCC+ffes/53vbPWt457IJFIJBKJRCKRaEg5sB0oAPXAn8Al4BtgAdAnmda0eddlXGPpDrAFeCoZ2ZDtMmm3DLK0R9dOAeuA3/T5GjA2mfhfis02W7t66tpP+twD2JFp3q8lE//lpowpv4eBP5cYVaXrvwL9kol3+Uqm7JGJlvbqmjXvUtbr3tEGdx5R+iq2lXYc1xvpfTurh7ZnXgmg1yUW/7aqOd9UzWtq6DJLBu58iBpbFU8CdTK7fWgxsXJatfCF0EJiZYsMnBJaSKx8IAOXhhYSK+Nl4P7QQmKlV2aefBE4AVQDXwDLgfnAVM1ahmjg3TW0aE+0ycxi7jfd0Dz7W83BzfTFwEygEngVGAiUtfZe/
                                ogMeRN4UQsNZsBsYBGwAdil587mNNyGS1fV6x/UnHy1ppUzgEnAaOA5jWc7EhFrVEgryP1gTfkZYKhq2zTgI2CFauNuhYRa4HYO03/X71ot/1p5rtB3TNN3DpUGq+XBmC7Ba1vwO9oCTwD9geHAROAdYCGwEtgM1AAnZdpfOQy35bqnCcBIpwsLXTTHf0mjhanq1JarNlZnarjp/zGU0G4S8ItqSmy8Lf3bQoq4LBFBmsD/ZKO0WygKxj6JmNCMZw8DhwJcb4wL0v48AflUIj5sxrOHNBR52NfvRXlm1b0dAamUEFtPjIlJmZX4oAyQEBvoxsRq6Z4XWshjGuze1s+xxMAfZKDN090srg6IJAZ21xTRBtAdcMBWGWjxMAYmSO8BnLBAgpYQB8uk92Oc/UX3RRIDj0uvreK4oLcE2X6x9xjYOdPp2c9uFlcLMtECtGdGS+d3OOOYhI3AN5943Qxb14yJuYcYeEA63Z0wmylhtkrtNQZ21NivzmOoGSUDbf/DK0Ok8Xsc8rjEFdSpeOR9afwcp9RKoO0Ze4yBxXOPb+CU/RJo+xDeYmAXbT3UeT4sv1QG2rkZb8yNIEbzlkR+
                                iS9e1uF40zYOxwyUSFtrC41N0wZpWFXcnP8M53TSYaN6Z+mOzt5EsfV6xoFh9Wqy53Vq4lkifPNpcmghsbJQBlqTSeTgdRlog9ZEDvrIQDu1mshBW434zcR0pDcnx2XgsFQF87FBBtpByEQO3m3G4mqiCQbLwNrQJ59ipR1wTibaJk4iB2OAv7X+tkkLDVG9guCBSr1yUO8sRUVvYJVetKlzYF50BhYZJvF/AO/pP4FYmqNrecaNw1sgT7dUq0BW0MaW2/fmPOD+IPN0yxUVyGpI6Q5ame5dcZCnWwolhc3uoBULW3CQp1tqVCCLT6XM070aB3m6pSIT8OeqhpSpoMUdswoHebqmqomhRZWjPF1ToWZ1S6nmAdSSlsgzkUgkEolEglbAP5lTX8ghkRRPAAAAAElFTkSuQmCC"/>
                        </div>
                        </Link>

                        {user && (
                        <><Link to="/user">
                            <div className="flex items-center mx-4">
                            <div className="w-8 h-8">
                                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE3klEQVR4nO2a24vVVRTHP+OoM17IGZ0ms9LulJfpgn9CkQpTGr2UBUGUPdVMPfQQpBARZi/VUPRST5HUS2Z3JEaILK28PNSkU1FeKKx5CJpRx/HEgu+GxZk5v9/e+5wzSfiFwznwW9+192/vtdZea+0DF/D/RQdwJ/ACsBP4ATgJjOljv78H3pdML7CA8wRtwEbgE+AsUEn8GOdj4D7pmna0A08Ax92kTgGDwGZgA7ACWCTZdv1eCdwtmd3Aacc/BvRJdlqwFhh2E/gW2AR0ZujqFPc7p+8IcAdNhK3Uq25AG3xNg3S3aIEOOP2vNMPcLgG+0QCjwONAa6MHAWYC/QoONtZeoLtRyq/UdpviIWBVifx1wDPALuCEfOcfRbGXgGURY94EHNaYhzWHuncivMRXctgie38TmCiJVH8DDwAXlYzdBXztXqa7Hp8I5rQHmF8ge6lWPEz0Ddn8DcBcfSxiPe/C9Jh2yJ7Vwnz3MntzfeY1Z06LShx10EWwpSV6H9S5c0acL0om2OXMbCD1JdY5xy7zibske7LkhauxUmeHcZ8qkb3ZBYDo0DwH+EmkxyLk35KsHZCp6BX31wjZfucvUSb2pDsnYkLsX5K/hnS0aCeNvyQiNB+UrIX/Ugc/
                                    nrCF85yD5+Jz6bg9weSPle3K/RK0aBWDKyR/lHzslA4zs5gdDOnMvUWCn0no4chJdLsVykUYMzbdeVTyHxUdaGd1ElttEYNWHYBntFo5COdPT6T8QmXN47XqmfVSaDabgt/Eu4x0zNMinFa0jMXuInN8UQ8tT0rBe+LZeZKK28T9MpG3RTyrNCfhg8wJPSeefafiWXEtVUnBBvGsbJ6EkAbcmKBwhiuyniYdYWWHpSsWK1z6NAl/6mFKmrFEnBHyMSIdlnjGosulRZMQ6ufZCQpnKx+bSIh01ZFyQjpmJfDaXJ+gIS+CuiAV+djqBN5q55c1z4ScFwmmZXE6BbcAf4i7NYG3VZzfpSMFhaYVnN2KoVTcKq41D2IREsDUlzAsL3L23PCLIs5R8a0yLMNal77nZATrxbc8rWEHYkCf+D+XOH6HZCri5GBz0YGYm6IEzHL19ZRbLgy5GjwlUnkMFqUoOUljrbTeQmothC6LyeZgYVnS6FPqRzIHmSv+uQKZc5Ip6p4UYVNMyA6FlRUvOVjgWj21cEoyOVcKLa6wsg5+Yal7IrHQ8bhWXDuTaiGcVyabinWxpa5vPhxQwR+Ly9WNrCi1r4UdrulnnFjMBA7FNh+q20Ex4XGVGmejLvwWOfJSF35Hxe1pRjvIb+FYjUG6tSr7XE/XotH2yBTHZN6u6hPv12QX12hqJzfoqlumPyq3CR2/7Qp9YQIjWlWrEVJhnJddb6yiI+BdpT1o7CO5LdOpmtgDbgXHVZ3d06DLmDZdye1wizShi6U99TaxDRdrR7z5vANcT/
                                    OwDHi9ateHdcVRF652zv9LQtumHvS4gGAvcVWjFC/WlUFFt0/9Tbp6a1UzfNSZU907MZXPhAAQTv9G3r5aar/f6R9o9t37VNfTD2Ummh3iVl9Pr2GaMEcmENKZijqGu9Ti6VVbqVNF1wz9Xq5nWyQbbq0qugXom84/DHi0K9H8tM6/cGz8r/7CUctMrEzeBnyoAmpEYXRcv4f0bJtkc+ueC+B8x78fHcKd4U6+1gAAAABJRU5ErkJggg=="/>
                            </div>
                            <span className="p-2 font-semibold text-primary">{user.email.split('@')[0]}</span>
                            </div></Link>
                            
                            
                            <Link to="/" className="mx-2">
                                <button type="button" onClick={handleClick} className="px-5 py-2 text-20 text-black-600 font-semibold rounded-full border border-black transition duration-1000 ease-in-out hover:text-white hover:bg-grey hover:border-black">Log Out</button>
                            </Link></>
                        )}
                        {!user && (
                        <><Link to="/login" className="navbar-brand">
                                <button type="button" className="px-5 py-2 text-20 text-black-600 font-semibold rounded-full border border-black transition duration-1000 ease-in-out hover:text-white hover:bg-grey hover:border-black">Log In</button>
                            </Link>
                            
                            <Link to="/signup" className="mx-2">
                                    <button type="button" className="px-5 py-2 text-20 text-white font-semibold rounded-full border focus:outline-none bg-primary">Sign Up</button>
                            </Link></>
                        )}
                        
                    </div>
                </div>
                
            </nav>

            <div className="flex items-center justify-center mx-auto bg-grey text-white text-lg">
                <Link to="/" className="navbar-brand hover:bg-primary p-2 px-6 rounded-full transition duration-200 ease-in-out">
                    Home
                </Link>
                <Link to="/about" className="navbar-brand hover:bg-primary p-2 px-6 rounded-full transition duration-200 ease-in-out">
                    Magazines
                </Link>
                <Link to="/services" className="navbar-brand hover:bg-primary p-2 px-6 rounded-full transition duration-200 ease-in-out">
                    Books
                </Link>
                <Link to="/contact" className="navbar-brand hover:bg-primary p-2 px-6 rounded-full transition duration-200 ease-in-out">
                    Audiobooks
                </Link>
                <Link to="/contact" className="navbar-brand hover:bg-primary p-2 px-6 rounded-full transition duration-200 ease-in-out">
                    Pages
                </Link>
                </div>

        </nav>
        
    );
}

export default HeaderPart;
