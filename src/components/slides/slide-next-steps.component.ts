import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-next-steps',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-12 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Roadmap Execution</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Decision & Next Steps</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          Moving from strategy to execution with clarity and consensus.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <!-- Checklist / Steps -->
        <div class="space-y-6">
          
          <div class="flex gap-4 items-start group">
            <div class="w-10 h-10 rounded-full bg-[#EFF6FF] text-[#3B5BDB] flex items-center justify-center font-bold text-lg shrink-0 border border-blue-100 group-hover:bg-[#3B5BDB] group-hover:text-white transition-colors">1</div>
            <div class="pt-1">
              <h4 class="text-xl font-bold text-[#1F2937] mb-1">Align on Product Direction</h4>
              <p class="text-gray-600">Confirm that the "Sentiment-First" approach aligns with overall company goals for Q1.</p>
            </div>
          </div>

          <div class="flex gap-4 items-start group">
            <div class="w-10 h-10 rounded-full bg-[#EFF6FF] text-[#3B5BDB] flex items-center justify-center font-bold text-lg shrink-0 border border-blue-100 group-hover:bg-[#3B5BDB] group-hover:text-white transition-colors">2</div>
            <div class="pt-1">
              <h4 class="text-xl font-bold text-[#1F2937] mb-1">Incorporate CEO Feedback</h4>
              <p class="text-gray-600">Adjust suppression thresholds or trigger timing based on executive review.</p>
            </div>
          </div>

          <div class="flex gap-4 items-start group">
             <div class="w-10 h-10 rounded-full bg-[#EFF6FF] text-[#3B5BDB] flex items-center justify-center font-bold text-lg shrink-0 border border-blue-100 group-hover:bg-[#3B5BDB] group-hover:text-white transition-colors">3</div>
            <div class="pt-1">
              <h4 class="text-xl font-bold text-[#1F2937] mb-1">Lock V1 Behavior</h4>
              <p class="text-gray-600">Finalize the logic specification for engineering hand-off. No scope creep.</p>
            </div>
          </div>

           <div class="flex gap-4 items-start group">
             <div class="w-10 h-10 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center font-bold text-lg shrink-0 border border-green-200 group-hover:bg-[#16A34A] group-hover:text-white transition-colors">4</div>
            <div class="pt-1">
              <h4 class="text-xl font-bold text-[#1F2937] mb-1">Proceed to Implementation</h4>
              <p class="text-gray-600">Schedule development sprint. Target release: v4.3.0 update.</p>
            </div>
          </div>

        </div>

        <!-- Emphasis Block -->
        <div class="bg-white p-8 rounded-2xl border-l-8 border-[#3B5BDB] shadow-lg relative overflow-hidden h-full flex flex-col justify-center">
           <div class="absolute top-0 right-0 p-4 opacity-5">
              <svg class="w-48 h-48 text-[#3B5BDB]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
           </div>
           
           <div class="relative z-10">
             <div class="flex items-center gap-3 mb-6">
                <div class="p-3 bg-blue-50 rounded-full text-[#3B5BDB]">
                   <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h4 class="text-lg font-bold text-[#1F2937]">Process Note</h4>
             </div>
             
             <p class="text-xl md:text-2xl font-light text-gray-800 leading-relaxed mb-4">
               The design is intentionally <span class="font-bold text-[#3B5BDB]">complete</span> before team review.
             </p>
             <p class="text-gray-500 text-sm leading-relaxed">
               This minimizes "design by committee." We present a fully realized strategy for approval or specific adjustment, rather than a blank canvas for brainstorming.
             </p>
           </div>
        </div>

      </div>
    </div>
  `
})
export class SlideNextStepsComponent {}