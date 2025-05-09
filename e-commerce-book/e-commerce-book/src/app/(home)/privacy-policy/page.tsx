import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-blue-50 min-h-screen p-6 sm:p-12 flex  text-gray-800">
        <div className="border-r-8 rounded-lg border-gray-500 my-14 ps-60 "></div>
      <div className="max-w-3xl  mx-auto space-y-8">
        <h1 className="text-4xl font-extrabold border-b-4 border-secondary inline-block pb-1">
          PRIVACY POLICY
        </h1>

        {/* Introduction */}
        <div className="border border-blue-400 bg-white rounded-md p-5 shadow-md">
          <h2 className="text-2xl font-extrabold mb-2">Introduction</h2>
          <p>
            The introduction sets the tone, stating Sikhshya’s commitment to
            privacy and compliance with Nepal’s laws. It should read:
          </p>
          <p className="mt-2">
            <em>
              “Sikhshya is committed to protecting your privacy and ensuring the
              security of your personal information. This privacy policy
              explains how we collect, use, disclose, and protect your personal
              information when you use our website and services. By accessing or
              using our website, you agree to the terms of this privacy policy.”
            </em>
          </p>
          <p className="mt-2">
            This aligns with the Act’s emphasis on transparency and user
            consent.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="border border-blue-400 bg-white rounded-md p-5 shadow-md">
          <h2 className="text-2xl font-extrabold mb-2">Information We Collect</h2>
          <p>
            Sikhshya collects personal information directly from users, such as:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              Name, email address, phone number (if provided), username, and
              password for account creation.
            </li>
            <li>
              Content uploaded, like books or notes, and usage data such as IP
              address and browser type, as seen in the website’s account and
              search features.
            </li>
          </ul>
          <p className="mt-2">
            This section must specify that collection is limited to what is
            necessary, complying with the Act’s purpose limitation principle.
          </p>
        </div>

        {/* How We Use Your Information */}
        <div className="border border-blue-400 bg-white rounded-md p-5 shadow-md">
          <h2 className="text-2xl font-extrabold mb-2">
            How We Use Your Information
          </h2>
          <p>
            Usage includes providing services, communicating updates,
            personalizing experiences, and improving the platform, as well as
            legal compliance. For example:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>To enable sharing and accessing educational materials.</li>
            <li>
              To send notifications about new releases or account changes.
            </li>
          </ul>
          <p className="mt-2">
            This ensures data is used only for specified purposes, as required
            by the Act.
          </p>
        </div>

        {/* Legal Basis For Processing */}
        <div className="border border-blue-400 bg-white rounded-md p-5 shadow-md">
          <h2 className="text-2xl font-extrabold mb-2">
            Legal Basis For Processing
          </h2>
          <p>
            The policy must state that processing is based on user consent.
            Given by using the services and agreeing to the policy, it may also
            cover legal obligations or vital interests, aligning with the Act’s
            consent requirements:
          </p>
          <p className="mt-2">
            <em>
              “We process your personal information based on your consent, which
              you provide by using our services and agreeing to this privacy
              policy. We may also process your information to comply with legal
              obligations or to protect your vital interests.”
            </em>
          </p>
        </div>
        {/* Data Sharing and Disclosure */}
        <div className="border border-blue-400 bg-white rounded-md p-5 shadow-md">
          <h2 className="text-2xl font-extrabold mb-2">
            Data Sharing and Disclosure
          </h2>
          <p>
            Sikhshya may share data with service providers (e.g., hosting
            companies), business partners for promotions, or law enforcement if
            required by law. The policy must clarify:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>No selling of personal information to third parties.</li>
            <li>
              Data is shared only with necessary parties, ensuring compliance
              with the Act’s restrictions on unauthorized disclosure.
            </li>
          </ul>
        </div>

        {/* Your Rights */}
        <div className="border border-blue-400 bg-white rounded-md p-5 shadow-md">
          <h2 className="text-2xl font-extrabold mb-2">Your Rights</h2>
          <p>Under the Act, users have rights including:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Right to be informed about data collection and use.</li>
            <li>Right to access, rectify, or erase their data.</li>
            <li>Right to restrict processing or data portability.</li>
          </ul>
          <p className="mt-2">
            The policy should provide a contact method for exercising these
            rights, such as emailing support, ensuring users can enforce their
            privacy rights as per the Privacy Act, 2075 (2018) – Nepal Law
            Commission.
          </p>
        </div>

        {/* Data Security */}
        <div className="border border-blue-400 bg-white rounded-md p-5 shadow-md">
          <h2 className="text-2xl font-extrabold mb-2">Data Security</h2>
          <p>
            Security measures must be outlined, such as encryption and access
            controls, to protect against unauthorized access. The policy should
            note:
          </p>
          <p className="mt-2 italic">
            "We implement appropriate technical and organizational measures to
            protect your personal information from unauthorized access, use, or
            disclosure. However, no method of transmission over the internet or
            electronic storage is 100% secure, so we cannot guarantee absolute
            security."
          </p>
        </div>

        {/* Data Retention */}
        <div className="border border-blue-400 bg-white rounded-md p-5 shadow-md">
          <h2 className="text-2xl font-extrabold mb-2">Data Retention</h2>
          <p>
            Data retention should be for as long as necessary to provide
            services and comply with legal obligations, with deletion or
            anonymization afterward, ensuring compliance with the Act's data
            preservation rules.
          </p>
        </div>

        {/* Consent */}
        <div className="border border-blue-400 bg-white rounded-md p-5 shadow-md">
          <h2 className="text-2xl font-extrabold mb-2">Consent</h2>
          <p className="italic">
            "By using our website and services, you consent to the collection,
            use, and disclosure of your personal information as described in
            this Privacy Policy. If you do not agree with this Policy, please do
            not use our services. For specific actions like uploading content,
            we may ask for explicit consent."
          </p>
          <p className="mt-2">
            This ensures our users are informed and agree, as required by law.
          </p>
        </div>

        {/* Cookies and Tracking Technologies */}
        <div className="border border-blue-400 bg-white rounded-md p-5 shadow-md">
          <h2 className="text-2xl font-extrabold mb-2">
            Cookies and Tracking Technologies
          </h2>
          <p>
            If Sikhshya uses cookies, the policy should explain their use for
            enhancing user experience and how users can manage preferences,
            complying with transparency requirements.
          </p>
        </div>

        {/* Changes to This Policy */}
        <div className="border border-blue-400 bg-white rounded-md p-5 shadow-md">
          <h2 className="text-2xl font-extrabold mb-2">Changes to This Policy</h2>
          <p>
            The policy may be updated, with notifications posted on the website,
            ensuring users are informed of changes, aligning with the Act's
            transparency obligations.
          </p>
        </div>

        {/* Contact Us */}
        <div className="border border-blue-400 bg-white rounded-md p-5 shadow-md">
          <h2 className="text-2xl font-extrabold mb-2">Contact Us</h2>
          <p>
            Provide contact details, such as an email and address, for users to
            raise concerns, ensuring accessibility.
          </p>
        </div>
      </div>
    </div>
  );
}
