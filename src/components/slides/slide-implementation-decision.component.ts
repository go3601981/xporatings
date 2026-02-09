import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-implementation-decision',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Technical Specification</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Implementation Decision</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          How it works in Expo Pass v4.3+.
        </p>
      </div>

      <div class="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden flex flex-col md:flex-row">
         
         <!-- Left: Logic Stack -->
         <div class="bg-gray-50 p-8 md:w-1/3 border-r border-gray-200">
            <h4 class="font-bold text-gray-900 mb-6 uppercase text-sm tracking-wide">The Logic Stack</h4>
            
            <div class="space-y-6">
               <div class="relative pl-6 border-l-2 border-blue-200">
                  <div class="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                  <h5 class="font-bold text-gray-800 text-sm">1. Trigger Engine</h5>
                  <p class="text-xs text-gray-500 mt-1">Listens for "Measurable Moments" (e.g., <code>chat_sent_count >= 3</code>).</p>
               </div>
               
               <div class="relative pl-6 border-l-2 border-blue-200">
                  <div class="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                  <h5 class="font-bold text-gray-800 text-sm">2. Gatekeeper</h5>
                  <p class="text-xs text-gray-500 mt-1">Checks <code>has_been_prompted_event_id</code> and connectivity status.</p>
               </div>

               <div class="relative pl-6 border-l-2 border-blue-200">
                  <div class="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                  <h5 class="font-bold text-gray-800 text-sm">3. The Router</h5>
                  <p class="text-xs text-gray-500 mt-1">Displays custom modal: "Enjoying Expo Pass?"</p>
               </div>

               <div class="relative pl-6 border-l-2 border-green-200">
                   <div class="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-green-500"></div>
                   <h5 class="font-bold text-gray-800 text-sm">4. Outcome</h5>
                   <p class="text-xs text-gray-500 mt-1">
                     <span class="text-green-600 font-bold">YES:</span> Native OS Request.<br>
                     <span class="text-orange-600 font-bold">NO:</span> Jira Ticket Automation.
                   </p>
               </div>
            </div>
         </div>

         <!-- Right: Details -->
         <div class="p-8 md:w-2/3">
             
             <div class="mb-8">
               <h4 class="text-xl font-bold text-gray-900 mb-4">Key Decisions</h4>
               <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li class="bg-blue-50 p-4 rounded-lg">
                     <span class="block text-xs font-bold text-blue-500 uppercase">Scope</span>
                     <span class="text-sm text-gray-800 font-medium">Smart View (Attendee) & Lead Retrieval (Exhibitor)</span>
                  </li>
                  <li class="bg-blue-50 p-4 rounded-lg">
                     <span class="block text-xs font-bold text-blue-500 uppercase">UI Component</span>
                     <span class="text-sm text-gray-800 font-medium">Lightweight Bottom Sheet (Non-blocking)</span>
                  </li>
                  <li class="bg-blue-50 p-4 rounded-lg">
                     <span class="block text-xs font-bold text-blue-500 uppercase">Debounce</span>
                     <span class="text-sm text-gray-800 font-medium">10-second delay after trigger event</span>
                  </li>
                  <li class="bg-blue-50 p-4 rounded-lg">
                     <span class="block text-xs font-bold text-blue-500 uppercase">Integration</span>
                     <span class="text-sm text-gray-800 font-medium">Slack Webhook + Jira API</span>
                  </li>
               </ul>
             </div>

             <div class="p-4 bg-gray-900 text-white rounded-xl flex items-center gap-4">
                <svg class="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                <div>
                   <h5 class="font-bold text-sm">Zero-Config for Organizers</h5>
                   <p class="text-xs text-gray-300">This feature is "On by Default" for the platform. Organizers do not need to configure it.</p>
                </div>
             </div>

         </div>

      </div>
    </div>
  `
})
export class SlideImplementationDecisionComponent {}