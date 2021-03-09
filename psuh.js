const push = require('web-push')

const vapIdKey = {
    publicKey: 'BH7aEDNgf5VBngDo-DRBxqj3p7MMP8N0woafnyhVg7WRHE2IG8htqXFGqhqrDVJp5hPIp-G8FhWYUVOk1_83kj0',
    privateKey: 'WdTbbu0mLpVnispE9rv34DPq2fiNbPjCnlemt-v3Yag'
  }

push.setVapidDetails('mailto:fkake123@gmail.com',vapIdKey.publicKey,vapIdKey.privateKey)

let sub = {}

push.sendNotification(sub,'my message')

