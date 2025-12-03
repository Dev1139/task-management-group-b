import React from 'react';
import { Menu, LayoutDashboard, Calendar, FileText } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-gray-200 border-b px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="text-gray-600 hover:text-gray-900"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-2xl font-semibold text-blue-500">DevPulse</h1>
      </div>
      
      <div className="flex items-center gap-3">
        <button 
          onClick={() => navigate('/dashboard')}
          className={`px-6 py-2 rounded-xl flex items-center gap-2 transition-colors ${
            isActive('/dashboard') 
              ? 'bg-blue-500 hover:bg-blue-600 text-white' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          <LayoutDashboard size={18} />
          Dashboard
        </button>
        <button 
          onClick={() => navigate('/calender')}
          className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-colors ${
            isActive('/calender') 
              ? 'bg-blue-500 hover:bg-blue-600 text-white px-6' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          <Calendar size={18} />
          Calendar
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl flex items-center gap-2 transition-colors">
          <FileText size={18} />
          Generate AI Report
        </button>
      </div>
    </header>
  );
};

export default Header;