import { useEffect } from "react"

interface Icoords {

    x: number,
    y: number

}

export const Message = () => {


    useEffect(()=>{

        const onMouseMove = ({x,y}:Icoords) => {
            const coords = {x,y};
            console.log(coords);
        }

        window.addEventListener('mousemove', onMouseMove );

        return () => {

            window.removeEventListener('mousemove',onMouseMove);
            
        }

    },[]);


  return (
    <>
        <h3>Usuario ya existe</h3>
    </>
  )
}
