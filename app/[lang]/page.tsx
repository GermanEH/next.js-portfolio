import Card from './components/Card'
import CardsList from "./components/CardsList";

export default async function Home({params}:{params: {lang :string}}) {

  const dictionary =  await import(`@/dictionaries/${params.lang}.json`).then(m => m.default)

  return (
    <>
        <Card dictionary={dictionary}/>
        <CardsList dictionary={dictionary} />
    </>
  );
}
