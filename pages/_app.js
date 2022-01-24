import '../styles/global.css';
import useStorage from '../hooks/useStorage';

function MyApp({ Component, pageProps }){
    let themeStorage = useStorage();
    return <Component {...pageProps} theme={themeStorage.theme} setTheme={themeStorage.setTheme}/>
}

export default MyApp;