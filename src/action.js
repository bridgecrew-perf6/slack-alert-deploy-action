const core = require('@actions/core')
const slack_deploy_alert = require('./slack-alert-deploy')


async function run(){
    const channel = core.getInput('channel', {required: true})
    const schedule = core.getInput('schedule', {required: true})
    const release_version = core.getInput('release_version', {required: true})
    const milestones = core.getInput('milestones', {required: true})
    const driver = core.getInput('driver', {required: true})
    const description = core.getInput('description')

    // const channel = '#dev_slack_notification'
    // const schedule = '1'
    // const release_version = '2'
    // const milestones = '3'
    // const driver = '4'
    // const description = '6'

    await slack_deploy_alert.slack_alert_deploy(channel, schedule, release_version, milestones, driver, description)

}


run();