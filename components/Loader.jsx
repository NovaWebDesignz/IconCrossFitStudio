export default function Loader() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black dark:bg-black transition-opacity duration-500">
        <img 
          src="/images/LoaderGif.gif" 
          alt="Loading..." 
          className="w-56 h-56 object-contain"
        />
      </div>
    );
  }
  