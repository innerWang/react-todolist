import React ,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addTodo} from '../actions.js';


class AddTodo extends Component{

  onSubmit = (event)=>{
    event.preventDefault();
    
    const input = this.input;
    if(!input.value.trim()){
      return;
    }
    this.props.onAdd(input.value);
    input.value='';
  }
//ref属性可以设置为一个回调函数
//组件被挂载后，回调函数被立即执行，回调函数的参数为该组件的具体实例。
  refInput = (node)=>{
    this.input = node;
  }

  render(){
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" placeholder="add one new to-do" ref={this.refInput}/>
          <button className="add-btn" type="submit">add</button>
        </form>
      </div>
    );
  }
}

//调用dispatch用于派发action对象
const mapDispatchToProps = (dispatch)=>{
  return ({
    onAdd: (text)=>{
      dispatch(addTodo(text));
    }
  })
}


AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
};
export default connect(null,mapDispatchToProps)(AddTodo);


 