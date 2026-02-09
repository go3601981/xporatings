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
          We only ask when specific value has been delivered.
        </p>
      </div>

      <!-- Triggers Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          
          <!-- Card 1: Chat Interaction (Primary) -->
          <div class="bg-white p-5 rounded-xl border-t-4 border-purple-500 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
             <div class="flex items-center justify-between mb-3">
               <div class="p-2 bg-purple-50 rounded-lg text-purple-600">
                 <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
               </div>
               <span class="text-[10px] font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2 py-1 rounded-full border border-purple-100">Strongest</span>
             </div>
             <h4 class="font-bold text-lg text-gray-800 mb-2">Meaningful Chat</h4>
             <p class="text-sm text-gray-600 leading-relaxed">
               Trigger when user returns to Home after sending 3-4 messages in a session. Indicates active networking utility.
             </p>
          </div>

          <!-- Card 2: Self Scanning (Primary) -->
          <div class="bg-white p-5 rounded-xl border-t-4 border-blue-500 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
             <div class="flex items-center justify-between mb-3">
               <div class="p-2 bg-blue-50 rounded-lg text-blue-600">
                 <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4h-4v-4H8m13-4v1m-7-5h2m5 11v1m-1-1h1m-6-11v1m-1 11h1m-5 4h1" /></svg>
               </div>
               <span class="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded-full border border-blue-100">Strong</span>
             </div>
             <h4 class="font-bold text-lg text-gray-800 mb-2">Self-Scanning Success</h4>
             <p class="text-sm text-gray-600 leading-relaxed">
               Trigger after 2-3 successful self-scans (lead capture). The user is successfully using the tool for its core purpose.
             </p>
          </div>

          <!-- Card 3: Exhibitor Lead Retrieval (Scope Dependent) -->
          <div class="bg-white p-5 rounded-xl border-t-4 border-teal-500 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
             <div class="flex items-center justify-between mb-3">
               <div class="p-2 bg-teal-50 rounded-lg text-teal-600">
                 <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
               </div>
               <span class="text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-1 rounded-full border border-teal-100">Contextual</span>
             </div>
             <h4 class="font-bold text-lg text-gray-800 mb-2">Lead Retrieval</h4>
             <p class="text-sm text-gray-600 leading-relaxed">
               (Exhibitor Only) After completing a batch of scans (e.g., 4 scans). confirms the app is working for business goals.
             </p>
          </div>
      </div>

      <!-- Removed/Downgraded Section -->
      <div class="mb-6">
        <h4 class="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Removed / Downgraded Triggers</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-3 opacity-60">
                <div class="flex items-center gap-2 mb-1">
                    <span class="text-red-500 text-lg font-bold">×</span>
                    <span class="font-semibold text-gray-700 text-sm">Post Check-in</span>
                </div>
                <p class="text-xs text-gray-500">Too early. User hasn't experienced event value yet.</p>
            </div>

            <div class="bg-gray-50 border border-gray-200 rounded-lg p-3 opacity-60">
                <div class="flex items-center gap-2 mb-1">
                    <span class="text-red-500 text-lg font-bold">×</span>
                    <span class="font-semibold text-gray-700 text-sm">Agenda Review</span>
                </div>
                <p class="text-xs text-gray-500">Passive action. Doesn't indicate success, just browsing.</p>
            </div>

            <div class="bg-gray-50 border border-gray-200 rounded-lg p-3 opacity-60">
                <div class="flex items-center gap-2 mb-1">
                    <span class="text-yellow-500 text-lg font-bold">?</span>
                    <span class="font-semibold text-gray-700 text-sm">Session Completion</span>
                </div>
                <p class="text-xs text-gray-500">Only valid if user explicitly submits session feedback (High Signal).</p>
            </div>

        </div>
      </div>

      <!-- Emphasis -->
      <div class="bg-[#1F2937] text-white p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 shadow-lg border-l-8 border-[#F59E0B]">
          <div class="hidden md:block p-3 bg-white/10 rounded-full shrink-0">
            <svg class="w-6 h-6 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <div>
            <h4 class="text-lg font-bold text-white mb-1">The "One Shot" Strategy</h4>
            <p class="text-gray-300 text-sm md:text-base leading-relaxed">
               In a 2-day event, we likely only get <strong>one</strong> high-quality opportunity to ask. We must not waste it on weak triggers like "Agenda Browsing."
            </p>
          </div>
      </div>

    </div>
  `
})
export class SlideTriggersComponent {}