import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";

import port_img1 from "../assets/img/port_1.png";
import port_img2 from "../assets/img/port_2.png";
import port_img3 from "../assets/img/port_3.png";
import port_img4 from "../assets/img/port_4.png";
import port_img5 from "../assets/img/port_5.png";
import port_img6 from "../assets/img/port_6.png";

const PortText=[
    {
        code : "/",
        img : port_img1,
        alt : "포트폴리오 이미지1",
        title : "1차 포트폴리오_주제",
        desc : " 1차 포트폴리오의 디자인과 와이어프레임을 토대로 해서 웹페이지를 만들었으며, 가로 모드 액션을 주어서 모든 작품을 보여줄 예정입니다.",
        view : "/",
    },
    {
        code : "/",
        img : port_img2,
        alt : "포트폴리오 이미지2",
        title : "2차 포트폴리오_주제",
        desc : " 2차 포트폴리오의 디자인과 와이어프레임을 토대로 해서 웹페이지를 만들었으며, 가로 모드 액션을 주어서 모든 작품을 보여줄 예정입니다.",
        view : "/",
    },
    {
        code : "/",
        img : port_img3,
        alt : "포트폴리오 이미지3",
        title : "3차 포트폴리오_주제",
        desc : " 3차 포트폴리오의 디자인과 와이어프레임을 토대로 해서 웹페이지를 만들었으며, 가로 모드 액션을 주어서 모든 작품을 보여줄 예정입니다.",
        view : "/",
    },
    {
        code : "/",
        img : port_img4,
        alt : "포트폴리오 이미지4",
        title : "4차 포트폴리오_주제",
        desc : " 4차 포트폴리오의 디자인과 와이어프레임을 토대로 해서 웹페이지를 만들었으며, 가로 모드 액션을 주어서 모든 작품을 보여줄 예정입니다.",
        view : "/",
    },
    {
        code : "/",
        img : port_img5,
        alt : "포트폴리오 이미지5",
        title : "5차 포트폴리오_주제",
        desc : " 5차 포트폴리오의 디자인과 와이어프레임을 토대로 해서 웹페이지를 만들었으며, 가로 모드 액션을 주어서 모든 작품을 보여줄 예정입니다.",
        view : "/",
    },
    {
        code : "/",
        img : port_img6,
        alt : "포트폴리오 이미지6",
        title : "6차 포트폴리오_주제",
        desc : " 6차 포트폴리오의 디자인과 와이어프레임을 토대로 해서 웹페이지를 만들었으며, 가로 모드 액션을 주어서 모든 작품을 보여줄 예정입니다.",
        view : "/",
    },
     {
        code : "/",
        img : port_img6,
        alt : "포트폴리오 이미지6",
        title : "6차 포트폴리오_주제",
        desc : " 6차 포트폴리오의 디자인과 와이어프레임을 토대로 해서 웹페이지를 만들었으며, 가로 모드 액션을 주어서 모든 작품을 보여줄 예정입니다.",
        view : "/",
    },
]

const Port = () => {

    const horizontalRef = useRef(null);    
    const sectionsRef = useRef([]);

    //horizontalRef라는 변수를 생성하고 useRef훅으로 초기화하라는 명령어
    //sectionsRef라는 변수를 생성하고 useRef훅으로 배열값으로 초기화하라는 명령어
    //useRef() :react에서 변화는 값을 저장하는 명령어
    //useRef(null) : 빈상태의 값을 저장하라는 명령어
    //useRef([]) : 배열값을 저장하라는 명령어
    //useRef(0) : 숫자을 저장하라는 명령어

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        const horizontal = horizontalRef.current;
        // .current : useRef 객체의 프로퍼티 (속성):실제로 참조하고 있는 값
        const sections = sectionsRef.current;

        let scrollTween = gsap.to(sections,{
        xPercent:-120*(sections.length - 1),
        ease:"none",

        scrollTrigger:{
            // scrollTrigger : 를 시작하겠다
            trigger : horizontal,
            start :"top 55px",
            end : "+=3000",
            pin :true,
            scrub : 1,
        },
    });
        return ()=>{
            scrollTween.kill();
            // 함수 scrollTween을 멈춰라
        }
    },[]);
    // ,[] : 처음 한번만 실행하고 끝내라는 명령어


    return (
        <section id='port' ref={horizontalRef}>
            <div className="port_inner">
                <div className="port_title">
                    portfolio <em>작품들</em>
                </div>
                <div className="port_wrap">
                    {PortText.map((port, key)=>(
                        <div
                            className={`port_item p${key+1}`}
                            key={key}
                            ref={(el)=>(sectionsRef.current[key]=el)}
                        >
                            <span className='num'>0{key+1}.</span>
                            <a href={port.code} className='img'>
                                <img src={port.img} alt={port.alt} />
                            </a>
                            <h3 className='title'>{port.title}</h3>
                            <p className='desc'>{port.desc}</p>
                            <a href={port.view} className='site' target='_blank' rel='noreferrer'>사이트 보기</a>
                        </div>
                    ))}

                    
                </div>
            </div>
        </section>
    )
}

export default Port