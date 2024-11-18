import LoginForm from '../formulário/formulario'
import './main.css'

export default function Main() {

    return(
        <div className='container mt-5 d-flex justify-content-center align-items-center'>
            <div className="row w-100">
                <div className="col-sw-12 col-md-6">
                    <img src="src\assets\img-projeto.JPG" alt="imagem da página de login" className='img-login'/>
                </div>
                <div className="col-sm-12 text-md-start col-md-6 text-align-sw">
                    <h5 className='col-sw margin-left'>Bem-vindo de volta</h5>
                    <h2 className='col-sw margin-left'>Faça login na sua conta</h2>
                    <LoginForm/>
                    </div>
            </div>
        </div>
    )
}