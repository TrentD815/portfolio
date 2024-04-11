export default {
  author: "Trent Davis",
  hero: {
    subtitle: "Software Engineer at Neev Data.",
    description: ["Engineering robust software by day.", "Researching the latest memes by night."],
    cta: "Browse Projects",
  },
  products: {
    featured: [
      {
        name: "Head To Head",
        medium: "Angular · Express · NodeJS · MongoDB",
        summary: "A simple interface to compare stats of active NBA players",
        copy: [
          "Search stats for all 575+ active NBA players.\n" +
          "View side by side stat lines between any 2 players.\n" +
          "View stats based on the current season.\n" +
          "Mobile friendly with light and dark themes."
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Discover",
            url: "https://github.com/TrentD815/Head-To-Head"
          }
        },
        images: [
          "/head-to-head/0.png",
          "/head-to-head/1.png",
          "/head-to-head/2.png"
        ]
      },
      {
        name: "Foosball Metrics",
        medium: "Angular · Express · NodeJS · MongoDB",
        summary: "A seamless UI to enter foosball matches and track stats",

        copy: [
          "Log foosball matches including score, date, players, and team names. " +
          "View the history of previously logged matches as well as a leaderboard with fun stats and milestones.",
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Discover",
            url: "https://github.com/TrentD815/Foosball-Metrics"
          }
        },
        images: [
          "/foosball-metrics/0.png",
          "/foosball-metrics/1.png"
        ]
      },
      {
        name: "Server Spy",
        medium: "React · Express · NodeJS · MongoDB",
        summary: "An interface to check if a group of servers is live",
        copy: [
         "Table view showing the current status of all the servers with sorting capability.\n" +
         "Ping the health endpoint of one or all of the servers in real time to get live updates.\n"
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Discover",
            url: "https://github.com/TrentD815/Foosball-Metrics"
          }
        },
        images: [
          "/server-spy/0.png"
        ]
      }
    ],
    minor: [
      {
        name: "Escape Room Extension",
        description: "A chrome extension to help escape room employees run rooms more effectively",
        link: {
          name: "Github",
          url: "https://github.com/TrentD815/EscapeRoomExtension"
        }
      },
      {
        name: "Game & Hobby Corner",
        description: "Some accolades and stats from games I enjoy as well as other miscellaneous hobby stuff",
        link: {
          name: "View",
          url: "https://trent.gg"
        }
      }
    ]
  },
  logoSection: {
    title: "As hired by",
    logos: [
      {
        src: "/logos/CSolsInc.png",
        url: "https://csolsinc.com",
        alt: "CSols Inc."
      },
      {
        src: "/logos/Serrala.png",
        url: "https://www.serrala.com/",
        alt: "Serrala"
      },
      {
        src: "/logos/NeevData.png",
        url: "https://neevdata.com/",
        alt: "Neev Data"
      }
  ]
  },
  footer: {
    tagline: "Trent Davis — Philadelphia, United States",
    links: [

      {
        name: "Github",
        url: "https://github.com/TrentD815",
        fa: "fab fa-github"
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/trent-davis/",
        fa: "fab fa-linkedin"
      },
      {
        name: "Email",
        url: "mailto:trent.davis815@gmail.com",
        fa: "fa fa-envelope"
      },
    ]
  }
}