import checkPropTypes from 'check-prop-types';


export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const propTypesCheck = (component, props) => {
  const result = checkPropTypes(component.propTypes, props, 'props', component.name);
  return result;
};