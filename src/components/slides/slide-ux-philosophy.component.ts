import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-ux-philosophy',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-12 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Guiding Principles</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">The Correct User Experience Philosophy</h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mb-12">
        
        <!-- The Goal -->
        <div class="relative bg-white rounded-2xl p-8 border-t-4 border-[#10B981] shadow-sm flex flex-col h-full group hover:shadow-md transition-shadow">
           <div class="absolute -top-5 left-8 bg-[#DCFCE7] text-[#166534] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-[#bbf7d0]">
             The Goal State
           </div>
           
           <div class="flex-grow flex flex-col justify-center">
             <div class="text-4xl text-[#10B981] mb-6 font-serif italic">"</div>
             <p class="text-2xl font-medium text-[#1F2937] leading-tight mb-4">
               ExpoPass is asking me because I just experienced something <span class="text-[#10B981] underline decoration-2 underline-offset-4">meaningful</span>.
             </p>
             <div class="text-4xl text-[#10B981] text-right font-serif italic -mt-4">"</div>
           </div>

           <div class="mt-6 pt-6 border-t border-gray-100">
             <p class="text-sm text-gray-500 font-medium flex items-center gap-2">
               <svg class="w-4 h-4 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
               Contextual • Relevant • Timely
             </p>
           </div>
        </div>

        <!-- The Anti-Pattern -->
        <div class="relative bg-gray-50 rounded-2xl p-8 border-t-4 border-[#EF4444] shadow-inner flex flex-col h-full opacity-90 group hover:opacity-100 transition-opacity">
           <div class="absolute -top-5 left-8 bg-[#FEE2E2] text-[#991B1B] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-[#fecaca]">
             The Anti-Pattern
           </div>

           <div class="flex-grow flex flex-col justify-center">
             <div class="text-4xl text-[#EF4444] mb-6 font-serif italic">"</div>
             <p class="text-2xl font-medium text-[#4B5563] leading-tight mb-4">
               ExpoPass is asking me because it wants <span class="text-[#EF4444] line-through decoration-2">stars</span>.
             </p>
             <div class="text-4xl text-[#EF4444] text-right font-serif italic -mt-4">"</div>
           </div>

           <div class="mt-6 pt-6 border-t border-gray-200">
             <p class="text-sm text-gray-500 font-medium flex items-center gap-2">
               <svg class="w-4 h-4 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
               Interruptive • Self-Serving • Annoying
             </p>
           </div>
        </div>

      </div>

      <!-- Logic Block -->
      <div class="bg-[#1F2937] text-white rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-lg border-l-8 border-[#3B5BDB]">
        <div class="flex-shrink-0 p-4 bg-white/10 rounded-full">
           <svg class="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <div>
          <h4 class="text-xl font-bold mb-2">Why Trust & Timing > Frequency</h4>
          <p class="text-gray-300 text-base leading-relaxed">
            User trust is a finite resource. Asking at the wrong time (e.g., during a crisis or critical task) costs more brand equity than the value of a single rating. We earn the right to ask by waiting for a "moment of delight."
          </p>
        </div>
      </div>

    </div>
  `
})
export class SlideUxPhilosophyComponent {}