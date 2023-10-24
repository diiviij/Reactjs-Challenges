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
                <h4 class="semi-bold mt-4 text-capitalize">themes made easy</h4>
                <hr class="w-25 bw-2 border-alternate mt-3 mb-4" />
                <p class="regular text-muted">
                  Our astonishing style structure makes your customization
                  process a breeze
                </p>
              </div>
              <div class="col-md-4">
                <div class="icon-box rounded gradient gradient-primary-light text-contrast shadow icon-xl">
                  <i class="icon m-0 pe pe-7s-diamond pe-3x"></i>
                </div>
                <h4 class="semi-bold mt-4 text-capitalize">powerful design</h4>
                <hr class="w-25 bw-2 border-alternate mt-3 mb-4" />
                <p class="regular text-muted">
                  With ready-to-use content you'll deploy your implementation in
                  no time
                </p>
              </div>
              <div class="col-md-4">
                <div class="icon-box rounded gradient gradient-primary-light text-contrast shadow icon-xl">
                  <i class="icon m-0 pe pe-7s-light pe-3x"></i>
                </div>
                <h4 class="semi-bold mt-4 text-capitalize">creative content</h4>
                <hr class="w-25 bw-2 border-alternate mt-3 mb-4" />
                <p class="regular text-muted">
                  Repetitive styles all across the web? Nevermind that! Shine
                  with unique styles
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
