import Style from './Steptwo.module.css';
import { FaSearch } from 'react-icons/fa';

const Steptwo = ({change}) => {
    const topics = Array.from({length:12},(_,index)=> {return (index % 2) === 0 ? 'Finances' : 'Ecology'});
  return (
    <div className={Style.main}>
      <div className={Style.steps}>
        <h3>Step 2</h3>
        <p>Interest</p>
        <p>Let's know what topics interest you when it comes to reading and writing.</p>
        <p>If you want to do it later, you can <span onClick={(e)=>change(e,3)}>skip</span></p>
      </div>
      <div className={Style.steptwosection}>
        <p>What are your reading or writing interest?</p>
        <div className={Style.inputdiv}>
          <FaSearch className={Style.icon}/>
          <input type="text"  className={Style.input}/>
        </div>
      </div>
      <div className={Style.steptwotopics}>
        {topics.map((topic,index)=>{
          return (
            <div key={index} className={`${(index % 2 === 0 ? Style.topic : Style.topicblur)}`}><p>{topic}</p></div>
          )
        })}
      </div>
      <div className={Style.footer}>
        <p onClick={(e)=>change(e,3)}>skip</p>
        <button onClick={(e)=>change(e,3)}>Next</button>
      </div>
    </div>
  )
}

export default Steptwo