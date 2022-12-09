import React from 'react'

const Example = ({ exampleClass }) => {
    return (
        <section className={`example ${exampleClass}`}>
            <div className="example__top">
                <span>
                    WEBSITE 😵‍💫 PHPSITE 🫥 REACTSITE 🥺 VUESITE 😵‍💫&nbsp;<span>WEBSITE 😵‍💫 PHPSITE 🫥 REACTSITE 🥺 VUESITE</span>
                </span>
            </div>
            <div className="example__midle">
                <span>
                    searchEffect 🥰 quizEffect 😅 mouseEffect 🥰&nbsp;<span>searchEffect 🥰 quizEffect 😅 mouseEffect</span>
                </span>
            </div>
            <div className="example__bottom">
                <span>
                    gameEffect 🥺 parallaxEffect 🤑 sliderEffect 🥺&nbsp;<span>gameEffect 🥺 parallaxEffect 🤑 sliderEffect</span>
                </span>
            </div>
        </section>
    )
}

export default Example
