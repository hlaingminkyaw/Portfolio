import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCard";
import Particle from "../Particle";
import bitsOfCode from "../../Assets/Projects/blog.png";
import laravelBlogCover from "../../Assets/Projects/laravel_blog_cover.png";
import aiDeveloperCover from "../../Assets/Projects/ai_developer.png";
import laravelEventsCover from "../../Assets/Projects/laravel_events.png";

function Blogs() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Posts </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few technical articles I've written.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={8} className="blog-card">
                        <BlogCard
                            imgPath={laravelEventsCover}
                            date="March 22, 2026"
                            title="Laravel Events နှင့် Listeners အကြောင်း လေ့လာခြင်း"
                            description="Laravel မှာ Events နှင့် Listeners ဆိုတာ Application ကို ပိုမို ရှင်းလင်းပြီး Maintain လုပ်ရလွယ်ကူအောင် ကူညီပေးတဲ့ အရေးပါတဲ့ Architecture Design Pattern တစ်ခု ဖြစ်ပါတယ်။ Code တွေကို Decouple လုပ်ပေးပြီး Application Performance ကို မြင့်တက်စေပါတယ်။"
                            link="/blogs/laravel-events-listeners"
                        />
                    </Col>

                    <Col md={8} className="blog-card">
                        <BlogCard
                            imgPath={aiDeveloperCover}
                            date="March 22, 2026"
                            title="ယနေ့ခေတ် AI နှင့် Developer အခက်အခဲများ"
                            description="ယနေ့ခေတ်မှာ AI နည်းပညာတွေဟာ အံ့မခန်း တိုးတက်လာပါတယ်။ ChatGPT, GitHub Copilot နဲ့ တခြားသော AI Tool တွေဟာ Developer တွေရဲ့ နေ့စဉ်လုပ်ငန်းခွင်မှာ မပါမဖြစ် အရေးပါတဲ့ အရာတွေ ဖြစ်လာပါပြီ။ ဒါပေမယ့် ဒီလို တိုးတက်မှုတွေနဲ့အတူ Developer တွေအတွက် စိန်ခေါ်မှု အသစ်တွေလည်း ထွက်ပေါ်လာပါတယ်။"
                            link="/blogs/ai-and-developer-challenges"
                        />
                    </Col>

                    <Col md={8} className="blog-card">
                        <BlogCard
                            imgPath={laravelBlogCover}
                            date="March 22, 2026"
                            title="Laravel Relationship - Avoid Nested Relationships"
                            description="Laravel relationship is a powerful connection between the tables of your database. While Laravel has such simplicity, we also need a good enough database structure. This technical article explores how to simplify complex Eloquent relationships by avoiding deep nesting and referencing fields directly to improve application performance."
                            link="/blogs/laravel-relationships"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Blogs;
