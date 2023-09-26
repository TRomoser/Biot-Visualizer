import './QueryForm.css'

export default function QueryForm({ data, query, setQuery }) {
  return (
    <div className='QueryForm'>
      <form>
        <label htmlFor="query">Query</label>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}