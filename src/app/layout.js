import { Figtree } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300','400', '500', '600', '700', '800', '900'],
  variable: '--body-color-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'Adverse Media - Technology & It Solution',
    template: '%s | Adverse Media - Technology & It Solution',
  },
  description: 'Adverse Media - Technology & It Solution',
  openGraph: {
    title: 'Adverse Media - Technology & It Solution',
    description: 'Adverse Media - Technology & It Solution',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${figtree.variable}`}>
        {children}
      </body>
    </html>
  );
}
