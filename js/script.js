console.log("vue ok", Vue);

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      myTitle: "ciao a tutti",
      myImage:
        "https://yt3.googleusercontent.com/UXFC9eFKxjbOcUeEiIFqpywdInXJijIrh5bkfUMPlKhCLKaO6rrTfh5O5IzNTS_2Wap2yBk1J44=s900-c-k-c0x00ffffff-no-rj",
    };
  },
});

app.mount("#root");
