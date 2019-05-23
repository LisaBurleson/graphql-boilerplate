const bcrypt = require( 'bcrypt' );
const jwt = require( 'jsonwebtoken' );
const ms = require( 'ms' );
const fs = require( 'fs' );
const path = require( 'path' );
const saltRounds = 12;

const plainTextPassword = 'some simple password';

const payload = {userId: '20347nsdjflss80547345j3jh4hh5'};
// simpleJwt( plainTextPassword, saltRounds, payload );

const token = rsaJwtPrivate( payload );
console.log('rsa private token = ', token);
console.log('verify token result = ', verifyRsaToken(token));

function verifyRsaToken( token ) {
  const PUBLIC_KEY = fs.readFileSync( path.resolve( __dirname, './secret/public.key' ), {encoding: 'utf8'} );
  return jwt.verify(token,  PUBLIC_KEY, {algorithm: 'RS256'}, (err, decoded) => {
    if(err){
      console.log('verifyRsaToken, failed to verify token', err.message);
    }
    console.log(decoded);
    return true;
  });
}
function rsaJwtPrivate( payload ) {
  const PRIVATE_KEY = fs.readFileSync( path.resolve( __dirname, './secret/private.key' ), {encoding: 'utf8'} );
  return jwt.sign(payload, PRIVATE_KEY, {algorithm: 'RS256'});
}

function simpleJwt( plainText, saltRounds, payload ) {
  const JWT_SECRET = 'akkdjfa2342jjsd;93842!@@#%@sdkkss0;293234';
  const hashedPassword = bcrypt.hashSync( plainTextPassword, saltRounds );
  console.log( 'plain', plainTextPassword, ' hash', hashedPassword );
  const isSame = bcrypt.compareSync( plainTextPassword, hashedPassword );

  console.log( 'is same password? ', isSame );

  const token = jwt.sign(
      payload,
      JWT_SECRET,
      {expiresIn: '20d'}
  );

  console.log( 'token', token );
  jwt.verify( token, JWT_SECRET, ( err, decoded ) => {
    console.log( 'valid decoded = ', decoded, 'iat = ', ms( decoded.iat, {long: true} ),
        'exp = ', ms( decoded.exp, {long: true} ) );
  } );

  jwt.verify( token, 'not the real secret', ( err, decoded ) => {
    console.log( 'invalid decoding err = ', err.message );
  } );

}
