'use client'

import Card from './ui/Card'
import CardsList from "./ui/CardsList";
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
