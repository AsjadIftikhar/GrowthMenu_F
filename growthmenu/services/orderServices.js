import http from "../services/httpService"

// const JWT_TOKEN = `JWT ${localStorage.getItem("access")}`
const SERVICES_URL = "/api/service/"

// const PRODUCT_CHARACTERISTICS_URL = "/api/productCharacteristic/"


export function get_services() {
    return http.get(SERVICES_URL,
        {
            headers: {
                'Authorization': `JWT ${localStorage.getItem("access")}`
            }
        })
}

export function get_service(id) {
    return http.get(`${SERVICES_URL}${id}/`,
        {
            headers: {
                'Authorization': `JWT ${localStorage.getItem("access")}`
            }
        })
}

export function get_service_description(id) {
    return http.get(`${SERVICES_URL}${id}/description`,
        {
            headers: {
                'Authorization': `JWT ${localStorage.getItem("access")}`
            }
        })
}

export function get_service_faqs(id) {
    return http.get(`${SERVICES_URL}${id}/faq`,
        {
            headers: {
                'Authorization': `JWT ${localStorage.getItem("access")}`
            }
        })
}

export function create_services(service) {
    return http.post(SERVICES_URL,
        {
            "title": service.title,
            "src": service.src,
        },
        {
            headers: {
                'Authorization': `JWT ${localStorage.getItem("access")}`
            }
        }
    )
}

export function update_service(service) {
    return http.patch(`${SERVICES_URL}${service.id}/`,
        {
            "title": service.title,
        },
        {
            headers: {
                'Authorization': `JWT ${localStorage.getItem("access")}`
            }
        }
    )
}

export function delete_service(id) {
    return http.delete(`${SERVICES_URL}${id}/`,
        {
            headers: {
                'Authorization': `JWT ${localStorage.getItem("access")}`
            }
        });
}