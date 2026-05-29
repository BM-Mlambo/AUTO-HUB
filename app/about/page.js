"use client";

const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "5,000+", label: "Cars Sold" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "3", label: "Showroom Locations" },
];

const values = [
  {
    icon: "🤝",
    title: "Integrity",
    desc: "We believe in honest, transparent dealings, no hidden fees, no pressure tactics. Every transaction is built on trust.",
  },
  {
    icon: "🏆",
    title: "Excellence",
    desc: "From our curated inventory to our after-sale support, we hold ourselves to the highest standards in everything we do.",
  },
  {
    icon: "🔍",
    title: "Transparency",
    desc: "Every vehicle on our lot comes with a full history report. What you see is exactly what you get.",
  },
  {
    icon: "💡",
    title: "Innovation",
    desc: "We continuously invest in technology and processes to make buying and selling cars simpler and smarter.",
  },
];

const milestones = [
  {
    year: "2014",
    title: "AutoHub Founded",
    desc: "Started with a single showroom in Nairobi with a vision to redefine the car buying experience in East Africa.",
  },
  {
    year: "2017",
    title: "Expanded to Mombasa",
    desc: "Opened our second branch on the Kenyan coast, bringing quality vehicles closer to the coastal market.",
  },
  {
    year: "2020",
    title: "Launched Online Platform",
    desc: "Introduced our digital platform allowing customers to browse, compare, and enquire from anywhere in the country.",
  },
  {
    year: "2023",
    title: "3rd Showroom — Kisumu",
    desc: "Opened our Western Kenya branch, completing our presence across Kenya's three major cities.",
  },
];

const whyUs = [
  {
    icon: "✅",
    title: "Certified Pre-Owned Vehicles",
    desc: "Every used car undergoes a rigorous 120-point inspection before it reaches our floor.",
  },
  {
    icon: "💳",
    title: "Flexible Financing",
    desc: "We partner with leading banks and SACCOs to offer competitive loan packages tailored to your budget.",
  },
  {
    icon: "🔧",
    title: "After-Sale Support",
    desc: "Our dedicated service team is available long after the keys are in your hands.",
  },
  {
    icon: "📋",
    title: "Full Documentation",
    desc: "We handle all paperwork, logbooks, insurance, and registration, so you don't have to.",
  },
];

