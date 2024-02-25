import react from "react";

function Card({ title, images, content } : { title: string; images?: string[]; content: string }) {
    return (
      <div className="p-4 flex-col rounded-md bg-[#FFFFFF30] w-full z-10"
      >
        <h2 className="sm:text-2xl text-xl">{title}</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-4">
            {images && images.length>0 &&(  images.slice(0, 4).map((image, index) => (
              <img
                key={index}
                className="mb-2 h-15 w-12"
                src={image}
                alt={`Slide ${index}`}
              />
            )))}
          </div>
          <div className="flex flex-wrap gap-4">
            {images && images.length>0 && (images.slice(4, 8).map((image, index) => (
              <img
                key={index}
                className="mb-2 h-15 w-12"
                src={image}
                alt={`Slide ${index}`}
              />
            )))}
          </div>
        </div>
        <p className="mt-3">{content}</p>
      </div>
    );
  }
  
  export default Card;