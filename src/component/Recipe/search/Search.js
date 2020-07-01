import React, { Component } from 'react';

import './Search.scss';
import './CategoryBox.scss';

import searchIcon from '../../../assets/icon/search.png'

class CategoryBox extends Component {


    render() {
        const { icon, icon_C, txt, name } = this.props;

        return (
            <a className={'recipe__search__category__box index-' + name}>
                <div>
                    <img className="box__icon" src={icon}/>
                    <img className="box__iconC" src={icon_C}/>
                </div>
                <p>{txt}</p>
            </a>
        )
    }
}

class Search extends Component {
    state = {
        inputClicked: false
    }
    
    inputClick = () => {
        this.setState({
            inputClicked: true
        })
        document.getElementById('recipeSerchInput').focus();
    }

    inputClickOut = () => {
        this.setState({
            inputClicked: false
        })
        document.getElementById('recipeSerchInput').blur();
    }

    render() {
        const { inputClicked } = this.state;
        const { categoryList } = this.props;

        const inputEnter = (e) => {
            if(e.key === 'Enter') {
                
            }
        }

        const changeCategory = (e) => {
            
        }

        const category = categoryList.map((data, i) => <CategoryBox icon={data.icon} icon_C={data.icon_C} txt={data.txt} name={data.name} key={i}/>);

        return (
            <>
                <article className="recipe__search__bar">
                    <div className={`recipe__search__${inputClicked ? 'bar--clicked' : 'bar--unclicked'}`}  onClick={this.inputClick} onBlur={this.inputClickOut}>
                        <img src={searchIcon}/>
                        <input id="recipeSerchInput" type="text" placeholder={inputClicked ? '검색하실 레시피를 적어주세요.' : ''} onKeyDown={inputEnter} autoComplete="off"/>
                    </div>
                </article>
                <article className="recipe__search__category">
                    <div>
                        {category}
                    </div>
                </article>
            </>
        )
    }
}

export default Search;