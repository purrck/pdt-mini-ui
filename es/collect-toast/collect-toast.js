
Component({
  mixins: [],
  data: {
    visiable: false,
    iconUrl: 'https://alipay-data.oss-cn-hangzhou.aliyuncs.com/xcx/common/imgs/image-start.png',
    titleBarH: 20
  },
  props: {
    isHideTitleBar: false
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
    if (this.props.isHideTitleBar) {
      my.getSystemInfo({
        success: (res) => {
          console.log('getSystemInfo', res);
          this.setData({
            titleBarH: (res.titleBarHeight + res.statusBarHeight) * 2 + 20
          })
        }, fail: () => {
          this.setData({
            titleBarH: 20
          })
        }
      })
    }

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
