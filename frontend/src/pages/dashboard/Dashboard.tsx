import React, { useState } from 'react';
import './dashboard.css';
import { Menu, X, User, Clock, Settings, ChevronRight, LayoutDashboard, Calendar, FileText, CircleCheck , CircleDot, Circle, LogOut } from 'lucide-react';
import { SignOutButton } from '@clerk/clerk-react';

const Dashboard:React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTaskOverviewOpen, setIsTaskOverviewOpen] = useState(false);

  const allTasks = [
    { id: 1, title: 'Design system documentation', status: 'done', day: 'Monday' },
    { id: 2, title: 'Update user authentication', status: 'done', day: 'Monday' },
    { id: 3, title: 'Fix responsive layout bugs', status: 'done', day: 'Monday' },
    { id: 4, title: 'API integration testing', status: 'in-progress', day: 'Tuesday' },
    { id: 5, title: 'Database optimization', status: 'in-progress', day: 'Tuesday' },
    { id: 6, title: 'Code review for PR #234', status: 'not-started', day: 'Tuesday' },
    { id: 7, title: 'Sprint planning meeting', status: 'not-started', day: 'Wednesday' },
    { id: 8, title: 'Update project dependencies', status: 'not-started', day: 'Wednesday' },
    { id: 9, title: 'Write unit tests', status: 'not-started', day: 'Wednesday' },
    { id: 10, title: 'Performance monitoring setup', status: 'done', day: 'Thursday' },
    { id: 11, title: 'Deploy to staging', status: 'done', day: 'Thursday' },
    { id: 12, title: 'Client presentation prep', status: 'done', day: 'Thursday' },
    { id: 13, title: 'Security audit', status: 'not-started', day: 'Thursday' },
    { id: 14, title: 'Documentation review', status: 'not-started', day: 'Thursday' },
  ];

  const activeTasksCount = allTasks.filter(t => t.status === 'in-progress').length;
  const doneTasksCount = allTasks.filter(t => t.status === 'done').length;


  const getStatusLabel = (status: string) => {
    switch(status) {
      case 'done':
        return 'Done';
      case 'in-progress':
        return 'In Progress';
      case 'not-started':
        return 'Not Started';
      default:
        return '';
    }
  };

  const weekData = [
    {
      day: 'Monday',
      date: 'Nov 24',
      progress: 100,
      done: 3,
      inProgress: 0,
      notStarted: 0
    },
    {
      day: 'Tuesday',
      date: 'Nov 25',
      progress: 0,
      done: 0,
      inProgress: 2,
      notStarted: 1
    },
    {
      day: 'Wednesday',
      date: 'Nov 26',
      progress: 0,
      done: 0,
      inProgress: 0,
      notStarted: 3
    },
    {
      day: 'Thursday',
      date: 'Nov 27',
      progress: 60,
      done: 3,
      inProgress: 0,
      notStarted: 2
    },
    {
      day: 'Friday',
      date: 'Nov 28',
      progress: 0,
      done: 0,
      inProgress: 0,
      notStarted: 0,
      noTasks: true
    }
  ];

  return (
    <div className="min-h-screen h-screen bg-gray-50 transition-colors duration-200 overflow-hidden">
      {/* Header */}
      <header className="bg-white border-gray-200 border-b px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-600 hover:text-gray-900"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-2xl font-semibold text-blue-500">DevPulse</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl flex items-center gap-2 transition-colors">
            <LayoutDashboard size={18} />
            Dashboard
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl flex items-center gap-2 transition-colors">
            <Calendar size={18} />
            Calendar
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl flex items-center gap-2 transition-colors">
            <FileText size={18} />
            Generate AI Report
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-screen w-64 bg-white border-gray-200 border-r transform transition-transform duration-300 z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex justify-between items-center border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
          <button onClick={() => setIsSidebarOpen(false)} className="text-gray-600 hover:text-gray-900">
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
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-opacity-10"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="p-8 max-w-7xl mx-auto h-screen overflow-y-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Weekly Sprint Board</h2>
          <p className="text-gray-500">Click on any day to view detailed tasks and schedule</p>
        </div>

        {/* Weekly Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {weekData.map((day, index) => (
            <div 
              key={index}
              className="weekly-card bg-white hover:shadow-sm rounded-xl p-6 shadow-sm cursor-pointer transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{day.day}</h3>
                  <p className="text-gray-400">{day.date}</p>
                </div>
                <ChevronRight className="text-gray-300 group-hover:text-gray-500 transition-colors" size={20} />
              </div>

              {day.noTasks ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <Clock className="text-gray-300 mb-3" size={48} />
                  <p className="text-gray-400">No tasks yet</p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-500">Progress</span>
                      <span className={`font-semibold ${day.progress === 100 ? 'text-blue-500' : day.progress > 0 ? 'text-blue-500' : 'text-gray-400'}`}>
                        {day.progress}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-linear-to-r from-blue-400 to-blue-500 rounded-full transition-all"
                        style={{ width: `${day.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <CircleCheck  className="text-green-500" size={20} />
                        <span className="text-gray-600">Done</span>
                      </div>
                      <span className="font-semibold text-green-500">{day.done}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <CircleDot className="text-yellow-500" size={20} />
                        <span className="text-gray-600">In Progress</span>
                      </div>
                      <span className="font-semibold text-yellow-500">{day.inProgress}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Circle className="text-gray-400" size={20} />
                        <span className="text-gray-600">Not Started</span>
                      </div>
                      <span className="font-semibold text-gray-500">{day.notStarted}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Task Overview Widget */}
        <div className={`fixed bottom-8 right-8 rounded-2xl shadow-2xl transition-all duration-300 ${isTaskOverviewOpen ? 'w-72 bg-white border border-gray-200' : 'w-52 h-16 bg-linear-to-r from-blue-500 to-blue-600 text-white border border-transparent'}`}>
          <div className={isTaskOverviewOpen ? 'p-4' : 'px-3'}>
            <div className={`flex ${isTaskOverviewOpen ? 'items-start' : 'items-center'} gap-3`}>
              <div className={`${isTaskOverviewOpen ? 'w-9 h-9' : 'w-8 h-15'} rounded-full flex items-center justify-center shrink-0 ${isTaskOverviewOpen ? 'bg-blue-100' : 'bg-blue-600/20'}`}>
                <CircleCheck  size={isTaskOverviewOpen ? 20 : 16} className={isTaskOverviewOpen ? 'text-blue-600' : 'text-white'} />
              </div>

              {isTaskOverviewOpen ? (
                <div className="flex-1">
                  <h3 className={`font-semibold text-lg mb-1 ${isTaskOverviewOpen ? 'text-gray-900' : 'text-white'}`}>Task Overview</h3>
                  <p className={`text-sm mb-2 ${isTaskOverviewOpen ? 'text-gray-600' : 'text-blue-100'}`}>{activeTasksCount} active · {doneTasksCount} done</p>
                  {!isTaskOverviewOpen && (
                    <p className="text-blue-50 text-xs opacity-90">Click to view all tasks</p>
                  )}
                </div>
              ) : (
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <h4 className="text-white text-sm font-medium mb-0.5 text-center">Task Overview</h4>
                  <p className="text-blue-100 text-xs text-center">{activeTasksCount} active · {doneTasksCount} done</p>
                </div>
              )}

              <div className="flex gap-2">
                <button 
                  onClick={() => setIsTaskOverviewOpen(!isTaskOverviewOpen)}
                  className="w-8 h-8 rounded flex items-center justify-center transition-colors text-white hover:bg-white hover:bg-opacity-20"
                >
                  <ChevronRight size={18} className={`transform transition-transform ${isTaskOverviewOpen ? 'rotate-90' : '-rotate-90'}`} />
                </button>
              </div>
            </div>

            {isTaskOverviewOpen && (
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                    <Circle size={16} />
                    <span>UPCOMING</span>
                  </div>
                  <button 
                    onClick={() => setIsTaskOverviewOpen(false)}
                    className="text-gray-600 hover:bg-gray-100 w-8 h-8 rounded flex items-center justify-center transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
                <div className="max-h-72 overflow-y-auto pr-2 space-y-3 custom-scrollbar-light">
                  {allTasks.map((task) => (
                    <div 
                      key={task.id}
                      className="bg-white hover:bg-gray-50 rounded-xl p-4 transition-all cursor-pointer border border-gray-200"
                    >
                      <div className="flex items-start gap-3">
                        <Clock className="text-blue-500 shrink-0 mt-0.5" size={20} />
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-900 text-sm font-medium mb-2">{task.title}</p>
                          <div className="flex items-center gap-2 text-xs">
                            <span className="text-gray-500">{task.day}</span>
                            <span className="text-gray-400">•</span>
                            <span className={`px-2 py-1 rounded-full ${
                              task.status === 'done' ? 'bg-green-100 text-green-700' :
                              task.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {getStatusLabel(task.status)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Overall Progress */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                    <span className="text-sm font-bold text-blue-600">{Math.round((doneTasksCount / allTasks.length) * 100)}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-linear-to-r from-blue-500 to-blue-600 rounded-full transition-all"
                      style={{ width: `${(doneTasksCount / allTasks.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;