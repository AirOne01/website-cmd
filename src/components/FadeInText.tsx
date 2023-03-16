import Typical from 'react-typical';

type Props = {
  children: string;
}

const FadeInText = ({ children: text }: Props) => <Typical steps={[text, 0]} wrapper='span'/>

export default FadeInText;
