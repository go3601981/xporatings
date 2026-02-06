import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-title',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-5xl mx-auto px-6">
      <div class="inline-flex items-center gap-2 mb-8">
        <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-[12px] font-medium tracking-wide uppercase">
          Draft
        </span>
      </div>
      
      <h1 class="text-4xl md:text-6xl font-bold text-[#1F2937] leading-tight tracking-tight mb-8">
        [Presentation Title]<br/>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#3B5BDB] to-[#4C6EF5]">[Subtitle]</span>
      </h1>
      
      <div class="border-l-4 border-[#3B5BDB] pl-6 mb-16">
        <p class="text-xl md:text-2xl text-[#6B7280] max-w-3xl leading-relaxed font-light">
          Waiting for content...
        </p>
      </div>

      <div class="text-sm text-[#9CA3AF]">
        <p class="font-medium text-[#374151]">[Presenter Name]</p>
        <p>[Date]</p>
      </div>
    </div>
  `
})
export class SlideTitleComponent {}