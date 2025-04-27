import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useState } from 'react';
import { app } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupError, setSignupError] = useState('');

  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Sign up done");
      navigate('/Login')
    } catch (error) {
      alert("Signup error: " + error.message);
      setSignupError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400">
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-orange-600">Sign Up</h2>
        <form>
          <input type="text" placeholder="First Name" className="w-full px-4 py-3 mb-4 border rounded-lg" />
          <input type="text" placeholder="Last Name" className="w-full px-4 py-3 mb-4 border rounded-lg" />
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
            onClick={handleSignup}
            className="w-full bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-semibold py-2 rounded-lg hover:from-orange-500 hover:to-yellow-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        {signupError && (
          <p className="mt-4 text-red-600 text-sm text-center">{signupError}</p>
        )}
      </div>
    </div>
  );
}

export default Signup;
