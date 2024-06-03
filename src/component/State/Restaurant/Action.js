import {
    CREATE_RESTAURANT_FAILURE,
    CREATE_RESTAURANT_REQUEST,
    CREATE_RESTAURANT_SUCCESS,
    GET_ALL_RESTAURANT_FAILURE, GET_ALL_RESTAURANT_REQUEST, GET_ALL_RESTAURANT_SUCCESS,
    GET_RESTAURANT_BY_ID_FAILURE,
    GET_RESTAURANT_BY_ID_REQUEST,
    GET_RESTAURANT_BY_ID_SUCCESS,
    GET_RESTAURANT_BY_USER_ID_FAILURE,
    GET_RESTAURANT_BY_USER_ID_REQUEST,
    GET_RESTAURANT_BY_USER_ID_SUCCESS,
    UPDATE_RESTAURANT_FAILURE,
    UPDATE_RESTAURANT_REQUEST,
    UPDATE_RESTAURANT_SUCCESS

} from "./ActionType"
import { api } from "../../Config/api";

export const getAllRestaurantsAction = (token) => {
    return async (dispatch) => {
        dispatch({ type: GET_ALL_RESTAURANT_REQUEST });
        try {
            const { data } = await api.get('/api/restaurants', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch({ type: GET_ALL_RESTAURANT_SUCCESS, payload: data })
            console.log('danh sachs restaurant: ', data)
        } catch (error) {
            console.log('lỗi ở lấy danh sách nhà hàng: ', error)
            dispatch({ type: GET_ALL_RESTAURANT_FAILURE, payload: err })
        }
    }
}

export const getRestaurantById = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST });
        try {
            const response = await api.get(`/api/restaurants/${reqData.restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`
                }
            })
            dispatch({ type: GET_RESTAURANT_BY_ID_SUCCESS, payload: response.data })
            console.log(' restaurant theo id: ', response.data)
        } catch (error) {
            console.log('lỗi ở lấy nhà hàng theo id: ', error)
            dispatch({ type: GET_RESTAURANT_BY_ID_FAILURE, payload: err })
        }
    }
}

export const getRestaurantByUserId = (jwt) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANT_BY_USER_ID_REQUEST });
        try {
            const { data } = await api.get('/api/admin/restaurants/user', {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({ type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: data })
            console.log(' restaurant theo id user: ', data)
        } catch (error) {
            console.log('lỗi ở lấy nhà hàng theo user id: ', error)
            dispatch({ type: GET_RESTAURANT_BY_USER_ID_FAILURE, payload: err })
        }
    }
}

export const createRestaurant = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_RESTAURANT_REQUEST });
        try {
            const { data } = await api.post('/api/admin/restaurants', reqData.data, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`
                }
            })
            dispatch({ type: CREATE_RESTAURANT_SUCCESS, payload: data })
            console.log(' tạo nhà hàng thành công: ', data)
        } catch (error) {
            console.log('lỗi ở tạo nhà hàng: ', error)
            dispatch({ type: CREATE_RESTAURANT_FAILURE, payload: err })
        }
    }
}

export const updateRestaurant = ({ restaurantId, restaurantData, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_RESTAURANT_REQUEST });
        try {
            const res = await api.put(`/api/admin/restaurant/${restaurantId}`, restaurantData, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: res.data })
            console.log(' cập nhật nhà hàng thành công: ', data)
        } catch (error) {
            console.log('lỗi ở cập nhật nhà hàng: ', error)
            dispatch({ type: UPDATE_RESTAURANT_FAILURE, payload: err })
        }
    }
}