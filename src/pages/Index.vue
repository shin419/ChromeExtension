<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <q-btn label="click me" @click="send" />
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
    }
  },
  methods: {
    send () {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { message: "Xin chào từ tiện ích mở rộng!" });
      });
    }
  }
}
</script>
