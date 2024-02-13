import {useState} from "react"

const useClickedState = () => {
    
  interface MyState {
    [key: string]: boolean;
  }

  const [isClickedState, setClickedState] = useState<MyState>({
    isAboutClicked: false,
    isProjectsClicked: false,
    isContactClicked: false
  })

  const handleClickedState = (itemClicked: string) => {
    setClickedState(prevState => {
      const updatedState: MyState = {...prevState}
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