import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AssetPickerComponent } from '../asset-picker/asset-picker.component';
import { CarouselSlide } from 'src/app/models/CarouselSlide.interface';
import { v4 as guid } from 'uuid';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'cms-carousel-editor',
  templateUrl: './carousel-editor.component.html',
  styleUrls: ['./carousel-editor.component.scss']
})
export class CarouselEditorComponent implements OnInit {
  slideEditForm: FormGroup;
  carouselSettingsForm: FormGroup;
  selectedSlide: CarouselSlide;
  subs = new Subscription();
  CAROUSEL_SLIDES = 'CAROUSEL_SLIDES'

  slides: CarouselSlide[] = [];
  carouselSettings = {
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 1,
    autoplay: true,
    infinite: true,
    dots: true,
    arrows: true,
    centerMode: false,
    fade: true
  };
  constructor(
    public modal: NgbActiveModal, 
    private modalService: NgbModal, 
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.carouselSettingsForm = this.formBuilder.group(this.carouselSettings)
    this.slideEditForm = this.formBuilder.group({Heading: '', Subheading: '', ActionText: '', ActionUrl: ''})
    this.onSlideEditFormChanges();
    this.onCarouselSettingsFormChanges();
  }

  onSlideEditFormChanges() {
    this.slideEditForm.valueChanges.subscribe(formValues => {
      const index = this.getSlideIndex(this.selectedSlide)
      this.slides[index] = {...this.selectedSlide, ...formValues}
    })
  }

  onCarouselSettingsFormChanges() {
    this.carouselSettingsForm.valueChanges.subscribe(formValues => {
      this.carouselSettings = formValues;
    })
  }

  addCarousel() {
    const html = this.buildCarouselHtml();
    console.log(html);
  }

  buildCarouselHtml() {
    const carouselClassName = `oc-carousel-${guid()}`;
    return `
    <div class="${carouselClassName}">
      ${this.slides.map(slide => {
        return `
        <div class="c-slide-container">
          <img src=${slide.ImageUrl} title=${slide.ImageTitle}></img>
          ${slide.Heading ? `<h1>${slide.Heading}</h1>` : ``}
          ${slide.Subheading ? `<h2>${slide.Heading}</h2>` : ``}
          ${slide.ActionUrl && slide.ActionText ? `<a href="${slide.ActionUrl}">${slide.ActionText}</a>` : ``}
        </div>
        `
      }).join('')}
    </div>
    <script>
      $('.${carouselClassName}').slick(${JSON.stringify(this.carouselSettings)})
    </script>
    `
  }

  deleteSlide(slide: CarouselSlide) {
    this.slides = this.slides.filter(s => s.ID !== slide.ID)
    if(this.isSelected(slide)) {
      delete this.selectedSlide;
      if(this.slides.length) {
        this.selectedSlide = this.slides[this.slides.length - 1];
      }
    }
  }

  openAssetPicker() {
    const modalRef = this.modalService.open(AssetPickerComponent, { size: 'xl' });
    modalRef.result.then(asset => {
      const slide = {
        ID: guid(),
        ImageTitle: asset.Title,
        ImageUrl: asset.Url
      };
      this.slides.unshift(slide);
      this.selectSlide(slide);
    })
  }

  openProductPicker() {
    console.log('Product picker clicked');
  }

  getSlideIndex(slide: CarouselSlide) {
    return this.slides.map(a => a.ID).indexOf(slide.ID);
  }

  isSelected(slide: CarouselSlide) {
    if(!slide) {
      return false;
    }
    if(!this.selectedSlide) {
      return false;
    }
    return this.selectedSlide.ID === slide.ID;
  }

  selectSlide(slide: CarouselSlide) {
    this.selectedSlide = slide;
    this.slideEditForm.controls['Heading'].setValue(slide.Heading)
    this.slideEditForm.controls['Subheading'].setValue(slide.Subheading)
    this.slideEditForm.controls['ActionText'].setValue(slide.ActionText)
    this.slideEditForm.controls['ActionUrl'].setValue(slide.ActionUrl)
  }

}
