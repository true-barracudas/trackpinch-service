import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ColorPickerItem from './ColorPickerItem.jsx';

const ColorChooser = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
  padding-top: 0;
`;

const NumColors = styled.h5`
  display: block;
  width: 100px;
  min-width: 100px;
  max-width: 200px;
  margin-left: 44px;
  margin-bottom: 12px;
  margin-right: 12px;
  padding: 0;
  text-align: right;
  font-size: 14px;
  text-transform: none;
  letter-spacing: 0;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-weight: 700;
  line-height: 15px;
`;

const Variations = styled.div`
  display: flex;
  max-width: 100%;
  position: relative;
`;

// const Left = styled.div`
//   background: linear-gradient(90deg,#fff,hsla(0,0%,100%,0));
//   left: 0;
//   opacity: 0;
//   position: absolute;
//   pointer-events: none;
//   height: calc(100% + 10px);
//   width: 60px;
//   z-index: 1;
//   top: -10px;
//   transition: opacity .3s ease;
// `;

// const Right = styled.div`
//   background: linear-gradient(90deg,hsla(0,0%,100%,0),#fff);
//   right: 0;
//   opacity: 0;
//   position: absolute;
//   pointer-events: none;
//   height: calc(100% + 10px);
//   width: 60px;
//   z-index: 1;
//   top: -10px;
//   transition: opacity .3s ease;
// `;

const Slider = styled.div`
  display: inline-flex;
  flex-direction: row;
  height: 100%;
  transform: translate3d(0px, 0px, 1px);
  transition: transform .4s ease;
`;

const ColorPicker = function ColorPicker({ currentVariant, variants, method }) {
  const changeVariant = function changeVariant(newVariant) {
    method(newVariant);
  };

  return (
  <ColorChooser>
    <NumColors>
      {variants.length === 1 ? '1 Color' : `${variants.length} Colors`} Available
    </NumColors>
    <Variations>
      {/* <Left></Left>
      <Right></Right> */}
      <Slider>
        {variants.map((variant, index) => <ColorPickerItem
          image={variant.images[0]}
          key={index} index ={index}
          method={changeVariant}
          currentVariant={currentVariant}/>)}
      </Slider>
    </Variations>
  </ColorChooser>
  );
};

ColorPicker.propTypes = {
  variants: PropTypes.array,
  method: PropTypes.func,
  currentVariant: PropTypes.number,
};

export default ColorPicker;
