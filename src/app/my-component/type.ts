export interface TodoType {
  id: string;
  title: string;
  completed: boolean;
}
export interface AlertType {
  message: string;
  type: 'success' | 'danger';
}
