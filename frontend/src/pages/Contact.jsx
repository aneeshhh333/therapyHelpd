import React, { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, Mail, MapPin, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";

const INITIAL = { firstName: "", lastName: "", city: "", state: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!form.firstName.trim()) er.firstName = "Required";
    if (!form.lastName.trim()) er.lastName = "Required";
    if (!form.city.trim()) er.city = "Required";
    if (!form.state.trim()) er.state = "Required";
    if (!form.email.trim()) er.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "Enter a valid email";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

 const submit = async (e) => {
e.preventDefault();

if (!validate()) {
toast.error("Please fill in the required fields.");
return;
}

setSubmitting(true);

try {
const response = await fetch(
"https://formsubmit.co/ajax/aneesh06042006@gmail.com",
{
method: "POST",
headers: {
"Content-Type": "application/json",
Accept: "application/json",
},
body: JSON.stringify({
firstName: form.firstName,
lastName: form.lastName,
city: form.city,
state: form.state,
email: form.email,
message: form.message,
}),
}
);

```
const data = await response.json();

if (data.success === "true" || data.success === true) {
  toast.success("Thank you — I'll be in touch shortly.");
  setDone(true);
  setForm(INITIAL);
} else {
  throw new Error("Submission failed");
}
```

} catch (err) {
toast.error("Something went wrong. Please try again.");
} finally {
setSubmitting(false);
}
};

  return (
    <div data-testid="page-contact">
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -left-20 w-[420px] h-[420px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12 lg:pt-28">
          <Reveal>
            <div className="text-[12px] tracking-widest uppercase font-semibold text-emerald-600">Contact</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 font-display text-6xl sm:text-7xl lg:text-[112px] leading-[0.88] tracking-tighter text-stone-900">
              Let's <span className="gradient-text">talk.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-stone-600 text-lg">
              Share a few details and I'll respond personally within one business day. Anything
              you write is confidential.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[40px] p-8 lg:p-12 shadow-xl shadow-stone-200/50 border border-stone-100" data-testid="contact-form-card">
              {done ? (
                <div className="text-center py-12" data-testid="contact-success">
                  <div className="grid place-items-center w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="mt-6 font-display text-4xl tracking-tighter text-stone-900">Message received.</h3>
                  <p className="mt-3 text-stone-600 max-w-md mx-auto">
                    Thanks for reaching out. I'll respond personally to your email shortly. Take care.
                  </p>
                  <button
                    onClick={() => setDone(false)}
                    data-testid="contact-send-another"
                    className="mt-6 inline-flex items-center gap-2 text-stone-900 font-semibold hover:text-emerald-600"
                  >
                    Send another message <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5" data-testid="contact-form">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="First name" name="firstName" value={form.firstName} onChange={onChange} error={errors.firstName} testid="contact-first-name" />
                    <Field label="Last name" name="lastName" value={form.lastName} onChange={onChange} error={errors.lastName} testid="contact-last-name" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="City" name="city" value={form.city} onChange={onChange} error={errors.city} testid="contact-city" />
                    <Field label="State" name="state" value={form.state} onChange={onChange} error={errors.state} testid="contact-state" />
                  </div>
                  <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} error={errors.email} testid="contact-email" />

                  <div>
                    <label className="block text-[13px] font-semibold uppercase tracking-widest text-stone-700 mb-2">
                      What's on your mind? <span className="text-stone-400 font-normal normal-case tracking-normal">(optional)</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      rows={5}
                      data-testid="contact-message"
                      className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-[15px] focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors resize-none"
                      placeholder="Anything you'd like me to know before we connect…"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    data-testid="contact-submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-6 py-4 rounded-2xl font-semibold btn-press hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending…" : (<>Send message <ArrowRight size={16} /></>)}
                  </button>

                  <p className="text-[12px] text-stone-500 text-center">
                    Your information is private. This is not a crisis line — if you're in crisis, please call your local emergency number.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-5">
            <Reveal>
              <div className="bg-stone-900 grain rounded-[32px] p-8 text-white">
                <div className="text-[12px] tracking-widest uppercase font-semibold text-emerald-400">What happens next</div>
                <ol className="mt-4 space-y-4">
                  {[
                    "I'll read your note personally and respond within one business day.",
                    "We'll set up a brief 15-minute call to see if we're a good fit.",
                    "If yes, we'll schedule your first 50-minute session (in-person or virtual).",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="grid place-items-center w-8 h-8 rounded-full bg-white/10 text-white font-semibold text-sm flex-shrink-0">{i + 1}</span>
                      <span className="text-stone-300 text-[15px] leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-emerald-50 rounded-[32px] p-8">
                <div className="font-display text-2xl tracking-tighter text-stone-900">Quick facts</div>
                <ul className="mt-4 space-y-3 text-[14px] text-stone-700">
                  <li className="flex items-start gap-3"><Clock size={18} className="text-emerald-600 mt-0.5" /> 50-minute sessions, weekly or bi-weekly.</li>
                  <li className="flex items-start gap-3"><MapPin size={18} className="text-emerald-600 mt-0.5" /> In-person & secure virtual sessions.</li>
                  <li className="flex items-start gap-3"><Mail size={18} className="text-emerald-600 mt-0.5" /> Out-of-network provider — superbills on request.</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, value, onChange, type = "text", error, testid }) {
  return (
    <div>
      <label className="block text-[13px] font-semibold uppercase tracking-widest text-stone-700 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        data-testid={testid}
        className={`w-full px-4 py-3.5 rounded-2xl bg-stone-50 border text-[15px] focus:outline-none focus:bg-white transition-colors ${
          error ? "border-red-400 focus:border-red-500" : "border-stone-200 focus:border-emerald-600"
        }`}
      />
      {error && <div className="mt-1.5 text-[12px] text-red-500">{error}</div>}
    </div>
  );
}
