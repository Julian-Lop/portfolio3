import { useEffect, useState } from "react";
import Image from "next/image";

//Components
import Cards from "@/components/Cards";
import Form from "@/components/Form";
import Section from "@/components/Section";
import Button from "@/components/buttons/Button";
import Layout from "@/components/layouts/Layout";

//Images
import imagen1 from '../../public/images/Atardecer.jpg'
import imagen2 from '../../public/images/Bosque.png'
import imagen3 from '../../public/images/Samurai.jpg'


export default function Home() {

  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true)
    }, 2000);
  },[])

  return (
    <>
      <Layout>
        <Section classes={'One'}>
          <div>
            <h1>Julian A. Lopez {animate ? <span>|</span> : '|'}</h1>
            <h3>Desarrollador Web <span>{'</>'}</span></h3>
          </div>
          <div>
            <div className="image"/>
          </div>
        </Section>
        <Section classes={'Two'} id={'Aboutme'} >
          <h2>Acerca de mí <span>{'{...}'}</span></h2>
          <div className="Content">
            <div className="ColumnLeft">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque,
                metus malesuada fermentum tristique, ante turpis interdum leo, vitae tempor
                tellus dui et sapien. In nec leo vitae nulla euismod blandit sed in erat.
                Donec sed venenatis nisi. Phasellus eu orci nec quam condimentum
                lacinia eget vitae nibh. Sed malesuada.
              </p>

              <Button text={'Descargar CV'}/>
            </div>
            
            <div className="ColumnRight">
            </div>
          </div>
        </Section>
        <Section classes={'Three'} id={'Skills'} >
          <h2 style={{textAlign: 'right'}} ><span>{'{...}'}</span> Tecnologías y Habilidades</h2>
          <div className="Content">
            <Cards/>
          </div>
        </Section>
        <Section classes={'Three noreverse'} id={'Projects'} >
          <h2>Proyectos <span>{'</>'}</span></h2>
          <div className="Content">
            {/* Contenedor de imagenes */}
            <div className="Accordion_img">
              <Image src={imagen1} alt=""  className="Accord_img active" />
              <Image src={imagen2} alt=""  className="Accord_img" />
              <Image src={imagen3} alt=""  className="Accord_img" />
            </div>
            
            {/* Acordeon */}
            <div className="Accordion">

              {/* Lista de acordeon */}
              <ul className="Accordion_list">

                {/* Item1 */}
                <li className="Accordion_item active">
                  <h3 className="Accordion_header">
                    <span className="Accordion_bl">
                      <span className="Accordion_bl_line"></span>
                      <span className="Accordion_bl_line"></span>
                    </span>
                    <span className="Accordion_title">Pagina Web Emilan</span>
                  </h3>
                  <div className="Accordion_body">
                    <p className="Accordion_descript">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque,
                      metus malesuada.
                    </p>
                  </div>
                </li>

                {/* Item2 */}
                <li className="Accordion_item">
                  <h3 className="Accordion_header">
                    <span className="Accordion_bl">
                      <span className="Accordion_bl_line"></span>
                      <span className="Accordion_bl_line"></span>
                    </span>
                    <span className="Accordion_title">Pagina Web 2</span>
                  </h3>
                  <div className="Accordion_body">
                    <p className="Accordion_descript">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque,
                      metus malesuada.
                    </p>
                  </div>
                </li>

                {/* Item3 */}
                <li className="Accordion_item">
                  <h3 className="Accordion_header">
                    <span className="Accordion_bl">
                      <span className="Accordion_bl_line"></span>
                      <span className="Accordion_bl_line"></span>
                    </span>
                    <span className="Accordion_title">Pagina Web 3</span>
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

          </div>

        </Section>
        <Section classes={'Three noreverse'} id={'Contact'} >
          <h2 style={{textAlign: 'right'}}><span>{'<?>'}</span> Contáctame</h2>
          <div className="Content">
            <div className="FormContainer">
              <Form/>
            </div>
            <div className="contact">
              <div className="item">
                <i className="icon icon-email"/> <p>julian01andres@gmail.com</p>
              </div>
              <div className="item">
                <i className="icon icon-linkedin"/> <p>linkedin.com/in/julián-andrés-lópez-castañeda-924682223</p>
              </div>
              <div className="item">
                <i className="icon icon-github"/> <p>https://github.com/Julian-Lop</p>
              </div>
            </div>
          </div>
        </Section>
      </Layout>
    </>
  )
}
