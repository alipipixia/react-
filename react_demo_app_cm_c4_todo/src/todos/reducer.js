import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes';
export default (state=[], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                },
                ...state,
            ]
            //扩展操作符,可以扩展用来扩展一个对象,也可以用来扩展一个数组  扩展数组写法 return [newObject, state]
            //return 必修是一个纯杉树,纯含税不能哟任何副作用,包括不能修改参数对象
        }
        case TOGGLE_TODO: {
            return state.map((item)=> {
                if(item.id === action.id) {
                    return {...item, completed:!item.completed};
                    //扩展操作符可以在{}符号中将一个对象展开,这样在{}后面的部分的字段值,可以覆盖展开的部分
                } else {
                    return item;
                }
            })
        }
        case REMOVE_TODO: {
            return state.filter((item)=> {
                return item.id !== action.id;
            })
        }
        //一定不要漏掉了defalt的条件,*************reducer会接手任意action,包括它不感兴趣的action,这样就应该执行defalt中的语句,将state原样返回,表示不需要更改state
        default: {
            return state;
        }
    }
}