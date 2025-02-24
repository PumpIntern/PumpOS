const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function main() {
  try {
    // Execute hardhat flatten
    const output = execSync('npx hardhat flatten contracts/pumptoken.sol').toString();
    
    // Remove duplicate SPDX licenses
    const cleanedOutput = output.replace(/\/\/ SPDX-License-Identifier: MIT\n/g, '');
    const finalOutput = '// SPDX-License-Identifier: MIT\n' + cleanedOutput;
    
    // Save result
    fs.writeFileSync(
      path.join(__dirname, '../contracts/pumpOSToken.flattened.sol'),
      finalOutput
    );
    
    console.log('Flattened contract saved to contracts/pumpOSToken.flattened.sol');
  } catch (error) {
    console.error('Error flattening contract:', error);
    process.exit(1);
  }
}

main(); 