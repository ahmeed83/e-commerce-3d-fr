import React from 'react';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import Hero from 'components/hero/TwoColumnWithVideo.js';
import TabGrid from 'components/cards/TabCardGrid.js';
import Testimonial from 'components/testimonials/ThreeColumnWithProfileImage.js';

import pic from '../images/3d/3d-blue-yellow.jpg';

export default () => {
  const HighlightedText = tw.span`bg-blue-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const imageCss = tw`rounded-4xl`;

  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            <HighlightedText>3D Electroinics Ahmed</HighlightedText>
          </>
        }
        // description={name}
        description=""
        imageSrc={pic}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Order Now"
        watchVideoButtonText="Meet The Chefs"
      />
      <TabGrid />
      <Testimonial
        subheading=""
        heading={
          <>
            بنا <HighlightedText>أتصل</HighlightedText>
          </>
        }
      />
    </AnimationRevealPage>
  );
};
