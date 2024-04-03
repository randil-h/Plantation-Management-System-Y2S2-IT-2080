import React from "react";

export default function CropTwoTile() {
    return(
        <div>
            <li className="rounded-xl bg-lime-100 px-6 py-8 shadow-sm hover:transform hover:scale-110 transition-transform duration-300">
                <a href="/templates" className="group">
                    <img src="https://cdn-icons-png.flaticon.com/512/681/681028.png" alt=""
                         className="mx-auto h-10 w-10"/>
                    <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                        Papaya
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-secondary-500"> 3 Acres <br/> Upcoming harvest
                        in 5 days </p>
                </a>
            </li>
        </div>
    );
}