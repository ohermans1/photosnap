import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './home/content/content.component';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { FeaturesGroupComponent } from './shared/features-group/features-group.component';
import { BannerComponent } from './stories/banner/banner.component';
import { ImageCardComponent } from './shared/image-card/image-card.component';
import { TopBannerComponent } from './shared/UI/top-banner/top-banner.component';
import { PriceModalComponent } from './pricing/price-modal/price-modal.component';
import { FeatureListComponent } from './pricing/feature-list/feature-list.component';
import { FeatureComponent } from './shared/features-group/feature/feature.component';
import { HeaderComponent } from './shared/UI/header/header.component';
import { FooterComponent } from './shared/UI/footer/footer.component';
import { BottomBannerComponent } from './shared/UI/bottom-banner/bottom-banner.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';
import { PricingComponent } from './pricing/pricing.component';
import { RouterModule } from '@angular/router';
import { IndividualStoryComponent } from './stories/individual-story/individual-story.component';
import { ImagesService } from './shared/images.service';
import { Router } from '@angular/router';
import { StoriesGroupComponent } from './stories/stories-group/stories-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    GalleryComponent,
    FeaturesGroupComponent,
    FooterComponent,
    BannerComponent,
    ImageCardComponent,
    TopBannerComponent,
    FeatureComponent,
    BottomBannerComponent,
    PriceModalComponent,
    FeatureListComponent,
    FeaturesComponent,
    HomeComponent,
    StoriesComponent,
    PricingComponent,
    IndividualStoryComponent,
    StoriesGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'stories', component: StoriesComponent },
      { path: 'features', component: FeaturesComponent },
      { path: 'pricing', component: PricingComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  dynamicRouterModules: Object[] = [
    { path: '', component: HomeComponent },
    { path: 'stories', component: StoriesComponent },
    { path: 'features', component: FeaturesComponent },
    { path: 'pricing', component: PricingComponent },
  ];

  constructor(private imageService: ImagesService, private router: Router) {
    this.imageService.galleryItems.forEach((element) => {
      this.dynamicRouterModules.push({
        path: element.routerURL,
        component: IndividualStoryComponent,
      });
    });
    this.router.resetConfig(this.dynamicRouterModules);
  }
}
