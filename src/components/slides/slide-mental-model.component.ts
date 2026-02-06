import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-mental-model',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-5xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-12">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Core Concept</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">The Mental Model</h3>
      </div>

      <!-- Hero Statement -->
      <div class="bg-white p-8 md:p-12 rounded-2xl border-l-8 border-[#3B5BDB] shadow-sm mb-20 relative overflow-hidden">
        <!-- Abstract Decoration -->
        <div class="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-gray-50 rounded-full opacity-50 z-0"></div>
        
        <p class="relative z-10 text-2xl md:text-3xl font-light leading-snug text-[#1F2937]">
          We’re designing a <span class="font-bold text-[#3B5BDB]">controlled feedback and rating funnel</span>, where the App Store prompt is only one possible outcome.
        </p>
      </div>

      <!-- The Flow / Supporting Points -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        
        <!-- Connecting Line (Desktop) -->
        <div class="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

        <!-- Step 1 -->
        <div class="flex flex-col items-center text-center group">
          <div class="w-24 h-24 rounded-full bg-white border-4 border-[#EFF6FF] flex items-center justify-center text-[#3B5BDB] mb-6 shadow-sm z-10 group-hover:scale-105 transition-transform duration-300">
             <span class="text-3xl font-bold">1</span>
          </div>
          <h4 class="text-lg font-bold text-[#1F2937] mb-2">Measure Sentiment</h4>
          <p class="text-[#6B7280] text-sm leading-relaxed max-w-xs">
            The system first identifies if the user is happy or unhappy through a low-friction interaction.
          </p>
        </div>

        <!-- Step 2 -->
        <div class="flex flex-col items-center text-center group">
          <div class="w-24 h-24 rounded-full bg-white border-4 border-green-50 flex items-center justify-center text-green-600 mb-6 shadow-sm z-10 group-hover:scale-105 transition-transform duration-300">
             <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h4 class="text-lg font-bold text-[#1F2937] mb-2">Positive Route</h4>
          <p class="text-[#6B7280] text-sm leading-relaxed max-w-xs">
            <strong>Happy users</strong> are routed to the public App Store rating prompt to drive social proof.
          </p>
        </div>

        <!-- Step 3 -->
        <div class="flex flex-col items-center text-center group">
           <div class="w-24 h-24 rounded-full bg-white border-4 border-orange-50 flex items-center justify-center text-orange-600 mb-6 shadow-sm z-10 group-hover:scale-105 transition-transform duration-300">
             <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
           </div>
          <h4 class="text-lg font-bold text-[#1F2937] mb-2">Constructive Route</h4>
          <p class="text-[#6B7280] text-sm leading-relaxed max-w-xs">
            <strong>Unhappy users</strong> are routed to a private feedback form. We protect the brand while gaining insight.
          </p>
        </div>

      </div>

    </div>
  `
})
export class SlideMentalModelComponent {}