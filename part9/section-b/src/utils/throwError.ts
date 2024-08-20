export class ClientError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = "Client Error";
    Object.setPrototypeOf(this, ClientError.prototype);
  }
}

const throwClientError = (status: number, message: string): void => {
  throw new ClientError(status, message);
};

export default throwClientError;
