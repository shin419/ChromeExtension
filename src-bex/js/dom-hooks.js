// Chạy dưới background của web

export default function attachDomHooks (bridge) {
  console.log("start send message.")
  bridge.send('message.to.quasar', {
    worked: true
  })
  console.log("end send message.")
}