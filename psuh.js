const push = require('web-push')

const vapIdKey = {
    publicKey: 'BH7aEDNgf5VBngDo-DRBxqj3p7MMP8N0woafnyhVg7WRHE2IG8htqXFGqhqrDVJp5hPIp-G8FhWYUVOk1_83kj0',
    privateKey: 'WdTbbu0mLpVnispE9rv34DPq2fiNbPjCnlemt-v3Yag'
  }

push.setVapidDetails('mailto:fkake123@gmail.com',vapIdKey.publicKey,vapIdKey.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/d8USlcznS04:APA91bH0QoDPP_1U-AFOgOLAxXskMS8lv3imdfqMdKrkZyZslEdDpL7vuAN4Jv9LRaZ4gmxkLdj442qVHCCcO8JCZajI7HgNNo8CdxU-vG5pwCgr2BE0B5OQqXGmVPNADzl3furt0dU9","expirationTime":null,"keys":{"p256dh":"BOxefrsyJzq5fk4FscHx6NfuVxKGoLkg9k45Mkwq0PYOCS_LnQXRhcEeHU0HiQLX6thSOr6CwU3-GSwnh1zWCks","auth":"snRGJvxKVajjl8URZm-ANg"}}

push.sendNotification(sub,'my message --------aaaaaaaaaaaaaaaa')

