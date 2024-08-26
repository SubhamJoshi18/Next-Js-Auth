import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

export default async function handle(req, res) {
  const { title, content } = req.body;

  // Get the session data to identify the user
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  try {
    // Find the user in the database using their email from the session
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    // Create the post and associate it with the user's ID
    const result = await prisma.post.create({
      data: {
        title: title,
        content: content,
        userId: user.id, // Associate the post with the user
      },
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
}
