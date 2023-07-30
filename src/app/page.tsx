'use client'
      import Main from '../components/Main/Main'
      import styles from "@/components/Main/Main.module.css";
      import {getAuth, onAuthStateChanged} from "firebase/auth";
      import {useEffect, useState} from "react";

       const  Home =()=> {
          const [user, setUser] = useState(null);
          useEffect(() => {
              const auth = getAuth();
              const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                  if (currentUser) {
                      // User is signed in.
                      setUser(currentUser);
                  } else {
                      // No user is signed in.
                      setUser(null);
                  }
              });

              // Отписка от слушателя при размонтировании
              return () => unsubscribe();
          }, []);

          return (
              <div>
                  {user ? (
                      <div className={styles.content}>
                          <Main/>
                      </div>
                  ) : (
                      <div>Please log in.</div>
                  )}
              </div>
          );
      }
      export default Home

