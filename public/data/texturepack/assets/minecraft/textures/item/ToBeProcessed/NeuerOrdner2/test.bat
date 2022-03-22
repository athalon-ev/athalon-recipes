SET add=710
SET amo=2
SET ext=json
SET pat=E:\Allerlei\Minecraft\Client\profiles\Test\resourcepacks\Athalon\assets\minecraft\textures\item\ToBeProcessed\ToProcess
SETLOCAL EnableDelayedExpansion
FOR /R %pat% %%f in (*.%ext%) DO (
  ECHO %%f
  SET number=%%~nf
  SET number=0000!number!
  SET number=%add%!number:~-%amo%!
  REN %%f !number!.%ext%
  ECHO !number!
)