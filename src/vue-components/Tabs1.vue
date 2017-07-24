<template>
  <div>
    <!-- tabs1-01 -->
    <nav class="tabs1-01" role="tablist">
      <template v-for="(i, index) in items">
        <div class="tabs" role="tab" :aria-selected="i.isActive" :aria-setsize="items.length" 
        :aria-posinset="index + 1" tabindex="0" 
        :class="{active: i.isActive}" 
        @click="loadTabContent(i.tabName, index)">
          {{ i.tabName }}
        </div>
      </template>
    </nav>
    <div class="row col-sm-12 tabs1-01_panels">
      <keep-alive>
        <component :is="currentTab" />
      </keep-alive>
    </div>
    <!-- end tabs1-01 -->
  </div>
</template>
<script>
const tabItem1 = () => import('./Tabs1_item1.vue');
const tabItem2 = () => import('./Tabs1_item2.vue');
const tabItem3 = () => import('./Tabs1_item3.vue');

export default {
  data () {
    return {
      items: [
        {
          tabName: "item1",
          isActive: false
        },
        {
          tabName: "item2",
          isActive: false
        },
        {
          tabName: "item3",
          isActive: false
        }
      ],
      activeTab: 0,
      currentTab: tabItem1      
    };
  },
  mounted: function () {
    this.loadTabContent("item1", 0);
  },
  methods: {
    setActiveTab: function(index) {
      let activeIndex = index;

      // "this" removers
      let items = this.items; 
      let activeTab = this.activeTab;

      items[activeIndex].isActive = true;      
      
      // remove activeTab
      if (activeTab !== activeIndex) {
        items[activeTab].isActive = false;
        
        // set current activeTab
        this.activeTab = activeIndex;
      }
    },
    loadTabContent: function(item, index) {
      this.setActiveTab(index);
                  
      switch(item) {
      case "item1":
        this.currentTab = tabItem1;   
      break;
      
      case "item2":
        this.currentTab = tabItem2;  
      break;

      case "item3":
        this.currentTab = tabItem3;  
      break;
      
      default:
        this.currentTab = tabItem1;  
      }
    }
  }
};
</script>