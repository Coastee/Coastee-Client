import { useCallback, useState } from "react";

export const useInterestSelection = () => {
  const formData = JSON.parse(sessionStorage.getItem("signup") || "{}");
  const initialSelection = Array.isArray(formData.interests)
    ? formData.interests
    : [];

  const [interests, setInterests] = useState<string[]>(initialSelection);

  const handleCheckboxChange = useCallback((interest: string) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  }, []);

  const handleReset = () => {
    setInterests([]);
  };

  return {
    interests,
    handleCheckboxChange,
    handleReset,
  };
};
