import React from 'react';
import './Champions.css';

const Champions = ({ name, alias, image, region, role, skins, abilities }) => {
    return (
        <div className='lol-container'>
            <div className='champion-row'>
                <div className="champion">
                    <h1 className='champion-name'>Name: {name}</h1>
                    <p className='champion-alias'>Alias: {alias}</p>
                    <img src={image} alt='champion' />
                </div>
                <div className="champion-data">
                    <p className="champion-region">Region: {region}</p>
                    <p className="champion-role">Role: {role}</p>
                    {/* <p className='champion-skins'>Skins</p>
                    <ul>
                        <li><img src={skins} className="champion-skin" /></li>
                    </ul> */}
                </div>
            </div>
        </div>
    )
}

export default Champions;
