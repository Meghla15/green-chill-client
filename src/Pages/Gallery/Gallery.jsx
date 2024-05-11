import { useEffect } from "react";
import { RevealContent, Image, Reveal } from 'semantic-ui-react'

const Gallery = () => {
    


    useEffect (() =>{
        document.title ='Green Chilli | Gallery'
    },[])
    return(
        <div>
           <Reveal animated='small fade'>
    <RevealContent visible>
      <Image src='https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/1296x728-header.jpg?w=1155&h=1528' size='small' />
    </RevealContent>
    <RevealContent hidden>
      <p>this is tag</p>
    </RevealContent>
  </Reveal>
        </div>
    )
   
};

export default Gallery;