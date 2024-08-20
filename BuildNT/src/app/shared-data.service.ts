import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private data: any[] = [
    {
      id: 'C0001',
      clientName: 'SMRT',
      email: 'support@gmail.com',
      project: '02',
      onboardDate: '12/07/2023',
      path: 'smrt-details',
      name: 'SMRT',
      onboardingDate: new Date('2023-01-01'),
      contactPerson: 'Vino',
      phoneNumber: '93835 23466',
      location: 'Chennai',
      accountManager: 'Tushar B',
      address: '72H Poorur, Chennai, 600028',
    },
    {
      id: 'C0002',
      clientName: 'Hitachi',
      email: 'support@hithi.com',
      project: '04',
      onboardDate: '02/05/2023',
      path: 'smrt-details',
      name: 'Hitachi',
      onboardingDate: new Date('2023-01-01'),
      contactPerson: 'Ajay',
      phoneNumber: '8667489148',
      location: 'tiruvannamalai',
      accountManager: 'R ajay',
      address: '72H Poorur, tiruvsanan, 600028',

    },
    {
      id: 'C0003',
      clientName: 'BuildNT',
      email: 'support@buildnt.com',
      project: '04',
      onboardDate: '22/09/2023',
      path: 'smrt-details',
    },
    {
      id: 'C0004',
      clientName: 'Gaura',
      email: 'support@gaura.com',
      project: '02',
      onboardDate: '05/12/2023',
      path: 'smrt-details',
    },
  ]; // Define the array of objects

  setData(receiveData: any[]) {
    console.log(receiveData, 'data');
    this.data = receiveData;
  }

  getData(): any[] {
    return this.data;
  }

  getClientById(id: string): any | undefined {
    return this.data.find((client) => client.id === id);
  }
}
