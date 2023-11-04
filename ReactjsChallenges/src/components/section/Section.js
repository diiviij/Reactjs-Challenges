import React from "react";

const Section = () => {
  return (
    <>
      <section class="section mt-6n" id="features">
        <div class="pt-0 container">
          <div class="bg-contrast shadow rounded p-5">
            <div class="gap-y row">
              <div class="col-md-4">
                <div class="icon-box rounded gradient gradient-primary-light text-contrast shadow icon-xl">
                  <i class="icon m-0 pe pe-7s-paint-bucket pe-3x"></i>
                </div>
                <h4 class="semi-bold mt-4 text-capitalize">
                  What you'll learn
                </h4>
                <hr class="w-25 bw-2 border-alternate mt-3 mb-4" />
                <p class="regular text-muted">
                  Basic React components and hooks, State management, Routing
                  ,Forms, Authentication, Testing, Deployment.
                </p>
              </div>
              <div class="col-md-4">
                <div class="icon-box rounded gradient gradient-primary-light text-contrast shadow icon-xl">
                  <i class="icon m-0 pe pe-7s-diamond pe-3x"></i>
                </div>
                <h4 class="semi-bold mt-4 text-capitalize">
                  powerful Projects
                </h4>
                <hr class="w-25 bw-2 border-alternate mt-3 mb-4" />
                <p class="regular text-muted">
                  Projects that will help you to boost your Learning Journey !!
                </p>
              </div>
              <div class="col-md-4">
                <div class="icon-box rounded gradient gradient-primary-light text-contrast shadow icon-xl">
                  <i class="icon m-0 pe pe-7s-light pe-3x"></i>
                </div>
                <h4 class="semi-bold mt-4 text-capitalize">
                  Why learn React with React Challenges?
                </h4>
                <hr class="w-25 bw-2 border-alternate mt-3 mb-4" />
                <p class="regular text-muted">
                  Fun and challenging way to learn React, Build real-world
                  applications, Get feedback on your projects, Join a community
                  of learners
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Section;
