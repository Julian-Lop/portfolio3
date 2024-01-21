import React, { useState } from 'react'
import Image from "next/image";

//Images
import WebEmilan from '../../public/images/WebEmilanMejorado.png'
import SirimiriStore from '../../public/images/SirimiriStoreMejorado.png'
import NubiImage from '../../public/images/Nubi.png'

export default function ProjectGallery() {

  const [project, setProject] = useState(1)

  return (
    <>
      {/* Contenedor de imagenes */}
      <div className="Accordion_img">
        <a href="https://emilan.co" target='_blank'><Image src={WebEmilan} alt="" className={project == 1 ? "Accord_img active" : "Accord_img"} /></a>
        <a href="https://sirimiri.store" target='_blank'><Image src={SirimiriStore} alt="" className={project == 2 ? "Accord_img active" : "Accord_img"} /></a>
        <Image src={NubiImage} alt="" className={project == 3 ? "Accord_img active" : "Accord_img"} />
      </div>

      {/* Acordeon */}
      <div className="Accordion">

      {/* Lista de acordeon */}
      <ul className="Accordion_list">

        {/* Item1 */}
        <li
          className={project == 1 ? "Accordion_item active" : "Accordion_item"}
          onClick={() => setProject(1)}
        >
          <h3 className="Accordion_header">
            <span className="Accordion_bl">
              <span className="Accordion_bl_line"></span>
              <span className="Accordion_bl_line"></span>
            </span>
            <span className="Accordion_title">Emilan Web</span>
          </h3>
          <div className="Accordion_body">
            <p className="Accordion_descript">
                Página web de Emilan Insurance. Basada en Next js, utilizando SSG para optimizar la velocidad de carga,
                conectada con servicios de las Apis de Google y usando Sass para estilizar. La maquetación se hizo basada 
                fielmente en los diseños entregados por el cliente.
            </p>
          </div>
        </li>

        {/* Item2 */}
        <li
          className={project == 2 ? "Accordion_item active" : "Accordion_item"}
          onClick={() => setProject(2)}
        >
          <h3 className="Accordion_header">
            <span className="Accordion_bl">
              <span className="Accordion_bl_line"></span>
              <span className="Accordion_bl_line"></span>
            </span>
            <span className="Accordion_title">Sirimiri Store</span>
          </h3>
          <div className="Accordion_body">
            <p className="Accordion_descript">
                Tienda en Sirmiri. Tienda en Shopify a la cuál se le hicieron modificaciones de maquetación,
                para adaptar los colores y ciertos componentes a los requerimientos del cliente.
            </p>
          </div>
        </li>

        {/* Item3 */}
        <li
          className={project == 3 ? "Accordion_item active" : "Accordion_item"}
          onClick={() => setProject(3)}
        >
          <h3 className="Accordion_header">
            <span className="Accordion_bl">
              <span className="Accordion_bl_line"></span>
              <span className="Accordion_bl_line"></span>
            </span>
            <span className="Accordion_title">Nubi</span>
          </h3>
          <div className="Accordion_body">
            <p className="Accordion_descript">
                Intranet y crm sencillo, para manejar los tiempos de los empleados y las información de los clientes.
                Basado en React, Redux, Sass y utilizando websockets.
            </p>
          </div>
        </li>

      </ul>      
      </div>
    </>
  )
}
