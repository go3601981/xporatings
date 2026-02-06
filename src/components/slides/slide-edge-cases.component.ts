import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-edge-cases',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-[#EF4444] font-semibold uppercase tracking-wider text-sm mb-3">Resilience Engineering</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Edge Cases & Failure Handling</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          The system is designed to fail gracefully. In any uncertain state, the default behavior is <span class="font-bold text-gray-900">silence</span>.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        
        <!-- Case 1: OS Modal Not Shown -->
        <div class="bg-white p-6 rounded-xl border-l-4 border-gray-400 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
           <div class="flex items-center gap-3 mb-3">
             <div class="p-2 bg-gray-100 rounded-lg text-gray-600">
               <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>
             </div>
             <h4 class="font-bold text-lg text-gray-800">Store Modal Not Shown</h4>
           </div>
           <p class="text-gray-600 text-sm mb-4 flex-grow">
             Apple/Google limit prompts to ~3 per year. If the quota is met, the OS ignores our request.
           </p>
           <div class="bg-gray-50 p-3 rounded text-xs font-mono text-gray-500 border border-gray-200">
             <strong>Resolution:</strong> Treat as "Success". Log the attempt, apply cooldown. Do not retry immediately.
           </div>
        </div>

        <!-- Case 2: User Dismissal -->
        <div class="bg-white p-6 rounded-xl border-l-4 border-orange-400 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
           <div class="flex items-center gap-3 mb-3">
             <div class="p-2 bg-orange-50 rounded-lg text-orange-600">
               <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
             </div>
             <h4 class="font-bold text-lg text-gray-800">User Dismisses Prompt</h4>
           </div>
           <p class="text-gray-600 text-sm mb-4 flex-grow">
             User taps "Not Now" or taps outside the modal to close it.
           </p>
           <div class="bg-orange-50 p-3 rounded text-xs font-mono text-orange-700 border border-orange-100">
             <strong>Resolution:</strong> Respect the "No". Apply standard cooldown (90 days). Do not nag.
           </div>
        </div>

        <!-- Case 3: App Backgrounded -->
        <div class="bg-white p-6 rounded-xl border-l-4 border-purple-400 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
           <div class="flex items-center gap-3 mb-3">
             <div class="p-2 bg-purple-50 rounded-lg text-purple-600">
               <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
             </div>
             <h4 class="font-bold text-lg text-gray-800">Backgrounding Mid-Flow</h4>
           </div>
           <p class="text-gray-600 text-sm mb-4 flex-grow">
             User switches apps while the custom "Enjoying ExpoPass?" modal is open.
           </p>
           <div class="bg-purple-50 p-3 rounded text-xs font-mono text-purple-700 border border-purple-100">
             <strong>Resolution:</strong> Abort. Close the modal. Do not resume state when app returns to foreground. Context is lost.
           </div>
        </div>

        <!-- Case 4: Network Loss -->
        <div class="bg-white p-6 rounded-xl border-l-4 border-red-400 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
           <div class="flex items-center gap-3 mb-3">
             <div class="p-2 bg-red-50 rounded-lg text-red-600">
               <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
             </div>
             <h4 class="font-bold text-lg text-gray-800">Network Loss</h4>
           </div>
           <p class="text-gray-600 text-sm mb-4 flex-grow">
             User attempts to submit feedback form but has no connectivity (common at large events).
           </p>
           <div class="bg-red-50 p-3 rounded text-xs font-mono text-red-700 border border-red-100">
             <strong>Resolution:</strong> Fail silently to the user. Cache locally if possible, otherwise drop. Do not show error alerts.
           </div>
        </div>

      </div>

      <!-- Core Principle Footer -->
      <div class="bg-[#1F2937] text-white p-6 rounded-xl shadow-lg border-l-8 border-[#3B5BDB] flex items-center justify-between">
         <div class="flex items-center gap-6">
            <div class="hidden md:block p-3 bg-white/10 rounded-full">
               <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div>
               <h4 class="font-bold text-lg mb-1">Principle: Silence is Valid</h4>
               <p class="text-gray-300 text-sm leading-relaxed">
                  We never block the user or show error dialogs for feedback features. If it fails, it disappears. The user's primary task (attending the event) always takes precedence.
               </p>
            </div>
         </div>
      </div>

    </div>
  `
})
export class SlideEdgeCasesComponent {}