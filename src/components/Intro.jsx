import React from 'react'

import img_m from "../assets/img/img.png"
const inrtoText ={
  title:"MBC academy",
  desc:["talent is","found at the end of the","effort"]
}

const Intro = () => {
  return (
    <section id='intro'>
      <div className="intro_inner">
        <h1 className="intro_title">
          {inrtoText.title}
        </h1>
        <div className="intro_lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="intro_text">
          <div className="text">
            <div>{inrtoText.desc[0]}</div>
            <div>{inrtoText.desc[1]}</div>
            <div>{inrtoText.desc[2]}</div>
          </div>
          <div className="img">
            <img src={img_m} alt="메인이미지" />
          </div>
        </div>
        <div className="intro_lines bottom">
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

export default Intro