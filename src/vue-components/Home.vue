<template>
<div>
  <h1>tabs-set1</h1>
  <!-- begin tabs1-01 placeholder -->
  <h2 class="item-id">tabs1-01</h2>
  <div class="row">
    <div class="col-sm-3">39</div>
    <div class="col-sm-9">
      <!-- begin tabs1 mount -->
      <div id="tabs_1_mount">
        
      </div>
      <!-- end tabs1 mount -->
    </div>
  </div>
  <!-- end tabs1-01 placeholder -->
  <!-- begin tabs1-02 placeholder -->
  <h2  class="item-id">tabs1-02</h2>
  <div class="row">
    <div class="col-sm-3">39</div>
    <div class="col-sm-9">
      <!-- begin tabs1-02 -->
      <div class="tabs1-02">
        <input type="radio" name="tabs1-02" id="tabs1-02_radio3" class="tabs1-02_tab3"/>
        <label for="tabs1-02_radio3">tab3</label>
        <input type="radio" name="tabs1-02" id="tabs1-02_radio2" class="tabs1-02_tab2"/>
        <label for="tabs1-02_radio2">tab2</label>
        <input type="radio" name="tabs1-02" id="tabs1-02_radio1" class="tabs1-02_tab1" checked>
        <label for="tabs1-02_radio1">tab1</label>        
        
        <div class="tabs1-02_content1">content1</div>
        <div class="tabs1-02_content2">content2</div>
        <div class="tabs1-02_content3">content3</div>
      </div>
      <!-- end tabs1-02 -->
    </div>
  </div>
  <!-- end tabs1-02 placeholder -->  
</div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted: function () {
    this.loadTabs1();
  },
  methods: {
    loadTabs1: function() {
      const Tabs1 = resolve => {
        require.ensure(['./Tabs1.vue'], () => {
          resolve(require('./Tabs1.vue'))
        })
      };
      new Vue({
        el: '#tabs_1_mount',
        render: h => h(Tabs1)
      })
    }
  }
}
</script>