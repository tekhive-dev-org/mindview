import styles from "./AboutVision.module.css";

const BLOCK_IMAGES = [
  "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=500&q=80",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80",
];

const STATS = [
  { value: "500+", label: "Learners from 10+ countries" },
  { value: "50+", label: "Industry mentors and Tutors" },
  { value: "4.7/5", label: "Average course rating" },
];

export default function AboutVision() {
  return (
    <section className={styles.vision}>
      <div className={styles.visionInner}>
        <div className={styles.contentGrid}>
          {/* Left: text blocks */}
          <div className={styles.textCol}>
            {/* Block 1: text then image */}
            <div className={styles.block}>
              <img
                src={BLOCK_IMAGES[0]}
                alt="Industrial machinery"
                className={styles.blockImg}
              />
              <h2 className={styles.blockTitle}>
                A World United by Collaboration
              </h2>
              <p className={styles.blockText}>
                We envision a world where geographical boundaries are mere lines
                on a map, where teams seamlessly come together to innovate,
                create, and conquer.
              </p>
              <p className={styles.blockText}>
                Our vision is to become the go-to platform where aspiring
                professionals, startups, and organizations access world-class
                training, mentorship, and technology services that drive growth
                and innovation.
              </p>
            </div>

            {/* Block 2: image then text */}
            <div className={styles.block}>
              <img
                src={BLOCK_IMAGES[1]}
                alt="Engineering workspace"
                className={styles.blockImg}
              />
              <h2 className={styles.blockTitle}>Empower, Connect, Transform</h2>
              <p className={styles.blockText}>
                Our mission is simple yet profound: To bridge the gap between
                learning and industry by empowering individuals and
                organizations with practical tech skills, transformative digital
                solutions, and collaborative learning experiences.
              </p>
            </div>

            {/* Block 3: text then image */}
            <div className={styles.block}>
              <img
                src={BLOCK_IMAGES[2]}
                alt="Team collaboration"
                className={styles.blockImg}
              />
              <h2 className={styles.blockTitle}>
                Fostering a Culture of Collaboration
              </h2>
              <p className={styles.blockText}>
                Perhaps one of the most significant impacts of SaaS-powered
                communication and collaboration is the shift in organizational
                culture.
              </p>
            </div>
          </div>

          {/* Right: image */}
          <div className={styles.imageCol}>
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
              alt="Team collaboration"
              className={styles.sideImage}
            />
          </div>
        </div>

        {/* Stats Row */}
        <div className={styles.statsRow}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <p className={styles.statValue}>{stat.value}</p>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
