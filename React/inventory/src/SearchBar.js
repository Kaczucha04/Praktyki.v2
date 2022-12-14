import { useState } from 'react';



function SearchBar(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const searchButtonPress = () => {
            props.callback({ name: name, price: price, type: type, brand: brand});
        };

    return(
        <div>
            <h2>Serach for an Item</h2>
            <form>     
                <label htmlFor="name-field">Name</label>
                <input id="name-field" type="text" value={name} onChange={ (e) => setName(e.target.value)}>
                </input>
                <label htmlFor="price-field">Price</label>
                <input id="price-field" type="nubmer" value={price} onChange={ (e) => setPrice(e.target.value)}></input>
                <label htmlFor="type-field">Type</label>
                <input id="type-field" type="text" value={type} onChange={ (e) => setType(e.target.value)}></input>
                <label htmlFor="brand-field">brand</label>
                <input id="brand-field" type="text" value={brand} onChange={ (e) => setBrand(e.target.value)}></input>
                <button type="button" onClick={searchButtonPress}>Search</button>
                </form>
        </div>
    )
}

export default SearchBar;