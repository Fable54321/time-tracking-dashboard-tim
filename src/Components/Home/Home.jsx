import { useEffect, useState } from "react";
import useFetch from "../../functions/useFetch"
import dots from "../../images/icon-ellipsis.svg"
import { useOutletContext } from "react-router-dom";


const Home = () => {

  const [period] = useOutletContext();
  const {data, isLoading, error } = useFetch('http://localhost:8000/activities');

 
  const [frequency, setFrequency]= useState('daily');

  useEffect(()=>{
    switch(period){
      case 1:
        setFrequency('daily');
        break;
      case 2:
        setFrequency('weekly');
        break;
      case 3:
        setFrequency('monthly');
        break;
      default:
        setFrequency('daily');
        break;
    }

  },[period])
 
    

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <article className="main__article">
          {data.map((activity) => {
            return (
              <div
                className={"main__article__outside-" + activity.title}
                key={activity.id}
              >
                <div className="main__article__inside">
                  <div className="main__article__inside__title">
                    <h2>{activity.title}</h2> <img src={dots} alt="more info" />{" "}
                  </div>
                  <div className="main__article__inside__times">
                    <h3>{activity[frequency].current}hrs</h3>
                    <p>Last Week - {activity[frequency].previous}hrs</p>
                  </div>
                </div>
              </div>
            );
          })}
        </article>
      )}
    </>
  );
}

export default Home
