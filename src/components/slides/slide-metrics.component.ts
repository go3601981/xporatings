import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-metrics',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Hardware Realities</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Physical Constraints Drive Design Decisions</h3>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <!-- Visuals -->
        <div class="bg-gray-50 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[400px] border border-gray-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] relative overflow-hidden">
          
          <!-- Grid Background -->
          <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(#1F2937 1px, transparent 1px), linear-gradient(90deg, #1F2937 1px, transparent 1px); background-size: 20px 20px;"></div>

          <div class="flex flex-col md:flex-row items-end justify-center gap-12 z-10 w-full mb-8">
            
            <!-- 4x6 Badge -->
            <div class="flex flex-col items-center gap-4">
              <div class="relative bg-white shadow-md border border-gray-300" style="width: 200px; height: 300px;">
                <!-- Full Trim Line is the border of the div -->
                
                <!-- Safe Area (Approx 3.75x5.34 inside 4x6) -->
                <!-- Width: 93.75%, Height: 89% -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-blue-300 bg-blue-50/20 flex flex-col"
                     style="width: 93.75%; height: 89%;">
                     
                     <div class="absolute -top-6 left-0 w-full text-center">
                        <span class="text-blue-500 text-[10px] font-bold uppercase tracking-wider bg-white px-1">Safe Print Area</span>
                     </div>

                     <!-- Content Placeholder -->
                     <div class="flex-1 m-2 bg-gray-100 rounded flex items-center justify-center border border-gray-200 text-center p-4">
                       <span class="text-gray-500 text-xs font-medium">
                         • 4″ × 6″ safe area:<br>approximately 3.75″ × 5.34″
                       </span>
                     </div>
                </div>
              </div>
              <span class="text-sm font-bold text-gray-700">4" × 6" Standard</span>
            </div>

            <!-- 4x3 Badge -->
            <div class="flex flex-col items-center gap-4">
              <div class="relative bg-white shadow-md border border-gray-300" style="width: 200px; height: 150px;">
                
                <!-- Safe Area (Approx 3.75x2.34 inside 4x3) -->
                <!-- Width: 93.75%, Height: 78% -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-blue-300 bg-blue-50/20 flex flex-col"
                     style="width: 93.75%; height: 78%;">
                     
                     <div class="absolute -top-6 left-0 w-full text-center">
                        <span class="text-blue-500 text-[10px] font-bold uppercase tracking-wider bg-white px-1">Safe Print Area</span>
                     </div>

                     <!-- Content Placeholder -->
                     <div class="flex-1 m-2 bg-gray-100 rounded flex items-center justify-center border border-gray-200 text-center p-2">
                       <span class="text-gray-500 text-xs font-medium leading-tight">
                         • 4″ × 3″ safe area:<br>approximately 3.75″ × 2.34″
                       </span>
                     </div>
                </div>
              </div>
              <span class="text-sm font-bold text-gray-700">4" × 3" Compact</span>
            </div>

          </div>

          <!-- Caption -->
          <p class="text-sm text-gray-500 italic text-center z-10 max-w-md">
            Design decisions are driven by safe print area and legibility, not by total badge size.
          </p>

        </div>

        <!-- Principles -->
        <div class="space-y-8">
          
          <div class="flex gap-4">
             <div class="w-12 h-12 shrink-0 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#3B5BDB] font-bold text-lg border border-[#DBEAFE]">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
             </div>
             <div>
               <h4 class="text-xl font-bold text-[#1F2937] mb-2">Safe Print Areas</h4>
               <p class="text-[#6B7280] leading-relaxed text-sm">
                 Hardware variances require a 0.25" safety margin. Slot punches consume the top 1.0". This leaves a fragmented canvas that cannot support full-bleed designs or edge-to-edge content.
               </p>
             </div>
          </div>

          <div class="flex gap-4">
             <div class="w-12 h-12 shrink-0 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#3B5BDB] font-bold text-lg border border-[#DBEAFE]">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
             </div>
             <div>
               <h4 class="text-xl font-bold text-[#1F2937] mb-2">Vertical Scarcity</h4>
               <p class="text-[#6B7280] leading-relaxed text-sm">
                 Vertical space is the primary limiting factor. On a 4×3 badge, after attendee data, we often have less than 1.5 inches for variable content. We run out of height before width.
               </p>
             </div>
          </div>

          <div class="flex gap-4">
             <div class="w-12 h-12 shrink-0 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#3B5BDB] font-bold text-lg border border-[#DBEAFE]">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
             </div>
             <div>
               <h4 class="text-xl font-bold text-[#1F2937] mb-2">Width Does Not Solve Density</h4>
               <p class="text-[#6B7280] leading-relaxed text-sm">
                 Wider badges do not allow for smaller fonts. Legibility (10pt+ floor) limits line count regardless of line width. We cannot simply "squeeze" more sessions horizontally.
               </p>
             </div>
          </div>

        </div>

      </div>
    </div>
  `
})
export class SlideMetricsComponent {}