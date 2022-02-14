const core = require('@actions/core')
const slack_deploy_alert = require('./slack-alert-deploy')


async function run(){
    const app_name = core.getInput('app_name', {required: true})
    const channel = core.getInput('channel', {required: true})
    const release_version = core.getInput('release_version', {required: true})
    const milestones = core.getInput('milestones', {required: true})
    const driver = core.getInput('driver', {required: true})
    const description = core.getInput('description')
    const app_profile = core.getInput('app_profile')

    await slack_deploy_alert.slack_alert_deploy(app_name, channel, release_version, milestones, driver, description, app_profile)

}


run();