import Logo from "@/components/common/logo";
import illustration from "@/assets/images/illustration.png";
import PageHeader from "@/components/common/pageHeader";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
export default function LoginPage() {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="w-[1200px] bg-white rounded-xl shadow-lg flex overflow-hidden">

                {/* LEFT */}
                <div className="w-1/2 bg-gradient-to-br from-blue-500 to-blue-700 text-white p-10 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                          <Logo variant="white" />
                        <h2 className="text-xl font-semibold">Workroom</h2>   
                        </div>
                        <h1 className="text-2xl font-bold my-6">
                            Your place to work. <br /> Plan. Create. Control.
                        </h1>
                    </div>

                    <div>
                        <img src={illustration} alt="illustration" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/2 p-10 flex flex-col justify-center">
                    <PageHeader title="Sign in to Workroom" className="text-center"/>
                    <Input label="Email" placeholder="Enter your email" />
                    <Input label="Password" placeholder="Enter your password" />

                    <div className="flex justify-between text-sm mb-4">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <span className="text-blue-500 cursor-pointer">Forgot?</span>
                    </div>
                    <div className="flex justify-center">
                      <Button variant="primary" className="cursor-pointer">Sign In</Button>  
                    </div>
                </div>

            </div>

        </div>
    );
}