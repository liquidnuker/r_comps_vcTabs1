<template>
  <div>
    <!-- vueTabs101 -->
    <nav class="vueTabs101" role="tablist">
      <template v-for="(i, index) in items">
        <div class="tabs" role="tab" :aria-selected="i.isActive" :aria-setsize="items.length" 
        :aria-posinset="index + 1" tabindex="0" 
        :class="{active: i.isActive}" 
        @click="loadTabContent(i.tabName, index)">
          {{ i.tabName }}
        </div>
      </template>
    </nav>
    <div class="row col-sm-12 vueTabs101_panels"
    aria-live="assertive" aria-atomic="true">
      <keep-alive>
        <component :is="currentTab" />
      </keep-alive>
    </div>
    <!-- end vueTabs101 -->
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
      let items = this.items; 
      let activeTab = this.activeTab;
      let activeIndex = index;

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