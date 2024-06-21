import React from 'react'
import Helmet from '../Components/Helmet'

export default function Contact() {
  return (
    <Helmet title={'Contacts'}>

    <div className='contact'>

      <div className="contactMap">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.3749647888512!2d72.56410877964649!3d23.083365725322363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8347731ff23b%3A0x9faca21e39ccf675!2sDwarkadhish%20Mandir!5e0!3m2!1sen!2sin!4v1718887307159!5m2!1sen!2sin" width="600" height="450" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
        title='location'></iframe>
      </div>


      <div className="contactForm clearfix">
        <div className="flex2 contactMsg">
          <p className='cmHeader'>Send us a Message</p>
          <p className='cmsub-head'>Aenean massa diam, viverra vitae luctus sed, gravida eget est. Etiam nec ipsum porttitor, consequat libero eu, dignissim eros. Nulla auctor lacinia enim id mollis.</p>

          <div className="ConBoxes">
            <form action="">
              <div className="conBox">
                <label htmlFor="name" className='cbLabel'>YOUR NAME:</label><br />
                <input type="text" name='name' className='cbInput'/>
              </div>
              <div className="conBox">
                <label htmlFor="email" className='cbLabel'>E-MAIL ADDRESS:</label><br />
                <input type="email" name='email' className='cbInput'/>
              </div>
              <div className="conBox">
                <label htmlFor="phone" className='cbLabel'>PHONE:</label><br />
                <input type="number" name='phone' className='cbInput'/>
              </div>
              <div className="conBox">
                <label htmlFor="sub" className='cbLabel'>SUBJECT:</label><br />
                <input type="text" name='sub' className='cbInput'/>
              </div>
              <div className="conBox">
                <label htmlFor="msg" className='cbLabel'>MESSAGE TEXT:</label><br />
                <textarea name='msg' className='cbTextarea'></textarea>
              </div>

              <button className='conboxBtn'>SEND MESSAGE</button>
            </form>
          </div>
        </div>

        <div className="flex1 contactInfo">
          <p className='ciHeader'>Contact Lafka<sup style={{fontSize:'10px'}}>TM</sup></p>

          <div className="cibox">
            <p className='ciboxInfo'>PO Box 16122 Collins Street West,<br />
              Melbourne, Victoria 8007 Australia <br />
              Phone: +61.3.8476.6487 <br />
              Email: order@pizza.con</p>
          </div>

          <div className="cihotelbox">
            <p className='cihbHead'>DINE IN HOURS</p>
            <div className='cihboxes'>
              <p>Mon.: 10:30am - 9pm</p>
              <p>Tue. - Sat.: 10:30am - 10pm</p>
              <p>Sun.: 12pm - 9pm</p>
            </div>
          </div>

          <div className="cihotelbox">
            <p className='cihbHead'>DELIVERY HOURS</p>
            <div className='cihboxes'>
              <p>Mon.: 10:30am - 9pm</p>
              <p>Tue. - Sat.: 10:30am - 10pm</p>
              <p>Sun.: 12pm - 9pm</p>
            </div>
          </div>

          <div className="cihotelbox">
            <p className='cihbHead'>TAKEOUT HOURS</p>
            <div className='cihboxes'>
              <p>Mon.: 10:30am - 9pm</p>
              <p>Tue. - Sat.: 10:30am - 10pm</p>
              <p>Sun.: 12pm - 9pm</p>
            </div>
          </div>

        </div>
      </div>

    </div>
    </Helmet>
  )
}
