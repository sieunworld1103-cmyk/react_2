import React from 'react'

const skillText=[
  {
    title:"꿈을 설계하고 디자인하다.",
    desc:"나는 공간을 만드는 것을 매우 좋아한다. 그 공간을 web에서 만드는 것에 매우 흥미를 느끼고 있으며 그 영역을 만들어가는 것에 대한 여러가지 블럭을 만들어서 채워나갈 것이다."
  },
  {
    title:"꿈을 설계하고 디자인하다.",
    desc:"나는 공간을 만드는 것을 매우 좋아한다. 그 공간을 web에서 만드는 것에 매우 흥미를 느끼고 있으며 그 영역을 만들어가는 것에 대한 여러가지 블럭을 만들어서 채워나갈 것이다."
  },
  {
    title:"나의 정직함을 보여주고 싶다.",
    desc:"나는 공간을 만드는 것을 매우 좋아한다. 그 공간을 web에서 만드는 것에 매우 흥미를 느끼고 있으며 그 영역을 만들어가는 것에 대한 여러가지 블럭을 만들어서 채워나갈 것이다."
  },
  {
    title:"나의 열정은 매우 크고 아름답다.",
    desc:"나는 공간을 만드는 것을 매우 좋아한다. 그 공간을 web에서 만드는 것에 매우 흥미를 느끼고 있으며 그 영역을 만들어가는 것에 대한 여러가지 블럭을 만들어서 채워나갈 것이다."
  },
]

const Skill = () => {
  return (
    <section id='skill'>
      <div className="skill_inner">
        <h2 className='skill_title'>
          Challenge <em>나의 도전</em>
        </h2>
        <div className="skill_desc">

          {
            skillText.map((skill,key)=>(
              <div key={key}>
                <span>{key + 1}</span>
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
              </div>
            ))
          }
          
      </div>
      </div>
    </section>
  )
}

export default Skill