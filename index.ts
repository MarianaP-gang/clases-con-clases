// crear las clases Edificio, Piso y Departamento aquí

class Departamento {
  name: string;
  constructor (name: string,){
      this.name = name;
  }
  getName(){
      return this.name;
  };
}
class Piso {
  name: string;
  departamentos: Departamento[]= []
  constructor(name){
      this.name = name;
  }
  pushDepartamento(departamentos: Departamento){
      return this.departamentos.push(departamentos);
  };
  getDepartamentos():Departamento[]{
      return this.departamentos;
  };
}
class Edificio {
  pisos: Piso[];
  departamentos: Departamento[];
constructor(pisos: Piso[]){
  this.pisos = pisos;
}
  addDepartamentoToPiso(nombreDePiso:string, departamentos:Departamento){
      const pisoCorrespondiente = this.pisos.find(p => p.name ==nombreDePiso)
      return pisoCorrespondiente.pushDepartamento(departamentos)
  };
  getDepartamentosByPiso(nombreDePiso:string): Departamento[]{
      const pisoCorrespondiente = this.pisos.find(p => p.name ==nombreDePiso)
      return pisoCorrespondiente.getDepartamentos();
  };

}

//no modificar este test
function testClaseEdificio() {
   const unPiso = new Piso("planta baja");
   const otroPiso = new Piso("primer piso");
   const unEdificio = new Edificio([unPiso, otroPiso]);
   const deptoUno = new Departamento("depto uno");
   const deptoDos = new Departamento("depto dos");
   const deptoTres = new Departamento("depto tres");
   unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
   unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
   unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

   const deptos = unEdificio.getDepartamentosByPiso("planta baja");
   const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

   if (
     Array.isArray(deptosEmpty) &&
     deptosEmpty.length == 0 &&
     deptos.length == 3 &&
     deptos[2].getName() == "depto tres"
   ) {
     console.log("testClaseBandaApartment passed");
   } else {
     throw "testClaseBandaApartment not passed";
   }
 }

function main() {
   testClaseEdificio();
  console.log("Hice un cambio");
}
main();
