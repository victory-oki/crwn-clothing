import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import CollectionPage from "../collection/collection.component";
import { selectCollections } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
const ShopPage = ({ match }) => {
  console.log(match.path);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

const matchStateToProps = createStructuredSelector({
  collections: selectCollections,
});
export default connect(matchStateToProps)(ShopPage);
