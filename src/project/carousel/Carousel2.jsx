import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
const responsive1 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }

};

const St3 = styled.div`{
    text-align:center;
  .flex{
    margin:auto;
    width:60%;
    display:flex;
    text-align:left;
  }
  img{
    width:40%;
    height:300px;

  }
  p{
    padding:10px;
    width:60%
  }
   
}`



export function Slide1({data,data1}) {
    return <St3>
        <Carousel responsive={responsive1}>
        <div className="flex"><img  src={data[0]} alt="" />
          <p >{data1[0]}</p>
          </div>
        <div  className="flex"><img src={data[1]}alt="" />
          <p>{data1[1]}</p></div>
         <div  className="flex"><img src={data[2]} alt="" />
          <p>{data1[2]}</p></div>
         <div  className="flex"><img src={data[3]} alt="" />
          <p>{data1[3]}</p></div>
         <div  className="flex"><img src={data[4]} alt="" />
          <p>{data1[4]}</p></div>
        
        

</Carousel>;
    </St3>
    
}