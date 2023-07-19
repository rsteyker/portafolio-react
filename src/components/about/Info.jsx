

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className='bx bxs-award about__icon'></i>
                <h3 className="about__title">Experience</h3>
                <span className="abou__subtitle">+ 3 Años Trabajando</span>
            </div>
            <div className="about__box">
                <i className='bx bx-briefcase about__icon'></i>
                <h3 className="about__title">Proyectos</h3>
                <span className="abou__subtitle">20 + Proyectos</span>
            </div>
            <div className="about__box">
                <i className='bx bx-support about__icon'></i>
                <h3 className="about__title">Soporte</h3>
                <span className="abou__subtitle">Online 24/7</span>
            </div>
        </div>
    )
}

export default Info
