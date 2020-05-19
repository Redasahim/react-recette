import React from 'react';

const Header = ({pseudo}) => {
    const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0])?`d'${pseudo}`:`de ${pseudo}` 
    //i pour ne pas prendre en compte la casse
    return (
        <header>
            <h1>La boite a recette {formatPseudo(pseudo)}</h1>
            <h1 className='text-center'>Azul {pseudo}</h1>
        </header>
    );
};

export default Header