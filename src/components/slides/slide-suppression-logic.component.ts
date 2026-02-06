import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-suppression-logic',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-8 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Trust Mechanics</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Suppression & Frequency Logic</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          We treat every prompt as a withdrawal of social capital. We employ rigorous logic to ensure we never overdraw.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-8">
        
        <!-- The Funnel / Layers -->
        <div class="space-y-4">
          
          <!-- Layer 1: Hard Suppression -->
          <div class="bg-white p-5 rounded-xl border-l-8 border-[#3B5BDB] shadow-sm flex items-center gap-5 relative overflow-hidden group">
            <div class="bg-blue-50 p-3 rounded-full text-[#3B5BDB] shrink-0">
               <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            </div>
            <div>
              <h4 class="font-bold text-gray-900">Global Hard Suppression</h4>
              <p class="text-sm text-gray-600 mt-1">
                 If a user provides an answer (positive or negative), we are silent for <span class="font-semibold text-[#3B5BDB]">90–180 days</span> across all events.
              </p>
            </div>
          </div>

          <!-- Layer 2: Session Limits -->
          <div class="bg-white p-5 rounded-xl border-l-8 border-[#10B981] shadow-sm flex items-center gap-5 relative overflow-hidden group">
            <div class="bg-green-50 p-3 rounded-full text-[#10B981] shrink-0">
               <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
            </div>
            <div>
              <h4 class="font-bold text-gray-900">Session-Level Quota</h4>
              <p class="text-sm text-gray-600 mt-1">
                 Maximum <span class="font-semibold text-[#10B981]">1 attempt</span> per Session ID. If dismissed, we do not ask again for that specific session.
              </p>
            </div>
          </div>

          <!-- Layer 3: Version Reset -->
          <div class="bg-white p-5 rounded-xl border-l-8 border-purple-500 shadow-sm flex items-center gap-5 relative overflow-hidden group">
            <div class="bg-purple-50 p-3 rounded-full text-purple-600 shrink-0">
               <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            </div>
            <div>
              <h4 class="font-bold text-gray-900">Major Version Reset</h4>
              <p class="text-sm text-gray-600 mt-1">
                 Suppression persists across patches (v4.1 -> v4.2) but resets on major overhauls (v4.0 -> v5.0) to capture new UX sentiment.
              </p>
            </div>
          </div>

          <!-- Layer 4: Contextual -->
          <div class="bg-white p-5 rounded-xl border-l-8 border-[#F59E0B] shadow-sm flex items-center gap-5 relative overflow-hidden group">
            <div class="bg-yellow-50 p-3 rounded-full text-[#F59E0B] shrink-0">
               <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div>
              <h4 class="font-bold text-gray-900">Contextual Safety</h4>
              <p class="text-sm text-gray-600 mt-1">
                 Logic checks for active sessions. We are suppressed if the user is likely <em>in</em> a session or navigating.
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
                <span class="text-2xl font-bold">Trust > Volume</span>
              </div>
              
              <h4 class="text-2xl font-bold mb-4 leading-tight">We Optimize for Long-Term Relationship</h4>
              <p class="text-gray-300 text-lg leading-relaxed mb-6">
                Most apps spam users until they break. We take the opposite approach: We value the user's silence.
              </p>
              
              <div class="space-y-3">
                <div class="flex items-center gap-3 text-sm text-gray-400">
                  <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Prevents "Review Bombing" from fatigue</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-gray-400">
                  <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Preserves "Signal Quality" (High Intent)</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-gray-400">
                  <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Respects OS constraints automatically</span>
                </div>
              </div>

            </div>
        </div>

      </div>
      
      <!-- Bottom Banner -->
       <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
         <div class="flex items-center gap-4">
           <svg class="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
           <p class="text-sm text-gray-600 italic">
             <strong>Note:</strong> This logic is managed server-side where possible to persist state across device installs/uninstalls.
           </p>
         </div>
       </div>

    </div>
  `
})
export class SlideSuppressionLogicComponent {}