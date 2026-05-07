"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const handleBookingClick = () => {
    alert("预约意向已记录。\n这是静态演示页面，后续可以继续接入表单提交、微信或电话预约。");
  };

  return (
    <>
      <header className="topbar">
          <div className="container nav">
            <a className="brand" href="#top">
              <span className="brand-mark">🐾</span>
              <span className="brand-text">
                <small>Pet Grooming House</small>
                <strong>汪喵泡泡屋</strong>
              </span>
            </a>
            <nav className="nav-links">
              <a href="#services">服务项目</a>
              <a href="#pricing">洗护套餐</a>
              <a href="#process">护理流程</a>
              <a href="#reviews">客户评价</a>
              <a href="#booking">在线预约</a>
            </nav>
          </div>
        </header>
      
        <main id="top">
          <section className="hero">
            <div className="container hero-grid">
              <div className="hero-copy fade-up">
                <span className="eyebrow">温柔洗护 · 精细修剪 · 安心接送</span>
                <h1>让每一只毛孩子，洗完都像刚拥抱过阳光。</h1>
                <p className="lead">
                  汪喵泡泡屋专注犬猫洗护、美容造型、皮毛护理与寄养前清洁管理。我们用分宠种洗护方案、可视化护理流程和轻松安抚体验，让宠物舒服、主人放心。
                </p>
                <div className="hero-actions">
                  <a className="button button-primary" href="#booking">立即预约洗护</a>
                  <a className="button button-secondary" href="#pricing">查看今日套餐</a>
                </div>
                <div className="hero-points">
                  <div>
                    <strong>3000+</strong>
                    <span>累计服务宠物家庭</span>
                  </div>
                  <div>
                    <strong>12步</strong>
                    <span>标准洗护流程</span>
                  </div>
                  <div>
                    <strong>4.9分</strong>
                    <span>到店满意度口碑</span>
                  </div>
                </div>
              </div>
      
              <div className="hero-visual fade-up">
                <div className="hero-art">
                  <div className="speech">今天不只是变干净，是要变成街坊里最香香、最蓬松、最想rua的小明星。</div>
                  <div className="pets">
                    <span>🐶</span>
                    <span>🛁</span>
                    <span>🐱</span>
                  </div>
                </div>
                <div className="mini-grid">
                  <div className="mini-card">
                    <strong>独立洗护区</strong>
                    <span>猫狗分区，降低应激，清洁更安心。</span>
                  </div>
                  <div className="mini-card">
                    <strong>高端护理产品</strong>
                    <span>低敏香波、草本护毛、耳部和足部护理搭配使用。</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
          <section id="services">
            <div className="container">
              <div className="section-head fade-up">
                <div>
                  <h2>服务项目</h2>
                  <p>从基础洗护到精修造型，再到换季护理，我们把每一步做细，也把每一只宠物的情绪照顾到位。</p>
                </div>
              </div>
              <div className="cards">
                <article className="card fade-up">
                  <div className="service-image">
                    <img src="/assets/services/basic-bath.png" alt="基础洗护服务图片：小狗泡泡浴、毛巾和低敏清洁用品" />
                  </div>
                  <h3>基础洗护</h3>
                  <p>包含梳毛开结、深层清洁、吹干拉毛、指甲修剪、耳道清洁与爪垫护理。</p>
                  <div className="pill-list">
                    <span className="pill">小型犬/猫适用</span>
                    <span className="pill">低敏配方</span>
                    <span className="pill">全程可视</span>
                  </div>
                </article>
                <article className="card fade-up">
                  <div className="service-image">
                    <img src="/assets/services/beauty-styling.png" alt="美容造型服务图片：宠物修剪造型、剪刀和梳子" />
                  </div>
                  <h3>美容造型</h3>
                  <p>按宠物体态、毛量与品种定制修剪方案，适合贵宾、比熊、博美等需要造型管理的孩子。</p>
                  <div className="pill-list">
                    <span className="pill">品种定制</span>
                    <span className="pill">面部精修</span>
                    <span className="pill">蓬松塑形</span>
                  </div>
                </article>
                <article className="card fade-up">
                  <div className="service-image">
                    <img src="/assets/services/coat-care.png" alt="皮毛护理服务图片：长毛猫草本护理、梳毛和护毛用品" />
                  </div>
                  <h3>皮毛护理</h3>
                  <p>提供去油舒缓、草本除味、深层护毛和换季掉毛管理，尤其适合敏感皮肤与长毛宠物。</p>
                  <div className="pill-list">
                    <span className="pill">舒敏镇静</span>
                    <span className="pill">掉毛管理</span>
                    <span className="pill">毛发柔亮</span>
                  </div>
                </article>
              </div>
            </div>
          </section>
      
          <section id="pricing">
            <div className="container">
              <div className="section-head fade-up">
                <div>
                  <h2>洗护套餐</h2>
                  <p>价格可根据体型、毛量和打结情况微调。页面内容适合作为门店宣传页模板，后续也可以继续接入真实预约系统。</p>
                </div>
              </div>
              <div className="pricing">
                <article className="price-card fade-up">
                  <span className="badge">入门推荐</span>
                  <h3>清爽基础洗</h3>
                  <p>适合定期到店、日常清洁维护。</p>
                  <div className="price-comparison">
                    <div className="price-row member">
                      <span>会员价</span>
                      <strong>88</strong>
                      <em>元起</em>
                    </div>
                    <div className="price-row regular">
                      <span>普通价</span>
                      <strong>98</strong>
                      <em>元起</em>
                    </div>
                  </div>
                  <ul className="features">
                    <li>基础洗澡与吹干</li>
                    <li>耳部清洁与指甲修剪</li>
                    <li>脚底毛与肛周基础修整</li>
                  </ul>
                  <div className="price-note">建议周期：2-4 周 / 次</div>
                </article>
      
                <article className="price-card featured fade-up">
                  <span className="badge">门店热卖</span>
                  <h3>绵密香香洗护</h3>
                  <p>适合毛量较大、追求蓬松柔顺和除味效果的宠物。</p>
                  <div className="price-comparison">
                    <div className="price-row member">
                      <span>会员价</span>
                      <strong>148</strong>
                      <em>元起</em>
                    </div>
                    <div className="price-row regular">
                      <span>普通价</span>
                      <strong>168</strong>
                      <em>元起</em>
                    </div>
                  </div>
                  <ul className="features">
                    <li>深层洁净与双重护毛</li>
                    <li>蓬松拉毛与局部精修</li>
                    <li>口周、眼周、足部细节护理</li>
                  </ul>
                  <div className="price-note">建议周期：3-5 周 / 次</div>
                </article>
      
                <article className="price-card fade-up">
                  <span className="badge">颜值进阶</span>
                  <h3>洗护加造型</h3>
                  <p>适合准备拍照、过节、聚会或品种造型维护。</p>
                  <div className="price-comparison">
                    <div className="price-row member">
                      <span>会员价</span>
                      <strong>228</strong>
                      <em>元起</em>
                    </div>
                    <div className="price-row regular">
                      <span>普通价</span>
                      <strong>258</strong>
                      <em>元起</em>
                    </div>
                  </div>
                  <ul className="features">
                    <li>完整洗护护理流程</li>
                    <li>全身修剪与面部造型设计</li>
                    <li>香氛喷雾与饰品搭配</li>
                  </ul>
                  <div className="price-note">建议周期：4-6 周 / 次</div>
                </article>
              </div>
            </div>
          </section>
      
          <section id="process">
            <div className="container">
              <div className="section-head fade-up">
                <div>
                  <h2>护理流程</h2>
                  <p>把洗护流程公开，是为了让你知道每一项护理都不是“顺手做一下”，而是有标准、有细节、有温度。</p>
                </div>
              </div>
              <div className="steps">
                <article className="step fade-up">
                  <div className="step-number">01</div>
                  <h3>到店检查</h3>
                  <p>记录体表情况、毛发打结位置、皮肤敏感点和情绪状态，建立对应护理建议。</p>
                </article>
                <article className="step fade-up">
                  <div className="step-number">02</div>
                  <h3>分区洗护</h3>
                  <p>猫狗分区处理，依据毛发和皮肤情况搭配香波、护毛素与冲洗时长。</p>
                </article>
                <article className="step fade-up">
                  <div className="step-number">03</div>
                  <h3>吹整修剪</h3>
                  <p>低噪吹干后进行拉毛与局部精修，避免拉扯，尽量让宠物保持放松。</p>
                </article>
                <article className="step fade-up">
                  <div className="step-number">04</div>
                  <h3>离店反馈</h3>
                  <p>告知主人今日护理重点、下次洗护建议和在家护理注意事项。</p>
                </article>
              </div>
              <div className="notice fade-up">
                <div>
                  <strong>首次到店福利</strong>
                  <span>新客可享 9 折体验价，并赠送一次基础口周修整或香香喷雾护理。</span>
                </div>
                <a className="button button-primary" href="#booking">领取并预约</a>
              </div>
            </div>
          </section>
      
          <section id="reviews">
            <div className="container">
              <div className="section-head fade-up">
                <div>
                  <h2>客户评价</h2>
                  <p>真实门店落地页常见的信任区块。这里先帮你放入高质量示例文案，后续替换成真实评价就行。</p>
                </div>
              </div>
              <div className="testimonial-grid">
                <article className="testimonial fade-up">
                  <p>“我家比熊以前很怕吹风，这家会先安抚再慢慢吹，洗完蓬松得像一团云，回家还一直香香的。”</p>
                  <div className="person">
                    <div className="avatar">🐩</div>
                    <div>
                      <strong>林女士 · 奶盖妈妈</strong>
                      <span>常规洗护用户</span>
                    </div>
                  </div>
                </article>
                <article className="testimonial fade-up">
                  <p>“猫咪洗澡最怕应激，这里分区很安静，店员会提前说明每一步，洗完耳朵和脚垫都处理得很细。”</p>
                  <div className="person">
                    <div className="avatar">🐈</div>
                    <div>
                      <strong>周先生 · 糯米爸爸</strong>
                      <span>猫咪舒缓洗护用户</span>
                    </div>
                  </div>
                </article>
                <article className="testimonial fade-up">
                  <p>“修毛不只看整不整齐，而是真的有审美。脸型和耳朵都修得特别精神，拍照像换了一只小狗。”</p>
                  <div className="person">
                    <div className="avatar">📸</div>
                    <div>
                      <strong>陈小姐 · 七喜主人</strong>
                      <span>造型修剪用户</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
      
          <section id="booking">
            <div className="container contact-wrap">
              <div className="contact-card fade-up">
                <span className="eyebrow">到店信息</span>
                <h2>来店里，让毛孩子舒舒服服洗个澡。</h2>
                <p className="lead">如果你现在只是想先做一个展示网页，这里已经具备完整结构。后面我们还能继续加上微信二维码、地图、真实电话、预约提交和后台管理。</p>
                <div className="info-list">
                  <div className="info-item">
                    <strong>营业时间</strong>
                    <span>周一至周日 10:00 - 20:30</span>
                  </div>
                  <div className="info-item">
                    <strong>门店地址</strong>
                    <span>湖北省武汉市 武汉大学校内</span>
                    <div className="store-visual-grid">
                      <figure className="store-photo">
                        <img src="/assets/store/store-interior.png" alt="汪喵泡泡屋门店实景，包含前台、玻璃洗护间和等候休息区" />
                        <figcaption>AI 生成门店实景图</figcaption>
                      </figure>
                      <div className="map-preview" aria-label="武汉大学校内地图示意图">
                        <img src="/assets/wuhan-university-amap-style.svg" alt="高德地图风格的武汉大学校内位置示意图" />
                      </div>
                    </div>
                    <div className="store-highlights">
                      <span>独立玻璃洗护间</span>
                      <span>低刺激等候区</span>
                      <span>前台接待可视化</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <strong>预约电话</strong>
                    <span>400-888-2026（这里替换成你的真实电话）</span>
                  </div>
                </div>
              </div>
      
              <div className="contact-card fade-up">
                <span className="eyebrow">在线预约</span>
                <h2>提交护理需求</h2>
                <form className="booking-form">
                  <div className="form-row">
                    <input type="text" placeholder="你的称呼" />
                    <input type="tel" placeholder="联系电话" />
                  </div>
                  <div className="form-row">
                    <select>
                      <option>选择宠物类型</option>
                      <option>狗狗</option>
                      <option>猫咪</option>
                    </select>
                    <select>
                      <option>选择服务项目</option>
                      <option>基础洗护</option>
                      <option>深层护理</option>
                      <option>洗护加造型</option>
                    </select>
                  </div>
                  <label className="time-field">
                    <span>期望到店时间</span>
                    <input type="datetime-local" aria-label="期望到店时间" />
                  </label>
                  <textarea rows={5} placeholder="宠物体型、毛发情况、其他护理需求等"></textarea>
                  <button className="button button-primary" type="button" id="bookingButton" onClick={handleBookingClick}>发送预约意向</button>
                </form>
              </div>
            </div>
          </section>
        </main>
      
        <footer className="footer">
          <div className="container footer-box">
            <span>© 2026 汪喵泡泡屋 Pet Grooming House</span>
            <span>单页落地页模板 · 适合继续扩展成真实门店官网</span>
          </div>
        </footer>
    </>
  );
}
