import { Button, FormControl, FormLabel, Input, VStack } from "@/shared/ui";

export const LoginForm = () => {
    return (
      <VStack gap="28px" w="100%">
        <VStack gap="18px" w="100%">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" variant="formInput" placeholder="Enter your email" />
          </FormControl>
  
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" variant="formInput" placeholder="Enter your password" />
          </FormControl>
        </VStack>
        <Button variant="primary">SignIn</Button>
      </VStack>
    );
  };
  