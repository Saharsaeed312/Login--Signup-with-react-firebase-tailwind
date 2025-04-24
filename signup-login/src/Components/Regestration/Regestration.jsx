import {
    signInWithEmailAndPassword,
    signInWithPopup,
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
  } from 'firebase/auth';
  import { useState } from 'react';
  import { app } from '../../Firebase';
  
  function Registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
  
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
  
    const handleSignup = async (e) => {
      e.preventDefault();
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Sign up done");
      } catch (error) {
        alert("Signup error:", error.message);
        setLoginError(error.message);
      }
    };
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Logged In");
      } catch (error) {
        alert("Login error:", error.message);
        setLoginError(error.message);
      }
    };
  
    const handleGoogleLogin = async () => {
      try {
        await signInWithPopup(auth, googleProvider);
        alert('Google login done');
      } catch (error) {
        alert('Google login error:', error.message);
        setLoginError(error.message);
      }
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>
          <form>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your E-mail"
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Log In
            </button>
          </form>
          <div className="flex flex-col gap-3 mt-4">
            <button
              onClick={handleSignup}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Sign Up
            </button>
            <button
              onClick={handleGoogleLogin}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Continue with Google
            </button>
          </div>
          {loginError && (
            <p className="mt-4 text-red-600 text-sm text-center">{loginError}</p>
          )}
        </div>
      </div>
    );
  }
  
  export default Registration;
  