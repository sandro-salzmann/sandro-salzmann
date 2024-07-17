import ImageGallery from "react-image-gallery";
import { PROJECTS } from "../assets/projects";

export default function Index() {
  return (
    <div className="container space-y-16">
      {PROJECTS.map(({ title, description, chips, imageUrls, repositoryUrl, demoUrl }) => {
        return (
          <div key={title} className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 flex-row">
            <div className="space-y-4">
              <h4 className="flex space-x-4 justify-between items-center">
                <span className="text-2xl font-semibold">{title}</span>
                <div className="space-x-3">
                  {repositoryUrl && (
                    <a
                      href={repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-blue"
                    >
                      Repository
                    </a>
                  )}
                  {demoUrl && (
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-blue"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </h4>
              <p>{description}</p>
              <div className="flex gap-3 flex-wrap font-thin">
                {chips.map(({ label, icon }) => (
                  <div key={label} className="flex gap-1 items-center">
                    <span className="material-symbols-rounded thin">{icon}</span>
                    {label}
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <ImageGallery items={imageUrls} useBrowserFullscreen={false} showPlayButton={false} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
