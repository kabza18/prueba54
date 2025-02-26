//react
import { useState, useContext } from 'react'
import { Link } from "react-router-dom"

// MUI components
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

//context
import { ItemsContext } from '../../components/ItemContext/ItemContext';

//styles
import "./CheckoutPage.css"

//firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

//components
import MessageSuccess from "../../components/MessageSucess/MessageSuccess";

const initialState = {
  name: "",
  lastname: "",
  country: "",
  city: "",
  phone: "",
  email: "",
  emailconfirm: "",
  date: "",
  time: "",
  purchases: [],
  total: "",
  orderstatus: "generated"
};

const ShopPage = () => {

  const [submitting, setSubmitting] = useState(false)
  const { cart, setCart } = useContext(ItemsContext)
  const [values, setValues] = useState({ ...initialState, purchases: cart });
  const [purchaseID, setPurchaseID] = useState(null);
  let addprice = 0

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    setSubmitting(true)
    e.preventDefault();
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();
    const purchase = { ...values, date: formattedDate, time: formattedTime, total: addprice };

    const docRef = await addDoc(collection(db, "Orders"), {
      purchase,
    });
    setPurchaseID(docRef.id);

    //para ver en la consola lo que mando a firebase, lo dejo para que lo vean en consola, saludos!
    console.log("Esto estoy mandando a Firebase:",purchase)

    //reseteo todo despues del submit
    setValues(initialState);
    addprice = 0
    setCart([])
    setSubmitting(false)
  };

  {
    cart.map((item) => (
      addprice = addprice + item.quantity * item.price
    ))
  }

  return (
    <div className="shop_page">
      <form className='FormContainer' onSubmit={onSubmit}>
        <h1>Formulario CheckOut</h1>
        <h3>Checkpoint Games</h3>
        <div className="allDiv">
          <h3>Indicanos tus datos de facturación</h3>
          <TextField id="outlined-basic" label="Nombre" name="name" value={values.name} onChange={handleOnChange} variant="outlined" sx={{ marginRight: "50px" }} />
          <TextField id="outlined-basic" label="Apellido" name="lastname" value={values.lastname} onChange={handleOnChange} variant="outlined" sx={{ marginRight: "50px" }} />
        </div>
        <div className="allDiv">
          <TextField id="outlined-basic" label="Pais" name="country" value={values.country} onChange={handleOnChange} variant="outlined" sx={{ marginRight: "50px" }} />
          <TextField id="outlined-basic" label="Ciudad" name="city" value={values.city} onChange={handleOnChange} variant="outlined" sx={{ marginRight: "50px" }} />
        </div>
        <div className="allDiv">
          <TextField id="outlined-basic" label="Teléfono" name="phone" value={values.phone} onChange={handleOnChange} variant="outlined" sx={{ marginRight: "50px" }} />
        </div>
        <div className="allDiv">
          <div>
            *una vez verificado el e-mail podrá finalizar la compra
          </div>
          <TextField id="outlined-basic" label="E-mail" name="email" value={values.email} onChange={handleOnChange} variant="outlined" sx={{ marginRight: "50px" }} />
          <TextField id="outlined-basic" label="Confirmar E-mail" name="emailconfirm" value={values.emailconfirm} onChange={handleOnChange} variant="outlined" sx={{ marginRight: "50px" }} />
        </div>
        <div className='buttons'>
          {cart.length !=0 ?  <Link to="/cart" className='buttons'>
            <Button variant="contained">Volver al carrito</Button>
          </Link>: <Link to="/" className='buttons'>
            <Button variant="contained">Volver a menú principal</Button>
          </Link>}
          {cart.length != 0 ? values.email !== "" ? values.email === values.emailconfirm ? <Button variant="contained" type="submit">Finalizar compra</Button> : <Button variant="contained" disabled>Finalizar compra</Button> : <Button variant="contained" disabled>Finalizar compra</Button> : null}
        </div>
      </form>
      <div className='purchase_detail_container'>
        <h2>Descripción de la compra</h2>
        <div className='purchase_detail'>
          {cart.map((item) => (
            <div key={item.id} className="list_items">
              <h4>{item.name} - {item.quantity} x ARS$ {item.price}</h4>
            </div>
          ))}
          <div className='division_total'>
          <div className='total'>
            {cart.length != 0 ? <h3 > Total = ARS$ {addprice}</h3> : <h3>NO HAY PRODUCTOS A FACTURAR</h3>}
          </div>
          </div>
        </div>
      </div>
      <div className="circular_progress">
        {submitting && <CircularProgress thickness={8}/>}
        </div>
      <div className='center'>
      {purchaseID && <MessageSuccess purchaseID={purchaseID} />}
      </div>
    </div>
  )
}

export default ShopPage