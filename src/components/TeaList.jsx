//iterate through teas, then make a teacard
import TeaCard from "./TeaCard"

export default function TeaList({ teas, props }) {

  return (
    <div className="tea-container">
      {teas.map(t => (
        <TeaCard key={t.id} tea={t} />))}
    </div>
  )
}