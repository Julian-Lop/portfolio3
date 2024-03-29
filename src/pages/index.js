import { useEffect, useState } from "react";
import Image from "next/image";

//Components
import Cards from "@/components/Cards";
import Form from "@/components/Form";
import Section from "@/components/Section";
import Button from "@/components/buttons/Button";
import Layout from "@/components/layouts/Layout";
import ProjectGallery from "@/components/ProjectGallery";
import Loading from "@/components/Loading";


export default function Home() {

  // Ready page
  const [ready, setReady] = useState(false)

  const [currentSection, setCurrentSection] = useState('Home')

  useEffect(() => {

    const connection = navigator.connection;

    setTimeout(() => {
      setReady(true)
    }, 2000/connection.downlink);

  }, [])

  return (
    <>
      <Layout currentSection={currentSection} setCurrentSection={setCurrentSection}>
        {!ready &&
          <Loading/>
        }
        <Section classes={'One'} id={'Home'} setCurrentSection={setCurrentSection}>
          <div>
            <h1>Julian A. Lopez <span>|</span></h1>
            <h3>Desarrollador Web <span>{'</>'}</span></h3>
          </div>
          <div>
            {ready ? <div className="image">
              {/* <div className={`color-image ${!slowConnection && 'animatedProfile'}`} /> */}
              <Image
                src={"https://drive.google.com/uc?export=view&id=1DCgnJsvuiA69iFLTflGF9Gvb-keGCp3W"}
                width={1784}
                height={1939}
                alt="profile image"
              />
            </div> : <></>}
          </div>
        </Section>
        <Section classes={'Two'} id={'Aboutme'} setCurrentSection={setCurrentSection}>
          <h2>Acerca de mí <span>{'{...}'}</span></h2>
          <div className="Content">
            <div className="ColumnLeft">
              <p>
                Soy Julian Lopez, un apasionado del desarrollo web centrado en el pensamiento
                crítico y la simplicidad en el diseño de soluciones. Destaco por mi capacidad
                de comunicación y adaptación rápida a nuevas tecnologías. Emocionado por crecer
                profesionalmente y contribuir a proyectos con mis habilidades y pasión por la tecnología.
              </p>

              <Button text={'Descargar CV'} icon={'icon-download1'} download={true} />
            </div>
            
            <div className="ColumnRight">
              <Image
                src={"https://drive.google.com/uc?export=view&id=1UcW6uhHhYI9emB_BK5TvpnF8sJ63aZDE"}
                width={800}
                height={1360}
                alt="About image"
                className="ImageAbout"
                loading="lazy"
              />
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