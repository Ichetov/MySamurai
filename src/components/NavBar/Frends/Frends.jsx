
import MyFrends from './MyFrends/MyFrends';
import s from './Frends.module.css'


const Frends = ({myFrendsReducer}) => {

let mapin = myFrendsReducer.myFrends.map((item) => <MyFrends key={item.id} name={item.name} />)
  return (
      <div>
        <h3>FRIENDS</h3>
        <div className={s.test}>{mapin}</div>
      </div>
  );
};

export default Frends;