import Cards from "@/components/Cards";
import Section from "@/components/Section";
import Button from "@/components/buttons/Button";
import Layout from "@/components/layouts/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Section classes={'One'}>
          <div>
            <h1>Julian A. Lopez <span>|</span></h1>
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

              <Button/>
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
        <Section classes={'Three'} id={'Projects'} >
          <h2>Proyectos <span>{'</>'}</span></h2>
          <div className="Content">
            
          </div>
        </Section>
        <Section classes={'Three'} id={'Contact'} >
          <h2 style={{textAlign: 'right'}}><span>{'<?>'}</span> Contáctame</h2>
          <div className="Content">
            <div className="FormContainer">
              <form>

              </form>
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
