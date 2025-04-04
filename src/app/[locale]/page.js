import { Fragment } from 'react';
import Homelayout from './Home/page';
import DiscoverLayout from './Discover/page';

export default function page() {
 return (
  <Fragment>
         <Homelayout />
         <DiscoverLayout/>
  </Fragment>
 );
}
