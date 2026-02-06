import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-problem',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      <div class="mb-10">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">The Problem We Are Solving</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Contextual Availability for Attendees</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          Attendees require immediate, low-friction access to their committed agenda while navigating the physical event space.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.06)] transition-shadow">
          <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
            <svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h4 class="text-lg font-bold text-[#1F2937] mb-2">On-Site Velocity</h4>
          <p class="text-sm text-[#6B7280] leading-relaxed">
            Attendees operate in a high-distraction, mobile environment. Reliance on unlocking phones, opening apps, and loading data creates friction during transit.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.06)] transition-shadow">
          <div class="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
            <svg class="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <h4 class="text-lg font-bold text-[#1F2937] mb-2">Reference vs. Discovery</h4>
          <p class="text-sm text-[#6B7280] leading-relaxed">
            The user intent is <strong>confirmation</strong> ("Where do I go next?"), not exploration. The UI must prioritize previously selected sessions over catalog browsing.
          </p>
        </div>

        <!-- Card 3 -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.06)] transition-shadow">
          <div class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-4">
             <svg class="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h4 class="text-lg font-bold text-[#1F2937] mb-2">Physical Constraints</h4>
          <p class="text-sm text-[#6B7280] leading-relaxed">
            Badge real estate is finite (4"x3" or 4"x6") and immutable post-print. Information density must be balanced against readability at a glance.
          </p>
        </div>
      </div>
      
      <!-- Bottom Insight -->
      <div class="mt-8 p-4 bg-[#F1F5F9] rounded-[10px] border-l-4 border-[#3B5BDB]">
        <p class="text-sm text-[#1F2937] font-medium">
          <span class="text-[#3B5BDB] font-bold">Key Constraint:</span>
          Printing is a snapshot in time. Any schedule changes made after print will not be reflected, creating a potential source of truth conflict.
        </p>
      </div>
    </div>
  `
})
export class SlideProblemComponent {}