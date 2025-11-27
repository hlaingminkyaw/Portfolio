import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ticket Management System"
              description="Developed a full ticketing system with automated announcements, SLA-based assignment, email notifications, a resolution workflow, and an admin review module. Built with Laravel and AJAX, including dashboards for team performance and ticket tracking."
              ghLink="https://github.com/hlaingminkyaw/"
              demoLink="https://github.com/hlaingminkyaw/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="UNICEF Disability Management System"
              description="Maintained UNICEF’s nationwide Disability Management System, improving data accuracy, reporting, and performance. Handled SQL optimization, fixed dashboard issues, and supported data processing for 900,000+ child records. Worked on donation tracking, verification features, and registration workflows using PHP, Laravel, and MySQL."
              ghLink="https://github.com/hlaingminkyaw/"
              demoLink="https://github.com/hlaingminkyaw/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ပိဋကသုံးပုံ ပါဠိတော် မြန်မာပြန် Online Platform"
              description="ပိဋကသုံးပုံ ပါဠိတော် မြန်မာပြန် စာမေးပွဲအတွက် မှတ်ပုံတင်ရန်အသုံးပြုနိုင်သည့် Online Platform ဖြစ်ပါတယ်။ စာမေးပွဲရန် လျှောက်လွှာစာရင်းသွင်းမှု၊ အချက်အလက်ထိန်းချုပ်မှုနှင့် လွယ်ကူသော မှတ်ပုံတင်စနစ်ဖြင့် အသုံးပြုသူများအတွက် လွယ်ကူစွာ စာမေးပွဲဝင်ရောက်နိုင်စေပါသည်။"

              ghLink="https://github.com/hlaingminkyaw/"
              demoLink="https://ptk.sytnmyanmar.org/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ပိဋကတ် မြန်မာပြန် လမ်းညွှန် Web Application"
              description="ပိဋကတ် မူရင်း ပါဠိ ကို မြန်မာဘာသာဖြင့် လွယ်ကူစွာ နားလည်နိုင်ရန်အတွက် တစ်နေရာတည်းမှ လမ်းညွှန်ပေးသည့် Web Application ဖြစ်သည်။ ပါဠိ–မြန်မာ ဘာသာပြန်ချက်များ၊ သဘောတရားရှင်းလင်းချက်များနှင့် ဖတ်ရှုလေ့လာနိုင်သည့် လေ့ကျင့်ရေး အထောက်အပံ့များကို စနစ်တကျ ထည့်သွင်းပေးထားသည်။"
              ghLink="https://github.com/hlaingminkyaw/"
              demoLink="https://spm.sytnmyanmar.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Dengue Surveillance System"
              description="မြန်မာနိုင်ငံအနှံ့ရှိ သွေးလွန်တုပ်ကွေး ရောဂါအဖြစ်အပျက်များကို စုစည်းပြီး ချက်ချင်း သတင်းပို့နိုင်သည့် စောင့်ကြပ်မော်နီတာလုပ်ကိုင်ရန်အတွက် ဖန်တီးထားသော စနစ် ဖြစ်သည်။ ဒေတာ မှတ်တမ်းတင်ခြင်း၊ ရောဂါဖြစ်ပွားမှု မြေပုံဖော်ပြခြင်း၊ နေ့စဉ် အခြေအနေများကို တိတိကျကျ သင်္ကေတထုတ်ပေးနိုင်ပြီး ကျန်းမာရေးဌာနများအတွက် ဆောင်ရွက်ရန် လွယ်ကူစေသည်။"
              ghLink="https://github.com/hlaingminkyaw/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Myanmar Accountancy Council Website"
              description="Government website developed for the Myanmar Accountancy Council, supporting student and admin portals. Managed online student registration, batch/subject forms, and NRC validation. Implemented K-Pay, CB Bank, and bank transfer payment integrations. Added role-based access control, improved security, and assisted in server and firewall setup to ensure system reliability."

              ghLink="https://github.com/hlaingminkyaw/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
