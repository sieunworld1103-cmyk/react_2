import React from 'react'

const siteText = [
    {
        text: ["make", "site compliant with", "SIEUN"],
        title: "1차 포폴",
        code: "https://www.naver.com/",
        view: "/",
        info: ["site coding", "제작 기간 : 3일", "프로그램 : html5, css3, javascript, react etc.."]
    },
    {
        text: ["make", "site compliant with", "SIEUN"],
        title: "2차 포폴",
        code: ".",
        view: "/",
        info: ["site coding", "제작 기간 : 2일", "프로그램 : html52, css32, javascript2, react2 etc.."]
    },
    {
        text: ["make", "site compliant with", "SIEUN"],
        title: "3차 포폴",
        code: ".",
        view: "/",
        info: ["site coding", "제작 기간 : 3일", "프로그램 : html53, css33, javascript3, react3 etc.."]
    },
    {
        text: ["make", "site compliant with", "SIEUN"],
        title: "4차 포폴",
        code: ".",
        view: "/",
        info: ["site coding", "제작 기간 : 4일", "프로그램 : html54, css34, javascript4, react4 etc.."]
    },
    {
        text: ["make", "site compliant with", "SIEUN"],
        title: "5차 포폴",
        code: ".",
        view: "/",
        info: ["site coding", "제작 기간 : 5일", "프로그램 : html55, css35, javascript5, react5 etc.."]
    },
    {
        text: ["make", "site compliant with", "SIEUN"],
        title: "5차 포폴",
        code: ".",
        view: "/",
        info: ["site coding", "제작 기간 : 5일", "프로그램 : html55, css35, javascript5, react5 etc.."]
    },
]

const Site = () => {
    return (
        <section className='site_inner'>
            <div className="site_title">
                site Conding <em>내 작품들</em>
            </div>
            <div className="site_wrap">

                {
                siteText.map((site,key) => (
                    <div className={`site_item s${key+1}`} key={key}>
                        <span className='num'>{key+1}.</span>
                        <div className="text">
                            <div>{site.text[0]}</div>
                            <div>{site.text[1]}</div>
                            <div>{site.text[2]}</div>
                        </div>
                        <h3 className='title'>{site.title}</h3>
                        <div className="btn">
                            <a href="{site.code}">code</a>
                            <a href="{site.view}">view</a>
                        </div>
                        <div className="info">
                            <span>{site.info[0]}</span>
                            <span>{site.info[1]}</span>
                            <span>{site.info[2]}</span>
                        </div>
                    </div>
                    ))
                }


            </div>
        </section>
    )
}

export default Site