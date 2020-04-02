const url = "/.netlify/functions/buildings";

export class JokesService {
  async getBuildings() {
    try {
      const response = await fetch(`${url}`);
      if (!response.ok) throw Error(response.message);
      const buildingObj = await response.json();
      return (buildingObj && buildingObj.data) || "No buildings found";
    } catch (error) {
      throw error;
    }
  }
}

export default new JokesService();
