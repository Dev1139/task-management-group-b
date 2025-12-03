import React from 'react';
import { X, User, Clock, Settings, LogOut } from 'lucide-react';
import { SignOutButton } from '@clerk/clerk-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-screen w-64 bg-white border-gray-200 border-r transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex justify-between items-center border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            <X size={24} />
          </button>
        </div>
        
        <nav className="p-4 flex flex-col h-full pb-24">
          <div className="flex-1 space-y-2 min-h-0">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition-colors">
              <User size={20} />
              <span>Profile</span>
            </button>
            
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition-colors">
              <Clock size={20} />
              <span>History</span>
            </button>
            
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition-colors">
              <Settings size={20} />
              <span>Settings</span>
            </button>
          </div>
          
          {/* Sign Out Section */}
          <div className="absolute bottom-4 left-4 right-4 border-t border-gray-200 pt-4">
            <SignOutButton>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-red-600 hover:text-red-700 transition-colors border border-red-200 hover:border-red-300">
                <LogOut size={20} />
                <span className="font-medium">Sign Out</span>
              </button>
            </SignOutButton>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-opacity-10"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

export default Sidebar;