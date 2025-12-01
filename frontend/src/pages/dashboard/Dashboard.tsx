import React from "react";
import "../../App.css";
import { SignOutButton  } from '@clerk/clerk-react';

const Dashboard: React.FC = () => {
  return (
    <>
    <div>
        <h1>
            Dashboard Page
        </h1>
        <SignOutButton>
            <button className="px-4 py-2 md:px-6 md:py-2.5 rounded-lg border border-blue-500 text-blue-400 font-semibold text-sm md:text-base hover:bg-blue-600 hover:text-white transition transform hover:-translate-y-0.5">
                Sign Out
            </button>
        </SignOutButton>
    </div>
    </>
    );
}
export default Dashboard;