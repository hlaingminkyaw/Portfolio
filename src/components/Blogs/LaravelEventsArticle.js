import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function LaravelEventsArticle() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col md={10} style={{ textAlign: "left", color: "white", paddingBottom: "50px" }}>
                        <h1 style={{ fontSize: "2.5em", paddingBottom: "20px", color: "#c770f0", fontWeight: "bold", lineHeight: "1.4" }}>
                            Laravel Events နှင့် Listeners အကြောင်း လေ့လာခြင်း
                        </h1>
                        <p style={{ fontSize: "1.2em", color: "rgba(255,255,255,0.7)", marginBottom: "30px" }}>
                            March 22, 2026
                        </p>

                        <h3 style={{ color: "#c770f0", marginTop: "30px", marginBottom: "15px", lineHeight: "1.5" }}>Events နှင့် Listeners ဆိုတာ ဘာလဲ?</h3>
                        <p style={{ fontSize: "1.2em", lineHeight: "1.8", marginBottom: "20px" }}>
                            Laravel မှာ Events နှင့် Listeners ဆိုတာ Application ကို ပိုမို ရှင်းလင်းပြီး Maintain လုပ်ရလွယ်ကူအောင် ကူညီပေးတဲ့ အရေးပါတဲ့ Architecture Design Pattern တစ်ခု ဖြစ်ပါတယ်။ "Event" တစ်ခုဆိုတာ Application အတွင်းမှာ ဖြစ်ပေါ်သွားတဲ့ လုပ်ဆောင်ချက် တစ်ခုပါ။ ဥပမာ - User တစ်ယောက် Register လုပ်လိုက်တာ၊ Order အသစ်တစ်ခု ဝင်လာတာ စတာတွေဟာ Event တွေဖြစ်ပါတယ်။ "Listener" ကတော့ အဲ့ဒီ Event ဖြစ်ပေါ်လာတဲ့အခါ တုံ့ပြန်လုပ်ဆောင်ပေးမယ့် Code (Logic) တွေဖြစ်ပါတယ်။
                        </p>

                        <h3 style={{ color: "#c770f0", marginTop: "30px", marginBottom: "15px", lineHeight: "1.5" }}>ဘာကြောင့် သုံးသင့်တာလဲ?</h3>
                        <p style={{ fontSize: "1.2em", lineHeight: "1.8", marginBottom: "20px" }}>
                            Code တွေကို Decouple လုပ်ဖို့အတွက် အဓိက သုံးပါတယ်။ ဥပမာ User Register လုပ်ပြီးတဲ့အခါ Welcome Email ပို့ချင်တယ်ဆိုပါစို့။ User Controller ထဲမှာ Email ပို့တဲ့ Code ကို တိုက်ရိုက်ရေးမယ့်အစား <code>UserRegistered</code> ဆိုတဲ့ Event ကို ခေါ်(Dispatch)ပေးလိုက်ရုံပါပဲ။ အဲ့ဒီနောက် <code>SendWelcomeEmail</code> ဆိုတဲ့ Listener ကနေ Email ဆက်ပို့ပေးသွားပါလိမ့်မယ်။ Controller တွေ ပိုမိုရှင်းလင်းသွားမှာပါ။
                        </p>

                        <h3 style={{ color: "#c770f0", marginTop: "30px", marginBottom: "15px", lineHeight: "1.5" }}>Laravel တွင် အသုံးပြုပုံ</h3>
                        <p style={{ fontSize: "1.2em", lineHeight: "1.8", marginBottom: "20px" }}>
                            Event နှင့် Listener တွေကို Generate လုပ်ဖို့ <code>php artisan make:event</code> နဲ့ <code>php artisan make:listener</code> ကို အသုံးပြုနိုင်ပါတယ်။ သို့မဟုတ် <code>EventServiceProvider</code> ထဲမှာ အရင် ကြိုတင် ရေးသားပြီး <code>php artisan event:generate</code> နဲ့ တစ်ခါတည်း Create လုပ်နိုင်ပါတယ်။ Laravel ဟာ Event တွေကို နောက်ကွယ် (Queue) မှာ အလိုအလျောက် သွားလုပ်ဖို့လည်း လွယ်ကူစွာ ထောက်ပံ့ပေးထားပါတယ်။
                        </p>

                        <p style={{ fontSize: "1.2em", lineHeight: "1.8", marginTop: "40px", fontStyle: "italic", borderLeft: "4px solid #c770f0", paddingLeft: "15px", color: "rgba(255,255,255,0.8)" }}>
                            နိဂုံးချုပ်အနေနဲ့ Events နှင့် Listeners တွေကို အသုံးပြုခြင်းဟာ Code ကို ရှင်းလင်းစေပြီး Application ပိုကြီးလာတဲ့အခါ စီမံခန့်ခွဲရ လွယ်ကူစေပါတယ်။ ခေတ်မီတဲ့ Web Application တွေ ရေးသားရာမှာ မရှိမဖြစ် လိုအပ်တဲ့ နည်းပညာ တစ်ခုဖြစ်ပါတယ်။
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default LaravelEventsArticle;
