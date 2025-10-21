import { useEffect, useState} from "react";
import {List} from "@shared/components";



const list = {
    code: 5,
    items: [
        {id: 1, name: "Пользователь 1"},
        {id: 2, name: "Пользователь 2"},
        {id: 3, name: "Пользователь 3"},
        {id: 4, name: "Пользователь 4"},
    ]
}

export default function App() {
    const [items, setItems] = useState([]);


    useEffect(() =>{
        setItems(list.items);
    },[])


    if(items.length == 0){
        return <>Ничего нет</>
    }

    return (
        <>
            <button onClick={() => setItems([...items, {id: 5, name: "Пользователь 6"}])}>
                Добавить пользователя
            </button>
            <List items={items}></List>
        </>
    )
}







