import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-platform-constraints',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Technical Reality</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Platform Constraints We Design Around</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          We operate in a sandbox. Understanding where our control ends is critical to setting stakeholder expectations.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center mb-10">
        
        <!-- Our Domain -->
        <div class="bg-white p-8 rounded-[14px] border border-blue-100 shadow-sm relative group h-full flex flex-col">
          <div class="absolute top-0 left-0 w-full h-1.5 bg-[#3B5BDB]"></div>
          
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 bg-blue-50 rounded-lg text-[#3B5BDB]">
               <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            </div>
            <h4 class="text-xl font-bold text-[#1F2937]">The "ExpoPass" Zone</h4>
            <span class="ml-auto text-[10px] uppercase font-bold text-white bg-[#3B5BDB] px-2 py-1 rounded">We Control</span>
          </div>

          <ul class="space-y-4 flex-grow">
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              <span class="text-gray-600 text-sm"><strong>The "Pre-Frame":</strong> Contextual questions like "Are you enjoying the event?"</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              <span class="text-gray-600 text-sm"><strong>The Timing:</strong> Exact moment logic (e.g., "30 seconds after session end").</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              <span class="text-gray-600 text-sm"><strong>The Filter:</strong> We decide <em>if</em> the request is even sent to the OS based on sentiment.</span>
            </li>
          </ul>
        </div>

        <!-- OS Domain -->
        <div class="bg-gray-50 p-8 rounded-[14px] border border-gray-200 shadow-inner relative h-full flex flex-col opacity-90">
          <div class="absolute top-0 left-0 w-full h-1.5 bg-gray-400"></div>

          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 bg-gray-200 rounded-lg text-gray-600">
               <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.69-.71 1.62.25 3 .93 3.77 2.2-3.32 1.83-2.6 6.88.94 8.27-.67 1.4-1.52 2.65-2.48 2.47zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
            </div>
            <h4 class="text-xl font-bold text-[#1F2937]">The OS "Black Box"</h4>
            <span class="ml-auto text-[10px] uppercase font-bold text-gray-500 bg-gray-200 px-2 py-1 rounded">No Control</span>
          </div>

          <ul class="space-y-4 flex-grow">
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              <span class="text-gray-600 text-sm"><strong>The UI:</strong> We cannot change the font, color, or text of the actual Apple/Google prompt.</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              <span class="text-gray-600 text-sm"><strong>The Guarantee:</strong> The OS may simply <em>ignore</em> our request if the user has been asked too recently (Quota Limits).</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              <span class="text-gray-600 text-sm"><strong>The Logic:</strong> Apple limits prompts to ~3 per year per user. We cannot override this.</span>
            </li>
          </ul>
        </div>
        
      </div>

      <!-- Emphasis Box -->
      <div class="bg-[#1F2937] text-white p-8 rounded-[14px] shadow-lg border-l-8 border-[#F59E0B]">
        <div class="flex items-start gap-6">
           <div class="hidden md:block p-3 bg-white/10 rounded-full">
              <svg class="w-8 h-8 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
           </div>
           <div>
             <h4 class="text-xl font-bold mb-2">The Design Surface Is "Everything Before"</h4>
             <p class="text-gray-300 leading-relaxed">
               Because the store modal is immutable and unreliable, our entire UX strategy must focus on the moments <em>leading up to</em> the hand-off. That is where we win or lose the user.
             </p>
           </div>
        </div>
      </div>

    </div>
  `
})
export class SlidePlatformConstraintsComponent {}