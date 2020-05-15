import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import { Button } from 'reactstrap';



class Login extends Component {
constructor(props) {
    super(props);
    this.state = {  };
}

getOtp() {
     return ( <Redirect to={{
            pathname: '/Consultancy',
        }}
        />)
}

// redButton() {
//   return(
     
//                 (".profile-box").hide(1000)
//                 (".login-box").addClass("col-md-12")
//                 ("span.arrow-box.toggle-button").removeClass("toggle-button")
//                 ("span.arrow-box").addClass("toggle-button-rotate")
              
//   )
// }

render() {
  return (
    <body className="body">
    <div className="wrapper">
    
     <header className="header-style">
         <text className="header-title"> Teleconsultency </text>
     </header>
      <div className="container-fluid">
        <div className="row">
         

          <div className="col-md-7 col-sm-7 col-xs-12  profile-box">
            <div className="left-box">
              <div className="welcome-box">
                <p className="heading">
                   Welcome to the 
                    &nbsp;
                  <span className="bold">Dr. Salim Khans consultency</span>
                </p>
                <p>
                  We are on a mission to make quality healthcare affordable and accessible for a billion Indians. 
                  We empower people with the information and care that they can trust to make better 
                  healthcare decisions every day.
                </p>
              </div>

              <div className="profile-box">
                <div className="profile-section">
                  <div className="img-box">
                    <img  className="img-box"
                      src={require('../Assets/Images/doctor.jpg')} 
                    />
                  </div>
                  <div className="pro-description">
                    <p>
                      <span className="bold"> 
                        Dr. Salim Khan
                      </span>
                      <br/>
                      Opthymologist - Dinanath Mangeshkar hospital
                    </p>
                  </div>
                  <div className="timings">
                    <div className="small-img-box-pull-left">
                      <img className="grey-clock-style"
                          src={require('../Assets/Images/gray-clock.svg')} 
                      />
                    </div>
                    <p className="pull-left">
                        Mon - Sat 
                      <br/>
                      <span class="bold" > 
                        05:30 PM to 9:00 PM 
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="profile-box">
                <div className="pro-description">
                  <p>
                    <span className="bold">
                      Education and eperiance
                    </span>
                    <br/>
                      Ophthalmologist/ Eye Surgeon, 14 Years Experience Overall (14 years as specialist)
                  </p>
                </div>
              </div>

              <div className="profile-box">
                 <div className="pro-description">
                  <p>
                    <span className="bold">
                      Profile
                    </span>
                    <br/>
                    Dr. Salim Khan is a Ophthalmologist/ Eye Surgeon in Nagawara, Bangalore and has an
                     experience of 14 years in this field. Dr. Chethan Sadanand practices at Chethana Eye Care Centre 
                     in Nagawara, Bangalore. He completed MBBS from M S Ramaiah Medical College, 
                     Bangalore in 2002 and MS - Ophthalmology from Bangalore Medical College and Research Institute, 
                     Bangalore in 2006. He is a member of Karnataka Ophthalmic Society and Karnataka Medical Council.
                     Some of the services provided by the doctor are: 
                     Glaucoma Evaluation / Treatment,Diabetic Retinopathy Screening/ Treatment,LASIK Eye Surgery and
                      Phacoemulsification Surgery etc.
                  </p>
                </div>
              </div>
            </div>
          </div>

          
            <div className="col-md-5 col-sm-13 col-xs-12  ">
              <div  className="login-section text-center">
                <h1 className="main-heading">Patient Login</h1>
                <p>If you are already registered patient login with your register mobile number</p>
                {/* <form> */}
                  <div className="form-group">
                    <input type="text" name="phone number" className="std-input" placeholder="Enter Your Phone Number"/> 
                  </div>
                  <div className="form-group">
                    <a href="/Consultancy">
                        <button className="std-button" 
                            // onClick={this.getOtp.bind()}
                          >
                            GET OTP
                        </button>
                    </a>
                  </div>
                {/* </form> */}
                <hr/>
                <p>If you are not registered patient, please click on the 
                  &nbsp;
                  <b>Register</b>
                   &nbsp;
                  to register your number
                </p>
                <div className="form-group">
                  <a href="/Register">
                    <button className="std-button">Register</button>
                  </a>
                </div>
              </div>
              <span className="arrow-box toggle-button"  
              // onClick={this.redButton.bind()}
              ></span>

            </div>

          {/* <script type="text/javascript">
            (document).ready(function(){
              ("span.toggle-button").click(function()
              {
                (".profile-box").hide(1000);
                (".login-box").addClass("col-md-12");
                ("span.arrow-box.toggle-button").removeClass("toggle-button");
                ("span.arrow-box").addClass("toggle-button-rotate");
              })
            })
          </script> */}
        </div>
      </div>
      
    </div>
    </body>
  );
}
}

export default Login;