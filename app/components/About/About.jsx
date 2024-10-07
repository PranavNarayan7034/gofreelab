import React from 'react'
import './About.scss'

const About = () => {
  return (
    <div className="about">
        <div className='first'>
          <div className="left">
              <img src="./about.jpg" alt="" />
          </div>
          <div className="right">
              <div>
                <h1>About Us</h1>
                <p>Brightest minds in Software technologies</p>
              </div>
              <div>
                At <a href="/">Gofreelab</a>, we are a passionate team of innovators, problem solvers, and tech enthusiasts dedicated to transforming your ideas into high-performance digital solutions. Founded in 2016, we have become a trusted partner for companies of all sizes, helping them navigate the fast-paced world of technology and stay ahead in the digital landscape.
              </div>
              <div>
                With us you can create cutting-edge software that empowers businesses to succeed. We focus on delivering scalable, reliable, and custom solutions tailored to meet the unique needs of each client. Whether you're a startup looking to build a product from scratch or an enterprise aiming to modernize legacy systems, we're here to turn your vision into reality.
              </div>
          </div>
        </div>
        <div className="second">
            <h1>Why Choose Us?</h1>
            <div className="box">
                <div className="left">
                    <img src="./whyus.png" alt="" />
                </div>
                <div className="right"></div>
            </div>
        </div>
    </div>
  )
}

export default About



{/* <div>Experts having more than 20 years of experience</div>
            <p>Our team includes software technology specialists more than 20 years of experience.  We are excellent in Java and JavaScript related projects. </p>
            <div>We use frameworks where ever possible</div>
            <p>We use industry leading frameworks like Spring, AngularJS, Camel etc. to accelerate and cut down costs.</p>
         */}