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
        'url': 'https://ops.co-workerhou.se/api/v1/slack/deploy/',
        'headers': {
            'accept': 'application/json',
            'Authorization': `Token ${getAuthToken()}`
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