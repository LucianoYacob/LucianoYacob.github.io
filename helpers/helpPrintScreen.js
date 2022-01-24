export default function helpPrintScreen(e){
    if(typeof window !== "undefined"){
        const $header = document.querySelector(".header");

        if(e.target.matches("input")){
            $header.style.display = "none";
            e.target.style.display = "none";
            window.print();
        }
    
        $header.style.display = "flex";
        e.target.style.display = "block";
    } 
}