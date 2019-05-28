import { RECEIVE_PROJECTS } from '../constants/ActionsTypes'

const initialState = {
    "project_name": "",
    "project_desc": "",
    "lifeCycle_type": "",
    "start_date": "",
    "end_date": "",
    "stage": ""
}

export default myReducer((state = initialState, action) =>  {
    switch (action.type) {
        case 'RECEIVE_PROJECTS':
            return {
                ...state,
                ...action.products.reduce((obj, product) => {
                  obj[product.id] = product
                  return obj
                }, {})
              }
        default:
            return state
    }
})
