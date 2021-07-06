import {Link} from "react-router-dom"
import { useSelector } from "react-redux"
export default function(){
    const user = useSelector(store=>store.users.currentUser)
    return(
        <div>
            <h1>MUCHAS GRACIAS {user.firstName.toUpperCase()} POR SU COMPRA</h1>
            <Link to="/">ir al inicio</Link>
        </div>
    )
}