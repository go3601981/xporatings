import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-pre-prompt-modal',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">UI Specification</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Pre-Prompt Modal: Best Practices</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          The design must be lightweight and honest. We are measuring sentiment, not begging for stars.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <!-- UI Mockup -->
        <div class="relative bg-gray-100 rounded-3xl p-8 border border-gray-200 shadow-inner flex flex-col items-center justify-center min-h-[400px]">
          
          <!-- Phone Frame (Abstract) -->
          <div class="w-[300px] bg-white rounded-[2rem] shadow-2xl overflow-hidden border-8 border-gray-800 relative">
             <!-- Status Bar -->
             <div class="h-6 bg-gray-800 w-full"></div>
             
             <!-- App Content (Blurred) -->
             <div class="bg-gray-50 h-[500px] w-full p-4 space-y-4 opacity-50 blur-[2px]">
               <div class="h-32 bg-gray-200 rounded-xl"></div>
               <div class="h-16 bg-gray-200 rounded-xl"></div>
               <div class="h-16 bg-gray-200 rounded-xl"></div>
               <div class="h-40 bg-gray-200 rounded-xl"></div>
             </div>

             <!-- The Modal -->
             <div class="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-10">
                <div class="bg-white w-[85%] rounded-2xl p-6 shadow-2xl transform transition-all scale-100">
                   <h4 class="text-center font-bold text-gray-900 text-lg mb-2">Enjoying ExpoPass?</h4>
                   <p class="text-center text-gray-500 text-sm mb-6 leading-relaxed">
                     We'd love to know how your experience is going so far.
                   </p>
                   
                   <div class="flex gap-3">
                     <button class="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-lg text-sm transition-colors">
                       No
                     </button>
                     <button class="flex-1 py-3 bg-[#3B5BDB] hover:bg-blue-700 text-white font-bold rounded-lg text-sm transition-colors shadow-md">
                       Yes
                     </button>
                   </div>
                   
                   <button class="mt-4 w-full text-center text-xs text-gray-400 font-medium hover:text-gray-600">
                     Not now
                   </button>
                </div>
             </div>
          </div>
          
          <!-- Label -->
          <div class="absolute bottom-4 text-center">
            <span class="bg-gray-800 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">Mockup</span>
          </div>

        </div>

        <!-- Guidelines List -->
        <div class="space-y-6">
          
          <!-- Copy Section -->
          <div class="bg-blue-50 border border-blue-100 rounded-xl p-6">
             <span class="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2 block">The Copy</span>
             <p class="text-xl font-serif italic text-blue-900 leading-relaxed">
               “Are you enjoying your ExpoPass app experience?”
             </p>
          </div>

          <!-- Rules -->
          <ul class="space-y-4">
             <li class="flex items-start gap-4 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100">
               <div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                 <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
               </div>
               <div>
                 <h5 class="font-bold text-gray-900 text-sm">Neutral Language</h5>
                 <p class="text-gray-500 text-xs mt-0.5">Avoid leading questions like "Do you love us?" or "Give us 5 stars!"</p>
               </div>
             </li>

             <li class="flex items-start gap-4 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100">
               <div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                 <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
               </div>
               <div>
                 <h5 class="font-bold text-gray-900 text-sm">Binary Choice</h5>
                 <p class="text-gray-500 text-xs mt-0.5">Yes / No. This simple bifurcation routes the user to the correct next step.</p>
               </div>
             </li>

             <li class="flex items-start gap-4 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100">
               <div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                 <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
               </div>
               <div>
                 <h5 class="font-bold text-gray-900 text-sm">Zero Iconography</h5>
                 <p class="text-gray-500 text-xs mt-0.5">No stars. No store badges. Visualizing ratings primes the user to think about "work" (writing a review).</p>
               </div>
             </li>
             
             <li class="flex items-start gap-4 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100">
               <div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                 <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
               </div>
               <div>
                 <h5 class="font-bold text-gray-900 text-sm">Easy Dismissal</h5>
                 <p class="text-gray-500 text-xs mt-0.5">The "Not now" or "Close" option must be clearly visible, not hidden in small print.</p>
               </div>
             </li>
          </ul>

          <!-- Emphasis Box -->
          <div class="bg-[#1F2937] text-white p-6 rounded-xl shadow-lg border-l-8 border-[#3B5BDB]">
            <p class="font-medium text-sm md:text-base leading-relaxed">
              <span class="text-[#3B5BDB] font-bold">Key Distinction:</span> This modal measures <em>internal sentiment</em>. It does not ask for a rating. It is a router, not a destination.
            </p>
          </div>

        </div>

      </div>
    </div>
  `
})
export class SlidePrePromptModalComponent {}