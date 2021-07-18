import React from 'react';
import {
    Container
} from 'react-bootstrap';
import './Registry.css'

class Registry extends React.Component {
    render(){
        return (
            <Container>
            <div className="registry">
                <h1>Registry</h1>
                <p>Please know that your presence at our wedding is present enough! However, for friends and family who have been asking for gift ideas, we’ve created online registries below:</p>
                <div className="centered">
                    <a target="blank" href="https://www.surlatable.com/on/demandware.store/Sites-SLT-Site/default/GiftRegistryCustomer-Show?ID=859fb8c9f4939d3f8b91c0e60d">
                        <span>
                            <img className="brand-logo" alt="Sur La Table" src="img/surlatable.jpg" />
                        </span>
                    </a>
                    <a target="blank" href="https://www.crateandbarrel.com/gift-registry/sumita-routh-and-chris-ell/r6081612">
                        <span>
                            <img className="brand-logo" alt="Crate and Barrel" src="img/cab.png" />
                        </span>
                    </a>
                    <a target="blank" href="https://www.amazon.com/wedding/sumita-routh-chris-ell-philadelphia-october-2020/registry/FOPEUSOYRBFI">
                        <span>
                            <img className="brand-logo" alt="Amazon.com" src="img/amazon.png" />
                        </span>
                    </a>
                </div>
            </div>
            </Container>
        )
    }
}

export default Registry;