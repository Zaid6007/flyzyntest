import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email); // placeholder, can connect to backend later
    setSubmitted(true);
    setEmail("");
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-black text-white px-4">
      <Image src="/flyzyn-logo.png" alt="Flyzyn Logo" width={120} height={120} className="mb-6" />
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Flyzyn</h1>
      <p className="text-lg md:text-2xl mb-6 text-center">
        Our website is currently <span className="text-[#FF2A2A]">under updates</span>.
      </p>
      <p className="text-sm opacity-70 mb-8">Stay tuned for something exciting!</p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 rounded-xl text-black focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-[#FF2A2A] rounded-xl font-semibold hover:bg-red-600 transition"
          >
            Notify Me
          </button>
        </form>
      ) : (
        <p className="text-green-400 font-medium">Thanks! You’ll hear from us soon.</p>
      )}
    </main>
  );
}
