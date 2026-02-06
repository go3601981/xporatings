import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-triggers',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-6 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-2">Contextual Timing Strategy</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Valid Trigger Moments</h3>
        <p class="text-[#6B7280] mt-2 max-w-3xl text-lg">
          We only ask when value has been delivered.
        </p>
      </div>

      <!-- Triggers Grid (3 Columns for density) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          
          <!-- Card 1: Check-in (Primary) -->
          <div class="bg-white p-5 rounded-xl border-t-4 border-green-500 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
             <div class="flex items-center justify-between mb-3">
               <div class="p-2 bg-green-50 rounded-lg text-green-600">
                 <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <span class="text-[10px] font-bold uppercase tracking-wider text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">Primary</span>
             </div>
             <h4 class="font-bold text-lg text-gray-800 mb-2">Post-Check-in Cooldown</h4>
             <p class="text-sm text-gray-600 leading-relaxed">
               Trigger prompt 5–10 minutes <em>after</em> a successful badge scan. Avoids interrupting physical entry flow while reinforcing frictionless access.
             </p>
          </div>

          <!-- Card 2: Post-Session (Primary) -->
          <div class="bg-white p-5 rounded-xl border-t-4 border-blue-500 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
             <div class="flex items-center justify-between mb-3">
               <div class="p-2 bg-blue-50 rounded-lg text-blue-600">
                 <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <span class="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded-full border border-blue-100">Primary</span>
             </div>
             <h4 class="font-bold text-lg text-gray-800 mb-2">Post-Session Completion</h4>
             <p class="text-sm text-gray-600 leading-relaxed">
               Immediately after a session ends. Reflection window is open and the attendee is evaluating the experience.
             </p>
          </div>

          <!-- Card 3: Chat Interaction (Primary) -->
          <div class="bg-white p-5 rounded-xl border-t-4 border-purple-500 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
             <div class="flex items-center justify-between mb-3">
               <div class="p-2 bg-purple-50 rounded-lg text-purple-600">
                 <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
               </div>
               <span class="text-[10px] font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2 py-1 rounded-full border border-purple-100">Primary</span>
             </div>
             <h4 class="font-bold text-lg text-gray-800 mb-2">Meaningful Chat</h4>
             <p class="text-sm text-gray-600 leading-relaxed">
               Triggered only after a real message exchange. Captures feedback when networking value has been realized.
             </p>
          </div>

          <!-- Card 4: Agenda Review (Secondary) -->
          <div class="bg-white p-5 rounded-xl border-t-4 border-teal-500 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
             <div class="flex items-center justify-between mb-3">
               <div class="p-2 bg-teal-50 rounded-lg text-teal-600">
                 <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
               </div>
               <span class="text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-1 rounded-full border border-teal-100">Secondary</span>
             </div>
             <h4 class="font-bold text-lg text-gray-800 mb-2">Agenda Review</h4>
             <p class="text-sm text-gray-600 leading-relaxed">
               After the attendee reviews their personalized agenda. Reinforces organization and clarity value.
             </p>
          </div>

          <!-- Card 5: End of Day (Secondary) -->
          <div class="bg-white p-5 rounded-xl border-t-4 border-indigo-500 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
             <div class="flex items-center justify-between mb-3">
               <div class="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                 <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
               </div>
               <span class="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full border border-indigo-100">Secondary</span>
             </div>
             <h4 class="font-bold text-lg text-gray-800 mb-2">End-of-Day Reflection</h4>
             <p class="text-sm text-gray-600 leading-relaxed">
               When the app is opened later in the day or next morning. Used for summary sentiment if no prior prompt occurred.
             </p>
          </div>

          <!-- Card 6: Event Completion (Fallback) -->
          <div class="bg-gray-50 p-5 rounded-xl border-t-4 border-gray-400 shadow-inner flex flex-col h-full opacity-90 hover:opacity-100 transition-opacity">
             <div class="flex items-center justify-between mb-3">
               <div class="p-2 bg-gray-200 rounded-lg text-gray-600">
                 <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-8a2 2 0 012-2h14a2 2 0 012 2v8l-10-5-10 5z" /></svg>
               </div>
               <span class="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-200 px-2 py-1 rounded-full border border-gray-300">Fallback</span>
             </div>
             <h4 class="font-bold text-lg text-gray-700 mb-2">Event Completion</h4>
             <p class="text-sm text-gray-500 leading-relaxed">
               Used only if no prior feedback was captured. Often late and affected by fatigue or travel context. Heavily suppressed.
             </p>
          </div>
      </div>

      <!-- Emphasis -->
      <div class="bg-[#1F2937] text-white p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 shadow-lg border-l-8 border-[#F59E0B]">
          <div class="hidden md:block p-3 bg-white/10 rounded-full shrink-0">
            <svg class="w-6 h-6 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <div>
            <h4 class="text-lg font-bold text-white mb-1">The Golden Rule of Triggers</h4>
            <p class="text-gray-300 text-sm md:text-base leading-relaxed">
               Triggers are based on <span class="text-white font-bold border-b border-[#F59E0B]">attendee experience</span> and delivered value — not system events (e.g., "app opened 5th time"). We align with the attendee’s journey, not internal metrics.
            </p>
          </div>
      </div>

    </div>
  `
})
export class SlideTriggersComponent {}