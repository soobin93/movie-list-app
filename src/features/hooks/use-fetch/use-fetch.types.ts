export type ApiResponse = {
  data: any;
  error: boolean;
  fire: () => Promise<void>;
};
