import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../components/UserProfile.module.css";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://randomuser.me/api");
      setUser(response.data.results[0]);
    } catch (error) {
      console.error("Ошибка загрузки данных", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className={styles.containtainer}>
      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        user && (
          <div className={styles.profile}>
            <img
              src={user.picture.large}
              alt={user.name.first}
              className={styles.avatar}
            />
            <h2 className={styles.name}>
              {user.name.first} {user.name.last}
            </h2>
            <p className={styles.email}>{user.email}</p>
            <button className={styles.button} onClick={fetchUser}>
              Load New User
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default UserProfile;
