import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Mariana Rasdolsky</p>
      <p>Buenos Aires, Argentina</p>
    </footer>
  )
}
