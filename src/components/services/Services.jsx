import { useState } from "react";
import "./services.css";


const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toogleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">My Services</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className='bx bx-code-alt services__icon'></i>
                        <h3 className="services__title">Desarrollo del lado del cliente (Front-end)</h3>
                    </div>

                    <span className="services__button" onClick={() => toogleTab(1)}>Ver más{" "}
                        <i className="uil uil-arrow services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toogleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title"></h3>

                            <p className="services__modal-description">
                                Con más de 3 años de experiencia. Proporcionar un trabajo de calidad a clientes y empresas.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Diseño y desarrollo de interfaces de usuario (UI) atractivas y responsivas.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Desarrollo de aplicaciones web utilizando frameworks y bibliotecas como React y Vue.js.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Optimización del rendimiento y la experiencia del usuario en la interfáz de usuario.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className='bx bx-server services__icon'></i>
                        <h3 className="services__title">Desarrollo del lado del servidor (Back-end)</h3>
                    </div>

                    <span className="services__button" onClick={() => toogleTab(2)}>Ver más{" "}
                        <i className="uil uil-arrow services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toogleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title"></h3>

                            <p className="services__modal-description">
                                Con más de 3 años de experiencia. Proporcionar un trabajo de calidad a clientes y empresas.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Diseño y desarrollo de arquitecturas de aplicaciones escalables y seguras.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Creación de APIs (Interfaces de Programación de Aplicaciones) para permitir la comunicación entre el cliente y el servidor.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Implementación de lógica de negocio y procesamiento de datos en el servidor.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Configuración de servidores web y administración de bases de datos.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Uso de frameworks y tecnologías como Node.js, Express, entre otros.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className='bx bx-data services__icon'></i>
                        <h3 className="services__title">Desarrollo de bases de datos</h3>
                    </div>

                    <span className="services__button" onClick={() => toogleTab(3)}>Ver más{" "}
                        <i className="uil uil-arrow services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toogleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title"></h3>

                            <p className="services__modal-description">
                                Con más de 3 años de experiencia. Proporcionar un trabajo de calidad a clientes y empresas.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Diseño y administración de bases de datos, incluyendo la creación de esquemas, tablas y consultas eficientes.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Implementación de modelos de datos y relaciones entre entidades.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Optimización de consultas y rendimiento de la base de datos.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Uso de tecnologías y herramientas como MySQL, PostgreSQL, SQL Server.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className='bx bx-git-branch services__icon'></i>
                        <h3 className="services__title">Control de versiones y colaboración</h3>
                    </div>

                    <span className="services__button" onClick={() => toogleTab(4)}>Ver más{" "}
                        <i className="uil uil-arrow services__button-icon"></i>
                    </span>

                    <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toogleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title"></h3>

                            <p className="services__modal-description">
                                Con más de 3 años de experiencia. Proporcionar un trabajo de calidad a clientes y empresas.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Utilización de sistemas de control de versiones como Git para el seguimiento de cambios y la colaboración en equipo.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Integración de prácticas de desarrollo colaborativo, como la revisión de código y la resolución de conflictos.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className='bx bx-chevron-down-circle services__icon'></i>
                        <h3 className="services__title">Implementación y despliegue</h3>
                    </div>

                    <span className="services__button" onClick={() => toogleTab(5)}>Ver más{" "}
                        <i className="uil uil-arrow services__button-icon"></i>
                    </span>

                    <div className={toggleState === 5 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toogleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title"></h3>

                            <p className="services__modal-description">
                                Con más de 3 años de experiencia. Proporcionar un trabajo de calidad a clientes y empresas.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Configuración de entornos de desarrollo, pruebas y producción.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Implementación de aplicaciones en servidores o plataformas en la nube.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
