import React ,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addTodo} from '../actions.js';


class AddTodo extends Component{

  constructor(props){
    super(props)

    /**组件的局部变量存放在state中 */
    this.state = {
      value:''
    }
  }

  onSubmit = (event)=>{
    event.preventDefault();
    
    const inputValue = this.state.value;
    if(!inputValue.trim()){
      return;
    }
    this.props.onAdd(inputValue);
    this.setState({value:''});
  }
//ref属性可以设置为一个回调函数
//组件被挂载后，回调函数被立即执行，回调函数的参数为该组件的具体实例。
  refInput = (node)=>{
    this.input = node;
  }

  onInputChange = (event) =>{
    this.setState({
      value: event.target.value
    })
  }

  render(){
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" onChange={this.onInputChange} value={this.state.value}/>
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


 