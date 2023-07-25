import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";
import Link from "next/link";
import { LoadingSpinner } from "components/loading";
// import { api } from "~/utils/api";

export default function Home() {
  const { user, isLoaded: userLoaded, isSignedIn } = useUser();
  return (
    <>
      <main className={styles.main}>
        <div className={styles.topNav}>
          <h3 className={styles.cardTitle}>Listwiser</h3>
        </div>
        {/* {!userLoaded && <LoadingSpinner />} */}
        {/* Above will be if nothing is working, show a loading spinner */}
        <div className={styles.container}>
          <div className={styles.cardRow}>
            <h3 className={styles.cardTitle}>First Steps →</h3>
            <div className={styles.cardText}>
              The perfect solution for your family and you.
            </div>
            <h3 className={styles.cardTitle}>Documentation →</h3>
            <div className={styles.cardText}>
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
