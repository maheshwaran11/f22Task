/* eslint-disable no-lone-blocks */
//Screen Representation
//Last or 3rd column bar -> greater than xl breakpoint
//Right Main Content Bar(total two column Bars) -> less than xl and greater than lg breakpoint screen
//Sigle column bar ->less than lg breakpoint screen
//Shaved off some contents of single column bar -> less than md breakpoint

import React, { useEffect, useState } from "react";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import axios from   'axios';
import {ricardoCooper, courtneyHenry, jennyWilson, timothéeNaël} from './../helpers/endPoints'
const tabs = [
  { name: "Profile", href: "#", current: true },
  { name: "Calendar", href: "#", current: false },
  { name: "Recognition", href: "#", current: false },
];

const MainContent = () => {
  const [profile, setProfile] = useState("");
  const [profileFields, setprofileFields] = useState("");
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const apiLinkForUserDetails = ricardoCooper.userProfile;
    axios.get(apiLinkForUserDetails).then(res=> {
      console.log(res.data)
      setProfile(...profile, res.data)
      setprofileFields(...profileFields, res.data.fields)
    });

    const apiLinkForTeam = ricardoCooper.teamList;
    axios.get(apiLinkForTeam).then(res=> {
      console.log(res.data)
      setTeam(...team, res.data)
    });
  }, [])

  {
    /* 
    
    # TASK 

    Points: 5

    Implement API
      a. Fetch user profile & team member details from the API provided.
      b. API endpoints available in helpers/endPoints.js file.
      c. Handle API fetch failure scenario as well.
      d. Make use of only one member API to build the UI.
      e. There will be multiple APIs available for user profile & team lists. Each API returns different set of responses, UI should be adaptable for all API responses.
    
    */
  }

  return (
    <article>
      {/* Profile header */}
      <div>
        <div>
          <img
            className="h-32 w-full object-cover lg:h-48"
            src={profile.coverImageUrl}
            alt=""
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <img
                className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                src={profile.imageUrl}
                alt=""
              />
            </div>
            <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                <h1 className="text-2xl font-bold text-gray-900 truncate">
                  {profile.name}
                </h1>
              </div>
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  <MailIcon
                    className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span>Message</span>
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  <PhoneIcon
                    className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span>Call</span>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
            <h1 className="text-2xl font-bold text-gray-900 truncate">
              {profile.name}
            </h1>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6 sm:mt-2 2xl:mt-5">
        <div className="border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {/* 
              
                # TASK

                Points: 1

                Show current tab bottom border & text in pink color rgb(236, 72, 153)
                
              */}
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className="border-transparent text-gray-500 py-4 px-1 hover:text-gray-700 hover:border-gray-300"
                  aria-current={tab.current ? "page" : undefined}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Description list */}
      <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1">
          {/* 
            
            # TASK
            
            Points: 6

            a. Show all the fields that has a value attached.
            b. Ignore fields that are either not available or has empty value.
            c. UI should be exactly same from what has been shared in working_version folder.
            d. console.log(profile.fields) to see the list of key value pairs available for the user.

          */}
          <div className="d-grid">
            <div>
              <dt className="text-sm font-medium text-gray-500">Phone</dt>
              {profileFields.Phone}
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              {profileFields.Email}
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Title</dt>
              {profileFields.Title}
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Team</dt>
              {profileFields.Team}
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Location</dt>
              {profileFields.Location}
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Salary</dt>
              {profileFields.Salary}
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Birthday</dt>
              {profileFields.Birthday}
            </div>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">About</dt>
            {profile.about}
          </div>
        </dl>
      </div>

      {/* Team member list */}
      <div className="mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-sm font-medium text-gray-500">Team members</h2>
        {/* 
          
          # TASK

          Points: 3

          Replicate the UI for team members list as shown in screenshots
          UI should be adaptable across different endpoints

         */}
        <div className="d-grid">
          {team.map((person) => (
            console.log(person),
            <div key={person.handle} className="">
              <div className="teamBox">
                <div className="imgContainer">
                  <img src={person.imageUrl} className="h-10 w-10"/>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {person.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate">{person.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default MainContent;
