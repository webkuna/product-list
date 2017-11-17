import Modal from './Modal';
import * as actions from './actions';
import { connect } from 'react-redux';

const mapStateToProps = (state: StoreState): { products: Array<Product> } => ({
  selectedProduct: state.selectedProduct
});

const mapDispatchToProps = {
  ...actions
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
