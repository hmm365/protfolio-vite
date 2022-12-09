import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="second__container">
                <div className="footer__info">
                    <h2>
                        <button className="scrollUpmain">SYUMAY</button>
                    </h2>
                    <ul>
                        <li>
                            <span>About</span>
                            <ul className="scrollUpBtn">
                                <li>
                                    <button>Protfolio</button>
                                </li>
                                <li>
                                    <button>Bulid up</button>
                                </li>
                                <li>
                                    <button>Skill Up</button>
                                </li>
                                <li>
                                    <button>Project Work</button>
                                </li>
                                <li>
                                    <button>Study Work</button>
                                </li>
                                <li>
                                    <button>Growing</button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span>Connect</span>
                            <ul>
                                <li>이중호</li>

                                <li className="mb-20">LeeJungHo</li>

                                <li>
                                    <a href="mailto:happyham52@gmail.com">happyham52@gmail.com</a>
                                </li>
                                <li>
                                    <a href="https://syumay.tistory.com/">syumay.tistoty.com</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="footer_btn">
                    <a href="https://github.com/hmm365" target="_blank">
                        Github
                    </a>
                    <a href="https://syumay.tistory.com/" target="_blank">
                        Tistory
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
