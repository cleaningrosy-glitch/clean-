
import React, { useState } from 'react';

interface CalendarProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
}

export const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateSelect }) => {
  const [viewDate, setViewDate] = useState(new Date());

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const handlePrevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const renderDays = () => {
    const days = [];
    const totalDays = daysInMonth(year, month);
    const startDay = firstDayOfMonth(year, month);

    // Empty slots for previous month
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }

    // Days of the month
    for (let d = 1; d <= totalDays; d++) {
      const current = new Date(year, month, d);
      const isSelected = selectedDate?.toDateString() === current.toDateString();
      const isToday = today.toDateString() === current.toDateString();
      const isPast = current < today;

      days.push(
        <button
          key={d}
          type="button"
          disabled={isPast}
          onClick={() => onDateSelect(current)}
          className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all
            ${isPast ? 'text-slate-200 cursor-not-allowed' : 'text-slate-700 hover:bg-yellow-100'}
            ${isSelected ? 'bg-blue-600 text-white !hover:bg-blue-700 shadow-md transform scale-110' : ''}
            ${isToday && !isSelected ? 'border-2 border-yellow-400' : ''}
          `}
        >
          {d}
        </button>
      );
    }
    return days;
  };

  return (
    <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-slate-800">{monthNames[month]} {year}</h4>
        <div className="flex gap-1">
          <button type="button" onClick={handlePrevMonth} className="p-2 hover:bg-slate-100 rounded-full text-slate-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button type="button" onClick={handleNextMonth} className="p-2 hover:bg-slate-100 rounded-full text-slate-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="h-10 w-10 flex items-center justify-center text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
      {!selectedDate && (
        <p className="text-[10px] text-center text-blue-500 font-medium animate-pulse">✨ Pick a sparkle day!</p>
      )}
    </div>
  );
};
