import './DataCard.css'

export default function DataCard({ data }) {
  return (
    <div className="DataCard">
      {data ?
        <div>
          <h3>{data.name}</h3>
        </div>
        :
        <h2>Loading...</h2>
      }
    </div>
  )
}
