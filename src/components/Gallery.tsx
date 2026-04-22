import { Quote } from "lucide-react";

const Gallery = () => {
  const testimonials = [
    {
      name: "Keith Rubinstein",
      text: "Delicious food. Resonable prices. Generous portions. Attentive service. Just a knock out of the park on all counts. I was sad when the burmese place left, but now that I've tried Jalsa I think I can cope :)",
      rating: 5,
    },
    {
      name: "Benjamin Snyder",
      text: "Great portion size. I’m a big dude and I need a lot of food. This left me with a big sized lunch the next day. And it was delicious!",
      rating: 5,
    },
    {
      name: "Jack Vogel",
      text: "I've only eaten here twice now, but the food was great both times! It's difficult finding really good Indian, it's an expensive-to-make cuisine, so I wish Jalsa well, keep making delicious curry and I'll keep buying it :)",
      rating: 5,
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-royal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            What Our Guests Say
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of satisfied guests who have experienced the magic of JALSA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card/10 backdrop-blur-sm rounded-xl p-8 border-2 border-gold/20 hover:border-gold/40 transition-all duration-300 hover:-translate-y-2"
            >
              <Quote className="w-12 h-12 text-gold mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-gold text-xl">★</span>
                ))}
              </div>
              <p className="text-primary-foreground/90 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <p className="text-gold font-semibold">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
