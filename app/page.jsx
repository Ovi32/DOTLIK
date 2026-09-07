import { ArrowRight, CheckCircle2, Code2, Cloud, Database, Globe2, Layers3, Mail, Menu, MessageSquare, MonitorSmartphone, Server, ShieldCheck, Smartphone, X } from "lucide-react";

const services = [
  ["Web Development", "Build robust and scalable web applications tailored to your business needs.", Code2],
  ["Responsive & Mobile Development", "Ensure your applications look and work beautifully on every device.", Smartphone],
  ["UI/UX", "Create user-centered designs that provide a seamless and engaging experience.", Layers3],
  ["CMS Development", "Streamline your content operations with a flexible custom CMS.", Database],
  ["Digital Marketing", "Boost your online presence with practical, data-driven strategies.", Globe2],
  ["Web Maintenance & Support", "Keep your applications running smoothly with ongoing support.", ShieldCheck],
];

const industries = ["Industry & Manufacturing","Transportation & Logistics","Healthcare","E-commerce Industry","Consulting Providers","Non-Profit","Travel Industry","Education & Training","Real Estate"];

const technologies = [
  ["Redux","Predictable state management for modern JavaScript applications."],
  ["MongoDB","Flexible document storage designed for scalable applications."],
  ["Socket.io","Real-time, bidirectional communication for interactive apps."],
  ["React.js","Reusable components for dynamic, modern user interfaces."],
  ["Next.js","A React framework built for performance and SEO."]
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a href="#" className="logo">
          <img src="/LOGO.png" alt="DOTLIK IT - It's tech solution" className="logoImg" style={{ height: "40px", width: "auto" }} />
        </a>
        <nav>
          <a href="#services">Solutions</a><a href="#industries">Industries</a><a href="#about">About Us</a><a href="#contact">Contact</a>
        </nav>
        <a className="navBtn" href="#contact">Schedule Consultation <ArrowRight size={16}/></a>
      </header>

      <section className="hero">
        <div className="heroGlow" />
        <div className="heroText">
          <div className="eyebrow">IT SOLUTIONS • WEB • MOBILE • CLOUD</div>
          <h1>Creating the future of IT with <em>amazing experiences.</em></h1>
          <p>Dotlik IT crafts fast, intuitive websites and mobile apps that boost your workflow. We deliver development and design solutions that help your business thrive in the digital world.</p>
          <div className="actions"><a className="primary" href="#contact">Schedule a Free Consultation <ArrowRight size={18}/></a><a className="secondary" href="#services">Our Services</a></div>
          <div className="trust"><CheckCircle2 size={18}/> Scalable solutions &nbsp; <CheckCircle2 size={18}/> Modern technology &nbsp; <CheckCircle2 size={18}/> Dedicated support</div>
        </div>
        <div className="heroVisual">
          <div className="orb orb1"/><div className="orb orb2"/>
          <div className="codeCard">
            <div className="dots"><i/><i/><i/></div>
            <div className="codeLine"><span>const</span> future = <b>"digital"</b>;</div>
            <div className="codeLine">build<span>(</span>future<span>)</span>;</div>
            <div className="codeLine muted">→ scalable / fast / secure</div>
          </div>
        </div>
      </section>

      <section id="about" className="section split">
        <div><div className="eyebrow">WHAT WE DO</div><h2>Simplifying IT for a <span>complex world.</span></h2><p>We combine thoughtful design, reliable engineering and modern technology to turn complex business challenges into simple digital experiences.</p><a className="textLink" href="#contact">Talk to our team <ArrowRight size={17}/></a></div>
        <div className="featureGrid">
          {[
            ["Cost-effectiveness","Practical solutions that create more value from your technology investment."],
            ["Innovative Technology","We stay current with modern technology trends and proven tools."],
            ["Industry Expertise","Solutions shaped around your unique business needs."],
            ["Scalability","Systems that can grow with your business over time."]
          ].map(([t,d])=><article className="feature" key={t}><CheckCircle2/><h3>{t}</h3><p>{d}</p></article>)}
        </div>
      </section>

      <section id="services" className="section dark">
        <div className="center"><div className="eyebrow">HOW WE DO</div><h2>Services built around <span>your goals.</span></h2><p>From your first idea to long-term support, we build digital products that are clear, useful and dependable.</p></div>
        <div className="cards">{services.map(([t,d,I])=><article className="serviceCard" key={t}><div className="icon"><I size={23}/></div><h3>{t}</h3><p>{d}</p><a href="#contact">Learn more <ArrowRight size={15}/></a></article>)}</div>
      </section>

      <section id="industries" className="section">
        <div className="center"><div className="eyebrow">HOW WE DO</div><h2>Solving IT challenges in <span>every industry.</span></h2></div>
        <div className="industryGrid">{industries.map((x,i)=><div className="industry" key={x}><div className="industryNo">0{i+1}</div><h3>{x}</h3><ArrowRight size={18}/></div>)}</div>
      </section>

      <section className="section vendor dark">
        <div className="center"><div className="eyebrow">WHAT WE USE</div><h2>Bringing the best <span>technology</span> to you.</h2><p>Modern tools and frameworks selected to build reliable, maintainable products.</p></div>
        <div className="techGrid">{technologies.map(([t,d])=><article className="tech" key={t}><div className="techIcon"><Server size={20}/></div><h3>{t}</h3><p>{d}</p><a href="#contact">View more <ArrowRight size={15}/></a></article>)}</div>
      </section>

      <section id="contact" className="contact">
        <div><div className="eyebrow">CONTACT US</div><h2>Let’s build something <span>great.</span></h2><p>We’re happy to answer questions and help you determine which services best fit your needs.</p><div className="contactInfo"><Mail size={19}/><span>ceo@dotlik.com</span></div><div className="contactInfo"><MessageSquare size={19}/><span>+8801743006010</span></div></div>
        <form action="mailto:ceo@dotlik.com" method="post" encType="text/plain">
          <input name="Name" placeholder="Name" required/><input name="Email" type="email" placeholder="Company Email" required/><input name="Phone" placeholder="Phone"/><select name="Service" defaultValue=""><option value="" disabled>How can we help you?</option>{services.map(([t])=><option key={t}>{t}</option>)}</select><textarea name="Message" placeholder="Message" rows="5"/><button className="primary" type="submit">Send Message <ArrowRight size={17}/></button>
        </form>
      </section>

      <footer>
        <div className="logo">
          <img src="/logo.png" alt="DOTLIK IT - It's tech solution" className="logoImg" style={{ height: "32px", width: "auto" }} />
        </div>
        <div className="footerLinks"><a href="#services">Services</a><a href="#about">About</a><a href="#industries">Industries</a><a href="#contact">Contact</a></div>
        <small>© 2020 Dotlik IT. All rights reserved. Developed By Team Taher Mamun and Maintain by Hasan Sheikh and Majlan Yousuf Ovi</small>
      </footer>
    </main>
  );
}
