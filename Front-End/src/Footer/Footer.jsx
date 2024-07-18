import "./Footer.css";

function Footer() {
  return (
    <div className="bottom-0 left-0  right-0  ">
      <ul className="flex space-x-7 items-center justify-center sm:pt-5 sm:pb-4 py-3 ">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Ahmed Ragab's Facebook"
            href="https://www.facebook.com/citizenRagab?paipv=0&eav=AfYLiY6GfrujG83JUu8B592rGC6k6zjTSSJa4rfiltnAfVEiNU1XEcTUfXKiLgBuNaE&_rdr"
            className="icon-facebook "
          >
            <ion-icon name="logo-facebook" size="large"></ion-icon>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Ahmed Ragab's Twitter"
            href="https://twitter.com/Ragab"
            className="icon-twitter"
          >
            <ion-icon name="logo-twitter" size="large"></ion-icon>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            aria-label="Ahmed Ragab's Linkedin"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ahmed-ragab-7a542216/"
            className="icon-linkedin"
          >
            <ion-icon name="logo-linkedin" size="large"></ion-icon>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:contact@ahmedragab.com"
            aria-label="Ahmed Ragab's Email"
            className="icon-email"
          >
            <ion-icon name="mail-outline" size="large"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
