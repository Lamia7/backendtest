import { Mission, TitreDeSejour } from './models';
import Utils from './utils';

/**
 * Verify 'titre de sejour' validity fo the mission
 * @param {Mission} mission Mission to verify
 * @param {TitreDeSejour[]} titres 'Titre de sejour' list
 * @returns {boolean} True if documents are valid for the mission duration, else false
 */
export const verify = (mission: Mission, titres: TitreDeSejour[]): boolean => {
  const missionDays: Date[] = Utils.getDaysInRange(
    mission.dateStart,
    mission.dateEnd
  );
  for (const missionDay of missionDays) {
    const isTitreDeSejourCovering: TitreDeSejour | undefined = titres.find(
      (titreDeSejour) =>
        missionDay >= titreDeSejour.dateStart &&
        missionDay <= titreDeSejour.dateEnd
    );
    if (!isTitreDeSejourCovering) {
      return false;
    }
  }

  return true;
};
