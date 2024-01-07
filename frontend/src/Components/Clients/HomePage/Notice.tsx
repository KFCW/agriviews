import '../../Clients/styles/Components/NavBar/Vitrines/style.css'

interface NoticeProps {
    product: string;
  }
  
  const Notice: React.FC<NoticeProps> = ({ product}) => {
    return (
      <div className='notice'>
        {product}
      </div>
    );
  };
  
export default Notice
