import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-success-metrics',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">KPIs & Analytics</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">How We Measure Success</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          We move beyond vanity metrics. We measure the health of the funnel and the quality of the insights captured.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        
        <!-- Metric 1: Funnel Health -->
        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
          <div class="flex items-center gap-3 mb-4">
             <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
               <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
             </div>
             <h4 class="font-bold text-lg text-gray-800">Funnel Health</h4>
          </div>
          <ul class="space-y-3">
             <li class="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
               <span class="text-gray-600">Response Rate</span>
               <span class="font-mono font-bold text-gray-900">15-20%</span>
             </li>
             <li class="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
               <span class="text-gray-600">Dismissal Rate</span>
               <span class="font-mono font-bold text-gray-900">&lt; 50%</span>
             </li>
             <li class="flex justify-between items-center text-sm pt-1">
               <span class="text-gray-600">Trigger Fatigue</span>
               <span class="font-mono font-bold text-green-600">Low</span>
             </li>
          </ul>
        </div>

        <!-- Metric 2: Outcome Quality -->
        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
          <div class="flex items-center gap-3 mb-4">
             <div class="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
               <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
             </div>
             <h4 class="font-bold text-lg text-gray-800">Outcome Quality</h4>
          </div>
           <ul class="space-y-3">
             <li class="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
               <span class="text-gray-600">Yes / No Split</span>
               <span class="font-mono font-bold text-gray-900">Tracked</span>
             </li>
             <li class="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
               <span class="text-gray-600">Feedback Completion</span>
               <span class="font-mono font-bold text-gray-900">&gt; 30%</span>
             </li>
             <li class="flex justify-between items-center text-sm pt-1">
               <span class="text-gray-600">Avg. Message Length</span>
               <span class="font-mono font-bold text-gray-900">Attributes</span>
             </li>
          </ul>
        </div>

        <!-- Metric 3: Platform Impact -->
        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
          <div class="flex items-center gap-3 mb-4">
             <div class="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
               <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
             </div>
             <h4 class="font-bold text-lg text-gray-800">Platform Impact</h4>
          </div>
          <p class="text-sm text-gray-600 mb-4 leading-relaxed">
            The lagging indicator. We monitor the 30-day moving average of App Store ratings.
          </p>
          <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
             <div class="h-full bg-green-500 w-3/4 rounded-full"></div>
          </div>
          <div class="flex justify-between mt-2 text-xs text-gray-500">
             <span>4.2 Stars</span>
             <span>Goal: 4.8</span>
          </div>
        </div>

        <!-- Metric 4: Product Insight -->
        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
          <div class="flex items-center gap-3 mb-4">
             <div class="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
               <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
             </div>
             <h4 class="font-bold text-lg text-gray-800">Product Insight</h4>
          </div>
          <div class="flex gap-2 flex-wrap">
             <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200">Crash Reports</span>
             <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200">Feature Requests</span>
             <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200">UX Friction</span>
          </div>
          <p class="text-sm text-gray-600 mt-3 leading-relaxed">
             Which triggers yield the most useful feedback? Are "End of Day" prompts more actionable than "Post-Session"?
          </p>
        </div>

      </div>

      <!-- Emphasis -->
      <div class="bg-gray-900 text-white p-8 rounded-[14px] shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
         <!-- Deco -->
         <div class="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>

         <div class="relative z-10">
            <h5 class="text-xl font-bold mb-2">Quality > Volume</h5>
            <p class="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
               Our primary success metric is not the number of ratings we solicit, but the ratio of <strong>Solicited Ratings</strong> to <strong>Retained Users</strong>. If ratings go up but retention drops due to annoyance, we have failed.
            </p>
         </div>
         
         <div class="relative z-10 shrink-0">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#3B5BDB] to-indigo-600 flex items-center justify-center shadow-lg border-2 border-white/20">
               <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
         </div>
      </div>

    </div>
  `
})
export class SlideSuccessMetricsComponent {}