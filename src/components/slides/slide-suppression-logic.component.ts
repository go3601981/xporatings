import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-suppression-logic',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-8 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Trust Mechanics</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Suppression Logic: "One Shot"</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          Events are short (2-3 days). We treat attention as a finite resource that can only be tapped once per event.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-8">
        
        <!-- The Funnel / Layers -->
        <div class="space-y-4">
          
          <!-- Layer 1: Event Window Limit -->
          <div class="bg-white p-5 rounded-xl border-l-8 border-[#3B5BDB] shadow-sm flex items-center gap-5 relative overflow-hidden group">
            <div class="bg-blue-50 p-3 rounded-full text-[#3B5BDB] shrink-0">
               <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div>
              <h4 class="font-bold text-gray-900">Event-Window Limit</h4>
              <p class="text-sm text-gray-600 mt-1">
                 We aim to ask <strong>exactly once</strong> per event. If the user interacts (Yes/No/Dismiss), we do not ask again for this Event ID.
              </p>
            </div>
          </div>

          <!-- Layer 2: Cross-Event Reset -->
          <div class="bg-white p-5 rounded-xl border-l-8 border-[#10B981] shadow-sm flex items-center gap-5 relative overflow-hidden group">
            <div class="bg-green-50 p-3 rounded-full text-[#10B981] shrink-0">
               <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            </div>
            <div>
              <h4 class="font-bold text-gray-900">Cross-Event Reset</h4>
              <p class="text-sm text-gray-600 mt-1">
                 Suppression is scoped to the Event ID. If a user attends another event next month, they become eligible again.
              </p>
            </div>
          </div>

          <!-- Layer 3: Second Chance (Conditional) -->
          <div class="bg-white p-5 rounded-xl border-l-8 border-[#F59E0B] shadow-sm flex items-center gap-5 relative overflow-hidden group">
            <div class="bg-yellow-50 p-3 rounded-full text-[#F59E0B] shrink-0">
               <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            </div>
            <div>
              <h4 class="font-bold text-gray-900">"Second Chance" Exception</h4>
              <p class="text-sm text-gray-600 mt-1">
                 Only applies if: Event > 1 Day AND User hit a 'High Value' trigger (Chat/Scan) on Day 2+ AND we missed them on Day 1.
              </p>
            </div>
          </div>

        </div>

        <!-- The "Why" Column -->
        <div class="bg-gray-900 text-white p-8 rounded-2xl h-full flex flex-col justify-center shadow-xl relative overflow-hidden">
            <!-- Background element -->
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
            <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>

            <div class="relative z-10">
              <div class="mb-6 p-4 bg-white/10 rounded-lg inline-block backdrop-blur-sm border border-white/20">
                <span class="text-2xl font-bold">Event Reality</span>
              </div>
              
              <h4 class="text-2xl font-bold mb-4 leading-tight">Why Not 90 Days?</h4>
              <p class="text-gray-300 text-lg leading-relaxed mb-6">
                Expo Pass is not a daily habit app. Users may not return for months.
              </p>
              
              <div class="space-y-3">
                <div class="flex items-center gap-3 text-sm text-gray-400">
                  <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>We must capture sentiment *in the moment*.</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-gray-400">
                  <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>"One Shot" forces us to prioritize only the strongest triggers.</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-gray-400">
                  <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Respects the high-stress nature of events.</span>
                </div>
              </div>

            </div>
        </div>

      </div>
      
    </div>
  `
})
export class SlideSuppressionLogicComponent {}