import Link from "next/link";

export function Header(): JSX.Element {
  const navLinkClassName = "btn btn-ghost normal-case text-xl";
  return (
    <header className="navbar">
      <nav className="flex-1">
        <ul>
          <li className={navLinkClassName}>
            <Link href="/">Home</Link>
          </li>
          <li className={navLinkClassName}>
            <Link href="/property">Properties</Link>
          </li>
        </ul>
      </nav>
      <div>
        <button className="btn btn-ghost btn-circle">
          <img
            alt="me"
            src="/myProfilePic.jpg"
            className="btn btn-ghost btn-circle avatar"
          />
        </button>
      </div>
    </header>
  );
}
