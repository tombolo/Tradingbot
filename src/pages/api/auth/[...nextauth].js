import NextAuth from "next-auth";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export default NextAuth({
  providers: [
    // Google authentication provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // Email and password authentication provider using Firebase
    {
      id: "firebase",
      name: "Firebase",
      type: "credentials",
      credentials: {
        // The name to display on the sign-in form (e.g., "Sign in with Email")
        name: "Email",
        // Fields to include in the credentials object (e.g., email, password)
        credentials: {
          email: {  label: "Email", type: "text" },
          password: {  label: "Password", type: "password" },
        },
      },
      authorize: async (credentials) => {
        // Validate the email and password here
        const { email, password } = credentials;
        // Use Firebase authentication to validate the user's credentials
        try {
          const userCredential = await signInWithEmailAndPassword(
            firebaseAuth,
            email,
            password
          );
          // If authentication is successful, return the user data
          return Promise.resolve({ id: userCredential.user.uid, email: userCredential.user.email });
        } catch (error) {
          // If authentication fails, return null
          return Promise.resolve(null);
        }
      },
    },
  ],

  // Add any other configuration options you need here
  callbacks: {
    // Customize the user object returned by NextAuth
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
  },

  // Add any other configuration options you need here
});
