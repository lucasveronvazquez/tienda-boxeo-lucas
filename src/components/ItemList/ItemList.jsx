
import { Item } from '../Item/Item';
import './ItemList.css'

export const ItemList = ({ items }) => {

    return (

        <div className="estilos-list">
        
            {
                items.map(element =>(
                
                    <Item key={element.id} item={element}/>
                    )
                )
            }


        </div>

    );
};