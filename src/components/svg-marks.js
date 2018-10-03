import '../App.css';
import {Component} from "react";

import React from "react";


/** Class representing an SvgMarks. */
class SvgMarks extends Component{
    /**
     * Create a Filters.
     * Bind Event Listener
     */
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }
/**
 * Transfer Event to an App.js
 * @param {object} e - React standart SyntheticEvent initialized keyboardEvent ;
 * */
    handleClick( e ){
        let onhandleClick = this.props.onhandleClick;

        if( onhandleClick ) {
            onhandleClick( e );
        }
    }
    /**
     *
     * Get todoRow status for choosing color
     * */
    getColor() {
        return this.props.active ? <path className= 'svg-path'
                                         fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z">X</path> :null;
    }

    /**
     * Rendering process
     *  Create area of svg marks for every todoRow
     */
    render() {
        const color = this.getColor();

        return (
                <svg className = 'svg_item'
                     viewBox="-10 -18 100 135"
                     onClick={ this.handleClick }
                >
                    <circle className='circle'
                            cx="62"
                            cy="62"
                            r="40"
                            fill='none'
                            stroke="#ededed"

                    />
                    {color}
                </svg>
        );
    }
}
/**
 * A module that exports part of svg in of our Application!
 * @exports SvgMarks
 */
export default SvgMarks;



