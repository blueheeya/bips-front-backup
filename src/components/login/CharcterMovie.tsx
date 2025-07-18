import React from 'react';
import '../../assets/styles/login.scss';
import chtitme1 from '../../assets/images/login/bipsCht1.svg';
import chtitme2 from '../../assets/images/login/bipsCht2.svg';
import chtitme3 from '../../assets/images/login/bipsCht3.svg';

const CharcterMovie = () => {
    return (
        <div className="bgCharacter">
            <img src={chtitme1} className="character c1" alt="dollar1" />
            <img src={chtitme2} className="character c2" alt="dollar2" />
            <img src={chtitme3} className="character c3" alt="dollar3" />
        </div>
    );
};

export default CharcterMovie;