export default function AboutPage() {
  return (
    <div style={{ fontFamily: "'Georgia', serif", color: "#1a1a1a" }}>

      {/* ── Hero ── */}
      <div
        style={{
          background: "linear-gradient(160deg, #1b5e20 0%, #2e7d32 60%, #388e3c 100%)",
          padding: "80px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* subtle background pattern */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)",
          }}
        />
        <p
          style={{
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#a5d6a7",
            marginBottom: "16px",
            fontFamily: "'Trebuchet MS', sans-serif",
          }}
        >
          About AutoHub
        </p>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 800,
            color: "#fff",
            margin: "0 0 20px",
            lineHeight: 1.2,
            letterSpacing: "-0.5px",
          }}
        >
          Kenya's Most Trusted <br />
          Car Dealership
        </h1>
        <p
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            color: "#c8e6c9",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            fontFamily: "'Trebuchet MS', sans-serif",
          }}
        >
          For over a decade, AutoHub has connected Kenyans with quality
          vehicles, backed by expertise, transparency, and a genuine
          commitment to customer satisfaction.
        </p>
      </div>

      {/* ── Stats Bar ── */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #e0e0e0",
          padding: "0",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "32px 16px",
                textAlign: "center",
                borderRight: i < 3 ? "1px solid #e0e0e0" : "none",
              }}
            >
              <div
                style={{
                  fontSize: "2.2rem",
                  fontWeight: 800,
                  color: "#2e7d32",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "#666",
                  fontFamily: "'Trebuchet MS', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Our Story ── */}
      <div style={{ background: "#fafafa", padding: "72px 24px" }}>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* Text */}
          <div>
            <p style={sectionLabelStyle}>Our Story</p>
            <h2 style={sectionHeadingStyle}>
              Built on a Passion for Driving Dreams Forward
            </h2>
            <p style={bodyStyle}>
              AutoHub was founded in 2014 by a team of automotive enthusiasts
              who believed the car-buying process in Kenya deserved better,
              more honesty, more choice, and more respect for the customer.
            </p>
            <p style={{ ...bodyStyle, marginTop: "16px" }}>
              What started as a modest lot in Nairobi has grown into a
              nationally recognised dealership with three branches, a robust
              online platform, and thousands of satisfied customers who return
              to us and refer their friends  year after year.
            </p>
            <p style={{ ...bodyStyle, marginTop: "16px" }}>
              We stock everything from fuel-efficient hatchbacks to premium
              SUVs and commercial vehicles, all rigorously inspected and
              competitively priced.
            </p>
          </div>

          {/* Timeline */}
          <div>
            {milestones.map((m, i) => (
              <div
                key={m.year}
                style={{
                  display: "flex",
                  gap: "20px",
                  marginBottom: i < milestones.length - 1 ? "28px" : 0,
                }}
              >
                {/* Line + dot */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "#e8f5e9",
                      border: "2px solid #4caf50",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "#2e7d32",
                      fontFamily: "'Trebuchet MS', sans-serif",
                      flexShrink: 0,
                    }}
                  >
                    {m.year}
                  </div>
                  {i < milestones.length - 1 && (
                    <div
                      style={{
                        width: "2px",
                        flex: 1,
                        minHeight: "20px",
                        background: "#c8e6c9",
                        margin: "4px 0",
                      }}
                    />
                  )}
                </div>
                <div style={{ paddingTop: "10px" }}>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "#1b5e20",
                      marginBottom: "4px",
                    }}
                  >
                    {m.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "#555",
                      lineHeight: 1.6,
                      fontFamily: "'Trebuchet MS', sans-serif",
                    }}
                  >
                    {m.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mission & Values ── */}
      <div style={{ background: "#fff", padding: "72px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {/* Mission statement */}
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={sectionLabelStyle}>Our Mission</p>
            <h2 style={{ ...sectionHeadingStyle, textAlign: "center", maxWidth: "620px", margin: "0 auto 20px" }}>
              To Make Quality Vehicles Accessible to Every Kenyan
            </h2>
            <p
              style={{
                maxWidth: "560px",
                margin: "0 auto",
                color: "#555",
                fontSize: "1rem",
                lineHeight: 1.8,
                fontFamily: "'Trebuchet MS', sans-serif",
              }}
            >
              We exist to simplify the journey from browsing to ownership, 
              delivering transparent pricing, reliable vehicles, and
              professional service that earns lifelong trust.
            </p>
          </div>

          {/* Values grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
            }}
          >
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  padding: "28px",
                  borderRadius: "12px",
                  border: "1px solid #e8f5e9",
                  background: "#fafffe",
                  display: "flex",
                  gap: "18px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    background: "#e8f5e9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    flexShrink: 0,
                  }}
                >
                  {v.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#1b5e20",
                      marginBottom: "6px",
                    }}
                  >
                    {v.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.87rem",
                      color: "#555",
                      lineHeight: 1.7,
                      fontFamily: "'Trebuchet MS', sans-serif",
                    }}
                  >
                    {v.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Why Choose Us ── */}
      <div
        style={{
          background: "linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)",
          borderTop: "1px solid #c8e6c9",
          padding: "72px 24px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={sectionLabelStyle}>Why Choose AutoHub</p>
            <h2 style={{ ...sectionHeadingStyle, textAlign: "center" }}>
              The AutoHub Advantage
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            {whyUs.map((w) => (
              <div
                key={w.title}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "24px 28px",
                  border: "1px solid #c8e6c9",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  {w.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "0.97rem",
                      color: "#1b5e20",
                      marginBottom: "6px",
                    }}
                  >
                    {w.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.86rem",
                      color: "#555",
                      lineHeight: 1.7,
                      fontFamily: "'Trebuchet MS', sans-serif",
                    }}
                  >
                    {w.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div
        style={{
          background: "#1b5e20",
          padding: "56px 24px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "12px",
          }}
        >
          Ready to Find Your Next Car?
        </h2>
        <p
          style={{
            color: "#a5d6a7",
            fontSize: "1rem",
            marginBottom: "28px",
            fontFamily: "'Trebuchet MS', sans-serif",
          }}
        >
          Browse our full inventory or visit one of our showrooms today.
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/cars"
            style={{
              background: "#4caf50",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "0.95rem",
              textDecoration: "none",
              fontFamily: "'Trebuchet MS', sans-serif",
            }}
          >
            Browse Cars →
          </a>
          <a
            href="/contact"
            style={{
              background: "transparent",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "0.95rem",
              textDecoration: "none",
              border: "2px solid #4caf50",
              fontFamily: "'Trebuchet MS', sans-serif",
            }}
          >
            Contact Us
          </a>
        </div>
      </div>

    </div>
  );
}

// Shared styles
const sectionLabelStyle = {
  fontSize: "0.75rem",
  fontWeight: 700,
  letterSpacing: "2.5px",
  textTransform: "uppercase",
  color: "#4caf50",
  marginBottom: "10px",
  fontFamily: "'Trebuchet MS', sans-serif",
};

const sectionHeadingStyle = {
  fontSize: "clamp(1.4rem, 3vw, 2rem)",
  fontWeight: 800,
  color: "#1b5e20",
  lineHeight: 1.25,
  marginBottom: "20px",
  letterSpacing: "-0.3px",
};

const bodyStyle = {
  fontSize: "0.95rem",
  color: "#444",
  lineHeight: 1.8,
  fontFamily: "'Trebuchet MS', sans-serif",
};