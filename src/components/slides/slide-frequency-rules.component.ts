import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-frequency-rules',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">The Ruleset</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Prompt Frequency Rules</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          Defining the exact conditions under which we engage.
        </p>
      </div>

      <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
         
         <!-- Table Header -->
         <div class="grid grid-cols-12 bg-gray-50 border-b border-gray-200 p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
            <div class="col-span-3">Condition</div>
            <div class="col-span-6">Rule</div>
            <div class="col-span-3">Outcome</div>
         </div>

         <!-- Row 1 -->
         <div class="grid grid-cols-12 p-6 border-b border-gray-100 items-center hover:bg-gray-50/50 transition-colors">
            <div class="col-span-3 font-bold text-gray-900">Default Frequency</div>
            <div class="col-span-6 text-gray-600 text-sm">User attends a single event (1-3 days).</div>
            <div class="col-span-3">
               <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                 1 Prompt Max
               </span>
            </div>
         </div>

         <!-- Row 2 -->
         <div class="grid grid-cols-12 p-6 border-b border-gray-100 items-center hover:bg-gray-50/50 transition-colors">
            <div class="col-span-3 font-bold text-gray-900">Dismissal</div>
            <div class="col-span-6 text-gray-600 text-sm">User taps "Close" or "Not Now" on the pre-prompt.</div>
            <div class="col-span-3">
               <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                 Stop for Event
               </span>
            </div>
         </div>

         <!-- Row 3 -->
         <div class="grid grid-cols-12 p-6 border-b border-gray-100 items-center hover:bg-gray-50/50 transition-colors">
            <div class="col-span-3 font-bold text-gray-900">Return User</div>
            <div class="col-span-6 text-gray-600 text-sm">User attends a <em>different</em> event 2 months later.</div>
            <div class="col-span-3">
               <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                 Eligible Again
               </span>
            </div>
         </div>

         <!-- Row 4 -->
         <div class="grid grid-cols-12 p-6 items-center hover:bg-gray-50/50 transition-colors">
            <div class="col-span-3 font-bold text-gray-900">Spam Prevention</div>
            <div class="col-span-6 text-gray-600 text-sm">User hits multiple triggers in one day (e.g., 5 chats).</div>
            <div class="col-span-3">
               <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                 Debounce (Only 1st)
               </span>
            </div>
         </div>

      </div>

      <!-- Emphasis -->
      <div class="mt-8 flex gap-6">
         <div class="w-1.5 bg-[#3B5BDB] rounded-full"></div>
         <div>
            <h4 class="text-lg font-bold text-[#1F2937]">Why no "Daily" prompts?</h4>
            <p class="text-gray-600 mt-1 max-w-2xl">
               In a 2-day event, asking "Are you enjoying this?" every day feels like nagging. We respect the user's focus. If we didn't get them on the first strong trigger, we likely won't get them on the second.
            </p>
         </div>
      </div>

    </div>
  `
})
export class SlideFrequencyRulesComponent {}