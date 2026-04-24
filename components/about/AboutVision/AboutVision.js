import Image from "next/image";
import styles from "./AboutVision.module.css";

const BLOCKS = [
  {
    title: "Practical Recommendations From The Start",
    text: "Every Mindview Automation project begins with a clear understanding of site conditions, usage demands, and the systems that already exist. That helps us recommend solutions that are realistic to install, operate, and maintain.",
    bullets: [
      "Recommendations shaped by site constraints and operating requirements",
      "Technical planning that prioritizes safety, uptime, and maintainability",
      "Delivery decisions based on performance, not unnecessary complexity",
    ],
    image: "/assets/about/machine.jpeg",
    alt: "Industrial machinery",
  },
  {
    title: "Integrated Expertise Across Critical Systems",
    text: "Mindview Automation works across security, automation, engineering support, energy, and vertical transport, giving clients one team that understands how technical systems interact across a property or facility.",
    bullets: [
      "Cross-functional delivery across multiple infrastructure categories",
      "Better coordination between design, installation, and support teams",
      "Solutions that fit homes, commercial spaces, and operational facilities",
    ],
    image: "/assets/about/workspace.jpeg",
    alt: "Engineering workspace",
  },
  {
    title: "Support That Continues After Handover",
    text: "Our involvement does not end once a system is installed. We help clients through commissioning, optimization, maintenance planning, and practical handover so the delivered solution remains dependable over time.",
    bullets: [
      "Commissioning and performance checks before operational handover",
      "Guidance for long-term maintenance and day-to-day system use",
      "Ongoing support that improves confidence after project delivery",
    ],
    image: "/assets/about/collaboration.avif",
    alt: "Team collaboration",
  },
];

const STATS = [
  { value: "500+", label: "Delivered projects" },
  { value: "50+", label: "Trusted partners" },
  { value: "4.7/5", label: "Average client rating" },
];

export default function AboutVision() {
  return (
    <section className={styles.vision}>
      <div className={styles.visionInner}>
        <div className={styles.header}>
          <span className={styles.pill}>How we work</span>
          <h2 className={styles.title}>The Standards Behind Every Mindview Automation Project</h2>
          <p className={styles.subtitle}>
            The same pattern drives our work across service lines: understand the
            environment, recommend the right fit, execute carefully, and support
            the system after delivery.
          </p>
        </div>

        <div className={styles.stack}>
          {BLOCKS.map((block, index) => (
            <div
              key={block.title}
              className={`${styles.row} ${index % 2 === 1 ? styles.rowReverse : ""}`}
            >
              <div className={styles.media}>
                <Image
                  src={block.image}
                  alt={block.alt}
                  className={styles.image}
                  width={1200}
                  height={900}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{block.title}</h3>
                <p className={styles.cardText}>{block.text}</p>
                <ul className={styles.list}>
                  {block.bullets.map((bullet) => (
                    <li key={bullet} className={styles.listItem}>
                      <span className={styles.listIcon} aria-hidden="true">
                        <svg viewBox="0 0 20 20" fill="none">
                          <path
                            d="M5 10.5l3 3 7-7"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

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
