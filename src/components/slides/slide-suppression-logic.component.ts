import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-suppression-logic',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-8 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Trust Mechanics</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Suppression Logic: "One Shot Per Event"</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          Events are finite windows of high intensity. We treat attention as a scarcity that can only be tapped once per Event ID.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-8">
        
        <!-- The Funnel / Layers -->
        <div class="space-y-4">
          
          <!-- Layer 1: Event ID Binding -->
          <div class="bg-white p-5 rounded-xl border-l-8 border-[#3B5BDB] shadow-sm flex items-center gap-5 relative overflow-hidden group">
            <div class="bg-blue-50 p-3 rounded-full text-[#3B5BDB] shrink-0">
               <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div>
              <h4 class="font-bold text-gray-900">Event-ID Binding</h4>
              <p class="text-sm text-gray-600 mt-1">
                 Suppression is strictly bound to the <code>Event_ID</code>. Once an interaction occurs (Positive, Negative, or Dismissed), the user is marked 'Complete' for that specific event.
              </p>
            </div>
          </div>

          <!-- Layer 2: The Fresh Start -->
          <div class="bg-white p-5 rounded-xl border-l-8 border-[#10B981] shadow-sm flex items-center gap-5 relative overflow-hidden group">
            <div class="bg-green-50 p-3 rounded-full text-[#10B981] shrink-0">
               <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            </div>
            <div>
              <h4 class="font-bold text-gray-900">The "Fresh Start" Rule</h4>
              <p class="text-sm text-gray-600 mt-1">
                 If the user attends a different event next week (new Event ID), the flag resets. They are immediately eligible again.
              </p>
            </div>
          </div>

          <!-- Layer 3: OS Constraints -->
          <div class="bg-white p-5 rounded-xl border-l-8 border-[#F59E0B] shadow-sm flex items-center gap-5 relative overflow-hidden group">
            <div class="bg-yellow-50 p-3 rounded-full text-[#F59E0B] shrink-0">
               <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            </div>
            <div>
              <h4 class="font-bold text-gray-900">No Retries (OS Constraint)</h4>
              <p class="text-sm text-gray-600 mt-1">
                 Apple/Google limits prompts to ~3/year. If we ask a second time, the OS will likely silently block it. We do not risk a broken UX on a retry.
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
              
              <h4 class="text-2xl font-bold mb-4 leading-tight">Why Event-ID Logic?</h4>
              <p class="text-gray-300 text-lg leading-relaxed mb-6">
                Usage is rare and ephemeral. A 90-day cooldown would ban a power user attending two conferences in one month.
              </p>
              
              <div class="space-y-3">
                <div class="flex items-center gap-3 text-sm text-gray-400">
                  <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Solves the 1-day vs 5-day duration variance.</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-gray-400">
                  <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Avoids complex date math. Simple boolean check.</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-gray-400">
                  <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Respects the "Use-It-Or-Lose-It" window.</span>
                </div>
              </div>

            </div>
        </div>

      </div>
      
    </div>
  `
})
export class SlideSuppressionLogicComponent {}