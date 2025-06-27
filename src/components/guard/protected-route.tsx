"use client";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/app/loading";

interface Props {
  children: ReactNode;
}

export function ProtectedRoute({ children }: Props) {
  const router = useRouter();

  // null = هنوز چک نکردیم
  // true  = لاگین هست
  // false = لاگین نیست
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("randomUser");
    if (user) {
      setAuthorized(true);
    } else {
      setAuthorized(false);
      router.replace("/auth");
    }
  }, [router]);

  if (authorized === null) return <Loader />;

  return <>{children}</>;
}
