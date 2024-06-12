import SectionTitle from "./SectionTitle";
import axios from "axios";

async function getDataTeams() {
  try {
    const response = await axios.get(
      "https://randomuser.me/api/?results=10&nat=gb"
    );
    return response.data.results;
  } catch (error) {
    return error.message;
  }
}

export default async function Teams() {
  const teamMembers = await getDataTeams();

  return (
    <section className="p-4 px-14">
      <SectionTitle
        title="Meet The Teams Behind"
        subTitle="Our Team"
        description="DriveEase Rentals is led by a team of dedicated professionals with a passion for excellence and customer service."
      />

      <div className="mx-auto mt-12 grid grid-cols-2 content-center justify-items-center gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-5">
        {teamMembers.map((teamMember) => (
          <div
            key={teamMember.login.uuid}
            className="mx-auto flex min-h-[250px] w-full cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg p-2 transition-all hover:scale-105 hover:bg-white hover:shadow-lg">
            <picture>
              <source
                srcSet={teamMember.picture.large}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={teamMember.picture.medium}
                media="(min-width: 768px)"
              />
              <img
                src={teamMember.picture.thumbnail}
                alt={`${teamMember.name.first} ${teamMember.name.last}`}
                width="360"
                height="360"
                loading="lazy"
                className="h-24 w-24 rounded-full object-cover"
              />
            </picture>
            <h2 className="text-xl font-semibold text-mainColor">
              {teamMember?.name?.first + teamMember?.name?.last}{" "}
            </h2>
            <p className="line-clamp-1 text-center text-sm text-secondaryTextGray">
              {teamMember?.location?.city + ", " + teamMember?.location?.state}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
