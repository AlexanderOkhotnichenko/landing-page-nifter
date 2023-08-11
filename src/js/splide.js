import { Splide } from '@splidejs/splide';
import { Grid } from '@splidejs/splide-extension-grid';

function splide() {
  new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    arrows: false,
    pagination: false,
    gap: '3.438rem',
    grid: {
      dimensions: [ [ 2, 1 ], [ 2, 1 ], [ 2, 1 ], [ 2, 1 ], [ 2, 1 ], [ 2, 1 ] ],
      gap: {
        row: '3.75em',
      }
    },
    breakpoints: {
      1045: {
        perPage: 2,
      },
      790: {
        perPage: 2,
        gap: '1.25rem',
        grid: {
          gap: {
            row: '1.25rem',
          }
        },
      },
      640: {
        perPage: 1.5,
      },
      485: {
        perPage: 1,
      },
    },
  }).mount( { Grid } );
}

splide();