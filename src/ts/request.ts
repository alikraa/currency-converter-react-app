export const serverRequest = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`request error: ${response.status}`);
    } else {
      const json = await response.json();
      return json;
    }
  } catch (error) {
    return (error as Error).message;
  }
};
