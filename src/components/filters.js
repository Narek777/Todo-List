import {Component} from "react";
import React from "react";
import { Link } from 'react-router-dom'

/** Class representing an Filters. */
class Filters extends Component {
    /**
     * Create a Filters.
     * Bind Event Listeners
     */
    constructor(props) {
        super(props);

        this.handleAllClick = this.handleAllClick.bind(this);
        this.handleActive = this.handleActive.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
        this.handleClearCompleted = this.handleClearCompleted.bind(this);
    }

    /**
     * transfer handleAllClick event to an App
     * */

    handleAllClick() {
        this.props.onhandleAllClick();
    }

    /**
     * transfer handleActive event to an App
     * */

    handleActive() {
        this.props.onhandleActive();
    }

    /**
     * transfer handleCompleted event to an App
     * */

    handleCompleted() {
        this.props.onhandleCompleted();
    }

    /**
     * transfer     handleClearCompleted event to an App
     * */

    handleClearCompleted(){
        this.props.onhandleClearCompleted();
    }

    /**
     * Rendering process
     *  Create area of filters for an Application
     */

    render() {

        return (

                <div className='filter filterlist-mg flex alCen wrap'>
                        <div className='inlineList w20 ns pd-top9'>{this.props.length} items left</div>
                        <div className='inlineList w20 ns div-All'>
                            <Link to={`/`}>
                            <button className='w-h-100 btn btn1 ' onClick={this.handleAllClick}>All</button>
                            </Link>
                        </div>
                        <div className='inlineList w20 ns div-Active'>
                            <Link to={`/Active`}>
                            <button className='w-h-100 btn btn1 ' onClick={this.handleActive}>Active</button>
                            </Link>
                        </div>
                        <div className='inlineList w20 ns div-Completed'>
                            <Link to={`/Completed`}>
                            <button className='w-h-100 btn btn1' onClick={this.handleCompleted}>Completed</button>
                            </Link>
                        </div>
                        <div className='inlineList w20 ns div-ClearCompleted'>
                            <Link to={`/`}>
                                <button className='w-h-100 btn btn1' onClick={this.handleClearCompleted}>Clear Completed</button>
                            </Link>
                        </div>
                </div>
        );
    }

}

/**
 * A module that exports part of filters in of our Application!
 * @exports Filters
 */
export default Filters;
