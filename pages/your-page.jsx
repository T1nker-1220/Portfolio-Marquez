import SafeComponent from '../components/SafeComponent';

export default function YourPage() {
  return (
    <div>
      <h1>Your Page</h1>
      
      {/* Wrap problematic components with SafeComponent */}
      <SafeComponent>
        {/* Put your components that use browser APIs here */}
      </SafeComponent>
    </div>
  );
} 