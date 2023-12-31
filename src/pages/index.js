import { useEffect, useState, useRef } from "react";

//Components
import Cards from "@/components/Cards";
import Form from "@/components/Form";
import Section from "@/components/Section";
import Button from "@/components/buttons/Button";
import Layout from "@/components/layouts/Layout";
import ProjectGallery from "@/components/ProjectGallery";


export default function Home() {

  const [animate, setAnimate] = useState(false)

  const [currentSection, setCurrentSection] = useState('Home')

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true)
    }, 2000);
  },[])

  return (
    <>
      <Layout currentSection={currentSection} setCurrentSection={setCurrentSection}>
        <Section classes={'One'} id={'Home'} setCurrentSection={setCurrentSection}>
          <div>
            <h1>Julian A. Lopez {animate ? <span>|</span> : '|'}</h1>
            <h3>Desarrollador Web <span>{'</>'}</span></h3>
          </div>
          <div>
            <div className="image"/>
          </div>
        </Section>
        <Section classes={'Two'} id={'Aboutme'} setCurrentSection={setCurrentSection}>
          <h2>Acerca de mí <span>{'{...}'}</span></h2>
          <div className="Content">
            <div className="ColumnLeft">
              <p>
                Desarrollor, diseño e implemento soluciones de software enfocadas en tecnologías
                web. Cuento con experiencia como desarrollador Frontend, haciendo maquetación fiel
                al diseño, implementado lógica y buenas prácticas de programación para asegurar
                escalabilidad, fiabilidad y eficiencia del producto. He propuesto e implementado, 
                tanto tecnologías, como patrones de diseño y arquitectura de software para mejorar la
                eficiencia, fiabilidad y procesos de creación.
              </p>

              <Button text={'Descargar CV'} icon={'icon-download1'} download={true} />
            </div>
            
            <div className="ColumnRight">
            </div>
          </div>
        </Section>
        <Section classes={'Three'} id={'Skills'} setCurrentSection={setCurrentSection}>
          <h2 style={{textAlign: 'right'}} ><span>{'{...}'}</span> Tecnologías y Habilidades</h2>
          <div className="Content">
            <Cards/>
          </div>
        </Section>
        <Section classes={'Three noreverse'} id={'Projects'} setCurrentSection={setCurrentSection}>
          <h2>Proyectos <span>{'</>'}</span></h2>
          <div className="Content projects">
            <ProjectGallery/>
          </div>

        </Section>
        <Section classes={'Three noreverse'} id={'Contact'} setCurrentSection={setCurrentSection}>
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
