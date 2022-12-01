import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'

function AccountSettings() {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="firstName">
        <FormLabel>First Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="Hassan" />
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>Last Name</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          placeholder="Shan"
        />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Phone Number</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder="(92) 312-2328910"
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email Address</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder="xyz@example.com"
        />
      </FormControl>
      <FormControl id="city">
        <FormLabel>City</FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Select State">
          <option value="Karachi" selected>
            Karachi
          </option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Saddar">Saddar</option>
          <option value="	Islamabad"> Islamabad</option>
          <option value="	Lahore"> Lahore</option>
          <option value="	Peshawar"> Peshawar</option>
          <option value="		Faisalabad"> Faisalabad</option>

        </Select>
      </FormControl>
      <FormControl id="country">
        <FormLabel>Country</FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Select country">
          <option value="India" selected>
            Pakistan
          </option>
        </Select>
      </FormControl>
    </Grid>
  )
}

export default AccountSettings
