import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-edge-cases',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-[#EF4444] font-semibold uppercase tracking-wider text-sm mb-3">Resilience Engineering</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Edge Cases & Guardrails</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          The system protects the user experience above all else.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        
        <!-- Guardrail 1 -->
        <div class="bg-white p-6 rounded-xl border-l-4 border-gray-800 shadow-sm flex flex-col h-full">
           <div class="flex items-center gap-3 mb-2">
             <div class="p-1.5 bg-gray-100 rounded text-gray-800 font-bold">1</div>
             <h4 class="font-bold text-lg text-gray-900">OS Prompt Suppressed</h4>
           </div>
           <p class="text-sm text-gray-600 mb-3">
             Apple/Google block the prompt (quota limit).
           </p>
           <div class="bg-gray-50 p-3 rounded text-xs font-mono text-gray-700 border border-gray-200">
             <strong>Reaction:</strong> Count as "Success". Apply One-Shot rule. Do not retry during this event.
           </div>
        </div>

        <!-- Guardrail 2 -->
        <div class="bg-white p-6 rounded-xl border-l-4 border-gray-800 shadow-sm flex flex-col h-full">
           <div class="flex items-center gap-3 mb-2">
             <div class="p-1.5 bg-gray-100 rounded text-gray-800 font-bold">2</div>
             <h4 class="font-bold text-lg text-gray-900">Network Loss</h4>
           </div>
           <p class="text-sm text-gray-600 mb-3">
             User tries to submit feedback while offline (common at events).
           </p>
           <div class="bg-gray-50 p-3 rounded text-xs font-mono text-gray-700 border border-gray-200">
             <strong>Reaction:</strong> Fail Silently. Do not show error. Cache if possible, otherwise drop.
           </div>
        </div>

        <!-- Guardrail 3 -->
        <div class="bg-white p-6 rounded-xl border-l-4 border-gray-800 shadow-sm flex flex-col h-full">
           <div class="flex items-center gap-3 mb-2">
             <div class="p-1.5 bg-gray-100 rounded text-gray-800 font-bold">3</div>
             <h4 class="font-bold text-lg text-gray-900">Rapid Fire Triggers</h4>
           </div>
           <p class="text-sm text-gray-600 mb-3">
             User completes 3 scans in 10 seconds.
           </p>
           <div class="bg-gray-50 p-3 rounded text-xs font-mono text-gray-700 border border-gray-200">
             <strong>Reaction:</strong> Debounce. Only fire on the first valid trigger. Ignore subsequent ones.
           </div>
        </div>

        <!-- Guardrail 4 -->
        <div class="bg-white p-6 rounded-xl border-l-4 border-gray-800 shadow-sm flex flex-col h-full">
           <div class="flex items-center gap-3 mb-2">
             <div class="p-1.5 bg-gray-100 rounded text-gray-800 font-bold">4</div>
             <h4 class="font-bold text-lg text-gray-900">Critical Workflow</h4>
           </div>
           <p class="text-sm text-gray-600 mb-3">
             User is typing a chat message or navigating the map.
           </p>
           <div class="bg-gray-50 p-3 rounded text-xs font-mono text-gray-700 border border-gray-200">
             <strong>Reaction:</strong> Hard Block. Never interrupt active input or navigation.
           </div>
        </div>

      </div>

      <!-- Logging -->
      <div class="bg-[#1E293B] text-gray-300 rounded-xl p-6 font-mono text-xs shadow-inner">
         <div class="flex justify-between items-center mb-2">
            <span class="text-green-400 font-bold uppercase">Internal Logging</span>
         </div>
         <p class="mb-1">> Log: TRIGGER_FIRED {{ '{' }} trigger: 'chat_engagement', outcome: 'shown' {{ '}' }}</p>
         <p class="mb-1">> Log: PROMPT_DISMISSED {{ '{' }} event_id: '123' {{ '}' }}</p>
         <p class="text-gray-500">> ...Suppression applied for Event 123.</p>
      </div>

    </div>
  `
})
export class SlideEdgeCasesComponent {}