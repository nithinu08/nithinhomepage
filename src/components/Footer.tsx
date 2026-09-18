function Footer() {
  return (
    <footer className="footer">
      <p>This site runs itself.</p>
      <ul className="footer-stack">
        <li>k3s on a self-hosted Raspberry Pi 5, reconciled via Flux GitOps</li>
        <li>CI builds arm64 images with Buildx + QEMU, pushed to Docker Hub</li>
        <li>Renovate tracks image digests and opens PRs, Flux applies the rest</li>
        <li>Cloudflare Tunnel for ingress, SOPS+age for secrets</li>
      </ul>
      <div className="footer-links">
        <a href="https://github.com/nithinu08" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/nithin-upadhyaya-19a808208/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}

export default Footer