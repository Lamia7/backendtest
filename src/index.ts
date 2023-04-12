import { Mission, TitreDeSejour } from './models';
import Utils from './utils';

/**
 * Verify 'titre de sejour' validity fo the mission
 * @param mission
 * @param titres
 */
export const verify = (mission: Mission, titres: TitreDeSejour[]): boolean => {
  const missionDays = Utils.getDaysInRange(mission.dateStart, mission.dateEnd);
  for (const missionDay of missionDays) {
    const isTitreDeSejourCovering = titres.find(
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
