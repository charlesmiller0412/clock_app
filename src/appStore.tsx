import create from "zustand";

const useClockStore = create((set) => ({
    show: false,
    updateShow: (key: any) => set({ show: key }),
    morning: true,
    updateMorning: (key: any) => set({ morning: key }),
    time: null,
    updateTime: (key: any) => set({ time: key }),
    location: null,
    updateLocation: (key: any) => set({ location: key }),
    timeZone: null,
    updateTimeZone: (key: any) => set({ timeZone: key }),
    timeZoneAbbv: null,
    updateTimeZoneAbbv: (key: any) => set({ timeZoneAbbv: key }),
    dayOfYear: null,
    updateDayOfYear: (key: any) => set({ dayOfYear: key }),
    dayOfWeek: null,
    updateDayOfWeek: (key: any) => set({ dayOfWeek: key }),
    weekNumber: null,
    updateWeekNumber: (key: any) => set({ weekNumber: key }),
    quote: null,
    updateQuote: (key: any) => set({ quote: key }),
    author: null,
    updateAuthor: (key: any) => set({ author: key }),
}));

export default useClockStore;
