import React from 'react';

import './RecipeBox.scss';

const RecipeBox = ({ titleImage, title, category, madeBy, type }) => {
    return (
        <a className="recipe-box">
            <div className="recipe-box__img">
                <img src={titleImage}/>
            </div>
            <div className="recipe-box__txt">
                <h4 className="recipe-box__txt__title">{title}</h4>
                <p className={"recipe-box__txt__category type-" + type}>{category}</p>
                <p className="recipe-box__txt__madeby">{`RecipeBy ${madeBy}`}</p>
            </div>
        </a>
    )
}

export default RecipeBox;