const Box3D = ({size, positionX, positionY, speed}) => {
    const uniqueStyle = {
        width: size+'px',
        height: size+'px'
    }

    let zPos = size / 2 + "px";

    return (
        <>
            <div className='boxCont'>
                <div className='box' style={uniqueStyle}>
                    <div className='boxFront boxFace'></div>
                    <div className='boxBack boxFace'></div>
                    <div className='boxRight boxFace'></div>
                    <div className='boxLeft boxFace'></div>
                    <div className='boxTop boxFace'></div>
                    <div className='boxBottom boxFace'></div>
                </div>
            </div>

            <style jsx>{`
                .boxCont{
                    position: absolute;
                    transform: translateX(${positionX}) translateY(${positionY});
                }
                .box {
                    position: relative;
                    transform-style: preserve-3d;
                    transform: translateZ(-50px);
                    margin: 0;
                    padding: 0;
                    
                    animation: spin ${speed}s infinite linear;
                }

                .boxFace{
                    position: absolute;
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    height: 100%;
                }

                .boxFront{
                    background-color: #40010080;
                    transform: rotateX(0deg) translateZ(${zPos});
                    border: 1px solid #e1e1e1;
                }
                .boxBack{
                    background-color: #40010080;
                    transform: rotateX(180deg) translateZ(${zPos});
                    border: 1px solid #e1e1e1;
                }

                .boxRight{
                    background-color: #40010080;
                    transform: rotateY(90deg) translateZ(${zPos});
                    border: 1px solid #e1e1e1;
                }
                .boxLeft{
                    background-color: #40010080;
                    transform: rotateY(-90deg) translateZ(${zPos});
                    border: 1px solid #e1e1e1;
                }

                .boxTop{
                    background-color: #40010080;
                    transform: rotateX(90deg) translateZ(${zPos});
                    border: 1px solid #e1e1e1;
                }
                .boxBottom{
                    background-color: #40010080;
                    transform: rotateX(-90deg) translateZ(${zPos});
                    border: 1px solid #e1e1e1;
                }

                /* Rotaciones */
                @keyframes spin {
                    0%{
                        transform: rotateX(0deg) rotateY(0deg);
                    }
                    100%{
                        transform: rotateX(360deg) rotateY(360deg);
                    }
                }
            `}</style>
        </>
    );
}

export default Box3D;