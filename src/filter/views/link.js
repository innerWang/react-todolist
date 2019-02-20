import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setFilter} from '../actions.js';

const Link = (props)=>{
  if(props.active){
    return <button className="filter selected">{props.children}</button>
  }else{
    return (
      <button className="filter" onClick={(e)=>{
        e.preventDefault();
        props.onClick();
      }}>{props.children}</button>
    )
  }
}


Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};


const mapStateToProps = (state,ownProps)=>{
  return {
    active: state.filter === ownProps.filter
  }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
  return {
    onClick: ()=>{
      dispatch(setFilter(ownProps.filter))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Link);