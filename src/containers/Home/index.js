import React from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="content">
      oiii, {user.name}
      <button onClick={handleSignOut}>sair!</button>
    </div>
  );
};

export default Home;
