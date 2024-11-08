const Loader = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="loader">
          <div className="dress"></div>
        </div>
        <h1 className="brand-name text-2xl font-viga ">Liana-Kreations</h1>
        <style>{`
          .loader {
            position: relative;
            width: 100px;
            height: 100px;
            animation: spin 2s infinite linear;
          }
  
          .dress {
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #ff6b6b, #ffcc6b);
            clip-path: polygon(50% 0%, 60% 20%, 80% 20%, 65% 40%, 75% 80%, 50% 60%, 25% 80%, 35% 40%, 20% 20%, 40% 20%);
            position: absolute;
            top: 0;
            left: 0;
            animation: float 2s ease-in-out infinite;
          }
  
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
  
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
  
          .brand-name {
            margin-top: 20px;
            font-size: 24px;
            font-family: 'Arial', sans-serif;
            font-weight: bold;
            color: #3a3a3a; /* Change to match your theme */
            text-align: center;
            animation: fadeIn 1s ease-in-out;
          }
  
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}</style>
      </div>
    );
  };
  
  export default Loader;
  