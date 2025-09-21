import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Demo | Free Next.js Template for Startup and SaaS",
  description: "Book a live product demo with our team.",
  // other metadata
};

const ScheduleDemoPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three dark:bg-dark mx-auto max-w-[600px] rounded-sm bg-white px-6 py-10 sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl dark:text-white">
                  Schedule a Live Demo
                </h3>
                <p className="text-body-color mb-11 text-center text-base font-medium">
                  Tell us a bit about you and pick a time — we’ll confirm by email.
                </p>

                {/* Quick-slot CTA (optional) */}
                <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <button
                    type="button"
                    className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color hover:border-primary hover:bg-primary/5 hover:text-primary dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary flex w-full items-center justify-center rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:hover:shadow-none"
                  >
                    15 min
                  </button>
                  <button
                    type="button"
                    className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color hover:border-primary hover:bg-primary/5 hover:text-primary dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary flex w-full items-center justify-center rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:hover:shadow-none"
                  >
                    30 min
                  </button>
                  <button
                    type="button"
                    className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color hover:border-primary hover:bg-primary/5 hover:text-primary dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary flex w-full items-center justify-center rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:hover:shadow-none"
                  >
                    45 min
                  </button>
                </div>

                <form>
                  {/* Name */}
                  <div className="mb-8">
                    <label htmlFor="name" className="text-dark mb-3 block text-sm dark:text-white">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-8">
                    <label htmlFor="email" className="text-dark mb-3 block text-sm dark:text-white">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your work email"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      required
                    />
                  </div>

                  {/* Company */}
                  <div className="mb-8">
                    <label htmlFor="company" className="text-dark mb-3 block text-sm dark:text-white">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Your company name"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                    />
                  </div>

                  {/* Phone (optional) */}
                  <div className="mb-8">
                    <label htmlFor="phone" className="text-dark mb-3 block text-sm dark:text-white">
                      Phone / WhatsApp (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+880 1XXXXXXXXX"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                    />
                  </div>

                  {/* Preferred Date & Time */}
                  <div className="mb-8">
                    <label htmlFor="datetime" className="text-dark mb-3 block text-sm dark:text-white">
                      Preferred Date &amp; Time
                    </label>
                    <input
                      type="datetime-local"
                      id="datetime"
                      name="datetime"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      required
                    />
                    <p className="mt-2 text-xs text-body-color">
                      We’ll send a calendar invite after confirmation.
                    </p>
                  </div>

                  {/* Timezone & Team Size */}
                  <div className="mb-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="timezone" className="text-dark mb-3 block text-sm dark:text-white">
                        Time Zone
                      </label>
                      <select
                        id="timezone"
                        name="timezone"
                        defaultValue="Asia/Dhaka"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      >
                        <option value="Asia/Dhaka">Asia/Dhaka (GMT+06:00)</option>
                        <option value="UTC">UTC</option>
                        <option value="Asia/Tokyo">Asia/Tokyo (GMT+09:00)</option>
                        <option value="America/New_York">America/New_York (GMT-04:00)</option>
                        <option value="Europe/London">Europe/London (GMT+01:00)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="teamSize" className="text-dark mb-3 block text-sm dark:text-white">
                        Team Size
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      >
                        <option value="1-10">1–10</option>
                        <option value="11-50">11–50</option>
                        <option value="51-200">51–200</option>
                        <option value="201-1000">201–1000</option>
                        <option value="1000+">1000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Use Case */}
                  <div className="mb-8">
                    <label htmlFor="useCase" className="text-dark mb-3 block text-sm dark:text-white">
                      What do you want to see?
                    </label>
                    <select
                      id="useCase"
                      name="useCase"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                    >
                      <option>Overview & core features</option>
                      <option>Security & compliance</option>
                      <option>API & integrations</option>
                      <option>Pricing & rollout plan</option>
                      <option>Other (add details below)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label htmlFor="message" className="text-dark mb-3 block text-sm dark:text-white">
                      Notes for our team (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Share goals, current tools, or any specific workflow you’d like us to cover."
                      className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                    />
                  </div>

                  {/* Consent */}
                  <div className="mb-8 flex">
                    <label
                      htmlFor="consent"
                      className="text-body-color flex cursor-pointer text-sm font-medium select-none"
                    >
                      <div className="relative">
                        <input type="checkbox" id="consent" className="sr-only" />
                        <div className="box border-body-color/20 mt-1 mr-4 flex h-5 w-5 items-center justify-center rounded-sm border dark:border-white/10">
                          <span className="opacity-0">
                            <svg
                              width="11"
                              height="8"
                              viewBox="0 0 11 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                fill="#3056D3"
                                stroke="#3056D3"
                                strokeWidth="0.4"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <span>
                        I agree to be contacted about my request and accept the{" "}
                        <a href="#0" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <div className="mb-6">
                    <button
                      className="shadow-submit dark:shadow-submit-dark bg-primary hover:bg-primary/90 flex w-full items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-white duration-300"
                      type="submit"
                    >
                      Request Demo
                    </button>
                  </div>
                </form>

                <p className="text-body-color text-center text-base font-medium">
                  Prefer instant booking?{" "}
                  <Link href="/book" className="text-primary hover:underline">
                    Open live calendar
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative background */}
        <div className="absolute top-0 left-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" as const }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default SignupPage;
