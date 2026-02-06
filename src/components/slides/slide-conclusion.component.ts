import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-conclusion',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Executive Summary</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Why This Is the Right V1 Decision</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          A strategic balance of utility, feasibility, and risk management.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <!-- List of reasons -->
        <div class="space-y-6">
          
          <div class="flex gap-4 items-start group">
            <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-100 transition-colors">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            </div>
            <div>
              <h4 class="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">Delivers Clear Attendee Value</h4>
              <p class="text-gray-600 mt-1">Solves the immediate "Where do I go next?" problem without friction.</p>
            </div>
          </div>

          <div class="flex gap-4 items-start group">
            <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-100 transition-colors">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
            </div>
            <div>
              <h4 class="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">Respects Physical Reality</h4>
              <p class="text-gray-600 mt-1">Acknowledges that paper has no scrollbar and eyesight has limits.</p>
            </div>
          </div>

          <div class="flex gap-4 items-start group">
            <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-100 transition-colors">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            </div>
            <div>
              <h4 class="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">Avoids Scope Creep</h4>
              <p class="text-gray-600 mt-1">Prevents the badge from trying to be a "paper app," which it cannot succeed at.</p>
            </div>
          </div>

          <div class="flex gap-4 items-start group">
            <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-100 transition-colors">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/></svg>
            </div>
            <div>
              <h4 class="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">Reduces Support & Regret</h4>
              <p class="text-gray-600 mt-1">A legible, partial list is better than an illegible, complete list.</p>
            </div>
          </div>

          <div class="flex gap-4 items-start group">
             <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-100 transition-colors">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
            </div>
            <div>
              <h4 class="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">Future Expansion</h4>
              <p class="text-gray-600 mt-1">Sets a solid foundation. We can iterate on density logic once the baseline is proven.</p>
            </div>
          </div>

        </div>

        <!-- Big Visual / Call to Action -->
        <div class="bg-gray-900 text-white rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center h-full">
           <!-- Decorative Background -->
           <div class="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
           <div class="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>
           
           <div class="relative z-10 text-center">
             <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white text-blue-600 mb-6 shadow-lg">
                <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
             </div>
             
             <h3 class="text-3xl font-bold mb-4">Recommendation: Proceed</h3>
             <p class="text-gray-300 text-lg leading-relaxed mb-8">
               This approach minimizes risk while maximizing the primary use case: <strong>Orientation</strong>.
             </p>
           </div>
        </div>

      </div>
    </div>
  `
})
export class SlideConclusionComponent {}