import Form from "../components/Form";
import Layout from "../components/Layout";

export default function App() {
  return (
    <Layout
      title="App | CV Generator"
      description="The best and easiest way to generate your CV"
    >
      <main>
        <Form />
      </main>
    </Layout>
  );
}
