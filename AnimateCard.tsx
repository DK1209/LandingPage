import { useInView } from 'react-intersection-observer';
import Card from './Card';

function AnimateCard({ title, images, content }: { title: string; images?: string[]; content: string }) {
    const [ref, inView] = useInView({
      triggerOnce: true, // Ensures animation happens only once
    });
  
    return (
      <div
        className={` ${
          inView ? 'animate-fadeInTop' : ''
        }`}
        ref={ref}
      >
        <Card title={title} images={images} content={content} />
      </div>
    );
  }
  
  export default AnimateCard;