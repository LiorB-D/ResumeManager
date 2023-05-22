import { Resume } from "../Types/ResumeTypes";

export const defaultResume = new Resume(
  "Lior Ben-David",
  "liorbd@outlook.com",
  "(914) 602-1767",
  "https://www.linkedin.com/in/lior-ben-david-8772471b6/",
  [
    {
      title: "EDUCATION",
      items: [
        {
          title: "University of Virginia, College of Arts & Sciences",
          location: "Charlottesville, Virginia",
          roles: [
            {
              title: "Majors: Mathematics and Economics",
              dates: "BS Expected May 2024",
              bullets: [
                "Cumulative GPA: 3.86/4.0; SAT: 1550/1600; Echols Scholar",
                "Relevant Coursework: Microeconomics, Macroeconomics, Calc III, Econometrics, Statistics, Linear Algebra, Manifold Calculus, Topological Data Analysis, Algorithmic Economics, Economics of Risk",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "WORK EXPERIENCE",
      items: [
        {
          title: "Freelancer",
          location: "Charlottesville, Virginia",
          roles: [
            {
              title: "",
              dates: "July 2022—Present",
              bullets: [
                "Developed working prototype for basketball analytics startup Z-Score Sports with React and MobX",
                "Crafted compelling and dynamic product demo videos for Snippyly (YC W22), showcasing the platform's unique features and benefits to drive increased user acquisition and revenue growth.",
              ],
            },
          ],
        },
        {
          title: "University of Virginia",
          location: "Charlottesville, Virginia",
          roles: [
            {
              title:
                "Undergraduate Teaching Fellow (Introductory Economics Courses)",
              dates: "August 2022—Present",
              bullets: [
                "Teach two discussion sections per week, grade exams, hold office hours, and serve as a resource for 50+ students",
              ],
            },
          ],
        },
        {
          title: "Codesphere",
          location: "Munich, Germany",
          roles: [
            {
              title: "Data Analyst",
              dates: "October 2021—September 2022",
              bullets: [
                "Setup Data Pipeline and Warehousing with Python, SQL, and Google Big Query",
                "Ran and Analyzed A/B Tests and other experiments to direct product strategy",
                "Created interactive data visualizations to track and monitor key business efforts",
              ],
            },
            {
              title: "Product Marketing Manager",
              dates: "June 2021—August 2022",
              bullets: [
                "Created and Executed Product Marketing Strategy, converting over 30,000 users",
                "Developed Advertising, Website, and Blog content",
                "Directly managed team of 3 content writers, responsible for QA, scheduling, and strategy",
              ],
            },
            {
              title: "Community Management Intern",
              dates: "February 2021—June 2021",
              bullets: [
                "Wrote weekly blog posts promoting Codesphere, a collaborative programming environment and cloud provider",
              ],
            },
          ],
        },
        {
          title: "GameEdge Analytics",
          location: "Ossining, New York",
          roles: [
            {
              title: "Director, Software Engineer",
              dates: "December 2018—August 2021",
              bullets: [
                "Designed, developed, and launched a basketball analytics service to streamline statistic keeping process",
                "Directed Beta-Launch with 10 High School teams during 2019-2020 season, handling bug reports and feature requests",
              ],
            },
          ],
        },
        {
          title: "Sleegal AI",
          location: "Middletown, Delaware",
          roles: [
            {
              title: "Business Development Intern",
              dates: "November 2020—February 2021",
              bullets: [
                "Advised the product development process for an AI-powered legal marketplace to maximize product’s impact for soft launch",
                "Secured an average of 5 lawyers per week for soft launch, informing them of product’s value proposition and onboarding them to the platform",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "EXTRACURRICULAR ACTIVITES",
      items: [
        {
          title: "Alfred Marshall Society",
          location: "Charlottesville, Virginia",
          roles: [
            {
              title: "President",
              dates: "January 2021—Present",
              bullets: [
                "Lead weekly discussion seminar for undergraduate Economics students on various topics involving macroeconomic policy, behavioral economics, and global economic trends",
                "Serving on board of the UVA Economics Club, responsible for planning professional and social programming for Economics students",
              ],
            },
          ],
        },
        {
          title: "Undergraduate Moot Court",
          location: "Charlottesville, Virginia",
          roles: [
            {
              title: "Treasurer",
              dates: "August 2020—Present",
              bullets: [
                "Qualified and competed at AMCA national tournament in 2021, Placed in top 8 competitors at regional tournament in 2020",
                "Research case law and craft legal argument on the constitutionality of a hypothetical statute",
                "Compete in oral advocacy competition debating a hypothetical Supreme Court issue",
              ],
            },
          ],
        },
      ],
    },
  ],
  {
    title: "Honors & Skills",
    items: [
      [
        "Honors",
        "University of Virginia Echols Scholar, Nita Lowey Certificate of Special Congressional Recognition, Commended Scholar National Merit Scholarship Program",
      ],
      [
        "Software",
        "Python, SQL, Typescript, Excel, R, Matlab, Julia, Google Big Query, Java, Swift, C#, NodeJS",
      ],
      ["Languages", "Hebrew(Fluent)"],
    ],
  }
);
