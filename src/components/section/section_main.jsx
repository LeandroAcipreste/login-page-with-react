import './section_main.css'

export default function Section_main(){
    

    return(
        <section className='section-main'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 section-main-box d-flex justify-content-center mb-5 carousel-size-sm">
                        <img src="src\assets\main (2).png" alt="" className='w-100 section-main-box-img' />
                    </div>
                </div>
                <div id="multiCardCarousel" className="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    
                    <div class="carousel-item active">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                        <div class="card">
                            <img src="src\assets\Lebron.png" className="card-img" alt="LeBron James"/>
                            <div class="card-img-overlay text-white d-flex align-items-end">
                            <h5>Aos 39 anos, LeBron James atingiu a marca de 40 mil pontos na temporada regular da NBA</h5>
                            </div>
                        </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                        <div class="card">
                            <img src="src\assets\kobe.png" className="card-img" alt="Kobe Bryant"/>
                            <div class="card-img-overlay text-white d-flex align-items-end">
                            <h5>Morte de Kobe Bryant: piloto de helicóptero ficou desorientado com mau tempo</h5>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <div class="row">
                        <div class="col-sm-12 sm-mt-2 col-md-6">
                        <div class="card">
                            <img src="src\assets\Cavaliers.jpg" className="card-img" alt="Imagem 3"/>
                            <div class="card-img-overlay text-white d-flex align-items-end">
                            <h5>Cavaliers vencem a 12ª seguida e mantêm série invicta na NBA</h5>
                            </div>
                        </div>
                        </div>
                        <div class="col-sm-12 sm-mt-2 col-md-6">
                        <div class="card">
                            <img src="src\assets\jason.jpg" className="card-img" alt="Imagem 4"/>
                            <div class="card-img-overlay text-white d-flex align-items-end">
                            <h5>Com game winner de Jayson Tatum, Celtics batem Raptors na prorrogação</h5>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#multiCardCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#multiCardCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Próximo</span>
                </button>
                </div>
            </div>
        </section>
    )
}