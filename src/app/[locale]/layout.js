import Footer from '@/shared/components/Footer';
import Navbar from '@/shared/components/Navbar';

export default function LocaleLayout({children}) {
 return (
  <div className="max-w-6xl mx-auto text-center">
   <Navbar />
   {children}
   <Footer />
  </div>
 );
}
