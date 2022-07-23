import c from "./MyFrends.module.css";


const MyFrends = ({name})=>{

  return (
    <div>
      <div>
        <img className={c.image} src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg" alt="#" />
      </div>
      <div>
        <a href="">{name}</a>
      </div>
    </div>
  )
}
export default MyFrends;