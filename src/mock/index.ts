import Mock from 'mockjs'
const baseUrl = 'http://localhost:8080'
Mock.mock(baseUrl+'/checklist','get',{
    "status": 200,
    "data": {
        "items|5": [
            {
                "event_id": "@id",
                "event_name": "@ctitle(10)",
                "checked": "@boolean",
                "comment": "@ctitle(20)",
                "color|1": ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3']
            }
        ]
    }
})

export default Mock