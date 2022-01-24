import Box3D from "./Box3D";
import styles from "./presentation.module.css";

const BoxZone = () => {
    return ( 
        <div className={styles.boxZone}>
                <Box3D size={50} positionX="150px" positionY="50px" speed={7}/>
                <Box3D size={100} positionX="50px" positionY="200px" speed={5}/>
                <Box3D size={75} positionX="330px" positionY="400px" speed={9}/>
                <Box3D size={100} positionX="600px" positionY="300px" speed={10}/>
                <Box3D size={35} positionX="850px" positionY="475px" speed={8}/>
                <Box3D size={50} positionX="150px" positionY="500px" speed={7}/>
                <Box3D size={35} positionX="10px" positionY="400px" speed={7}/>
                <Box3D size={35} positionX="0px" positionY="10px" speed={4}/>
                <Box3D size={45} positionX="350px" positionY="200px" speed={8}/>
                <Box3D size={45} positionX="300px" positionY="5px" speed={3}/>
                <Box3D size={65} positionX="540px" positionY="100px" speed={3}/>
                <Box3D size={90} positionX="750px" positionY="35px" speed={4}/>

                <Box3D size={30} positionX="520px" positionY="550px" speed={4}/>
                <Box3D size={50} positionX="1000px" positionY="600px" speed={7}/>
                <Box3D size={100} positionX="1000px" positionY="200px" speed={5}/>
                <Box3D size={75} positionX="330px" positionY="600px" speed={9}/>
                <Box3D size={100} positionX="700px" positionY="600px" speed={10}/>
                <Box3D size={80} positionX="1250px" positionY="650px" speed={10}/>
                <Box3D size={35} positionX="1000px" positionY="420px" speed={8}/>
                <Box3D size={35} positionX="1200px" positionY="500px" speed={7}/>
                <Box3D size={55} positionX="1250px" positionY="300px" speed={5}/>
                <Box3D size={45} positionX="50px" positionY="650px" speed={8}/>
                <Box3D size={65} positionX="1150px" positionY="10px" speed={3}/>
            </div>
     );
}

export default BoxZone;