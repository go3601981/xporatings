import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-positive-sentiment',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">

      <!-- Header -->
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-[#16A34A] font-bold uppercase tracking-widest text-sm mb-2">The Happy Path</h2>
        <h3 class="text-4xl md:text-5xl font-bold text-[#1F2937]">Positive Sentiment Flow</h3>
        <p class="text-[#6B7280] mt-4 text-lg max-w-2xl">
          Turning a moment of delight into a permanent reputation asset.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

        <!-- Left Column: The Interaction Visual -->
        <div class="relative flex justify-center order-2 lg:order-1">
            <!-- Background Blob -->
            <div class="absolute inset-0 bg-green-100 rounded-full filter blur-3xl opacity-40 transform scale-110"></div>
            
            <!-- Phone Mockup -->
            <div class="relative bg-white border-8 border-gray-800 rounded-[2.5rem] shadow-2xl w-[280px] h-[520px] overflow-hidden z-10 flex flex-col transform rotate-1">
                <!-- Status Bar -->
                <div class="h-6 bg-gray-100 border-b border-gray-200"></div>
                
                <!-- App Screen -->
                <div class="flex-1 bg-gray-50 p-4 flex flex-col items-center justify-center relative">
                   <!-- Blurred Background Content -->
                   <div class="absolute inset-0 p-4 space-y-3 opacity-20">
                      <div class="h-24 bg-gray-300 rounded-lg"></div>
                      <div class="h-24 bg-gray-300 rounded-lg"></div>
                      <div class="h-24 bg-gray-300 rounded-lg"></div>
                      <div class="h-24 bg-gray-300 rounded-lg"></div>
                   </div>

                   <!-- The Pre-Gate Modal -->
                   <div class="bg-white rounded-xl shadow-xl p-5 w-full relative z-20 border border-gray-100">
                      <p class="text-center font-bold text-gray-800 mb-4 text-sm">Enjoying the app?</p>
                      <div class="flex gap-2">
                        <div class="flex-1 py-2 bg-gray-100 rounded text-center text-xs text-gray-400">No</div>
                        <!-- Highlighted YES button -->
                        <div class="flex-1 py-2 bg-[#16A34A] rounded text-center text-xs text-white font-bold shadow-lg transform scale-105 ring-4 ring-green-100 relative">
                           Yes
                           <!-- Finger tap indicator -->
                           <div class="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500/30 rounded-full animate-ping"></div>
                        </div>
                      </div>
                   </div>

                   <!-- Arrow to Result -->
                   <div class="absolute bottom-10 flex flex-col items-center opacity-60">
                      <svg class="w-6 h-6 text-gray-400 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
                      <span class="text-[10px] font-mono text-gray-500">Store Kit Trigger</span>
                   </div>
                </div>
            </div>
        </div>

        <!-- Right Column: Vertical Sequence -->
        <div class="space-y-8 order-1 lg:order-2">
           
           <!-- Step 1 -->
           <div class="flex gap-5 items-start group">
              <div class="flex-shrink-0 w-12 h-12 rounded-full bg-green-50 text-[#16A34A] flex items-center justify-center font-bold text-lg border border-green-100 group-hover:bg-[#16A34A] group-hover:text-white transition-colors">1</div>
              <div>
                 <h4 class="text-xl font-bold text-gray-900 mb-1">User Affirms</h4>
                 <p class="text-gray-600 leading-relaxed">
                   The user taps "Yes". This is the only signal we need to classify them as a promoter.
                 </p>
              </div>
           </div>

           <!-- Step 2 -->
           <div class="flex gap-5 items-start group">
              <div class="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">2</div>
              <div>
                 <h4 class="text-xl font-bold text-gray-900 mb-1">Handoff to OS</h4>
                 <p class="text-gray-600 leading-relaxed">
                   We immediately call <code>StoreReview.requestReview()</code>. This is a "fire-and-forget" command. We do not block the UI.
                 </p>
              </div>
           </div>

           <!-- Step 3 -->
           <div class="flex gap-5 items-start group">
              <div class="flex-shrink-0 w-12 h-12 rounded-full bg-gray-50 text-gray-500 flex items-center justify-center font-bold text-lg border border-gray-200 group-hover:bg-gray-500 group-hover:text-white transition-colors">3</div>
              <div>
                 <h4 class="text-xl font-bold text-gray-900 mb-1">The "Black Box" Decision</h4>
                 <p class="text-gray-600 leading-relaxed">
                   iOS/Android decides whether to display the stars based on system quotas (max ~3 per year). We cannot force this.
                 </p>
              </div>
           </div>

           <!-- Logic Note -->
           <div class="mt-8 p-6 bg-gray-50 border-l-4 border-[#3B5BDB] rounded-r-xl">
              <h5 class="font-bold text-[#1F2937] text-sm uppercase tracking-wide mb-2">Critical Logic</h5>
              <p class="text-gray-600 text-sm leading-relaxed">
                Regardless of whether the stars appear, we mark this user as <span class="font-bold text-gray-900">"Solicited"</span> and apply a 90-day suppression cooldown to prevent spamming.
              </p>
           </div>

        </div>

      </div>
    </div>
  `
})
export class SlidePositiveSentimentComponent {}