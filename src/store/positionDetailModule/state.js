const state = {
  info: {
    name: "Joe",
    position: "UI",
    contactInfo: [
      {
        contactWay: "QQ",
        hyperlink: "https://user.qzone.qq.com/805086021/infocenter",
        logoLink: "https://cdn.cdnlogo.com/logos/t/23/tencent-qq.svg"
      },
      {
        contactWay: "Weibo",
        hyperlink: "https://weibo.com/1748075785?refer_flag=1001030103_",
        logoLink: "https://cdn.cdnlogo.com/logos/s/21/sina-weibo-icon.svg"
      },
      {
        contactWay: "Bilibili",
        hyperlink: "https://space.bilibili.com/85379943",
        logoLink: "https://cdn.cdnlogo.com/logos/b/42/bilibili-blue.svg"
      },
    ],
    workProgress: [
      {
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, amet labore. Ab cupiditate architecto voluptatum molestias delectus et unde, commodi illo, ullam placeat impedit, optio tempora amet blanditiis excepturi sed.",
        finished: false,
        fold: false,
        chidren: [
          {
            title: "打开电脑",
            finished: false,
            fold: false,
            chidren: [
              {
                title: "插上电源",
                finished: true,
                fold: false,
                chidren: []
              }
            ]
          },
          {
            title: "坐在电脑前",
            finished: true,
            fold: false,
            chidren: [
              {
                title: "坐在电脑前",
                finished: false,
                fold: false,
                chidren: [
                  {
                    title: "坐在电脑前",
                    finished: false,
                    fold: false,
                    chidren: []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        title: "打开vsCode",
        finished: false,
        fold: false,
        chidren: [
          {
            title: "打开电脑",
            finished: false,
            fold: false,
            chidren: [
              {
                title: "插上电源",
                finished: true,
                fold: false,
                chidren: []
              }
            ]
          },
          {
            title: "坐在电脑前",
            finished: true,
            fold: false,
            chidren: []
          }
        ]
      },
    ]
  }
}

export default state;