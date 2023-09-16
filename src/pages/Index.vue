<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <q-btn label="click me" @click="send()" />
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar';

export default {
  name: 'PageIndex',
  data() {
    return {
    }
  },
  methods: {
    send () {
      // Send message
      // chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      //   var activeTab = tabs[0];
      //   chrome.tabs.sendMessage(activeTab.id, { message: "Send message từ extension." });
      //   console.log("Send message từ web thành công. người nhận content-script.js");
      // });


      // lấy tất cả cookies
      chrome.cookies.getAll({ url: "https://www.facebook.com/" }, (cookies) => {
        console.log(cookies, "cookies nè 11: ")
      });

      // lấy 1 cookies 
      // chrome.cookies.get({ url: "https://www.facebook.com/", name: "datr"}, (cookies) => {
      //   console.log(cookies, "cookies nè datr: ")
      // });
    }
  },
  created() {
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      console.log("Nhận lại message từ web thành công. nhận từ content-script.js");
    });
  }
}
</script>
