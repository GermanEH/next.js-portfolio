'use client' 
import {useState} from "react"

export interface ClickedState {
  [key: string]: boolean;
}

export interface HandleClickedState {
  (itemClicked: keyof ClickedState): void;
}

const useClickedState = () => {
    
  const [isClickedState, setClickedState] = useState<ClickedState>({
    isAboutClicked: false,
    isProjectsClicked: false,
    isContactClicked: false
  })

  const handleClickedState = (itemClicked: string) => {
    setClickedState(prevState => {
      const updatedState: ClickedState = {...prevState}
      for (const key in prevState) {
        if(key === itemClicked) {
          updatedState[key] = !prevState[key]
           } else {
          updatedState[key] = false
        }
      }
      return updatedState
    })
    }
  return { isClickedState, handleClickedState}
}

export default useClickedState