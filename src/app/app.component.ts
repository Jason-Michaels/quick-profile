import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <div class="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
  <div class="sm:flex sm:items-center px-6 py-4">
    <img class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://avatars3.githubusercontent.com/u/8821908?s=460&v=4" alt="">
    <div class="text-center sm:text-left sm:flex-grow">
      <div class="mb-4">
        <p class="text-xl leading-tight">J. Michaels</p>
        <p class="text-sm leading-tight text-grey-dark">Web Solutions Architect</p>
      </div>
      <div>
        <button class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">Message</button>
      </div>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class AppComponent {
  title = 'quickProfile';
}
