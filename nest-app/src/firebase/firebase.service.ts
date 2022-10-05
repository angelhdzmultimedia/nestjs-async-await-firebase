import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Config } from 'src/models/config.model';
import { Auth, getAuth } from 'firebase/auth';
import {
  CollectionReference,
  Firestore,
  getFirestore,
  collection,
} from 'firebase/firestore';

@Injectable()
export class FirebaseService {
  public app: FirebaseApp;
  public auth: Auth;
  public fireStore: Firestore;

  // Collections
  public usersCollection: CollectionReference;

  constructor(private configService: ConfigService<Config>) {
    this.app = initializeApp({
      apiKey: configService.get<string>('apiKey'),
      appId: configService.get<string>('appId'),
      authDomain: configService.get<string>('authDomain'),
      measurementId: configService.get<string>('measurementId'),
      messagingSenderId: configService.get<string>('messagingSenderId'),
      projectId: configService.get<string>('projectId'),
      storageBucket: configService.get<string>('storageBucket'),
    });

    this.auth = getAuth(this.app);
    this.fireStore = getFirestore(this.app);

    this._createCollections();
  }

  private _createCollections() {
    this.usersCollection = collection(this.fireStore, 'users');
  }
}
