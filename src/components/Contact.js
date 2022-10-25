import React, { useState } from 'react'

import emailjs from 'emailjs-com';
import { content } from '../content';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Contact = () => {
  // create a .env file and define ur env vars
  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } = process.env

  const [formData, setFormData] = useState({})

  const [ response, setResponse ] = useState({})

  const [alertConfig, setAlertConfig] = useState({}) 

  function sendEmail() {
    if(response.loading || !formData.sender || !formData.message || !formData.message.length > 2 || !formData.sender.length>10)
      return

    setResponse({ loading: true })

    emailjs.send(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, formData, REACT_APP_USER_ID)
    .then(result => {
      setResponse({loading: false})
      setFormData({})
      setAlertConfig({ show: true, message: 'Email sent', bgClass:'bg-green-500 text-white' })
      hideAlert()
    }, error => {
      setResponse({loading: false, error})
      setAlertConfig({ show: true, message: 'Oops ... Could not email!', bgClass:'bg-red-500 text-white' })
      console.error(`Error while sending email ${error.message}`)
    }).finally(()=> hideAlert())
  }


  const hideAlert= () => {
    setTimeout(() => setAlertConfig({}), 2500)
  }

  return(
    <div className="bg-gray-200 md:pt-7 pb-3">
      <div className="h-auto w-full md:w-6/12 px-2 md:mt-0  mx-auto flex flex-col justify-center" id="contact">
        <h1 className="md:text-5xl text-3xl font-mono text-green-600 my-5 text-center">Contact Me</h1>
        <input 
          type="email"
          placeholder="Your email here" 
          className="p-2 shadow-2xl ring-1 ring-green-500 rounded"
          onChange={e => setFormData({...formData, sender: e.target.value})}
        />
        <textarea 
          type="text"
          placeholder="Message for me" 
          className="px-2 mt-3 mb-4 shadow-2xl ring-1 ring-green-500 rounded"
          onChange={e => setFormData({...formData, message: e.target.value})}
        >
        </textarea>
        <button 
          onClick={sendEmail}
          className="ring-2 ring-green-600 py-3 rounded px-10 text-green-600 hover:bg-green-600 hover:text-white mt-2 mb-1"
        >
          { response.loading && !response.error ? 'Sending...' : 'Send' }
        </button>

        {
          alertConfig.show &&
          <p className={`p-1 py-2 text-center my-3 rounded ${alertConfig.bgClass}`}>{ alertConfig.message }</p>
        }

        <div className="flex justify-center items-center mt-5">
          {
            content.socialLinks.map(link => <LazyLoadImage
              onClick={() => window.open(link.url)}
              src={link.imgUrl}
              alt={link.name}
              key={link.name}
              effect="blur"
              className="mx-5"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact 
// 3329