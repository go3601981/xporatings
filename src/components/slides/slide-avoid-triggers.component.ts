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
          Interruption during high-intent tasks destroys user trust and corrupts data quality.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

        <!-- App Launch -->
        <div class="bg-white p-6 rounded-xl border border-red-100 shadow-sm relative overflow-hidden group hover:border-red-300 transition-colors">
          <div class="absolute top-2 right-2 text-red-50 opacity-50 group-hover:opacity-100 transition-opacity">
             <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          </div>
          <h4 class="text-lg font-bold text-gray-800 mb-2 relative z-10 flex items-center gap-2">
            <span class="text-red-500 text-xl">×</span> App Launch
          </h4>
          <p class="text-sm text-gray-600 relative z-10 leading-relaxed">
            <strong>The Cardinal Sin.</strong> Users open the app with specific intent (finding a room, checking time). Blocking this intent creates immediate friction and anger.
          </p>
        </div>

        <!-- Random Time-Based -->
        <div class="bg-white p-6 rounded-xl border border-red-100 shadow-sm relative overflow-hidden group hover:border-red-300 transition-colors">
           <div class="absolute top-2 right-2 text-red-50 opacity-50 group-hover:opacity-100 transition-opacity">
             <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
          </div>
          <h4 class="text-lg font-bold text-gray-800 mb-2 relative z-10 flex items-center gap-2">
            <span class="text-red-500 text-xl">×</span> Random Timers
          </h4>
          <p class="text-sm text-gray-600 relative z-10 leading-relaxed">
            "It's been 3 days." This lacks context. Without a specific event (like a session ending), the prompt feels arbitrary, robotic, and spammy.
          </p>
        </div>

        <!-- Error/Recovery -->
        <div class="bg-white p-6 rounded-xl border border-red-100 shadow-sm relative overflow-hidden group hover:border-red-300 transition-colors">
           <div class="absolute top-2 right-2 text-red-50 opacity-50 group-hover:opacity-100 transition-opacity">
             <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          </div>
          <h4 class="text-lg font-bold text-gray-800 mb-2 relative z-10 flex items-center gap-2">
            <span class="text-red-500 text-xl">×</span> Error & Recovery
          </h4>
          <p class="text-sm text-gray-600 relative z-10 leading-relaxed">
            Never ask for a rating after a crash, a slow load, or an empty state. The user sentiment is already negative; don't amplify it.
          </p>
        </div>

        <!-- Navigation -->
        <div class="bg-white p-6 rounded-xl border border-red-100 shadow-sm relative overflow-hidden group hover:border-red-300 transition-colors">
           <div class="absolute top-2 right-2 text-red-50 opacity-50 group-hover:opacity-100 transition-opacity">
             <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
          </div>
          <h4 class="text-lg font-bold text-gray-800 mb-2 relative z-10 flex items-center gap-2">
            <span class="text-red-500 text-xl">×</span> Session Navigation
          </h4>
          <p class="text-sm text-gray-600 relative z-10 leading-relaxed">
            High anxiety moment. The user is lost or rushing. Interrupting map usage or schedule browsing is a critical UX failure.
          </p>
        </div>

        <!-- Kiosk Interactions -->
        <div class="bg-white p-6 rounded-xl border border-red-100 shadow-sm relative overflow-hidden group hover:border-red-300 transition-colors">
           <div class="absolute top-2 right-2 text-red-50 opacity-50 group-hover:opacity-100 transition-opacity">
             <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v4H8v-4h8zm2-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
          </div>
          <h4 class="text-lg font-bold text-gray-800 mb-2 relative z-10 flex items-center gap-2">
            <span class="text-red-500 text-xl">×</span> Kiosk Interactions
          </h4>
          <p class="text-sm text-gray-600 relative z-10 leading-relaxed">
            While important, badge printing is a hardware utility step. It is high-stress and physical. Not an "in-app" moment of delight.
          </p>
        </div>

      </div>

      <!-- Explanation / Summary -->
      <div class="bg-[#FEE2E2] rounded-xl p-8 border-l-8 border-red-500 flex flex-col md:flex-row items-center gap-8 shadow-sm">
         <div class="p-4 bg-white rounded-full shadow-sm text-red-500 shrink-0 hidden md:block">
            <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>
         </div>
         <div>
           <h4 class="text-xl font-bold text-[#991B1B] mb-2">Why We Avoid These</h4>
           <p class="text-[#7F1D1D] leading-relaxed text-lg">
             <strong>Protecting Signal Quality:</strong> An annoyed user gives a 1-star rating not because the app is bad, but because the <em>question</em> was annoying. We must isolate the rating from the interruption.
           </p>
         </div>
      </div>

    </div>
  `
})
export class SlideAvoidTriggersComponent {}