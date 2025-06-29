import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'; // fixed import
import Details from '../Components/Details';

const DetailsPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => {
        const matched = data.find((p) => p.id === id);
        setProject(matched || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to load projects:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center mt-20 text-lg text-gray-500">Loading...</div>;
  }

  if (!project) {
    return <div className="text-center mt-20 text-red-500 text-lg">Project not found!</div>;
  }

  return (
    <div className='mt-30 mb-30'>
      <Details project={project} />
    </div>
  );
};

export default DetailsPage;
