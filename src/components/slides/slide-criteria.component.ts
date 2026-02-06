import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-criteria',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Definition of Done</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Objective Acceptance Criteria</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          These are not guidelines. They are binary pass/fail gates that every print job must clear before production.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        
        <!-- Criterion 1 -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col relative overflow-hidden">
          <div class="absolute top-0 right-0 p-3 opacity-10">
             <svg class="w-20 h-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
          </div>
          <div class="flex items-center gap-3 mb-3">
             <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
               <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
             </div>
             <h4 class="font-bold text-[#1F2937]">Optical Range</h4>
          </div>
          <p class="text-sm text-[#6B7280] leading-relaxed">
            Content must be legible at <strong>arm's length (18–30 inches)</strong>. If a user brings the badge to their nose to read it, the test has failed.
          </p>
        </div>

        <!-- Criterion 2 -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col relative overflow-hidden">
           <div class="absolute top-0 right-0 p-3 opacity-10">
             <svg class="w-20 h-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16m-7 6h7"/></svg>
          </div>
          <div class="flex items-center gap-3 mb-3">
             <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
               <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
             </div>
             <h4 class="font-bold text-[#1F2937]">Optical Separation</h4>
          </div>
          <p class="text-sm text-[#6B7280] leading-relaxed">
            Minimum line spacing (leading) must be preserved. We reject "wall of text" layouts where descenders touch ascenders.
          </p>
        </div>

        <!-- Criterion 3 -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col relative overflow-hidden">
           <div class="absolute top-0 right-0 p-3 opacity-10">
             <svg class="w-20 h-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div class="flex items-center gap-3 mb-3">
             <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
               <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
             </div>
             <h4 class="font-bold text-[#1F2937]">3-Second Scan</h4>
          </div>
          <p class="text-sm text-[#6B7280] leading-relaxed">
            A user walking at 3mph must be able to identify their next session in <strong>under 3 seconds</strong>. Chronological order is mandatory.
          </p>
        </div>

        <!-- Criterion 4 -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col relative overflow-hidden">
           <div class="absolute top-0 right-0 p-3 opacity-10">
             <svg class="w-20 h-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div class="flex items-center gap-3 mb-3">
             <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
               <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
             </div>
             <h4 class="font-bold text-[#1F2937]">Physical Safety</h4>
          </div>
          <p class="text-sm text-[#6B7280] leading-relaxed">
            <strong>0% Tolerance</strong> for text entering the punch slot zone or the 0.25" hardware safety margin.
          </p>
        </div>

        <!-- Criterion 5 -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col relative overflow-hidden">
           <div class="absolute top-0 right-0 p-3 opacity-10">
             <svg class="w-20 h-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          </div>
          <div class="flex items-center gap-3 mb-3">
             <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
               <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
             </div>
             <h4 class="font-bold text-[#1F2937]">Data Integrity</h4>
          </div>
          <p class="text-sm text-[#6B7280] leading-relaxed">
            Data matches the system of record at the exact timestamp of printing. No predictive or "fuzzy" data.
          </p>
        </div>

        <!-- Summary Block -->
        <div class="bg-[#F0FDF4] p-6 rounded-[14px] border border-green-200 flex flex-col justify-center">
            <h4 class="text-lg font-bold text-green-900 mb-2">Testable & Enforceable</h4>
            <p class="text-sm text-green-700">
              We remove subjective opinions ("I think it looks too small") by validating against these hard constraints.
            </p>
        </div>

      </div>

    </div>
  `
})
export class SlideCriteriaComponent {}