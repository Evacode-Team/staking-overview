import { SetStateAction, useCallback, useState } from 'react';

import Image from 'next/image';

import { Button, FormControl, RadioGroup, Radio, FormLabel, Text, Input, VStack, HStack, Checkbox } from '@/shared/ui';
import { check } from '../../../public/icons';

export const RegistationForm = () => {
  const [gender, setGender] = useState('');
  const [isAgree, setAgree] = useState(false);

  const handleGender = useCallback((_v: SetStateAction<string>) => {
    setGender(_v);
  }, []);

  const handleAgree = useCallback(() => setAgree(!isAgree), [isAgree]);

  return (
    <VStack gap="28px" w="100%">
      <VStack gap="18px" w="100%">
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input type="text" variant="formInput" placeholder="Oleg" required />
        </FormControl>

        <FormControl>
          <FormLabel>Last name</FormLabel>
          <Input type="text" variant="formInput" placeholder="Olegov" required />
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" variant="formInput" placeholder="email@gmail.com" required />
        </FormControl>

        {/* TODO: внедрить datepicker */}
        <FormControl>
          <FormLabel>Birthdate</FormLabel>
          <Input type="text" variant="formInput" placeholder="10/10/1991" required />
        </FormControl>

        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup onChange={handleGender} value={gender} gap="18px">
            <HStack direction="row">
              <Radio value="Male">
                <Text variant="label"> Male</Text>
              </Radio>
              <Radio value="Female">
                <Text variant="label"> Female</Text>
              </Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
      </VStack>

      <VStack w="100%">
        <FormControl>
          <HStack spacing={5} direction="row">
            <Checkbox
              fontSize="12px"
              icon={isAgree ? <Image src={check} alt="icon check" /> : undefined}
              onClick={handleAgree}
            >
              <Text variant="label">I have read and agree to Terms of Service</Text>
            </Checkbox>
          </HStack>
        </FormControl>
      </VStack>
      <Button variant="primary">SignIn</Button>
    </VStack>
  );
};
