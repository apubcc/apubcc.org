import { getNotionEvents } from "./notion-actions";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/app/get-query-client";
import { queryOptions } from "@tanstack/react-query";
import EventList from "./_components/event-list";
import { eventsOptions } from "./notion-options";

export default async function EventsPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(eventsOptions);
  const events = queryClient.getQueryData(eventsOptions.queryKey);

  return (
    <>
      <div className="relative">
        <div className="relative flex h-[50svh] items-center justify-center">
          <img
            src="/events-desktop-bg.png"
            alt="Events Desktop Background"
            className="absolute left-0 right-0 top-0 -z-10 h-full w-full"
          />
          <h1 className="text-center text-[0.9375rem] font-bold leading-normal text-white desktop:text-[2.5rem]">
            Discover Events
          </h1>
        </div>

        <main className="relative min-h-svh w-full bg-[url('/events-wavy-desktop-bg.png')] bg-cover bg-no-repeat px-4 tablet-lg:px-8 desktop:px-[10.5rem]">
          <div className="mx-auto max-w-6xl space-y-16 pt-20 tablet-lg:space-y-24 tablet-lg:pt-40 desktop:space-y-[5rem] desktop:pt-1">
            <section className="flex flex-col items-center justify-center gap-4 tablet-lg:flex-row tablet-lg:justify-start tablet-lg:gap-[42px]">
              <div className="flex h-[3.3125rem] w-full items-center justify-center gap-2 rounded-[10px] bg-[#F1600759] tablet-lg:w-[17.8125rem]">
                <p className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#F16007] text-base font-bold leading-normal text-white tablet-lg:w-[8.875rem] tablet-lg:text-[1.25rem]">
                  Upcoming
                </p>
                <p className="flex h-full w-full items-center justify-center rounded-[10px] text-base font-bold leading-normal text-white tablet-lg:w-[8.875rem] tablet-lg:text-[1.25rem]">
                  Past
                </p>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="hidden tablet-lg:block"
              >
                <path
                  d="M14.1667 10.8333C14.1667 10.6123 14.2545 10.4004 14.4108 10.2441C14.5671 10.0878 14.7791 10 15.0001 10H25.0001C25.2211 10 25.4331 10.0878 25.5893 10.2441C25.7456 10.4004 25.8334 10.6123 25.8334 10.8333C25.8334 11.0543 25.7456 11.2663 25.5893 11.4226C25.4331 11.5789 25.2211 11.6667 25.0001 11.6667H15.0001C14.7791 11.6667 14.5671 11.5789 14.4108 11.4226C14.2545 11.2663 14.1667 11.0543 14.1667 10.8333ZM13.3334 20C12.8914 20 12.4675 20.1756 12.1549 20.4882C11.8423 20.8007 11.6667 21.2246 11.6667 21.6667C11.6667 22.1087 11.8423 22.5326 12.1549 22.8452C12.4675 23.1577 12.8914 23.3333 13.3334 23.3333C13.7754 23.3333 14.1994 23.1577 14.5119 22.8452C14.8245 22.5326 15.0001 22.1087 15.0001 21.6667C15.0001 21.2246 14.8245 20.8007 14.5119 20.4882C14.1994 20.1756 13.7754 20 13.3334 20ZM26.6667 20C26.2247 20 25.8008 20.1756 25.4882 20.4882C25.1757 20.8007 25.0001 21.2246 25.0001 21.6667C25.0001 22.1087 25.1757 22.5326 25.4882 22.8452C25.8008 23.1577 26.2247 23.3333 26.6667 23.3333C27.1088 23.3333 27.5327 23.1577 27.8453 22.8452C28.1578 22.5326 28.3334 22.1087 28.3334 21.6667C28.3334 21.2246 28.1578 20.8007 27.8453 20.4882C27.5327 20.1756 27.1088 20 26.6667 20ZM18.3334 21.6667C18.3334 21.2246 18.509 20.8007 18.8216 20.4882C19.1341 20.1756 19.5581 20 20.0001 20C20.4421 20 20.866 20.1756 21.1786 20.4882C21.4912 20.8007 21.6667 21.2246 21.6667 21.6667C21.6667 22.1087 21.4912 22.5326 21.1786 22.8452C20.866 23.1577 20.4421 23.3333 20.0001 23.3333C19.5581 23.3333 19.1341 23.1577 18.8216 22.8452C18.509 22.5326 18.3334 22.1087 18.3334 21.6667ZM13.3334 26.6667C12.8914 26.6667 12.4675 26.8423 12.1549 27.1548C11.8423 27.4674 11.6667 27.8913 11.6667 28.3333C11.6667 28.7754 11.8423 29.1993 12.1549 29.5118C12.4675 29.8244 12.8914 30 13.3334 30C13.7754 30 14.1994 29.8244 14.5119 29.5118C14.8245 29.1993 15.0001 28.7754 15.0001 28.3333C15.0001 27.8913 14.8245 27.4674 14.5119 27.1548C14.1994 26.8423 13.7754 26.6667 13.3334 26.6667ZM18.3334 28.3333C18.3334 27.8913 18.509 27.4674 18.8216 27.1548C19.1341 26.8423 19.5581 26.6667 20.0001 26.6667C20.4421 26.6667 20.866 26.8423 21.1786 27.1548C21.4912 27.4674 21.6667 27.8913 21.6667 28.3333C21.6667 28.7754 21.4912 29.1993 21.1786 29.5118C20.866 29.8244 20.4421 30 20.0001 30C19.5581 30 19.1341 29.8244 18.8216 29.5118C18.509 29.1993 18.3334 28.7754 18.3334 28.3333Z"
                  fill="white"
                />
                <path
                  d="M22.7049 5H17.2949C15.4616 5 14.0316 5 12.8866 5.09333C11.7233 5.18833 10.7783 5.385 9.92825 5.81667C8.51666 6.53578 7.36903 7.68341 6.64992 9.095C6.21659 9.945 6.02159 10.89 5.92659 12.0533C5.83325 13.2 5.83325 14.6267 5.83325 16.4617V23.5383C5.83325 25.3717 5.83325 26.8017 5.92659 27.9467C6.02159 29.11 6.21825 30.055 6.64992 30.905C7.36903 32.3166 8.51666 33.4642 9.92825 34.1833C10.7783 34.6167 11.7233 34.8117 12.8866 34.9067C14.0333 35 15.4599 35 17.2949 35H22.7049C24.5383 35 25.9683 35 27.1133 34.9067C28.2766 34.8117 29.2216 34.615 30.0716 34.1833C31.4832 33.4642 32.6308 32.3166 33.3499 30.905C33.7833 30.055 33.9783 29.11 34.0733 27.9467C34.1666 26.8017 34.1666 25.3733 34.1666 23.5383V16.4617C34.1666 14.6283 34.1666 13.1983 34.0733 12.0533C33.9783 10.89 33.7816 9.945 33.3499 9.095C32.6308 7.68341 31.4832 6.53578 30.0716 5.81667C29.2216 5.38333 28.2766 5.18833 27.1133 5.09333C25.9666 5 24.5399 5 22.7049 5ZM10.6833 7.30167C11.2599 7.00833 11.9599 6.84167 13.0216 6.755C14.0916 6.66667 15.4533 6.66667 17.3333 6.66667H22.6666C24.5466 6.66667 25.9083 6.66667 26.9766 6.755C28.0383 6.84167 28.7383 7.00833 29.3149 7.30167C30.4129 7.861 31.3056 8.75367 31.8649 9.85167C32.1583 10.4283 32.3249 11.1283 32.4116 12.19C32.4749 12.9517 32.4933 13.86 32.4983 15H7.49992C7.50659 13.86 7.52325 12.95 7.58659 12.19C7.67325 11.1283 7.83992 10.4283 8.13325 9.85167C8.69258 8.75367 9.58525 7.861 10.6833 7.30167ZM7.49992 16.6667H32.4999V23.5C32.4999 25.38 32.4999 26.7417 32.4116 27.81C32.3249 28.8717 32.1583 29.5717 31.8649 30.1483C31.3056 31.2463 30.4129 32.139 29.3149 32.6983C28.7383 32.9917 28.0383 33.1583 26.9783 33.245C25.9083 33.3333 24.5466 33.3333 22.6666 33.3333H17.3333C15.4533 33.3333 14.0916 33.3333 13.0233 33.245C11.9616 33.1583 11.2616 32.9917 10.6849 32.6983C9.58692 32.139 8.69425 31.2463 8.13492 30.1483C7.84159 29.5717 7.67492 28.8717 7.58825 27.8117C7.49992 26.7417 7.49992 25.38 7.49992 23.5V16.6667Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.7501 10.8335C13.7501 10.502 13.8818 10.184 14.1162 9.94961C14.3506 9.71519 14.6686 9.5835 15.0001 9.5835H25.0001C25.3316 9.5835 25.6495 9.71519 25.884 9.94961C26.1184 10.184 26.2501 10.502 26.2501 10.8335C26.2501 11.165 26.1184 11.483 25.884 11.7174C25.6495 11.9518 25.3316 12.0835 25.0001 12.0835H15.0001C14.6686 12.0835 14.3506 11.9518 14.1162 11.7174C13.8818 11.483 13.7501 11.165 13.7501 10.8335ZM11.2501 21.6668C11.2501 21.1143 11.4696 20.5844 11.8603 20.1937C12.251 19.803 12.7809 19.5835 13.3334 19.5835C13.8859 19.5835 14.4159 19.803 14.8066 20.1937C15.1973 20.5844 15.4167 21.1143 15.4167 21.6668C15.4167 22.2194 15.1973 22.7493 14.8066 23.14C14.4159 23.5307 13.8859 23.7502 13.3334 23.7502C12.7809 23.7502 12.251 23.5307 11.8603 23.14C11.4696 22.7493 11.2501 22.2194 11.2501 21.6668ZM24.5834 21.6668C24.5834 21.1143 24.8029 20.5844 25.1936 20.1937C25.5843 19.803 26.1142 19.5835 26.6667 19.5835C27.2193 19.5835 27.7492 19.803 28.1399 20.1937C28.5306 20.5844 28.7501 21.1143 28.7501 21.6668C28.7501 22.2194 28.5306 22.7493 28.1399 23.14C27.7492 23.5307 27.2193 23.7502 26.6667 23.7502C26.1142 23.7502 25.5843 23.5307 25.1936 23.14C24.8029 22.7493 24.5834 22.2194 24.5834 21.6668ZM17.9167 21.6668C17.9167 21.1143 18.1362 20.5844 18.5269 20.1937C18.9176 19.803 19.4475 19.5835 20.0001 19.5835C20.5526 19.5835 21.0825 19.803 21.4732 20.1937C21.8639 20.5844 22.0834 21.1143 22.0834 21.6668C22.0834 22.2194 21.8639 22.7493 21.4732 23.14C21.0825 23.5307 20.5526 23.7502 20.0001 23.7502C19.4475 23.7502 18.9176 23.5307 18.5269 23.14C18.1362 22.7493 17.9167 22.2194 17.9167 21.6668ZM11.2501 28.3335C11.2501 27.781 11.4696 27.2511 11.8603 26.8604C12.251 26.4697 12.7809 26.2502 13.3334 26.2502C13.7754 26.2502 14.1994 26.4697 14.5119 26.8604C14.8245 27.2511 15.0001 27.781 15.0001 28.3335C15.0001 28.7755 14.8245 29.1994 14.5119 29.512C14.1994 29.8246 13.7754 30.0002 13.3334 30.0002C12.8914 30.0002 12.4675 29.8246 12.1549 29.512C11.8423 29.1994 11.6667 28.7755 11.6667 28.3335ZM18.3334 28.3335C18.3334 27.781 18.509 27.2511 18.8216 26.8604C19.1341 26.4697 19.5581 26.2502 20.0001 26.2502C20.4421 26.2502 20.866 26.4697 21.1786 26.8604C21.4912 27.2511 21.6667 27.781 21.6667 28.3335C21.6667 28.7755 21.4912 29.1994 21.1786 29.512C20.866 29.8246 20.4421 30.0002 20.0001 30.0002C19.5581 30.0002 19.1341 29.8246 18.8216 29.512C18.509 29.1994 18.3334 28.7755 18.3334 28.3335Z"
                  fill="white"
                />
              </svg>
            </section>

            {!events || events.length === 0 ? (
              <section className="flex flex-col items-center justify-center px-4 text-center">
                <div className="mb-8">
                  <img
                    src="/events-rocket.png"
                    alt="Rocket Graphics"
                    className="h-24 w-24 tablet-lg:h-32 tablet-lg:w-32"
                  />
                </div>

                <p className="mb-2 text-base font-bold text-white tablet-lg:text-[1.25rem]">
                  Oops! There are no upcoming event right now
                </p>
                <p className="text-base font-bold text-white tablet-lg:text-[1.25rem]">
                  Stay tuned for updates or check back soon!
                </p>
              </section>
            ) : (
              <section className="tablet-lg:px-0">
                <HydrationBoundary state={dehydrate(queryClient)}>
                  <EventList />
                </HydrationBoundary>
              </section>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
