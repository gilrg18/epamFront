import React from 'react'
import Api from '../API/Api';
import UpdateModal from '../modalComponents/UpdateModal'
import '../css/itemList.css'

const ItemList = (props) => {
    const { itemID, itemName, itemDescription, price, itemImage, setItems } = props;

    return (
        <>
            <tr>
                <th scope="row">{itemID}</th>
                <td> <img className="img" src={itemImage} alt="item"/> {itemName} </td>
                <td>{itemDescription}</td>
                <td>${price}</td>
                <td>
                    <UpdateModal setItems={props.setItems} itemID={itemID} />
                    
                    <button type="button" className="space btn btn-danger rounded-pill" onClick={() => {
                        Api.deleteItem(itemID, setItems)
                    }
                    }>Delete</button>
                </td>
            </tr>
        </>
    );
}

export default ItemList;