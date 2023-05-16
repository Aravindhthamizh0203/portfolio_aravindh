import React from 'react'
import hand from '../../Assets/hand.svg'
import call from '../../Assets/telephone.svg'
import mail from '../../Assets/mail.svg'
import github from '../../Assets/github1.svg'
import insta from '../../Assets/instagram.svg'
import './Contect.css'
function Contect() {
    return (
        <div><div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div>
                            <h2>Let's connect.</h2>
                            <h5>If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you.</h5>
                            <form>
                                <div className='form'>
                                    <label>NAME</label><br />
                                    <input type='text' name="NAME" placeholder='your name' required='true' /><br />
                                    <label>EMAIL</label><br />
                                    <input type='email' name="EMAIL" placeholder='e-mail' required='true' /><br />
                                    <label>MESSAGE</label><br />
                                    <textarea name='MESSAGE' type='textbox' placeholder='hi, leave opur message here' /><br /><br />
                                    <button type="submit" className='btn-outline-success'>Send =›
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className='col-md-6'><br />
                        <img src={hand} alt='hand LOGO' className='logo' />
                        <br />
                        <h6 className='hand'>Have a Good Day👍.</h6>
                        <div className='col-md-12'>
                            <a href="tel:+918940754439" className='loogs'><img src={call} alt='call LOGO' className='logo' />&nbsp;&nbsp;&nbsp;</a>
                            <a href="mailto: newaravindh0203@gmail.com" className='loogs'><img src={mail} alt='mail LOGO' className='logo' />&nbsp;&nbsp;&nbsp;</a>
                            <a href='https://github.com/Aravindhthamizh0203' className='loogs'><img src={github} alt='github LOGO' className='logo' /></a>&nbsp;&nbsp;&nbsp;
                            <a href="https://www.instagram.com/my_mom_call_me_thambi/" className='loogs'><img src={insta} alt='insta LOGO' className='logo' /></a>
                        </div><br /><br />
                        <div className='col-md-12'>
                            <span>Phone number&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;+91 8940754429</span>
                            <br />
                            <span>Email&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;newaravindh0203@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div></div><div>
                <footer>all copyrights are unclaimed.</footer></div>
        </div>
    )
}

export default Contect