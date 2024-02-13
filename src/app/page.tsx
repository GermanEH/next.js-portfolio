'use client'

import Header from './ui/Header'
import HeroText from "./ui/HeroText";
import Card from './ui/Card'
import CardsList from "./ui/CardsList";
import useClickedState from './hooks/useClickedState'

export default function Home() {

  const { isClickedState, handleClickedState } = useClickedState();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10">
      <Header/>
      <Card isClickedState={isClickedState}/>
      <HeroText/>
      <CardsList handleClickedState={handleClickedState} isClickedState={isClickedState} />
    </main>
  );
}
