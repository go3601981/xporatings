import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-triggers',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Contextual Timing Strategy</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Valid Trigger Moments</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          We only ask when value has been delivered.
        </p>
      </div>

      <!-- Triggers Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          
          <!-- Card 1: Check-in -->
          <div class="bg-white p-6 rounded-xl border-l-4 border-green-500 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
             <div class="flex items-center gap-4 mb-4">
               <div class="p-3 bg-green-50 rounded-lg text-green-600">
                 <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <h4 class="font-bold text-xl text-gray-800">Successful Check-in</h4>
             </div>
             <p class="text-gray-600 leading-relaxed">
               The "I'm here!" moment. High dopamine, low friction. The user has successfully entered the event and the technology worked.
             </p>
          </div>

          <!-- Card 2: Post-Session -->
          <div class="bg-white p-6 rounded-xl border-l-4 border-blue-500 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
             <div class="flex items-center gap-4 mb-4">
               <div class="p-3 bg-blue-50 rounded-lg text-blue-600">
                 <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <h4 class="font-bold text-xl text-gray-800">Post-Session Completion</h4>
             </div>
             <p class="text-gray-600 leading-relaxed">
               Right after a session ends. The content is fresh. "Did you learn something new?" The user is feeling productive.
             </p>
          </div>

          <!-- Card 3: End of Day -->
          <div class="bg-white p-6 rounded-xl border-l-4 border-indigo-500 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
             <div class="flex items-center gap-4 mb-4">
               <div class="p-3 bg-indigo-50 rounded-lg text-indigo-600">
                 <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
               </div>
               <h4 class="font-bold text-xl text-gray-800">End-of-Day Reflection</h4>
             </div>
             <p class="text-gray-600 leading-relaxed">
               When the app is opened in the evening or the next morning. "How was Day 1?" A moment for summary sentiment.
             </p>
          </div>

          <!-- Card 4: Event Completion (Suppressed) -->
          <div class="bg-gray-50 p-6 rounded-xl border-l-4 border-gray-400 shadow-inner flex flex-col h-full opacity-80">
             <div class="flex items-center gap-4 mb-4">
               <div class="p-3 bg-gray-200 rounded-lg text-gray-600">
                 <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-8a2 2 0 012-2h14a2 2 0 012 2v8l-10-5-10 5z" /></svg>
               </div>
               <div class="flex items-baseline gap-2">
                 <h4 class="font-bold text-xl text-gray-700">Event Completion</h4>
                 <span class="text-[10px] uppercase font-bold bg-gray-200 px-2 py-0.5 rounded text-gray-500 tracking-wide">Secondary</span>
               </div>
             </div>
             <p class="text-gray-500 leading-relaxed">
               Often too late. Users are traveling, exhausted, or mentally checked out. Heavily suppressed logic (only triggers if no prior rating captured).
             </p>
          </div>
      </div>

      <!-- Emphasis -->
      <div class="bg-[#1F2937] text-white p-8 rounded-[14px] flex flex-col md:flex-row items-center gap-8 shadow-lg border-l-8 border-[#F59E0B]">
          <div class="hidden md:block p-4 bg-white/10 rounded-full">
            <svg class="w-8 h-8 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <div>
            <h4 class="text-xl font-bold text-white mb-2">The Golden Rule of Triggers</h4>
            <p class="text-gray-300 text-lg">
               Triggers are based on <span class="text-white font-bold border-b-2 border-[#F59E0B]">attendee experience</span> (moments of value), not system events (e.g., "app opened 5th time"). We align with their journey, not our metrics.
            </p>
          </div>
      </div>

    </div>
  `
})
export class SlideTriggersComponent {}