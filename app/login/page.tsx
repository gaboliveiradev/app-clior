import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
    return (
        <div className="flex h-dvh flex-col lg:flex-row">
            <div className="hidden lg:block lg:w-[50%] bg-primary-foreground">
                <div className="m-auto w-[50%] h-dvh flex-col flex items-center justify-center">
                    <div className=" my-12">
                        <h1 className="text-4xl font-bold">
                            <span className="text-primary">Gerencie</span> seus clientes e orçamentos <span className="text-primary"> de forma simples e prática.</span> 👋
                        </h1>
                        <p className="text-lg mt-8">
                            Organize seu negócio, <span className="text-primary">economize tempo e gere orçamentos profissionais</span> em poucos cliques e na palma da sua mão.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col h-ful lg:w-[50%] items-center justify-center px-4">
                <LoginForm />
            </div>

        </div>
    )
}