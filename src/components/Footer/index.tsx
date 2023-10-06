import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '鱼皮出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '知识星球',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: '编程导航',
          href: 'https://ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> 鱼皮 Github</>,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },

      ]}
    />
  );
};
export default Footer;
