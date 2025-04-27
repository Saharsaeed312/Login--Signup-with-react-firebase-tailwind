import { signInWithEmailAndPassword, signInWithPopup, getAuth, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import { app } from '../Firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged In");
      navigate('/Home')
    } catch (error) {
      alert("Login error: " + error.message);
      setLoginError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Google login done');
    } catch (error) {
      alert('Google login error: ' + error.message);
      setLoginError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400">
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-orange-600">Login</h2>
        <form>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your E-mail"
            className="w-full px-4 py-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            className="w-full px-4 py-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-2 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition duration-300"
          >
            Log In
          </button>
        </form>
        <div className="flex flex-col gap-3 mt-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold py-2 rounded-lg hover:from-red-500 hover:to-red-700 transition duration-300"
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

export default Login;
