import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-trigger-scope',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Audience Scope</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Trigger Scope: Attendee vs. Exhibitor</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          Different user personas define "success" differently. We must scope triggers to the active app surface.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        
        <!-- Attendee Scope -->
        <div class="bg-white rounded-2xl border-t-8 border-[#3B5BDB] shadow-lg p-8 flex flex-col relative overflow-hidden">
           <div class="absolute top-0 right-0 p-4 opacity-5">
              <svg class="w-32 h-32 text-[#3B5BDB]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
           </div>

           <div class="flex items-center gap-3 mb-6">
              <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Smart View</span>
              <h4 class="text-2xl font-bold text-gray-900">Attendee Persona</h4>
           </div>

           <p class="text-gray-600 mb-6 flex-grow">
             Success for an attendee is about connection and content. Triggers must reflect engagement depth.
           </p>

           <div class="space-y-4">
              <div class="flex items-start gap-3">
                 <div class="mt-1 w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">✓</div>
                 <div>
                    <h5 class="font-bold text-gray-800 text-sm">Chat Engagement</h5>
                    <p class="text-xs text-gray-500">Sent multiple messages to another user.</p>
                 </div>
              </div>
              <div class="flex items-start gap-3">
                 <div class="mt-1 w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">✓</div>
                 <div>
                    <h5 class="font-bold text-gray-800 text-sm">Self-Scan (Lead Gen)</h5>
                    <p class="text-xs text-gray-500">Successfully shared contact info via QR.</p>
                 </div>
              </div>
              <div class="flex items-start gap-3 opacity-50">
                 <div class="mt-1 w-5 h-5 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-xs font-bold">-</div>
                 <div>
                    <h5 class="font-bold text-gray-500 text-sm">Session Feedback</h5>
                    <p class="text-xs text-gray-400">Valid only if feedback form completed.</p>
                 </div>
              </div>
           </div>
        </div>

        <!-- Exhibitor Scope -->
        <div class="bg-white rounded-2xl border-t-8 border-[#10B981] shadow-lg p-8 flex flex-col relative overflow-hidden">
           <div class="absolute top-0 right-0 p-4 opacity-5">
              <svg class="w-32 h-32 text-[#10B981]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H9v-2h6v2zm0-5H9V8h6v5z"/></svg>
           </div>

           <div class="flex items-center gap-3 mb-6">
              <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Legacy / Lead Retrieval</span>
              <h4 class="text-2xl font-bold text-gray-900">Exhibitor Persona</h4>
           </div>

           <p class="text-gray-600 mb-6 flex-grow">
             Success for an exhibitor is pure utility. Did the app help me capture leads?
           </p>

           <div class="space-y-4">
              <div class="flex items-start gap-3">
                 <div class="mt-1 w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">✓</div>
                 <div>
                    <h5 class="font-bold text-gray-800 text-sm">Bulk Scanning</h5>
                    <p class="text-xs text-gray-500">Trigger after 4-5 successful lead scans.</p>
                 </div>
              </div>
              <div class="flex items-start gap-3">
                 <div class="mt-1 w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">✓</div>
                 <div>
                    <h5 class="font-bold text-gray-800 text-sm">Lead Export</h5>
                    <p class="text-xs text-gray-500">Trigger after successfully exporting/emailing leads.</p>
                 </div>
              </div>
              <div class="flex items-start gap-3 opacity-50">
                 <div class="mt-1 w-5 h-5 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-xs font-bold">×</div>
                 <div>
                    <h5 class="font-bold text-gray-500 text-sm">Content Browsing</h5>
                    <p class="text-xs text-gray-400">Irrelevant for exhibitors.</p>
                 </div>
              </div>
           </div>
        </div>

      </div>

      <!-- Decision Box -->
      <div class="mt-10 bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-start gap-4">
         <div class="p-2 bg-yellow-100 rounded text-yellow-700 shrink-0">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
         </div>
         <div>
            <h4 class="font-bold text-gray-900 text-sm uppercase">Engineering Note</h4>
            <p class="text-gray-600 text-sm">
               We must ensure the "In-App Review" code is conditional based on the active user role. Do not fire "Lead Retrieval" triggers for standard Attendees, and vice versa.
            </p>
         </div>
      </div>

    </div>
  `
})
export class SlideTriggerScopeComponent {}