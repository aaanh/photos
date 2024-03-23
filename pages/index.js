import Gallery from "../components/Gallery";
import DefaultWrapperLayout from "../layouts/DefaultWrapperLayout";
import SEO from "../components/SEO";

const HomePage = () => {
  const years = ["2024", "2023", "2022", "2020", "2019"];

  return (
    <DefaultWrapperLayout>
      <SEO title="Anh's Photography" description="Anh's My Photo Reels"></SEO>
      {years.map((year, idx) => (
        <Gallery key={idx} url={"/api/images/" + year} year={year}></Gallery>
      ))}
    </DefaultWrapperLayout>
  );
};

export default HomePage;
