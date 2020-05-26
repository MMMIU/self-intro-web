<template>
  <div id="mobileAboutMe">
    <div class="content">
      <div class="coverImg">
        <h1>个人简介</h1>
      </div>
      <div class="board">
        <div class="innerBoard">
          <p class="title">
            <span class="subTitle">Yifei Miao</span>
            University of Wisconsin-Madison Madison,
            2-602 Zhong Qi Gen Shan Fu Xi Qu, Yun He Dong Road,
            Jianggan District, Hangzhou, China 310002
            86-15257129307 / 1-6142602921
            miaoyf126@126.com
          </p>
          <hr />
          <p>
            <span class="subTitle">EDUCATION</span>
            University of Wisconsin-Madison Madison, USA
            Computer Sciences, Bachelor of Science January 2020 - Present
            Ohio State University Columbus, USA
            Computer & Information Science, Bachelor of Science August 2018 – December 2019
            • GPA: 3.90/4.0
            • Courses taken: Western Art 2 (A-), Calculus 1 (A), First-year English Composition (A), Programming Java (A),
            SW1: Components (A), Mech, Thermo, Waves (A), Calculus 2 (A), Introduction to Environmental Science (A)
            Hangzhou No.2 High School Hangzhou, China
            Grade 10 – Grade 12 September 2015 – July 2018
            • GPA: 90.1/100
            • School Distinguished Student in Arts & Sports (January 2017)
            • School Excellent League Branch Secretary (September 2016)
            Hangzhou Jianlan Middle School Hangzhou, China
            Grade 7 – Grade 9 September 2012 – July 2015
            • Grade 9 GPA: 95.7/100
            • Second Prize in Group at the city level & Individual Second Prize at the district level (April 2015)
          </p>
          <hr />
          <p>
            <span class="subTitle">INTERN EXPERIENCE</span>
            University of Wisconsin-Madison Madison,
            Huaxin Consulting Co., Ltd. Hangzhou, China
            Software Develop Engineer May 2019 – August 2019
            • Self-studied HTML, CSS, Javascript and Vue, designed contents and layout of webpages
            • Developed a website based on templates and embellished website interface
            • Improved problem-solving skills and independent study ability
            Zhejiang Bell Technology Co., Ltd. Hangzhou, China
            Assistant for Unmanned Aerial Vehicle Control Engineer December 2018
            • Assisted industrial UAV control by adjusting PID during the flight to achieve a sensitive and stable state
            • Recorded UAV performance status of accelerometer, compass interference, motor speed, motor current, vibration,
            motor temperature and so on
            • Took out troubleshooting for UAV, for example, compass calibration, communication frequency band adjustment
            and fix the problem of accelerometer excessive offset
            • Learned the difference between general UAV and industrial UAV
          </p>
          <hr />
          <p>
            <span class="subTitle">RESEARCH EXPERIENCE</span>
            University of Wisconsin-Madison Madison,
            Natural Number Calculator Development April 2019
            • Studied Java Programming Language and designed algorithm for natural number calculator
            • Implemented the algorithm and realized all required functions
            • Tested sample calculation on the calculator and debugged on the system
            Research Assistant for Zhejiang University of Finance & Economics July 2017 – September 2017
            • Researched in China stock market with Professor Zhi Yi
            • Attended Financial Markets and Investment in Securities courses in the university together with the undergraduate
            students, and started investing in a-share stocks via applying newly learned knowledge and skills.
            Harvard CTB Innovation Research Challenge March 2017
            • Formed the competition group of 9 people and decided the challenge topic of hospice care
            • Searched on the books and internet to know the current status of hospice care in China
            • Visited local hospital for senior citizen health care and investigated the environmental of hospice care
            • Generated a report about hospice care with all the teammates
            • Attended the final round competition at Beijing, China and won the third prize
            • The investigation and presentation was reported by local TV channel
          </p>
          <hr />
          <p>
            <span class="subTitle">PHOTOGRAPHY ACTIVITIES</span>
            University of Wisconsin-Madison Madison,
            2018 Ohio State University International Photography Competition October 2018
            • Participated in the competition
            2017 National Photography Competition for Guangxi Public Brand Products November 2017 - May 2018
            • Visited Guilin in Guangxi Province and experienced folk custom
            • Took photos of Guangxi public brand products
            • Won the third prize of competition
            Photography Club in Hangzhou No.2 High School September 2015 – July 2018
            • Took the position of photography club president
            • Responsible for organizing and arranging photography related activities and events
            • Improved leadership ability and organization capacity
            The 1st Youku DJI Arial Video Contest September 2015 – October 2015
            • Produced a promotional video for Hangzhou No.2 High School with a title “No.2 High”, which got more than
            70,000 views in one month on Youku
            • Youku (Chinese Youtube) is a video service platform which provides video playback, publishing, search and sharing
            • Won the Excellent Award
            AWARDS
            Third Place in Ye Shengtao Cup National Middle School Student Composition Contest June 2017
            Second Prize in 21st Century Newspaper English Speech Competition for Zhejiang Province January 2017
            Popularity Award at DJI SkyPixel Aerial Video Contest December 2016
            Frist Prize at 2016 Hangzhou Elementary and Middle School Students Arts Festival Photography Competition
            November 2016
            Team Title in Hangzhou No.2 High School Huilan Cup Badminton Tournament November 2016
            Team Title in Hangzhou No.2 High School Grade 10 Recitation Contest October 2015
            COMPUTER SKILLS
            Programming Language: Java
            IDE: Eclipse
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobileAboutMe",
  components: {},
  data() {
    return {
      msg: "个人简介",
      scroll: 0
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>
#mobileAboutMe {
  height: auto;
  background-color: rgb(255, 245, 247);
  font-family: "仿宋";
  width: 100%;
}
.content {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
h1 {
  line-height: 200px;
  text-align: center;
  color: whitesmoke;
}
.coverImg {
  margin-top: 46px;
  width: 100%;
  background-image: url("../../../static/img/青海.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
}
.title {
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
}
.subTitle {
  font-weight: bold;
  font-size: 20px;
}
.board {
  width: 100%;
  height: 80%;
  margin: -50px auto;
}
.innerBoard {
  padding-top: 30px;
  padding-bottom: 30px;
  height: 100%;
  width: 90%;
  margin: 5% auto;
}
.innerBoard p {
  white-space: pre-line;
  width: 100%;
}
</style>
