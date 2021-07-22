
Component({
  mixins: [],
  data: {
    visiable: false,
    iconUrl: 'https://alipay-data.oss-cn-hangzhou.aliyuncs.com/xcx/common/imgs/image-start.png'
  },
  props: {
    // onClose: () => { } 
  },
  didMount() {
    // cacheTime('firstInTime',).then(res => {
    //   if (res) {
    //     this.appointPopData(id);
    //   } else {
    //     this.cancelPop();
    //   }
    // });
    my && my.isCollected({
      success: (e) => {
        console.log('', e.isCollected);
        this.setData({
          visiable: !e.isCollected
        })
      }
    })
  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    onClose() {
      this.setData({
        visiable: false
      })
    },
  },
})
