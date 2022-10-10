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
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolore provident commodi cumque! Vitae, debitis ab dignissimos suscipit aliquam accusantium veritatis dolor blanditiis necessitatibus! Nisi quasi laborum alias id unde?",
            finished: false,
            fold: false,
            chidren: [
              {
                title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque illum dolorem ipsa consequuntur nisi blanditiis reiciendis? Quam molestiae, odit neque quidem, voluptate maiores facilis accusamus explicabo ab, quasi vero ea.",
                finished: true,
                fold: false,
                chidren: []
              }
            ]
          },
          {
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis natus aliquam et quaerat eum, libero suscipit eveniet ipsa? Optio adipisci excepturi eaque velit esse architecto ratione eligendi soluta delectus pariatur.",
            finished: true,
            fold: false,
            chidren: [
              {
                title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, similique quae sit error illum soluta laboriosam reiciendis facilis incidunt nulla cum deleniti animi aliquam, harum optio. Culpa, quas. Autem, ipsa.",
                finished: false,
                fold: false,
                chidren: [
                  {
                    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde explicabo fugit natus consequuntur accusantium at. Neque, natus id quasi quos recusandae iusto repellendus eum dicta, molestiae nobis corporis autem!",
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
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur itaque repellat eius ullam, et, explicabo tempora illum quasi a distinctio porro dolore doloremque eaque qui quis facilis inventore magni?",
        finished: false,
        fold: false,
        chidren: [
          {
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laudantium, ex culpa repudiandae, doloremque animi possimus sed nesciunt, ullam officia alias necessitatibus officiis? Praesentium ducimus eaque iusto natus, omnis accusantium?",
            finished: false,
            fold: false,
            chidren: [
              {
                title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quae earum omnis recusandae corporis modi expedita corrupti quas fugit cupiditate incidunt sapiente dicta nobis laboriosam harum. Omnis aliquam voluptates illo?",
                finished: true,
                fold: false,
                chidren: []
              }
            ]
          },
          {
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nesciunt at eveniet aspernatur quisquam impedit dolore commodi laborum pariatur voluptatum inventore delectus in, explicabo ducimus recusandae nisi ab consectetur suscipit.",
            finished: true,
            fold: false,
            chidren: [
              {
                title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur itaque repellat eius ullam, et, explicabo tempora illum quasi a distinctio porro dolore doloremque eaque qui quis facilis inventore magni?",
                finished: false,
                fold: false,
                chidren: [
                  {
                    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laudantium, ex culpa repudiandae, doloremque animi possimus sed nesciunt, ullam officia alias necessitatibus officiis? Praesentium ducimus eaque iusto natus, omnis accusantium?",
                    finished: false,
                    fold: false,
                    chidren: [
                      {
                        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quae earum omnis recusandae corporis modi expedita corrupti quas fugit cupiditate incidunt sapiente dicta nobis laboriosam harum. Omnis aliquam voluptates illo?",
                        finished: true,
                        fold: false,
                        chidren: []
                      }
                    ]
                  },
                  {
                    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nesciunt at eveniet aspernatur quisquam impedit dolore commodi laborum pariatur voluptatum inventore delectus in, explicabo ducimus recusandae nisi ab consectetur suscipit.",
                    finished: true,
                    fold: false,
                    chidren: []
                  }
                ]
              }
            ]
          }
        ]
      },
    ]
  }
}

export default state;