
import { api } from "../../Config/api";
import {
    CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS,
    DELETE_MENU_ITEM_FAILURE,
    DELETE_MENU_ITEM_REQUEST,
    DELETE_MENU_ITEM_SUCCESS,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
    SEARCH_MENU_ITEM_FAILURE,
    SEARCH_MENU_ITEM_REQUEST,
    SEARCH_MENU_ITEM_SUCCESS,
    UPDATE_MENU_ITEM_AVALIABLE_FAILURE,
    UPDATE_MENU_ITEM_AVALIABLE_REQUEST,
    UPDATE_MENU_ITEM_AVALIABLE_SUCCESS

} from "./ActionType"

export const createMenuItem = ({ menu, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_MENU_ITEM_REQUEST });
        try {
            const { data } = await api.post('api/admin/drink', menu,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                }
            )
            console.log('createMenuItem: ', data);
            dispatch({ type: CREATE_MENU_ITEM_SUCCESS, payload: data });
        } catch (error) {
            console.log("Lỗi createMenuItem ", error);
            dispatch({ type: CREATE_MENU_ITEM_FAILURE, payload: error });
        }
    }
}

export const getMenuItemsByRestaurantId = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST });
        try {
            const { data } = await api.get(`/api/drink/restaurant/${reqData.restaurantId}?vagetarian=${reqData.vagetarian}
            &nonveg=${reqData.nonveg}&seasonal=${reqData.seasonal}&drinkCategory=${reqData.drinkCategory}`,
                {
                    headers: {
                        Authorization: `Bearer ${reqData.jwt}`
                    }
                }
            )
            console.log('getMenuItemsByRestaurantId: ', data);
            dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data });
        } catch (error) {
            console.log("Lỗi getMenuItemsByRestaurantId ", error);
            dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload: error });
        }
    }
}

export const searchMenuItem = ({ keyword, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: SEARCH_MENU_ITEM_REQUEST });
        try {
            const { data } = await api.get(`api/drink/search?name=${keyword}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                }
            )
            console.log('searchMenuItem: ', data);
            dispatch({ type: SEARCH_MENU_ITEM_SUCCESS, payload: data });
        } catch (error) {
            console.log("Lỗi searchMenuItem ", error);
            dispatch({ type: SEARCH_MENU_ITEM_FAILURE, payload: error });
        }
    }
}

// export const getAllIngredientOfMenuItem = ({ reqData }) => {
//     return async (dispatch) => {
//         dispatch({ type: GET });
//         try {
//             const { data } = await api.post('api/admin/drink', menu,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${jwt}`
//                     }
//                 }
//             )
//             console.log('createMenuItem: ', data);
//             dispatch({ type: CREATE_MENU_ITEM_SUCCESS, payload: data });
//         } catch (error) {
//             console.log("Lỗi createMenuItem ", error);
//             dispatch({ type: CREATE_MENU_ITEM_FAILURE, payload: error });
//         }
//     }
// }

export const updateMenuItemsAvaliable = ({ drinkId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_MENU_ITEM_AVALIABLE_REQUEST });
        try {
            const { data } = await api.put(`/api/admin/drink/${drinkId}`, {},
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                }
            )
            console.log('updateMenuItemsAvaliable: ', data);
            dispatch({ type: UPDATE_MENU_ITEM_AVALIABLE_SUCCESS, payload: data });
        } catch (error) {
            console.log("Lỗi updateMenuItemsAvaliable ", error);
            dispatch({ type: UPDATE_MENU_ITEM_AVALIABLE_FAILURE, payload: error });
        }
    }
}

export const deleteFoodAction = ({ drinkId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_MENU_ITEM_REQUEST });
        try {
            const { data } = await api.delete(`/api/admin/food/${drinkId}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                }
            )
            console.log('deleteFoodAction: ', data);
            dispatch({ type: DELETE_MENU_ITEM_SUCCESS, payload: drinkId });
        } catch (error) {
            console.log("Lỗi deleteFoodAction ", error);
            dispatch({ type: DELETE_MENU_ITEM_FAILURE, payload: error });
        }
    }
}

