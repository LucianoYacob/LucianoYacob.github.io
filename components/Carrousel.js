import React, {useRef, useEffect} from 'react';

const Carrousel = ({children}) => {
    const carrousel = useRef(null);

    const nextImg = () => {
        if(!carrousel.current) return;
        
        if(carrousel.current.children.length > 0){
            const firstElement = carrousel.current.children[0];

            carrousel.current.style.transition = `all 500ms ease-out`;
            
            const widthSlide = carrousel.current.children[0].offsetWidth;
            carrousel.current.style.transform = `translateX(-${widthSlide}px)`;

            const transition = () => {
                carrousel.current.style.transition = `none`;
                carrousel.current.style.transform = `translateX(0)`;
                
                carrousel.current.appendChild(firstElement);
            }
            carrousel.current.addEventListener("transitionend", transition);
        }
    }

    useEffect(() => {
        let intervalCarrousel = setInterval(() => nextImg(), 5000);
        let carrouselRef = carrousel.current;

        //Delete interval
        carrousel.current.addEventListener("mouseenter", () => {clearInterval(intervalCarrousel)});

        //reset interval
        carrousel.current.addEventListener("mouseleave", () => intervalCarrousel = setInterval(() => nextImg(), 5000));

        return () => clearInterval(intervalCarrousel);
    }, []);

    return (
        <>
            <div className='main-container'>
                <div className='carrousel-container' ref={carrousel}>
                    {children}
                </div>
            </div>

            <style jsx>{`
                .main-container{
                    overflow-x: hidden;
                    max-width: 1200px;
                }
                .carrousel-container{
                    display: flex;
                    flex-wrap: nowrap;
                }
            `}</style>
        </>
    )
}

const Slide = ({imgUrl, footerNote, link}) => {
    return (
        <>
            <div className='slide'>
                <img src={imgUrl} alt="Proyecto 1" layout='fill' quality={100} />   
                <div className='text-carrousel'>
                    <a href={link} className='slide-link' target="_blank" rel="noopener noreferrer">{footerNote}</a>
                </div>
            </div>
            <style jsx>{`
                .slide{
                    position: relative;
                    min-width: 100%;
                    min-height: 250px;
                    height: calc(100px + 50vw);
                    max-height: 400px;
                    overflow: hidden;
                    transition: .3s ease all;
                    z-index: 10;
                }     
                .slide img{
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                }
                .text-carrousel{
                    position: absolute;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, .5);
                    width: 100%;
                    padding: 10px 10px;
                    text-align: center;
                }
                .slide-link{
                    color: #fff;
                    font-weight: 700;
                    font-size: calc(.4rem + .75vw)
                }

                @media screen and (min-width: 430px) {
                    .text-carrousel{
                        padding: 10px 65px;
                    }
                }
            `}</style>
        </>
    )
}

export { Carrousel, Slide };