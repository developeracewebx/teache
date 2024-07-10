import React, { useState, useEffect } from "react";
import Header from "../component/Header";

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = 7;

  useEffect(() => {
    setProgressBar(currentStep);
  }, [currentStep]);import React, { useState, useEffect } from "react";
import Header from "../component/Header";

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = 7;

  useEffect(() => {
    setProgressBar(currentStep);
  }, [currentStep]);

  const setProgressBar = (step) => {
    const percent = parseFloat((100 / steps) * step).toFixed();
    const progressBar = document.querySelector(".progress-bar");

    if (progressBar) {
      progressBar.style.width = `${percent}%`;
    }
  };

  const handleNext = () => {
    if (currentStep < steps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      {/* <header>
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <a href="#">
                <img src="/logo.png" alt="logo" />
              </a>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Download</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header> */}
       <Header/>
      <section className="instrutor-signup">
        <form id="msform">
          <div className="container">
            <ul id="progressbar">
              <li>Step 1</li>
              <li className="active">Step 2</li>
              <li>Step 3</li>
              <li>Step 4</li>
              <li>Step 5</li>
              <li>Step 6</li>
              <li>Step 7</li>
            </ul>
            {/* Conditionally render the progress bar */}
            {currentStep !== 1 && (
              <div className="progress" id="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            )}
           {currentStep === 1 && (
              <fieldset>
                <div className="form-card">
                  <h3>Create Account</h3>
                  <div className="form-fields">
                    <div className="half-field">
                      <div className="field">
                        <input type="text" placeholder="First name" />
                        <span className="field-icon">
                          <i className="fa-solid fa-user"></i>
                        </span>
                      </div>
                    </div>
                    <div className="half-field">
                      <div className="field">
                        <input type="text" placeholder="Last name" />
                        <span className="field-icon">
                          <i className="fa-solid fa-user"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-fields">
                    <div className="full-field">
                      <div className="field">
                        <input type="text" placeholder="Address" />
                        <span className="field-icon">
                          <i className="fa-solid fa-house"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-fields">
                    <div className="half-field">
                      <div className="field">
                        <input type="email" placeholder="Email" />
                        <span className="field-icon">
                          <i className="fa-solid fa-envelope"></i>
                        </span>
                      </div>
                    </div>
                    <div className="half-field">
                      <div className="field">
                        <input type="text" placeholder="Phone" />
                        <span className="field-icon">
                          <i className="fa-solid fa-phone"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-fields">
                    <div className="half-field">
                      <div className="field">
                        <input type="password" placeholder="Password" />
                        <span className="field-icon">
                          <i className="fa-solid fa-envelope"></i>
                        </span>
                        <span className="show-password">
                          <i className="fa-solid fa-eye"></i>
                        </span>
                      </div>
                    </div>
                    <div className="half-field">
                      <div className="field">
                        <input type="password" placeholder="Confirm password" />
                        <span className="field-icon">
                          <i className="fa-solid fa-phone"></i>
                        </span>
                        <span className="show-password">
                          <i className="fa-solid fa-eye"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-button">
                    <input
                      type="button"
                      name="next"
                      className="next action-button"
                      value="Create Account1"
                      onClick={handleNext}
                    />
                  </div>
                </div>
                <div className="phone-image">
                  <img src="/iPhone-15-Pro-7.png" alt="iPhone-15-Pro-7" />
                </div>
              </fieldset>
            )}
            {currentStep === 2 && (
              <fieldset>
                <div className='step-count'>Step 2 of 7</div>
                <div className="steps-container">
                  <div className="form-card">
                    <div className="back-button">
                      <input
                        type="button"
                        name="previous"
                        className="previous action-button-previous"
                        onClick={handlePrevious}
                      />
                      <i class="fa-solid fa-angle-left"></i>
                    </div>
                    <h3>Class Listing</h3>
                    <div className="profile-fields">
                      <p>Provide a photo that clearly shows your face</p>
                      <div className="profile-image">
                        <img src="/profile.png" alt="profile" />
                        <button>Edit photo</button>
                      </div>
                      <div className="upload-image">
                        <div className="file-field">
                          <input type="file" />
                          <span>
                            <i class="fa-solid fa-camera-retro"></i>Upload your
                            photo
                          </span>
                        </div>
                        <div className="file-type">
                          Max. size – 2MB
                          <br />
                          JPG or PNG formats
                        </div>
                      </div>
                    </div>
                    <div className="form-fields">
                      <div className="half-field">
                        <label>What are you teaching?</label>
                        <div className="field">
                          <input type="text" placeholder="First name" />
                          <span className="field-icon">
                            <i className="fa-solid fa-user"></i>
                          </span>
                        </div>
                      </div>
                      <div className="half-field">
                        <label>Where are you teaching it?</label>
                        <div className="field">
                          <input type="text" placeholder="Last name" />
                          <span className="field-icon">
                            <i className="fa-solid fa-user"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="form-fields">
                      <div className="full-field">
                        <label>
                          What is your class going to be focus on? <br />
                          I.E. If your type of class is cooking here you can put
                          Pasta Making
                        </label>
                        <div className="field no-icon">
                          <input
                            type="text"
                            placeholder="Be specific and concise on what you are teaching"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-fields">
                      <div className="full-field">
                        <label>Where do you teach the class?</label>
                        <div className="field no-icon">
                          <input
                            type="text"
                            placeholder="Describe where the class takes place. Apartment, studio, public park, etc"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-button">
                      <input
                        type="button"
                        name="next"
                        className="next action-button"
                        value="Next Step"
                        onClick={handleNext}
                      />
                    </div>
                  </div>
                </div>
              </fieldset>
            )}
            {currentStep === 3 && (
              <fieldset>
                <div className='step-count'>Step 3 of 7</div>
                <div className="steps-container">
                  <div className="form-card">
                    <div className="back-button">
                      <input
                        type="button"
                        name="previous"
                        className="previous action-button-previous"
                        onClick={handlePrevious}
                      />
                      <i class="fa-solid fa-angle-left"></i>
                    </div>
                    <h3>Class Listing</h3>

                    <div className="form-fields">
                      <div className="full-field">
                        <label>
                          Tell user about your experience on the subject
                        </label>
                        <div className="field">
                          <textarea placeholder="Let users know about your experience on the subject, including how long you have been practicing and teaching. Include any certification or specific level achieved if applicable "></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="form-fields">
                      <div className="full-field">
                        <label>
                          What students should expect on your class?
                        </label>
                        <div className="field">
                          <textarea placeholder="Let users know about your experience on the subject, including how long you have been practicing and teaching. Include any certification or specific level achieved if applicable "></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="form-fields">
                      <div className="full-field">
                        <label>What level of student are you teaching?</label>
                        <div className="radio-field">
                          <div className="radio-collunm">
                            <input type="radio" name="level" />
                            <span>Beginner</span>
                          </div>
                          <div className="radio-collunm">
                            <input type="radio" name="level" />
                            <span>Experienced</span>
                          </div>
                          <div className="radio-collunm">
                            <input type="radio" name="level" />
                            <span>Expert</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-fields">
                      <div className="full-field">
                        <label>
                          What participants need to have to take your class?
                        </label>
                        <div className="field">
                          <textarea placeholder="What is required for the participants to have for the class, i.e. specific wardrobe, shoes, special equipment, memberships, etc. Also provide information on the equipment you will bring to the class"></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="form-button">
                      <input
                        type="button"
                        name="next"
                        className="next action-button"
                        value="Next Step"
                        onClick={handleNext}
                      />
                    </div>
                  </div>
                </div>
              </fieldset>
            )}
            {currentStep === 4 && (
              <fieldset>
                <div className='step-count'>Step 4 of 7</div>
                <div className="steps-container">
                  <div className="form-card">
                    <div className="back-button">
                      <input
                        type="button"
                        name="previous"
                        className="previous action-button-previous"
                        onClick={handlePrevious}
                      />
                      <i class="fa-solid fa-angle-left"></i>
                    </div>
                    <h3>Type & Price</h3>
                    <div className="divied-container">
                      <div className="divied-left">
                        <div className="form-fields">
                          <div className="full-field">
                            <label>What class do you offer</label>
                            <div className="field no-icon">
                              <select>
                                <option>Private and group classes</option>
                                <option>Group classes</option>
                                <option>Private classes</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-fields">
                          <div className="half-field">
                            <label>
                              Set limit of participants for a group class
                            </label>
                            <div className="field">
                              <input type="email" />
                              <span className="field-icon">
                                <i class="fa-solid fa-user"></i>
                              </span>
                            </div>
                          </div>
                          <div className="half-field">
                            <label>
                              Set limit of participants for a private class
                            </label>
                            <div className="field">
                              <input type="text" />
                              <span className="field-icon">
                                <i class="fa-solid fa-user"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="form-fields">
                          <div className="half-field">
                            <label>Price per group class</label>
                            <div className="field">
                              <input type="text" value="130" />
                              <span className="field-icon">
                                <i class="fa-solid fa-dollar-sign"></i>
                              </span>
                            </div>
                          </div>
                          <div className="half-field">
                            <label>Your estimated earnings</label>
                            <div className="field earning">
                              <div className="earning-value">
                                130<i class="fa-solid fa-question"></i>
                              </div>
                              <span className="field-icon">
                                <i class="fa-solid fa-dollar-sign"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="form-fields">
                          <div className="half-field">
                            <label>price per private class</label>
                            <div className="field">
                              <input type="text" value="130" />
                              <span className="field-icon">
                                <i class="fa-solid fa-dollar-sign"></i>
                              </span>
                            </div>
                          </div>
                          <div className="half-field">
                            <label>Your estimated earnings</label>
                            <div className="field earning">
                              <div className="earning-value">
                                130<i class="fa-solid fa-question"></i>
                              </div>
                              <span className="field-icon">
                                <i class="fa-solid fa-dollar-sign"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="form-button">
                          <input
                            type="button"
                            name="next"
                            className="next action-button"
                            value="Next Step"
                            onClick={handleNext}
                          />
                        </div>
                      </div>
                      <div className="divied-image">
                        <img src="/iPhone-15-Pro-5.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            )}
            {currentStep === 5 && (
              <fieldset>
              <div className='step-count'>Step 5 of 7</div>
              <div className='steps-container'>
                  <div className="form-card">
                      <div className='back-button'>
                          <input type="button" name="previous" className="previous action-button-previous"  onClick={handlePrevious} />
                          <i class="fa-solid fa-angle-left"></i>
                      </div>
                      <div className='divied-container'>
                          <div className='half-left'>
                              <h3>Cancellation policy</h3>
                              <div className="form-fields">
                                  <div className="full-field">
                                      <label>Cancellation Policy - Specify refund for clients who cancel class</label>
                                      <div className='policy-fields'>
                                          <div className='select-field'>
                                              <select>
                                                  <option>On the day</option>
                                                  <option>Group classes</option>
                                                  <option>Private classes</option>
                                              </select>
                                          </div>
                                          <div className='input-field'>
                                              <input type='text' placeholder='of payment' />
                                              <span className="field-icon"><i class="fa-solid fa-percent"></i></span>
                                          </div>
                                      </div>
                                      <div className='policy-fields'>
                                          <div className='select-field'>
                                              <select>
                                                  <option>Week before</option>
                                                  <option>Group classes</option>
                                                  <option>Private classes</option>
                                              </select>
                                          </div>
                                          <div className='input-field'>
                                              <input type='text' value='60' />
                                              <span className="field-icon"><i class="fa-solid fa-percent"></i></span>
                                          </div>
                                      </div>
                                      <div className='policy-fields'>
                                          <div className='select-field'>
                                              <select>
                                                  <option>2 days before</option>
                                                  <option>Group classes</option>
                                                  <option>Private classes</option>
                                              </select>
                                          </div>
                                          <div className='input-field'>
                                              <input type='text' value='30' />
                                              <span className="field-icon"><i class="fa-solid fa-percent"></i></span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className='half-right'>
                              <h3>Cancellation policy</h3>
                              <div className="form-fields">
                                  <div className="full-field">
                                      <label>What is your Discount policy for group classes</label>
                                      <div className='policy-fields'>
                                          <div className='select-field'>
                                              <select>
                                                  <option>First class</option>
                                                  <option>Group classes</option>
                                                  <option>Private classes</option>
                                              </select>
                                          </div>
                                          <div className='input-field'>
                                              <input type='text' placeholder='of payment' />
                                              <span className="field-icon"><i class="fa-solid fa-percent"></i></span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="full-field">
                                      <label>What is your Discount policy for private classes</label>
                                      <div className='policy-fields'>
                                          <div className='select-field'>
                                              <select>
                                                  <option>4 classes</option>
                                                  <option>Group classes</option>
                                                  <option>Private classes</option>
                                              </select>
                                          </div>
                                          <div className='input-field'>
                                              <input type='text' placeholder='of payment' />
                                              <span className="field-icon"><i class="fa-solid fa-percent"></i></span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="form-button">
                          <input type="button" name="next" className="next action-button" value="Next Step" onClick={handleNext} />
                      </div>
                  </div>
              </div>
          </fieldset>
            )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default Signup;

  const setProgressBar = (step) => {
    const percent = parseFloat((100 / steps) * step).toFixed();
    const progressBar = document.querySelector(".progress-bar");

    if (progressBar) {
      progressBar.style.width = `${percent}%`;
    }
  };

  const handleNext = () => {
    if (currentStep < steps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      {/* <header>
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <a href="#">
                <img src="/logo.png" alt="logo" />
              </a>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Download</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header> */}
       <Header/>
      <section className="instrutor-signup">
        <form id="msform">
          <div className="container">
            <ul id="progressbar">
              <li>Step 1</li>
              <li className="active">Step 2</li>
              <li>Step 3</li>
              <li>Step 4</li>
              <li>Step 5</li>
              <li>Step 6</li>
              <li>Step 7</li>
            </ul>
            {/* Conditionally render the progress bar */}
            {currentStep !== 1 && (
              <div className="progress" id="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            )}
           {currentStep === 1 && (
              <fieldset>
                <div className="form-card">
                  <h3>Create Account</h3>
                  <div className="form-fields">
                    <div className="half-field">
                      <div className="field">
                        <input type="text" placeholder="First name" />
                        <span className="field-icon">
                          <i className="fa-solid fa-user"></i>
                        </span>
                      </div>
                    </div>
                    <div className="half-field">
                      <div className="field">
                        <input type="text" placeholder="Last name" />
                        <span className="field-icon">
                          <i className="fa-solid fa-user"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-fields">
                    <div className="full-field">
                      <div className="field">
                        <input type="text" placeholder="Address" />
                        <span className="field-icon">
                          <i className="fa-solid fa-house"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-fields">
                    <div className="half-field">
                      <div className="field">
                        <input type="email" placeholder="Email" />
                        <span className="field-icon">
                          <i className="fa-solid fa-envelope"></i>
                        </span>
                      </div>
                    </div>
                    <div className="half-field">
                      <div className="field">
                        <input type="text" placeholder="Phone" />
                        <span className="field-icon">
                          <i className="fa-solid fa-phone"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-fields">
                    <div className="half-field">
                      <div className="field">
                        <input type="password" placeholder="Password" />
                        <span className="field-icon">
                          <i className="fa-solid fa-envelope"></i>
                        </span>
                        <span className="show-password">
                          <i className="fa-solid fa-eye"></i>
                        </span>
                      </div>
                    </div>
                    <div className="half-field">
                      <div className="field">
                        <input type="password" placeholder="Confirm password" />
                        <span className="field-icon">
                          <i className="fa-solid fa-phone"></i>
                        </span>
                        <span className="show-password">
                          <i className="fa-solid fa-eye"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-button">
                    <input
                      type="button"
                      name="next"
                      className="next action-button"
                      value="Create Account"
                      onClick={handleNext}
                    />
                  </div>
                </div>
                <div className="phone-image">
                  <img src="/iPhone-15-Pro-7.png" alt="iPhone-15-Pro-7" />
                </div>
              </fieldset>
            )}
            {currentStep === 2 && (
              <fieldset>
                <div className='step-count'>Step 2 of 7</div>
                <div className="steps-container">
                  <div className="form-card">
                    <div className="back-button">
                      <input
                        type="button"
                        name="previous"
                        className="previous action-button-previous"
                        onClick={handlePrevious}
                      />
                      <i class="fa-solid fa-angle-left"></i>
                    </div>
                    <h3>Class Listing</h3>
                    <div className="profile-fields">
                      <p>Provide a photo that clearly shows your face</p>
                      <div className="profile-image">
                        <img src="/profile.png" alt="profile" />
                        <button>Edit photo</button>
                      </div>
                      <div className="upload-image">
                        <div className="file-field">
                          <input type="file" />
                          <span>
                            <i class="fa-solid fa-camera-retro"></i>Upload your
                            photo
                          </span>
                        </div>
                        <div className="file-type">
                          Max. size – 2MB
                          <br />
                          JPG or PNG formats
                        </div>
                      </div>
                    </div>
                    <div className="form-fields">
                      <div className="half-field">
                        <label>What are you teaching?</label>
                        <div className="field">
                          <input type="text" placeholder="First name" />
                          <span className="field-icon">
                            <i className="fa-solid fa-user"></i>
                          </span>
                        </div>
                      </div>
                      <div className="half-field">
                        <label>Where are you teaching it?</label>
                        <div className="field">
                          <input type="text" placeholder="Last name" />
                          <span className="field-icon">
                            <i className="fa-solid fa-user"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="form-fields">
                      <div className="full-field">
                        <label>
                          What is your class going to be focus on? <br />
                          I.E. If your type of class is cooking here you can put
                          Pasta Making
                        </label>
                        <div className="field no-icon">
                          <input
                            type="text"
                            placeholder="Be specific and concise on what you are teaching"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-fields">
                      <div className="full-field">
                        <label>Where do you teach the class?</label>
                        <div className="field no-icon">
                          <input
                            type="text"
                            placeholder="Describe where the class takes place. Apartment, studio, public park, etc"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-button">
                      <input
                        type="button"
                        name="next"
                        className="next action-button"
                        value="Next Step"
                        onClick={handleNext}
                      />
                    </div>
                  </div>
                </div>
              </fieldset>
            )}
            {currentStep === 3 && (
              <fieldset>
                <div className='step-count'>Step 3 of 7</div>
                <div className="steps-container">
                  <div className="form-card">
                    <div className="back-button">
                      <input
                        type="button"
                        name="previous"
                        className="previous action-button-previous"
                        onClick={handlePrevious}
                      />
                      <i class="fa-solid fa-angle-left"></i>
                    </div>
                    <h3>Class Listing</h3>

                    <div className="form-fields">
                      <div className="full-field">
                        <label>
                          Tell user about your experience on the subject
                        </label>
                        <div className="field">
                          <textarea placeholder="Let users know about your experience on the subject, including how long you have been practicing and teaching. Include any certification or specific level achieved if applicable "></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="form-fields">
                      <div className="full-field">
                        <label>
                          What students should expect on your class?
                        </label>
                        <div className="field">
                          <textarea placeholder="Let users know about your experience on the subject, including how long you have been practicing and teaching. Include any certification or specific level achieved if applicable "></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="form-fields">
                      <div className="full-field">
                        <label>What level of student are you teaching?</label>
                        <div className="radio-field">
                          <div className="radio-collunm">
                            <input type="radio" name="level" />
                            <span>Beginner</span>
                          </div>
                          <div className="radio-collunm">
                            <input type="radio" name="level" />
                            <span>Experienced</span>
                          </div>
                          <div className="radio-collunm">
                            <input type="radio" name="level" />
                            <span>Expert</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-fields">
                      <div className="full-field">
                        <label>
                          What participants need to have to take your class?
                        </label>
                        <div className="field">
                          <textarea placeholder="What is required for the participants to have for the class, i.e. specific wardrobe, shoes, special equipment, memberships, etc. Also provide information on the equipment you will bring to the class"></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="form-button">
                      <input
                        type="button"
                        name="next"
                        className="next action-button"
                        value="Next Step"
                        onClick={handleNext}
                      />
                    </div>
                  </div>
                </div>
              </fieldset>
            )}
            {currentStep === 4 && (
              <fieldset>
                <div className='step-count'>Step 4 of 7</div>
                <div className="steps-container">
                  <div className="form-card">
                    <div className="back-button">
                      <input
                        type="button"
                        name="previous"
                        className="previous action-button-previous"
                        onClick={handlePrevious}
                      />
                      <i class="fa-solid fa-angle-left"></i>
                    </div>
                    <h3>Type & Price</h3>
                    <div className="divied-container">
                      <div className="divied-left">
                        <div className="form-fields">
                          <div className="full-field">
                            <label>What class do you offer</label>
                            <div className="field no-icon">
                              <select>
                                <option>Private and group classes</option>
                                <option>Group classes</option>
                                <option>Private classes</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-fields">
                          <div className="half-field">
                            <label>
                              Set limit of participants for a group class
                            </label>
                            <div className="field">
                              <input type="email" />
                              <span className="field-icon">
                                <i class="fa-solid fa-user"></i>
                              </span>
                            </div>
                          </div>
                          <div className="half-field">
                            <label>
                              Set limit of participants for a private class
                            </label>
                            <div className="field">
                              <input type="text" />
                              <span className="field-icon">
                                <i class="fa-solid fa-user"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="form-fields">
                          <div className="half-field">
                            <label>Price per group class</label>
                            <div className="field">
                              <input type="text" value="130" />
                              <span className="field-icon">
                                <i class="fa-solid fa-dollar-sign"></i>
                              </span>
                            </div>
                          </div>
                          <div className="half-field">
                            <label>Your estimated earnings</label>
                            <div className="field earning">
                              <div className="earning-value">
                                130<i class="fa-solid fa-question"></i>
                              </div>
                              <span className="field-icon">
                                <i class="fa-solid fa-dollar-sign"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="form-fields">
                          <div className="half-field">
                            <label>price per private class</label>
                            <div className="field">
                              <input type="text" value="130" />
                              <span className="field-icon">
                                <i class="fa-solid fa-dollar-sign"></i>
                              </span>
                            </div>
                          </div>
                          <div className="half-field">
                            <label>Your estimated earnings</label>
                            <div className="field earning">
                              <div className="earning-value">
                                130<i class="fa-solid fa-question"></i>
                              </div>
                              <span className="field-icon">
                                <i class="fa-solid fa-dollar-sign"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="form-button">
                          <input
                            type="button"
                            name="next"
                            className="next action-button"
                            value="Next Step"
                            onClick={handleNext}
                          />
                        </div>
                      </div>
                      <div className="divied-image">
                        <img src="/iPhone-15-Pro-5.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            )}
            {currentStep === 5 && (
              <fieldset>
              <div className='step-count'>Step 5 of 7</div>
              <div className='steps-container'>
                  <div className="form-card">
                      <div className='back-button'>
                          <input type="button" name="previous" className="previous action-button-previous"  onClick={handlePrevious} />
                          <i class="fa-solid fa-angle-left"></i>
                      </div>
                      <div className='divied-container'>
                          <div className='half-left'>
                              <h3>Cancellation policy</h3>
                              <div className="form-fields">
                                  <div className="full-field">
                                      <label>Cancellation Policy - Specify refund for clients who cancel class</label>
                                      <div className='policy-fields'>
                                          <div className='select-field'>
                                              <select>
                                                  <option>On the day</option>
                                                  <option>Group classes</option>
                                                  <option>Private classes</option>
                                              </select>
                                          </div>
                                          <div className='input-field'>
                                              <input type='text' placeholder='of payment' />
                                              <span className="field-icon"><i class="fa-solid fa-percent"></i></span>
                                          </div>
                                      </div>
                                      <div className='policy-fields'>
                                          <div className='select-field'>
                                              <select>
                                                  <option>Week before</option>
                                                  <option>Group classes</option>
                                                  <option>Private classes</option>
                                              </select>
                                          </div>
                                          <div className='input-field'>
                                              <input type='text' value='60' />
                                              <span className="field-icon"><i class="fa-solid fa-percent"></i></span>
                                          </div>
                                      </div>
                                      <div className='policy-fields'>
                                          <div className='select-field'>
                                              <select>
                                                  <option>2 days before</option>
                                                  <option>Group classes</option>
                                                  <option>Private classes</option>
                                              </select>
                                          </div>
                                          <div className='input-field'>
                                              <input type='text' value='30' />
                                              <span className="field-icon"><i class="fa-solid fa-percent"></i></span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className='half-right'>
                              <h3>Cancellation policy</h3>
                              <div className="form-fields">
                                  <div className="full-field">
                                      <label>What is your Discount policy for group classes</label>
                                      <div className='policy-fields'>
                                          <div className='select-field'>
                                              <select>
                                                  <option>First class</option>
                                                  <option>Group classes</option>
                                                  <option>Private classes</option>
                                              </select>
                                          </div>
                                          <div className='input-field'>
                                              <input type='text' placeholder='of payment' />
                                              <span className="field-icon"><i class="fa-solid fa-percent"></i></span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="full-field">
                                      <label>What is your Discount policy for private classes</label>
                                      <div className='policy-fields'>
                                          <div className='select-field'>
                                              <select>
                                                  <option>4 classes</option>
                                                  <option>Group classes</option>
                                                  <option>Private classes</option>
                                              </select>
                                          </div>
                                          <div className='input-field'>
                                              <input type='text' placeholder='of payment' />
                                              <span className="field-icon"><i class="fa-solid fa-percent"></i></span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="form-button">
                          <input type="button" name="next" className="next action-button" value="Next Step" onClick={handleNext} />
                      </div>
                  </div>
              </div>
          </fieldset>
            )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default Signup;
