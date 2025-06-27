'use client';
import { ProtectedRoute } from "@/components/guard/protected-route";
import style from "./dashboard.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";

// نوع ساده‌شده برای داده randomuser
type UserData = {
  results: Array<{
    name: { first: string; last: string };
    dob: { age: number };
    location: { country: string };
    email: string;
    picture: { large: string };
  }>;
};

const DashboardPage = () => {
  const [localData, setLocalData] = useState<UserData | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("randomUser");
      if (data) setLocalData(JSON.parse(data));
    }
  }, []);

  return (
    <ProtectedRoute>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.content}>
            {localData && (
              <>
                <Image
                  src={localData.results[0].picture.large}
                  alt="avatar"
                  width={100}
                  height={100}
                  className={style.avatar}
                  loading="lazy"
                />
                <p className={style.description}>First Name: {localData.results[0].name.first}</p>
                <p className={style.description}>Last Name: {localData.results[0].name.last}</p>
                <p className={style.description}>Age: {localData.results[0].dob.age}</p>
                <p className={style.description}>Country: {localData.results[0].location.country}</p>
                <p className={style.description}>Email: {localData.results[0].email}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;
