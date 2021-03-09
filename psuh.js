const push = require('web-push')

const vapIdKey = {
    publicKey: 'BH7aEDNgf5VBngDo-DRBxqj3p7MMP8N0woafnyhVg7WRHE2IG8htqXFGqhqrDVJp5hPIp-G8FhWYUVOk1_83kj0',
    privateKey: 'WdTbbu0mLpVnispE9rv34DPq2fiNbPjCnlemt-v3Yag'
  }

push.setVapidDetails('mailto:fkake123@gmail.com',vapIdKey.publicKey,vapIdKey.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eQy0ouBKZyQ:APA91bFadbYQU8o7FfhXgbxOcm9OoAXhYc82jm_erVylnXwd6HAfvq3LXzw4S5t0jAMF5u0kMWa5qBZYS9sAzt8E0K6JHS2Q37hBuKCF9qAPOhdk132MFJpZO6GS8bN83-Q5lHB2nr3F","expirationTime":null,"keys":{"p256dh":"BL9s-UDOezgNAxVMWcRYntN4NUvRp05_92No__rOkcNTKLW70BAR895o_stTS30q8967E34EQqP2P7bFZpqwR-I","auth":"zJwSHqaY_N3w2gu_0Kb0Kw"}}
push.sendNotification(sub,)

