import { Button, FormControl, FormLabel, Input, VStack } from "@/shared/ui";

export const RecoveryForm = () => {
    return (
      <VStack gap="28px" w="100%">
        <VStack gap="18px" w="100%">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" variant="formInput" placeholder="Enter your email" />
          </FormControl>
        </VStack>
        <Button variant="primary">Start recovery</Button>
      </VStack>
    );
  };
  