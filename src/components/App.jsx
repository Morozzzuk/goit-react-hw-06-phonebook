import Layout from './Layout/Layout';
import MainTitle from './Layout/Title';
import FormList from './FormList/FormList';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

function App() {
  return (
    <Layout>
      <MainTitle title="Phonebook" />
      <FormList />
      <MainTitle title="Contacts" />
      <Filter />
      <ContactList />
    </Layout>
  );
}

export default App;
