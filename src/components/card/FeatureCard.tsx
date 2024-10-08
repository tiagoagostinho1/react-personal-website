import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './FeatureCard.module.css';
import image from './image.svg';
import React from 'react';

export function FeatureCard({ isShowTextOnLeft, title, description }) {
  if(isShowTextOnLeft){
    return (
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>modern</span> React <br /> components library
            </Title>
            <Text c="dimmed" mt="md">
              {description}
            </Text>
  
            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                Source code
              </Button>
            </Group>
          </div>
          <Image src={image.src} className={classes.image} />
        </div>
      </Container>
    );
  }
  else{
    return (
      <Container size="lg">
        <div className={classes.inner}>
          <Image src={image.src} className={classes.image} />
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>modern</span> React <br /> components library
            </Title>
            <Text c="dimmed" mt="md">
              {description}
            </Text>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                Source code
              </Button>
            </Group>
          </div>
          
        </div>
      </Container>
    );
  }
}
