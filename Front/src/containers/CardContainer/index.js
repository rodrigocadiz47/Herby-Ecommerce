import React from "react"
import { useSelector } from "react-redux"

export default function CardContainer(){
    const card = useSelector(store=>store.card)
    const [total, setTotal]= React.useState(Number)

    const memorizedCard = React.useMemo(()=>{
        return card.map((order)=>{
            return <h3>{order.name} {order.amount} kg x {order.price} = {order.preTotal}</h3>
        })
    }, [card])

    React.useEffect(()=>{
        const pre = card.map((product)=>{
            return product.preTotal
        })
        const toPay = card.length && pre.reduce((a, b)=> a+b)
        setTotal(toPay)
    }, [card])

    return(
        <div>
            <h1>Carrito</h1>
            {card.length ? memorizedCard : <small>Aun no hay nada en el carrito</small>}
            {card.length && 
            <>
            <h3>Total = {total}</h3> 
            </>
            }
        </div>
    )
}