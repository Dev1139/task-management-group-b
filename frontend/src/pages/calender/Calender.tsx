import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

interface CalendarViewProps {
  onDayClick?: (date: string) => void;
}

// Mock task data - same structure as Dashboard
const mockTasks = [
  { id: 1, title: 'Design system documentation', status: 'done', day: 'Monday', date: '2024-12-02', priority: true },
  { id: 2, title: 'Update user authentication', status: 'done', day: 'Monday', date: '2024-12-02' },
  { id: 3, title: 'Fix responsive layout bugs', status: 'done', day: 'Monday', date: '2024-12-02' },
  { id: 4, title: 'API integration testing', status: 'in-progress', day: 'Tuesday', date: '2024-12-03', priority: true },
  { id: 5, title: 'Database optimization', status: 'in-progress', day: 'Tuesday', date: '2024-12-03' },
  { id: 6, title: 'Code review for PR #234', status: 'not-started', day: 'Tuesday', date: '2024-12-03' },
  { id: 7, title: 'Sprint planning meeting', status: 'not-started', day: 'Wednesday', date: '2024-12-04' },
  { id: 8, title: 'Update project dependencies', status: 'not-started', day: 'Wednesday', date: '2024-12-04', priority: true },
  { id: 9, title: 'Write unit tests', status: 'not-started', day: 'Wednesday', date: '2024-12-04' },
  { id: 10, title: 'Performance monitoring setup', status: 'done', day: 'Thursday', date: '2024-12-05' },
  { id: 11, title: 'Deploy to staging', status: 'done', day: 'Thursday', date: '2024-12-05', priority: true },
  { id: 12, title: 'Client presentation prep', status: 'done', day: 'Thursday', date: '2024-12-05' },
  { id: 13, title: 'Security audit', status: 'not-started', day: 'Thursday', date: '2024-12-05' },
  { id: 14, title: 'Documentation review', status: 'not-started', day: 'Thursday', date: '2024-12-05' },
];

const Calendar: React.FC<CalendarViewProps> = ({ onDayClick }) => {
  const tasks = mockTasks;
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentDate);

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const getProductivityColor = (date: string) => {
    const dayTasks = tasks.filter(t => t.date === date);
    if (dayTasks.length === 0) return 'bg-gray-50';

    const completed = dayTasks.filter(t => t.status === 'done').length;
    const total = dayTasks.length;
    const rate = total > 0 ? (completed / total) * 100 : 0;

    if (rate >= 80) return 'bg-emerald-600';
    if (rate >= 60) return 'bg-teal-500';
    if (rate >= 40) return 'bg-cyan-400';
    if (rate >= 20) return 'bg-blue-400';
    if (rate > 0) return 'bg-indigo-300';
    return 'bg-gray-300';
  };

  const getTaskStats = (date: string) => {
    const dayTasks = tasks.filter(t => t.date === date);
    const completed = dayTasks.filter(t => t.status === 'done').length;
    const total = dayTasks.length;
    const highPriority = dayTasks.filter(t => t.priority).length;
    
    return { completed, total, highPriority };
  };

  const formatDate = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return dateStr;
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  // Generate calendar grid
  const calendarDays = [];
  const adjustedStartDay = startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1; // Adjust for Monday start

  // Empty cells before first day
  for (let i = 0; i < adjustedStartDay; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="aspect-square" />);
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const dateStr = formatDate(day);
    const stats = getTaskStats(dateStr);
    const productivityColor = getProductivityColor(dateStr);
    const today = isToday(day);
    const isWeekday = date.getDay() !== 0 && date.getDay() !== 6;

    calendarDays.push(
      <div
        key={day}
        onClick={() => isWeekday && onDayClick?.(dateStr)}
        className={`aspect-square border border-gray-200 rounded-lg p-2 transition-all ${
          today ? 'ring-4 ring-blue-500 shadow-lg' : 'hover:shadow-md'
        } ${
          isWeekday ? 'cursor-pointer hover:scale-105' : 'opacity-50 cursor-not-allowed bg-gray-100'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm ${today ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>
              {day}
            </span>
            {stats.total > 0 && (
              <div className={`w-6 h-6 rounded-full ${productivityColor} flex items-center justify-center`}>
                <span className="text-xs text-white">{stats.total}</span>
              </div>
            )}
          </div>

          {stats.total > 0 && (
            <div className="flex-1 flex flex-col justify-end text-xs space-y-1">
              <div className="text-green-600">✓ {stats.completed}</div>
              {stats.highPriority > 0 && (
                <div className="text-yellow-600">⭐ {stats.highPriority}</div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen h-screen bg-gray-50 transition-colors duration-200 overflow-hidden">
      {/* Header */}
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content */}
      <main className="p-8 max-w-7xl mx-auto h-screen overflow-y-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Productivity Calendar</h2>
          <p className="text-gray-500">Track your productivity patterns and task completion over time</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={previousMonth}
            className="p-2 hover:bg-linear-to-r hover:from-blue-100 hover:to-cyan-100 rounded-xl transition-all text-gray-700"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <h3 className="text-gray-900">{monthName}</h3>
          
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-linear-to-r hover:from-blue-100 hover:to-cyan-100 rounded-xl transition-all text-gray-700"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Day Labels */}
        <div className="grid grid-cols-7 gap-2 mb-1">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <div key={day} className="text-center text-gray-600 text-sm py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {calendarDays}
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
        <h2 className="text-gray-900 mb-3 text-lg">🎨 Productivity Color Scale</h2>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gray-50 border border-gray-200" />
            <div>
              <p className="text-sm text-gray-700">No tasks</p>
              <p className="text-xs text-gray-500">No activity for this day</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gray-300 shadow-sm" />
            <div>
              <p className="text-sm text-gray-700">Low (0%)</p>
              <p className="text-xs text-gray-500">No tasks completed</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-indigo-300 shadow-sm" />
            <div>
              <p className="text-sm text-gray-700">Getting Started (1-20%)</p>
              <p className="text-xs text-gray-500">Few tasks completed</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-blue-400 shadow-sm" />
            <div>
              <p className="text-sm text-gray-700">Fair (20-40%)</p>
              <p className="text-xs text-gray-500">Some progress made</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-cyan-400 shadow-sm" />
            <div>
              <p className="text-sm text-gray-700">Good (40-60%)</p>
              <p className="text-xs text-gray-500">Moderate productivity</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-teal-500 shadow-sm" />
            <div>
              <p className="text-sm text-gray-700">Great (60-80%)</p>
              <p className="text-xs text-gray-500">Strong performance</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-emerald-600 shadow-sm" />
            <div>
              <p className="text-sm text-gray-700">Excellent (80-100%)</p>
              <p className="text-xs text-gray-500">Outstanding achievement</p>
            </div>
          </div>
        </div>
          </div>
        </div>
        </main>
    </div>
    );
}

export default Calendar;