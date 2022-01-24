import {Carrousel, Slide} from "../components/Carrousel";
import Layout from "../components/Layout";
import NormalSection from "../components/NormalSection";
import PersonalizedPresentation from "../components/PersonalizedPresentation";

const Proyects = ({theme, setTheme}) => (
    <Layout theme={theme} setTheme={setTheme}>
        <PersonalizedPresentation/>
        <NormalSection theme={theme}> 
            <h3>Notepad</h3>
            <Carrousel>
                <Slide 
                    imgUrl="/Images/notepad1.png" 
                    footerNote="Una simple App de notas"
                    link="https://github.com/LucianoYacob/Notepad"    
                />
                <Slide 
                    imgUrl="/Images/notepad2.png" 
                    footerNote="Capaz de utilizar operaciones basicas del 'CRUD'"
                    link="https://github.com/LucianoYacob/Notepad"    
                />
                <Slide 
                    imgUrl="/Images/notepad3.png" 
                    footerNote="Creada usando la API de LocalStorage"
                    link="https://github.com/LucianoYacob/Notepad"    
                />
                <Slide 
                    imgUrl="/Images/notepad4.png"
                    footerNote="Con estilos añadidos con el pre-procesador Sass"
                    link="https://github.com/LucianoYacob/Notepad"        
                /> 
            </Carrousel>
        </NormalSection>

        <NormalSection theme={theme} paintBlack="#1a1a1a"> 
            <h3>To-Do list App</h3>
            <Carrousel>
                <Slide 
                    imgUrl="/Images/ToDoList1.png"
                    footerNote="Una simple App para organizar tus tareas"
                    link="https://github.com/LucianoYacob/ToDoList"    
                />
                <Slide 
                    imgUrl="/Images/ToDoList2.png"
                    footerNote="Capaz de utilizar operaciones basicas del 'CRUD'"
                    link="https://github.com/LucianoYacob/ToDoList"    
                />
                <Slide 
                    imgUrl="/Images/ToDoList3.png" 
                    footerNote="Creada principalmente con la API de IndexedDB y LocalStorage"
                    link="https://github.com/LucianoYacob/ToDoList"    
                />
            </Carrousel>
        </NormalSection>

        <NormalSection theme={theme}> 
            <h3>Weather APP</h3>
            <Carrousel>
                <Slide 
                    imgUrl="/Images/WA1.png" 
                    footerNote="Una App del clima creada con APIs de terceros"
                    link="https://github.com/LucianoYacob/weatherApp-with-Bootstrap5"    
                />
                <Slide 
                    imgUrl="/Images/WA2.png"
                    footerNote="Haciendo uso de la asincronia de JavaScript"
                    link="https://github.com/LucianoYacob/weatherApp-with-Bootstrap5"    
                />
                <Slide 
                    imgUrl="/Images/WA3.png" 
                    footerNote="Usa las APIs de RapidAPI (Weather API) y Ipinfo (geolocation API)"
                    link="https://github.com/LucianoYacob/weatherApp-with-Bootstrap5"    
                />
                <Slide 
                    imgUrl="/Images/WA4.png" 
                    footerNote="Contando con estilos añadidos de Bootstrap, optimizado con PurgeCSS"
                    link="https://github.com/LucianoYacob/weatherApp-with-Bootstrap5"    
                /> 
            </Carrousel>
        </NormalSection>
    </Layout>
);

export default Proyects;
