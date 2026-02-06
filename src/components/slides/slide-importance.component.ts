import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-importance',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-12">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Strategic Context</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Why This Feature Matters</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          In-app ratings are a double-edged sword. Executed well, they drive growth. Executed poorly, they erode trust.
        </p>
      </div>

      <!-- Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        
        <!-- Card 1: Trust & Adoption -->
        <div class="bg-white p-8 rounded-[14px] border border-[#E5E7EB] shadow-sm relative overflow-hidden group">
          <div class="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <svg class="w-24 h-24 text-[#3B5BDB]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          </div>
          
          <div class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          
          <h4 class="text-xl font-bold text-[#1F2937] mb-3">Long-Term Viability</h4>
          <p class="text-[#6B7280] leading-relaxed text-sm">
            App Store ratings are the primary social proof for new users. High ratings lower acquisition costs (CAC) and increase organic conversion rates.
          </p>
        </div>

        <!-- Card 2: Brand Perception -->
        <div class="bg-white p-8 rounded-[14px] border border-[#E5E7EB] shadow-sm relative overflow-hidden group">
          <div class="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
             <svg class="w-24 h-24 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          </div>

          <div class="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6 text-red-600">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>

          <h4 class="text-xl font-bold text-[#1F2937] mb-3">Risk of Friction</h4>
          <p class="text-[#6B7280] leading-relaxed text-sm">
            Interupting a user's workflow with a "Rate Us" prompt is a withdrawal from the "brand bank account." Poorly timed prompts damage perception.
          </p>
        </div>

        <!-- Card 3: Valuable Feedback -->
        <div class="bg-white p-8 rounded-[14px] border border-[#E5E7EB] shadow-sm relative overflow-hidden group">
          <div class="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <svg class="w-24 h-24 text-teal-500" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V7h2v3z"/></svg>
          </div>

          <div class="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center mb-6 text-teal-600">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </div>

          <h4 class="text-xl font-bold text-[#1F2937] mb-3">Silent Majority</h4>
          <p class="text-[#6B7280] leading-relaxed text-sm">
            Dissatisfied users who leave private feedback are more valuable than public 1-star reviews. We need a channel to capture this signal before it hits the store.
          </p>
        </div>
      </div>

      <!-- Bottom Insight -->
      <div class="w-full bg-[#1F2937] text-white p-8 rounded-[14px] flex flex-col md:flex-row items-center justify-between shadow-lg border-l-8 border-[#3B5BDB]">
        <div>
          <h5 class="font-bold text-lg mb-2">The Product Imperative</h5>
          <p class="text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed">
            We are not just asking for stars. We are designing a <span class="text-white font-semibold">trust-based funnel</span> that privileges user experience over aggressive metrics.
          </p>
        </div>
        <div class="mt-6 md:mt-0 flex-shrink-0">
           <span class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20">
              Objective: Balance Growth & Trust
           </span>
        </div>
      </div>

    </div>
  `
})
export class SlideImportanceComponent {}