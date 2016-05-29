// TODO: Write the other files too. -MANI

const yaml = require('js-yaml')
const fs = require('fs')

function create({webhookUrls}) {
  const travisYamlConfig = yaml.safeDump({
    sudo: false,
    language: 'node_js',
    'node_js': [
      5
    ],
    notifications: {
      webhooks: {
        urls: webhookUrls
      }
    }
  })
  fs.writeFileSync('.travis.yml', travisYamlConfig)
}

module.exports = {
  create
}

// TODO: Should replicate below. -MANI
/*
sudo: false
language: node_js
node_js:
  - "5"
notifications:
  webhooks:
    urls:
      - https://webhooks.gitter.im/e/b7aec741b39ea5dc9d00
    on_success: change  # options: [always|never|change] default: always
    on_failure: always  # options: [always|never|change] default: always
    on_start: never     # options: [always|never|change] default: always
*/