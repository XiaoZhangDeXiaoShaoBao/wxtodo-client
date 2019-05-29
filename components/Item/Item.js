Component({

  properties: {
    content: {
      type: String,
      value: ''
    },
    tags: {
      type: Array,
      value: []
    },
    extra: {
      type: String,
      value: ''
    },
    finished: {
      type: Boolean,
      value: false
    },
    action: {
      type: String,
      value: ''
    }
  },

  data: {
    collapsed: true
  },

<<<<<<< HEAD
  // attached: function() {
  //   console.log('component attached!');
  // },

  // detached: function() {
  //   console.log('component dettached!');
  // },
=======
  attached: function() {
    console.log('component attached!');
  },

  detached: function() {
    console.log('component dettached!');
  },
>>>>>>> 78da45adc187eaafb0a70ff3e0dd9af866db7fe8

  methods: {
    removeTodo: function () {
      this.triggerEvent('itemremove');
    },
    toggleExtra: function(e) {
      this.setData({
        collapsed: !this.data.collapsed
      });
    }
  }
})
