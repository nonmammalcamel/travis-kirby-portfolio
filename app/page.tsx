/* eslint-disable react/no-danger */
export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg:#080b0f;--bg2:#0d1117;--ink:#e2e8f0;--muted:#c0ccda;
  --border:#1e2d3d;--accent:#00ff88;--accent2:#00c4ff;
  --accent-glow:rgba(0,255,136,0.15);--red:#ff4466;--orange:#ffaa00;
  --mono:'Share Tech Mono',monospace;--body:'Space Mono',monospace;
  --heading:'Outfit',sans-serif;
}
html{scroll-behavior:smooth}
body{background:var(--bg)!important;color:var(--ink);font-family:var(--body);font-size:.92rem;line-height:1.8;overflow-x:hidden;min-height:100vh}
.scanlines{position:fixed;inset:0;z-index:999;pointer-events:none;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.08) 2px,rgba(0,0,0,.08) 4px)}
.grid-bg{position:fixed;inset:0;z-index:0;pointer-events:none;background-image:linear-gradient(rgba(0,255,136,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,.03) 1px,transparent 1px);background-size:40px 40px}
.floating-cursor{position:fixed;right:2.5rem;top:0;width:10px;height:22px;background:var(--accent);z-index:998;pointer-events:none;animation:blink 1s step-end infinite;box-shadow:0 0 12px var(--accent-glow),0 0 4px var(--accent);opacity:0;transition:opacity .3s}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
.wrap{position:relative;z-index:1;max-width:820px;margin:0 auto;padding:0 2rem}
.tbar{background:var(--bg2);border-bottom:1px solid var(--border);padding:.6rem 2rem;display:flex;align-items:center;gap:.5rem;position:sticky;top:0;z-index:100}
.dot{width:10px;height:10px;border-radius:50%}.dr{background:#ff5f56}.dy{background:#ffbd2e}.dg{background:#27c93f}
.tbar-title{font-family:var(--mono);font-size:.76rem;color:var(--muted);margin-left:.75rem;letter-spacing:.06em}
.tbar-nav{margin-left:auto;display:flex;gap:1.5rem;list-style:none}
.tbar-nav a{font-family:var(--mono);font-size:.74rem;color:var(--muted);text-decoration:none;letter-spacing:.08em;transition:color .2s}
.tbar-nav a:hover{color:var(--accent)}
.hero{padding:4rem 0 2rem}
.prompt{font-family:var(--mono);font-size:.8rem;color:var(--accent);margin-bottom:1.5rem}
.prompt::before{content:'> ';color:var(--muted)}
.cursor{display:inline-block;width:8px;height:1em;background:var(--accent);animation:blink 1s step-end infinite;vertical-align:text-bottom;margin-left:2px}
h1{font-family:var(--heading);font-size:clamp(3.2rem,9vw,6rem);font-weight:800;line-height:.95;letter-spacing:-.02em;margin-bottom:.25rem}
.nf{color:var(--ink)}
.nl{color:transparent;-webkit-text-stroke:1px var(--accent);text-shadow:0 0 40px var(--accent-glow);position:relative}
.nl::before,.nl::after{content:attr(data-text);position:absolute;top:0;left:0;width:100%;font-family:var(--heading);font-size:inherit;font-weight:800}
.nl::before{color:var(--accent2);clip-path:polygon(0 30%,100% 30%,100% 50%,0 50%);animation:g1 4s infinite linear;opacity:.6}
.nl::after{color:var(--red);clip-path:polygon(0 60%,100% 60%,100% 80%,0 80%);animation:g2 4s infinite linear;opacity:.6}
@keyframes g1{0%,90%,100%{transform:translateX(0);opacity:0}92%{transform:translateX(-4px);opacity:.6}94%{transform:translateX(2px);opacity:.4}96%{transform:translateX(0);opacity:0}}
@keyframes g2{0%,90%,100%{transform:translateX(0);opacity:0}93%{transform:translateX(4px);opacity:.6}95%{transform:translateX(-2px);opacity:.3}97%{transform:translateX(0);opacity:0}}
.role{font-family:var(--mono);font-size:.82rem;color:var(--accent2);letter-spacing:.2em;text-transform:uppercase;margin:1.5rem 0 .5rem}
section{padding:4rem 0;border-top:1px solid var(--border)}
.sh{display:flex;align-items:center;gap:1rem;margin-bottom:2.5rem}
.sn{font-family:var(--mono);font-size:.72rem;color:var(--accent);letter-spacing:.1em}
h2{font-family:var(--heading);font-size:1.7rem;font-weight:700;letter-spacing:-.02em;color:var(--ink)}
.sl{flex:1;height:1px;background:linear-gradient(90deg,var(--border),transparent)}
.about-text{color:var(--muted);font-size:.9rem;line-height:1.9;max-width:580px}
.about-text p+p{margin-top:.75rem}
.detail-grid{margin-top:2rem;display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--border);border:1px solid var(--border)}
.d-item{padding:1.1rem 1.25rem;background:var(--bg2)}
.d-label{font-family:var(--mono);font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);margin-bottom:.35rem}
.d-value{font-family:var(--mono);font-size:.84rem;color:var(--ink)}
.skills-section+.skills-section{margin-top:2rem}
.skills-cat{font-family:var(--mono);font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);margin-bottom:1rem}
.skill-row{display:flex;align-items:center;gap:1rem;padding:.6rem 0;border-bottom:1px solid var(--border)}
.skill-row:last-child{border-bottom:none}
.skill-name{font-family:var(--mono);font-size:.84rem;color:var(--ink);width:200px;flex-shrink:0}
.skill-bar-wrap{flex:1;height:6px;background:var(--border);border-radius:3px;overflow:hidden}
.skill-bar{height:100%;border-radius:3px;width:0%;transition:width 1.2s cubic-bezier(.22,1,.36,1)}
.skill-bar.green{background:var(--accent);box-shadow:0 0 8px var(--accent-glow)}
.skill-bar.blue{background:var(--accent2);box-shadow:0 0 8px rgba(0,196,255,.2)}
.skill-bar.orange{background:var(--orange);box-shadow:0 0 8px rgba(255,170,0,.2)}
.skill-bar.animated{width:var(--target)}
.skill-level{font-family:var(--mono);font-size:.68rem;color:var(--muted);width:80px;text-align:right;flex-shrink:0}
.certs-grid{display:grid;gap:2px}
.cg-label{font-family:var(--mono);font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);padding:.6rem 0 .4rem;border-top:1px solid var(--border);margin-top:.75rem}
.cg-label:first-child{border-top:none;margin-top:0}
.cc{background:var(--bg2);border:1px solid var(--border);padding:1.1rem 1.25rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;transition:border-color .2s,background .2s;position:relative;overflow:hidden;text-decoration:none;color:inherit;cursor:default}
a.cc{cursor:pointer}
a.cc:hover .cc-name::after{opacity:1}
a.cc .cc-name::after{content:' ↗';font-size:.72rem;color:var(--accent);opacity:0;transition:opacity .2s}
.cc::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:var(--border);transition:background .2s}
.cc:hover{border-color:#1e3a2a;background:#0a0f0b}
.cc:hover::before{background:var(--accent)}
.cc.ip{border-color:#2a1e00}
.cc.ip:hover::before{background:var(--orange)}
.cc-left{display:flex;align-items:center;gap:1rem}
.cc-icon{font-size:1.1rem;width:32px;text-align:center;flex-shrink:0}
.cc-name{font-family:var(--mono);font-size:.84rem;color:var(--ink);margin-bottom:.15rem}
.cc-meta{display:flex;align-items:center;gap:.75rem}
.cc-issuer{font-family:var(--mono);font-size:.68rem;color:var(--muted);letter-spacing:.06em}
.cc-tier{font-family:var(--mono);font-size:.64rem;letter-spacing:.08em;color:var(--muted);border:1px solid var(--border);padding:.1rem .4rem}
.cc-status{font-family:var(--mono);font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;padding:.2rem .6rem;border:1px solid;flex-shrink:0}
.st-e{color:var(--accent);border-color:var(--accent);text-shadow:0 0 8px var(--accent-glow)}
.st-ip{color:var(--orange);border-color:var(--orange)}
.st-p{color:var(--muted);border-color:var(--border)}
.ref-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--border);border:1px solid var(--border)}
.ref-card{padding:1.25rem;background:var(--bg2)}
.ref-name{font-family:var(--mono);font-size:.88rem;color:var(--ink);margin-bottom:.25rem}
.ref-title{font-family:var(--mono);font-size:.72rem;color:var(--accent2);letter-spacing:.04em;margin-bottom:.15rem}
.ref-org{font-family:var(--mono);font-size:.68rem;color:var(--muted);letter-spacing:.06em}
.ref-avail{font-family:var(--mono);font-size:.64rem;color:var(--muted);margin-top:.6rem;font-style:italic;letter-spacing:.04em}
.contact-text{color:var(--muted);font-size:.9rem;max-width:460px;line-height:1.85;margin-bottom:2rem}
.contact-grid{display:grid;gap:2px}
.contact-row{display:flex;align-items:center;gap:1rem;background:var(--bg2);border:1px solid var(--border);padding:1rem 1.25rem;transition:border-color .2s,background .2s;text-decoration:none;color:inherit}
.contact-row:hover{border-color:var(--accent);background:#0a0f0b}
.contact-row:hover .cr-label{color:var(--accent)}
.cr-label{font-family:var(--mono);font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);width:80px;flex-shrink:0;transition:color .2s}
.cr-value{font-family:var(--mono);font-size:.84rem;color:var(--ink)}
.cr-arrow{margin-left:auto;font-family:var(--mono);font-size:.76rem;color:var(--accent);opacity:0;transition:opacity .2s}
.contact-row:hover .cr-arrow{opacity:1}
.terminal-input-wrap{padding:2rem 0;border-top:1px solid var(--border)}
.ti-label{font-family:var(--mono);font-size:.72rem;color:var(--muted);margin-bottom:.75rem;letter-spacing:.06em}
.ti-row{display:flex;align-items:center;gap:.5rem}
.ti-prompt{font-family:var(--mono);font-size:.9rem;color:var(--accent)}
.ti-input{flex:1;background:none;border:none;outline:none;font-family:var(--mono);font-size:.9rem;color:var(--ink);caret-color:var(--accent)}
.ti-input::placeholder{color:var(--border)}
.ti-output{margin-top:1rem;font-family:var(--mono);font-size:.82rem;color:var(--muted);line-height:1.8;white-space:pre-wrap;max-height:300px;overflow-y:auto}
.ti-output .cmd{color:var(--accent)}
.ti-output .err{color:var(--red)}
footer{border-top:1px solid var(--border);padding:2rem 0 3rem;text-align:center}
.fc{font-family:var(--mono);font-size:.72rem;color:var(--muted)}
.fc span{color:var(--accent)}
@media(max-width:540px){.detail-grid,.ref-grid{grid-template-columns:1fr}h1{font-size:3rem}.cc{flex-direction:column;align-items:flex-start}.tbar-nav{display:none}.skill-name{width:120px}.floating-cursor{display:none}}
      `}} />
      <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;600;700;800&display=swap" rel="stylesheet"/>
      <div className="scanlines" />
      <div className="grid-bg" />
      <div className="floating-cursor" />
      <div className="tbar">
        <div className="dot dr" /><div className="dot dy" /><div className="dot dg" />
        <span className="tbar-title">travis-kirby ~ interactive-resume</span>
        <ul className="tbar-nav">
          <li><a href="#about">./about</a></li>
          <li><a href="#skills">./skills</a></li>
          <li><a href="#certs">./certs</a></li>
          <li><a href="#references">./refs</a></li>
          <li><a href="#contact">./contact</a></li>
        </ul>
      </div>
      <div className="wrap">
        <div className="hero">
          <div className="prompt">initializing profile — digital forensics &amp; eDiscovery<span className="cursor" /></div>
          <h1><div className="nf">TRAVIS M.</div><div className="nl" data-text="KIRBY">KIRBY</div></h1>
          <div className="role">// Paralegal Candidate · eDiscovery · Digital Forensics</div>
        </div>

        <section id="about">
          <div className="sh"><span className="sn">[ 01 ]</span><h2>About</h2><div className="sl" /></div>
          <div className="about-text">
            <p>Paralegal candidate focused on eDiscovery and digital forensics. Currently pursuing the EC-Council CHFI certification path with hands-on lab work across forensic acquisition, network forensics, and incident response.</p>
            <p>Bridging legal practice and technical investigation — two DISCO certifications in legal technology, real-world challenge work on CyberDefenders and Blue Team Labs Online, and a California Paralegal Certificate in progress.</p>
          </div>
          <div className="detail-grid">
            <div className="d-item"><div className="d-label">// Focus</div><div className="d-value">eDiscovery &amp; Digital Forensics</div></div>
            <div className="d-item"><div className="d-label">// Target Cert</div><div className="d-value">EC-Council CHFI</div></div>
            <div className="d-item"><div className="d-label">// Tools</div><div className="d-value">FTK Imager, Autopsy, Wireshark</div></div>
            <div className="d-item"><div className="d-label">// Legal Tech</div><div className="d-value">DISCO Certified (x2)</div></div>
            <div className="d-item"><div className="d-label">// Legal</div><div className="d-value">CA Paralegal Cert (In Progress)</div></div>
            <div className="d-item"><div className="d-label">// Status</div><div className="d-value">Seeking Entry-Level Roles</div></div>
          </div>
        </section>

        <section id="skills">
          <div className="sh"><span className="sn">[ 02 ]</span><h2>Skills</h2><div className="sl" /></div>
          <div className="skills-section">
            <div className="skills-cat">// Forensics &amp; eDiscovery</div>
            <div className="skill-row"><span className="skill-name">DISCO Platform</span><div className="skill-bar-wrap"><div className="skill-bar green" style={{"--target":"85%"} as React.CSSProperties} /></div><span className="skill-level">Advanced</span></div>
            <div className="skill-row"><span className="skill-name">FTK Imager</span><div className="skill-bar-wrap"><div className="skill-bar green" style={{"--target":"60%"} as React.CSSProperties} /></div><span className="skill-level">Intermediate</span></div>
            <div className="skill-row"><span className="skill-name">Autopsy</span><div className="skill-bar-wrap"><div className="skill-bar green" style={{"--target":"55%"} as React.CSSProperties} /></div><span className="skill-level">Intermediate</span></div>
            <div className="skill-row"><span className="skill-name">Wireshark</span><div className="skill-bar-wrap"><div className="skill-bar green" style={{"--target":"50%"} as React.CSSProperties} /></div><span className="skill-level">Developing</span></div>
            <div className="skill-row"><span className="skill-name">Document Review</span><div className="skill-bar-wrap"><div className="skill-bar green" style={{"--target":"80%"} as React.CSSProperties} /></div><span className="skill-level">Advanced</span></div>
          </div>
          <div className="skills-section">
            <div className="skills-cat">// Legal</div>
            <div className="skill-row"><span className="skill-name">Civil Litigation</span><div className="skill-bar-wrap"><div className="skill-bar blue" style={{"--target":"70%"} as React.CSSProperties} /></div><span className="skill-level">Proficient</span></div>
            <div className="skill-row"><span className="skill-name">Legal Research</span><div className="skill-bar-wrap"><div className="skill-bar blue" style={{"--target":"75%"} as React.CSSProperties} /></div><span className="skill-level">Proficient</span></div>
            <div className="skill-row"><span className="skill-name">IRAC Writing</span><div className="skill-bar-wrap"><div className="skill-bar blue" style={{"--target":"70%"} as React.CSSProperties} /></div><span className="skill-level">Proficient</span></div>
            <div className="skill-row"><span className="skill-name">Copyright / IP</span><div className="skill-bar-wrap"><div className="skill-bar blue" style={{"--target":"65%"} as React.CSSProperties} /></div><span className="skill-level">Proficient</span></div>
          </div>
          <div className="skills-section">
            <div className="skills-cat">// Technical</div>
            <div className="skill-row"><span className="skill-name">Network Forensics</span><div className="skill-bar-wrap"><div className="skill-bar orange" style={{"--target":"45%"} as React.CSSProperties} /></div><span className="skill-level">Developing</span></div>
            <div className="skill-row"><span className="skill-name">Incident Response</span><div className="skill-bar-wrap"><div className="skill-bar orange" style={{"--target":"40%"} as React.CSSProperties} /></div><span className="skill-level">Developing</span></div>
            <div className="skill-row"><span className="skill-name">Malware Analysis</span><div className="skill-bar-wrap"><div className="skill-bar orange" style={{"--target":"35%"} as React.CSSProperties} /></div><span className="skill-level">Learning</span></div>
          </div>
        </section>

        <section id="certs">
          <div className="sh"><span className="sn">[ 03 ]</span><h2>Certifications</h2><div className="sl" /></div>
          <div className="certs-grid">
            <div className="cg-label">// Earned</div>
            <a className="cc" href="#" title="View certificate"><div className="cc-left"><div className="cc-icon">🎓</div><div><div className="cc-name">Cyber Forensics Intro</div><div className="cc-meta"><span className="cc-issuer">Great Learning</span><span className="cc-tier">T4</span></div></div></div><span className="cc-status st-e">Earned</span></a>
            <a className="cc" href="#" title="View certificate"><div className="cc-left"><div className="cc-icon">⚖️</div><div><div className="cc-name">DISCO Data Management</div><div className="cc-meta"><span className="cc-issuer">DISCO University</span><span className="cc-tier">Legal Tech</span></div></div></div><span className="cc-status st-e">Earned</span></a>
            <a className="cc" href="#" title="View certificate"><div className="cc-left"><div className="cc-icon">⚖️</div><div><div className="cc-name">DISCO Search &amp; Review</div><div className="cc-meta"><span className="cc-issuer">DISCO University</span><span className="cc-tier">Legal Tech</span></div></div></div><span className="cc-status st-e">Earned</span></a>
            <div className="cg-label">// In Progress</div>
            <div className="cc ip"><div className="cc-left"><div className="cc-icon">📜</div><div><div className="cc-name">California Paralegal Certificate</div><div className="cc-meta"><span className="cc-issuer">Cal State LA</span><span className="cc-tier">Legal</span></div></div></div><span className="cc-status st-ip">In Progress</span></div>
            <div className="cg-label">// Planned</div>
            <div className="cc"><div className="cc-left"><div className="cc-icon">🛡️</div><div><div className="cc-name">NSE 1 — Network Security Associate</div><div className="cc-meta"><span className="cc-issuer">Fortinet</span><span className="cc-tier">T2</span></div></div></div><span className="cc-status st-p">Planned</span></div>
            <div className="cc"><div className="cc-left"><div className="cc-icon">🛡️</div><div><div className="cc-name">NSE 2 — Network Security Associate</div><div className="cc-meta"><span className="cc-issuer">Fortinet</span><span className="cc-tier">T2</span></div></div></div><span className="cc-status st-p">Planned</span></div>
            <div className="cc"><div className="cc-left"><div className="cc-icon">🛡️</div><div><div className="cc-name">NSE 3 — Network Security Associate</div><div className="cc-meta"><span className="cc-issuer">Fortinet</span><span className="cc-tier">T2</span></div></div></div><span className="cc-status st-p">Planned</span></div>
            <div className="cc"><div className="cc-left"><div className="cc-icon">🔍</div><div><div className="cc-name">ACI — AccessData Certified Investigator</div><div className="cc-meta"><span className="cc-issuer">Exterro / AccessData</span><span className="cc-tier">T3</span></div></div></div><span className="cc-status st-p">Planned</span></div>
            <div className="cc"><div className="cc-left"><div className="cc-icon">📁</div><div><div className="cc-name">DFE — Digital Forensics Essentials</div><div className="cc-meta"><span className="cc-issuer">EC-Council</span><span className="cc-tier">T2</span></div></div></div><span className="cc-status st-p">Planned</span></div>
            <div className="cc"><div className="cc-left"><div className="cc-icon">🔬</div><div><div className="cc-name">CHFI — Computer Hacking Forensic Investigator</div><div className="cc-meta"><span className="cc-issuer">EC-Council</span><span className="cc-tier">T1</span></div></div></div><span className="cc-status st-p">Planned</span></div>
          </div>
        </section>

        <section id="references">
          <div className="sh"><span className="sn">[ 04 ]</span><h2>References</h2><div className="sl" /></div>
          <div className="ref-grid">
            <div className="ref-card"><div className="ref-name">Jane Doe, Esq.</div><div className="ref-title">Senior Litigation Partner</div><div className="ref-org">Placeholder &amp; Associates LLP</div><div className="ref-avail">Available upon request</div></div>
            <div className="ref-card"><div className="ref-name">John Smith</div><div className="ref-title">Director of eDiscovery</div><div className="ref-org">Placeholder Legal Solutions</div><div className="ref-avail">Available upon request</div></div>
            <div className="ref-card"><div className="ref-name">Dr. Sarah Chen</div><div className="ref-title">Professor, Legal Studies</div><div className="ref-org">California State University, Los Angeles</div><div className="ref-avail">Available upon request</div></div>
            <div className="ref-card"><div className="ref-name">Michael Torres</div><div className="ref-title">Senior Digital Forensics Analyst</div><div className="ref-org">Placeholder Cybersecurity Inc.</div><div className="ref-avail">Available upon request</div></div>
          </div>
        </section>

        <section id="contact">
          <div className="sh"><span className="sn">[ 05 ]</span><h2>Contact</h2><div className="sl" /></div>
          <div className="contact-text">Currently seeking entry-level positions in eDiscovery, digital forensics, and litigation support. Open to connecting.</div>
          <div className="contact-grid">
            <a className="contact-row" href="mailto:placeholder@email.com"><span className="cr-label">Email</span><span className="cr-value">placeholder@email.com</span><span className="cr-arrow">→</span></a>
            <a className="contact-row" href="https://linkedin.com/in/placeholder" target="_blank" rel="noopener noreferrer"><span className="cr-label">LinkedIn</span><span className="cr-value">linkedin.com/in/placeholder</span><span className="cr-arrow">→</span></a>
            <a className="contact-row" href="https://github.com/nonmammalcamel" target="_blank" rel="noopener noreferrer"><span className="cr-label">GitHub</span><span className="cr-value">github.com/nonmammalcamel</span><span className="cr-arrow">→</span></a>
          </div>
        </section>

        <div className="terminal-input-wrap">
          <div className="ti-label">// interactive terminal — type &quot;help&quot; to see available commands</div>
          <div className="ti-row">
            <span className="ti-prompt">visitor@kirby:~$</span>
            <input className="ti-input" id="term-input" type="text" placeholder="type a command..." autoComplete="off" spellCheck={false} />
          </div>
          <div className="ti-output" id="term-output" />
        </div>
      </div>

      <footer><div className="fc">&copy; 2026 <span>Travis M. Kirby</span> — All rights reserved.</div></footer>

      <script dangerouslySetInnerHTML={{ __html: `
        var skillsSection = document.getElementById('skills');
        var skillsAnimated = false;
        var observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting && !skillsAnimated) {
              skillsAnimated = true;
              document.querySelectorAll('.skill-bar').forEach(function(bar) {
                bar.classList.add('animated');
              });
            }
          });
        }, { threshold: 0.2 });
        observer.observe(skillsSection);

        var commands = {
          help: '<span class="cmd">Available commands:<\\/span>\\n  about      — who I am\\n  skills     — technical proficiencies\\n  certs      — certifications & credentials\\n  refs       — professional references\\n  contact    — get in touch\\n  tools      — forensic tools I use\\n  education  — academic background\\n  clear      — clear terminal output\\n  resume     — download resume (coming soon)',
          about: '<span class="cmd">Travis M. Kirby<\\/span>\\n  Paralegal candidate specializing in eDiscovery\\n  and digital forensics investigation.\\n  Pursuing EC-Council CHFI certification.\\n  Based in Los Angeles, CA.',
          skills: '<span class="cmd">Core Skills:<\\/span>\\n  ├─ eDiscovery workflows & document review\\n  ├─ Forensic imaging & acquisition\\n  ├─ Network traffic analysis\\n  ├─ Civil litigation support\\n  ├─ Legal research & IRAC writing\\n  └─ Copyright & IP law fundamentals',
          certs: '<span class="cmd">Certifications:<\\/span>\\n  <span style="color:var(--accent)">■<\\/span> Cyber Forensics Intro — Great Learning\\n  <span style="color:var(--accent)">■<\\/span> DISCO Data Management — DISCO University\\n  <span style="color:var(--accent)">■<\\/span> DISCO Search & Review — DISCO University\\n  <span style="color:var(--orange)">■<\\/span> CA Paralegal Certificate — In Progress\\n  <span style="color:var(--muted)">□<\\/span> Fortinet NSE 1-3 — Planned\\n  <span style="color:var(--muted)">□<\\/span> ACI, DFE, CHFI — Planned',
          refs: '<span class="cmd">References:<\\/span>\\n  ├─ Jane Doe, Esq. — Senior Litigation Partner\\n  ├─ John Smith — Director of eDiscovery\\n  ├─ Dr. Sarah Chen — Professor, Legal Studies\\n  └─ Michael Torres — Sr. Digital Forensics Analyst\\n  Contact details available upon request.',
          references: '<span class="cmd">References:<\\/span>\\n  ├─ Jane Doe, Esq. — Senior Litigation Partner\\n  ├─ John Smith — Director of eDiscovery\\n  ├─ Dr. Sarah Chen — Professor, Legal Studies\\n  └─ Michael Torres — Sr. Digital Forensics Analyst\\n  Contact details available upon request.',
          contact: '<span class="cmd">Contact:<\\/span>\\n  Email    → placeholder@email.com\\n  LinkedIn → linkedin.com/in/placeholder\\n  GitHub   → github.com/nonmammalcamel',
          tools: '<span class="cmd">Forensic Tools:<\\/span>\\n  ├─ FTK Imager — forensic imaging\\n  ├─ Autopsy — disk analysis\\n  ├─ Wireshark — packet capture\\n  ├─ DISCO — eDiscovery platform\\n  └─ VMware Fusion — lab environments',
          education: '<span class="cmd">Education:<\\/span>\\n  ├─ Paralegal Certificate (In Progress)\\n  │  Cal State LA — Expected 2025\\n  ├─ B.A. Music Production\\n  │  The Evergreen State College\\n  └─ B.S. Mathematics\\n     The Evergreen State College',
          resume: '<span class="cmd">Resume download coming soon.<\\/span>\\n  Check back after deployment.'
        };

        var termInput = document.getElementById('term-input');
        var termOutput = document.getElementById('term-output');

        termInput.addEventListener('keydown', function(e) {
          if (e.key === 'Enter') {
            var cmd = this.value.trim().toLowerCase();
            this.value = '';
            if (!cmd) return;
            if (cmd === 'clear') { termOutput.innerHTML = ''; return; }
            var sectionMap = { about:'about', skills:'skills', certs:'certs', refs:'references', references:'references', contact:'contact' };
            if (sectionMap[cmd]) {
              var el = document.getElementById(sectionMap[cmd]);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
            var result = commands[cmd];
            if (result) {
              termOutput.innerHTML += '<span class="cmd">visitor@kirby:~$ ' + cmd + '<\\/span>\\n' + result + '\\n\\n';
            } else {
              termOutput.innerHTML += '<span class="cmd">visitor@kirby:~$ ' + cmd + '<\\/span>\\n<span class="err">command not found: ' + cmd + '<\\/span> — type "help" for available commands\\n\\n';
            }
            termOutput.scrollTop = termOutput.scrollHeight;
          }
        });

        document.querySelector('.terminal-input-wrap').addEventListener('click', function() { termInput.focus(); });

        // Floating cursor — line-hopping, appears after scroll
        var fc = document.querySelector('.floating-cursor');
        var lineHeight = 28;
        var currentLine = -1;
        var hasScrolled = false;

        window.addEventListener('scroll', function() {
          var scrollY = window.scrollY;
          if (scrollY > 80) {
            if (!hasScrolled) { hasScrolled = true; fc.style.opacity = '1'; }
            var viewMid = scrollY + window.innerHeight * 0.45;
            var targetLine = Math.floor(viewMid / lineHeight);
            if (targetLine !== currentLine) {
              currentLine = targetLine;
              fc.style.top = (targetLine * lineHeight - scrollY) + 'px';
            }
          } else {
            hasScrolled = false;
            fc.style.opacity = '0';
          }
        });
      `}} />
    </>
  );
}