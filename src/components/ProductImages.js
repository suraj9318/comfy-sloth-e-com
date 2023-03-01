import React, { useState } from 'react'
import styled from 'styled-components'
import notFound from '../assets/notFound.png'

const ProductImages = ({images = [{url:''}]}) => {
  const [main,setMain] = useState(images[0]);
  const handleImages = (index) =>{
    setMain(images[index])
  }

  function checkImage(url) {
    var image = new Image();
    image.onload = function() {
      if (this.width > 0) {
        return true
      }
    }
    image.onerror = function() {
      return false
    }
    image.src = url;
  }


  return <Wrapper>
    <img src={checkImage(main.url) ? main.url : notFound} alt="main image" className='main'/>
    <div className='gallery'>
      {images.map((image,index)=>{
        return <img key={index} 
        src={checkImage(image.url) ?image.url : notFound }
        alt={image.filename} 
        onClick={()=>handleImages(index)} 
        className={`${image.url === main.url?'active':''}`}
        />
      })}
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
