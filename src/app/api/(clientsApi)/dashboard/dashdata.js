import { users, admin } from '../../user/data'

export const dashboard = [
    {
        "id": 1,
        "role": "admin",
        "value": admin.length,
        "icon": "1234",
    },
    {
        "id": 2,
        "role": "user",
        "value": users.length,
        "icon": "1234",
    },
]