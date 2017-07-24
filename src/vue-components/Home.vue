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