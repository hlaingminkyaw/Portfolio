import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function AiArticle() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col md={10} style={{ textAlign: "left", color: "white", paddingBottom: "50px" }}>
                        <h1 style={{ fontSize: "2.5em", paddingBottom: "20px", color: "#c770f0", fontWeight: "bold", lineHeight: "1.4" }}>
                            ယနေ့ခေတ် AI နှင့် Developer အခက်အခဲများ
                        </h1>
                        <p style={{ fontSize: "1.2em", color: "rgba(255,255,255,0.7)", marginBottom: "30px" }}>
                            March 22, 2026
                        </p>

                        <h3 style={{ color: "#c770f0", marginTop: "30px", marginBottom: "15px", lineHeight: "1.5" }}>AI နည်းပညာ၏ အခန်းကဏ္ဍ</h3>
                        <p style={{ fontSize: "1.2em", lineHeight: "1.8", marginBottom: "20px" }}>
                            ယနေ့ခေတ်မှာ AI နည်းပညာတွေဟာ အံ့မခန်း တိုးတက်လာပါတယ်။ ChatGPT, GitHub Copilot နဲ့ တခြားသော AI Tool တွေဟာ Developer တွေရဲ့ နေ့စဉ်လုပ်ငန်းခွင်မှာ မပါမဖြစ် အရေးပါတဲ့ အရာတွေ ဖြစ်လာပါပြီ။ ဒါပေမယ့် ဒီလို တိုးတက်မှုတွေနဲ့အတူ Developer တွေအတွက် စိန်ခေါ်မှု အသစ်တွေလည်း ထွက်ပေါ်လာပါတယ်။
                        </p>

                        <h3 style={{ color: "#c770f0", marginTop: "30px", marginBottom: "15px", lineHeight: "1.5" }}>AI ကို မှီခိုလွန်းခြင်း</h3>
                        <p style={{ fontSize: "1.2em", lineHeight: "1.8", marginBottom: "20px" }}>
                            ပထမဆုံး အခက်အခဲကတော့ "AI ကို မှီခိုလွန်းခြင်း" ပါပဲ။ AI က Code တွေကို အလွယ်တကူ ရေးပေးနိုင်တဲ့အတွက် Junior Developer တွေအနေနဲ့ အခြေခံ သဘောတရား (Fundamentals) တွေကို သေချာနားမလည်ဘဲ ကျော်သွားတတ်ကြပါတယ်။ ဒါဟာ ရေရှည်မှာ ပြဿနာရှာတဲ့အခါ (Debugging) အရမ်းခက်ခဲလာစေပါတယ်။
                        </p>

                        <h3 style={{ color: "#c770f0", marginTop: "30px", marginBottom: "15px", lineHeight: "1.5" }}>Security နှင့် Code Quality</h3>
                        <p style={{ fontSize: "1.2em", lineHeight: "1.8", marginBottom: "20px" }}>
                            နောက်ထပ် အခက်အခဲကတော့ "Security နှင့် Code Quality" ပါ။ AI က ရေးပေးလိုက်တဲ့ Code တွေဟာ အလုပ်လုပ်ပေမယ့် တချို့အခါတွေမှာ လုံခြုံရေး အားနည်းချက်တွေ ပါနေတတ်သလို၊ Project ရဲ့ Architecture နဲ့ မကိုက်ညီတာမျိုးတွေလည်း ကြုံရတတ်ပါတယ်။ ဒါကြောင့် Developer တွေ အနေနဲ့ AI ရေးပေးတဲ့ Code ကို ဒီတိုင်း အသုံးပြုတာထက် သေချာစစ်ဆေး (Review Code) ပြီးမှ အသုံးပြုဖို့ လိုအပ်ပါတယ်။
                        </p>

                        <p style={{ fontSize: "1.2em", lineHeight: "1.8", marginTop: "40px", fontStyle: "italic", borderLeft: "4px solid #c770f0", paddingLeft: "15px", color: "rgba(255,255,255,0.8)" }}>
                            နိဂုံးချုပ်အနေနဲ့ ပြောရရင် AI ဟာ Developer တွေကို အစားထိုးဖို့ မဟုတ်ဘဲ၊ ကူညီပေးမယ့် Tool တစ်ခုသာ ဖြစ်ပါတယ်။ ဒါကြောင့် AI ရဲ့ အကူအညီကို ရယူရင်း၊ ကိုယ်ပိုင် ဉာဏ်ရည်နဲ့ ပြဿနာဖြေရှင်းနိုင်စွမ်း (Problem Solving Skills) ကို အမြဲတမ်း တိုးတက်အောင် ကြိုးစားနေဖို့ အရေးကြီးပါတယ်။
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default AiArticle;
