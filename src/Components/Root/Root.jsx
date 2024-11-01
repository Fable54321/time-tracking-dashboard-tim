import { Outlet } from "react-router-dom"
import avatar from "../../images/image-jeremy.png"
import { useState } from "react"

const Root = () => {

  const [period, setPeriod] = useState(1)

  function handleClick(e){
   
    console.log(e);

    if(e.target.textContent === "Daily"){
      setPeriod(1);
    }
    else if(e.target.textContent === "Weekly"){
      setPeriod(2);
    }
    else if(e.target.textContent === "Monthly"){
      setPeriod(3);
  }
  
}
  


  return (
    <>
    <header className="header">
      <div className="header__outside">
        <div className="header__outside__links">
          <button className={period===1 ? "btn-active": "btn-inactive"} onClick={(e)=>handleClick(e)}>Daily</button>
          <button className={period===2 ? "btn-active": "btn-inactive"} onClick={(e)=>handleClick(e)}>Weekly</button>
          <button className={period===3 ? "btn-active": "btn-inactive"} onClick={(e)=>handleClick(e)}>Monthly</button>
        </div>

        <div className="header__inside">
          <img src={avatar} alt="" aria-hidden="true" />
          <h1>
            <span>Report for</span><br/>
            Jeremy <br className="hidden-mobile" /> Robson
          </h1>
        </div>
      </div>
    </header>
    <main className="main">
      <Outlet context={[period]} />
    </main>
    </>
  )
}

export default Root
