import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Here you can add logic to handle sign-up, e.g., sending data to a server
    console.log('Sign Up:', { email, password });
    // Navigate to the landing page or another page after sign-up
    navigate('/'); // Redirect to the landing page after sign-up
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
      <form onSubmit={handleSignUp} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-gray-800 transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
