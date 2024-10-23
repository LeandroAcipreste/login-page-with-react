import Formulario from '../formulário/formulario'
import './main.css'

export default function Main() {

    return(
        <div className='container mt-5 d-flex justify-content-center align-items-center'>
            <div className="row">
                <div className="col-6">
                    <img src='./src/assets/img-projeto.JPG' alt="imagem da página de login" />
                </div>
                <div className="col-6"><Formulario/></div>
            </div>
        </div>
    )
}