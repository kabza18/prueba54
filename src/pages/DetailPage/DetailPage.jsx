//react
import { useParams } from 'react-router-dom'

//Components
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"

//Styles
import './DetailPage.css'

const DetailPage = () => {

  const { id } = useParams()

return (
  <div>
      <ItemDetailContainer id={id}/>
  </div>
);

}

export default DetailPage

