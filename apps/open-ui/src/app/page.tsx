import styles from './page.module.css';
import { Select } from '@open-ui/components';
import { ListBoxItem, type Key } from 'react-aria-components';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */

  const options = [
    { name: 'Koala' },
    { name: 'Kangaroo' },
    { name: 'Platypus' },
    { name: 'Bald Eagle' },
    { name: 'Bison' },
    { name: 'Skunk' },
  ];
  // const [animal, setAnimal] = useState<Key>('Bison');

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          {/* <Select
            label="Pick an animal (controlled)"
            items={options}
            selectedKey={animal}
            onSelectionChange={(selected) => setAnimal(selected)}
          >
            {(item) => <ListBoxItem id={item.name}>{item.name}</ListBoxItem>}
          </Select> */}
          foo
        </div>
      </div>
    </div>
  );
}
