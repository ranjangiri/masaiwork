import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};




export function Slide3({ data ,data1}) {
  console.log(data[0]);
    return <>
   <Carousel responsive={responsive}  containerClass="carousel-container"  showDots={true}  autoPlaySpeed={1000} draggable={false} transitionDuration={500}  customTransition="all .5"  infinite={true}>
            <div><img src={data[0]} alt="" />
                <h3>{data1[0]}</h3>
                <h5>Maximum Raised</h5>
          <h5>₹12 Lakh</h5></div>
        <div><img src={data[1]}alt="" />
                <h3>{data1[1]}</h3>
                <h5>Maximum Raised</h5>
                <h5>₹14 Lakh</h5></div>
            


            <div><img src={data[2]} alt="" />
                <h3>{data1[2]}</h3>
                <h5>Maximum Raised</h5>
          <h5>₹17 Lakh</h5>
          </div>
            <div><img src={data[3]} alt="" />
                <h3>{data1[3]}</h3>
                <h5>Maximum Raised</h5>
          <h5>₹11 Lakh</h5>
          </div>
         <div><img src={data[4]} alt="" />
                <h3>{data1[4]}</h3>
                <h5>Maximum Raised</h5>
          <h5>₹16 Lakh</h5></div>
        <div><img src={data[5]} alt="" />
                <h3>{data1[5]}</h3>
                <h5>Maximum Raised</h5>
          <h5>₹9 Lakh</h5></div>
        <div><img src={data[6]} alt="" />
                <h3>{data1[6]}</h3>
                <h5>Maximum Raised</h5>
          <h5>₹14 Lakh</h5></div>
        <div><img src={data[7]} alt="" />
                <h3>{data1[7]}</h3>
                <h5>Maximum Raised</h5>
          <h5>₹19 Lakh</h5></div>
        

      </Carousel>;
   
        </>
}