<template>
  <!-- tabs1-01 -->
  <nav class="tabs1-01">
    <template v-for="i in items">
      <div v-on:click="loadTabContent(i.tabName)">
        {{ i.tabName }}
      </div>
    </template>
  </nav>
  <div class="row col-sm-12 tabs1-01_content">
    <!-- tabs1-01_content mount -->
    <div id="tabs1_01_content_mount">
      {{ tabContent }}
    </div>
    <!-- end tabs1-01_content mount -->
  </div>
  <!-- end tabs1-01 -->
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          tabName: 'item1'
        },
        {
          tabName: 'item2'
        },
        {
          tabName: 'item3'
        }
      ],
      tabContent: 'item1'
    }
  },
  mounted: function () {
    console.log("Tabs1.vue mounted");
  },
  methods: {
    loadTabContent: function(item) {
      console.log(item);
      this.tabContent = item;
    }
  }
}
</script>