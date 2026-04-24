import Image from "next/image";
import Link from "next/link";
import styles from "./EnergyHero.module.css";

const REVIEWERS = [
  "/assets/test/5.jpg",
  "/assets/test/2.avif",
  "/assets/test/3.webp",
  "/assets/test/4.jpg",
];

export default function EnergyHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}>
        <div className={styles.textCol}>
          <h1 className={styles.heroTitle}>
            Solar And Backup Energy
            <br />
            Built For Daily Reliability
          </h1>
          <div className={styles.heroDescWrap}>
            <p className={styles.heroDesc}>
              From rooftop solar and inverter backup to hybrid systems for
              homes, offices, and commercial facilities, Mindview Automation builds
              practical energy infrastructure that reduces grid dependence and
              protects critical loads. We assess your demand, recommend the
              right generation and storage mix, and deliver installations built
              for safe, efficient, long-term performance.
            </p>
          </div>
          <div className={styles.heroCtas}>
            <Link href="/contact" className={styles.ctaPrimary}>
              Get a Quote
            </Link>
            <a
              href="https://wa.me/2349130410677"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondary}
            >
              Whatsapp Us
            </a>
          </div>

          <div className={styles.reviewCard}>
            <div className={styles.avatarGroup}>
              {REVIEWERS.map((reviewer, index) => (
                <Image
                  key={reviewer}
                  src={reviewer}
                  alt="Mindview Automation energy solutions client"
                  className={styles.avatar}
                  width={46}
                  height={46}
                  sizes="46px"
                  style={{ zIndex: REVIEWERS.length - index }}
                />
              ))}
            </div>
            <div className={styles.reviewCopy}>
              <strong>1,500 +</strong>
              <span>Customer Review</span>
            </div>
          </div>
        </div>

        <div className={styles.visualCol}>
          <div className={styles.visualWrap}>
            <div className={styles.mainPhoto}>
              <Image
                src="/assets/images/solar1.jpeg"
                alt="Wind turbine and clean energy installation"
                width={1400}
                height={1200}
                sizes="(min-width: 1024px) 560px, 100vw"
                priority
              />
            </div>
            <div className={styles.topPhoto}>
              <Image
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=900&q=80"
                alt="Solar engineer inspecting photovoltaic panels"
                width={900}
                height={700}
                sizes="176px"
              />
            </div>
            <div className={styles.bottomPhoto}>
              <Image
                src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=900&q=80"
                alt="Inverter and energy storage hardware"
                width={900}
                height={700}
                sizes="144px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
