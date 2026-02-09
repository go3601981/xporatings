import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-avoid-triggers',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">

      <!-- Header -->
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-[#EF4444] font-semibold uppercase tracking-wider text-sm mb-3">Anti-Patterns</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Triggers We Explicitly Avoid</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          Interruption during high-intent event tasks destroys user trust.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

        <!-- Navigation -->
        <div class="bg-white p-6 rounded-xl border border-red-100 shadow-sm relative overflow-hidden group hover:border-red-300 transition-colors">
           <div class="absolute top-2 right-2 text-red-50 opacity-50 group-hover:opacity-100 transition-opacity">
             <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
          </div>
          <h4 class="text-lg font-bold text-gray-800 mb-2 relative z-10 flex items-center gap-2">
            <span class="text-red-500 text-xl">×</span> In-Motion Navigation
          </h4>
          <p class="text-sm text-gray-600 relative z-10 leading-relaxed">
            High anxiety moment. The user is lost or rushing to a session. Interrupting map usage or schedule browsing is a critical UX failure.
          </p>
        </div>

        <!-- Kiosk Interactions -->
        <div class="bg-white p-6 rounded-xl border border-red-100 shadow-sm relative overflow-hidden group hover:border-red-300 transition-colors">
           <div class="absolute top-2 right-2 text-red-50 opacity-50 group-hover:opacity-100 transition-opacity">
             <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v4H8v-4h8zm2-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
          </div>
          <h4 class="text-lg font-bold text-gray-800 mb-2 relative z-10 flex items-center gap-2">
            <span class="text-red-500 text-xl">×</span> Kiosk / Printing
          </h4>
          <p class="text-sm text-gray-600 relative z-10 leading-relaxed">
            Badge printing is a physical utility step, not a digital delight moment. Never prompt while the user is configuring or printing a badge.
          </p>
        </div>

        <!-- Error/Recovery -->
        <div class="bg-white p-6 rounded-xl border border-red-100 shadow-sm relative overflow-hidden group hover:border-red-300 transition-colors">
           <div class="absolute top-2 right-2 text-red-50 opacity-50 group-hover:opacity-100 transition-opacity">
             <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          </div>
          <h4 class="text-lg font-bold text-gray-800 mb-2 relative z-10 flex items-center gap-2">
            <span class="text-red-500 text-xl">×</span> Error & Network States
          </h4>
          <p class="text-sm text-gray-600 relative z-10 leading-relaxed">
            Never ask for a rating after a slow load or network timeout. If the app detects connectivity issues, <span class="font-bold underline">fail silently</span>.
          </p>
        </div>

      </div>

      <!-- Explanation / Summary -->
      <div class="bg-[#FEE2E2] rounded-xl p-8 border-l-8 border-red-500 flex flex-col md:flex-row items-center gap-8 shadow-sm">
         <div class="p-4 bg-white rounded-full shadow-sm text-red-500 shrink-0 hidden md:block">
            <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>
         </div>
         <div>
           <h4 class="text-xl font-bold text-[#991B1B] mb-2">Fail Silent Protocol</h4>
           <p class="text-[#7F1D1D] leading-relaxed text-lg">
             If the OS API fails, or the network is shaky, or the trigger is borderline—we <strong>do nothing</strong>. The user should never see an error message related to a feedback prompt. The prompt is a luxury, not a necessity.
           </p>
         </div>
      </div>

    </div>
  `
})
export class SlideAvoidTriggersComponent {}