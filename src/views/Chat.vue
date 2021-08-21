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
  data: function() {
    return {
      connection: null,
      id: 1,
    }
  },
  methods: {
    sendMessage: function(e) {
      e.preventDefault();
      if (e.target.value === '') return;
      this.connection.send(JSON.stringify({username: this.$store.state.user.userName, message: e.target.value, id: this.id}));
      this.id = this.id + 1;
      e.target.value = '';
    },
  },
  created: function() {
    console.log(this.$store.state.user)
    console.log("Starting connection to WebSocket Server")
    this.connection = new WebSocket("ws://localhost:8080")
    let that = this;
    this.connection.onmessage = function(event) {
      that.$store.commit('add_message',JSON.parse(event.data));
    }

    this.connection.onopen = function() {
      console.log("Successfully connected to the echo websocket server...");
    }

  },
}
</script>


