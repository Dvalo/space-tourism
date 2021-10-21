import Link from "next/link";
import { useRouter } from "next/router";
import { navItems } from "../utils/utils";

export default function Nav() {
  const router = useRouter();

  return (
    <nav className="sp-nav">
      <ul>
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.link}>
              <a className={router.pathname == item.link ? "sp-active" : ""}>
                <span>{item.number}</span>
                {item.name}
              </a>
            </Link>
          </li>
        ))}
        {/* <li>
          <a href="#">
            <span>00</span>Home
          </a>
        </li>
        <li>
          <a href="#">
            <span>01</span>Destination
          </a>
        </li>
        <li>
          <a href="#">
            <span>02</span>Crew
          </a>
        </li>
        <li>
          <a href="#">
            <span>03</span>Technology
          </a>
        </li> */}
      </ul>
    </nav>
  );
}
