import React from 'react';
import './Registry.css'

class Registry extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="registry">
                <h1>Registry</h1>
                <a href="https://www.surlatable.com/on/demandware.store/Sites-SLT-Site/default/GiftRegistryCustomer-Show?ID=62c919ab6e2373e24698870cde">
                    <span>
                        <img className="brand-logo" src="img/surlatable.jpg" />
                    </span>
                </a>
                <a href="https://www.crateandbarrel.com/gift-registry/sumita-routh-and-chris-ell/r6081612">
                    <span>
                        <img className="brand-logo" src="img/cab.png" />
                    </span>
                </a>
                <a href="https://www.amazon.com/wedding/sumita-routh-chris-ell-philadelphia-october-2020/registry/FOPEUSOYRBFI">
                    <span>
                        <img className="brand-logo" src="img/amazon.png" />
                    </span>                    
                </a>
            </div>
        )
    }
}

export default Registry;