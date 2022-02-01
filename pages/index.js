import Layout from "../components/Layout";
import Presentation from "../components/PersonalizedPresentation";
import NormalSection from "../components/NormalSection";

const Index = ({theme, setTheme}) =>{ 
    return(
    <Layout theme={theme} setTheme={setTheme}>
        <Presentation showBox={true} />

        <NormalSection theme={theme}> 
            <h2>Un Poco Sobre mi</h2>
            <p>Empecé a estudiar programación y diseño web a mediados de 2020 de manera autodidacta, ayudándome con artículos, videos en línea y documentación oficial de las diferentes tecnologías y hasta el día de hoy me mantengo aprendiendo. A principios del 2021 genere un fuerte interés sobre la programación y desarrollo en videojuegos, lo que me llevo a tomar algunos cursos en la plataforma Udemy y YouTube sobre Unity y C#, a día de hoy sigo aprendiendo con gran esmero sobre esta rama de la programación. </p>
            <p>Actualmente me encuentro inscrito en la &quot;UNLU&quot;, universidad de Lujan, Bs.As. para comenzar mi carrera como &quot;Licenciado en Sistemas de Información&quot;. También me encuentro inscrito en el programa llamado &quot;Argentina Programa&quot;, el cual quiero completar para reforzar y aprender nuevos conceptos del desarrollo web.</p>
            <p>A manera de paréntesis cabe decir que antes de decidirme por estudiar Licenciatura en Sistemas de Información he estado estudiando el profesorado de Musica durante 2 años en la Escuela de Arte José &quot;Pipo&quot; Ferrari, decidiendo dejar a mediados de la pandemia por complicaciones.</p>
        </NormalSection>

        <NormalSection theme={theme} paintBlack="#1a1a1a"> 
            <h2>Mi Planes a Futuro</h2>
            <p>Como dije anteriormente en marzo de 2022 comienzo a cursar la Licenciatura en Sistemas de Información en la Universidad Nacional de Lujan, simultáneamente a la licenciatura estaré haciendo el programa &quot;Argentina Programa&quot;, el cual me servirá para reforzar y aprender nuevos conceptos. Aclarando esto cabe resaltar que por ahora solo me desenvuelvo en el desarrollo Front-end de una aplicación, pero quiero dedicar una gran parte de mi tiempo a aprender tecnologías Back-end como php, nodeJS y bases de datos, así podre desenvolverme con total tranquilidad a través de todo lo que conlleva crear una app, convirtiéndome así en un desarrollador más capaz de crear todo tipo de soluciones para cualquier problema.</p>
            <p>Ademas de continuar aprendiendo, tengo metas a largo plazo, por ejemplo, me encantaría reforzar conocimientos en C# y Unity. </p>
            <p>También quiero generar la experiencia necesaria en un empleo con un equipo de trabajo para algún día dedicarme al dearrollo web de manera independiente.</p>
        </NormalSection>
    </Layout>
)};

export default Index;
