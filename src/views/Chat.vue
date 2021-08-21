<template >
  <div >
    <h2>chatroom</h2> 
    <v-list>
      <v-list-item
          v-for="msg in this.$store.getters.messages"
          :key="msg.id"
      >
        <v-list-item-content>
          {{ msg.username }} - {{ msg.message }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <div class="chatbox-wrapper">
      <input
        type="text"
        class="chatbox px-3 p-2"
        placeholder="Send a message..."
        @keyup.enter="sendMessage"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  methods: {
    sendMessage: function(e) {
      e.preventDefault();
      if (e.target.value === '') return;
      this.$store.state.chatConnection.send(JSON.stringify({receiver: 'admin',sender: this.$store.state.user.userName, message: e.target.value, id: Date.now()}));
      e.target.value = '';
    },
  },
}
</script>


