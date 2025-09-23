export default function Boton({ onClick, children }) {

    return (
        <div className="enviarSeleccion">
            <button className="boton" onClick={() => onClick()}>
                {children}
            </button>

        </div>
    )
}