import React from 'react'

const contactText=[
  {
    link:"/",
    title:"KAKO:daifu",
  },{
    link:"mailto:sieunworld_@naver.com",
    title:"mailto:sieunworld_@naver.com",
  }
]

const Contact = () => {
  return (
    <section id='contact'>
      <div className="contact_inner">
        <div className="contact_title">Contact</div>
        <div className="contact_lines" aria-hidden="true">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="contact_text">
          <div className="text">
            {contactText.map((contact,key)=>(
              <div key={key}>
              <a href={contact.link} target='blank' rel='noreferrer'>{contact.title}</a>
            </div>
            ))}
          </div>
        </div>
        <div className="contact_lines bottom">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </section>
  )
}

export default Contact