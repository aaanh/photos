import DefaultWrapperLayout from "../layouts/DefaultWrapperLayout";
import SEO from "../components/SEO";

const AboutPage = () => {
  return (
    <DefaultWrapperLayout>
      <SEO
        title="About | Anh's Photography"
        description="What's going on?"
      ></SEO>
      <div className="p-4 flex w-screen justify-center flex-col items-center">
        <div className="flex flex-col my-2 space-y-2">
          <h1 className="text-4xl">About This Site</h1>
          <h2 className="text-2xl">Technical</h2>
          <ul className="font-mono">
            <li>Built with NextJS</li>
            <li>Asset storage with Cloudinary</li>
            <li>Custom Database and API query</li>
            <li>Hosted on Vercel</li>
            <li>DNS and CDN with Cloudflare</li>
            <li>
              Source code:{" "}
              <a
                className="underline underline-offset-2 hover:font-semibold"
                href="https://github.com/aaanh/my-photo-reel"
              >
                Github
              </a>
            </li>
          </ul>
          <h2 className="text-2xl">Gears</h2>
          <ul className="font-mono">
            <li>A Cam: Nikon D700</li>
            <li>B Cam: Nikon D7000</li>
            <li>C Cam: Sony ZV-E10</li>
            <li>Lenses:</li>
            <ul>
              <li>Sigma Art 24-70mm f/2.8 DG DN for Sony</li>
              <li>Nikkor 50mm f/1.8</li>
              <li>Nikkor 35mm f/1.8</li>
              <li>Nikkor 24-85mm f/3.5-4.5 VR</li>
              <li>Nikkor 70-300mm f/4.5-5.6</li>
              <li>Nikkor 28-70mm f/2.8 ED</li>
            </ul>
            <li>Flash: Nikon Speedlight SB-300</li>
          </ul>
          <h2 className="text-2xl">Workflow</h2>
          <ul className="font-mono">
            <li>Lightroom Classic</li>
            <li>Photoshop</li>
            <li>Premiere Pro</li>
            <li>Affinity Photo 2</li>
            <li>Final Cut Pro (Mac)</li>
          </ul>
        </div>
      </div>
    </DefaultWrapperLayout>
  );
};

export default AboutPage;
