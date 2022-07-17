import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <Link href="/api/hello">
      <a>
        <p>Visit the api route</p>
      </a>
    </Link>
  );
}
