import { MapPin } from "lucide-react";


        {/* Greater Austin */}
        <div className="mb-10">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-primary" /> Greater Austin Area
          </h3>
          <div className="flex flex-wrap gap-2">
            {greaterAustin.map((area) => (
              <span
                key={area}
                className="bg-card border border-border rounded-full px-4 py-1.5 text-sm text-foreground"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground text-[15px]">
          Not sure if we cover your area? Simply give us a call, send us a text, or email us. 
          We are always happy to confirm our availability in your area.
        </p>
      </div>
    </section>
  );
};

export default ServiceAreas;
