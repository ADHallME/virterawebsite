'use client'

export default function Home() {
  return (
    <div 
      className="min-h-screen"
      dangerouslySetInnerHTML={{ 
        __html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width">
          <meta name="generator" content="Framer ae47b7e">
          <title>Virtera - Energy Innovation</title>
          <meta name="description" content="Virtera is revolutionizing the energy sector with innovative solutions for a sustainable future.">
          <link href="/AsCmp4609MffpLyJNC52e4JLC4.png" rel="icon" media="(prefers-color-scheme: light)">
          <link href="/AsCmp4609MffpLyJNC52e4JLC4.png" rel="icon" media="(prefers-color-scheme: dark)">
          <link rel="apple-touch-icon" href="/lZrtJ9C1LXEfbxVbDuZV61c.png">
          <meta property="og:type" content="website">
          <meta property="og:title" content="Virtera - Energy Innovation">
          <meta property="og:description" content="Virtera is revolutionizing the energy sector with innovative solutions for a sustainable future.">
          <meta property="og:image" content="/oF0jnTQG6cbXTnTm41HNoCs1c1g.jpg">
          <meta name="twitter:card" content="summary_large_image">
          <meta name="twitter:title" content="Virtera - Energy Innovation">
          <meta name="twitter:description" content="Virtera is revolutionizing the energy sector with innovative solutions for a sustainable future.">
          <meta name="twitter:image" content="https://framerusercontent.com/images/oF0jnTQG6cbXTnTm41HNoCs1c1g.jpg">
          <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="">
          <meta name="robots" content="max-image-preview:large">
          <link rel="canonical" href="https://virtera.com/">
          <meta property="og:url" content="https://virtera.com/">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Inter', sans-serif; line-height: 1.6; }
            .hero { 
              background: linear-gradient(135deg, #1f271b 0%, #2d3a2d 100%);
              color: white; 
              padding: 120px 24px;
              text-align: center;
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .hero h1 { 
              font-size: 4rem; 
              font-weight: 700; 
              margin-bottom: 1rem;
              background: linear-gradient(45deg, #ffffff, #e0e0e0);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            .hero p { 
              font-size: 1.25rem; 
              max-width: 600px; 
              margin: 0 auto 2rem;
              opacity: 0.9;
            }
            .cta-button {
              display: inline-block;
              background: linear-gradient(45deg, #4ade80, #22c55e);
              color: white;
              padding: 16px 32px;
              border-radius: 8px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
              transition: transform 0.2s ease;
            }
            .cta-button:hover {
              transform: translateY(-2px);
            }
            .features {
              padding: 80px 24px;
              background: #f8f6f2;
            }
            .container {
              max-width: 1200px;
              margin: 0 auto;
            }
            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 40px;
              margin-top: 60px;
            }
            .feature-card {
              background: white;
              padding: 40px;
              border-radius: 12px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              text-align: center;
            }
            .feature-card h3 {
              font-size: 1.5rem;
              margin-bottom: 1rem;
              color: #1f271b;
            }
            .feature-card p {
              color: #666;
              line-height: 1.6;
            }
            .section-title {
              text-align: center;
              font-size: 2.5rem;
              margin-bottom: 1rem;
              color: #1f271b;
            }
            .section-subtitle {
              text-align: center;
              font-size: 1.2rem;
              color: #666;
              max-width: 600px;
              margin: 0 auto;
            }
            @media (max-width: 768px) {
              .hero h1 { font-size: 2.5rem; }
              .hero p { font-size: 1.1rem; }
              .section-title { font-size: 2rem; }
            }
          </style>
        </head>
        <body>
          <section class="hero">
            <div class="container">
              <h1>Virtera</h1>
              <p>Revolutionizing the energy sector with innovative solutions for a sustainable future. We're bridging the gap between research and real-world impact.</p>
              <a href="#contact" class="cta-button">Explore Our Solutions</a>
            </div>
          </section>
          
          <section class="features">
            <div class="container">
              <h2 class="section-title">Our Mission</h2>
              <p class="section-subtitle">Born from the collective ambition of industry veterans and technology innovators, our mission is to expedite the journey of groundbreaking energy solutions from conception to global markets.</p>
              
              <div class="features-grid">
                <div class="feature-card">
                  <h3>Strategic Funding</h3>
                  <p>Our strategic funding connection process involves a meticulous evaluation of each project to ensure it aligns with our investors' goals for societal impact and financial return.</p>
                </div>
                <div class="feature-card">
                  <h3>Regulatory Guidance</h3>
                  <p>We equip researchers with the tools and knowledge necessary for navigating the complexities of energy innovation, from initial development through to commercialization.</p>
                </div>
                <div class="feature-card">
                  <h3>Impact Amplification</h3>
                  <p>By streamlining the pathway from laboratory discovery to market introduction, we help ensure that life-changing energy solutions reach communities faster.</p>
                </div>
              </div>
            </div>
          </section>
        </body>
        </html>
        ` 
      }}
    />
  )
}
