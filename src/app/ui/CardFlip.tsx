import { useState } from 'react'
import { motion } from 'framer-motion'

const CardFlip = (isClickedState: any, handleClickedState:any) => {

    const [ isFlipped, setIsFlipped ] = useState(false)
    const [ isAnimating, setIsAnimating ] = useState(false)

    const handleFlip = () => {
        if(!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }
  return (
    <div className="flip-card" onClick={handleFlip}>
        <motion.div
        className="flip-card-inner w-[100%] h-[100%]"
        initial={false}
        animate={{rotateY: isFlipped ? 180:360, translateY: isFlipped ? 50 : 0, translateX: isFlipped ? 365 : 0, scaleY: isFlipped ? 10 : 1, scaleX: isFlipped ? 4.5 : 1}}
        // transform': 'rotateY(180deg) scale(5) translateX(10%) translateY(-30%)
        //     // , rotateX: isFlipped ? -30:330}}
        transition={{duration: 0.2, animationDirection: "normal"}}
        onAnimationComplete={() => setIsAnimating(false)}>

        <a
          className={`flip-card-front group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 
          hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 backface-hidden
          `} onClick={() => handleClickedState('isAboutClicked')}
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About me{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about my academic background!
          </p>
        </a>

        <div className="flip-card-back max-w-5xl w-full font-mono lg:flex">
        <p className="text-4xl flex w-full justify-center lg:static lg:p-4 border rounded-lg border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-gray-700">
        &larr;
          About me
        </p>

      </div>
        </motion.div>
    </div>
  )
}

export default CardFlip