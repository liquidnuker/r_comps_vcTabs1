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
      <div v-show="tabContent === 'item1'">
        <!-- item mount -->
        <div id="tabs1_item1_mount">      
          loading...    
        </div>
        <!-- end item mount -->
      </div>
      <div v-show="tabContent === 'item2'">
        <!-- item mount -->
        <div id="tabs1_item2_mount">   
          loading...       
        </div>
        <!-- end item mount -->
      </div>
      <div v-show="tabContent === 'item3'">
        <!-- item mount -->
        <div id="tabs1_item3_mount">   
          loading...       
        </div>
        <!-- end item mount -->
      </div>
      <!-- end tabs1_item1 -->
    </div>
    <!-- end tabs1-01 -->
  </div>
</template>
<script>
import {inject} from "../js/componentinjector.js";
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
    this.loadTabContent("item1");
  },
  methods: {
    loadTabContent: function(item) {
      this.tabContent = item;

      switch(item) {
      case "item1":
        this.loadTabItem1();
      break;
      
      case "item2":
        this.loadTabItem2();
      break;

      case "item3":
        this.loadTabItem3();
      break;
      
      default:
        this.loadTabItem1();
      }
    },
    loadTabItem1: function() {
      const TabItem1 = resolve => {
        require.ensure(['./Tabs1_item1.vue'], () => {
          resolve(require('./Tabs1_item1.vue'))
        })
      };
      inject("#tabs1_item1_mount", TabItem1);
    },
    loadTabItem2: function() {
      const TabItem2 = resolve => {
        require.ensure(['./Tabs1_item2.vue'], () => {
          resolve(require('./Tabs1_item2.vue'))
        })
      };
      inject("#tabs1_item2_mount", TabItem2);
    },
    loadTabItem3: function() {
      const TabItem3 = resolve => {
        require.ensure(['./Tabs1_item3.vue'], () => {
          resolve(require('./Tabs1_item3.vue'))
        })
      };
      inject("#tabs1_item3_mount", TabItem3);
    }
  }
}
</script>