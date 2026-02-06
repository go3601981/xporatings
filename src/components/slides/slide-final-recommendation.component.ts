import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-final-recommendation',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Executive Summary</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Why This Is the Right Decision</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          A balanced strategy that prioritizes long-term brand health over short-term metric hacking.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        
        <!-- Point 1: Easy to Implement -->
        <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full hover:border-blue-200 transition-colors">
           <div class="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
             <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
           </div>
           <h4 class="font-bold text-gray-900 mb-2">Easy to Implement</h4>
           <p class="text-sm text-gray-600 leading-relaxed">
             Leverages native OS APIs and standard UI components. No complex infrastructure or heavy third-party SDKs required.
           </p>
        </div>

        <!-- Point 2: Low Risk -->
        <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full hover:border-blue-200 transition-colors">
           <div class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-4">
             <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
           </div>
           <h4 class="font-bold text-gray-900 mb-2">Low Risk</h4>
           <p class="text-sm text-gray-600 leading-relaxed">
             The "Silence by Default" architecture ensures that if anything fails (network, logic), the user experience remains uninterrupted.
           </p>
        </div>

        <!-- Point 3: High Trust -->
        <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full hover:border-blue-200 transition-colors">
           <div class="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
             <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.131A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.2-2.85.577-4.147l.044-.14"/></svg>
           </div>
           <h4 class="font-bold text-gray-900 mb-2">High Trust</h4>
           <p class="text-sm text-gray-600 leading-relaxed">
             By asking "Are you enjoying this?" instead of "Rate us 5 stars," we respect the user's intelligence and autonomy.
           </p>
        </div>

        <!-- Point 4: High Learning Value -->
        <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full hover:border-blue-200 transition-colors">
           <div class="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
             <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
           </div>
           <h4 class="font-bold text-gray-900 mb-2">High Learning Value</h4>
           <p class="text-sm text-gray-600 leading-relaxed">
             Captures actionable feedback from unhappy users (bugs, friction) that would otherwise be lost or vented publicly.
           </p>
        </div>

        <!-- Point 5: Ethical Ratings -->
        <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full hover:border-blue-200 transition-colors">
           <div class="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
             <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
           </div>
           <h4 class="font-bold text-gray-900 mb-2">Improves Ratings Naturally</h4>
           <p class="text-sm text-gray-600 leading-relaxed">
             Increases star count not by manipulation, but by ensuring happy users are simply <em>reminded</em> to share their experience.
           </p>
        </div>

        <!-- Point 6: Future Foundation -->
        <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full hover:border-blue-200 transition-colors">
           <div class="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
             <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
           </div>
           <h4 class="font-bold text-gray-900 mb-2">Scalable Foundation</h4>
           <p class="text-sm text-gray-600 leading-relaxed">
             Establishes the logic tier (suppression, cooldowns) needed for all future engagement features (e.g., NPS, surveys).
           </p>
        </div>

      </div>

      <!-- Conclusion Statement -->
      <div class="bg-gray-900 text-white rounded-2xl p-8 lg:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
         <!-- Abstract Glow -->
         <div class="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#3B5BDB] rounded-full blur-[80px] opacity-30"></div>
         <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-indigo-600 rounded-full blur-[80px] opacity-30"></div>

         <div class="relative z-10">
            <h3 class="text-2xl font-bold mb-2">Recommendation: Proceed to Implementation</h3>
            <p class="text-gray-300 text-lg">
               This approach solves the immediate business need (ratings) while aligning perfectly with our core value of "Attendee Experience First."
            </p>
         </div>

         <div class="relative z-10 shrink-0">
            <button class="bg-[#3B5BDB] hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold shadow-lg transition-all transform hover:scale-105 flex items-center gap-3">
              <span>Approve Strategy</span>
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
         </div>
      </div>

    </div>
  `
})
export class SlideFinalRecommendationComponent {}