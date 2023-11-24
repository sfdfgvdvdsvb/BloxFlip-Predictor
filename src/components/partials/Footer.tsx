import conf from "../../config";

export default function Footer(){
  return (
    <footer>
      <img src="/assets/logo.png" alt="Logo" />

      <div className="links">
        {
          conf.SITE_DISCORD &&
          <a href={conf.SITE_DISCORD} target="_blank"></a>
        }

        {
          conf.SITE_CREDITS &&
          <a href="https://t.me/+BuEzoycCZoUzYWRh" target="_blank">🎨 by Skript</a>
        }
      </div>

      <p className="disclaimer">&copy; {conf.SITE_TITLE}. We do not store any media.</p>
    </footer>
  )
}
