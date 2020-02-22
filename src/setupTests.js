import Enzyme from 'enzyme';
import EnzymeAdapter from 'jest-enzyme';
import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true,
});
