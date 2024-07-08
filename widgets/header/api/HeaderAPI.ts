// shared/components/Header/api/HeaderAPI.ts

const fetchUserDetails = async (userId: string) => {
  try {
    const response = await fetch(`/api/users/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};

export default {
  fetchUserDetails,
};
