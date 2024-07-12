import { Home, Faq, Agreements, Instructor } from "../pages";

export const routesPath = {
  main: "/",
  faq: "/faq",
  instructor: "/instructor",
  terms: "/policies/terms",
  privacy: "/policies/privacy-policy",
  additionalInstructorsTerms: "/policies/additional-instructors-terms",
  userRelease: "/policies/user-release",
  paymentTerms: "/policies/payment-terms",
  instructorRequirements: "/policies/instructor-requirements",
  instructorCancellation: "/policies/instructor-cancellation",
  userCancellation: "/policies/user-cancellation",
  userRefund: "/policies/user-refund",
  instructorPrivacyStandard: "/policies/instructor-privacy-standard",
  reviews: "/policies/reviews",
  ratings: "/policies/ratings",
  content: "/policies/content",
  cookies: "/policies/cookie-policy",
  copyright: "/policies/copyright",
  serviceFees: "/policies/service-fees",
  smsTerms: "/policies/sms-terms",
  taxes: "/policies/taxes",
  communityStandards: "/policies/community-standards",
  instructorStandards: "/policies/instructor-standards",
};

export const routes = [
  {
    path: routesPath.main,
    component: <Home />,
  },
  {
    path: routesPath.faq,
    component: <Faq />,
  },
  {
    path: routesPath.instructor,
    component: <Instructor />,
  },
  {
    path: routesPath.privacy,
    component: <Agreements />,
  },
  {
    path: routesPath.terms,
    component: <Agreements />,
  },
  {
    path: routesPath.additionalInstructorsTerms,
    component: <Agreements />,
  },
  {
    path: routesPath.userRelease,
    component: <Agreements />,
  },
  {
    path: routesPath.paymentTerms,
    component: <Agreements />,
  },
  {
    path: routesPath.instructorRequirements,
    component: <Agreements />,
  },
  {
    path: routesPath.instructorCancellation,
    component: <Agreements />,
  },
  {
    path: routesPath.userCancellation,
    component: <Agreements />,
  },
  {
    path: routesPath.userRefund,
    component: <Agreements />,
  },
  {
    path: routesPath.instructorPrivacyStandard,
    component: <Agreements />,
  },
  {
    path: routesPath.reviews,
    component: <Agreements />,
  },
  {
    path: routesPath.ratings, 
    component: <Agreements />,
  },
  {
    path: routesPath.content,
    component: <Agreements />,
  },
  {
    path: routesPath.cookies,
    component: <Agreements />,
  },
  {
    path: routesPath.copyright,
    component: <Agreements />,
  },
  {
    path: routesPath.serviceFees,
    component: <Agreements />,
  },
  {
    path: routesPath.smsTerms,
    component: <Agreements />,
  },
  {
    path: routesPath.taxes,
    component: <Agreements />,
  },
  {
    path: routesPath.communityStandards,
    component: <Agreements />,
  },
  {
    path: routesPath.instructorStandards,
    component: <Agreements />,
  },
];
