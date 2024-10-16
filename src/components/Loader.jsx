import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html
      center
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.8)',
      }}
    >
      <div
        role="status"
        aria-label="Loading..."
        className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin"
      ></div>
    </Html>
  );
};

export default Loader;
