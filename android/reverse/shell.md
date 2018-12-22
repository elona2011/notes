# android key method

attachBaseContext(context){
  super(context)
  
  if(b(context)==null)return

  d(context)
  h=new Handler(getMainLooper())

}

a(){
  
}

b(base){
  if(!base)return 
  d=base
  mPKName=getBaseContext().getPackageName()
  try{
    ApplicationInfo applicationInfo=base.getPackageManager().getApplicationInfo(mPKName,0x80)
  }catch(PackageManager$NameNotFoundException e){

  }
  if(applicationInfo==null)return 
  mOldAPPName=applicationInfo.metaData.getString("TxAppEntry")
  mSrcPath=d.getApplicationInfo().sourceDir
  try{
    g=d.getPackageManager().getPackageInfo(mPKName,0).versionName
  }catch(Exception e){

  }
  mVerFilePath="/data/data/"
  mVerFilePath += mPKName;
  mVerFilePath += "/tx_shell/";
  a = mVerFilePath;
  File file=new File(mVerFilePath)
  if(file.exists()==null){
    file.mkdir()
  }
  e=mVerFilePath+"libshella.so"
  f=mVerFilePath+"libshellb.so"
  mSocPath=mVerFilePath+"libshellc.so"
  mVerFilePath+="shell_version"
  return true
}

d(context){
  AssetManager assetManager=context.getAssets()
  String s=context.getApplicationInfo().sourceDir
  try{
    System.loadLibrary("nfix")
    fixNativeResource(assetManager,s)
  }

  try{

  }
  return 
}

e(){
  ApplicationInfo applicationInfo=this.getApplicationInfo()
  String v7=applicationInfo.dataDir+"/tx_shell"
  b=applicationInfo.sourceDir
  if(android.os.Build.VERSION.SDK_INT>=0x13){
    
  }
}