import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-density',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-8 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Controlled Flexibility</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Two Density Presets That Both Meet Standards</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          We offer organizers a choice between maximum glanceability and maximum content coverage, without compromising the legibility floor.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
        
        <!-- Preset A: Comfortable -->
        <div class="group relative">
          <div class="absolute -inset-4 rounded-xl bg-gradient-to-b from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div class="relative bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full">
            <div class="h-2 bg-blue-500 w-full"></div>
            <div class="p-6 md:p-8">
              <div class="flex items-center justify-between mb-6">
                <h4 class="text-2xl font-bold text-gray-900">Preset A: Comfortable</h4>
                <span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full tracking-wide">Default</span>
              </div>
              
              <!-- Abstract Visual Representation -->
              <div class="bg-gray-50 rounded-lg p-4 border border-gray-100 mb-6 space-y-3">
                 <div class="h-4 bg-gray-300 rounded w-1/4 mb-4"></div> <!-- Header -->
                 <!-- Items -->
                 <div class="flex gap-3">
                    <div class="w-16 h-12 bg-white border border-gray-200 rounded shadow-sm shrink-0"></div>
                    <div class="flex-1 space-y-2 py-1">
                        <div class="h-3 bg-gray-300 rounded w-3/4"></div>
                        <div class="h-2 bg-gray-200 rounded w-1/2"></div>
                    </div>
                 </div>
                 <div class="flex gap-3">
                    <div class="w-16 h-12 bg-white border border-gray-200 rounded shadow-sm shrink-0"></div>
                    <div class="flex-1 space-y-2 py-1">
                        <div class="h-3 bg-gray-300 rounded w-4/5"></div>
                        <div class="h-2 bg-gray-200 rounded w-1/3"></div>
                    </div>
                 </div>
                 <div class="flex gap-3 opacity-50">
                    <div class="w-16 h-12 bg-white border border-gray-200 rounded shadow-sm shrink-0"></div>
                    <div class="flex-1 space-y-2 py-1">
                        <div class="h-3 bg-gray-300 rounded w-2/3"></div>
                        <div class="h-2 bg-gray-200 rounded w-1/2"></div>
                    </div>
                 </div>
              </div>

              <ul class="space-y-3">
                <li class="flex items-start gap-3 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span><strong>Optimized for Glanceability:</strong> Instant recognition at walking speed.</span>
                </li>
                <li class="flex items-start gap-3 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span><strong>Generous Spacing:</strong> 12pt primary type, comfortable leading.</span>
                </li>
                <li class="flex items-start gap-3 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span><strong>Lower Count:</strong> Displays top 3-4 upcoming sessions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Preset B: Dense -->
        <div class="group relative">
          <div class="absolute -inset-4 rounded-xl bg-gradient-to-b from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <div class="relative bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full">
            <div class="h-2 bg-indigo-500 w-full"></div>
            <div class="p-6 md:p-8">
              <div class="flex items-center justify-between mb-6">
                <h4 class="text-2xl font-bold text-gray-900">Preset B: Compact</h4>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold uppercase rounded-full tracking-wide">High Volume</span>
              </div>

              <!-- Abstract Visual Representation -->
              <div class="bg-gray-50 rounded-lg p-4 border border-gray-100 mb-6 space-y-2">
                 <div class="h-4 bg-gray-300 rounded w-1/4 mb-3"></div> <!-- Header -->
                 <!-- Items (More compacted) -->
                 <div class="flex gap-2 items-center">
                    <div class="w-12 h-8 bg-white border border-gray-200 rounded shadow-sm shrink-0"></div>
                    <div class="flex-1 space-y-1">
                        <div class="h-2.5 bg-gray-300 rounded w-3/4"></div>
                        <div class="h-1.5 bg-gray-200 rounded w-1/2"></div>
                    </div>
                 </div>
                 <div class="flex gap-2 items-center">
                    <div class="w-12 h-8 bg-white border border-gray-200 rounded shadow-sm shrink-0"></div>
                    <div class="flex-1 space-y-1">
                        <div class="h-2.5 bg-gray-300 rounded w-full"></div>
                        <div class="h-1.5 bg-gray-200 rounded w-1/3"></div>
                    </div>
                 </div>
                 <div class="flex gap-2 items-center">
                    <div class="w-12 h-8 bg-white border border-gray-200 rounded shadow-sm shrink-0"></div>
                    <div class="flex-1 space-y-1">
                        <div class="h-2.5 bg-gray-300 rounded w-4/5"></div>
                        <div class="h-1.5 bg-gray-200 rounded w-1/4"></div>
                    </div>
                 </div>
                  <div class="flex gap-2 items-center">
                    <div class="w-12 h-8 bg-white border border-gray-200 rounded shadow-sm shrink-0"></div>
                    <div class="flex-1 space-y-1">
                        <div class="h-2.5 bg-gray-300 rounded w-2/3"></div>
                        <div class="h-1.5 bg-gray-200 rounded w-1/2"></div>
                    </div>
                 </div>
              </div>

              <ul class="space-y-3">
                <li class="flex items-start gap-3 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span><strong>Optimized for Coverage:</strong> Maximizes information per inch.</span>
                </li>
                <li class="flex items-start gap-3 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span><strong>Efficient Spacing:</strong> 10pt minimum type, tighter leading.</span>
                </li>
                <li class="flex items-start gap-3 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span><strong>Higher Count:</strong> Displays 5-7 items if space allows.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  `
})
export class SlideDensityComponent {}