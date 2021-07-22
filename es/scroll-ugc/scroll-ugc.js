Component({
  mixins: [],
  data: {
    autoplay: true,
    indicatorDots: false,
    indicatorColor: "rgba(0, 0, 0, .3)",
    indicatorActiveColor: "rgba(0, 0, 0, 0.8)",
    duration: 800,
    interval: 3000,
    circular: true,
    vertical: true,
  },
  props: { data: [] },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {},
});
