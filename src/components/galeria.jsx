import foto1 from '../assets/monet1.jpg'
import foto2 from '../assets/monet2.jpg'
import foto3 from '../assets/monet3.jpg'
import foto4 from '../assets/monet4.jpg'
import Rate from './rate'
import Modal from './modal'
import { useState , useRef } from "react";
import Boton from './boton'

function Galeria() {
    const [imagenes, setImagenes] = useState([ //
        { id: 1, src: foto1, rate: 0 , ref: useRef()},
        { id: 2, src: foto2, rate: 0 , ref: useRef()},
        { id: 3, src: foto3, rate: 0 , ref: useRef()},
        { id: 4, src: foto4, rate: 0 , ref: useRef()},
    ]);

    const [modal, setModal] = useState(false); // Agregamos el estado modal
    const [promedio, setPromedio] = useState(null); // Estado para almacenar el promedio

    const ordenaImagenes = (index, rate) => {
        const imagenesOrdenadas = [...imagenes];
        imagenesOrdenadas[index].rate = rate;
        imagenesOrdenadas.sort((a, b) => b.rate - a.rate);
        setImagenes(imagenesOrdenadas);
    }

    // Función para calcular el promedio de las calificaciones
    const calcularPromedio = () => {
        const total = imagenes.reduce((acc, img) => acc + img.rate, 0);
        const promedioCalculado = total / imagenes.length;
        setPromedio(promedioCalculado); // Redondeamos el promedio a 2 decimales
        setModal(true);
    }

    const reinicia = () => {
        const newImages =[...imagenes];
        newImages.map((img) => (img.rate = 0));
        setImagenes(newImages);
        imagenes.map((img) => img.ref.current.resetear())
        setModal(false);
    };

    return (
        <>
            <div className="galeria">
                {imagenes.map((img, i) => (
                    <div className="scoreCard" key={img.id}>
                        <img src={img.src} alt="imagen" className="fotos" />
                        <Rate avisaCambio={ordenaImagenes} index={i}  ref = {img.ref}/>
                    </div>
                ))}
            </div>

            <div className="BUTTON">
                <button className="boton" onClick={calcularPromedio} >PROMEDIO</button>
            </div>

            <Modal modal={modal} setModal={setModal}>
                <h2> Calificacion de la galeria </h2>
                <p>El promedio de la calificacion es: {promedio}</p>
                <Boton onClick = {reinicia}>
                    <h4>REINICIAR</h4>
                </Boton>
            </Modal>
        </>
    );
}

export default Galeria;
