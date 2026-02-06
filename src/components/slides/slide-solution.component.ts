import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-solution',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Product Scope Definition</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">What the Badge Schedule Is — and Is Not</h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        
        <!-- IS Column -->
        <div class="bg-white p-8 rounded-[14px] border-t-4 border-[#16A34A] shadow-[0_4px_20px_rgba(0,0,0,0.05)] relative overflow-hidden group">
          <div class="absolute top-0 right-0 p-4 opacity-5">
            <svg class="w-32 h-32 text-[#16A34A]" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          </div>
          
          <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-12 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[#16A34A]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            </div>
            <h4 class="text-2xl font-bold text-[#1F2937]">What It Is</h4>
          </div>

          <ul class="space-y-6 relative z-10">
            <li class="flex gap-4">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0"></span>
              <span class="text-lg text-[#4B5563]">A <strong>quick-reference memory aid</strong> for confirmed choices.</span>
            </li>
            <li class="flex gap-4">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0"></span>
              <span class="text-lg text-[#4B5563]">A <strong>static snapshot</strong> at the moment of printing.</span>
            </li>
            <li class="flex gap-4">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0"></span>
              <span class="text-lg text-[#4B5563]">Designed strictly for <strong>glanceability</strong> while walking.</span>
            </li>
            <li class="flex gap-4">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0"></span>
              <span class="text-lg text-[#4B5563]">Supports <strong>orientation</strong>, not discovery.</span>
            </li>
          </ul>
        </div>

        <!-- IS NOT Column -->
        <div class="bg-white p-8 rounded-[14px] border-t-4 border-[#EF4444] shadow-[0_4px_20px_rgba(0,0,0,0.05)] relative overflow-hidden group">
          <div class="absolute top-0 right-0 p-4 opacity-5">
            <svg class="w-32 h-32 text-[#EF4444]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          </div>

          <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-12 rounded-full bg-[#FEE2E2] flex items-center justify-center text-[#EF4444]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </div>
            <h4 class="text-2xl font-bold text-[#1F2937]">What It Is Not</h4>
          </div>

          <ul class="space-y-6 relative z-10">
            <li class="flex gap-4">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0"></span>
              <span class="text-lg text-[#4B5563]">The <strong>full agenda</strong> or event catalog.</span>
            </li>
            <li class="flex gap-4">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0"></span>
              <span class="text-lg text-[#4B5563]"><strong>Real-time</strong> or dynamic after print.</span>
            </li>
            <li class="flex gap-4">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0"></span>
              <span class="text-lg text-[#4B5563]">A <strong>replacement</strong> for the mobile app.</span>
            </li>
            <li class="flex gap-4">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0"></span>
              <span class="text-lg text-[#4B5563]">An attempt to show <strong>everything</strong>.</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  `
})
export class SlideSolutionComponent {}