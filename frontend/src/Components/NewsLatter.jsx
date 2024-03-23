import {Fragment} from 'react';
import "./Footer.css"

const NewsLatter = () => {
  return (
    <Fragment>
      <main className="newsletter-component">
        <h1 className="heading-newsletter-component">Subscribe to our newsletter</h1>
        <div className="input-container-letter">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Email Address'/>
            <button className='subscribe'>Subscribe Now</button>
        </div>
      </main>
    </Fragment>
  )
}

export default NewsLatter
