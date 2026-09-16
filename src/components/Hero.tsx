import profileImg from '../assets/PP.jpg'

interface HeroProps {
  name: string
  tagline: string
  githubUrl: string
  linkedinUrl: string
}

function Hero({ name, tagline, githubUrl, linkedinUrl }: HeroProps) {
  return (
    <section className="hero">
      <img src={profileImg} alt={name} className="hero-avatar" />
      <h1>{name}</h1>
      <p>{tagline}</p>
      <div className="hero-links">
        <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
        <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      <div className="tech-icons">
        <img src="https://cdn.simpleicons.org/linux/9A9890" alt="Linux" title="Linux" />
        <img src="https://cdn.simpleicons.org/docker/9A9890" alt="Docker" title="Docker" />
        <img src="https://cdn.simpleicons.org/kubernetes/9A9890" alt="Kubernetes" title="Kubernetes" />
        <img src="https://cdn.simpleicons.org/flux/9A9890" alt="Flux (GitOps)" title="Flux (GitOps)" />
        <img src="https://cdn.simpleicons.org/grafana/9A9890" alt="Grafana" title="Grafana" />  
      </div>
      <p className="tech-icons-secondary">+ React, Go &amp; OpenTelemetry </p>
    </section>
  )
}

export default Hero