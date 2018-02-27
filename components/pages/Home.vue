<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Card Name</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="open">Link</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'List item ' + o }}
      </div>
    </el-card>

    <br/>

    <div class="text-xs-center">
      <el-popover
        ref="popover2"
        placement="top"
        title="Title"
        width="200"
        trigger="hover"
        content="this is content, this is content, this is content">
      </el-popover>

      <el-button size="mini" v-popover:popover2>Default</el-button>
      <el-button size="mini" type="primary">Primary</el-button>
      <el-button size="mini" type="success">Success</el-button>
      <el-button size="mini" type="info">Info</el-button>
      <el-button size="mini" type="warning">Warning</el-button>
      <el-button size="mini" type="danger">Danger</el-button>
      <!-- <el-checkbox v-model="checked">Option</el-checkbox> -->
    </div>

    <br/>

    <div class="text-xs-center">
      <v-btn color="yellow darken-3" @click="toggleDrawer">Toggle</v-btn>
      <v-btn color="yellow darken-3" @click="logout">Logout</v-btn>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  mounted() {
    this.title();
  },
  methods: {
    title() {
      store.dispatch("CHANGE_APPLICATION_TITLE", "Home");
    },
    logout: function() {
      store
        .dispatch("authModule/FIREBASE_SIGN_OUT")
        .then(() => {
          store.dispatch("SIGN_OUT_USER");
        })
        .then(() => {
          this.$router.replace("/login");
        });
    },
    toggleDrawer: function() {
      console.log("page: home -> toggleDrawer() ", store.getters.getDrawer);

      store.dispatch("TOGGLE_DRAWER");
    },
    open() {
      const h = this.$createElement;

      this.$notify({
        title: "Title",
        message: h("i", { style: "color: teal" }, "This is a reminder"),
        showClose: false
      });
    }
  },
  created: function() {
    if (!store.getters.getAuth) {
      this.$router.replace("/login");
    }
  }
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
