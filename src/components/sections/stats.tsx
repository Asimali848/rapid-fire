import MaxWidthWrapper from "@/components/ui/max-width-wrapper";

const Stats = () => {
    return (
        <section className="py-12 bg-background">
            <MaxWidthWrapper>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                    {/* Card 1: Dark Blue */}
                    <div className="bg-[#0f2e2e] text-white p-6 rounded-2xl flex flex-col justify-between min-h-[160px]">
                        <div>
                            <h3 className="text-3xl font-bold mb-1">100+</h3>
                            <p className="text-sm opacity-80">Our Corporate Clients and Partners</p>
                        </div>
                        <div className="flex -space-x-2 mt-4">
                            {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-white/20 border border-white/50"></div>)}
                        </div>
                    </div>

                    {/* Card 2: White/Bordered */}
                    <div className="bg-background text-foreground border border-border p-6 rounded-2xl flex flex-col justify-between min-h-[160px] shadow-sm">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="p-1 bg-green-100 text-green-700 rounded text-xs font-bold">UP</span>
                                <span className="text-xs text-muted-foreground">Total Projects</span>
                            </div>
                            <h3 className="text-3xl font-bold">1951+</h3>
                            <p className="text-xs text-muted-foreground mt-2">Increase of 12% this month</p>
                        </div>
                    </div>

                    {/* Card 3: Light Green */}
                    <div className="bg-[#d9f99d] text-[#0f2e2e] p-6 rounded-2xl flex flex-col justify-between min-h-[160px]">
                        <div>
                            <h3 className="text-3xl font-bold mb-1">6+</h3>
                            <p className="text-sm font-medium">Years of Dedicated Service</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#0f2e2e]/10 flex items-center justify-center self-end">
                            ↗
                        </div>
                    </div>

                    {/* Card 4: Dark Green */}
                    <div className="bg-[#113030] text-white p-6 rounded-2xl flex flex-col justify-between min-h-[160px]">
                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center mb-4">
                            ⚡
                        </div>
                        <div>
                            <p className="text-sm font-medium">Achieve Optimal Efficiency and Boost Production</p>
                        </div>
                    </div>

                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Stats;
