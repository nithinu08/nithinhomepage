interface TimelineEntry {
  title: string
  period?: string
  description: string
}

const journey: TimelineEntry[] = [
  {
    title: "AS400 Developer, Capgemini",
    period: "Oct 2021 – Sep 2025",
    description:
      "Trained on Mainframe and AS400 systems, working as a support engineer and developer across multiple client teams documenting legacy program logic, debugging production issues, and evaluating what could be modernized or migrated to the cloud.",
  },
  {
    title: "Choosing a new direction",
    description:
      "After four years in legacy systems, moved toward infrastructure and cloud technologies, an area of long-standing interest. Started deliberately, from the ground up: Linux internals first, then containers and orchestration.",
  },
  {
    title: "Building the homelab",
    description:
      "Installed Arch Linux from scratch to understand Linux at a fundamental level, then progressed through Docker and Kubernetes by running an actual cluster, a Raspberry Pi setup now hosting several self-managed applications, including this site.",
  },
  {
    title: "Where I'm headed",
    description:
      "Still early in this field, and treating that as the starting point. Focused on going deep on Kubernetes which is the backbone of everything from cloud infrastructure to the AI systems being deployed today with CNCF certifications on the roadmap, working towards becoming a Kubestronaut.",
  },
]

function About() {
  return (
    <section className="about">
      <h2>My journey</h2>
      <div className="timeline">
        {journey.map((entry) => (
          <div className="timeline-entry" key={entry.title}>
            <div className="timeline-dot" />
            <p className="timeline-title">{entry.title}</p>
            {entry.period && <p className="timeline-period">{entry.period}</p>}
            <p className="timeline-description">{entry.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About