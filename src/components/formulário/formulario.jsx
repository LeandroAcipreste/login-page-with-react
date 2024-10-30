import 'bootstrap/dist/css/bootstrap.min.css';
import './formulario.css'
import { useState } from 'react';

export default function LoginForm(){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        const login = {
            Usuário:userName,
            senha:password,
            lembrar:rememberMe
        }
        console.log(login);

        setUserName('');
        setPassword('');
        setRememberMe(false);
        
    }

    const handleRemeberMeChange = (e)=>{
        setRememberMe(e.target.checked)
    }

    return(
        <div className="container loginStyle">
            <form onSubmit={handleSubmit}>
            <div className='form-group mb-3'>
                <label htmlFor='email'>E-mail</label>
                <input type='email' className='form-control' placeholder='exemplo@gmail.com' value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
            </div>
            <div className='form-group mb-3'>
                <label htmlFor='password'>Senha</label>
                <input type='numnber' className='form-control' placeholder='123456' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
        
            <div className="form-group form-check rounded d-flex justify-content-between align-items-center mb-3"> <div>
                <input type="checkbox" className="form-check-input" id="rememberMe" value={rememberMe} onChange={handleRemeberMeChange} />
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