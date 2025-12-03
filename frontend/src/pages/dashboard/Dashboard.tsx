import React, { useState } from 'react';
import './dashboard.css';
import { ChevronRight, CircleCheck , CircleDot, Circle, Clock,X } from 'lucide-react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

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
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

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