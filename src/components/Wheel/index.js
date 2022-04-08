import React, { useState } from "react";
import './style.css';

const Wheel = (props) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const selectItem = () => {
        if (selectedItem === null) {
            const selectedItem = Math.floor(Math.random() * props.items.length);
            if (props.onSelectItem) {
                props.onSelectItem(selectedItem);
            }
            setSelectedItem(selectedItem);
        }
    }

    const clearSelectedItem = () => {
        setSelectedItem(null);
    }

    const wheelVars = {
        '--nb-item': props.items.length,
        '--selected-item': selectedItem,
    }
    const spinning = selectedItem !== null ? 'spinning' : '';
    return (
        <>
            <div className="wheel-container">
                <div className={`wheel ${spinning}`} style={wheelVars} onClick={() => selectItem()}>
                    {props.items.map((item, index) => (
                        <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className="button-container">
                <button onClick={() => clearSelectedItem()}>Ulangi</button>
            </div>
            <div className="result-container">
                <div>Pemenang Arisan Minggu ini adalah : {selectedItem ? props.items[selectedItem] : ''}</div>
            </div>
        </>
    )
}

export default Wheel;