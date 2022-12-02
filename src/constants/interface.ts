export interface IRoute {
  path: string;
  component: React.FC;
  layout?: 'auth';
}
