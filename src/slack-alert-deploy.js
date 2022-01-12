const request = require('request');

function getAuthToken() {
    const token = process.env.AUTH_TOKEN
    if (!token)
        throw ReferenceError(
            'There is no token defined in the environment variables'
        )
    return token
}

export async function slack_alert_deploy(channel, schedule, release_version, milestones, driver, description){
    let options;
    options = {
        'method': 'POST',
        // 'url': 'https://ops.co-workerhou.se/api/v1/slack/deploy/',
        'url': 'https://ops-dev.dailyhou.se/api/v1/slack/deploy/',
        // 'url': 'http://localhost:8000/api/v1/slack/',
        'headers': {
            'accept': 'application/json',
            'Authorization': `Token ${getAuthToken()}`
            // 'Authorization': 'Token G0L5BjQQIfhv0HcNAtI9Li745yUdUzjv'
        },
        formData: {
            'channel': channel,
            'schedule': schedule,
            'release_version': release_version,
            'milestones': milestones,
            'driver': driver,
            'description': description
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });
};