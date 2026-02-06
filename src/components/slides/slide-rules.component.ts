import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-rules',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Algorithmic Transparency</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Ordering and Overflow Rules</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          We prioritize predictability over completeness. The user must trust that what is shown is accurate, even if it is partial.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-8">
        
        <!-- Ordering Logic -->
        <div class="bg-white p-8 rounded-[14px] border border-[#E5E7EB] shadow-sm relative overflow-hidden">
          <div class="absolute top-0 left-0 w-2 h-full bg-[#3B5BDB]"></div>
          
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#3B5BDB]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h4 class="text-2xl font-bold text-[#1F2937]">Ordering Logic</h4>
          </div>
          
          <div class="space-y-6">
             <div class="flex gap-4 items-start">
               <span class="flex-shrink-0 w-8 h-8 rounded-full bg-[#F3F4F6] text-[#4B5563] font-bold flex items-center justify-center text-sm">1</span>
               <div>
                 <h5 class="text-lg font-semibold text-[#1F2937]">Chronological Sort</h5>
                 <p class="text-[#6B7280]">Strict start-time sorting. No grouping by track or topic. Time is the only dimension that matters during transit.</p>
               </div>
             </div>
             
             <div class="flex gap-4 items-start">
               <span class="flex-shrink-0 w-8 h-8 rounded-full bg-[#F3F4F6] text-[#4B5563] font-bold flex items-center justify-center text-sm">2</span>
               <div>
                 <h5 class="text-lg font-semibold text-[#1F2937]">Future Bias</h5>
                 <p class="text-[#6B7280]">Sessions that have already occurred at print time are aggressively pruned to save space for upcoming value.</p>
               </div>
             </div>
          </div>
        </div>

        <!-- Overflow Strategy -->
        <div class="bg-white p-8 rounded-[14px] border border-[#E5E7EB] shadow-sm relative overflow-hidden">
          <div class="absolute top-0 left-0 w-2 h-full bg-[#F59E0B]"></div>

          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 rounded-full bg-[#FFFBEB] flex items-center justify-center text-[#F59E0B]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            </div>
            <h4 class="text-2xl font-bold text-[#1F2937]">Overflow Strategy</h4>
          </div>

          <div class="space-y-6">
             <div class="flex gap-4 items-start">
               <span class="flex-shrink-0 w-8 h-8 rounded-full bg-[#F3F4F6] text-[#4B5563] font-bold flex items-center justify-center text-sm">A</span>
               <div>
                 <h5 class="text-lg font-semibold text-[#1F2937]">Hard Legibility Floor</h5>
                 <p class="text-[#6B7280]">We stop rendering content <strong>before</strong> the font becomes unreadable. We never "squeeze to fit."</p>
               </div>
             </div>
             
             <div class="flex gap-4 items-start">
               <span class="flex-shrink-0 w-8 h-8 rounded-full bg-[#F3F4F6] text-[#4B5563] font-bold flex items-center justify-center text-sm">B</span>
               <div>
                 <h5 class="text-lg font-semibold text-[#1F2937]">Explicit Redirection</h5>
                 <p class="text-[#6B7280]">If items are cut, a high-contrast footer explicitly directs the user to the mobile app for the full schedule.</p>
               </div>
             </div>
          </div>
        </div>

      </div>

      <!-- Trust Indicator -->
      <div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
         <div class="flex-shrink-0 p-3 bg-white rounded-full shadow-sm">
            <svg class="w-8 h-8 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
         </div>
         <div>
           <h4 class="font-bold text-[#1F2937] text-lg">Trust Through Consistency</h4>
           <p class="text-[#6B7280]">
             By enforcing strict rules, we avoid "magical" layouts that break unpredictably. The badge behaves exactly as expected, every time.
           </p>
         </div>
      </div>
    </div>
  `
})
export class SlideRulesComponent {}