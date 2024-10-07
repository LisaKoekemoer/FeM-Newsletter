import React, { useRef, useState } from 'react'
import imgList from '../images/icon-list.svg';
import illustrationDesktop from '../images/illustration-sign-up-desktop.svg';
import illustrationMobile from '../images/illustration-sign-up-mobile.svg';
import success from '../images/icon-success.svg';

const NewsletterForm = () => {
    const [errorEmail, setErrorEmail] = useState("");
    const [isActiveError, setIsActiveError] = useState(false);
    const [showState, setShowState] = useState(false);
    const inputRefEmail = useRef(null);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const switchToSignUp = ()  => {
       setShowState(false)
    }

    const currentEmailValue = () => {
        return inputRefEmail.current.value;
    }

    const submitEmail = (event) => {
        event.preventDefault();

        if(inputRefEmail.current.value === "" || !isValidEmail(inputRefEmail.current.value)) {
            setErrorEmail("Valid email required");
            setIsActiveError(true);
            setShowState(false);
        } else {
            setErrorEmail("");
            setIsActiveError(false);
            setShowState(true);
        }
    }

    const thankState = () => {
        return(
            <div className='success-container'>
                <img src={success} alt="" />
                <h1>Thanks for subscribing!</h1>
                <p>A confirmation email has been sent to <strong>{currentEmailValue()}</strong>. 
                Please open it and click the button inside to confirm your 
                subscription.</p>
                <button onClick={switchToSignUp}>Dismiss message</button>
            </div>
        )
    }

    const signupState = () => {
        return (
            <div className='newspaper-container'>
            <div className='newspaper-content'>
                <h1>Stay updated!</h1>
                <p className='intro-par'>Join 60,000+ product managers receiving monthly
                   updates on: 
                </p>
                <div className='updates'>
                    <div>
                        <img src={imgList} alt="" />
                        <p>Product discovery and building what matters</p>
                    </div>
                    <div>
                        <img src={imgList} alt="" />
                        <p>Measuring to ensure updates are a success</p>
                    </div>
                    <div>
                        <img src={imgList} alt="" />
                        <p>And much more!</p>
                    </div>
                </div>
                <div className='email-container'>
                    <label htmlFor="email" ref={inputRefEmail}>Email Address</label>
                    <div className='error-state'>{errorEmail}</div>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder='email@company.com' 
                        ref={inputRefEmail}
                        style={{
                            borderColor : isActiveError ? "hsl(4, 100%, 67%)" : "",
                            backgroundColor: isActiveError ? "hsla(4, 100%, 67%, 0.2)" : "",
                            color: isActiveError ? "hsl(4, 100%, 67%)" : "",
                        }}
                    />
                </div>
                <button onClick={submitEmail} type="submit">
                    Subscribe to monthly newsletter
                </button>
            </div>
            <div className='newspaper-Image'>
                <source media="(max-width: 950px)" srcset={illustrationMobile} />
                <img src={illustrationDesktop} alt="" />
            </div>
        </div>
        )
    }

  return (
    <>
        { showState ? <div>{thankState()}</div> : <div>{signupState()}</div> }
    </>
  )
}

export default NewsletterForm