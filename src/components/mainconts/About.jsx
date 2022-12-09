import React, { useEffect, useRef } from 'react'
import Hole from '../../utils/Hole'

const About = () => {
    const holeOneref = useRef(null)
    const holeTworef = useRef(null)
    useEffect(() => {
        const holeOne = new Hole('', holeOneref.current, 0xfb0692)
        const holeTwo = new Hole('', holeTworef.current, 0x07d36e)
    }, [])

    return (
        // onLoad={handleFocus}
        <section className="about">
            <div className="second__container">
                <article className="bulidUp">
                    <div className="bulidUp__info">
                        <h2>
                            <span>build Up</span> Developer
                        </h2>
                        <p>
                            안녕하세요. 프론트엔드를 꿈꾸는 이중호 입니다.
                            <br />
                            저의 포트폴리오에 오신 것을 환영합니다. 부족한 디자인을 보완하려
                            <br />
                            웹반응형UI/UX 웹 퍼블리셔과정을 배우게 되었는데 웹페이지에서 동적인
                            <br />
                            것을 구현할 수 있는 프론트엔드 개발에 점차 흥미를 느끼게 됐습니다.
                            <br />
                        </p>
                    </div>
                    <div className="holebox1 hole" ref={holeOneref}></div>
                </article>

                <img className="profile" src="/assets/img/profile.png" alt="profile" />
                <article className="skillUp">
                    <div className="skillUp__info">
                        <h2>
                            <span>Skill Up</span> Developer
                        </h2>
                        <h3 className="skillUp__info__subtit">Languages</h3>
                        <p className="skillUp__info__lang">html5, css3, Javascript, J-Query, PHP, My-SQL</p>
                        <p className="skillUp__info__desc">
                            안녕하세요. 프론트엔드를 꿈꾸는 이중호 입니다.
                            <br />
                            저의 포트폴리오에 오신 것을 환영합니다. 부족한 디자인을 보완하려
                            <br />
                            웹반응형UI/UX 웹 퍼블리셔과정을 배우게 되었는데 웹페이지에서 동적인
                            <br />
                            것을 구현할 수 있는 프론트엔드 개발에 점차 흥미를 느끼게 됐습니다.
                            <br />
                        </p>
                        <a href="https://github.com/hmm365" target="_blank">
                            Go Github
                        </a>
                    </div>
                    <div className="holebox2 hole" ref={holeTworef}></div>
                </article>
            </div>
        </section>
    )
}

export default About
