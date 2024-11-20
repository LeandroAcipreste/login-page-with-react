import './header.css';

export default function Header(){

    return(
        <header className='header'>
            <div className="container">
                <div className="row">
                    <div className="col-12 my-5 header-box-img d-flex justify-content-center align-items-center w-100">
                        <img src="src\assets\content.png" alt="jogo da noite lakers contra chicago bulls" className="w-50" />
                    </div>
                </div>
            </div>
        </header>
    )

}