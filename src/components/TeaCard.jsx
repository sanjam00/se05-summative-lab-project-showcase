

export default function TeaCard({ tea, props }) {

  return (
    <div className="tea-card" data-testid="tea-card">
      <img src={tea.image} />
      <h3>{tea.name}</h3>
      <p>Flavor Notes: {tea.description}</p>
      <p>Caffeinated: {tea.caffeinated ? "Yes" : "No"}</p>
      <p>Price: ${tea.price}</p>
    </div>
  )
}