const request = require('request');

function getAuthToken() {
    const token = process.env.AUTH_TOKEN
    if (!token)
        throw ReferenceError(
            'There is no token defined in the environment variables'
        )
    return token
}

export async function slack_alert_deploy(app_name, channel, release_version, milestones, driver, description, app_profile){
    let options;
    options = {
        'method': 'POST',
        'url': 'https://ops.co-workerhou.se/api/v1/slack-deploy/trigger/',
        'headers': {
            'accept': 'application/json',
            'Authorization': `Token ${getAuthToken()}`
        },
        formData: {
            'app_name': app_name,
            'channel': channel,
            'release_version': release_version,
            'milestones': milestones,
            'driver': driver,
            'description': description,
            'app_profile': app_profile,
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });
};