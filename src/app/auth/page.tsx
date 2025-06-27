"use client";
import { NextPage } from "next";
import style from "./auth.module.scss";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AuthPage: NextPage = () => {
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const isValidPhone = /^09\d{9}$/.test(phone);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    input.value = input.value.replace(/[^0-9]/g, "");
    setPhone(input.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPhone("");

    try {
      if (isValidPhone) {
        const response = await fetch(
          "https://randomuser.me/api?results=1&nat=us"
        );
        const data = await response.json();

        localStorage.setItem("randomUser", JSON.stringify(data));
        router.push("/dashboard");
      }
    } catch (err) {
      console.error("Error fetching random user:", err);
    }
  };

  return (
    <div className={style["login-box"]}>
      <form onSubmit={handleSubmit}>
        <h3 className={style["login-title"]}>Login Page</h3>
        <div className={style["user-box"]}>
          <input
            type="tel"
            name="phone"
            autoComplete="off"
            required
            pattern="^09\d{9}$"
            maxLength={11}
            inputMode="numeric"
            onInput={handleInput}
            value={phone}
            onBlur={(e) => {
              if (phone) e.target.focus();
            }}
          />
          <label>Phone Number</label>
        </div>
        <center>
          <button
            type="submit"
            disabled={!isValidPhone}
            className={style["login-btn"]}
          >
            login
            <span></span>
          </button>
        </center>
      </form>
    </div>
  );
};

export default AuthPage;
