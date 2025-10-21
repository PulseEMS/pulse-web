import { Item } from './Item';

interface Item {
    id:number,
    name: string,
}

interface ListProps {
    items: Item[]
}

export const List = ({items} :ListProps) => {
    console.log('List render');
    return (
        <>
            { items.map((item ) => (
                <Item name={item.name} key={item.id} />
            )) }
        </>
    )
}