import { helper } from '@ember/component/helper';

export default helper(function arrayContains(params/*, hash*/) {
  const [items, value, prop] = params; //on défini des constantes égal au paramètre récupéré
  let id = prop || 'id'; //si id est nul alors on lui donne la valeur prop
  return items.filterBy(id, value).length > 0; //on retourne les items qui ont une longueur supérieur à 0
});
