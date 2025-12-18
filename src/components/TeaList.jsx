//iterate through teas, then make a teacard
import TeaCard from "./TeaCard"

export default function TeaList({ teas, props }) {

  return (
    <>
      {teas.map(t => (
        <TeaCard key={t.id} tea={t} />))}
    </>
  )
}