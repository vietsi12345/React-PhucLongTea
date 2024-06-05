import {
    CREATE_CATEGORY_FAILURE,
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_EVENTS_FAILURE,
    CREATE_EVENTS_REQUEST,
    CREATE_EVENTS_SUCCESS,
    CREATE_RESTAURANT_FAILURE,
    CREATE_RESTAURANT_REQUEST,
    CREATE_RESTAURANT_SUCCESS,
    DELETE_EVENTS_FAILURE,
    DELETE_EVENTS_REQUEST,
    DELETE_EVENTS_SUCCESS,
    DELETE_RESTAURANT_FAILURE,
    DELETE_RESTAURANT_REQUEST,
    GET_ALL_EVENTS_FAILURE,
    GET_ALL_EVENTS_REQUEST,
    GET_ALL_EVENTS_SUCCESS,
    GET_ALL_RESTAURANT_FAILURE, GET_ALL_RESTAURANT_REQUEST, GET_ALL_RESTAURANT_SUCCESS,
    GET_RESTAIRANTS_EVENTS_FAILURE,
    GET_RESTAIRANTS_EVENTS_REQUEST,
    GET_RESTAIRANTS_EVENTS_SUCCESS,
    GET_RESTAURANT_BY_ID_FAILURE,
    GET_RESTAURANT_BY_ID_REQUEST,
    GET_RESTAURANT_BY_ID_SUCCESS,
    GET_RESTAURANT_BY_USER_ID_FAILURE,
    GET_RESTAURANT_BY_USER_ID_REQUEST,
    GET_RESTAURANT_BY_USER_ID_SUCCESS,
    GET_RESTAURANT_CATEGORY_FAILURE,
    GET_RESTAURANT_CATEGORY_REQUEST,
    GET_RESTAURANT_CATEGORY_SUCCESS,
    UPDATE_RESTAURANT_FAILURE,
    UPDATE_RESTAURANT_REQUEST,
    UPDATE_RESTAURANT_STATUS_FAILURE,
    UPDATE_RESTAURANT_STATUS_REQUEST,
    UPDATE_RESTAURANT_STATUS_SUCCESS,
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
            dispatch({ type: GET_ALL_RESTAURANT_FAILURE, payload: error })
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
            dispatch({ type: GET_RESTAURANT_BY_ID_FAILURE, payload: error })
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
            dispatch({ type: GET_RESTAURANT_BY_USER_ID_FAILURE, payload: error })
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
            dispatch({ type: CREATE_RESTAURANT_FAILURE, payload: error })
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
            console.log(' cập nhật nhà hàng thành công: ', res.data)
        } catch (error) {
            console.log('lỗi ở cập nhật nhà hàng: ', error)
            dispatch({ type: UPDATE_RESTAURANT_FAILURE, payload: error })
        }
    }
}

export const deleteRestaurant = ({ restaurantId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_RESTAURANT_REQUEST });
        try {
            const res = await api.delete(`/api/admin/restaurant/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({ type: DELETE_EVENTS_SUCCESS, payload: restaurantId })
            console.log(' xóa nhà hàng thành công: ', res.data)
        } catch (error) {
            console.log('lỗi ở xóa nhà hàng: ', error)
            dispatch({ type: DELETE_RESTAURANT_FAILURE, payload: error })
        }
    }
}

export const updateRestaurantStatus = ({ restaurantId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST });
        try {
            const res = await api.put(`/api/admin/restaurants/${restaurantId}/status`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({ type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: res.data })
            console.log(' update trạng thái nhà hàng thành công: ', res.data)
        } catch (error) {
            console.log('lỗi ở cập nhật trạng thái nhà hàng: ', error)
            dispatch({ type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error })
        }
    }
}

export const createEventAction = ({ data, restaurantId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_EVENTS_REQUEST });
        try {
            const res = await api.post(`/api/admin/events/restaurant/${restaurantId}`, data, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({ type: CREATE_EVENTS_SUCCESS, payload: res.data })
            console.log(' tạo events: ', res.data)
        } catch (error) {
            console.log('lỗi ở tạo events: ', error)
            dispatch({ type: CREATE_EVENTS_FAILURE, payload: error })
        }
    }
}

export const getAllEvents = ({ jwt }) => {
    return async (dispatch) => {
        dispatch({ type: GET_ALL_EVENTS_REQUEST });
        try {
            const res = await api.get(`/api/events`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: res.data })
            console.log(' get all events: ', res.data)
        } catch (error) {
            console.log('lỗi ở get all events: ', error)
            dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error })
        }
    }
}


export const deleteEventAction = ({ eventId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_EVENTS_REQUEST });
        try {
            const res = await api.delete(`/api/admin/events/${eventId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({ type: DELETE_EVENTS_SUCCESS, payload: eventId })
            console.log('xóa events: ', res.data)
        } catch (error) {
            console.log('lỗi ở xóa event: ', error)
            dispatch({ type: DELETE_EVENTS_FAILURE, payload: error })
        }
    }
}

export const getRestaurantsEvents = ({ restaurantId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAIRANTS_EVENTS_REQUEST });
        try {
            const res = await api.get(`/api/admin/events/restaurant/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({ type: GET_RESTAIRANTS_EVENTS_SUCCESS, payload: res.data })
            console.log('lấy events của nhà hàng: ', res.data)
        } catch (error) {
            console.log('lỗi ở lấy events của nhà hàng: ', error)
            dispatch({ type: GET_RESTAIRANTS_EVENTS_FAILURE, payload: error })
        }
    }
}

export const createCategoryAction = ({ reqData, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_CATEGORY_REQUEST });
        try {
            const res = await api.post(`/api/admin/category`, reqData, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: res.data })
            console.log('tạo category thành công: ', res.data)
        } catch (error) {
            console.log('lỗi ở tạo category: ', error)
            dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error })
        }
    }
}

export const getRestaurantsCategory = ({ restaurantId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANT_CATEGORY_REQUEST });
        try {
            const res = await api.get(`/api/category/restaurant/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({ type: GET_RESTAURANT_CATEGORY_SUCCESS, payload: res.data })
            console.log('getRestaurantsCategory thành công: ', res.data)
        } catch (error) {
            console.log('lỗi ở getRestaurantsCategory: ', error)
            dispatch({ type: GET_RESTAURANT_CATEGORY_FAILURE, payload: error })
        }
    }
}