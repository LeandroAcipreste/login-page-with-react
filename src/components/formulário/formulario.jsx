import 'bootstrap/dist/css/bootstrap.min.css';
import './formulario.css'

export default function LoginForm(){
    return(
        <div className="container loginStyle">
            <form>
            <div className='form-group mb-3'>
                <label htmlFor='email'>E-mail</label>
                <input type='email' className='form-control' id='email' placeholder='exemplo@gmail.com'/>
            </div>
            <div className='form-group mb-3'>
                <label htmlFor='password'>Senha</label>
                <input type='numnber' className='form-control' id='password' placeholder='123456'/>
            </div>
        
            <div className="form-group form-check rounded d-flex justify-content-between align-items-center mb-3"> <div>
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">
                    Lembre de mim
                </label>
            </div>
            <a href="#!" className="text-success">
            Esqueceu sua senha?
            </a>
        </div>
        <button type='submit' className='btn btn-success w-100 mb-2'> Entrar na conta</button>
        <button type='button' className='btn btn-dark w-100'>
            <img src='https://img.icons8.com/color/16/000000/google-logo.png' alt='google-icon' className='me-2'/>
            ou faça o login com o google
        </button>
            

            
        </form>
    </div>
        
        
    )
}