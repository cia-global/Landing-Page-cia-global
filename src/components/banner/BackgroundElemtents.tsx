
const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      <div 
        className="absolute top-10 left-10 w-64 h-64 bg-white opacity-5 rounded-full animate-bounce" 
        style={{animationDuration: '3s'}}
      />
      <div 
        className="absolute bottom-20 right-10 w-80 h-80 bg-white opacity-5 rounded-full animate-bounce" 
        style={{animationDuration: '6s'}}
      />
    </div>
  );
};

export default BackgroundElements;