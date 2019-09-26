import react, {Component} from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    constructor(props, context) {
        super (props, context);

        this.onSubmit = this.onSubmit.bind(this);
        this.refInput = this.refInput.bind(this);
    }
    onSubmit(ev) {
        ev.preventDefault();
        
        const input = this.input;
        if(!input.value.trim()) {
            return;
        }

        this.props.onAdd(input.value);
        input.value = '';
    }
    refInput(node) {
        this.input = node;
    }
    render () {
        return (
            <div className ="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" ref={this.refInput}/>
                    <button className="add-button" type="submit">
                        添加
                    </button>
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired,
}

const  mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text)=> {
            dispatch(AddTodo(text));
        }
    }
}
//connect核心任务是将组件和Store联系在一起
export default connect(null, mapDispatchToProps)(AddTodo);
//connect做的两件事
//1.把Store上的状态转化为内层傻瓜组件的prop; //内层傻瓜对象的输入
//2.把内层傻瓜组件中的用户动作转化为派送给Store的动作. //内层傻瓜对象的输出
//connect函数,接收两个参数
//1.mapStateToProps把store上的状态,转化为内层props,返回结果必须时对象.对象中的值会更新到组件中
//2.mapDispatchToProps把组件暴露出来的含税类型的props关联上dispatch函数的调用,每个prop代表的回调含税的主要区别及时dispatch函数的参数不同