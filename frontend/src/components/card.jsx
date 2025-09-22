
export default function Card({id , nombre, description, precio, duracion, dias }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4 w-full max-w-xs" id={id}>
      <h3 className="text-xl font-bold mb-2">{nombre}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-blue-600 font-semibold mb-1">Precio: ${precio}</p>
      <p className="text-sm text-gray-500 mb-1">Duración: {duracion}</p>
      {dias && typeof dias === 'object' && (
        <div className="text-sm text-gray-700 mb-4">
          Días de atención:
          <ul>
            {Object.entries(dias).map(([dia, horarios]) => (
              <li key={dia}>
                <span className="font-semibold">{dia}:</span> {Array.isArray(horarios) ? horarios.join(', ') : horarios}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded w-full transition-colors duration-200">
        Reserva
      </button>
    </div>
  );
}