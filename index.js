// Write your classes here

class Tree{
   constructor(species){
    this.species=species;
  }
  
  static definition(){
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
  }
  
}

let tree = new Tree( 'Maple' )
tree.species

class Deciduous extends Tree{
 constructor(species,name){
    super(species);
    this.name=name;
  }
  
   static definition(){
    return super.definition() + '  Deciduous trees shed their leaves annually.';
  }
}


/*describe( "Tree", () => {
  let tree

describe( "Deciduous", () => {
  let oak

  it( 'initializes with two parameters, species and name, and uses `super` to set `species`', () => {
    oak = new Deciduous( 'Oak', 'Professor' )
    expect( oak.species )
      .to.eql( 'Oak' )
    expect( oak.name )
      .to.eql( 'Professor' )
  } )

  it( 'has a static method `definition` that uses `super.definition` and expands on it', () => {
    expect( Deciduous.definition() )
      .to.eql( "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Deciduous trees shed their leaves annually." )
  } )

} )

describe( "Evergreen", () => {
  let fir

  it( 'initializes with two parameters, species and name, and uses `super` to set `species`', () => {
    fir = new Evergreen( 'Fir', 'Douglas' )
    expect( fir.species )
      .to.eql( 'Fir' )
    expect( fir.name )
      .to.eql( 'Douglas' )
  } )

  it( 'has a static method `definition` that uses `super.definition` and expands on it', () => {
    expect( Evergreen.definition() )
      .to.eql( "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Evergreens keep their leaves all year round." )
  } )

} )*/
