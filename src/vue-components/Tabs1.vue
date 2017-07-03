<template>
  <div>
    <!-- tabs1-01 -->
    <nav class="tabs1-01">
      <template v-for="i in items">
        <div class="tabs" v-on:click="loadTabContent(i.tabName)">
          {{ i.tabName }}
        </div>
      </template>
    </nav>
    <div class="row col-sm-12 tabs1-01_content">
      <!-- tabs1_item1-->
      <div v-if="tabContent === 'item1'">
        {{ tabContent }}
      </div>
      <div v-if="tabContent === 'item2'">
        {{ tabContent }}
      </div>
      <div v-if="tabContent === 'item3'">
        {{ tabContent }}
      </div>
      <!-- end tabs1_item1 -->
    </div>
    <!-- end tabs1-01 -->
  </div>
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
    this.loadTabContent("item1");
  },
  methods: {
    loadTabContent: function(item) {
      // console.log(item);
      this.tabContent = item;
    }
  }
}
</script>