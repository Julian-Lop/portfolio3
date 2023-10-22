import React, { useState } from 'react'
import Image from "next/image";

//Images
import imagen1 from '../../public/images/Atardecer.jpg'
import imagen2 from '../../public/images/Bosque.png'
import imagen3 from '../../public/images/Samurai.jpg'

export default function ProjectGallery() {

  const [project, setProject] = useState(1)

  return (
    <>
      {/* Contenedor de imagenes */}
      <div className="Accordion_img">
        <Image src={imagen1} alt="" className={project == 1 ? "Accord_img active" : "Accord_img"} />
        <Image src={imagen2} alt="" className={project == 2 ? "Accord_img active" : "Accord_img"} />
        <Image src={imagen3} alt="" className={project == 3 ? "Accord_img active" : "Accord_img"} />
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
            <span className="Accordion_title">Proyecto 1</span>
          </h3>
          <div className="Accordion_body">
            <p className="Accordion_descript">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque,
              metus malesuada.
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
            <span className="Accordion_title">Proyecto 2</span>
          </h3>
          <div className="Accordion_body">
            <p className="Accordion_descript">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque,
              metus malesuada.
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
            <span className="Accordion_title">Proyecto 3</span>
          </h3>
          <div className="Accordion_body">
            <p className="Accordion_descript">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque,
              metus malesuada.
            </p>
          </div>
        </li>

      </ul>      
      </div>
    </>
  )
}
