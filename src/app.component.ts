import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationService } from './services/presentation.service';
import { NavBarComponent } from './components/ui/nav-bar.component';
import { LogoComponent } from './components/ui/logo.component';
import { SlideTitleComponent } from './components/slides/slide-title.component';
import { SlideImportanceComponent } from './components/slides/slide-importance.component';
import { SlideMentalModelComponent } from './components/slides/slide-mental-model.component';
import { SlideUxPhilosophyComponent } from './components/slides/slide-ux-philosophy.component';
import { SlideFeatureDefinitionComponent } from './components/slides/slide-feature-definition.component';
import { SlidePlatformConstraintsComponent } from './components/slides/slide-platform-constraints.component';
import { SlideTriggersComponent } from './components/slides/slide-triggers.component';
import { SlideAvoidTriggersComponent } from './components/slides/slide-avoid-triggers.component';
import { SlideSuppressionLogicComponent } from './components/slides/slide-suppression-logic.component';
import { SlideUserFlowComponent } from './components/slides/slide-user-flow.component';
import { SlidePositiveSentimentComponent } from './components/slides/slide-positive-sentiment.component';
import { SlideNegativeSentimentComponent } from './components/slides/slide-negative-sentiment.component';
import { SlidePrePromptModalComponent } from './components/slides/slide-pre-prompt-modal.component';
import { SlideEdgeCasesComponent } from './components/slides/slide-edge-cases.component';
import { SlideSuccessMetricsComponent } from './components/slides/slide-success-metrics.component';
import { SlideFinalRecommendationComponent } from './components/slides/slide-final-recommendation.component';
import { SlideNextStepsComponent } from './components/slides/slide-next-steps.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    LogoComponent,
    SlideTitleComponent,
    SlideImportanceComponent,
    SlideMentalModelComponent,
    SlideUxPhilosophyComponent,
    SlideFeatureDefinitionComponent,
    SlidePlatformConstraintsComponent,
    SlideTriggersComponent,
    SlideAvoidTriggersComponent,
    SlideSuppressionLogicComponent,
    SlideUserFlowComponent,
    SlidePositiveSentimentComponent,
    SlideNegativeSentimentComponent,
    SlidePrePromptModalComponent,
    SlideEdgeCasesComponent,
    SlideSuccessMetricsComponent,
    SlideFinalRecommendationComponent,
    SlideNextStepsComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  presentation = inject(PresentationService);
}