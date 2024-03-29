import http from "../services/httpService"
import jwtDecode from "jwt-decode";

const REGISTER_API_URL = "/auth/users/"
const LOGIN_API_URL = "/auth/jwt/create/"
const PROFILE_UPDATE_URL = '/auth/customers/';
const ME_URL = '/auth/users/me/'
const CUSTOMER_ME_URL = '/auth/customers/me/'

export function register(user) {
    return http.post(REGISTER_API_URL, {
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        email: user.email,
        password: user.password,
    })
}

export async function login(user) {
    const response = await http.post(LOGIN_API_URL, {
        username: user.username,
        password: user.password,
    })
    if (response.status === 200) {
        localStorage.setItem("access", response.data.access)
        localStorage.setItem("refresh", response.data.refresh)
    }
}

export function create_profile(profile) {
    const {id, first_name, last_name, brand_name, business_category, phone, website_url, address} = profile
    return http.post(PROFILE_UPDATE_URL,
        {
            user: id,
            first_name,
            last_name,
            brand_name,
            business_category: business_category.value,
            phone,
            website_url,
            address
        },
        {
            headers: {
                'Authorization': `JWT ${localStorage.getItem("access")}`
            }
        }
    )
}

export function edit_profile(profile) {
    const {id, first_name, last_name, brand_name, business_category, phone, website_url, address} = profile
    return http.put(CUSTOMER_ME_URL,
        {
            user: id,
            first_name,
            last_name,
            brand_name,
            business_category: business_category.value,
            phone,
            website_url,
            address
        },
        {
            headers: {
                'Authorization': `JWT ${localStorage.getItem("access")}`
            }
        }
    )
}

export function logout() {
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")

}

export function get_current_user() {
    try {
        const access_token = localStorage.getItem("access")
        return jwtDecode(access_token)

    } catch (ex) {
        console.log(ex)
    }


}

export function get_me() {
    return http.get(ME_URL,
        {
            headers: {
                'Authorization': `JWT ${localStorage.getItem("access")}`
            }
        })
}

export function get_customer_me() {
    return http.get(CUSTOMER_ME_URL,
        {
            headers: {
                'Authorization': `JWT ${localStorage.getItem("access")}`
            }
        })
}