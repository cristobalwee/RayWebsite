const CompletionOverlay = () => {
  return (
    <div className="mx-auto my-10 md:my-16 text-center">
      <div className="bg-[#1A1A1A] rounded-[24px] p-8 md:p-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          Start your daily reading habit
        </h3>
        <p className="text-xl text-muted-foreground mb-6 leading-tight">
          Download Ray to unlock 1,000+ more timeless classics
          <span className="hidden md:inline">
            {" "}
            - one recommendation delivered daily, no subscription required.
          </span>
        </p>
        <a
          href="https://apps.apple.com/us/app/ray-one-reading-a-day/id6747955197"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-primary text-lg w-full md:w-auto">
            Get the App
          </button>
        </a>
      </div>
    </div>
  );
};

export default CompletionOverlay;
