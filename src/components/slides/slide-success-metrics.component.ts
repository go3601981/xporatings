import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-success-metrics',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">KPIs & Analytics</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Success Metrics (Event Reality)</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          Expo Pass is not a daily habit app. We measure success within the high-intensity event window.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        
        <!-- Metric 1: Acceptance Rate -->
        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
          <div class="flex items-center gap-3 mb-4">
             <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
               <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
             </div>
             <h4 class="font-bold text-lg text-gray-800">Prompt Acceptance</h4>
          </div>
          <p class="text-sm text-gray-600 mb-3">
             % of users who tap "Yes" on the pre-prompt during the event.
          </p>
          <span class="font-mono font-bold text-2xl text-gray-900">Target: >15%</span>
        </div>

        <!-- Metric 2: Negative Capture -->
        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
          <div class="flex items-center gap-3 mb-4">
             <div class="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
               <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
             </div>
             <h4 class="font-bold text-lg text-gray-800">Feedback Capture</h4>
          </div>
          <p class="text-sm text-gray-600 mb-3">
             Volume of negative feedback routed to internal forms vs public 1-star reviews.
          </p>
          <span class="font-mono font-bold text-2xl text-gray-900">Target: 100% Intercept</span>
        </div>

        <!-- Metric 3: Signal-to-Noise -->
        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
          <div class="flex items-center gap-3 mb-4">
             <div class="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
               <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
             </div>
             <h4 class="font-bold text-lg text-gray-800">Signal-to-Noise</h4>
          </div>
           <p class="text-sm text-gray-600 mb-3">
             We prioritize high-intent prompts over broad coverage. 100 meaningful prompts > 10,000 spammy ones.
          </p>
          <span class="font-mono font-bold text-2xl text-gray-900">Target: High Intent</span>
        </div>

        <!-- Metric 4: Short-Term Engagement -->
        <div class="bg-white p-6 rounded-xl border-l-4 border-green-500 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow md:col-span-3">
          <div class="flex items-center gap-3 mb-4">
             <div class="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
               <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
             </div>
             <h4 class="font-bold text-lg text-gray-800">Event-Window Impact</h4>
          </div>
          <div class="flex flex-col md:flex-row gap-8">
             <div class="flex-1">
                <p class="text-sm text-gray-600 mb-2 leading-relaxed">
                   Did we capture sentiment during their <strong>peak engagement window</strong>, regardless of event duration?
                </p>
                <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                   <div class="h-full bg-green-500 w-[95%] rounded-full"></div>
                </div>
                <p class="text-xs text-green-600 mt-1 font-bold">Goal: Maximize prompts during active hours.</p>
             </div>
             <div class="flex-1 border-l border-gray-100 pl-8 hidden md:block">
                <p class="text-sm text-gray-500 italic">
                  "We don't care about 30-day retention because the event is over in 3 days. We care that we engaged them when it mattered."
                </p>
             </div>
          </div>
        </div>

      </div>

    </div>
  `
})
export class SlideSuccessMetricsComponent {}