import React from "react";

function ErrorPage() {
    return (
        <section className="flex items-center h-screen p-16 bg-white">
            <div className="container flex flex-col items-center">
                <div className="flex flex-col gap-6 max-w-full text-center">
                    <h2 className="font-extrabold text-7xl text-black dark:text-black">Error 404
                    </h2>
                    <p className="text-2xl md:text-3xl dark:text-black">Sorry, we couldn't find this page.</p>
                    <p className = "text-xl md:text-xl dark:text-black">If the issue persists, please contact Admin at +94 77 185 3755</p>
                    <a href="/" className="px-8 py-4 text-xl font-semibold rounded-3xl bg-lime-100 text-black hover:text-white hover:bg-lime-600">
                        Back to home
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ErrorPage;
