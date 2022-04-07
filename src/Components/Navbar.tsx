import Button from 'react-bootstrap/Button';

interface AppProps {
  greeting: string
  setGreeting: any
}

const Navbar = (props: AppProps) => {
  const { greeting, setGreeting } = props;

  const changeGreeting = (): void => {
    if(greeting === "hello papis" ) {
      setGreeting('hello my friends');
    } else {
      setGreeting('hello papis');
    }
  }

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <Button onClick={changeGreeting}>Change</Button>
    </div>
  )
}

export default Navbar;
