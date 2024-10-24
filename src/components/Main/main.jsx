import Formulario from '../formulário/formulario'
import './main.css'

export default function Main() {

    return(
        <div className='container mt-5 d-flex justify-content-center align-items-center'>
            <div className="row">
                <div className="col-sw-12 col-md-6">
                    <img src='./src/assets/img-projeto.JPG' alt="imagem da página de login" />
                </div>
                <div className="col-sm-12 text-center text-md-start col-md-6">
                    <h5 className='col-sw'>Bem-vindo de volta</h5>
                    <h2 className='col-sw'>Faça login na sua conta</h2>
                    <Formulario/>
                    </div>
            </div>
        </div>
    )
}