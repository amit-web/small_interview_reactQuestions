

const ShowingData = ({data}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
    <h1 className="text-2xl font-semibold mb-4 text-gray-700">Showing Data</h1>
    <div className="space-y-4">
      {data.map((el) => (
        <div key={el.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300">
          <h1 className="text-xl font-bold text-gray-800">{el.title}</h1>
          <p className="text-gray-600 mt-2">{el.body}</p>
        </div>
      ))}
    </div>
  </div>
  
  )
}

export default ShowingData