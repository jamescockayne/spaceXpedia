export const queryById = async (collection, id, fieldsToInclude) => {
  try {
    const url = `https://api.spacexdata.com/v4/${collection}/query`;
    const body = {
      query: {
        _id: id,
      },
      options: {},
    };

    if (fieldsToInclude) {
      body.options.select = {};
      for (const field of fieldsToInclude) {
        body.options.select[field] = 1;
      }
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
