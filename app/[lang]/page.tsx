'use client'

import Card from './components/Card'
import CardsList from "./components/CardsList";
import useClickedState from './hooks/useClickedState'

export default function Home() {

  const { isClickedState, handleClickedState } = useClickedState();
  return (
    <>
        <Card isClickedState={isClickedState}/>
        <CardsList handleClickedState={handleClickedState} isClickedState={isClickedState} />
    </>
  );
}
