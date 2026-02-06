import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-user-flow',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-8 text-center">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-2">Logic Architecture</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">The Sentiment Routing Engine</h3>
        <p class="text-[#6B7280] mt-3 max-w-2xl mx-auto text-lg">
          A binary decision gate that filters users based on their immediate experience.
        </p>
      </div>

      <!-- Vertical Tree Diagram -->
      <div class="relative flex flex-col items-center w-full max-w-3xl mx-auto">
        
        <!-- Level 1: Trigger -->
        <div class="z-10 bg-white border border-gray-200 shadow-sm rounded-xl p-4 w-64 text-center relative flex flex-col items-center gap-2">
           <div class="absolute -left-12 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-400 uppercase tracking-widest -rotate-90 origin-center w-24 text-right">Step 1</div>
           <div class="p-2 bg-blue-50 text-blue-600 rounded-full">
             <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
           </div>
           <div>
             <h4 class="font-bold text-gray-900 text-sm">Trigger Event</h4>
             <p class="text-[10px] text-gray-500">Value Delivered</p>
           </div>
        </div>

        <!-- Connector 1 -->
        <div class="h-8 w-0.5 bg-gray-300"></div>

        <!-- Level 2: The Gate -->
        <div class="z-10 bg-[#1F2937] text-white shadow-xl rounded-xl p-5 w-72 text-center relative border-4 border-white">
           <div class="absolute -left-16 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-400 uppercase tracking-widest -rotate-90 origin-center w-24 text-right">Step 2</div>
           <h4 class="font-bold text-lg mb-1">"Enjoying ExpoPass?"</h4>
           <p class="text-[11px] text-gray-400 uppercase tracking-wider font-bold">The Pre-Gate</p>
        </div>

        <!-- Connector Split -->
        <div class="flex flex-col items-center w-full">
          <div class="h-6 w-0.5 bg-gray-300"></div>
          <div class="w-[280px] md:w-[340px] h-4 border-t-2 border-x-2 border-gray-300 rounded-t-xl"></div>
        </div>

        <!-- Level 3: The Split Outcomes -->
        <div class="w-full flex justify-between px-4 md:px-12 gap-4 -mt-1">
           
           <!-- YES Path -->
           <div class="flex flex-col items-center w-40 md:w-48">
             <div class="bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full mb-2 z-10 shadow-sm">YES</div>
             <div class="bg-green-50 border border-green-200 rounded-xl p-4 w-full text-center shadow-sm h-full">
                <h4 class="font-bold text-green-900 text-sm mb-1">Request Review</h4>
                <p class="text-[10px] text-green-700 leading-snug">
                  Native OS Prompt.<br>Public Rating.
                </p>
             </div>
           </div>

           <!-- NO Path -->
           <div class="flex flex-col items-center w-40 md:w-48">
             <div class="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full mb-2 z-10 shadow-sm">NO</div>
             <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 w-full text-center shadow-sm h-full">
                <h4 class="font-bold text-orange-900 text-sm mb-1">Feedback Form</h4>
                <p class="text-[10px] text-orange-700 leading-snug">
                  Internal Modal.<br>Private Data.
                </p>
             </div>
           </div>

        </div>

        <!-- Connector Converge -->
        <div class="flex flex-col items-center w-full -mt-2">
           <div class="w-[280px] md:w-[340px] h-4 border-b-2 border-x-2 border-gray-300 rounded-b-xl"></div>
           <div class="h-6 w-0.5 bg-gray-300"></div>
        </div>

        <!-- Level 4: Suppression -->
        <div class="z-10 bg-gray-100 border border-gray-300 rounded-xl p-3 w-64 text-center shadow-sm flex items-center gap-3">
            <div class="p-2 bg-white rounded-full text-gray-500 shadow-sm border border-gray-200">
               <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <div class="text-left">
               <h4 class="font-bold text-gray-800 text-xs">90-Day Cooldown</h4>
               <p class="text-[10px] text-gray-500">Prevent fatigue.</p>
            </div>
        </div>

      </div>

      <!-- Logic Detail Box -->
      <div class="mt-10 bg-white border-l-4 border-[#3B5BDB] rounded-r-xl p-6 shadow-sm max-w-4xl mx-auto w-full">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                  <h5 class="font-semibold text-gray-900 text-xs uppercase tracking-wide mb-1">Segmentation</h5>
                  <p class="text-gray-600 text-xs leading-relaxed">Separates promoters from detractors <em>before</em> they reach the public storefront.</p>
              </div>
              <div>
                  <h5 class="font-semibold text-gray-900 text-xs uppercase tracking-wide mb-1">Safety</h5>
                  <p class="text-gray-600 text-xs leading-relaxed">Ensures detractors feel heard via the Feedback Form without damaging public reputation.</p>
              </div>
              <div>
                  <h5 class="font-semibold text-gray-900 text-xs uppercase tracking-wide mb-1">Compliance</h5>
                  <p class="text-gray-600 text-xs leading-relaxed">Respects platform rules by not incentivizing ratings, merely gating the <em>request</em>.</p>
              </div>
          </div>
      </div>

    </div>
  `
})
export class SlideUserFlowComponent {}