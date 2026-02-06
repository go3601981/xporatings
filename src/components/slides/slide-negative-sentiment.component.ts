import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-negative-sentiment',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-[#EA580C] font-semibold uppercase tracking-wider text-sm mb-3">The Constructive Path</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">NO Path: Feedback Capture</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          When the user signals dissatisfaction, we pivot from "Growth" to "Retention." We protect the public rating while capturing valuable internal data.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <!-- Timeline Flow -->
        <div class="relative space-y-8 pl-8 before:absolute before:inset-0 before:ml-3.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#EA580C] before:via-[#EA580C] before:to-transparent">

          <!-- Step 1 -->
          <div class="relative group">
             <div class="absolute -left-12 mt-1.5 w-8 h-8 rounded-full bg-orange-100 border-2 border-[#EA580C] flex items-center justify-center text-[#EA580C] font-bold text-sm shadow-sm z-10">1</div>
             <div class="bg-white p-5 rounded-xl border border-orange-100 shadow-sm group-hover:border-orange-300 transition-colors">
               <h4 class="font-bold text-gray-900 mb-1">User Taps "No"</h4>
               <p class="text-sm text-gray-600">The Pre-Gate question ("Enjoying ExpoPass?") is answered negatively.</p>
             </div>
          </div>

          <!-- Step 2 -->
          <div class="relative group">
             <div class="absolute -left-12 mt-1.5 w-8 h-8 rounded-full bg-orange-100 border-2 border-[#EA580C] flex items-center justify-center text-[#EA580C] font-bold text-sm shadow-sm z-10">2</div>
             <div class="bg-white p-5 rounded-xl border border-orange-100 shadow-sm group-hover:border-orange-300 transition-colors">
               <h4 class="font-bold text-gray-900 mb-1">Internal Feedback Form</h4>
               <p class="text-sm text-gray-600">We immediately present a native input field: "We're sorry to hear that. How can we improve?"</p>
             </div>
          </div>

          <!-- Step 3 -->
          <div class="relative group">
             <div class="absolute -left-12 mt-1.5 w-8 h-8 rounded-full bg-indigo-100 border-2 border-indigo-500 flex items-center justify-center text-indigo-600 font-bold text-sm shadow-sm z-10">3</div>
             <div class="bg-white p-5 rounded-xl border border-indigo-100 shadow-sm group-hover:border-indigo-300 transition-colors">
               <h4 class="font-bold text-gray-900 mb-1">Contextual Data Capture</h4>
               <p class="text-sm text-gray-600">Feedback is tagged with OS version, Event ID, and Session ID for debugging.</p>
             </div>
          </div>

          <!-- Step 4 -->
          <div class="relative group">
             <div class="absolute -left-12 mt-1.5 w-8 h-8 rounded-full bg-gray-100 border-2 border-gray-400 flex items-center justify-center text-gray-600 font-bold text-sm shadow-sm z-10">4</div>
             <div class="bg-gray-50 p-5 rounded-xl border border-dashed border-gray-300 shadow-inner">
               <div class="flex items-center justify-between mb-1">
                 <h4 class="font-bold text-gray-700">The Firewall</h4>
                 <span class="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded uppercase font-bold border border-red-200">Critical</span>
               </div>
               <p class="text-sm text-gray-500">The user is <strong>never</strong> routed to the App Store. The flow ends here with a "Thank You."</p>
             </div>
          </div>

        </div>

        <!-- Insight & Data Payload -->
        <div class="space-y-6">
          
          <div class="bg-white rounded-2xl p-8 border-t-4 border-[#EA580C] shadow-lg">
             <div class="flex items-center gap-4 mb-4">
               <div class="p-3 bg-orange-50 rounded-full text-[#EA580C]">
                  <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
               </div>
               <h4 class="text-2xl font-bold text-gray-900">Gaining Insight</h4>
             </div>
             <p class="text-gray-600 text-lg leading-relaxed mb-6">
               We turn a potential 1-star public review into an actionable ticket.
               <strong class="text-[#EA580C]">Feedback flows directly to Slack channel #app-feedback and creates a Jira ticket with 'Low' priority.</strong>
             </p>
          </div>

          <!-- Code Snippet / Data Structure -->
          <div class="bg-[#1E293B] text-gray-300 rounded-xl p-6 font-mono text-xs md:text-sm shadow-inner overflow-hidden relative">
            <div class="absolute top-0 right-0 p-2 text-gray-500 font-sans text-xs uppercase font-bold tracking-widest">Payload Example</div>
            <pre class="leading-relaxed"><span class="text-purple-400">const</span> feedbackPayload = &#123;
  <span class="text-blue-400">userSentiment</span>: <span class="text-green-400">"negative"</span>,
  <span class="text-blue-400">message</span>: <span class="text-green-400">"The map keeps crashing."</span>,
  <span class="text-blue-400">routing</span>: <span class="text-green-400">"slack-alerts"</span>, // <span class="text-gray-500">// Direct to ops team</span>
  <span class="text-blue-400">context</span>: &#123;
    <span class="text-blue-400">eventId</span>: <span class="text-green-400">"CES_2026"</span>,
    <span class="text-blue-400">platform</span>: <span class="text-green-400">"iOS 19.1"</span>
  &#125;
&#125;;</pre>
          </div>

          <div class="flex items-center gap-4 text-sm text-gray-500 italic">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            This operationalizes feedback instantly.
          </div>

        </div>

      </div>
    </div>
  `
})
export class SlideNegativeSentimentComponent {}