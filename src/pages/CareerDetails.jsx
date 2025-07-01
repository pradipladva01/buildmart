import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CareerData from "./Data/CareerData";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar/Navbar";
import JobTitle from "../resources/images/Job_user.webp";
import JobLocation from "../resources/images/Job_location.webp";
import JobType from "../resources/images/Job_type.webp";
import JobSalary from "../resources/images/Job_salary.webp";
import JobSchedule from "../resources/images/schedule.png";
import JobGraduation from "../resources/images/graduation-cap.png";
import JobExperience from "../resources/images/quality.png";
import { FlipButton } from "../components/FlipTextNavLink";
import { useForm } from "react-hook-form";
import useWeb3forms from "@web3forms/react";
import { toast } from "react-toastify";

const CareerDetails = () => {
  const { slug } = useParams();
  const career = CareerData.find((item) => item.slug === slug);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  const apiKey = "5b7cde4a-d737-4d41-9678-e6cf6dc0272e";
  const { submit: onSubmit } = useWeb3forms({
    access_key: apiKey,
    settings: {
      from_name: "Buildmart",
      subject: "New Contact Message from your Buildmart",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
      toast.success(message || "Your message is on its way!");
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
      toast.error(msg);
    },
  });
  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        setMessage(false);
        setIsSuccess(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [message]);

  if (!career) {
    return (
      <div className="container_wrapper">
        <h2>Job not found</h2>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{career.title} | Buildmart</title>
      </Helmet>
      <Navbar />
      <section className="career_section">
        <div className="container_wrapper">
          <div className="career_content_main">
            <div className="career_content_top">
              <div className="top">
                <div className="line"></div>
                <h6>Apply for the Role</h6>
              </div>
              <h2>{career.title}</h2>
            </div>
            <div className="career_details_content_bottom">
              <div className="details_top_img">
                <img
                  src="https://cdn.prod.website-files.com/673c51c34a539e29df18f8f2/6742b078ec44f828a71fee11_job-details-cover.webp"
                  alt="job cover"
                />
              </div>
              <div className="job_details_grid">
                <div className="job_details_left">
                  <div className="job_overview">
                    <p>{career.description}</p>
                  </div>

                  <div className="job_information">
                    <div className="job_info_item">
                      <div className="job_info_inner">
                        <img src={JobTitle} alt="Job Title" />
                        <h6>Job Title</h6>
                      </div>
                      <p>{career.title}</p>
                    </div>

                    <div className="job_info_item">
                      <div className="job_info_inner">
                        <img src={JobLocation} alt="Location" />
                        <h6>Location</h6>
                      </div>
                      <p>{career.location}</p>
                    </div>

                    <div className="job_info_item">
                      <div className="job_info_inner">
                        <img src={JobType} alt="Job Type" />
                        <h6>Job Type</h6>
                      </div>
                      <p>{career.type}</p>
                    </div>

                    <div className="job_info_item">
                      <div className="job_info_inner">
                        <img src={JobSalary} alt="Salary" />
                        <h6>Salary</h6>
                      </div>
                      <p>{career.salary}</p>
                    </div>

                    <div className="job_info_item">
                      <div className="job_info_inner">
                        <img src={JobSchedule} alt="Schedule" />
                        <h6>Schedule</h6>
                      </div>
                      <p>{career.schedule}</p>
                    </div>

                    <div className="job_info_item">
                      <div className="job_info_inner">
                        <img src={JobLocation} alt="Commute" />
                        <h6>Commute/Relocation</h6>
                      </div>
                      <p>{career.commute}</p>
                    </div>

                    <div className="job_info_item">
                      <div className="job_info_inner">
                        <img src={JobGraduation} alt="Education" />
                        <h6>Education</h6>
                      </div>
                      <p>{career.education}</p>
                    </div>

                    <div className="job_info_item">
                      <div className="job_info_inner">
                        <img src={JobExperience} alt="Experience" />
                        <h6>Experience</h6>
                      </div>
                      <p>{career.experience}</p>
                    </div>
                  </div>

                  <div className="job_list">
                    <h2>Key Responsibilities</h2>
                    <ul>
                      {career.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <h2>Requirements</h2>
                    <ul>
                      {career.requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <h2>Nice to Have (Optional)</h2>
                    <ul>
                      {career.niceToHave.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="job_details_right">
                  <form
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                    method="POST"
                    autoComplete="off"
                  >
                    <div className="heading">
                      <h4>Ready to apply? We can't wait to meet you!</h4>
                      <p>
                        Submit your details to apply for the{" "}
                        <strong>{career.title}</strong> role.
                      </p>
                    </div>
                    <div className="form_inputs">
                      <div className="input_group">
                        <input
                          autoComplete="off"
                          type="text"
                          name="fullName"
                          id="fullName"
                          placeholder="Full Name"
                          className={`input-field ${
                            errors.fullName
                              ? "error-border"
                              : touchedFields.fullName
                              ? "valid-border"
                              : ""
                          }`}
                          {...register("fullName", {
                            required: "Full name is required",
                            maxLength: 80,
                          })}
                        />
                        {errors.fullName && (
                          <div className="error">
                            <small>{errors.fullName.message}</small>
                          </div>
                        )}
                      </div>
                      <div className="input_group">
                        <input
                          autoComplete="off"
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Your email address"
                          className={`input-field ${
                            errors.email
                              ? "error-border"
                              : touchedFields.email
                              ? "valid-border"
                              : ""
                          }`}
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                              message: "Invalid email format",
                            },
                          })}
                        />
                        {errors.email && (
                          <div className="error">
                            <small>{errors.email.message}</small>
                          </div>
                        )}
                      </div>
                      <div className="input_group">
                        <input
                          type="number"
                          name="number"
                          id="number"
                          placeholder="Phone Number"
                          className={`input-field ${
                            errors.number
                              ? "error-border"
                              : touchedFields.number
                              ? "valid-border"
                              : ""
                          }`}
                          {...register("number", {
                            required: "Phone number is required",
                            pattern: {
                              value: /^[0-9+\-()\s]*$/,
                              message: "Invalid phone number",
                            },
                            minLength: 8,
                            maxLength: 15,
                          })}
                        />
                        {errors.number && (
                          <div className="error">
                            <small>{errors.number.message}</small>
                          </div>
                        )}
                      </div>
                      <div className="input_group">
                        <input
                          type="url"
                          name="url"
                          id="url"
                          placeholder="Submit Your CV URL"
                          className={`input-field ${
                            errors.url
                              ? "error-border"
                              : touchedFields.url
                              ? "valid-border"
                              : ""
                          }`}
                          {...register("url", {
                            required: "CV URL is required",
                            pattern: {
                              value:
                                // eslint-disable-next-line no-useless-escape
                                /^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+)?$/,
                              message: "Enter a valid URL",
                            },
                          })}
                        />
                        {errors.url && (
                          <div className="error">
                            <small>{errors.url.message}</small>
                          </div>
                        )}
                      </div>
                      <div className="input_group">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Tell us why you want to work with Buildmart Construction"
                          className={`input-field ${
                            errors.message
                              ? "error-border"
                              : touchedFields.message
                              ? "valid-border"
                              : ""
                          }`}
                          {...register("message", {
                            required: "Message is required",
                            minLength: {
                              value: 10,
                              message: "Message must be at least 10 characters",
                            },
                          })}
                        />
                        {errors.message && (
                          <div className="error">
                            <small>{errors.message.message}</small>
                          </div>
                        )}
                      </div>
                    </div>

                    <FlipButton
                      className="learn_button"
                      frontText={
                        isSubmitting ? "Please wait..." : "Send request"
                      }
                      backText={
                        isSubmitting ? "Please wait..." : "Send request"
                      }
                      type="submit"
                    />
                  </form>
                  {isSuccess && (
                    <div className="thankyou-message success">
                      <h4>Thank you for applying!</h4>
                      <p>
                        {message ||
                          "We’ve received your application. Our team will be in touch soon."}
                      </p>
                    </div>
                  )}

                  {!isSuccess && message && (
                    <div className="thankyou-message error">
                      <h4>Oops!</h4>
                      <p>{message}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerDetails;
