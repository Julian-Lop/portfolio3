import React, { useState } from 'react'
import Image from "next/image";


export default function ProjectGallery() {

  const [project, setProject] = useState(1)

  return (
    <>
      {/* Contenedor de imagenes */}
      <div className="Accordion_img">
        <a href="https://emilan.co" target='_blank'>
          <Image
            src={"https://drive.google.com/uc?export=view&id=1XcwppJCvcuGj97dH-0fa2AB75gF2KoVN"}
            width={900}
            height={1000}
            alt="imágen de proyecto Emilan Web"
            className={project == 1 ? "Accord_img active" : "Accord_img"}
          />
        </a>
        <a href="https://sirimiri.store" target='_blank'>
          <Image src={"https://drive.google.com/uc?export=view&id=1EWGsxzqPzuipbRSL7ZWZBVYBxxDeIPEf"}
            width={900}
            height={1000}
            alt="Imágen de proyecto SirimiriStore"
            className={project == 2 ? "Accord_img active" : "Accord_img"}
            loading='lazy'
          />
        </a>
        <Image
          src={"https://drive.google.com/uc?export=view&id=1DKJOLAgNoUnPtDpA6jw8y9kaGxASy8MX"}
          width={900}
          height={1000}
          alt="Imágen de proyecto Nubi intranet-crm"
          className={project == 3 ? "Accord_img active" : "Accord_img"}
          loading='lazy'
        />
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
                Tienda en Sirmiri. Tienda de venta de productos Wayú en Estados Unidos,
                responsive y con carrito de compra.
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
                Intranet y CRM, para manejar los tiempos de los empleados y las información de los clientes.
                Basado en React, Redux, Express, Sass, websockets, entre otras.
            </p>
          </div>
        </li>

      </ul>      
      </div>
    </>
  )
}
