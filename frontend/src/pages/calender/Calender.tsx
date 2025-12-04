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

  const getTaskStatusCounts = (date: string) => {
    const dayTasks = tasks.filter(t => t.date === date);
    const doneCount = dayTasks.filter(t => t.status === 'done').length;
    const inProgressCount = dayTasks.filter(t => t.status === 'in-progress').length;
    const notStartedCount = dayTasks.filter(t => t.status === 'not-started').length;

    return { doneCount, inProgressCount, notStartedCount };
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
    const { doneCount, inProgressCount, notStartedCount } = getTaskStatusCounts(dateStr);
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
        <div className="h-full flex flex-col relative">
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm font-bold drop-shadow-md ${today ? 'text-blue-600' : 'text-gray-700'}`}>
              {day}
            </span>
          </div>

          <div className="absolute top-2 right-2 flex flex-col items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center">
              <span className="text-xs text-white">{doneCount}</span>
            </div>
            <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center">
              <span className="text-xs text-white">{inProgressCount}</span>
            </div>
            <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-xs text-gray-700">{notStartedCount}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-200 flex flex-col">
      {/* Header */}
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content */}
      <main className="p-4 mx-auto flex-1 overflow-y-auto pb-16 w-full">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Productivity Calendar</h2>
          <p className="text-gray-500">Track your productivity patterns and task completion over time</p>
        </div>

        <div className="space-y-6 h-full">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 h-5/6">
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
        <div className="grid grid-cols-7 gap-4 mb-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <div key={day} className="text-center text-gray-600 text-lg font-medium py-3">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-4 flex-1">
          {calendarDays}
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
        <h2 className="text-gray-900 mb-3 text-lg">Status</h2>

        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-emerald-600" />
            <span className="text-sm text-gray-700">Done</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-yellow-400" />
            <span className="text-sm text-gray-700">In Progress</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-300" />
            <span className="text-sm text-gray-700">Not Started</span>
          </div>
        </div>
      </div>
        </div>
        </main>
    </div>
    );
}

export default Calendar;