==================================0==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
var ty;
function testFile( __ARGV_33__ ){ __FUNC_33__ }
var voice_recorder;
function testRecorder( __ARGV_172__ ){ __FUNC_172__ }
function testNotification( __ARGV_186__ ){ __FUNC_186__ }
function testTCP( __ARGV_205__ ){ __FUNC_205__ }
function testHttpObj( __ARGV_222__ ){ __FUNC_222__ }
function testSdk( __ARGV_309__ ){ __FUNC_309__ }
function testMsgSimulator( __ARGV_343__ ){ __FUNC_343__ }
function testUtil( __ARGV_466__ ){ __FUNC_466__ }
function testSystemInfo( __ARGV_477__ ){ __FUNC_477__ }
function testLocalStorage( __ARGV_484__ ){ __FUNC_484__ }
function test_encode_decode( __ARGV_492__ ){ __FUNC_492__ }
function testsendfunction( __ARGV_504__ ){ __FUNC_504__ }
function testDump( __ARGV_533__ ){ __FUNC_533__ }
function deepCopy( __ARGV_554__ ){ __FUNC_554__ }
function genPathInfo( __ARGV_555__ ){ __FUNC_555__ }
function strMergeBlank( __ARGV_556__ ){ __FUNC_556__ }
function strLTrim( __ARGV_557__ ){ __FUNC_557__ }
function strRTrim( __ARGV_558__ ){ __FUNC_558__ }
function strTrim( __ARGV_559__ ){ __FUNC_559__ }
function byteLength( __ARGV_560__ ){ __FUNC_560__ }
function formatNumberThousands( __ARGV_561__ ){ __FUNC_561__ }
var tui;
function DUMP_OBJ( __ARGV_732__ ){ __FUNC_732__ }
function test( __ARGV_733__ ){ __FUNC_733__ }
if(!(ty)||("undefined" == typeof ty)){
ty = ty||{};
require("cocos2dx_script/build/jsb_boot.js");
cc.game.onStart=function () { __FUNC_1__ };
cc.game.onPrepareLoadCocosScript=function () { __FUNC_2__ };
cc.game.run();
ty.IS_DEBUG=false;
}
ty.isIOS=function () { __FUNC_3__ };
ty.isMAC=function () { __FUNC_4__ };
ty.isAndroid=function () { __FUNC_5__ };
ty.isWindows=function () { __FUNC_6__ };
ty.isWP8=function () { __FUNC_7__ };
ty.isWINRT=function () { __FUNC_8__ };
ty.isHTML=function () { __FUNC_9__ };
ty.LOGD=function () { __FUNC_10__ };
ty.LOGI=function () { __FUNC_11__ };
ty.LOGW=function () { __FUNC_12__ };
ty.LOGE=function () { __FUNC_13__ };
ty.LOGF=function () { __FUNC_14__ };
ty._FileManager=cc.Class.extend({_TAG:"ty.FileManager",ctor:function () { __FUNC_15__ },LOGD:function () { __FUNC_16__ },readFromResource:function () { __FUNC_17__ },getWritableRootPath:function () { __FUNC_18__ },getAvailablelCapacity:function () { __FUNC_19__ },createDir:function () { __FUNC_20__ },createFile:function () { __FUNC_21__ },checkFileExist:function () { __FUNC_22__ },readFile:function () { __FUNC_23__ },writeFile:function () { __FUNC_24__ },copyFile:function () { __FUNC_25__ },isDirectory:function () { __FUNC_26__ },getFileSize:function () { __FUNC_27__ },deleteFile:function () { __FUNC_28__ },listSubFiles:function () { __FUNC_29__ },readFileLineByLine:function () { __FUNC_30__ },writeFileLineByLine:function () { __FUNC_31__ },getOpenFileName:function () { __FUNC_32__ }});
ty.FileManager=ty.IS_DEBUG||new ty._FileManager();
ty._Tuyooalert=cc.Class.extend({_TAG:"ty.tuyooalert",ctor:function () { __FUNC_34__ },destroy:function () { __FUNC_36__ },alert:function () { __FUNC_37__ }});
ty.alert=function () { __FUNC_38__ };
ty.superAlert=function () { __FUNC_39__ };
ty.PublishersManager=(function () { __FUNC_40__ })();
ty.SocketStatus={SOCKET_STATUS_CONNECTING:1,SOCKET_STATUS_OPEN:2,SOCKET_STATUS_CLOSING:3,SOCKET_STATUS_CLOSED:4,SOCKET_STATUS_ERROR:5,SOCKET_STATUS_RECONNECT:6,SOCKET_STATUS_UNKNOWN:-1};
ty.KeyeventCode={KEYCODE_BACK:4,KEYCODE_MENU:82};
ty.AesMode={AES_ECB:0,AES_CBC:1,AES_CFB128:2,AES_CFB1:3,AES_CFB8:4,AES_OFB128:5,AES_CTR128:6,AES_IGE:7,AES_BI_IGE:8,AES_MODEL_N:9};
ty.RsaMode={RSA_PKCS1:1,RSA_PKCS1_OAEP:4};
ty.COMPLAINTYPE={HEAD:"1",NAME:"2"};
ty.defaulDesignWidth=640;
ty.defaulDesignHeight=960;
ty.Orientation={LANDSCAPE:0,PORTRAIT:1,SWITCH:2};
ty.EventType=(function () { __FUNC_43__ })();
ty.NotificationCenter=(function () { __FUNC_44__ })();
ty.NetworkMsgRouter=cc.Class.extend({_TAG:"ty.NetworkMsgRouter",dispatcher:{},ctor:function () { __FUNC_52__ },init:function () { __FUNC_53__ },destroy:function () { __FUNC_54__ },processMsg:function () { __FUNC_55__ },registerMsg:function () { __FUNC_56__ },removeMsg:function () { __FUNC_57__ }});
ty.netMsgDispatcher=new ty.NetworkMsgRouter();
ty._EventManager=cc.Class.extend({_TAG:"ty.EventManager",registerAccelaration:function () { __FUNC_58__ },unregisterAccleration:function () { __FUNC_60__ },registerTouch:function () { __FUNC_61__ },unregisterTouch:function () { __FUNC_66__ }});
ty.extend=ty.extend||{};
ty.extend.eventProxyExtend=function () { __FUNC_67__ };
ty.extend=ty.extend||{};
ty.extend.schedulerExtend=function () { __FUNC_76__ };
(function () { __FUNC_86__ })();
(function () { __FUNC_93__ })();
(function () { __FUNC_106__ })();
ty.BaseController=cc.Class.extend({_TAG:"ty.BaseController",_modelDelegate:null,ctor:function () { __FUNC_116__ },destroy:function () { __FUNC_117__ },onDestroy:function () { __FUNC_118__ },init:function () { __FUNC_119__ },onInit:function () { __FUNC_120__ },setModelDelegate:function () { __FUNC_121__ },getModelDelegate:function () { __FUNC_122__ },load:function () { __FUNC_123__ },onDidLoadFromCCB:function () { __FUNC_124__ },onLoad:function () { __FUNC_125__ },bindStateWithBtn:function () { __FUNC_129__ },changeState:function () { __FUNC_130__ },stateChanged:function () { __FUNC_131__ },_btnSelected:function () { __FUNC_132__ },playAnimation:function () { __FUNC_133__ },resetLabelColor:function () { __FUNC_134__ },onRootNodeEnterTransitionDidFinish:function () { __FUNC_135__ },onRootNodeEnter:function () { __FUNC_136__ },onRootNodeExit:function () { __FUNC_137__ },_onMsgLanguageChanged:function () { __FUNC_138__ },onLanguageChanged:function () { __FUNC_139__ },show:function () { __FUNC_140__ },onShow:function () { __FUNC_141__ },registerControlCallback:function () { __FUNC_142__ },onRegisterControlCallback:function () { __FUNC_143__ },registerMsgCallback:function () { __FUNC_144__ },onRegisterMsgCallback:function () { __FUNC_145__ },update:function () { __FUNC_146__ },onUpdate:function () { __FUNC_147__ },replaceScene:function () { __FUNC_148__ },playAnimThenCallBack:function () { __FUNC_149__ },playAnimThenRemove:function () { __FUNC_150__ },delayRemove:function () { __FUNC_151__ },removeSelf:function () { __FUNC_152__ }});
ty._ModelDelegateBase=cc.Class.extend({_TAG:"ty.ModelDelegateBase",ctor:function () { __FUNC_153__ },destroy:function () { __FUNC_154__ },onInit:function () { __FUNC_155__ },onLoad:function () { __FUNC_156__ }});
ty.BaseAnimController=ty.BaseController.extend({_TAG:"ty.BaseAnimController",ctor:function () { __FUNC_157__ },onLoad:function () { __FUNC_158__ },dumpCallbackNames:function () { __FUNC_159__ },playAnim:function () { __FUNC_160__ },registerSequenceEndCallback:function () { __FUNC_161__ }});
ty._VoiceRecorder=cc.Class.extend({_TAG:"ty.VoiceRecorder",ctor:function () { __FUNC_162__ },startRecordAudio:function () { __FUNC_163__ },stopRecorder:function () { __FUNC_164__ },playRecordedAudio:function () { __FUNC_165__ },playRecordedAudioFromData:function () { __FUNC_166__ },isRecording:function () { __FUNC_167__ },onTimePassed:function () { __FUNC_168__ },onNewAmplitude:function () { __FUNC_169__ },onRecorderError:function () { __FUNC_170__ },onEncodedAudio:function () { __FUNC_171__ }});
ty.testTimes=1;
ty._NotificationManager=cc.Class.extend({_TAG:"ty.NotificationManager",ctor:function () { __FUNC_173__ },getInitNotification:function () { __FUNC_174__ },pushLocalNotification:function () { __FUNC_175__ },cancelLocalNotification:function () { __FUNC_176__ },cancelAllLocalNotifications:function () { __FUNC_177__ },resetLocalNotification:function () { __FUNC_178__ },handleLocalNotification:function () { __FUNC_179__ },handleRemoteNotification:function () { __FUNC_180__ },getCurKey:function () { __FUNC_181__ },getCurFrom:function () { __FUNC_182__ },getCurState:function () { __FUNC_183__ },getCurMsg:function () { __FUNC_184__ },getCurTodo:function () { __FUNC_185__ }});
ty.TCP_CONNECT_FAILED=1;
ty.TCP_CONNECT_ERROR=2;
ty.TCP_TUYOO_SEED_ERR=4;
ty._TCPConnection=cc.Class.extend({self:null,_retryConnectTimeOut:35,_TAG:"ty.TCPConnection",ctor:function () { __FUNC_187__ },connect:function () { __FUNC_188__ },updateServer:function () { __FUNC_189__ },isSocketAvailable:function () { __FUNC_190__ },sendMsg:function () { __FUNC_191__ },init:function () { __FUNC_192__ },onInit:function () { __FUNC_193__ },close:function () { __FUNC_194__ },destroy:function () { __FUNC_195__ },kill:function () { __FUNC_197__ },setRetryConnectTimeOut:function () { __FUNC_198__ }});
(function () { __FUNC_199__ })();
ty._Http=cc.Class.extend({_TAG:"ty.Http",self:null,ctor:function () { __FUNC_209__ },onHttpRequestCompleted:function () { __FUNC_212__ },registerCallback:function () { __FUNC_213__ },registerCallbackWithObj:function () { __FUNC_214__ },registerCallbackWithEvent:function () { __FUNC_215__ },check_have_IP:function () { __FUNC_216__ },httpGet:function () { __FUNC_217__ },httpPost:function () { __FUNC_218__ },httpPut:function () { __FUNC_219__ },httpDelete:function () { __FUNC_220__ },httpPostFile:function () { __FUNC_221__ }});
ty.initJs2native=function () { __FUNC_224__ };
ty.Serialize=function () { __FUNC_226__ };
ty.SdkInterfaceManager=cc.Class.extend({_TAG:"ty.SdkInterfaceManager",ctor:function () { __FUNC_227__ },destroy:function () { __FUNC_228__ },nicaiEncode:function () { __FUNC_229__ },initSdk:function () { __FUNC_230__ },login:function () { __FUNC_231__ },openSingleGame:function () { __FUNC_232__ },loginByVerifyCode:function () { __FUNC_233__ },loginByGuest:function () { __FUNC_234__ },loginByUserToken:function () { __FUNC_235__ },loginByAccount:function () { __FUNC_236__ },registerAccount:function () { __FUNC_237__ },changePwd:function () { __FUNC_238__ },sendVerifyCode:function () { __FUNC_239__ },upgradeAccount:function () { __FUNC_240__ },logoutAccount:function () { __FUNC_241__ },bindMobile:function () { __FUNC_242__ },sdkExtend:function () { __FUNC_243__ },sdkShare:function () { __FUNC_244__ },sdkExitWithUI:function () { __FUNC_245__ },setUserInfo:function () { __FUNC_246__ },getWeChatUserInfo:function () { __FUNC_247__ },getUserInfo:function () { __FUNC_248__ },setPreHead:function () { __FUNC_249__ },setUserAvatar:function () { __FUNC_250__ },postLifePic:function () { __FUNC_251__ },openFileDlg:function () { __FUNC_252__ },addFriend:function () { __FUNC_253__ },deleteFriend:function () { __FUNC_254__ },sendFriendReqVerify:function () { __FUNC_255__ },getFriendList:function () { __FUNC_256__ },getReqFriendList:function () { __FUNC_257__ },getNearbyPlayer:function () { __FUNC_258__ },postFriendContact:function () { __FUNC_259__ },inviteFriendContact:function () { __FUNC_260__ },inviteFriend:function () { __FUNC_261__ },getRank:function () { __FUNC_262__ },inviteContactFriend:function () { __FUNC_263__ },reportLBS:function () { __FUNC_264__ },showForum:function () { __FUNC_265__ },showCustomerService:function () { __FUNC_266__ },openFloatWnd:function () { __FUNC_267__ },hideFloatWnd:function () { __FUNC_268__ },registerHomeKeyReceiver:function () { __FUNC_269__ },unregisterHomeKeyReceiver:function () { __FUNC_270__ },buy:function () { __FUNC_271__ },buyComplete:function () { __FUNC_272__ },buyDanjiProduct:function () { __FUNC_273__ },getProductList:function () { __FUNC_274__ },payDiamond:function () { __FUNC_275__ },payDiamondPc:function () { __FUNC_276__ },consumeDiamond:function () { __FUNC_277__ },buyCoinDirect:function () { __FUNC_278__ },complainUser:function () { __FUNC_279__ },openUrl:function () { __FUNC_280__ },addAccount:function () { __FUNC_281__ },loginByToken:function () { __FUNC_282__ },reportClientInstantLog:function () { __FUNC_284__ },showBanner:function () { __FUNC_285__ },clickStat:function () { __FUNC_286__ },timerStat:function () { __FUNC_287__ },reportUserAction:function () { __FUNC_288__ },submitPushToken:function () { __FUNC_289__ },thirdAppInstallOrNot:function () { __FUNC_290__ },openThirdApp:function () { __FUNC_291__ },hideSplashView:function () { __FUNC_292__ },getWaterUDID:function () { __FUNC_293__ },getVerifyCode:function () { __FUNC_294__ },bindTyid:function () { __FUNC_295__ },updateServerUrl:function () { __FUNC_296__ },saveUserDataChannelID:function () { __FUNC_297__ },saveUserData:function () { __FUNC_298__ },getUserData:function () { __FUNC_299__ },_flushStatics:function () { __FUNC_300__ },onLoginSuccess:function () { __FUNC_301__ },onLoginFailed:function () { __FUNC_302__ },onRegisterSuccess:function () { __FUNC_303__ },onRegisterFailed:function () { __FUNC_304__ },onSendVerifyCodeSuccess:function () { __FUNC_305__ },onSendVerifyCodeFailed:function () { __FUNC_306__ },onSetPasswordSuccess:function () { __FUNC_307__ },onSetPasswordFailed:function () { __FUNC_308__ }});
ty.Timer={setTimer:function () { __FUNC_310__ },cancelTimer:function () { __FUNC_311__ }};
ty._NewTimer=cc.Class.extend({_TAG:"ty.Timer",timers:{},ctor:function () { __FUNC_312__ },onDestroy:function () { __FUNC_313__ },setTimer:function () { __FUNC_314__ },cancelTimer:function () { __FUNC_315__ }});
ty.TYScheduler=cc.Class.extend({_TAG:"ty.TYScheduler",eventName:"",eventInterval:1,eventRepeatNum:1,eventDelay:0,eventCount:0,eventParams:null,isLog:true,ctor:function () { __FUNC_316__ },unSchedule:function () { __FUNC_317__ },onDestroy:function () { __FUNC_318__ },_onTimer:function () { __FUNC_319__ }});
ty._AsyncImgDownload=cc.Class.extend({_TAG:"AsyncImgDownload",_observers:{},_imgs:{},_downList:[],_isDownloading:false,_imgDownloadDomain:null,ctor:function () { __FUNC_320__ },destroy:function () { __FUNC_322__ },addAsyncImgDownloadObserver:function () { __FUNC_323__ },removeAsyncImgDownloadObserver:function () { __FUNC_324__ },getDomainName:function () { __FUNC_326__ },downloadImgAsync:function () { __FUNC_327__ },updateByKey:function () { __FUNC_328__ },useDefaultCallback:function () { __FUNC_329__ },onHttpRequestCompleted:function () { __FUNC_330__ }});
ty._HeartBeat=cc.Class.extend({_TAG:"ty.HeartBeat",ctor:function () { __FUNC_331__ },startHeartBeat:function () { __FUNC_332__ },_startTick:function () { __FUNC_333__ },_sendMsg:function () { __FUNC_334__ },stopHeartBeat:function () { __FUNC_335__ },onHeartbeatBack:function () { __FUNC_336__ },getPingTime:function () { __FUNC_337__ }});
ty._MsgSimulater=cc.Class.extend({_TAG:"ty.MsgSimulater",ctor:function () { __FUNC_338__ },destroy:function () { __FUNC_339__ },dispatchMsg:function () { __FUNC_340__ },dispatchInOrder:function () { __FUNC_341__ },tickDispatch:function () { __FUNC_342__ }});
ty._UserInfo=cc.Class.extend({_TAG:"ty.UserInfo",ctor:function () { __FUNC_345__ },destroy:function () { __FUNC_346__ },init:function () { __FUNC_347__ },registerMsgCallback:function () { __FUNC_348__ },onUSER_INFO:function () { __FUNC_349__ },parseUserInfo:function () { __FUNC_350__ },parseGameData:function () { __FUNC_351__ },postNotification:function () { __FUNC_352__ }});
ty._GameWorld=cc.Class.extend({_TAG:"ty.GameWorld",ctor:function () { __FUNC_353__ },destroy:function () { __FUNC_354__ },getHall:function () { __FUNC_355__ },addHall:function () { __FUNC_356__ },parseHallList:function () { __FUNC_357__ }});
ty.HallList=cc.Class.extend({_TAG:"ty.HallList",ctor:function () { __FUNC_358__ },destroy:function () { __FUNC_359__ },getHall:function () { __FUNC_360__ },addHall:function () { __FUNC_361__ },parseHallList:function () { __FUNC_362__ }});
ty.Hall=cc.Class.extend({_TAG:"ty.Hall",ctor:function () { __FUNC_363__ },destroy:function () { __FUNC_364__ },getRoom:function () { __FUNC_365__ },addRoom:function () { __FUNC_366__ },parseRoomList:function () { __FUNC_367__ }});
ty.RoomInfo=cc.Class.extend({_TAG:"ty.RoomInfo",ctor:function () { __FUNC_368__ },destroy:function () { __FUNC_369__ },getTable:function () { __FUNC_370__ },addTable:function () { __FUNC_371__ },parseTableList:function () { __FUNC_372__ }});
ty.TableList=cc.Class.extend({_TAG:"ty.TableList",ctor:function () { __FUNC_373__ },destroy:function () { __FUNC_374__ },getTable:function () { __FUNC_375__ },addTable:function () { __FUNC_376__ },parseTableList:function () { __FUNC_377__ }});
ty.TableInfo=cc.Class.extend({_TAG:"ty.TableInfo",ctor:function () { __FUNC_378__ },destroy:function () { __FUNC_379__ },parse:function () { __FUNC_380__ },getSeat:function () { __FUNC_381__ },addSeat:function () { __FUNC_382__ },parseSeatList:function () { __FUNC_383__ }});
ty.SeatList=cc.Class.extend({_TAG:"ty.SeatList",ctor:function () { __FUNC_384__ },destroy:function () { __FUNC_385__ },getSeat:function () { __FUNC_386__ },addSeat:function () { __FUNC_387__ },parseSeatList:function () { __FUNC_388__ }});
ty.TableState=cc.Class.extend({_TAG:"ty.TableState",ctor:function () { __FUNC_389__ },destroy:function () { __FUNC_390__ },parse:function () { __FUNC_391__ }});
ty.SeatInfo=cc.Class.extend({_TAG:"ty.SeatInfo",ctor:function () { __FUNC_392__ },destroy:function () { __FUNC_393__ },parse:function () { __FUNC_394__ }});
ty._Util=cc.Class.extend({enterBackTime:0,enterForeTime:0,_TAG:"ty.Util",ctor:function () { __FUNC_395__ },onWillEnterBackground:function () { __FUNC_396__ },onHasEnterForeground:function () { __FUNC_397__ },switchAccountOutGame:function () { __FUNC_398__ },refreshUserInfo:function () { __FUNC_399__ },guestLogin:function () { __FUNC_400__ },showCloseDlg:function () { __FUNC_405__ },showCommonDlg:function () { __FUNC_408__ },setUserInfo:function () { __FUNC_410__ },openShopOutOfGame:function () { __FUNC_411__ },setCursor:function () { __FUNC_412__ },isGuest:function () { __FUNC_413__ },setLoginExe:function () { __FUNC_414__ },createGameShortcut:function () { __FUNC_415__ },login360Account:function () { __FUNC_416__ },enrol360Account:function () { __FUNC_417__ },closeLobby:function () { __FUNC_418__ },setSoundBtn:function () { __FUNC_419__ },installOtherGame:function () { __FUNC_420__ },changeViewMode:function () { __FUNC_421__ },onReceiveMemoryWarning:function () { __FUNC_422__ },onChangeViewMode:function () { __FUNC_423__ },getFrameSize:function () { __FUNC_424__ },getDesignResolutionSize:function () { __FUNC_425__ },setDesignResolutionSize:function () { __FUNC_426__ },trace:function () { __FUNC_427__ },listScripts:function () { __FUNC_429__ },openCamera:function () { __FUNC_430__ },onFinishOpenCamera:function () { __FUNC_431__ },vibrate:function () { __FUNC_432__ },cancelVibrate:function () { __FUNC_433__ },clipPasteboard:function () { __FUNC_434__ },pickAndResavePhoto:function () { __FUNC_435__ },onFinishPickResave:function () { __FUNC_436__ },screenShot:function () { __FUNC_437__ },addImageAsync:function () { __FUNC_438__ },onLoaded:function () { __FUNC_439__ },addImageArrAsync:function () { __FUNC_440__ },md5HashPicUrl:function () { __FUNC_443__ },md5HashUrl:function () { __FUNC_444__ },md5String:function () { __FUNC_445__ },showLog:function () { __FUNC_446__ },downloadAndLoadImg:function () { __FUNC_447__ },downLoadAppByBrowser:function () { __FUNC_448__ },openUrlByBrowser:function () { __FUNC_449__ },removeDownloadCallObj:function () { __FUNC_450__ },onHttpRequestCompleted:function () { __FUNC_451__ },utf8Encode:function () { __FUNC_452__ },base64Encode:function () { __FUNC_453__ },generateQrCode:function () { __FUNC_454__ },readCCBIPackFile:function () { __FUNC_455__ },installAPK:function () { __FUNC_456__ },patchAndInstallAPK:function () { __FUNC_457__ },rightButtonDown:function () { __FUNC_458__ },rightButtonUp:function () { __FUNC_459__ },createNode:function () { __FUNC_460__ },createTimeline:function () { __FUNC_461__ },removeTimeline:function () { __FUNC_462__ },addHttpWhitelist:function () { __FUNC_463__ },isUncompressExecuted:function () { __FUNC_464__ },getPackageNameOrBundleId:function () { __FUNC_465__ }});
ty._SystemInfo=cc.Class.extend({_TAG:"ty.SystemInfo",ctor:function () { __FUNC_471__ },getAllStaticInfo:function () { __FUNC_472__ },getDeviceId:function () { __FUNC_473__ },getRealTimeDynamicInfo:function () { __FUNC_474__ },_parseConfig:function () { __FUNC_475__ },getConfig:function () { __FUNC_476__ }});
ty._LocalStorage=cc.Class.extend({_TAG:"ty.LocalStorage",ctor:function () { __FUNC_478__ },setItem:function () { __FUNC_479__ },getItem:function () { __FUNC_480__ },removeItem:function () { __FUNC_481__ },getGenFunc:function () { __FUNC_482__ }});
ty._EncodeDecode=cc.Class.extend({_TAG:"ty.ENCODE_DECODE",ctor:function () { __FUNC_485__ },signatureFile:function () { __FUNC_486__ },signatureStr:function () { __FUNC_487__ },base64Str:function () { __FUNC_488__ },base64File:function () { __FUNC_489__ },aesFile:function () { __FUNC_490__ },rsaFile:function () { __FUNC_491__ }});
TY_SEND_MS = cc.Class.extend({create:function () { __FUNC_493__ },sendMS:function () { __FUNC_494__ },canSendMS:function () { __FUNC_495__ },setCallBackObj:function () { __FUNC_496__ }});
TY_SEND_MS.create=function () { __FUNC_497__ };
ty._SendMS=cc.Class.extend({_TAG:"ty.SendMS",ctor:function () { __FUNC_498__ },destroy:function () { __FUNC_499__ },setCallBackObj:function () { __FUNC_500__ },returnResult:function () { __FUNC_501__ },canSendMS:function () { __FUNC_502__ },sendMS:function () { __FUNC_503__ }});
ty._Log=cc.Class.extend({needLog:false,logLevel:0,_TAG:"ty.LOG",ctor:function () { __FUNC_507__ },setConfig:function () { __FUNC_508__ },onDestroy:function () { __FUNC_509__ },closeAllLog:function () { __FUNC_510__ },setLogLevel:function () { __FUNC_511__ },onEnterBackGround:function () { __FUNC_512__ },onEnterForeGround:function () { __FUNC_513__ },uploadLog:function () { __FUNC_514__ },saveLog:function () { __FUNC_515__ },writeUserInfoFile:function () { __FUNC_516__ },checkNeedLog:function () { __FUNC_517__ },addLog:function () { __FUNC_518__ },_log:function () { __FUNC_519__ },D:function () { __FUNC_520__ },I:function () { __FUNC_521__ },W:function () { __FUNC_522__ },E:function () { __FUNC_523__ },F:function () { __FUNC_524__ },FILE:function () { __FUNC_525__ }});
ty._Dump=cc.Class.extend({_TAG:"ty.Dump",ctor:function () { __FUNC_526__ },dump:function () { __FUNC_527__ },_isArray:function () { __FUNC_528__ },_dumpArray:function () { __FUNC_529__ },_dumpMap:function () { __FUNC_530__ },_isFunction:function () { __FUNC_531__ },_dumpFunction:function () { __FUNC_532__ }});
ty._SceneManager=cc.Class.extend({_TAG:"ty.SceneManager",ctor:function () { __FUNC_536__ },runAScene:function () { __FUNC_537__ },replaceAScene:function () { __FUNC_538__ }});
ty._Connector=cc.Class.extend({_TAG:"ty.Connector",ctor:function () { __FUNC_539__ },setDelegate:function () { __FUNC_540__ },init:function () { __FUNC_541__ },close:function () { __FUNC_542__ },startServer:function () { __FUNC_543__ },connectServer:function () { __FUNC_544__ },closeConnection:function () { __FUNC_545__ },startSearch:function () { __FUNC_546__ },sendMsg:function () { __FUNC_547__ },_onServerFound:function () { __FUNC_548__ },_onDeviceConnect:function () { __FUNC_549__ },_onDeviceDisconnect:function () { __FUNC_550__ },_onMessageReceived:function () { __FUNC_551__ },_onSearchFinish:function () { __FUNC_552__ },_onDeviceOpened:function () { __FUNC_553__ }});
ty.VerifyLoginUrl=cc.Class.extend({_TAG:"ty.VerifyLoginUrl",ctor:function () { __FUNC_562__ },getLoginUrlList:function () { __FUNC_563__ },readTestConfig:function () { __FUNC_564__ }});
tui = tui||{};
tui.CacheGif={draw:function () { __FUNC_565__ },setTexture:function () { __FUNC_566__ },isFlipX:function () { __FUNC_567__ },getTexture:function () { __FUNC_568__ },setScaleY:function () { __FUNC_569__ },setScale:function () { __FUNC_570__ },setOpacity:function () { __FUNC_571__ },setDisplayFrameWithAnimationName:function () { __FUNC_572__ },setRotationY:function () { __FUNC_573__ },setAnchorPoint:function () { __FUNC_574__ },setOpacityModifyRGB:function () { __FUNC_575__ },getBatchNode:function () { __FUNC_576__ },isTextureRectRotated:function () { __FUNC_577__ },isOpacityModifyRGB:function () { __FUNC_578__ },setVertexZ:function () { __FUNC_579__ },getTextureRect:function () { __FUNC_580__ },updateDisplayedOpacity:function () { __FUNC_581__ },isFrameDisplayed:function () { __FUNC_582__ },getAtlasIndex:function () { __FUNC_583__ },setRotation:function () { __FUNC_584__ },setDisplayFrame:function () { __FUNC_585__ },getOffsetPosition:function () { __FUNC_586__ },setBatchNode:function () { __FUNC_587__ },setRotationX:function () { __FUNC_588__ },setScaleX:function () { __FUNC_589__ },setTextureAtlas:function () { __FUNC_590__ },setFlipY:function () { __FUNC_591__ },setFlipX:function () { __FUNC_592__ },removeAllChildrenWithCleanup:function () { __FUNC_593__ },sortAllChildren:function () { __FUNC_594__ },setAtlasIndex:function () { __FUNC_595__ },setVertexRect:function () { __FUNC_596__ },setDirty:function () { __FUNC_597__ },isDirty:function () { __FUNC_598__ },reorderChild:function () { __FUNC_599__ },ignoreAnchorPointForPosition:function () { __FUNC_600__ },setColor:function () { __FUNC_601__ },getTextureAtlas:function () { __FUNC_602__ },removeChild:function () { __FUNC_603__ },updateTransform:function () { __FUNC_604__ },isFlipY:function () { __FUNC_605__ },updateDisplayedColor:function () { __FUNC_606__ },setSkewX:function () { __FUNC_607__ },setSkewY:function () { __FUNC_608__ },setVisible:function () { __FUNC_609__ },updateGif:function () { __FUNC_610__ },update:function () { __FUNC_611__ },getGifFrameName:function () { __FUNC_612__ },init:function () { __FUNC_613__ },CacheGif:function () { __FUNC_614__ }};
ty.baseLayer=cc.Layer.extend({autoPlayBoo:true,loopBoo:true,winSize:null,callBack:null,callBackHandler:null,timeXS:1,initBoo:false,cacheArr:[],ctor:function () { __FUNC_615__ },createSprites:function () { __FUNC_616__ },reinit:function () { __FUNC_617__ },resetStrByData:function () { __FUNC_618__ },animationBegin:function () { __FUNC_619__ },animationEnd:function () { __FUNC_620__ },setPos:function () { __FUNC_621__ },getRootNode:function () { __FUNC_622__ },addSp:function () { __FUNC_623__ },addText:function () { __FUNC_624__ },getFontName:function () { __FUNC_625__ }});
ty.SpecialControl={getEditBoxControl:function () { __FUNC_626__ },getPicUrlControl:function () { __FUNC_630__ },getProgressBarControl:function () { __FUNC_638__ },getListControl:function () { __FUNC_645__ },getBtnGroupControl:function () { __FUNC_665__ }};
ty.picMask=cc.Layer.extend({ctor:function () { __FUNC_671__ },setMaskSpByName:function () { __FUNC_672__ },changeSize:function () { __FUNC_673__ },_makeExtendMask:function () { __FUNC_674__ },movetoTarget:function () { __FUNC_675__ },movetoPos:function () { __FUNC_676__ },showTarget:function () { __FUNC_677__ },stopMaskActions:function () { __FUNC_678__ }});
ty.DisplayUtil={getUniqueID:function () { __FUNC_679__ },initEditBox:function () { __FUNC_680__ },getEditStr:function () { __FUNC_681__ },stringFormat:function () { __FUNC_682__ },screenTexture:function () { __FUNC_683__ },getScreenBlurLayer:function () { __FUNC_684__ },_screenCapture:function () { __FUNC_686__ },_screenCaptureEnd:function () { __FUNC_687__ },_screenBlurSp:function () { __FUNC_688__ },_removeChild:function () { __FUNC_689__ },getSpriteCopy:function () { __FUNC_690__ },getScreenBlurSprite:function () { __FUNC_691__ },setTargetToScreenCenter:function () { __FUNC_692__ },isNodeVisible:function () { __FUNC_693__ },isPointInNode:function () { __FUNC_694__ },moveAtoB:function () { __FUNC_695__ },changeNodeContainer:function () { __FUNC_696__ },getEaseAction:function () { __FUNC_697__ },getBPosInAContainer:function () { __FUNC_698__ },getScreenPosInContainer:function () { __FUNC_699__ },addTextToTarget:function () { __FUNC_700__ },getCcbControlByName:function () { __FUNC_701__ },getLabelTTF:function () { __FUNC_702__ },getSprite:function () { __FUNC_703__ },getScreenSprite:function () { __FUNC_704__ },circlePlace:function () { __FUNC_705__ },changeBtnStateSp:function () { __FUNC_706__ },scalePicToSize:function () { __FUNC_707__ },scaleDisToSize:function () { __FUNC_708__ },fitContainerWithPic:function () { __FUNC_709__ },showBoundingBoxPoint:function () { __FUNC_710__ },getRectLayer:function () { __FUNC_711__ },createMask:function () { __FUNC_712__ },controlPlayAnimation:function () { __FUNC_713__ },eachNode:function () { __FUNC_714__ },replaceTexture:function () { __FUNC_715__ },getProgressBarControl:function () { __FUNC_716__ },downloadSprite:function () { __FUNC_717__ }};
ty.ShaderUtil={programs:{},gray:function () { __FUNC_722__ },sepia:function () { __FUNC_723__ },outline:function () { __FUNC_725__ },blur:function () { __FUNC_726__ },blur2:function () { __FUNC_727__ },preSaveShader:function () { __FUNC_728__ },preSaveBlur:function () { __FUNC_729__ }};
ty = ty||{};
ty.global=this;
ty.init=function () { __FUNC_730__ };
ty.init();
ty.end=function () { __FUNC_731__ };
---------------------------------------
==========================================================================E
==================================1==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
cc.log("cc.game.onStart callback..");
---------------------------------------
==========================================================================E
==================================2==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
require("cocos2dx_script/build/jsb.js");
---------------------------------------
==========================================================================E
==================================3==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return (cc.sys.os == cc.sys.OS_IOS);
---------------------------------------
==========================================================================E
==================================4==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return (cc.sys.os == cc.sys.OS_OSX);
---------------------------------------
==========================================================================E
==================================5==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return (cc.sys.os == cc.sys.OS_ANDROID);
---------------------------------------
==========================================================================E
==================================6==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return (cc.sys.os == cc.sys.OS_WINDOWS);
---------------------------------------
==========================================================================E
==================================7==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return (cc.sys.os == cc.sys.OS_WP8);
---------------------------------------
==========================================================================E
==================================8==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return (cc.sys.os == cc.sys.OS_WINRT);
---------------------------------------
==========================================================================E
==================================9==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return !(cc.sys.isNative);
---------------------------------------
==========================================================================E
==================================10==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
("undefined" == typeof ty.LOG)?cc.log(((("[FRAMEDEBUGLOG - " + a) + "] ") + b)):ty.LOG.D(a,"frame",b);
---------------------------------------
==========================================================================E
==================================11==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
("undefined" == typeof ty.LOG)?cc.log(((("[FRAMEINFOLOG - " + a) + "] ") + b)):ty.LOG.I(a,"frame",b);
---------------------------------------
==========================================================================E
==================================12==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
("undefined" == typeof ty.LOG)?cc.log(((("[FRAMEWARNLOG - " + a) + "] ") + b)):ty.LOG.W(a,"frame",b);
---------------------------------------
==========================================================================E
==================================13==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
("undefined" == typeof ty.LOG)?cc.log(((("[FRAMEERRORLOG - " + a) + "] ") + b)):ty.LOG.E(a,"frame",b);
---------------------------------------
==========================================================================E
==================================14==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
("undefined" == typeof ty.LOG)?cc.log(((("[FRAMEFATALLOG - " + a) + "] ") + b)):ty.LOG.F(a,"frame",b);
---------------------------------------
==========================================================================E
==================================15==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.LOGD(this._TAG,"in FileManager ctor");
this.fileManager=TY_FILE_MANAGER.create();
---------------------------------------
==========================================================================E
==================================16==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
cc.log(((("[frame/FileManager/" + a) + "] ") + b));
---------------------------------------
==========================================================================E
==================================17==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return this.fileManager.readFromResource(a);
---------------------------------------
==========================================================================E
==================================18==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
a = false;
return (undefined == a)&&this.fileManager.getWritableRootPath(a);
---------------------------------------
==========================================================================E
==================================19==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
a = false;
a = (undefined == a)&&this.fileManager.getAvailablelCapacity(a);
this.LOGD(this._TAG,("get available capacity: " + a.toString()));
return a;
---------------------------------------
==========================================================================E
==================================20==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return this.fileManager.createDir(a);
---------------------------------------
==========================================================================E
==================================21==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0=a.lastIndexOf("/");
_local0=a.substr(0,_local0);
this.checkFileExist(_local0)||this.createDir(_local0);
return this.fileManager.createFile(a);
---------------------------------------
==========================================================================E
==================================22==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return jsb.fileUtils.isFileExist(a);
---------------------------------------
==========================================================================E
==================================23==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return this.fileManager.readFile(a);
---------------------------------------
==========================================================================E
==================================24==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
return this.fileManager.writeFile(a,b,c);
---------------------------------------
==========================================================================E
==================================25==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
return !(a) || ("undefined" == typeof a) || !(b) || ("undefined" == typeof b)?false:this.fileManager.copyFile(a,b);
---------------------------------------
==========================================================================E
==================================26==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return this.fileManager.isDirectory(a);
---------------------------------------
==========================================================================E
==================================27==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return this.fileManager.getFileSize(a);
---------------------------------------
==========================================================================E
==================================28==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return this.fileManager.deleteFile(a);
---------------------------------------
==========================================================================E
==================================29==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return this.fileManager.listSubFiles(a);
---------------------------------------
==========================================================================E
==================================30==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
this.LOGD(this._TAG,("readFileLineByLine path=" + a));
_local0=this.fileManager.readFileLineByLine(a,b);
this.LOGD(this._TAG,("contents length = " + _local0.length));
return _local0;
---------------------------------------
==========================================================================E
==================================31==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
this.LOGD(this._TAG,("writeFileLineByLine to path=" + b));
this.LOGD(this._TAG,("contents length=" + a.length));
return this.fileManager.writeFileLineByLine(a,b);
---------------------------------------
==========================================================================E
==================================32==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return this.fileManager.getOpenFileName();
---------------------------------------
==========================================================================E
==================================33==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
new ty._FileManager().getWritableRootPath(true);
---------------------------------------
==========================================================================E
==================================34==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
this._alertobj=TY_ALERT.create();
if(this._alertobj.call_context=b&&a){
this._alertobj.call_context._onclicklistener=a;
}
this._alertobj.onclickalertbutton=function () { __FUNC_35__ };
---------------------------------------
==========================================================================E
==================================35==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,("" + a));
(this.call_context != null)&&this.call_context._onclicklistener(a);
---------------------------------------
==========================================================================E
==================================36==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this._alertobj=null;
---------------------------------------
==========================================================================E
==================================37==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
this._alertobj.alert(a,b,c,d,e);
---------------------------------------
==========================================================================E
==================================38==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
new ty._Tuyooalert(null,null).alert("提示",a,"","","");
---------------------------------------
==========================================================================E
==================================39==================================S
------------------Argv------------------
a,b,c,d,e,f,h
---------------------------------------
----------------Content----------------
new ty._Tuyooalert(f,h).alert(b,a,c,d,e);
---------------------------------------
==========================================================================E
==================================40==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return {addOnePublisher:function () { __FUNC_41__ },dumpPublishers:function () { __FUNC_42__ }};
---------------------------------------
==========================================================================E
==================================41==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
(typeof ty.PublishersManager[a] == "undefined")?ty.PublishersManager[a]=b:ty.alert("Warning! Added the two and more same Publishers! Please check it!");
---------------------------------------
==========================================================================E
==================================42==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
ty.LOGD("ty.Publisher","dump Publishers start-------");
_local0=0;
undefined;
while(ty.PublishersManager has _iternext){
_local1=_iternext;
if((ty.PublishersManager[_local1].constructor == Object)){
_local0=(_local0 + 1);
_local0=0;
ty.LOGD("ty.Publisher",((("Publisher " + _local0) + ": ") + _local1));
}
}
ty.LOGD("ty.Publisher","dump Publishers end-------");
---------------------------------------
==========================================================================E
==================================43==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return {CMD_USER_INFO:"user_info",MSG_LOG_OUT:"logout",MSG_REMOTE_NOTIFICATION:"receive_remote_notefication",MSG_LOGIN_SUCCESS:"login_success_ret",MSG_LOGIN_FAILED:"login_failed_ret",MSG_LOGIN_BACK:"login_back_ret",MSG_LOGOUT_BACK:"login_out_ret",MSG_LOGIN_OFFLINE_GAME:"longin_offline_game_ret",MSG_LOGIN_TYPE:"login_type",MSG_SUBMIT_PUSH_TOKEN_SUCCESS:"submit_push_token_succ_ret",MSG_SUBMIT_PUSH_TOKEN_FAILED:"submit_push_token_failed_ret",MSG_REGISTER_SUCCESS:"msg_register_success",MSG_REGISTER_FAILED:"msg_register_failed",MSG_SEND_VERIFY_CODE_SUCCESS:"msg_send_verify_code_success",MSG_SEND_VERIFY_CODE_FAILED:"msg_send_verify_code_failed",MSG_SET_PASSWORD_SUCCESS:"set_password_success_ret",MSG_SET_PASSWORD_FAILED:"set_password_failed_ret",MSG_SET_PASSWORD_BACK:"set_password_back_ret",MSG_UPGRADE_ACCOUNT_SUCCESS:"upgrade_account_success_ret",MSG_UPGRADE_ACCOUNT_FAILED:"upgrade_account_failed_ret",MSG_UPGRADE_ACCOUNT_BACK:"upgrade_account_back_ret",MSG_SET_PLATFORM_USER_INF_SUCCESS:"set_user_info_success_ret",MSG_SET_PLATFORM_USER_INF_FAILED:"set_user_info_failed_ret",MSG_GET_PLATFORM_USER_INF_SUCCESS:"get_platform_user_success_ret",MSG_GET_PLATFORM_USER_INF_FAILED:"get_platform_user_failed_ret",MSG_SET_PRE_HEAD_SUCCESS:"set_pre_head_success_ret",MSG_SET_PRE_HEAD_FAILED:"set_pre_head_failed_ret",MSG_SET_AVATAR_SUCCESS:"set_user_avatar_success_ret",MSG_SET_AVATAR_FAILED:"set_user_avatar_failed_ret",MSG_POST_LIFE_PIC_SUCCESS:"post_life_pic_success_ret",MSG_POST_LIFE_PIC_FAILED:"post_life_pic_failed_ret",MSG_ADD_FRIEND_SUCCESS:"add_friend_success_ret",MSG_ADD_FRIEND_FAILED:"add_friend_failed_ret",MSG_DELETE_FRIEND_SUCCESS:"delete_friend_success_ret",MSG_DELETE_FRIEND_FAILED:"delete_friend_failed_ret",MSG_SEND_FRIEND_VERIFY_SUCCESS:"send_friend_request_verify_success_ret",MSG_SEND_FRIEND_VERIFY_FAILED:"send_friend_request_verify_failed_ret",MSG_GET_FRIEND_LIST_SUCCESS:"get_friend_list_success_ret",MSG_GET_FRIEND_LIST_FAILED:"get_friend_list_failed_ret",MSG_GET_REQ_FRIEND_LIST_SUCCESS:"get_friend_req_list_success_ret",MSG_GET_REQ_FRIEND_LIST_FAILED:"get_friend_req_list_failed_ret",MSG_GET_NEARBY_PLAYER_SUCCESS:"get_nearby_player_success_ret",MSG_GET_NEARBY_PLAYER_FAILED:"get_nearby_player_failed_ret",MSG_GET_CONTACT_LIST_SUCCESS:"get_contact_list_success_ret",MSG_GET_CONTACT_LIST_FAILED:"get_contact_list_failed_ret",MSG_INVITE_CONTACT_LIST_SUCCESS:"invite_contact_friend_success_ret",MSG_INVITE_CONTACT_LIST_FAILED:"invite_contact_friend_fail_ret",MSG_GET_RANK_LIST_SUCCESS:"get_rank_list_success_ret",MSG_GET_RANK_LIST_FAILED:"get_rank_list_failed_ret",MSG_REPORT_LBS_SUCCESS:"report_lbs_success_ret",MSG_REPORT_LBS_FAILED:"report_lbs_failed_ret",MSG_SHOW_BBS_BACK:"show_bbs_back_ret",MSG_PAY_TIMEOUT:"pay_process_timeout",MSG_PAY_PROCESSING:"pay_processing_ret",MSG_BUY_SUCCESS:"buy_success_ret",MSG_BUY_FAILED:"buy_failed_ret",MSG_BUY_BACK:"buy_back_ret",MSG_BUY_DANJIPRODUCT_SUCCESS:"buy_danji_product_success_ret",MSG_BUY_DANJIPRODUCT_FAILED:"buy_danji_product_failed_ret",MSG_BUY_DANJIPRODUCT_CANCEL:"buy_danji_product_cancel_ret",MSG_GET_PRODUCT_LIST:"get_product_list_ret",MSG_CONSUME_DIAMOND_SUCCESS:"consume_diamond_success_ret",MSG_CONSUME_DIAMOND_FAILED:"consume_diamond_failed_ret",MSG_BUY_COIN_DIRECT_SUCCESS:"buy_coin_direct_success_ret",MSG_BUY_COIN_DIRECT_FAILED:"buy_coin_direct_failed_ret",MSG_GET_DIAMOND_LIST_SUCCESS:"request_diamond_list_success_ret",MSG_GET_DIAMOND_LIST_FAILED:"request_diamond_list_failed_ret",MSG_PAY_DIAMOND_SUCCESS:"pay_diamond_success_ret",MSG_PAY_DIAMOND_FAILED:"pay_diamond_failed_ret",MSG_PAY_DIAMOND_BACK:"pay_diamond_back_ret",MSG_THIRD_EXTEND_SUCCESS:"third_extend_success_ret",MSG_THIRD_EXTEND_FAIL:"third_extend_failed_ret",MSG_WEIXIN_SHARE_SUCCESS:"weixin_share_success_ret",MSG_WEIXIN_SHARE_FAIL:"weixin_share_failed_ret",MSG_BIND_PHONE_SUCCESS:"bind_mobile_success",MSG_USER_CLICK_EXIT_IN_SDK:"user_click_exit_in_sdk",MSG_USER_OPEN_SERVICE_VIEW_IN_SDK:"user_click_service_view_in_sdk",MSG_BACK_FORE_DURATION:"back_to_fore_ground_duration",UPDATE_UER_INFO:"update_user_info",TCP_ERROR:"tcp_error",TCP_CLOSE:"tcp_close",TCP_OPENED:"tcp_opened",TCP_RECONNECT:"tcp_reconnect",TCP_RECEIVE:"tcp_receive",UPDATE_OK:"update_ok",UPDATE_ERR:"update_error",UPDATE_PROGRESS:"update_progress",RECORDER_TIME:"recorder_time",RECORDER_AMPLITUDE:"recorder_amplitude",RECORDER_ERROR:"recorder_error",RECORDER_ENCODE:"recorder_encode",KEY_EVENT:"key_event",WEB_PAGE_START:"web_page_start",WEB_PAGE_FINISH:"web_page_finish",WEB_PAGE_ERROR:"web_page_error",WEB_PAGE_JS:"web_page_js",HEART_BEAT_LOGIC:"heart_beat_logic",MSG_HEART_BEAT:"heart_beat_back_from_server",HEART_BEAT_RECEIVE_ERROR:"heart_beat_receive_error",WILL_ENTER_BACKGROUND:"will_enter_background_event",HAS_ENTER_FOREGROUND:"has_enter_foreground_event",NETWORK_STATE_CHANGE:"network_state_change",VIEW_MODE_CHANGED:"view_mode_changed",FINISH_OPEN_CAMERA:"finish_open_camera",FINISH_PICKSAVE:"finish_picksave",MSG_FIVE_STAR_RATE_SUCC:"onFiveStarRateSucc",RECEIVE_MEMORY_WARNING:"receive_memory_warning",MSG_CLIENT_INSTANT_LOG:"report_client_instant_log",MSG_USER_AVATAR_FILE_PATH:"user_avatar_file_path",MSG_COMPLAIN_THE_OTHER_USER_SUCC:"complain_the_other_user_succ",MSG_COMPLAIN_THE_OTHER_USER_FAIL:"complain_the_other_user_fail",MSG_THIRD_REFRESH_USERINFO:"third_refresh_user_info",MSG_WINDOWS_RIGHT_BUTTON_DOWN:"winows_right_button_down",MSG_WINDOWS_RIGHT_BUTTON_UP:"windows_right_button_up",MSG_SWITCH_ACCOUNT_OUT_GAME:"switch_account_out_game",UPDATE_LANGUAGE:"udpate_language",THIRD_APP_INSTALL_OR_NOT:"third_app_install_or_not",THIRD_APP_INSTALL_RET:"third_app_install_ret",TUYOO_NET_DIRECT_MSG:"tuyoo_net_direct_msg",TUI_IMG_DOWNLOAD:"tui_img_download",MSG_GET_WATER_UDID_RET:"get_water_udid_ret"};
---------------------------------------
==========================================================================E
==================================44==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
_aliased8884={};
return {listen:function () { __FUNC_45__ },ignore:function () { __FUNC_46__ },trigger:function () { __FUNC_48__ },count:function () { __FUNC_49__ },ignoreScope:function () { __FUNC_50__ }};
---------------------------------------
==========================================================================E
==================================45==================================S
------------------Argv------------------
b,c,d
---------------------------------------
----------------Content----------------
if(!(b)||(typeof b == "undefined")){
ty.LOGE("ty.NotificationCenter"," listen err: eName is undefined!");
cc.dump(d);
ty.alert("ty.NotificationCenter listen err: eName is undefined!");
} else if(!(c)||(typeof c == "undefined")){
ty.LOGE("ty.NotificationCenter",((" listen err: eName: " + b) + " & handler is undefined!"));
cc.dump(d);
ty.alert((("ty.NotificationCenter listen err: eName: " + b) + " & handler is undefined!"));
} else {
}
_aliased8884[b]=_aliased8884[b]||[];
d||_aliased8884[b].push({scope:this,handler:c});
return c;
---------------------------------------
==========================================================================E
==================================46==================================S
------------------Argv------------------
b,c,d,e
---------------------------------------
----------------Content----------------
if(!(b)||(typeof b == "undefined")){
ty.LOGE("ty.NotificationCenter"," ignore err: eName is undefined!");
cc.dump(undefined);
ty.alert("ty.NotificationCenter ignore err: eName is undefined!");
} else if(!(_aliased8884)||(typeof _aliased8884 == "undefined")){
ty.LOGE("ty.NotificationCenter",((" ignore err: eName: " + b) + " & handler is undefined!"));
cc.dump(undefined);
ty.alert((("ty.NotificationCenter ignore err: eName: " + b) + " & handler is undefined!"));
} else {
}
_aliased7480=undefined||this;
_local0=undefined[b];
undefined[b]=_local0&&_local0.filter(function () { __FUNC_47__ });
---------------------------------------
==========================================================================E
==================================47==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
if((typeof a != "undefined")){
return (a.scope != _aliased7480)||(a.handler != _aliased8884);
}
---------------------------------------
==========================================================================E
==================================48==================================S
------------------Argv------------------
b,c,d,e,f,h,g,arguments
---------------------------------------
----------------Content----------------
_local4=arguments;
(d != false)&&ty.LOGD("ty.NotificationCenter",("trigger:" + b));
if(!(b)||(typeof b == "undefined")){
ty.alert("ty.NotificationCenter trigger err: eventName is undefined, please check");
break;
}
_local0=_aliased8884[b];
_local1=_iternext;
undefined;
if(_local0){
_local1={name:b};
_local3=Array.prototype.slice.call(_local4,1);
_local3.push(_local1);
_local1=0;
} else {
while(_local2){
(typeof _local2 != "undefined")&&_local2.handler.apply(_local2.scope,_local3);
_local1=(_local1 + 1);
_local1=0;
}
}
---------------------------------------
==========================================================================E
==================================49==================================S
------------------Argv------------------
b
---------------------------------------
----------------Content----------------
_aliased8884[b]=_aliased8884[b]||[];
return _aliased8884[b].length;
---------------------------------------
==========================================================================E
==================================50==================================S
------------------Argv------------------
b,c,d
---------------------------------------
----------------Content----------------
while(undefined has _iternext){
_aliased7477=_iternext;
_local1=undefined[_aliased7477];
undefined[_aliased7477]=_local1&&_local1.filter(function () { __FUNC_51__ });
}
---------------------------------------
==========================================================================E
==================================51==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
if((a.scope != _aliased8884)){
return true;
}
ty.LOGD("ty.NotificationCenter :",(" remove listener by Scope: " + _aliased7477));
return false;
---------------------------------------
==========================================================================E
==================================52==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.dispatcher=ty.NotificationCenter;
this.init();
---------------------------------------
==========================================================================E
==================================53==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================54==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.dispatcher=null;
---------------------------------------
==========================================================================E
==================================55==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
this.dispatcher.trigger(a,b);
---------------------------------------
==========================================================================E
==================================56==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
this.dispatcher.listen(a,b,c);
---------------------------------------
==========================================================================E
==================================57==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
this.dispatcher.ignore(a,b,c);
---------------------------------------
==========================================================================E
==================================58==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
a.setAccelerometerEnabled(true);
a.onAccelerometer=function () { __FUNC_59__ };
---------------------------------------
==========================================================================E
==================================59==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
_aliased7477.call(_aliased8884,a);
---------------------------------------
==========================================================================E
==================================60==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
a.setAccelerometerEnabled(false);
a.onAccelerometer=null;
---------------------------------------
==========================================================================E
==================================61==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
if(("touches" in sys.capabilities)){
a.setTouchMode(cc.TOUCH_ONE_BY_ONE);
a.setTouchEnabled(true);
a.onTouchBegan=function () { __FUNC_62__ };
a.onTouchMoved=function () { __FUNC_63__ };
a.onTouchEnded=function () { __FUNC_64__ };
a.onTouchCancelled=function () { __FUNC_65__ };
} else {
}
ty.LOGD(this._TAG,"TOUCH-ONE-BY-ONE test is not supported on desktop");
---------------------------------------
==========================================================================E
==================================62==================================S
------------------Argv------------------
a,d
---------------------------------------
----------------Content----------------
return _aliased8884.onTouchBegan.call(_aliased8884,a,d);
---------------------------------------
==========================================================================E
==================================63==================================S
------------------Argv------------------
a,d
---------------------------------------
----------------Content----------------
return _aliased8884.onTouchMoved.call(_aliased8884,a,d);
---------------------------------------
==========================================================================E
==================================64==================================S
------------------Argv------------------
a,d
---------------------------------------
----------------Content----------------
return _aliased8884.onTouchEnded.call(_aliased8884,a,d);
---------------------------------------
==========================================================================E
==================================65==================================S
------------------Argv------------------
a,d
---------------------------------------
----------------Content----------------
return _aliased8884.onTouchCancelled.call(_aliased8884,a,d);
---------------------------------------
==========================================================================E
==================================66==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
a.setTouchEnabled(false);
a.onTouchBegan=null;
a.onTouchMoved=null;
a.onTouchEnded=null;
a.onTouchCancelled=null;
---------------------------------------
==========================================================================E
==================================67==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
if(a && !(a.__eventProxyListeners)){
a.__eventProxyListeners=a.__eventProxyListeners||{};
a.addObjectEventListener=function () { __FUNC_68__ };
a.dispatchObjectEvent=function () { __FUNC_70__ };
a.removeObjectEventListener=function () { __FUNC_71__ };
a.removeObjectAllEventListenersByName=function () { __FUNC_73__ };
a.removeObjectAllEventListeners=function () { __FUNC_74__ };
a.isObjectEventListenerExisted=function () { __FUNC_75__ };
a.addEventListener=a.addObjectEventListener;
a.dispatchEvent=a.dispatchObjectEvent;
a.removeEventListener=a.removeObjectEventListener;
a.removeAllEventListenersByName=a.removeObjectAllEventListenersByName;
a.removeAllEventListeners=a.removeObjectAllEventListeners;
a.isEventListenerExisted=a.isObjectEventListenerExisted;
}
---------------------------------------
==========================================================================E
==================================68==================================S
------------------Argv------------------
a,c,d,e
---------------------------------------
----------------Content----------------
_local0=this.__eventProxyListeners;
_local0[a]=_local0[a]||[];
_local1=c||function () { __FUNC_69__ };
_local0[a].push(_local1);
return _local1;
---------------------------------------
==========================================================================E
==================================69==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================70==================================S
------------------Argv------------------
a,c,d
---------------------------------------
----------------Content----------------
a = {};
_local0=a || a.name || this.__eventProxyListeners[""] || [];
a.object=a.object||this;
_local1=0;
while((_local1 < _local0.length)){
_local0[_local1](a);
_local1=(_local1 + 1);
}
---------------------------------------
==========================================================================E
==================================71==================================S
------------------Argv------------------
a,c,d,e,f
---------------------------------------
----------------Content----------------
_local0=c||function () { __FUNC_72__ };
_local1=a || this.__eventProxyListeners[""] || [];
_local2=0;
while((_local2 < _local1.length)){
if((_local1[_local2] == _local0)){
_local1.splice(_local2,1);
break;
}
_local2=(_local2 + 1);
}
---------------------------------------
==========================================================================E
==================================72==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================73==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.__eventProxyListeners[""]=a||[];
---------------------------------------
==========================================================================E
==================================74==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.__eventProxyListeners={};
---------------------------------------
==========================================================================E
==================================75==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return this.__eventProxyListeners[a]?true:false;
---------------------------------------
==========================================================================E
==================================76==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
if(_aliased8884){
_aliased8884.__scheduleListeners=_aliased8884.__scheduleListeners||{};
_aliased8884.__actionListeners=_aliased8884.__actionListeners||{};
_aliased8884.__actionNodes=_aliased8884.__actionNodes||{};
_aliased7540=cc.Director.getInstance().getScheduler();
_aliased4461=function () { __FUNC_77__ };
_aliased8884.schedule=function () { __FUNC_79__ };
_aliased8884.unschedule=function () { __FUNC_80__ };
_aliased8884.unscheduleAll=function () { __FUNC_81__ };
_aliased8884.async=function () { __FUNC_82__ };
_aliased8884.schedule_a=function () { __FUNC_83__ };
_aliased8884.unschedule_a=function () { __FUNC_84__ };
_aliased8884.unscheduleAll_a=function () { __FUNC_85__ };
}
---------------------------------------
==========================================================================E
==================================77==================================S
------------------Argv------------------
b,c,f,h,g
---------------------------------------
----------------Content----------------
_aliased8058=(c - 1);
return function () { __FUNC_78__ };
---------------------------------------
==========================================================================E
==================================78==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
_aliased7626=(_aliased8058 - 1);
_aliased7540();
if((_aliased7626 <= 0)){
switch(_aliased4461){
case "block":
undefined.__actionListeners[_aliased8884]=null;
if(undefined.__actionNodes[_aliased8884]){
undefined.__actionNodes[_aliased8884].removeFromParent(true);
undefined.__actionNodes[_aliased8884]=null;
}
case "none_block":
undefined.__scheduleListeners[_aliased8884]=null;
default:
}
---------------------------------------
==========================================================================E
==================================79==================================S
------------------Argv------------------
a,e,f,h,g
---------------------------------------
----------------Content----------------
this.unschedule(a);
if(h){
_local0=_aliased4461(a,(h - 1),e,"none_block");
this.__scheduleListeners[a]=_local0;
_aliased7540.scheduleCallbackForTarget(this,_local0,f,(h - 1),null,false);
} else {
}
this.__scheduleListeners[a]=e;
_aliased7540.scheduleCallbackForTarget(this,e,f,cc.REPEAT_FOREVER,null,false);
return e;
---------------------------------------
==========================================================================E
==================================80==================================S
------------------Argv------------------
a,c
---------------------------------------
----------------Content----------------
_local0=this.__scheduleListeners[a];
if(_local0){
_aliased7540.unscheduleCallbackForTarget(this,_local0);
this.__scheduleListeners[a]=null;
}
---------------------------------------
==========================================================================E
==================================81==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
_aliased7540.unscheduleAllCallbacksForTarget(this);
this.unscheduleAll_a();
---------------------------------------
==========================================================================E
==================================82==================================S
------------------Argv------------------
a,c
---------------------------------------
----------------Content----------------
_aliased7540.scheduleCallbackForTarget(this,a,c,0,0,false);
---------------------------------------
==========================================================================E
==================================83==================================S
------------------Argv------------------
a,b,f,h,g
---------------------------------------
----------------Content----------------
this.unschedule_a(a);
_local0=cc.Node.create();
cc.Director.getInstance().getRunningScene().addChild(_local0);
h?f = cc.Repeat.create(cc.Sequence.create(f||cc.DelayTime.create(0),cc.CallFunc.create(_aliased4461(a,h,b,"block")),_local0),h):f = cc.RepeatForever.create(cc.Sequence.create(f||cc.DelayTime.create(0),cc.CallFunc.create(b,_local0)));
this.__actionListeners[a]=f;
this.__actionNodes[a]=_local0;
_local0.runAction(f);
return b;
---------------------------------------
==========================================================================E
==================================84==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0=this.__actionListeners[a];
_local1=this.__actionNodes[a];
if(_local0){
this.__actionListeners[a]=null;
if(_local1){
_local1.stopAction(_local0);
_local1.removeFromParent(true);
this.__actionNodes[a]=null;
}}
---------------------------------------
==========================================================================E
==================================85==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
while(this.__actionListeners has _iternext){
_local0=_iternext;
this.unschedule_a(_local0);
}
this.__actionListeners={};
this.__actionNodes={};
---------------------------------------
==========================================================================E
==================================86==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.nodeUtils=ty.nodeUtils||{};
_aliased2026=cc.Node.extend({m_childrenList:{},ctor:function () { __FUNC_87__ },init:function () { __FUNC_88__ },add:function () { __FUNC_89__ },remove:function () { __FUNC_90__ },removeAll:function () { __FUNC_91__ }});
ty.nodeUtils.notificationRootNode=ty.nodeUtils.notificationRootNode||(function () { __FUNC_92__ })();
---------------------------------------
==========================================================================E
==================================87==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this._super();
cc.associateWithNative(this,cc.Node);
---------------------------------------
==========================================================================E
==================================88==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
if(!(this._super())){
return false;
}
_local0=cc.Director.getInstance();
this.setContentSize(_local0.getWinSize());
_local0.setNotificationNode(this);
return true;
---------------------------------------
==========================================================================E
==================================89==================================S
------------------Argv------------------
a,c,d,e
---------------------------------------
----------------Content----------------
_local0=this.m_childrenList[a];
_local0&&this.removeChild(_local0);
this.m_childrenList[a]=c;
d||this.addChild(c,0);
---------------------------------------
==========================================================================E
==================================90==================================S
------------------Argv------------------
a,c
---------------------------------------
----------------Content----------------
_local0=this.m_childrenList[a];
_local0&&this.removeChild(_local0);
this.m_childrenList[a]=null;
---------------------------------------
==========================================================================E
==================================91==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
while(this.m_childrenList has _iternext){
_local0=_iternext;
this.removeChild(this.m_childrenList[_local0]);
}
this.m_childrenList={};
---------------------------------------
==========================================================================E
==================================92==================================S
------------------Argv------------------
b
---------------------------------------
----------------Content----------------
_local0=new _aliased2026();
return _local0&&_local0.init()?_local0=new _aliased2026():null;
---------------------------------------
==========================================================================E
==================================93==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.nodeUtils=ty.nodeUtils||{};
ty.nodeUtils.baseRectTouchLayer=ty.nodeUtils.baseRectTouchLayer||cc.LayerColor.extend({ignoreRect:cc.rect(0,0,1,1),ctor:function () { __FUNC_94__ },onCleanup:function () { __FUNC_95__ },init:function () { __FUNC_96__ },onInit:function () { __FUNC_99__ },update:function () { __FUNC_100__ },visit:function () { __FUNC_101__ },onTouchBegan:function () { __FUNC_102__ },onTouchMoved:function () { __FUNC_103__ },onTouchEnded:function () { __FUNC_104__ }});
ty.nodeUtils.baseRectTouchLayer.create=function () { __FUNC_105__ };
---------------------------------------
==========================================================================E
==================================94==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this._super();
cc.associateWithNative(this,cc.LayerColor);
ty.extend.eventProxyExtend(this);
---------------------------------------
==========================================================================E
==================================95==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.dispatchEvent({name:"DESTROY"});
this.removeAllEventListeners();
cc.unregisterTouchDelegate(this);
---------------------------------------
==========================================================================E
==================================96==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
if(!(this._super())){
return false;
}
this.setTouchEnabled(true);
this.setTouchMode(cc.TOUCHES_ONE_BY_ONE);
this.onInit();
_local0=this.getContentSize();
_aliased7463=cc.RenderTexture.create(_local0.width,_local0.height);
this.addChild(_aliased7463);
_aliased7463.setPosition(cc.p((_local0.width / 2),(_local0.height / 2)));
_aliased8892=cc.LayerColor.create(cc.c4b(0,0,0,127));
_aliased4938=cc.LayerColor.create(cc.c4b(0,0,0,0));
_aliased4938.setContentSize(cc.size(1,1));
_aliased4938.setPosition(cc.p(0,0));
_aliased8892.setBlendFunc(gl.ONE,gl.ZERO);
_aliased4938.setBlendFunc(gl.DST_ALPHA,gl.ZERO);
_aliased4938.retain();
_aliased8892.retain();
this.addEventListener("DESTROY",function () { __FUNC_97__ });
this.addEventListener("DRAW",function () { __FUNC_98__ });
this.dispatchEvent({name:"DRAW",self:this,rect:cc.rect(100,100,100,100)});
return true;
---------------------------------------
==========================================================================E
==================================97==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
_aliased4938.release();
_aliased8892.release();
---------------------------------------
==========================================================================E
==================================98==================================S
------------------Argv------------------
a,f,h,g
---------------------------------------
----------------Content----------------
_local0=a.self;
a?_local1=cc.p(a.x,a.y):_local1=cc.p(_aliased4938.getPosition());
a?_local2=cc.size(a.width,a.height):_local2=_aliased4938.getContentSize();
_aliased7463.begin();
_aliased8892.visit();
_aliased4938.setPosition(_local1);
_aliased4938.setContentSize(_local2);
_aliased4938.visit();
_aliased7463.end();
_local0.ignoreRect=a;
---------------------------------------
==========================================================================E
==================================99==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
cc.registerTargetedDelegate(-2147483648,true,this);
---------------------------------------
==========================================================================E
==================================100==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.dispatchEvent({name:"DRAW",self:this,rect:a});
---------------------------------------
==========================================================================E
==================================101==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD("ty.NodeUtil","visit");
---------------------------------------
==========================================================================E
==================================102==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
a = this.convertToNodeSpace(a.getLocation());
_local0=this.getBoundingBox();
return cc.rectContainsPoint(_local0,a)?!(this.isVisible()) || !(this.isTouchEnabled()) || cc.rectContainsPoint(this.ignoreRect,a)?false:true:false;
---------------------------------------
==========================================================================E
==================================103==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================104==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================105==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
_local0=new ty.nodeUtils.baseRectTouchLayer();
return _local0&&_local0.init()?_local0=new ty.nodeUtils.baseRectTouchLayer():null;
---------------------------------------
==========================================================================E
==================================106==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.nodeUtils=ty.nodeUtils||{};
ty.nodeUtils.tableView=ty.nodeUtils.tableView||{};
_aliased3636=cc.LayerColor.extend({tv:null,counts:0,ctor:function () { __FUNC_107__ },onCleanup:function () { __FUNC_108__ },init:function () { __FUNC_109__ },setTouchEnabled:function () { __FUNC_110__ },numberOfCellsInTableView:function () { __FUNC_111__ },tableCellSizeForIndex:function () { __FUNC_112__ },tableCellAtIndex:function () { __FUNC_113__ },reloadData:function () { __FUNC_114__ }});
ty.nodeUtils.tableView.create=function () { __FUNC_115__ };
---------------------------------------
==========================================================================E
==================================107==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this._super();
cc.associateWithNative(this,cc.LayerColor);
ty.extend.eventProxyExtend(this);
---------------------------------------
==========================================================================E
==================================108==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.removeAllEventListeners();
---------------------------------------
==========================================================================E
==================================109==================================S
------------------Argv------------------
a,c,d,e
---------------------------------------
----------------Content----------------
if(!(this._super())){
return false;
}
this.config=a;
cc.Director.getInstance().getWinSize();
a = this.config.viewSize||cc.size(0,0);
(typeof this.config.direction == "number")?_local0=this.config.direction:_local0=cc.SCROLLVIEW_DIRECTION_VERTICAL;
_local1=cc.TABLEVIEW_FILL_TOPDOWN;
_local2=this.config.fillOrder || this.config.bounce || true;
this.setContentSize(a);
this.tv=cc.TableView.create(this,a);
this.tv.setPosition(cc.p(0,0));
this.tv.setDirection(_local0);
this.tv.setDelegate(this);
this.tv.setVerticalFillOrder(_local1);
this.tv.setBounceable(_local2);
this.addChild(this.tv);
return true;
---------------------------------------
==========================================================================E
==================================110==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.tv.setTouchEnabled(a);
---------------------------------------
==========================================================================E
==================================111==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return this.counts;
---------------------------------------
==========================================================================E
==================================112==================================S
------------------Argv------------------
a,c
---------------------------------------
----------------Content----------------
return this.config.cell.getSize(c);
---------------------------------------
==========================================================================E
==================================113==================================S
------------------Argv------------------
a,c,d
---------------------------------------
----------------Content----------------
_local0=a.dequeueCell();
if(_local0){
_local0.updateCell(c,a);
} else {
}
_local0=this.config.cell.create(this.config);
_local0.initCell(c,a);
return _local0;
---------------------------------------
==========================================================================E
==================================114==================================S
------------------Argv------------------
a,c,d,e,f,h,g,j
---------------------------------------
----------------Content----------------
this.counts=a||0;
a = this.tv.getContentOffset();
_local0=0;
_local1=0;
this.tv.reloadData();
if(c){
if((c == "STOP")){
_local0=this.config.viewSize.width;
_local1=this.config.cell.getSize(0).width;
_local2=this.config.viewSize.height;
_local3=this.config.cell.getSize(0).height;
c = this.tv.getDirection();
(c == cc.SCROLLVIEW_DIRECTION_VERTICAL)?_local4=Math.ceil((_local2 / _local3)):_local4=Math.ceil((_local0 / _local1));
if((_local4 <= this.counts)){
this.tv.setBounceable(false);
this.tv.setContentOffset(a,false);
this.tv.setBounceable(true);
}
} else 
_local0=this.config.viewSize.width;
_local1=this.config.cell.getSize(0).width;
_local2=this.config.viewSize.height;
_local3=this.config.cell.getSize(0).height;
c = this.tv.getDirection();
(c == cc.SCROLLVIEW_DIRECTION_VERTICAL)?_local4=Math.ceil((_local2 / _local3)):_local4=Math.ceil((_local0 / _local1));
(c == cc.SCROLLVIEW_DIRECTION_VERTICAL)?_local1=((_local4 - (_local2 / _local3)) * _local3):_local1=((_local4 - (_local0 / _local1)) * _local1);
((d + 1) > this.counts)?d = this.counts:d = (d + 1);
if((_local4 <= this.counts)){
_local0=(((- this.tv.getContentSize().width) + (this.config.cell.getSize(0).width * (this.counts - (d - _local4)))) - _local1);
_local1=(((- this.tv.getContentSize().height) + (this.config.cell.getSize(0).height * (this.counts - (d - _local4)))) - _local1);
this.tv.setBounceable(false);
if((c == cc.SCROLLVIEW_DIRECTION_VERTICAL)){
if(((d >= _local4) && ((- a.y) >= (- _local1))) || (d < _local4) && ((- a.y) < (- _local1))){
a.y=(a.y - _local1);
(a.y >= 0)?a.y=0:a.y=a.y;
}
} else 
(_local0 >= 0)?a.x=0:a.x=_local0;
}
this.tv.setContentOffset(a,true);
this.tv.setBounceable(true);
}
} else 
c = this.tv.getDirection();
if((c == cc.SCROLLVIEW_DIRECTION_VERTICAL)){
this.tv.setBounceable(false);
_local1=(this.tv.getContentSize().height + this.config.viewSize.height);
(_local1 >= 0)?this.tv.setContentOffset(cc.p(0,0),false):this.tv.setContentOffset(cc.p(0,_local1),false);
this.tv.setBounceable(false);
_local0=((- this.tv.getContentSize().width) + this.config.viewSize.width);
(_local0 >= 0)?this.tv.setContentOffset(cc.p(0,0),false):this.tv.setContentOffset(cc.p(_local0,0),false);
this.tv.setBounceable(true);
}}
---------------------------------------
==========================================================================E
==================================115==================================S
------------------Argv------------------
b,c
---------------------------------------
----------------Content----------------
_local0=new _aliased3636();
return _local0&&_local0.init(b)?_local0=new _aliased3636():null;
---------------------------------------
==========================================================================E
==================================116==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.view={ccbRootNode:null};
this.model={};
this.states={};
this.stateBtns={};
this.currentState="";
this.btnGroup=null;
this.controls=[];
---------------------------------------
==========================================================================E
==================================117==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.onDestroy();
---------------------------------------
==========================================================================E
==================================118==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.NotificationCenter.ignore(ty.EventType.UPDATE_LANGUAGE,this._onMsgLanguageChanged,this);
this.btnGroup&&this.btnGroup.destroy();
while(this.controls&&(this.controls.length > 0)){
this.controls.pop().destroy();
}
this.controls=null;
---------------------------------------
==========================================================================E
==================================119==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.onInit(a);
---------------------------------------
==========================================================================E
==================================120==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
if(this._modelDelegate&&this._modelDelegate.onInit){
this._modelDelegate.onInit(b);
}
this.load(a);
ty.NotificationCenter.listen(ty.EventType.UPDATE_LANGUAGE,this._onMsgLanguageChanged,this);
---------------------------------------
==========================================================================E
==================================121==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this._modelDelegate=a;
---------------------------------------
==========================================================================E
==================================122==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return this._modelDelegate;
---------------------------------------
==========================================================================E
==================================123==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
a&&cc.BuilderReader.loadWithController(a,this,this);
---------------------------------------
==========================================================================E
==================================124==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.onLoad();
---------------------------------------
==========================================================================E
==================================125==================================S
------------------Argv------------------
a,b,c,d,e,f,h,g
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"onLoad BaseController");
this.view.ccbRootNode=this.rootNode;
_aliased7038=this;
this.view.ccbRootNode.setonEnterTransitionDidFinishCallback(function () { __FUNC_126__ });
this.view.ccbRootNode.setOnEnterCallback(function () { __FUNC_127__ });
this.view.ccbRootNode.setOnExitCallback(function () { __FUNC_128__ });
while(this has _iternext){
_local1=_iternext;
if(this.hasOwnProperty(_local1)&&this[_local1] instanceof cc.Node){
this[_local1].nameInCcb=_local1;
}
}
this.states.base=[];
break;
while(this has _iternext){
_local1=_iternext;
if(this.hasOwnProperty(_local1)){
_local2=_local1;
if((_local2.indexOf("_state_") == 0)){
_local3=_local2.split("_");
_local4=_local3[2];
this.states[_local4]=this.states[_local4]||[];
this.states[_local4].push(this[_local1]);
_local3.shift();
_local3.shift();
_local3.shift();
_local3.unshift("");
_local2=_local3.join("_");
}
if((_local2.indexOf("_special_") == 0)){
_local3=this[_local1];
_local4=_local2.split("_");
if((_local4[2] == "ccb")){
(_local4.length != 5)&&hall.assert.true(false,"");
_local4.shift();
_local2=[_local4.shift(),_local4.shift(),_local4.shift()].join("_");
_local4=ty.DisplayUtil.getCcbControlByName(_local4.join("_"));
this[_local2]=_local4;
_local3.addChild(_local4.getRootNode());
break;
if((_local4[2] == "mask")){
(_local4.length != 4)&&hall.assert.true(false,"");
_local3.getParent().maskContainer=ty.DisplayUtil.createMask(_local3.getParent(),_local3);
break;
if((_local4[2] == "listV")){
(_local4.length != 4)&&hall.assert.true(false,"");
_local4=ty.SpecialControl.getListControl();
_local4.parentUI=this;
_local4.setListContainer(_local3);
_local3.listControl=_local4;
this.controls.push(_local4);
break;
if((_local4[2] == "btnGroup")){
(_local4.length != 4)&&hall.assert.true(false,"");
_local4=ty.SpecialControl.getBtnGroupControl();
_local4.setBtnContainer(_local3);
_local2=0;
while((_local2 < _local4.btns.length)){
_local5=_local4.btns[_local2];
} else if((_local5.nameInCcb.indexOf("btn_state_") == 0)){
_local6=_local5.nameInCcb.split("btn_state_")[1];
this.bindStateWithBtn(_local5,_local6);
}
_local2=(_local2 + 1);
_local2=0;
}
_local3.btnGroupControl=_local4;
this.controls.push(_local4);
break;
}
if((_local4[2] == "progressBar")){
(_local4.length != 4)&&hall.assert.true(false,"");
_local4=_local3.getChildren();
(_local4.length != 2)&&hall.assert.true(false,"");
_local5=_local2;
_local6=0;
} else {
while((_local6 < 2)){
_local7=_local4[_local6];
_local2=_local7;
_local5=_local7;
_local6=((_local7.nameInCcb.indexOf("_bar_") == 0)&&_local7.nameInCcb.indexOf("_special_mask_") == 0)&&(_local6 + 1);
_local6=0;
}
_local2||hall.assert.true(false,"");
_local5||hall.assert.true(false,"");
_local3.progressBarControl=ty.SpecialControl.getProgressBarControl();
_local3.progressBarControl.setBar(_local2);
} else if((_local4[2] != "input")){
if((_local4[2] == "label")){
(_local4.length != 8)&&hall.assert.true(false,"");
this.resetLabelColor(_local3,parseInt(_local4[7]),cc.color(parseInt(_local4[4]),parseInt(_local4[5]),parseInt(_local4[6])));
this[_local4[3]]=_local3;
} else if((_local4[2] == "picUrl")){
(_local4.length != 4)&&hall.assert.true(false,"");
_local4=ty.SpecialControl.getPicUrlControl();
_local4.getIconSp(_local3);
_local3.picUrlControl=_local4;
this.controls.push(_local4);
} else if((_local4[2] == "particle")){
(_local4.length != 5)&&hall.assert.true(false,"");
(_local4[4] == "relative")&&_local3.setPositionType(cc.ParticleSystem.TYPE_RELATIVE);
} else {
}
hall.assert.true(false,((("" + _local4[2]) + "") + _local2));
}}}
}
---------------------------------------
==========================================================================E
==================================126==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
_aliased7038.onRootNodeEnterTransitionDidFinish();
---------------------------------------
==========================================================================E
==================================127==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
_aliased7038.onRootNodeEnter();
---------------------------------------
==========================================================================E
==================================128==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
_aliased7038.onRootNodeExit();
---------------------------------------
==========================================================================E
==================================129==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
if(a.btnGroupControl){
this.stateBtns[b]=a;
this.states[b]=this.states[b]||[];
} else {
}
hall.assert.true(false,"");
---------------------------------------
==========================================================================E
==================================130==================================S
------------------Argv------------------
a,b,c,d,e,f
---------------------------------------
----------------Content----------------
if((a != this.currentState)){
_local0=new _aliased3636();
_local1=_iternext;
_local2=_local7;
_local3=this.states;
_local4=ty.SpecialControl.getPicUrlControl();
break;
while(_local3 has _iternext){
_local4=_iternext;
if(_local3.hasOwnProperty(_local4)){
_local2=_local3[_local4];
_local0=0;
while((_local0 < _local2.length)){
_local1=_local2[_local0];
_local1.setVisible(false);
_local0=(_local0 + 1);
_local0=0;
}
}
}
_local2=_local3[a];
_local0&&this._btnSelected(_local0,"stateChange");
_local0=0;
while((_local0 < _local2.length)){
_local1=_local2[_local0];
_local1.setVisible(true);
_local0=(_local0 + 1);
_local0=0;
}
this.currentState=a;
this.stateChanged();
}
---------------------------------------
==========================================================================E
==================================131==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
hall.assert.true(false,"");
---------------------------------------
==========================================================================E
==================================132==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
a.btnGroupControl&&a.btnGroupControl.selectBtn(a);
if((b != "stateChange")&&(b == "userPress")){
while(this.stateBtns has _iternext){
_local0=_iternext;
(this.stateBtns[_local0] == a)&&this.changeState(_local0);
}
}
---------------------------------------
==========================================================================E
==================================133==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
ty.DisplayUtil.controlPlayAnimation(this,a,b,c,d);
---------------------------------------
==========================================================================E
==================================134==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
_local0=a.getColor();
a.setColor(cc.color(255,255,255));
c?a.enableOutline(c,b):b&&a.enableOutline(cc.color(255,255,255),b);
a.setTextColor(cc.color(_local0.r,_local0.g,_local0.b));
---------------------------------------
==========================================================================E
==================================135==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================136==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================137==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================138==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.onLanguageChanged(a);
---------------------------------------
==========================================================================E
==================================139==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================140==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.onShow();
---------------------------------------
==========================================================================E
==================================141==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"onShow BaseController");
---------------------------------------
==========================================================================E
==================================142==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.onRegisterControlCallback();
---------------------------------------
==========================================================================E
==================================143==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================144==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.onRegisterMsgCallback();
---------------------------------------
==========================================================================E
==================================145==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================146==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.onUpdate();
---------------------------------------
==========================================================================E
==================================147==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================148==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
this.destroy();
_local0=cc.Director.getInstance();
_local1=cc.Scene.create();
a = new a();
a.init(b,c);
b&&_local1.addChild(b);
(_local0.getRunningScene() === null)?_local0.runWithScene(_local1):_local0.replaceScene(_local1);
---------------------------------------
==========================================================================E
==================================149==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
this.view.ccbRootNode.animationManager.runAnimationsForSequenceNamedTweenDuration(a,0);
if(c&&d){
a = cc.delayTime;
_local0=cc.sequence;
this.getRootNode().runAction(_local0(a(b),cc.callFunc(d,c)));
}
---------------------------------------
==========================================================================E
==================================150==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
this.view.ccbRootNode.animationManager.runAnimationsForSequenceNamedTweenDuration(a,0);
this.delayRemove(b);
---------------------------------------
==========================================================================E
==================================151==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0=cc.delayTime;
_local1=cc.sequence;
this.getRootNode().runAction(_local1(_local0(a),cc.callFunc(this.removeSelf,this)));
---------------------------------------
==========================================================================E
==================================152==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.getRootNode().removeFromParent(true);
---------------------------------------
==========================================================================E
==================================153==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================154==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================155==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================156==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================157==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this._super();
ty.LOGD(this._TAG,"In ctor new BaseAnimController, now data is:");
this.view.animationManager=null;
this._frameScale=(ty.Util.getFrameSize().height / ty.Util.getFrameSize().width);
---------------------------------------
==========================================================================E
==================================158==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this._super();
ty.LOGD(this._TAG,"onLoad BaseAnimController");
this.view.animationManager=this.view.ccbRootNode.animationManager;
(this._frameScale > 0.73) && (typeof this.mSceneBackground != "undefined") && this.mSceneBackground.setScaleY(1.125);
this.dumpCallbackNames();
---------------------------------------
==========================================================================E
==================================159==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"callback must be implemented as follows:");
_local0=this.view.animationManager.getDocumentCallbackNames();
_local1="";
_local2=0;
while((_local2 < _local0.length)){
_local1=((_local1 + _local0[_local2]) + "	");
_local2=(_local2 + 1);
_local2=0;
}
ty.LOGD(this._TAG,_local1);
---------------------------------------
==========================================================================E
==================================160==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.view.animationManager.runAnimationsForSequenceNamedTweenDuration(a,0);
---------------------------------------
==========================================================================E
==================================161==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
this.view.animationManager.setCompletedAnimationCallback(b,c);
---------------------------------------
==========================================================================E
==================================162==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," in ctor new VoiceRecorder");
ty.isIOS()?ty.LOGD(this._TAG,"IOS not support voice recorder"):ty.isAndroid()&&ty.LOGD(this._TAG,"OK, android support voice recorder");
---------------------------------------
==========================================================================E
==================================163==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================164==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================165==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================166==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================167==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================168==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,(("has passed " + a) + " s"));
ty.NotificationCenter.trigger(ty.EventType.RECORDER_TIME,a);
---------------------------------------
==========================================================================E
==================================169==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,(" amplitude == " + a));
ty.NotificationCenter.trigger(ty.EventType.RECORDER_AMPLITUDE,a);
---------------------------------------
==========================================================================E
==================================170==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,("has error, the error is: " + a));
ty.NotificationCenter.trigger(ty.EventType.RECORDER_ERROR,a);
---------------------------------------
==========================================================================E
==================================171==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,("fileName in _VoiceRecorder ------------:" + a.fileName));
ty.LOGD(this._TAG,("msg in _VoiceRecorder ------------:" + a.audioData));
ty.NotificationCenter.trigger(ty.EventType.RECORDER_ENCODE,a);
---------------------------------------
==========================================================================E
==================================172==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
voice_recorder = (ty.testTimes == 1)&&new ty._VoiceRecorder();
(ty.testTimes == 2)&&voice_recorder.startRecordAudio();
(ty.testTimes == 3)&&voice_recorder.stopRecorder();
(ty.testTimes == 4)&&voice_recorder.playRecordedAudio();
(ty.testTimes == 5)&&voice_recorder.isRecording();
if((ty.testTimes == 6)){
ty.testTimes=1;
}
---------------------------------------
==========================================================================E
==================================173==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
cc.log("in notificationManager ctor");
this.notificationManager=TY_NOTIFICATION_MANAGER.create();
this.notificationManager.handleLocalNotification=this.handleLocalNotification;
this.notificationManager.handleRemoteNotification=this.handleRemoteNotification;
this.ncTodo=this.ncMsg=this.ncFrom=this.ncKey="";
this.ncState=0;
---------------------------------------
==========================================================================E
==================================174==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.notificationManager.getInitNotification();
---------------------------------------
==========================================================================E
==================================175==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,((("push local notification with key: " + a) + " content: ") + b));
this.notificationManager.pushLocalNotification(a,b,c);
---------------------------------------
==========================================================================E
==================================176==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,("cancel local notification with key: " + a));
this.notificationManager.cancelLocalNotification(a);
---------------------------------------
==========================================================================E
==================================177==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"cancelAllLocalNotifications");
this.notificationManager.cancelAllLocalNotifications();
---------------------------------------
==========================================================================E
==================================178==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,("reset local notification with key: " + a));
this.notificationManager.resetLocalNotification(a,b);
---------------------------------------
==========================================================================E
==================================179==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0=ty.NotificationManager;
ty.LOGD(_local0._TAG,("handleLocalNotification: " + a));
a = JSON.parse(a);
ty.LOGD(_local0._TAG,("handle local notification with key: " + a.key));
---------------------------------------
==========================================================================E
==================================180==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0=ty.NotificationManager;
ty.LOGD(_local0._TAG,("handleRemoteNotification : " + a));
a = JSON.parse(a);
_local0.ncState=a.state;
_local0.ncTodo=a.payload;
_local0.ncMsg=a.key;
_local1=a.pushid.split("|");
_local0.ncFrom=_local1[1]||"";
_local0.ncKey=_local1[0]||"";
ty.LOGD(_local0._TAG,((((((((("handleRemoteNotification key:" + _local0.ncKey) + " from:") + _local0.ncFrom) + " state:") + _local0.ncState) + " msg:") + _local0.ncMsg) + " todo:") + _local0.ncTodo));
if((_local0.ncMsg != "")||(_local0.ncTodo != "")){
a.pushid=_local0.ncKey;
a.from=_local0.ncFrom;
ty.NotificationCenter.trigger(ty.EventType.MSG_REMOTE_NOTIFICATION,a);
}
---------------------------------------
==========================================================================E
==================================181==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,("curKey: " + this.ncKey));
return this.ncKey;
---------------------------------------
==========================================================================E
==================================182==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,("curFrom: " + this.ncFrom));
return this.ncFrom;
---------------------------------------
==========================================================================E
==================================183==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,("curState: " + this.ncState));
return this.ncState;
---------------------------------------
==========================================================================E
==================================184==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,("curMsg: " + this.ncMsg));
return this.ncMsg;
---------------------------------------
==========================================================================E
==================================185==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,("curTodo:" + this.ncTodo));
return this.ncTodo;
---------------------------------------
==========================================================================E
==================================186==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
new ty._NotificationManager().pushLocalNotification("haha","hehehehe",10);
---------------------------------------
==========================================================================E
==================================187==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," in ctor new TCPConnection");
this._socket=TY_TCP.create();
this.self=this;
---------------------------------------
==========================================================================E
==================================188==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"now the state is SOCKET_STATUS_CONNECTING");
if((this._socket == null)){
this._socket=TY_TCP.create();
}
this._socket.setParams(a.tcpServerIp,a.portNumber);
this._socket.setRetryConnectTimeOut(this._retryConnectTimeOut);
this._socket.state=ty.SocketStatus.SOCKET_STATUS_CONNECTING;
this._socket.onopen=ty.PublishersManager.tcpMsgPublisher.onSocketOpen;
this._socket.onmessage=ty.PublishersManager.tcpMsgPublisher.onMsg;
this._socket.onerror=ty.PublishersManager.tcpMsgPublisher.onSocketError;
this._socket.onclose=ty.PublishersManager.tcpMsgPublisher.onSocketClose;
this._socket.onReconnect=ty.PublishersManager.tcpMsgPublisher.onReconnect;
this._socket.connect();
---------------------------------------
==========================================================================E
==================================189==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this._socket&&this._socket.setParams(a.tcpServerIp,a.portNumber);
---------------------------------------
==========================================================================E
==================================190==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return this._socket&&(this._socket.state == ty.SocketStatus.SOCKET_STATUS_OPEN);
---------------------------------------
==========================================================================E
==================================191==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
if(!(this._socket)||(this._socket.state != ty.SocketStatus.SOCKET_STATUS_OPEN)){
cc.log("send msg : socket not available!");
} else {
}
ty.LOGD(this._TAG,("send msg :" + a));
this._socket.send(a);
---------------------------------------
==========================================================================E
==================================192==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," init _TCPConnection");
this.onInit();
---------------------------------------
==========================================================================E
==================================193==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," onInit _TCPConnection");
---------------------------------------
==========================================================================E
==================================194==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," close _TCPConnection");
if(this._socket&&(this._socket.state != ty.SocketStatus.SOCKET_STATUS_CLOSED)){
this._socket.state=ty.SocketStatus.SOCKET_STATUS_CLOSING;
this._socket.close();
}
---------------------------------------
==========================================================================E
==================================195==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.close();
if(this._socket){
_local0=function () { __FUNC_196__ };
this._socket.onopen=_local0;
this._socket.onmessage=_local0;
this._socket.onerror=_local0;
this._socket.onclose=_local0;
this._socket.onReconnect=_local0;
this._socket=null;
}
---------------------------------------
==========================================================================E
==================================196==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================197==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this._socket&&this._socket.connect();
---------------------------------------
==========================================================================E
==================================198==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this._retryConnectTimeOut=a;
---------------------------------------
==========================================================================E
==================================199==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.PublishersManager.addOnePublisher("tcpMsgPublisher",{onReconnect:function () { __FUNC_200__ },onSocketOpen:function () { __FUNC_201__ },onMsg:function () { __FUNC_202__ },onSocketError:function () { __FUNC_203__ },onSocketClose:function () { __FUNC_204__ }});
---------------------------------------
==========================================================================E
==================================200==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.state=ty.SocketStatus.SOCKET_STATUS_RECONNECT;
ty.NotificationCenter.trigger(ty.EventType.TCP_RECONNECT);
---------------------------------------
==========================================================================E
==================================201==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
ty.LOGD("tcpMsgPublisher","tcp connection was opened succeed. showStack");
this.state=ty.SocketStatus.SOCKET_STATUS_OPEN;
ty.LOGD("tcpMsgPublisher","now the state is SOCKET_STATUS_OPEN");
_local0={type:"open"};
_local0.seed=a;
ty.NotificationCenter.trigger(ty.EventType.TCP_OPENED,_local0);
---------------------------------------
==========================================================================E
==================================202==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
ty.NotificationCenter.trigger(ty.EventType.MSG_HEART_BEAT);
if(!(a)||(a.length <= 0)){
ty.LOGI("tcpMsgPublisher","get heartbeat msg");
_local0=JSON.parse(a);
} else if(_local0){
ty.netMsgDispatcher.processMsg(_local0.cmd,[_local0]);
ty.LOGI("tcpMsgPublisher",("receive msg-" + a));
ty.NotificationCenter.trigger(ty.EventType.TCP_RECEIVE,_local0);
}
---------------------------------------
==========================================================================E
==================================203==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD("tcpMsgPublisher","tcp connection has error");
this.state=ty.SocketStatus.SOCKET_STATUS_ERROR;
ty.LOGD("tcpMsgPublisher",("error code is: " + a));
(a == ty.TCP_CONNECT_ERROR)&&ty.LOGD("tcpMsgPublisher","");
ty.NotificationCenter.trigger(ty.EventType.TCP_ERROR,{errCode:a});
---------------------------------------
==========================================================================E
==================================204==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.state=ty.SocketStatus.SOCKET_STATUS_CLOSED;
ty.LOGD("tcpMsgPublisher","tcp connection was closed");
ty.NotificationCenter.trigger(ty.EventType.TCP_CLOSE);
---------------------------------------
==========================================================================E
==================================205==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0=new ty._TCPConnection();
_local0.init();
_local1={onUserInfo:function () { __FUNC_206__ },onTcpClose:function () { __FUNC_207__ },onTcpError:function () { __FUNC_208__ }};
ty.netMsgDispatcher.registerMsg(ty.EventType.CMD_USER_INFO,_local1.onUserInfo,_local1);
ty.netMsgDispatcher.registerMsg(ty.EventType.TCP_CLOSE,_local1.onTcpClose,_local1);
ty.netMsgDispatcher.registerMsg(ty.EventType.TCP_ERROR,_local1.onTcpError,_local1);
_local0.connect({tcpServerIp:"125.39.220.71",portNumber:"9003"});
---------------------------------------
==========================================================================E
==================================206==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD("ty.tcp.test","in user info --------------------------");
---------------------------------------
==========================================================================E
==================================207==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD("ty.tcp.test","****************in tcp Onclose --------------------------");
---------------------------------------
==========================================================================E
==================================208==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD("ty.tcp.test","****************in tcp onTcpError --------------------------");
ty.LOGD("ty.tcp.test",("the error code is : " + a.errCode));
---------------------------------------
==========================================================================E
==================================209==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," in ctor new _http");
this.httpProxy=TY_HTTP.create();
this.tagCallbackMap={};
this.httpProxy.onHttpRequestCompleted=this.onHttpRequestCompleted;
this.getNextTag=(function () { __FUNC_210__ })();
---------------------------------------
==========================================================================E
==================================210==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
_aliased5827=0;
return function () { __FUNC_211__ };
---------------------------------------
==========================================================================E
==================================211==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
_aliased9527=(_aliased5827 + 1);
ty.LOGD(this._TAG,("i == " + _aliased9527));
return _aliased9527;
---------------------------------------
==========================================================================E
==================================212==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
if(!(a)||(typeof a == "undefined")){
ty.LOGE(this._TAG,"info is null ...");
_local0=JSON.parse(a);
ty.LOGD(this._TAG,("in onHttpRequestCompleted " + a));
a = ty.Http.tagCallbackMap[_local0.tag];
_local1=a.callback;
_local2=a.eventName;
a.obj&&_local1?a.callback.call(a.obj,_local0):_local2&&ty.NotificationCenter.trigger(_local2,_local0);
---------------------------------------
==========================================================================E
==================================213==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
_local0=b.obj;
_local1=b.callback;
if(_local0&&_local1){
this.registerCallbackWithObj(a,_local0,_local1);
} else {
}
_local0&&this.registerCallbackWithEvent(a,_local0);
---------------------------------------
==========================================================================E
==================================214==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
this.tagCallbackMap[a]={obj:b,callback:c};
---------------------------------------
==========================================================================E
==================================215==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
this.tagCallbackMap[a]={eventName:b};
---------------------------------------
==========================================================================E
==================================216==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return /^(http(s)?:\/\/)(\d+)\.(\d+)\.(\d+)\.(\d+)$/.test(a)?true:false;
---------------------------------------
==========================================================================E
==================================217==================================S
------------------Argv------------------
a,b,c,d,e,f
---------------------------------------
----------------Content----------------
_local0=("get" + this.getNextTag());
b = true;
_local1=a.url;
(b == null)&&this.check_have_IP(_local1);
if(b){
_local1=("timenow=" + new Date().valueOf());
(a.url.indexOf("?") == -1)?_local1=("?" + _local1):_local1=("&" + _local1);
_local1=(a.url + _local1);
}
_local2=a.headers||[];
_local3=a.alone||false;
ty.LOGD(this._TAG,((((("http get operation tag=" + _local0) + " url=") + _local1) + " headers=") + _local2));
this.registerCallback(_local0,a);
this.httpProxy.get(_local1,_local2,_local0,_local3);
---------------------------------------
==========================================================================E
==================================218==================================S
------------------Argv------------------
a,b,c,d,e,f
---------------------------------------
----------------Content----------------
_local0=("post" + this.getNextTag());
_local1=a.url;
this.check_have_IP(_local1);
_local2=a.headers||[];
_local3=a.postData||"";
_local4=a.alone||false;
ty.LOGD(this._TAG,((((("httpPost tag=" + _local0) + " url=") + _local1) + " headers=") + _local2));
this.registerCallback(_local0,a);
this.httpProxy.post(_local1,_local2,_local3,_local0,_local4);
---------------------------------------
==========================================================================E
==================================219==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
_local0=("put" + this.getNextTag());
_local1=a.url;
this.check_have_IP(_local1);
_local2=a.headers||[];
_local3=a.postData||"";
ty.LOGD(this._TAG,((((("httpPut tag=" + _local0) + " url=") + _local1) + " headers=") + _local2));
this.registerCallback(_local0,a);
this.httpProxy.put(_local1,_local2,_local3,_local0);
---------------------------------------
==========================================================================E
==================================220==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0=("delete" + this.getNextTag());
_local1=a.url;
this.check_have_IP(_local1);
ty.LOGD(this._TAG,((("http delete tag=" + _local0) + " url=") + _local1));
this.registerCallback(_local0,a);
this.httpProxy.deleteRes(_local1,_local0);
---------------------------------------
==========================================================================E
==================================221==================================S
------------------Argv------------------
a,b,c,d,e,f,h
---------------------------------------
----------------Content----------------
_local0=("post_file" + this.getNextTag());
_local1=a.url;
_local2=a.headers||[];
_local3=a.fullFilePath||"";
_local4=a.partName||"";
_local5=a.contentType||"";
ty.LOGD(this._TAG,((((("http post file tag=" + _local0) + " url=") + _local1) + " headers=") + _local2));
this.registerCallback(_local0,a);
this.httpProxy.postFile(_local1,_local2,_local3,_local4,_local0,_local5);
---------------------------------------
==========================================================================E
==================================222==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
ty.LOGD("ty.HTTP.test","begin testHttpObj");
ty.Http=new ty._Http();
_local0=ty.Http;
_local1={dataDemo:"only a test data in cb",cb:function () { __FUNC_223__ }};
_local2={url:"http://httpbin.org/ip",headers:["Content-Type: application/json; charset=utf-8"],obj:_local1,callback:_local1.cb};
_local0.httpGet(_local2);
_local2={url:"http://a error url",headers:["Content-Type: application/json; charset=utf-8"],postData:"visitor=cocos2d&TestSuite=Extensions Test/NetworkTest",obj:_local1,callback:_local1.cb};
_local0.httpGet(_local2);
_local2={url:"http://httpbin.org/post",headers:["Content-Type: application/json; charset=utf-8"],postData:"visitor=cocos2d&TestSuite=Extensions Test/NetworkTest",obj:_local1,callback:_local1.cb};
_local0.httpPost(_local2);
_local2={url:"http://httpbin.org/put",postData:"visitor=cocos2d&TestSuite=Extensions Test/NetworkTest",obj:_local1,callback:_local1.cb};
_local0.httpPut(_local2);
_local2={url:"http://httpbin.org/delete",obj:_local1,callback:_local1.cb};
_local0.httpDelete(_local2);
---------------------------------------
==========================================================================E
==================================223==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD("ty.HTTP.test",("the data in obj is :" + this.dataDemo));
ty.LOGD("ty.HTTP.test","");
ty.LOGD("ty.HTTP.test",("tag == " + a.tag));
(a.ResponseCode != 200)&&ty.LOGD("ty.HTTP.test",("error on http, the error msg is :" + a.errorBuffer));
---------------------------------------
==========================================================================E
==================================224==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.runobjbycmd={};
ty.runjs2nativeobj=TY_JS2NATIVE.create();
ty.runjs2nativeobj.onnativecalljsfun=function () { __FUNC_225__ };
---------------------------------------
==========================================================================E
==================================225==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
ty.LOGD("js2native","");
ty.LOGD("js2native",a);
a = JSON.parse(a);
ty.LOGD("js2native","");
_local0=a.cmd;
if(_local0){
ty.LOGD("js2native",("In initJs2native ty.NotificationCenter.trigger:" + _local0));
ty.NotificationCenter.trigger(_local0,a);
} else {
}
ty.LOGD("js2native","cmd error--------------------");
---------------------------------------
==========================================================================E
==================================226==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
switch(a.constructor){
case Object:
_local0="{";
_local1={dataDemo:"only a test data in cb",cb:function () { __FUNC_223__ }};
while(a has _iternext){
_local1=_iternext;
_local0=(_local0 + ((((""" + _local1) + "":") + ty.Serialize(a[_local1])) + ","));
}
_local0=(_local0.substr((_local0.length - 1)) == ",")&&_local0.substr(0,(_local0.length - 1));
return (_local0 + "}");
case Array:
_local0="[";
_local1=a.length;
_local2=0;
while((_local2 < _local1)){
_local0=(_local0 + (ty.Serialize(a[_local2]) + ","));
_local2=(_local2 + 1);
_local2=0;
}
_local0=(_local0.substr((_local0.length - 1)) == ",")&&_local0.substr(0,(_local0.length - 1));
return (_local0 + "]");
case Boolean:
return ((""" + a.toString()) + """);
case Date:
return ((""" + a.toString()) + """);
case Number:
return ((""" + a.toString()) + """);
case String:
return ((""" + a.toString()) + """);
default:
---------------------------------------
==========================================================================E
==================================227==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"new ty.SdkInterfaceManager-----------");
this._timers=this._clicks=null;
if(ty.isWindows()){
ty.NotificationCenter.listen(ty.EventType.MSG_LOGIN_SUCCESS,this.onLoginSuccess,this);
ty.NotificationCenter.listen(ty.EventType.MSG_LOGIN_FAILED,this.onLoginFailed,this);
ty.NotificationCenter.listen(ty.EventType.MSG_REGISTER_SUCCESS,this.onRegisterSuccess,this);
ty.NotificationCenter.listen(ty.EventType.MSG_REGISTER_FAILED,this.onRegisterFailed,this);
ty.NotificationCenter.listen(ty.EventType.MSG_SEND_VERIFY_CODE_SUCCESS,this.onSendVerifyCodeSuccess,this);
ty.NotificationCenter.listen(ty.EventType.MSG_SEND_VERIFY_CODE_FAILED,this.onSendVerifyCodeFailed,this);
ty.NotificationCenter.listen(ty.EventType.MSG_SET_PASSWORD_SUCCESS,this.onSetPasswordSuccess,this);
ty.NotificationCenter.listen(ty.EventType.MSG_SET_PASSWORD_FAILED,this.onSetPasswordFailed,this);
}
---------------------------------------
==========================================================================E
==================================228==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
if(ty.isWindows()){
ty.NotificationCenter.ignore(ty.EventType.MSG_LOGIN_SUCCESS,this.onLoginSuccess,this);
ty.NotificationCenter.ignore(ty.EventType.MSG_LOGIN_FAILED,this.onLoginFailed,this);
ty.NotificationCenter.ignore(ty.EventType.MSG_REGISTER_SUCCESS,this.onRegisterSuccess,this);
ty.NotificationCenter.ignore(ty.EventType.MSG_REGISTER_FAILED,this.onRegisterFailed,this);
ty.NotificationCenter.ignore(ty.EventType.MSG_SEND_VERIFY_CODE_SUCCESS,this.onSendVerifyCodeSuccess,this);
ty.NotificationCenter.ignore(ty.EventType.MSG_SEND_VERIFY_CODE_FAILED,this.onSendVerifyCodeFailed,this);
ty.NotificationCenter.ignore(ty.EventType.MSG_SET_PASSWORD_SUCCESS,this.onSetPasswordSuccess,this);
ty.NotificationCenter.ignore(ty.EventType.MSG_SET_PASSWORD_FAILED,this.onSetPasswordFailed,this);
}
---------------------------------------
==========================================================================E
==================================229==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return ty.runjs2nativeobj.nicaiEncode(a);
---------------------------------------
==========================================================================E
==================================230==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
if((typeof a != "undefined")){
a = {cmd:"initSdk"};
a.loginUrl=ty.loginUrl;
a = JSON.stringify(a);
ty.LOG.FILE(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
}
---------------------------------------
==========================================================================E
==================================231==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0={cmd:"login"};
_local0.sdk=a||"tuyoo";
b = "0";
_local0.singleEnable=b||b;
_local0=JSON.stringify(_local0);
ty.LOG.FILE(this._TAG,_local0);
ty.runjs2nativeobj.callrunjs2nativefun(_local0);
!(ty.staticSystemInfo.hasTuyooDB)ty.NotificationCenter.trigger(ty.EventType.MSG_LOGIN_TYPE,{type:"tuyoo",newUser:});
---------------------------------------
==========================================================================E
==================================232==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0={cmd:"openSingleGame"};
_local0.gameName=a;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================233==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0=JSON.stringify({cmd:"loginByVerifyCode",code:a,phoneNum:b});
ty.LOGD(this._TAG,_local0);
ty.runjs2nativeobj.callrunjs2nativefun(_local0);
---------------------------------------
==========================================================================E
==================================234==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
_local0=JSON.stringify({cmd:"loginByGuest"});
ty.LOGD(this._TAG,_local0);
ty.runjs2nativeobj.callrunjs2nativefun(_local0);
---------------------------------------
==========================================================================E
==================================235==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
a = JSON.stringify({cmd:"loginByToken",userToken:a});
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================236==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
_local0={cmd:"loginByAccount"};
_local0.sdk=a||"tuyoo";
_local0.singleEnable="0";
_local0.userAccount=b;
_local0.userPwd=c;
_local0.isCreate=0;
_local0.changePwdCount=0;
a = JSON.stringify(_local0);
ty.LOG.FILE(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
!(ty.staticSystemInfo.hasTuyooDB)ty.NotificationCenter.trigger(ty.EventType.MSG_LOGIN_TYPE,{type:"tuyoo",newUser:});
---------------------------------------
==========================================================================E
==================================237==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
_local0={cmd:"registerAccount"};
_local0.sdk=a||"tuyoo";
_local0.singleEnable="0";
_local0.userAccount=b;
_local0.userPwd=c;
_local0.isCreate=1;
_local0.checkNum=d;
a = JSON.stringify(_local0);
ty.LOG.FILE(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
!(ty.staticSystemInfo.hasTuyooDB)ty.NotificationCenter.trigger(ty.EventType.MSG_LOGIN_TYPE,{type:"tuyoo",newUser:});
---------------------------------------
==========================================================================E
==================================238==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
_local0={cmd:"changePwd"};
_local0.sdk=a||"tuyoo";
_local0.singleEnable="0";
_local0.userAccount=b;
_local0.userPwd=c;
_local0.isCreate=0;
_local0.changePwdCount=1;
_local0.checkNum=d;
a = JSON.stringify(_local0);
ty.LOG.FILE(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
!(ty.staticSystemInfo.hasTuyooDB)ty.NotificationCenter.trigger(ty.EventType.MSG_LOGIN_TYPE,{type:"tuyoo",newUser:});
---------------------------------------
==========================================================================E
==================================239==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
_local0={cmd:"sendVerifyCode"};
_local0.sdk=a||"tuyoo";
_local0.singleEnable="0";
_local0.phoneNum=b;
_local0.strType=c;
_local0.isCreate=0;
a = JSON.stringify(_local0);
ty.LOG.FILE(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
!(ty.staticSystemInfo.hasTuyooDB)ty.NotificationCenter.trigger(ty.EventType.MSG_LOGIN_TYPE,{type:"tuyoo",newUser:});
---------------------------------------
==========================================================================E
==================================240==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0={cmd:"upgradeAccount"};
_local0.sdk=a||"tuyoo";
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================241==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0={cmd:"logoutAccount"};
_local0.sdk=a||"tuyoo";
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================242==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0={cmd:"bindMobile"};
_local0.sdk=a||"tuyoo";
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================243==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0={cmd:"thirdExtend"};
_local0.sdk=b;
_local0.param=a;
_local0=JSON.stringify(_local0);
ty.LOGD(this._TAG,_local0);
ty.runjs2nativeobj.callrunjs2nativefun(_local0);
---------------------------------------
==========================================================================E
==================================244==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
a.cmd="share";
a.sdk=b;
_local0=JSON.stringify(a);
ty.LOGD(this._TAG,("weixinShare cmd = " + _local0));
ty.runjs2nativeobj.callrunjs2nativefun(_local0);
---------------------------------------
==========================================================================E
==================================245==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"SDKExitOrNot...");
_local0={cmd:"ask_sdk_exit_ornot"};
_local0.sdk=a||"";
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================246==================================S
------------------Argv------------------
a,b,c,d,e,f,h,g
---------------------------------------
----------------Content----------------
_local0={cmd:"setUserInfo"};
_local0.name=(a + "");
_local0.address=(b + "");
_local0.phoneNumber=(d + "");
_local0.idCardNo=(e + "");
_local0.sex=(f + "");
_local0.trueName=(c + "");
_local0.sdk=h||"tuyoo";
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================247==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.setUserInfo("","","","","","","weixin");
---------------------------------------
==========================================================================E
==================================248==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0={cmd:"getUserInfo"};
_local0.sdk=a;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================249==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0={cmd:"setPreHeadUrl"};
_local0.url=(a + "");
_local0.sdk=b;
_local0=JSON.stringify(_local0);
ty.LOGD(this._TAG,_local0);
ty.runjs2nativeobj.callrunjs2nativefun(_local0);
---------------------------------------
==========================================================================E
==================================250==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0={cmd:"setUserAvatar"};
_local0.sdk=a;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================251==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0={cmd:"postLifePic"};
_local0.sdk=a;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================252==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.runjs2nativeobj.callrunjs2nativefun("{"cmd":"openFileDlg"}");
---------------------------------------
==========================================================================E
==================================253==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0={cmd:"addFriend"};
_local0.friendId=(a + "");
_local0.sdk=b;
_local0=JSON.stringify(_local0);
ty.LOGD(this._TAG,_local0);
ty.runjs2nativeobj.callrunjs2nativefun(_local0);
---------------------------------------
==========================================================================E
==================================254==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0={cmd:"deleteFriend"};
_local0.sdk=b;
_local0.friendId=(a + "");
_local0=JSON.stringify(_local0);
ty.LOGD(this._TAG,_local0);
ty.runjs2nativeobj.callrunjs2nativefun(_local0);
---------------------------------------
==========================================================================E
==================================255==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
_local0={};
_local0.cmd=(sendFriendReqVerify + "");
_local0.sdk=c;
_local0.friendId=(a + "");
b?_local0.isAgree=1:_local0.isAgree=0;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================256==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0={cmd:"getFriendList"};
_local0.sdk=a;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================257==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0={cmd:"getReqFriendList"};
_local0.sdk=a;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================258==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0={cmd:"getNearbyPlayer"};
_local0.sdk=a;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================259==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0={cmd:"postFriendContact"};
_local0.sdk=a;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================260==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0={cmd:"inviteFriendContact"};
_local0.sdk=a;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================261==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0={cmd:"inviteFriend"};
_local0.sdk=a;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================262==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
_local0={cmd:"getRank"};
_local0.sdk=d;
_local0.type=(a + "");
_local0.rankName=(b + "");
_local0.topCount=(c + "");
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================263==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0={cmd:"inviteFriend"};
_local0.sdk=a;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================264==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0={cmd:"reportLBS"};
_local0.sdk=a;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================265==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0={cmd:"showForum"};
_local0.sdk=a;
_local0.url=b;
_local0=JSON.stringify(_local0);
ty.LOGD(this._TAG,_local0);
ty.runjs2nativeobj.callrunjs2nativefun(_local0);
---------------------------------------
==========================================================================E
==================================266==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0={cmd:"showCustomerService"};
_local0.sdk=a;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================267==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0={cmd:"openFloatWnd"};
_local0.sdk=a;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================268==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0={cmd:"hideFloatWnd"};
_local0.sdk=a;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================269==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0={cmd:"registerHomeKeyReceiver"};
_local0.sdk=a;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================270==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0={cmd:"unregisterHomeKeyReceiver"};
_local0.sdk=a;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================271==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
_local0={cmd:"buy"};
_local0.sdk=d;
_local0.productId=(a + "");
_local0.productName=(b + "");
_local0.orderId=(c + "");
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================272==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0={cmd:"buyComplete"};
_local0.productid=(a + "");
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================273==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
_local0={cmd:"buyDanjiProduct"};
_local0.sdk=d;
_local0.prodId=(a + "");
_local0.prodName=(b + "");
_local0.prodPrice=(c + "");
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================274==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
_local0={cmd:"getProductList"};
_local0.sdk=c;
_local0.pidsList=a;
_local0.appInf=(b + "");
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================275==================================S
------------------Argv------------------
a,b,c,d,e,f,h,g,j
---------------------------------------
----------------Content----------------
_local0={cmd:"payDiamond"};
_local0.sdk=g;
_local0.diamondId=(a + "");
_local0.diamondCount=(b + "");
_local0.diamondName=(c + "");
_local0.diamondPrice=(d + "");
_local0.appInfo=(e + "");
f?_local0.isShowSuccess=(1 + ""):_local0.isShowSuccess=(0 + "");
_local0.typeExt=h;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================276==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.Util.openShopOutOfGame();
---------------------------------------
==========================================================================E
==================================277==================================S
------------------Argv------------------
a,b,c,d,e,f,h,g
---------------------------------------
----------------Content----------------
_local0={cmd:"consumeDiamond"};
_local0.sdk=h;
_local0.prodId=(a + "");
_local0.prodName=(b + "");
_local0.prodCount=(c + "");
_local0.prodPrice=(d + "");
_local0.appInfo=(e + "");
_local0.typeExt=f;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================278==================================S
------------------Argv------------------
a,b,c,d,e,f,h,g
---------------------------------------
----------------Content----------------
_local0={cmd:"buyCoinDirect"};
_local0.sdk=h;
_local0.prodId=(a + "");
_local0.prodName=(b + "");
_local0.prodCount=(c + "");
_local0.prodPrice=(d + "");
_local0.appInfo=(e + "");
_local0.typeExt=f;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================279==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0={cmd:"complain_the_other_user"};
_local0.userId=a;
_local0.type=b;
_local0=JSON.stringify(_local0);
ty.LOGD(this._TAG,_local0);
ty.runjs2nativeobj.callrunjs2nativefun(_local0);
---------------------------------------
==========================================================================E
==================================280==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.runjs2nativeobj.callrunjs2nativefun((("{"cmd":"openUrl","url":"" + a) + ""}"));
---------------------------------------
==========================================================================E
==================================281==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
ty.runjs2nativeobj.callrunjs2nativefun((((((("{"cmd":"addAccount","userId":"" + a) + "","password":"") + b) + "","authorCode":"") + c) + ""}"));
---------------------------------------
==========================================================================E
==================================282==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
hall.GlobalFuncs.httpRequest((ty.loginUrl + "open/v4/user/loginByToken?"),{token:a},function () { __FUNC_283__ });
---------------------------------------
==========================================================================E
==================================283==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
if((a.code > 0)){
hall.LOGD(this._TAG,("error on onPhoneLogin , error:" + a.info));
ty.NotificationCenter.trigger(hall.EventType.POP_WINDOW,hall.MsgBoxSmall,{text:"登录失败"});
} else {
}
a.server=a.tcpsrv.ip;
a.port=a.tcpsrv.port;
ty.NotificationCenter.trigger(ty.EventType.MSG_LOGIN_SUCCESS,a);
_aliased9527&&_aliased9527.call(_aliased8892,a);
---------------------------------------
==========================================================================E
==================================284==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
b = {};
b.cmd=b||"report_client_instant_log";
b.url=a;
b.uuid=(typeof b.uuid == "undefined")&&" ";
b.time=(typeof b.time == "undefined")&&(new Date().valueOf() + "");
_local0=JSON.stringify(b);
ty.LOGD(this._TAG,_local0);
---------------------------------------
==========================================================================E
==================================285==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
_local0=JSON.stringify({cmd:"showBanner"});
ty.LOGD(this._TAG,_local0);
ty.runjs2nativeobj.callrunjs2nativefun(_local0);
---------------------------------------
==========================================================================E
==================================286==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
if((null == this._clicks)){
this._clicks={};
this._clicks.cmd="clickStat";
this._clicks.event=[];
}
_local0=this._clicks.event.length;
ty.LOGD(this._TAG,("Add clickStat event " + a));
this._clicks.event[_local0]=a;
---------------------------------------
==========================================================================E
==================================287==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
if((0 > b)||(b > 2147483647)){
ty.LOGD(this._TAG,"无效时长统计");
} else if((null == this._timers)){
this._timers={};
this._timers.cmd="timerStat";
this._timers.timers=[];
}
ty.LOGD(this._TAG,((("timerStat:" + a) + " and Duration:") + b));
_local0=this._timers.timers.length;
_local1={};
_local1.event=a;
_local1.duration=b;
this._timers.timers[_local0]=_local1;
---------------------------------------
==========================================================================E
==================================288==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0={cmd:"report_user_aciton"};
_local0.gameId=(a + "");
_local0.sceneID=b;
_local0=JSON.stringify(_local0);
ty.LOGD(this._TAG,_local0);
ty.runjs2nativeobj.callrunjs2nativefun(_local0);
---------------------------------------
==========================================================================E
==================================289==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0={cmd:"submitPushToken"};
_local0.token=a;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================290==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
_local0={};
_local0.cmd=ty.EventType.THIRD_APP_INSTALL_OR_NOT;
_local0.packageName=a;
_local0.scheme=b;
_local0.appCode=c;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================291==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
_local0={cmd:"open_third_app"};
_local0.packageName=a;
_local0.scheme=b;
_local0.appCode=c;
a = JSON.stringify(_local0);
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================292==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
_local0=JSON.stringify({cmd:"hideSplashView"});
ty.LOGD(this._TAG,_local0);
ty.runjs2nativeobj.callrunjs2nativefun(_local0);
---------------------------------------
==========================================================================E
==================================293==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0={cmd:"getWaterUDID"};
_local0.userId=a||"";
_local0.clientId=b||"";
_local0=JSON.stringify(_local0);
ty.LOGD(this._TAG,_local0);
ty.runjs2nativeobj.callrunjs2nativefun(_local0);
---------------------------------------
==========================================================================E
==================================294==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
a = a||JSON.stringify({cmd:"getVerifyCode",mobile:""});
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================295==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
a = a||JSON.stringify({cmd:"bindTyid",mobile:"",tyid:b,pwd:c});
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================296==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
if(a){
a = JSON.stringify({cmd:"updateServerUrl",url:a});
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
} else {
}
ty.LOGE(this._TAG,"udpateServerUrl need url");
---------------------------------------
==========================================================================E
==================================297==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
this.saveUserData(JSON.stringify({platformid:a,channelid:b}));
---------------------------------------
==========================================================================E
==================================298==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
a = JSON.stringify({cmd:"userData",type:"save",data:a});
ty.LOGD(this._TAG,a);
ty.runjs2nativeobj.callrunjs2nativefun(a);
---------------------------------------
==========================================================================E
==================================299==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
_local0=JSON.stringify({cmd:"userData",type:"read"});
ty.LOGD(this._TAG,_local0);
ty.runjs2nativeobj.callrunjs2nativefun(_local0);
---------------------------------------
==========================================================================E
==================================300==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
if((null != this._clicks)){
_local0=JSON.stringify(this._clicks);
ty.LOGD(this._TAG,("clickStat = " + _local0));
ty.runjs2nativeobj.callrunjs2nativefun(_local0);
this._clicks=null;
}
---------------------------------------
==========================================================================E
==================================301==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
hall.LOGD(this._TAG,"onLoginSuccess");
(a && a.info)||ty.NotificationCenter.trigger(hall.EventType.HALL_POP_COMMON_MSG_BOX_SMALL,{text:"",duration:1});
---------------------------------------
==========================================================================E
==================================302==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
hall.LOGD(this._TAG,"onLoginFailed");
(a && a.info)||ty.NotificationCenter.trigger(hall.EventType.HALL_POP_COMMON_MSG_BOX_SMALL,{text:"",duration:1});
---------------------------------------
==========================================================================E
==================================303==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
hall.LOGD(this._TAG,"onRegisterSuccess");
(a && a.info)||ty.NotificationCenter.trigger(hall.EventType.HALL_POP_COMMON_MSG_BOX_SMALL,{text:"",duration:1});
---------------------------------------
==========================================================================E
==================================304==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
hall.LOGD(this._TAG,"onRegisterFailed");
(a && a.info)||ty.NotificationCenter.trigger(hall.EventType.HALL_POP_COMMON_MSG_BOX_SMALL,{text:"",duration:1});
---------------------------------------
==========================================================================E
==================================305==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
hall.LOGD(this._TAG,"onSendVerifyCodeSuccess");
(a && a.info)||ty.NotificationCenter.trigger(hall.EventType.HALL_POP_COMMON_MSG_BOX_SMALL,{text:"",duration:1.5});
---------------------------------------
==========================================================================E
==================================306==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
hall.LOGD(this._TAG,"onSendVerifyCodeFailed");
(a && a.info)||ty.NotificationCenter.trigger(hall.EventType.HALL_POP_COMMON_MSG_BOX_SMALL,{text:"",duration:1.5});
---------------------------------------
==========================================================================E
==================================307==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
hall.LOGD(this._TAG,"onSetPasswordSuccess");
(a && a.info)||ty.NotificationCenter.trigger(hall.EventType.HALL_POP_COMMON_MSG_BOX_SMALL,{text:"",duration:1});
---------------------------------------
==========================================================================E
==================================308==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
hall.LOGD(this._TAG,"onSetPasswordFailed");
(a && a.info)||ty.NotificationCenter.trigger(hall.EventType.HALL_POP_COMMON_MSG_BOX_SMALL,{text:"",duration:1.5});
---------------------------------------
==========================================================================E
==================================309==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.initJs2native();
new ty.SdkInterfaceManager().login();
---------------------------------------
==========================================================================E
==================================310==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
a._TAG?a && a._TAG && ty.LOGD("ty.Timer",("----------in setTimer----------" + a._TAG)):ty.LOGD("ty.Timer",("----------in setTimer----------" + ""));
cc.Director.getInstance().getScheduler().scheduleCallbackForTarget(a,b,c,d,e,false);
---------------------------------------
==========================================================================E
==================================311==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
a._TAG?a && a._TAG && ty.LOGD("ty.Timer",("----------in cancelTimer ---------" + a._TAG)):ty.LOGD("ty.Timer",("----------in cancelTimer ---------" + ""));
cc.Director.getInstance().getScheduler().unscheduleCallbackForTarget(a,b);
---------------------------------------
==========================================================================E
==================================312==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"ctor in ty.Timer");
---------------------------------------
==========================================================================E
==================================313==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"onDestroy in ty.Timer");
while(this.timers has _iternext){
_local0=_iternext;
_local1=this.timers[_local0];
(null != _local1)&&_local1.unSchedule();
}
---------------------------------------
==========================================================================E
==================================314==================================S
------------------Argv------------------
a,b,c,d,e,f
---------------------------------------
----------------Content----------------
_local0=this.timers[a];
if((null == _local0)||(typeof _local0 == "undefined")){
_local0=new ty.TYScheduler(a,b,c,d,e);
this.timers[a]=_local0;
}
---------------------------------------
==========================================================================E
==================================315==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0=this.timers[a];
if((null != _local0)){
_local0.unSchedule();
this.timers[a]=null;
}
---------------------------------------
==========================================================================E
==================================316==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"ctor in ty.TYScheduler");
this.eventName=a;
this.eventInterval=b;
this.eventRepeatNum=c;
this.eventDelay=d;
this.eventParams=e;
if((c == cc.REPEAT_FOREVER)){
this.isLog=false;
}
ty.Timer.setTimer(this,this._onTimer,this.eventInterval,this.eventRepeatNum,this.eventDelay,false);
---------------------------------------
==========================================================================E
==================================317==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,("killTimer-" + this.eventName));
ty.Timer.cancelTimer(this,this._onTimer);
---------------------------------------
==========================================================================E
==================================318==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,("onDestroy and killTimer" + this.eventName));
this.unSchedule();
---------------------------------------
==========================================================================E
==================================319==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
(this.eventParams != null)?ty.NotificationCenter.trigger(this.eventName,this.eventParams,this.isLog):ty.NotificationCenter.trigger(this.eventName,undefined,this.isLog);
this.eventCount=(this.eventCount + 1);
(this.eventCount == this.eventRepeatNum)?ty.NewTimer.cancelTimer(this.eventName):(0 == ty.NotificationCenter.count(this.eventName))&&ty.NewTimer.cancelTimer(this.eventName);
---------------------------------------
==========================================================================E
==================================320==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.__downloadObj=jsb.TYAsyncImgDownload.create();
this.__downloadObj.retain();
_aliased2579=this;
this.__downloadObj.setOnCallback(function () { __FUNC_321__ });
---------------------------------------
==========================================================================E
==================================321==================================S
------------------Argv------------------
b,c,d,e,f
---------------------------------------
----------------Content----------------
_local0={};
_local0.path=b;
_local0.statusCode=c;
_local0.openErr=d;
_local0.writeErr=e;
_aliased2579.onHttpRequestCompleted(_local0);
---------------------------------------
==========================================================================E
==================================322==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.__downloadObj.release();
this.__downloadObj=null;
---------------------------------------
==========================================================================E
==================================323==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,("addAsyncImgDownloadObserver...KEY-" + a));
this._observers[a]=this._observers[a]||[];
d||this._observers[a].push({obj:b,callback:c,defaultCallback:{}});
---------------------------------------
==========================================================================E
==================================324==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,("removeAsyncImgDownloadObserver...KEY-" + a));
this._observers[a]=this._observers[a]||[].filter(function () { __FUNC_325__ });
---------------------------------------
==========================================================================E
==================================325==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return (a.obj != _aliased2579)||(a.callback != _aliased8892);
---------------------------------------
==========================================================================E
==================================326==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0=a.indexOf("://");
a = a.slice((_local0 + 3));
return (_local0 >= 0)&&a.split("/")[0];
---------------------------------------
==========================================================================E
==================================327==================================S
------------------Argv------------------
a,b,c,d,e,f
---------------------------------------
----------------Content----------------
if((typeof b == "undefined")||(b.indexOf("http") < 0)){
ty.LOGE(this._TAG,"Invalid url to download, return!!!!!!");
} else if((b.indexOf("/avatar/") > 0) && (this._imgDownloadDomain != null) && (this._imgDownloadDomain != "")){
_local0=this.getDomainName(b);
if(_local0){
b = b.replace(_local0,this._imgDownloadDomain);
hall.LOGD(this._TAG,("after downloadImgAsync download url:" + b));
}}
_local0="games/hall/img/nopack/headpic";
_local1=b.lastIndexOf("/");
_local1=b.substr(_local1,(b.length - _local1));
_local0=(_local0 + _local1);
if(ty.FileManager.checkFileExist(_local0)){
ty.LOGD(this._TAG,"local img file exists, call back");
this.updateByKey(a,{statusCode:200,path:_local0,openErr:0,writeErr:0},d);
c = ((ty.FileManager.getWritableRootPath(true) + "/") + c);
c = (c + "/.nomedia/");
ty.isAndroid()&&ty.FileManager.checkFileExist(c)||ty.FileManager.createDir(c);
_local0=ty.Util.md5HashPicUrl(b);
c = (c + _local0);
ty.LOGD(this._TAG,((("url-" + b) + " path-") + c));
} else if(ty.FileManager.checkFileExist(c)){
ty.LOGD(this._TAG,"file exists, call back");
this.updateByKey(a,{statusCode:200,path:c,openErr:0,writeErr:0},d);
this.useDefaultCallback(a,d);
this._imgs[c]=this._imgs[c]||[];
this._imgs[c].push({key:a,params:d});
} else if((this._imgs[c].length > 1)){
ty.LOGD(this._TAG,"Already downloading, just wait...");
} else if(this._isDownloading){
this._downList.push({u:b,p:c});
} else {
}
this._isDownloading=true;
this.__downloadObj.download(b,c);
---------------------------------------
==========================================================================E
==================================328==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
a = this._observers[a];
_local0=ty.Util.md5HashPicUrl(b);
_local1=b.substr(_local1,(b.length - _local1));
if(a){
_local0=0;
while(_local1){
_local1.callback.call(_local1.obj,b,c);
_local0=(_local0 + 1);
_local0=0;
}
} else {
}
ty.LOGE(this._TAG,"No observers, need return...");
---------------------------------------
==========================================================================E
==================================329==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
_local0=this._observers[a];
_local1=a[_local0];
_local2=(_local2 + 1);
if(_local0){
_local1=0;
while(_local2){
_local2.defaultCallback && _local2.defaultCallback.call && _local2.defaultCallback.call(_local2.obj,b);
_local1=(_local1 + 1);
_local1=0;
}
} else {
}
ty.LOGE(this._TAG,"No observers, need return...");
---------------------------------------
==========================================================================E
==================================330==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"onHttpRequestCompleted...");
cc.dump(a);
_local0=a.path;
ty.LOGD(this._TAG,("onHttpRequestCompleted path == " + _local0));
if(this._isDownloading){
if((this._downList.length == 0)){
this._isDownloading=false;
} else {
}
_local1=this._downList.pop();
this.__downloadObj.download(_local1.u,_local1.p);
}
_local0=this._imgs[_local0];
_local2=_local0[_local1];
if(_local0){
_local1=0;
while(_local2){
this.updateByKey(_local2.key,a,_local2.params);
_local1=(_local1 + 1);
_local1=0;
}
}
---------------------------------------
==========================================================================E
==================================331==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," in ctor new _HeartBeat");
this._interval=0;
ty.NotificationCenter.listen(ty.EventType.MSG_HEART_BEAT,this.onHeartbeatBack,this);
this._timeoutNum=0;
this.num=3;
---------------------------------------
==========================================================================E
==================================332==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
this._interval=a||this._interval;
this.num=b||this.num;
this._timeoutNum=0;
this._startTick();
ty.LOGD(this._TAG,((("LongNet interval-" + this._interval) + " and timeout Num-") + this.num));
---------------------------------------
==========================================================================E
==================================333==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.Timer.cancelTimer(this,this._sendMsg);
ty.Timer.setTimer(this,this._sendMsg,this._interval,cc.REPEAT_FOREVER,0);
---------------------------------------
==========================================================================E
==================================334==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
if((this._timeoutNum=(this._timeoutNum + 1) > this.num)){
ty.LOGD(this._TAG,"Heart beat time out.");
ty.NotificationCenter.trigger(ty.EventType.HEART_BEAT_RECEIVE_ERROR);
}
ty.NotificationCenter.trigger(ty.EventType.HEART_BEAT_LOGIC);
this._beat_time=Date.now();
---------------------------------------
==========================================================================E
==================================335==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.Timer.cancelTimer(this,this._sendMsg);
---------------------------------------
==========================================================================E
==================================336==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"onHeartbeatBack...");
this._timeoutNum=0;
if(this._beat_time){
this.beat_time=(Date.now() - this._beat_time);
this._beat_time=0;
}
---------------------------------------
==========================================================================E
==================================337==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return this.beat_time||0;
---------------------------------------
==========================================================================E
==================================338==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," in ctor new _MsgSimulater");
---------------------------------------
==========================================================================E
==================================339==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================340==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.netMsgDispatcher.processMsg(a.cmd,[a]);
---------------------------------------
==========================================================================E
==================================341==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
this.model={index:0,arr:a};
ty.Timer.setTimer(this,this.tickDispatch,b,(a.length - 1),0);
---------------------------------------
==========================================================================E
==================================342==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0=this.model.index;
ty.LOGD(this._TAG,("index == " + _local0));
_local1=this.model.arr[_local0];
ty.LOGD(this._TAG,("json is " + JSON.stringify(_local1)));
this.dispatchMsg(_local1);
if((_local0 == (this.model.arr.length - 1))){
ty.Timer.cancelTimer(this,this.tickDispatch);
ty.LOGD(this._TAG,"has cannceled!");
}
this.model.index=(this.model.index + 1);
---------------------------------------
==========================================================================E
==================================343==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
_local0={onJson:function () { __FUNC_344__ }};
ty.MsgSimulater=new ty._MsgSimulater();
_local1={cmd:"led1",result:[]};
_local2={cmd:"m_signs1",result:{gameId:6,userId:10024,signs:{}}};
_local3={cmd:"room_online_info1",params:{match_count:0,high_count:0,gameId:6,free_count:0,rooms:[]}};
ty.netMsgDispatcher.registerMsg("led1",_local0.onJson,_local0);
ty.netMsgDispatcher.registerMsg("m_signs1",_local0.onJson,_local0);
ty.netMsgDispatcher.registerMsg("room_online_info1",_local0.onJson,_local0);
ty.MsgSimulater.dispatchMsg(_local1);
ty.MsgSimulater.dispatchMsg(_local2);
ty.MsgSimulater.dispatchMsg(_local3);
ty.MsgSimulater.dispatchInOrder([_local1,_local2,_local3],3);
---------------------------------------
==========================================================================E
==================================344==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
a = a[0];
ty.LOGD("ty.MsgSimulater.test","!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!get obj 
");
cc.dump(a);
---------------------------------------
==========================================================================E
==================================345==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD("ty.UpdateRes.test"," in ctor new UserInfo");
this.model={loginRewardInfo:[[],[],[],[]],isNewUser:false,type:"",snsToken:"",snsExpires:111,snsTradeNo:"",snsId:"",sex:1,purl:"",name:"",address:"",email:"",dayang:"",truename:"",idcardno:"",phonenumber:"",vip:0,snsinfo:"",mdevid:"2c0d263ac6737d96bf23dcb64efdb2c9",payCount:0,isbind:0,msgpaylimit:0,source:"",state:0,title:"",nextExp:111,winMaxCoins:1111,nlogin:0,coin:0,experience:[],level:0,gameTimes:0,winTimes:0,upurl:"",changelog:"",continuousLoginRewordCoin:[0,0,0,0,0],continuousLoginRewordGold:[0,0,0,0,0],loginWhichDay:0,hasGetLoginReward:false,connectTimeOut:35,heartBeat:0,ip:"",port:9005,userId:16601506,gameId:6};
---------------------------------------
==========================================================================E
==================================346==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================347==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.registerMsgCallback();
---------------------------------------
==========================================================================E
==================================348==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.netMsgDispatcher.registerMsg(ty.EventType.CMD_USER_INFO,this.onUSER_INFO,this);
---------------------------------------
==========================================================================E
==================================349==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
a = a[0].result;
_local0=["userId","gameId","connectTimeOut","heartBeat"];
_local1=this.model;
_local2={cmd:"m_signs1",result:{gameId:6,userId:10024,signs:{}}};
while(_local0 has _iternext){
_local2=_iternext;
_local3=_local0[_local2];
_local1[_local3]=a[_local3];
}
ty.LOGD("ty.UpdateRes.test","dump the json
");
cc.dump(a);
this.parseUserInfo(a.udata);
this.parseGameData(a.gdata);
this.postNotification();
---------------------------------------
==========================================================================E
==================================350==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
ty.LOGD("ty.UpdateRes.test","user info ----------------------");
cc.dump(a);
_local0=["snsId","sex","purl","name","address","msgpaylimit","idcardno","truename","payCount","vip","coin","phonenumber","email","dayang","mdevid","state","source","isbind"];
_local1=this.model;
_local2=_iternext;
while(_local0 has _iternext){
_local2=_iternext;
_local3=_local0[_local2];
_local1[_local3]=a[_local3];
}
---------------------------------------
==========================================================================E
==================================351==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD("ty.UpdateRes.test","game data ----------------------");
---------------------------------------
==========================================================================E
==================================352==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.NotificationCenter.trigger(ty.EventType.UPDATE_UER_INFO,this.model);
---------------------------------------
==========================================================================E
==================================353==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," in ctor new ty._GameWorld");
---------------------------------------
==========================================================================E
==================================354==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================355==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================356==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================357==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================358==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," in ctor new HallList");
this.halls=[];
---------------------------------------
==========================================================================E
==================================359==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.halls=null;
---------------------------------------
==========================================================================E
==================================360==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"getHall");
return this.halls[a];
---------------------------------------
==========================================================================E
==================================361==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"addHall");
this.halls.push(a);
---------------------------------------
==========================================================================E
==================================362==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"parseRoomList");
---------------------------------------
==========================================================================E
==================================363==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," in ctor new Hall");
this.rooms=[];
---------------------------------------
==========================================================================E
==================================364==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.rooms=null;
---------------------------------------
==========================================================================E
==================================365==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"getRoom");
return this.rooms[a];
---------------------------------------
==========================================================================E
==================================366==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"addRoom");
this.rooms.push(a);
---------------------------------------
==========================================================================E
==================================367==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"parseRoomList");
---------------------------------------
==========================================================================E
==================================368==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," in ctor new RoomInfo");
this.tables=new ty.TableList();
---------------------------------------
==========================================================================E
==================================369==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.tables=null;
---------------------------------------
==========================================================================E
==================================370==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"getRoom");
return this.tables.getTable(a);
---------------------------------------
==========================================================================E
==================================371==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"addRoom");
this.tables.addTable(a);
---------------------------------------
==========================================================================E
==================================372==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.tables.parseTableList();
---------------------------------------
==========================================================================E
==================================373==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," in ctor new TableList");
this.tables=[];
---------------------------------------
==========================================================================E
==================================374==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.tables=null;
---------------------------------------
==========================================================================E
==================================375==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"getTable ");
return this.tables[a];
---------------------------------------
==========================================================================E
==================================376==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"addTable");
this.tables.push(a);
---------------------------------------
==========================================================================E
==================================377==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"parseTableList");
---------------------------------------
==========================================================================E
==================================378==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," in ctor new TableInfo");
this.model={tableId:0,roomId:0,name:"",pwd:"",mincoin:0,maxcoin:0,maxseat:0,sfee:0,base:0,coin2chip:0,optime:0,grab:0,basemulti:0,roommulti:0,passtime:0,autoChange:0,untiCheat:0,tbbox:0,couponrule:"",matchInfo:""};
this.seats=new ty.SeatList();
---------------------------------------
==========================================================================E
==================================379==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.model=null;
---------------------------------------
==========================================================================E
==================================380==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================381==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return this.seats.getSeat(a);
---------------------------------------
==========================================================================E
==================================382==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.seats.addSeat(a);
---------------------------------------
==========================================================================E
==================================383==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.seats.parseSeatList(a);
---------------------------------------
==========================================================================E
==================================384==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," in ctor new SeatList");
this.seats=[];
---------------------------------------
==========================================================================E
==================================385==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.seats=null;
---------------------------------------
==========================================================================E
==================================386==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"getSeat");
return this.seats[a];
---------------------------------------
==========================================================================E
==================================387==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"addSeat");
this.seats.push(a);
---------------------------------------
==========================================================================E
==================================388==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"parseSeatList");
---------------------------------------
==========================================================================E
==================================389==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," in ctor new TableState");
this.model={m_state:0,m_matchpcnt:0,m_nowOp:0,m_banker:0,m_ccrc:0};
---------------------------------------
==========================================================================E
==================================390==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.model=null;
---------------------------------------
==========================================================================E
==================================391==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"");
---------------------------------------
==========================================================================E
==================================392==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," in ctor new SeatInfo");
this.model={userId:0,seatState:0,robot:0,mscore:0,mrank:0,show:0,call:-1,tbc:0,tbt:0};
---------------------------------------
==========================================================================E
==================================393==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.model=null;
---------------------------------------
==========================================================================E
==================================394==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"");
---------------------------------------
==========================================================================E
==================================395==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," in ctor new _util");
this.__util=TY_UTIL.create();
this.__util.onLoaded=this.onLoaded;
this.__util.onFinishOpenCamera=this.onFinishOpenCamera;
this.__util.onFinishPickResave=this.onFinishPickResave;
this.__util.onHasEnterForeground=this.onHasEnterForeground;
this.__util.onWillEnterBackground=this.onWillEnterBackground;
this.__util.onReceiveMemoryWarning=this.onReceiveMemoryWarning;
this.__util.onChangeViewMode=this.onChangeViewMode;
this.__util.refreshUserInfo=this.refreshUserInfo;
this.__util.switchAccountOutGame=this.switchAccountOutGame;
this.__util.guestLogin=this.guestLogin;
this.__util.showCloseDlg=this.showCloseDlg;
this.__util.showCommonDlg=this.showCommonDlg;
this.__util.setMute=this.setMute;
this.picIndex=0;
---------------------------------------
==========================================================================E
==================================396==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"onWillEnterBackground...");
this.enterBackTime=new Date().valueOf();
ty.NotificationCenter.trigger(ty.EventType.WILL_ENTER_BACKGROUND);
---------------------------------------
==========================================================================E
==================================397==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"onHasEnterForeground...");
this.enterForeTime=new Date().valueOf();
ty.NotificationCenter.trigger(ty.EventType.HAS_ENTER_FOREGROUND);
if((0 != this.enterBackTime) && (0 != this.enterForeTime) && (this.enterForeTime > this.enterBackTime)){
_local0=((this.enterForeTime - this.enterBackTime) / 1000);
ty.LOGD(this._TAG,("backGround to foreGround time is " + _local0));
ty.NotificationCenter.trigger(ty.EventType.MSG_BACK_FORE_DURATION,{duration:_local0});
}
---------------------------------------
==========================================================================E
==================================398==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"switchAccountOutGame...");
ty.NotificationCenter.trigger(ty.EventType.MSG_SWITCH_ACCOUNT_OUT_GAME);
---------------------------------------
==========================================================================E
==================================399==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.NotificationCenter.trigger(ty.EventType.MSG_THIRD_REFRESH_USERINFO);
---------------------------------------
==========================================================================E
==================================400==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,("guestLogin type:" + a));
(a == 0)?ty.NotificationCenter.trigger(hall.EventType.HALL_POP_COMMON_MSG_BOX,{title:hall.COMMON_TEXT_TITLE.ALERT,context:hall.STRING.HALL_HALL_GUEST_LOGIN_STRING_1000,allowClose:true,buttons:[{text:hall.COMMON_TEXT_BUTTON.NO_360ACCOUNT,callback:function () { __FUNC_401__ }},{text:hall.COMMON_TEXT_BUTTON.HAVE_360ACCOUNT,callback:function () { __FUNC_402__ }}]}):(a == 1)&&ty.NotificationCenter.trigger(hall.EventType.HALL_POP_COMMON_MSG_BOX,{title:hall.COMMON_TEXT_TITLE.ALERT,context:hall.STRING.HALL_HALL_GUEST_LOGIN_STRING_1001,allowClose:true,buttons:[{text:hall.COMMON_TEXT_BUTTON.NO_360ACCOUNT,callback:function () { __FUNC_403__ }},{text:hall.COMMON_TEXT_BUTTON.HAVE_360ACCOUNT,callback:function () { __FUNC_404__ }}]});
---------------------------------------
==========================================================================E
==================================401==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.Util.enrol360Account();
return true;
---------------------------------------
==========================================================================E
==================================402==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.Util.login360Account();
return true;
---------------------------------------
==========================================================================E
==================================403==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.Util.enrol360Account();
return true;
---------------------------------------
==========================================================================E
==================================404==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.Util.login360Account();
return true;
---------------------------------------
==========================================================================E
==================================405==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"showCloseDlg...");
ty.NotificationCenter.trigger(hall.EventType.HALL_POP_COMMON_MSG_BOX,{title:hall.COMMON_TEXT_TITLE.EXIT,context:hall.STRING.HALL_HALL_EXIT_DEFAULT_TIPS,allowClose:true,buttons:[{text:hall.COMMON_TEXT_BUTTON.CANCEL,callback:function () { __FUNC_406__ }},{text:hall.COMMON_TEXT_BUTTON.EXIT,callback:function () { __FUNC_407__ }}]});
---------------------------------------
==========================================================================E
==================================406==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return true;
---------------------------------------
==========================================================================E
==================================407==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.Util.closeLobby();
return true;
---------------------------------------
==========================================================================E
==================================408==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,("showCommonDlg type:" + a));
(a == 1)&&ty.NotificationCenter.trigger(hall.EventType.HALL_POP_COMMON_MSG_BOX,{title:hall.COMMON_TEXT_TITLE.ALERT,context:hall.STRING.HALL_HALL_UPGRADE_360GAME,buttons:[{text:hall.COMMON_TEXT_BUTTON.CONFIRM,callback:function () { __FUNC_409__ }}]});
---------------------------------------
==========================================================================E
==================================409==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.Util.openUrlByBrowser("http://360game.360.cn/");
ty.Util.closeLobby();
return true;
---------------------------------------
==========================================================================E
==================================410==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.__util.setUserInfo(a);
---------------------------------------
==========================================================================E
==================================411==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
if(ty.isMAC()||(ty.SystemInfo._config.paychannel_default == "tuyoo")){
ty.NotificationCenter.trigger(hall.EventType.POP_WINDOW,hall.HallShopWindow,{subStore:"diamond"});
} else if(!(a)||(typeof a == "undefined")){
a = JSON.stringify({cmd:"openShopOutOfGame"});
}
this.__util.openShopOutOfGame(a);
---------------------------------------
==========================================================================E
==================================412==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.__util.setCursor(a);
---------------------------------------
==========================================================================E
==================================413==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return this.__util.isGuest();
---------------------------------------
==========================================================================E
==================================414==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return this.__util.setLoginExe(a);
---------------------------------------
==========================================================================E
==================================415==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return this.__util.createGameShortcut();
---------------------------------------
==========================================================================E
==================================416==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.__util.login360Account();
---------------------------------------
==========================================================================E
==================================417==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.__util.enrol360Account();
---------------------------------------
==========================================================================E
==================================418==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.__util.closeLobby();
---------------------------------------
==========================================================================E
==================================419==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.__util.setSoundBtn(a);
---------------------------------------
==========================================================================E
==================================420==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.__util.installOtherGame(a);
---------------------------------------
==========================================================================E
==================================421==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
a = ty.Orientation.SWITCH;
a||this.__util.changeViewMode(a);
---------------------------------------
==========================================================================E
==================================422==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.NotificationCenter.trigger(ty.EventType.RECEIVE_MEMORY_WARNING);
---------------------------------------
==========================================================================E
==================================423==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
ty.LOGD("ty.Util",("onChangeViewMode isLand=" + a));
_local0=cc.view.getFrameSize();
ty.LOGD("ty.Util",((("frameSize.width=" + _local0.width) + "frameSize.height=") + _local0.height));
cc.view.setFrameSize(_local0.height,_local0.width);
ty.NotificationCenter.trigger(ty.EventType.VIEW_MODE_CHANGED,a);
---------------------------------------
==========================================================================E
==================================424==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return cc.view.getFrameSize();
---------------------------------------
==========================================================================E
==================================425==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return cc.view.getDesignResolutionSize();
---------------------------------------
==========================================================================E
==================================426==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
_local0=cc.ResolutionPolicy.EXACT_FIT;
if((_local0 == "kResolutionNoBorder")){
_local0=cc.ResolutionPolicy.NO_BORDER;
} else if((_local0 == "kResolutionShowAll")){
_local0=cc.ResolutionPolicy.SHOW_ALL;
} else if((c == "kResolutionFixedHeight")){
_local0=cc.ResolutionPolicy.FIXED_HEIGHT;
} else if((c == "kResolutionFixedWidth")){
_local0=cc.ResolutionPolicy.FIXED_WIDTH;
}
cc.view.setDesignResolutionSize(a,b,_local0);
---------------------------------------
==========================================================================E
==================================427==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
_aliased2403=a[_aliased2579];
a[_aliased2579]=function () { __FUNC_428__ };
---------------------------------------
==========================================================================E
==================================428==================================S
------------------Argv------------------
a,arguments
---------------------------------------
----------------Content----------------
_local1=arguments;
_aliased8892();
ty.LOGD(this._TAG,((new Date() + "Entering:") + _aliased2579));
_local0=_aliased2403.apply(this,_local1);
ty.LOGD(this._TAG,((new Date() + "leaving:") + _aliased2579));
_aliased4938();
return _local0;
---------------------------------------
==========================================================================E
==================================429==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"@@@@@@@@@@@@@@@@@@@@@ script info as follows:");
_local0=0;
while((_local0 < dbg.scripts.length)){
ty.LOGD(this._TAG,dbg.scripts[_local0].url);
_local0=(_local0 + 1);
_local0=0;
}
---------------------------------------
==========================================================================E
==================================430==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"in util open camera");
if(!(a)){
this.onFinishOpenCamera({success:false});
}
this.__util.openCamera(a);
---------------------------------------
==========================================================================E
==================================431==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"in onFinishOpenCamera in js util");
a = JSON.parse(a);
ty.NotificationCenter.trigger(ty.EventType.FINISH_OPEN_CAMERA,a);
---------------------------------------
==========================================================================E
==================================432==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"in util vibrate");
_local0="";
_local1=a.length;
_local2=0;
while((_local2 < _local1)){
_local0=(_local0 + a[_local2]);
_local0=(_local2 != (_local1 - 1))&&(_local0 + " ");
_local2=(_local2 + 1);
_local2=0;
}
ty.LOGD(this._TAG,("pattern is " + _local0));
this.__util.vibrate(_local0,b);
---------------------------------------
==========================================================================E
==================================433==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"in util cancel vibrate");
this.__util.cancelVibrate();
---------------------------------------
==========================================================================E
==================================434==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"in util clipPasteboard");
this.__util.clipPasteboard(a);
---------------------------------------
==========================================================================E
==================================435==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"in util pickAndResavePhoto");
if(a){
this.__util.pickAndResavePhoto(a);
} else {
}
this.onFinishPickResave({success:false});
---------------------------------------
==========================================================================E
==================================436==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"in onFinishPickResave in js util");
a = JSON.parse(a);
ty.NotificationCenter.trigger(ty.EventType.FINISH_PICKSAVE,a);
---------------------------------------
==========================================================================E
==================================437==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"in util screen shot");
return this.__util.screenShot();
---------------------------------------
==========================================================================E
==================================438==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
_local0=jsb.fileUtils.fullPathForFilename(a);
ty.LOGD(this._TAG,("addImageAsync, fullFileName=" + _local0));
if((_local0 == "")){
ty.LOGE(this._TAG,(("addImageAsync err image file " + a) + " not exist, please check!!"));
d.call(b,a);
} else {
}
this.__util.imageAsyncCallbackObj=this.__util.imageAsyncCallbackObj||{};
this.__util.imageAsyncCallbackObj[_local0]={obj:b,callback:c,errCallback:d};
this.__util.addImageAsync(a);
---------------------------------------
==========================================================================E
==================================439==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
a = JSON.parse(a).fileName;
ty.LOGD("ty.Util",("onLoaded fileName: " + a));
_local0=this.imageAsyncCallbackObj[a];
this.picIndex=(this.picIndex + 1);
_local0&&(typeof _local0 != "undefined")?_local0.callback.call(_local0.obj,this.picIndex,a):ty.LOGE("ty.Util","onLoaded , but callback is null!!!!");
---------------------------------------
==========================================================================E
==================================440==================================S
------------------Argv------------------
a,b,c,d,e,f
---------------------------------------
----------------Content----------------
_aliased6186=a.length;
_aliased2579.oneLoadedCallback=c;
_aliased2579.allLoadedCallback=d;
_aliased2579.loadErrCallback=e;
c = {index:0,callback:function () { __FUNC_441__ },errorCallback:function () { __FUNC_442__ }};
d = 0;
while((d < _aliased6186)){
this.addImageAsync(a[d],c,c.callback,c.errorCallback);
d = (d + 1);
}
---------------------------------------
==========================================================================E
==================================441==================================S
------------------Argv------------------
a,c
---------------------------------------
----------------Content----------------
_aliased2579.oneLoadedCallback.call(_aliased2579,a,c);
this.index=(this.index + 1);
ty.LOGD(this._TAG,("index == " + this.index));
(this.index == _aliased6186)&&_aliased2579.allLoadedCallback.call(_aliased2579);
---------------------------------------
==========================================================================E
==================================442==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGE(this._TAG,("err file async loaded: " + a));
(null != _aliased2579.loadErrCallback)&&(typeof _aliased2579.loadErrCallback != "undefined")?_aliased2579.loadErrCallback.call(_aliased2579,a):ty.alert((a + " not exist, please check!!!"));
---------------------------------------
==========================================================================E
==================================443==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0=this.md5HashUrl(a);
ty.LOGD(this._TAG,((("[md5HashPicUrl] url:" + a) + " and md5 value:") + _local0));
return _local0;
---------------------------------------
==========================================================================E
==================================444==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0=this.__util.md5HashPicUrl(a);
ty.LOGD(this._TAG,((("[md5HashUrl] url:" + a) + " and md5 value:") + _local0));
return _local0;
---------------------------------------
==========================================================================E
==================================445==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"in util md5String");
return this.__util.md5String(a);
---------------------------------------
==========================================================================E
==================================446==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.__util.showLog();
---------------------------------------
==========================================================================E
==================================447==================================S
------------------Argv------------------
a,b,c,d,e,f
---------------------------------------
----------------Content----------------
this.__util.httpDownloadImageAsyncCallbackObj=this.__util.httpDownloadImageAsyncCallbackObj||{};
d = {obj:d,callback:e,params:f};
e = this.__util.httpDownloadImageAsyncCallbackObj;
e[c]=e[c]||[];
f = e[c].length;
ty.LOGD(this._TAG,("imgObjs call back size = " + f));
e[c][f]=d;
this.__util.onHttpRequestCompleted=this.onHttpRequestCompleted;
this.__util.httpDownloadImg(a,b,c);
---------------------------------------
==========================================================================E
==================================448==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.__util.downLoadAppByBrowser(a);
---------------------------------------
==========================================================================E
==================================449==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.__util.downLoadAppByBrowser(a);
---------------------------------------
==========================================================================E
==================================450==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
break;
while(this.__util.httpDownloadImageAsyncCallbackObj has _iternext){
_local0=_iternext;
_local1=this.__util.httpDownloadImageAsyncCallbackObj[_local0];
if(_local1){
_local2=_local1.length;
_local3=0;
while((_local3 < _local2)){
_local1[_local3]=(null != _local1[_local3]) && (_local1[_local3].obj == a) && null;
_local3=(_local3 + 1);
_local3=0;
}
}
}
---------------------------------------
==========================================================================E
==================================451==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
_local0=a.path;
ty.LOGD(this._TAG,("onHttpRequestCompleted path == " + _local0));
if(_local0){
_local1=_local0.length;
_local2=0;
while((_local2 < _local1)){
(_local0[_local2] != null)&&_local0[_local2].callback.call(_local0[_local2].obj,a,_local0[_local2].params);
_local2=(_local2 + 1);
_local2=0;
}
}
---------------------------------------
==========================================================================E
==================================452==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
a = a.replace(/\r\n/,"
");
_local0="";
_local1=0;
while((_local1 < a.length)){
_local2=a.charCodeAt(_local1);
if((_local2 < 128)){
_local0=(_local0 + String.fromCharCode(_local2));
} else if((_local2 > 127)&&(_local2 < 2048)){
_local0=(_local0 + String.fromCharCode(((_local2 >> 6) | 192)));
} else {
}
_local0=(_local0 + String.fromCharCode(((_local2 >> 12) | 224)));
_local0=(_local0 + String.fromCharCode((((_local2 >> 6) & 63) | 128)));
_local0=(_local0 + String.fromCharCode(((_local2 & 63) | 128)));
_local1=(_local1 + 1);
_local1=0;
}
return _local0;
---------------------------------------
==========================================================================E
==================================453==================================S
------------------Argv------------------
a,b,c,d,e,f,h,g,j
---------------------------------------
----------------Content----------------
_local0="";
_local1=(_local1 + 1);
_local2=a.charCodeAt(_local1);
_local3=(_local3 + 1);
_local4=a.partName||"";
_local5=a.contentType||"";
_local6=((_local7.nameInCcb.indexOf("_bar_") == 0)&&_local7.nameInCcb.indexOf("_special_mask_") == 0)&&(_local6 + 1);
_local7=0;
a = this.utf8Encode(a);
while((_local7 < a.length)){
_local7=(_local7 + 1);
_local1=a.charCodeAt(_local7);
_local7=(_local7 + 1);
_local2=a.charCodeAt(_local7);
_local7=(_local7 + 1);
_local3=a.charCodeAt(_local7);
_local4=(_local1 >> 2);
_local1=(((_local1 & 3) << 4) | (_local2 >> 4));
_local5=(((_local2 & 15) << 2) | (_local3 >> 6));
_local6=(_local3 & 63);
isNaN(_local2)?_local5=_local6:_local6=isNaN(_local3)&&64;
_local0=((((_local0 + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(_local4)) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(_local1)) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(_local5)) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(_local6));
}
return _local0;
---------------------------------------
==========================================================================E
==================================454==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return this.__util.generateQrCode(a);
---------------------------------------
==========================================================================E
==================================455==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.__util.readCCBIPackFile(a);
---------------------------------------
==========================================================================E
==================================456==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.isAndroid()&&this.__util.installAPK(a);
---------------------------------------
==========================================================================E
==================================457==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,((("patchAndInstallAPK diff file: " + a) + " and new apk md5: ") + b));
if(ty.isAndroid()){
ty.LOGD(this._TAG,((("SYS is ANDROID patchAndInstallAPK diff file: " + a) + " and new apk md5: ") + b));
this.__util.patchAndInstallAPK(a,b);
}
---------------------------------------
==========================================================================E
==================================458==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"rightButtonDown...");
ty.NotificationCenter.trigger(ty.EventType.MSG_WINDOWS_RIGHT_BUTTON_DOWN);
---------------------------------------
==========================================================================E
==================================459==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"rightButtonUp...");
ty.NotificationCenter.trigger(ty.EventType.MSG_WINDOWS_RIGHT_BUTTON_UP);
---------------------------------------
==========================================================================E
==================================460==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
return this.__util._createNode(a,b);
---------------------------------------
==========================================================================E
==================================461==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return this.__util._createTimeline(a);
---------------------------------------
==========================================================================E
==================================462==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return this.__util._removeTimeline(a);
---------------------------------------
==========================================================================E
==================================463==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.__util.addHttpWhitelist(a);
---------------------------------------
==========================================================================E
==================================464==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return this.__util.isUncompressExecuted();
---------------------------------------
==========================================================================E
==================================465==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return this.__util.getPackageNameOrBundleId();
---------------------------------------
==========================================================================E
==================================466==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0=new ty._Util();
_local1={callback:function () { __FUNC_467__ }};
_local0.addImageAsync("img/cchess/btn_back.png",_local1,_local1.callback);
_local0.addImageAsync("img/cchess/btn_challenge.png",_local1,_local1.callback);
_local1={oneLoadedCallback:function () { __FUNC_468__ },allLoadedCallback:function () { __FUNC_469__ }};
_local0.addImageArrAsync(["img/cchess/btn_setup.png","img/cchess/btn_person.png","img/cchess/btn_online.png","img/cchess/btn_newgame.png"],_local1,_local1.oneLoadedCallback,_local1.allLoadedCallback);
_local1={cb:function () { __FUNC_470__ }};
_local0.downloadAndLoadImg("http://192.168.2.15/6/item_110.png",["Content-Type: image/png; charset=utf-8"],"ddz/tmp.png",_local1,_local1.cb);
---------------------------------------
==========================================================================E
==================================467==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
ty.LOGD("ty.Util.test",((("has loaded a texture, fileName is: " + b) + " object pointer is: ") + a));
---------------------------------------
==========================================================================E
==================================468==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
ty.LOGD("ty.Util.test",((("in obj1, has loaded a texture, fileName is: " + b) + " object pointer is: ") + a));
---------------------------------------
==========================================================================E
==================================469==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD("ty.Util.test","all are loaded in obj1");
---------------------------------------
==========================================================================E
==================================470==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD("ty.Util.test",("the path is:" + a));
a = cc.Sprite.create("ddz/tmp.png");
a.setScaleX(1);
a?ty.LOGD("ty.Util.test","ok in downImgObj"):ty.LOGD("ty.Util.test","error in downImgObj");
---------------------------------------
==========================================================================E
==================================471==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," in ctor new _SystemInfo");
this._systemInfo=TY_SYSTEM_INFO.create();
this._hasParseConfig=false;
this._config={};
this._parseConfig();
---------------------------------------
==========================================================================E
==================================472==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return this._systemInfo.getAllStaticInfo();
---------------------------------------
==========================================================================E
==================================473==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
_local0=JSON.parse(this._systemInfo.getAllStaticInfo());
ty.LOGD(this._TAG,("getDeviceId: " + _local0.deviceId));
return _local0.deviceId;
---------------------------------------
==========================================================================E
==================================474==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return this._systemInfo.getRealTimeDynamicInfo();
---------------------------------------
==========================================================================E
==================================475==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
_local0=ty.FileManager.readFromResource("frame/frame.json");
_local1=JSON.parse(_local0);
_local0=_local1.gameName;
_local0=(((("games/" + _local0) + "/") + _local0) + ".json");
_local2=(jsb.fileUtils.getWritablePath() + _local0);
ty.FileManager.checkFileExist(_local2)?_local0=ty.FileManager.readFile(_local2):_local0=ty.FileManager.readFromResource(_local0);
_local0=JSON.parse(_local0);
_local3=a.charCodeAt(_local7);
break;
while(_local0 has _iternext){
_local3=_iternext;
while(_local1 has _iternext){
_local4=_iternext;
(_local3 == _local4)&&ty.alert((("" + _local4) + """));
}
}
_local3={};
deepCopy(_local1,_local3);
deepCopy(_local0,_local3);
this._config=_local3;
this._config.debug=ty.IS_DEBUG;
this._hasParseConfig=true;
---------------------------------------
==========================================================================E
==================================476==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this._hasParseConfig||this._parseConfig();
return this._config;
---------------------------------------
==========================================================================E
==================================477==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0=new ty._SystemInfo();
_local1=_local0.getAllStaticInfo();
ty.LOGD("ty.SystemInfo.test",("getAllStaticInfo is:" + _local1));
_local1=JSON.parse(_local1);
cc.dump(_local1);
_local1=_local0.getRealTimeDynamicInfo();
ty.LOGD("ty.SystemInfo.test",("" + _local1));
_local1=JSON.parse(_local1);
cc.dump(_local1);
---------------------------------------
==========================================================================E
==================================478==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," in ctor new _local_storage");
this._local_storage=cc.sys.localStorage;
---------------------------------------
==========================================================================E
==================================479==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
!(a) || (typeof a == "undefined") || (a.length == 0)?ty.LOGD(this._TAG,"invalid key"):this._local_storage.setItem(a,b);
---------------------------------------
==========================================================================E
==================================480==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
if(!(a) || (typeof a == "undefined") || (a.length == 0)){
ty.LOGD(this._TAG,"invalid key");
} else {
}
return this._local_storage.getItem(a);
---------------------------------------
==========================================================================E
==================================481==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
!(a) || (typeof a == "undefined") || (a.length == 0)?ty.LOGD(this._TAG,"invalid key"):this._local_storage.removeItem(a);
---------------------------------------
==========================================================================E
==================================482==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
_aliased6988=1;
return function () { __FUNC_483__ };
---------------------------------------
==========================================================================E
==================================483==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
_aliased5881=(_aliased6988 + 1);
return _aliased6988;
---------------------------------------
==========================================================================E
==================================484==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
ty.LocalStorage=new ty._LocalStorage();
_local0=("key_" + Math.random());
ty.LocalStorage.setItem(_local0,"Hello world");
_local1=ty.LocalStorage.getItem(_local0);
ty.LOGD("ty.LocalStorage.test",_local1);
ty.LocalStorage.removeItem(_local0);
_local1=ty.LocalStorage.getItem(_local0);
ty.LOGD("ty.LocalStorage.test","should null");
ty.LOGD("ty.LocalStorage.test",_local1);
ty.LocalStorage.setItem(_local0,1);
_local1=ty.LocalStorage.getItem(_local0);
ty.LOGD("ty.LocalStorage.test","should not 2");
ty.LOGD("ty.LocalStorage.test",(_local1 + 1));
_local1=Number(ty.LocalStorage.getItem(_local0));
ty.LOGD("ty.LocalStorage.test","should == 2");
ty.LOGD("ty.LocalStorage.test",(_local1 + 1));
_local0=ty.LocalStorage.getGenFunc();
ty.LOGD("ty.LocalStorage.test",_local0());
---------------------------------------
==========================================================================E
==================================485==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," in ctor new _EncodeDecode");
this._worker=ENCODE_DECODE.create();
---------------------------------------
==========================================================================E
==================================486==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
return this._worker.signatureFile(a,b,c);
---------------------------------------
==========================================================================E
==================================487==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
return this._worker.signatureStr(a,b);
---------------------------------------
==========================================================================E
==================================488==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
return this._worker.base64Str(a,b);
---------------------------------------
==========================================================================E
==================================489==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
return this._worker.base64File(a,b,c,d);
---------------------------------------
==========================================================================E
==================================490==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
return this._worker.aesFile(a,b,c,d,e);
---------------------------------------
==========================================================================E
==================================491==================================S
------------------Argv------------------
a,b,c,d,e,f
---------------------------------------
----------------Content----------------
return this._worker.rsaFile(a,b,c,d,e,f);
---------------------------------------
==========================================================================E
==================================492==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0=new ty._EncodeDecode();
_local1=Number(ty.LocalStorage.getItem(_local0));
_local1=_local0.signatureFile("script/main.js",true,"md5");
ty.LOGD("TESTENCODEDECODE",("result: " + _local1));
_local1=_local0.signatureFile("/Users/imac-0001/Documents/framework.png",false,"md5");
ty.LOGD("TESTENCODEDECODE",("result: " + _local1));
_local1=_local0.signatureFile("/Users/imac-0001/Documents/framework.png",false,"sha1");
ty.LOGD("TESTENCODEDECODE",("result: " + _local1));
_local1=_local0.signatureFile("strings.xml",true,"sha1");
ty.LOGD("TESTENCODEDECODE",("result: " + _local1));
_local1=_local0.signatureStr("hello world!","sha1");
ty.LOGD("TESTENCODEDECODE",("result: " + _local1));
_local1=_local0.signatureStr("hello world!","md5");
ty.LOGD("TESTENCODEDECODE",("result: " + _local1));
_local1=_local0.base64File("img/bg.jpg","/Users/imac-0001/Documents/arrow_backup.png",1,1);
ty.LOGD("TESTENCODEDECODE",("base64 result: " + _local1));
_local1=_local0.base64File("/Users/imac-0001/Documents/arrow_backup.png","/Users/imac-0001/Documents/arrow_return.png",0,0);
ty.LOGD("TESTENCODEDECODE",("base64 result: " + _local1));
_local1=_local0.base64File("/Users/imac-0001/Documents/framework.png","/Users/imac-0001/Documents/framework_backup.png",1,0);
ty.LOGD("TESTENCODEDECODE",("base64 result: " + _local1));
_local1=_local0.base64File("/Users/imac-0001/Documents/framework_backup.png","/Users/imac-0001/Documents/framework_return.png",0,0);
ty.LOGD("TESTENCODEDECODE",("base64 result: " + _local1));
_local1=_local0.aesFile("","",1,0,ty.AesMode.AES_CBC);
ty.LOGD("TESTENCODEDECODE",("result: " + _local1));
_local1=_local0.aesFile("","",0,0,ty.AesMode.AES_CBC);
ty.LOGD("TESTENCODEDECODE",("result: " + _local1));
_local1=_local0.aesFile("/Users/imac-0001/Documents/server/srv.sh","/Users/imac-0001/Documents/server/srv.shbackup",1,0,ty.AesMode.AES_MODEL_N);
ty.LOGD("TESTENCODEDECODE",("result: " + _local1));
_local1=_local0.aesFile("/Users/imac-0001/Documents/server/srv.shbackup","/Users/imac-0001/Documents/server/srv.shreturn",0,0,ty.AesMode.AES_MODEL_N);
ty.LOGD("TESTENCODEDECODE",("result: " + _local1));
_local1=_local0.aesFile("strings.xml","/Users/imac-0001/Documents/strings.xmlbackup",1,1,ty.AesMode.AES_ECB);
ty.LOGD("TESTENCODEDECODE",("result: " + _local1));
_local1=_local0.aesFile("/Users/imac-0001/Documents/strings.xmlbackup","/Users/imac-0001/Documents/strings.xmlreturn",0,0,ty.AesMode.AES_ECB);
ty.LOGD("TESTENCODEDECODE",("result: " + _local1));
_local1=_local0.rsaFile("/Users/imac-0001/Documents/workspace/framework2/FrameWork2/res/script/test_ccb.js","/Users/imac-0001/Documents/workspace/framework2/FrameWork2/res/script/test_ccb.jsbackup",1,ty.RsaMode.RSA_PKCS1,"/Users/imac-0001/Documents/PublicRsa.key","/Users/imac-0001/Documents/PrivateRsa.key");
ty.LOGD("TESTENCODEDECODE",("result: " + _local1));
_local1=_local0.rsaFile("/Users/imac-0001/Documents/workspace/framework2/FrameWork2/res/script/test_ccb.jsbackup","/Users/imac-0001/Documents/workspace/framework2/FrameWork2/res/script/test_ccb.jsreturn",0,ty.RsaMode.RSA_PKCS1,"/Users/imac-0001/Documents/PublicRsa.key","/Users/imac-0001/Documents/PrivateRsa.key");
ty.LOGD("TESTENCODEDECODE",("result: " + _local1));
_local1=_local0.rsaFile("/Users/imac-0001/Documents/workspace/framework2/FrameWork2/res/script/test_ccb.js","/Users/imac-0001/Documents/workspace/framework2/FrameWork2/res/script/test_ccb.jsbackup1",1,ty.RsaMode.RSA_PKCS1_OAEP,"/Users/imac-0001/Documents/PublicRsa.key","/Users/imac-0001/Documents/PrivateRsa.key");
ty.LOGD("TESTENCODEDECODE",("result: " + _local1));
_local1=_local0.rsaFile("/Users/imac-0001/Documents/workspace/framework2/FrameWork2/res/script/test_ccb.jsbackup1","/Users/imac-0001/Documents/workspace/framework2/FrameWork2/res/script/test_ccb.jsreturn1",0,ty.RsaMode.RSA_PKCS1_OAEP,"/Users/imac-0001/Documents/PublicRsa.key","/Users/imac-0001/Documents/PrivateRsa.key");
ty.LOGD("TESTENCODEDECODE",("result: " + _local1));
---------------------------------------
==========================================================================E
==================================493==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return this;
---------------------------------------
==========================================================================E
==================================494==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================495==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return false;
---------------------------------------
==========================================================================E
==================================496==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================497==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return this;
---------------------------------------
==========================================================================E
==================================498==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this._sendMSObj=TY_SEND_MS.create();
this._delegateObj=null;
if((this._sendMSObj != null)){
this._sendMSObj._retDelegate=this;
this._sendMSObj.onRetSendMS=this.returnResult;
}
---------------------------------------
==========================================================================E
==================================499==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this._delegateObj=this._sendMSObj=null;
---------------------------------------
==========================================================================E
==================================500==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this._delegateObj=a;
---------------------------------------
==========================================================================E
==================================501==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
if((a.send_ret_code == 1)){
ty.LOGD(this._TAG,("returnResult-----------------1  " + a.send_ret_code));
this._retDelegate._delegateObj && (typeof this._retDelegate._delegateObj.sendMSSuccess != "undefined") && this._retDelegate._delegateObj.sendMSSuccess();
} else {
}
ty.LOGD(this._TAG,("returnResult-----------------2 " + a.send_ret_code));
this._retDelegate._delegateObj && (typeof this._retDelegate._delegateObj.sendMSFailed != "undefined") && this._retDelegate._delegateObj.sendMSFailed();
---------------------------------------
==========================================================================E
==================================502==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return (this._sendMSObj != null)?this._sendMSObj.canSendMS():false;
---------------------------------------
==========================================================================E
==================================503==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
(this._sendMSObj != null)&&this._sendMSObj.sendMS(a,b);
---------------------------------------
==========================================================================E
==================================504==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
_local0=new ty._SendMS();
_local0.setCallBackObj({sendMSSuccess:function () { __FUNC_505__ },sendMSFailed:function () { __FUNC_506__ }});
if(_local0.canSendMS()){
ty.alert("");
_local0.sendMS("gou out!","10086");
} else {
}
ty.alert("");
---------------------------------------
==========================================================================E
==================================505==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD("ty.SendMS.test","sendMSSuccess-----------------------------");
---------------------------------------
==========================================================================E
==================================506==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD("ty.SendMS.test","sendMSFailed-----------------------------");
---------------------------------------
==========================================================================E
==================================507==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.LevelMap={DEBUG:0,INFO:1,WARN:2,ERROR:3,FATAL:4,NONE:5};
ty.IS_DEBUG?this.logLevel=this.LevelMap.DEBUG:this.logLevel=this.LevelMap.WARN;
ty.NotificationCenter.listen(ty.EventType.WILL_ENTER_BACKGROUND,this.onEnterBackGround,this);
ty.NotificationCenter.listen(ty.EventType.HAS_ENTER_FOREGROUND,this.onEnterForeGround,this);
---------------------------------------
==========================================================================E
==================================508==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
if(a.level){
this.logLevel=this.LevelMap[a.level];
this.D(this._TAG,("tuyoo log Level == " + this.logLevel));
}
---------------------------------------
==========================================================================E
==================================509==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this._super();
ty.NotificationCenter.ignore(ty.EventType.WILL_ENTER_BACKGROUND,this.onEnterBackGround,this);
ty.NotificationCenter.ignore(ty.EventType.HAS_ENTER_FOREGROUND,this.onEnterForeGround,this);
---------------------------------------
==========================================================================E
==================================510==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.logLevel=this.LevelMap.NONE||5;
---------------------------------------
==========================================================================E
==================================511==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.logLevel=this.LevelMap[a]||2;
---------------------------------------
==========================================================================E
==================================512==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.D(this._TAG,"onEnterBackGround, save tuyoo log...");
this.saveLog();
---------------------------------------
==========================================================================E
==================================513==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.D(this._TAG,"onEnterForeGround in this.....");
---------------------------------------
==========================================================================E
==================================514==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================515==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================516==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.D(this._TAG,"in util write user info file");
---------------------------------------
==========================================================================E
==================================517==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
(this.LevelMap[a] >= this.logLevel)?this.needLog=true:this.needLog=false;
---------------------------------------
==========================================================================E
==================================518==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
cc.log(str);
---------------------------------------
==========================================================================E
==================================519==================================S
------------------Argv------------------
a,b,c,d,e,f,h
---------------------------------------
----------------Content----------------
e = "0000";
(typeof e == "undefined")&&this.checkNeedLog(a);
if(this.needLog){
_local0=new Date();
_local1=((((_local0.getFullYear() + "-") + (_local0.getMonth() + 1)) + "-") + _local0.getDate());
_local0=((_local0.toLocaleTimeString() + ":") + _local0.getMilliseconds());
a = (((((((((((((("[" + _local1) + " ") + _local0) + "]	[") + c) + "/") + a) + "/") + b) + "/") + e) + "]	") + d) + "
").replace(/\r|\n/,"");
cc.log(a);
}
---------------------------------------
==========================================================================E
==================================520==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
this._log("DEBUG",a,b,c,d);
---------------------------------------
==========================================================================E
==================================521==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
this._log("INFO",a,b,c,d);
---------------------------------------
==========================================================================E
==================================522==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
this._log("WARN",a,b,c,d);
---------------------------------------
==========================================================================E
==================================523==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
this._log("ERROR",a,b,c,d);
---------------------------------------
==========================================================================E
==================================524==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
this._log("FATAL",a,b,c,d);
---------------------------------------
==========================================================================E
==================================525==================================S
------------------Argv------------------
a,b,c,d,e,f
---------------------------------------
----------------Content----------------
_local0=new Date();
_local1=((((_local0.getFullYear() + "-") + (_local0.getMonth() + 1)) + "-") + _local0.getDate());
_local0=((_local0.toLocaleTimeString() + ":") + _local0.getMilliseconds());
a = ((((((((((("[" + _local1) + " ") + _local0) + "]	[") + b) + "/") + a) + "/") + d) + "]	") + c).replace(/\r|\n/,"");
console.logToFile(a);
---------------------------------------
==========================================================================E
==================================526==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," in ctor new _Dump");
this.level_padding="	";
---------------------------------------
==========================================================================E
==================================527==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
_local0="";
b = 0;
_local1=b||"";
_local2=0;
while((_local2 < b)){
_local1=(_local1 + this.level_padding);
_local2=(_local2 + 1);
_local2=0;
}
if((typeof a == "object")){
this._isArray(a)?_local0=(_local0 + this._dumpArray(a,b)):_local0=(_local0 + this._dumpMap(a,b));
_local0=(_local0 + _local1);
(typeof a == "string")?_local0=(_local0 + ((""" + a) + """)):(typeof a == "function")?_local0=(_local0 + this._dumpFunction(a,b)):_local0=(_local0 + a);
return _local0;
---------------------------------------
==========================================================================E
==================================528==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return (Object.prototype.toString.call(a) === "[object Array]");
---------------------------------------
==========================================================================E
==================================529==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
_local0=(_local0 + a);
b = 0;
_local1=b||"";
_local0=0;
while((_local0 < b)){
_local1=(_local1 + this.level_padding);
_local0=(_local0 + 1);
_local0=0;
}
_local0=("" + (("
" + _local1) + "[
"));
_local2=0;
while((_local2 < a.length)){
_local0=(_local0 + (this.dump(a[_local2],(b + 1)) + ",
"));
_local2=(_local2 + 1);
_local2=0;
}
return (_local0 + (_local1 + "]"));
---------------------------------------
==========================================================================E
==================================530==================================S
------------------Argv------------------
a,b,c,d,e,f,h
---------------------------------------
----------------Content----------------
_local0=(_local0 + (this.dump(a[_local2],(b + 1)) + ",
"));
b = 0;
_local1=b||"";
_local0=0;
while((_local0 < b)){
_local1=(_local1 + this.level_padding);
_local0=(_local0 + 1);
_local0=0;
}
_local0=("" + (_local1 + "{
"));
while(a has _iternext){
_local2=_iternext;
_local3=a[_local2];
_local4="";
(typeof _local3 == "object")?_local4=this.dump(_local3,(b + 1)):_local4=this.dump(_local3,0);
_local0=(_local0 + (((this.dump(_local2,(b + 1)) + ":") + _local4) + ",
"));
}
return (_local0 + (_local1 + "}"));
---------------------------------------
==========================================================================E
==================================531==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return (Object.prototype.toString.call(a) === "[object Function]");
---------------------------------------
==========================================================================E
==================================532==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
_local0="";
b = 0;
_local1=b||0;
while((_local1 < (b + 1))){
_local1=(_local1 + 1);
_local1=b||0;
}
_local1=a.toString().match(/function\s*([^(]*)\(/)[1];
return a.name||(_local0 + (_local1 + " --> function"));
---------------------------------------
==========================================================================E
==================================533==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
_local0={val:"New",number:8,theting:["So long","s",42,42.13,"Hello World"],func:function () { __FUNC_534__ }};
_local0={val:"new",number:8,theting:["so long","s","42","helloworld",{k1:"v1",k2:[1,2,3]}],func:function () { __FUNC_535__ }};
ty.Dump=new ty._Dump();
ty.LOGD("ty.Dump.test","dump the obj");
ty.Dump.dump(_local0);
---------------------------------------
==========================================================================E
==================================534==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================535==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================536==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================537==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
_local0=cc.Scene.create();
a = new a();
a.init(b,c);
b&&_local0.addChild(b);
cc.Director.getInstance().runWithScene(_local0);
---------------------------------------
==========================================================================E
==================================538==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
a.destroy?a.destroy():ty.LOGD(this._TAG,"take care , destroy not be implemented!");
a = cc.Scene.create();
b = new b();
b.init(c,d);
c&&a.addChild(c);
c = cc.Director.getInstance();
(c.getRunningScene() === null)?c.runWithScene(a):c.replaceScene(a);
---------------------------------------
==========================================================================E
==================================539==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," in connector new Connector");
this.connector=TY_Connector.create();
this.connector.onServerFound=this._onServerFound;
this.connector.onDeviceConnect=this._onDeviceConnect;
this.connector.onDeviceDisconnect=this._onDeviceDisconnect;
this.connector.onMessageReceived=this._onMessageReceived;
this.connector.onSearchFinish=this._onSearchFinish;
this.connector.onDeviceOpened=this._onDeviceOpened;
ty.LOGD(this._TAG,"delegate init...");
this.connector.delegate={};
this.connector.wrapper=this;
this.isCreator=this.isInited=false;
---------------------------------------
==========================================================================E
==================================540==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.connector.delegate=a;
ty.LOGD(this._TAG,("delegate=" + this.connector.delegate));
---------------------------------------
==========================================================================E
==================================541==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"connector.init");
this.connector.init(a);
---------------------------------------
==========================================================================E
==================================542==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"connector.close");
this.connector.close();
this.isInited=false;
---------------------------------------
==========================================================================E
==================================543==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,("connector.startServer isInited:" + this.isInited));
if(this.isInited){
this.connector.startServer(true);
this.isCreator=true;
}
---------------------------------------
==========================================================================E
==================================544==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,("connector.connectServer.peerId=" + a));
if(this.isInited){
this.connector.connectServer(a);
this.isCreator=false;
}
---------------------------------------
==========================================================================E
==================================545==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"connector.closeGame");
this.connector.gameClose();
---------------------------------------
==========================================================================E
==================================546==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
if(this.isInited){
ty.LOGD(this._TAG,"connector.startSearch");
this.connector.startSearch();
}
---------------------------------------
==========================================================================E
==================================547==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,((("connector.sendMsg.peerId= " + b) + "; msg= ") + a));
if(this.isInited){
b = "";
b||this.connector.sendMsg(a,b);
}
---------------------------------------
==========================================================================E
==================================548==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,((("js._onServerFound.name=" + a) + "; peerId=") + b));
this.delegate.onServerFound(a,b);
---------------------------------------
==========================================================================E
==================================549==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,((((((("js._onDeviceConnect.name=" + a) + "; peerId=") + b) + "; isSuccess=") + c) + "; isServer=") + d));
this.delegate.onDeviceConnect(a,b,c,d);
---------------------------------------
==========================================================================E
==================================550==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,((("js._onDiviceDisconnect.name=" + a) + "; peerId=") + b));
this.delegate.onDeviceDisconnect(a,b);
---------------------------------------
==========================================================================E
==================================551==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,((("js._onMessageReceived.msg=" + c) + "; isServer=") + d));
this.delegate.onMessageReceived(a,b,c,d);
---------------------------------------
==========================================================================E
==================================552==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"js._onSearchFinish.msg");
this.delegate.onSearchFinish();
---------------------------------------
==========================================================================E
==================================553==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,("js._onDeviceOpened.isOpen=" + a));
if(a){
this.wrapper.isInited=true;
}
ty.LOGD(this._TAG,("isInited:" + this.wrapper.isInited));
this.delegate.onDeviceOpened(a);
---------------------------------------
==========================================================================E
==================================554==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
_local0=b||{};
_local1=a.toString().match(/function\s*([^(]*)\(/)[1];
while(a has _iternext){
_local1=_iternext;
if((typeof a[_local1] === "object")){
(a[_local1].constructor === Array)?_local0[_local1]=[]:_local0[_local1]={};
deepCopy(a[_local1],_local0[_local1]);
} else {
}
_local0[_local1]=a[_local1];
}
return _local0;
---------------------------------------
==========================================================================E
==================================555==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
_local0=a.length;
_local1=(a.length - 1);
while((_local1 >= 0)){
_local2=a.charAt(_local1);
if((_local2 == ".")){
_local0=_local1;
cc.log(("extPos == " + _local0));
} else if((_local2 == "/")){
break;
}
_local1=(_local1 - 1);
_local1=(a.length - 1);
}
(_local1 == -1)?_local2=a:_local2=a.substring(0,(_local1 + 1));
_local3=a.substring((_local1 + 1),a.length);
_local1=a.substring((_local1 + 1),_local0);
a = a.substring((_local0 + 1));
return {dirName:_local2,fileName:_local3,baseName:_local1,extName:a};
---------------------------------------
==========================================================================E
==================================556==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return a.replace(/\s+/," ");
---------------------------------------
==========================================================================E
==================================557==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return a.replace(/^\s+/,"");
---------------------------------------
==========================================================================E
==================================558==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return a.replace(/\s+$/,"");
---------------------------------------
==========================================================================E
==================================559==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return a.replace(/(^\s+)|(\s+$)/,"");
---------------------------------------
==========================================================================E
==================================560==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
_local0=0;
_local1=a.length;
if(!(a)){
return 0;
}
_local2=0;
while((_local2 < _local1)){
(a.charCodeAt(_local2) > 255)?_local0=(_local0 + 2):_local0=(_local0 + 1);
_local2=(_local2 + 1);
_local2=0;
}
return _local0;
---------------------------------------
==========================================================================E
==================================561==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0=(a + "").split(".");
a = _local0[0];
_local0=_local0[1];
_local1=/(\d+)(\d{3})/;
while(_local1.test(a)){
a = a.replace(_local1,"$1,$2");
}
_local0?_local0=_local0.replace(/(\d{3})(?=[^$])/,"$1,"):_local0="";
return ((a + ".") + _local0);
---------------------------------------
==========================================================================E
==================================562==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG," in ctor new VerifyLoginUrl");
this.loginUrlList=ty.SystemInfo.getConfig().backUrlList;
ty.LOGD(this._TAG,("loginUrlList[1]: " + this.loginUrlList));
this.readTestConfig();
ty.LOGD(this._TAG,("loginUrlList[2]: " + this.loginUrlList));
---------------------------------------
==========================================================================E
==================================563==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
if((typeof this.loginUrlList == "undefined")){
this.loginUrlList=[];
}
(0 == this.loginUrlList.length)&&this.loginUrlList.push(ty.loginUrl);
return this.loginUrlList;
---------------------------------------
==========================================================================E
==================================564==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
ty.LOGD(this._TAG,"readTestConfig-------------");
if((typeof ty.staticSystemInfo.product != "undefined")){
_local0=ty.staticSystemInfo.product.toString();
ty.LOGD(this._TAG,("product str: " + _local0));
ty.LOGD(this._TAG,("staticSystemInfo: " + JSON.stringify(ty.staticSystemInfo)));
_local1=ty.staticSystemInfo.productDir.toString();
ty.LOGD(this._TAG,("productDir str: " + _local1));
_local0=(((_local0 + "/") + _local1) + "/config.txt");
ty.LOGD(this._TAG,("tuyoo test file path: " + _local0));
ty.LOGD(this._TAG,"check test dir...");
_local1=((ty.FileManager.getWritableRootPath(true) + "/") + _local0);
if(!(ty.FileManager.checkFileExist(_local1))){
ty.LOGD(this._TAG,"config.txt is not in SD/Cache. Searching it  in phone memory.");
_local1=((ty.FileManager.getWritableRootPath(false) + "/") + _local0);
}
if(!(ty.FileManager.checkFileExist(_local1))){
ty.LOGD(this._TAG,"config.txt is not in phone memory.");
return false;
}
_local0=ty.FileManager.readFile(_local1);
ty.LOGD(this._TAG,((("readStr:" + _local0) + " pathStr:") + _local1));
if(_local0&&(_local0.trim().substr(0,1) == "{")){
_local0=JSON.parse(_local0);
if((typeof _local0.urlServer != "undefined")){
this.loginUrlList=[];
this.loginUrlList.push(_local0.urlServer);
ty.loginUrl=_local0.urlServer;
if((typeof _local0.delGameSlot != "undefined")){
ty.DELGAMESLOTS=_local0.delGameSlot;
}
ty.Util.showLog();
ty.LOG.setConfig({level:"DEBUG"});
ty.OFFLINECONFIG=_local0;
return true;
}}}
return false;
---------------------------------------
==========================================================================E
==================================565==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================566==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================567==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================568==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================569==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================570==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================571==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================572==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================573==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================574==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================575==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================576==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================577==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================578==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================579==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================580==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================581==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================582==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================583==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================584==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================585==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================586==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================587==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================588==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================589==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================590==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================591==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================592==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================593==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================594==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================595==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================596==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================597==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================598==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================599==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================600==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================601==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================602==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================603==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================604==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================605==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================606==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================607==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================608==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================609==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================610==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================611==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================612==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================613==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================614==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================615==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
this._super();
this.fontName="ArialMT";
c?this.timeXS=(30 / c):this.timeXS=1;
if(d){
this.callBack=d;
}
if(e){
this.callBackHandler=e;
}
this.setAnchorPoint(cc.p(0,0));
this.winSize=cc.director.getWinSize();
this.autoPlayBoo=a;
this.loopBoo=b;
this.reinit();
this.autoPlayBoo&&this.animationBegin();
return true;
---------------------------------------
==========================================================================E
==================================616==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
console.log("Error : createSprites need to override");
---------------------------------------
==========================================================================E
==================================617==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
console.log("Error : reinit need to override");
---------------------------------------
==========================================================================E
==================================618==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
console.log("Error : resetStrByData need to override");
---------------------------------------
==========================================================================E
==================================619==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
console.log("Error : animationBegin need to override");
---------------------------------------
==========================================================================E
==================================620==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
console.log("Error : animationEnd need to override");
---------------------------------------
==========================================================================E
==================================621==================================S
------------------Argv------------------
a,b,c,d,e,f,h,g,j
---------------------------------------
----------------Content----------------
a.setAnchorPoint(cc.p(b,c));
a.setPosition(cc.p(d,e));
a.setScale(f,h);
a.setRotation(g);
a.setOpacity(j);
---------------------------------------
==========================================================================E
==================================622==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return this;
---------------------------------------
==========================================================================E
==================================623==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
hall.assert.true((a != "${absPath}"),"");
if(c){
_local0=JSON.parse(_local0);
_local1=false;
_local0=0;
while((_local0 < this.cacheArr.length)){
if((this.cacheArr[_local0] == c)){
_local1=true;
break;
}
_local0=(_local0 + 1);
_local0=0;
}
_local0=cc.spriteFrameCache;
if((_local1 == false)){
this.cacheArr.push(c);
_local0.addSpriteFrames((c + ".plist"),(c + ".png"));
}
_tempSpriteFrame = _local0.getSpriteFrame((a + ".png"));
a = new cc.Sprite(_tempSpriteFrame);
} else {
}
a = new cc.Sprite((a + ".png"));
this.addChild(a,b);
return a;
---------------------------------------
==========================================================================E
==================================624==================================S
------------------Argv------------------
a,b,c,d,e,f,h,g,j,k,l
---------------------------------------
----------------Content----------------
a = cc.LabelTTF.create(a,this.getFontName(b),c,d,e,f);
h&&a.setDimensions(d.width,d.height);
a.color=cc.color(g,j,k);
this.addChild(a,l);
return a;
---------------------------------------
==========================================================================E
==================================625==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return this.fontName||a;
---------------------------------------
==========================================================================E
==================================626==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return new (cc.Class.extend({_TAG:"editBoxControl",ctor:function () { __FUNC_627__ },destroy:function () { __FUNC_628__ },setEditBox:function () { __FUNC_629__ }}))();
---------------------------------------
==========================================================================E
==================================627==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.editBox=null;
---------------------------------------
==========================================================================E
==================================628==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.editBox.setDelegate(null);
this.editBox.removeFromParent(true);
this.editBox=null;
---------------------------------------
==========================================================================E
==================================629==================================S
------------------Argv------------------
a,b,c,d,e,f
---------------------------------------
----------------Content----------------
d = 20;
e = "editboxStyle_pack_item_ui";
_local0=d || e || a.getContentSize();
_local0.width=(_local0.width - d);
this.editBox=hall.GlobalFuncs.createEditBoxWithStyle(_local0,e);
this.editBox.setPosition(cc.p(((_local0.width + d) * 0.5),(_local0.height * 0.5)));
c&&this.editBox.setInputMode(c);
this.editBox.setDelegate(b);
a.addChild(this.editBox);
---------------------------------------
==========================================================================E
==================================630==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return new (cc.Class.extend({_TAG:"picUrlControl",ctor:function () { __FUNC_631__ },destroy:function () { __FUNC_632__ },getIconSp:function () { __FUNC_633__ },download:function () { __FUNC_634__ },_onDownloadFinishAvatar:function () { __FUNC_635__ },_checkDonwloadResult:function () { __FUNC_636__ },_setSpriteFrameByPath:function () { __FUNC_637__ }}))();
---------------------------------------
==========================================================================E
==================================631==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.uniqueID=ty.DisplayUtil.getUniqueID();
this.icon=null;
ty.AsyncImgDownload.addAsyncImgDownloadObserver(hall.ImgDownloadType.HALL_DOWNLOAD_COMMON,this,this._onDownloadFinishAvatar);
---------------------------------------
==========================================================================E
==================================632==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.icon=null;
ty.AsyncImgDownload.removeAsyncImgDownloadObserver(hall.ImgDownloadType.HALL_DOWNLOAD_COMMON,this,this._onDownloadFinishAvatar);
---------------------------------------
==========================================================================E
==================================633==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
a = a.getChildren();
_local0=a.length;
i = 0;
while((i < _local0)){
_local1=a[i];
if(_local1.nameInCcb&&(_local1.nameInCcb.indexOf("icon_") == 0)){
this.icon=_local1;
break;
}
i = (i + 1);
}
---------------------------------------
==========================================================================E
==================================634==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
b = {};
b.uniID=this.uniqueID;
b.callBack=c;
b.callBackObj=d;
ty.AsyncImgDownload.downloadImgAsync(hall.ImgDownloadType.HALL_DOWNLOAD_COMMON,a,hall.webPicCache,b);
---------------------------------------
==========================================================================E
==================================635==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
if((b.uniID == this.uniqueID)){
this._checkDonwloadResult(a) && a.path && this._setSpriteFrameByPath(this.icon,a.path);
_local0=b.callBack;
_local1=b.callBackObj;
_local0 && _local1 && _local0.apply(_local1);
}
---------------------------------------
==========================================================================E
==================================636==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
return (a.statusCode == 200) && (a.openErr != 1) && (a.writeErr != 1);
---------------------------------------
==========================================================================E
==================================637==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0=cc.Sprite.create(b).getContentSize();
_local0=cc.rect(0,0,_local0.width,_local0.height);
_local0?a.setSpriteFrame(_local0):hall.LOGE(this._TAG,"create frame from pic path ERR!!!!!!!!");
---------------------------------------
==========================================================================E
==================================638==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return new (cc.Class.extend({_TAG:"progressBarControl",ctor:function () { __FUNC_639__ },destroy:function () { __FUNC_640__ },setBar:function () { __FUNC_641__ },setPect:function () { __FUNC_642__ },setCurrentMax:function () { __FUNC_643__ },clearPect:function () { __FUNC_644__ }}))();
---------------------------------------
==========================================================================E
==================================639==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.bar=null;
---------------------------------------
==========================================================================E
==================================640==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.bar=null;
---------------------------------------
==========================================================================E
==================================641==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.bar=a;
this.barWidth=this.bar.getContentSize().width;
this.originalPosX=this.bar.getPositionX();
this.bar.setPositionX((this.originalPosX - this.barWidth));
---------------------------------------
==========================================================================E
==================================642==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
a = (this.originalPosX - (this.barWidth * (1 - a)));
this.bar.stopAllActions();
a = cc.MoveTo.create(0.3,cc.p(a,this.bar.getPositionY()));
a = ty.DisplayUtil.getEaseAction(a,"easeExponentialOut");
this.bar.runAction(a);
---------------------------------------
==========================================================================E
==================================643==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
this.setPect((a / b));
---------------------------------------
==========================================================================E
==================================644==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.setPect(0);
---------------------------------------
==========================================================================E
==================================645==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return new (cc.Class.extend({_TAG:"listControl",ctor:function () { __FUNC_646__ },destroy:function () { __FUNC_647__ },setListContainer:function () { __FUNC_648__ },getItemInfo:function () { __FUNC_649__ },beginLoad:function () { __FUNC_650__ },endLoad:function () { __FUNC_651__ },setItemColumnAndSpace:function () { __FUNC_652__ },resetDataBegin:function () { __FUNC_653__ },resetDataEnd:function () { __FUNC_654__ },resetData:function () { __FUNC_655__ },reInitItemByData:function () { __FUNC_656__ },numberOfCellsInTableView:function () { __FUNC_657__ },tableCellSizeForIndex:function () { __FUNC_658__ },tableCellAtIndex:function () { __FUNC_659__ },scrollViewDidScroll:function () { __FUNC_660__ },tableCellTouched:function () { __FUNC_661__ },tableCellHighlight:function () { __FUNC_662__ },tableCellUnhighlight:function () { __FUNC_663__ },setItemInCellHighlight:function () { __FUNC_664__ }}))();
---------------------------------------
==========================================================================E
==================================646==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.widthSpace=0;
this.columnNumber=1;
this.parentUI=this.tableView=this.loading=this.noItmeLayer=null;
this.itemControls=[];
this.lastOffset=null;
this.itemBeginX=0;
this.itemInCellCenter=false;
this.cellSizes=this.dataList=null;
this.initedBool=false;
this.customItemCcbiFileName=this.itemCCBControlName=this.viewSize=null;
---------------------------------------
==========================================================================E
==================================647==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.customItemCcbiFileName=this.itemCCBControlName=this.viewSize=this.parentUI=this.cellSizes=this.dataList=null;
while((this.itemControls.length > 0)){
_local0=this.itemControls.pop();
_local0.parentListControl=null;
_local0&&_local0.destroy();
}
this.loading=this.noItmeLayer=this.itemControls=null;
if(this.tableView){
this.tableView.setDelegate(null);
this.tableView.removeFromParent(true);
this.tableView.release();
this.tableView=null;
}
---------------------------------------
==========================================================================E
==================================648==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0=a.getContentSize();
this.getItemInfo(a);
this.tableView=cc.TableView.create(this,_local0);
this.tableView.retain();
this.tableView.getContainer().setLocalZOrder(-1);
this.tableView.setDirection(cc.SCROLLVIEW_DIRECTION_VERTICAL);
this.tableView.setVerticalFillOrder(cc.TABLEVIEW_FILL_TOPDOWN);
this.tableView.setBounceable(true);
this.tableView.setDelegate(this);
this.viewSize=_local0;
a.addChild(this.tableView);
---------------------------------------
==========================================================================E
==================================649==================================S
------------------Argv------------------
a,b,c,d,e,f
---------------------------------------
----------------Content----------------
_local0=a.getContentSize();
_local1=a.getChildren();
_local2=_local1.length;
_local3=false;
_local0=0;
while((_local0 < _local2)){
_local4=_local1[_local0];
if(_local4.nameInCcb){
if((_local4.nameInCcb.indexOf("item_") == 0)){
_local3=_local4.nameInCcb.split("_");
(_local3.length != 3)&&hall.assert.true(false,("" + _local4.nameInCcb));
this.itemCCBControlName=_local3[2];
this.itemWidth=_local4.getContentSize().width;
this.itemHeight=_local4.getContentSize().height;
this.itemBeginX=_local4.getPositionX();
_local4.removeFromParent(true);
_local3=true;
} else if((_local4.nameInCcb.indexOf("onItem_") == 0)){
this.noItmeLayer=_local4;
this.noItmeLayer.setVisible(false);
} else if((_local4.nameInCcb.indexOf("loading_") == 0)){
this.loading=_local4;
this.endLoad();
}}
_local0=(_local0 + 1);
_local0=0;
}
(_local3 == false)&&hall.assert.true(false,"");
this.columnNumber=parseInt(Math.floor(((a.getContentSize().width * 1.01) / this.itemWidth)));
if((this.columnNumber == 0)){
this.columnNumber=1;
}
---------------------------------------
==========================================================================E
==================================650==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.loading&&this.loading.setVisible(true);
---------------------------------------
==========================================================================E
==================================651==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.loading&&this.loading.setVisible(false);
---------------------------------------
==========================================================================E
==================================652==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
this.widthSpace=b;
this.columnNumber=a;
---------------------------------------
==========================================================================E
==================================653==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================654==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================655==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.resetDataBegin();
this.dataList=a;
this.cellSizes=[];
this.tableView.reloadData();
this.resetDataEnd();
(a.length == 0)?this.noItmeLayer&&this.noItmeLayer.setVisible(true):this.noItmeLayer&&this.noItmeLayer.setVisible(false);
---------------------------------------
==========================================================================E
==================================656==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
hall.assert.hasFunction(a,"reInitItemByData","");
a.reInitItemByData(b);
hall.assert.hasFunction(a,"getItemSize","");
b = a.getItemSize();
a.getRootNode().setPosition(((this.itemBeginX + (b.width * c)) + (c * this.widthSpace)),0);
a.getRootNode().setAnchorPoint(cc.p(0,0));
return (c == 0)?cc.size(b.width,b.height):cc.size((b.width + this.widthSpace),b.height);
---------------------------------------
==========================================================================E
==================================657==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
_local0=0;
if(this.dataList){
hall.LOGD(this._TAG,"this.dataList have");
((this.dataList.length % this.columnNumber) == 0)?_local0=this.dataList.length&&parseInt((this.dataList.length / this.columnNumber)):_local0=(parseInt((this.dataList.length / this.columnNumber)) + 1);
}
return _local0;
---------------------------------------
==========================================================================E
==================================658==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
return this.cellSizes&&this.cellSizes[b]?:cc.size(this.itemWidth,this.itemHeight);
---------------------------------------
==========================================================================E
==================================659==================================S
------------------Argv------------------
a,b,c,d,e,f,h,g,j
---------------------------------------
----------------Content----------------
hall.LOGD(this._TAG,("sp_list tableCellAtIndex : " + b));
_local0=a.dequeueCell();
if(!(_local0)){
_local0=new cc.TableViewCell();
_local1=0;
while((_local1 < this.columnNumber)){
_local2={};
_local2.customItemCcbiFileName=this.customItemCcbiFileName;
_local3=ty.DisplayUtil.getCcbControlByName(this.itemCCBControlName,_local2);
_local0[("itemControl_" + _local1)]=_local3;
_local0.addChild(_local3.getRootNode());
if(this.parentUI){
_local3.parentUI=this.parentUI;
}
_local3.parentListControl=this;
this.itemControls.push(_local3);
_local1=(_local1 + 1);
_local1=0;
}
}
_local1=0;
while((_local1 < this.columnNumber)){
_local3=_local0[("itemControl_" + _local1)];
_local3.getRootNode().setVisible(false);
_local1=(_local1 + 1);
_local1=0;
}
_local4=(b * this.columnNumber);
_local5=(Math.min(((b + 1) * this.columnNumber),this.dataList.length) - 1);
_local2=cc.size(0,0);
_local1=_local4;
while((_local1 <= _local5)){
_local6=(_local1 - _local4);
_local3=_local0[("itemControl_" + _local6)];
_local3.getRootNode().setVisible(true);
_local3=this.reInitItemByData(_local3,this.dataList[_local1],_local6);
_local2.width=(_local2.width + _local3.width);
if((_local2.height < _local3.height)){
_local2.height=_local3.height;
}
_local1=(_local1 + 1);
_local1=_local4;
}
if(this.itemInCellCenter){
_local1=_local4;
while((_local1 < this.columnNumber)){
_local3=_local0[("itemControl_" + _local1)];
_local4=_local3.getRootNode().isVisible()&&(_local4 + 1);
_local1=(_local1 + 1);
_local1=_local4;
}
if((_local4 != this.columnNumber)){
_local4=((this.itemWidth * this.columnNumber) / (_local4 + 1));
_local1=0;
while((_local1 < this.columnNumber)){
_local3=_local0[("itemControl_" + _local1)];
_local3.getRootNode().setPositionX((((_local1 + 1) * _local4) - (this.itemWidth * 0.5)));
_local1=(_local1 + 1);
_local1=0;
}
}}
_local0.setContentSize(_local2);
this.cellSizes[b]=_local2;
return _local0;
---------------------------------------
==========================================================================E
==================================660==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
this.lastOffset=a.getContentOffset();
hall.LOGD(this._TAG,("this.lastOffset : " + parseInt(this.lastOffset.y)));
hall.LOGD(this._TAG,((("tableView_.getContentSize : " + a.getContentSize().width) + " , ") + a.getContentSize().height));
---------------------------------------
==========================================================================E
==================================661==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================662==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
---------------------------------------
==========================================================================E
==================================663==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
a.isTouchMoved()?this.setItemInCellHighlight(b,false):this.setItemInCellHighlight(b,true);
---------------------------------------
==========================================================================E
==================================664==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0=0;
while((_local0 < this.columnNumber)){
a[("itemControl_" + _local0)].highlight=b;
_local0=(_local0 + 1);
_local0=0;
}
---------------------------------------
==========================================================================E
==================================665==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return new (cc.Class.extend({_TAG:"btnGroupControl",ctor:function () { __FUNC_666__ },destroy:function () { __FUNC_667__ },setBtnContainer:function () { __FUNC_668__ },selectBtn:function () { __FUNC_669__ },rollBack:function () { __FUNC_670__ }}))();
---------------------------------------
==========================================================================E
==================================666==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.btns=[];
this.neverShowBtns=[];
this.follower=null;
this.followerMoveTime=0.3;
this.lastSelectBtn=null;
---------------------------------------
==========================================================================E
==================================667==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
while(this.btns&&(this.btns.length > 0)){
_local0=this.btns.pop();
_local0.btnGroupControl=null;
_local0.pressLabel=null;
_local0.normalLabel=null;
_local0.tip=null;
}
this.lastSelectBtn=this.btns=null;
---------------------------------------
==========================================================================E
==================================668==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
_local0=a.getChildren();
_normalLabels = {};
_pressLabels = {};
_tips = {};
a = 0;
while((a < _local0.length)){
_local1=_local0[a];
if((_local1.nameInCcb.indexOf("btn_") == 0)){
_local2=_local1.nameInCcb.split("_");
(_local2.length != 3)&&hall.assert.true(false,"");
_local1.btnGroupControl=this;
this.btns.push(_local1);
}
if((_local1.nameInCcb.indexOf("label_") == 0)){
_local2=_local1.nameInCcb.split("_");
_local2.shift();
_local2.pop();
_pressLabels[("btn_" + _local2.join("_"))]=(_local1.nameInCcb.indexOf("_press") > 0)&&_local1;
_normalLabels[("btn_" + _local2.join("_"))]=(_local1.nameInCcb.indexOf("_normal") > 0)&&_local1;
}
if((_local1.nameInCcb.indexOf("tip_") == 0)){
_local2=_local1.nameInCcb.split("_");
_local2.shift();
_tips[("btn_" + _local2.join("_"))]=_local1;
_local1.setVisible(false);
}
if((_local1.nameInCcb.indexOf("follow_") == 0)){
this.follower=_local1;
}
a = (a + 1);
}
a = 0;
while((a < this.btns.length)){
_local0=this.btns[a];
if(_local1){
_local0.normalLabel=_local1;
}
if(_local1){
_local0.pressLabel=_local1;
}
if(_local1){
_local0.tip=_local1;
}
a = (a + 1);
}
---------------------------------------
==========================================================================E
==================================669==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0=this.btns[a];
_local0=0;
while((_local0 < this.btns.length)){
_local1=this.btns[_local0];
if(_local1.isSelected()){
this.lastSelectBtn=_local1;
}
_local0=(_local0 + 1);
_local0=0;
}
if(a && this.lastSelectBtn && (a == this.lastSelectBtn)){
return false;
}
this.follower&&this.follower.stopAllActions();
_local0=0;
while((_local0 < this.btns.length)){
_local1=this.btns[_local0];
if((this.neverShowBtns.indexOf(_local1) == -1)){
if((_local1 != a)){
_local1.setEnabled(true);
_local1.setSelected(false);
_local1.setHighlighted(false);
_local1.setBackgroundSprite(_local1.getBackgroundSpriteForState(cc.CONTROL_STATE_NORMAL));
_local1.normalLabel&&_local1.normalLabel.setVisible(true);
_local1.pressLabel&&_local1.pressLabel.setVisible(false);
} else {
}
_local1.setEnabled(false);
_local1.setSelected(true);
_local1.setHighlighted(true);
_local1.setBackgroundSprite(_local1.getBackgroundSpriteForState(cc.CONTROL_STATE_HIGHLIGHTED));
_local1.normalLabel&&_local1.normalLabel.setVisible(false);
_local1.pressLabel&&_local1.pressLabel.setVisible(true);
this.follower&&this.follower.runAction(ty.DisplayUtil.getEaseAction(cc.moveTo(this.followerMoveTime,_local1.getPosition()),"easeExponentialOut"));
}
_local0=(_local0 + 1);
_local0=0;
}
return true;
---------------------------------------
==========================================================================E
==================================670==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.selectBtn(this.lastSelectBtn);
---------------------------------------
==========================================================================E
==================================671==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
this._super();
this.winSize=cc.director.getWinSize();
this._makeExtendMask(a);
b&&this.setMaskSpByName(b,c,d,e);
return true;
---------------------------------------
==========================================================================E
==================================672==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
this.maskSpXS=b||1;
_local0=(_local0 + 1);
if(this.targetSp){
_hasLastTargetSpBool = true;
_local0=this.targetSp.getContentSize();
this.removeChild(this.targetSp);
}
this.targetSp=cc.Sprite.create(a);
this.targetSp.setAnchorPoint(cc.p(0.5,0.5));
this.addChild(this.targetSp);
a = this.targetSp.getContentSize();
if(_local0){
this.targetSp.setScaleX(((_local0.width / a.width) * this.maskSpXS));
this.targetSp.setScaleY(((_local0.height / a.height) * this.maskSpXS));
} else {
}
this.targetSp.setScaleX(0.01);
this.targetSp.setScaleY(0.01);
this.changeSize(a,c,d);
---------------------------------------
==========================================================================E
==================================673==================================S
------------------Argv------------------
a,b,c,d,e,f,h,g
---------------------------------------
----------------Content----------------
_local0=((a.width * 0.5) * this.maskSpXS);
_local1=((a.height * 0.5) * this.maskSpXS);
_local2=(- _local0);
_local3=(- _local1);
_local4=cc.p(_local0,_local1);
_local1=cc.p(_local2,_local1);
_local2=cc.p(_local2,_local3);
_local0=cc.p(_local0,_local3);
if(b&&(b > 0)){
_local4=cc.MoveTo.create(b,_local4);
_local4=ty.DisplayUtil.getEaseAction(_local4,c);
this.maskExt1.runAction(_local4);
_local4=cc.MoveTo.create(b,_local1);
_local4=ty.DisplayUtil.getEaseAction(_local4,c);
this.maskExt2.runAction(_local4);
_local4=cc.MoveTo.create(b,_local2);
_local4=ty.DisplayUtil.getEaseAction(_local4,c);
this.maskExt3.runAction(_local4);
_local4=cc.MoveTo.create(b,_local0);
_local4=ty.DisplayUtil.getEaseAction(_local4,c);
this.maskExt4.runAction(_local4);
} else {
}
this.maskExt4.setPosition(_local0);
this.maskExt3.setPosition(_local2);
this.maskExt2.setPosition(_local1);
this.maskExt1.setPosition(_local4);
if(this.targetSp){
_local1=this.targetSp.getContentSize();
_local4=((a.width / _local1.width) * this.maskSpXS);
a = ((a.height / _local1.height) * this.maskSpXS);
if(b&&(b > 0)){
b = cc.ScaleTo.create(b,_local4,a);
b = ty.DisplayUtil.getEaseAction(b,c);
this.targetSp.runAction(b);
} else {
}
this.targetSp.setScaleX(_local4);
this.targetSp.setScaleY(a);
}
---------------------------------------
==========================================================================E
==================================674==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
this.maskExt1=cc.Sprite.create(a);
this.maskExt1.setAnchorPoint(cc.p(0,1));
this.maskExt2=cc.Sprite.create(a);
this.maskExt2.setAnchorPoint(cc.p(0,0));
this.maskExt3=cc.Sprite.create(a);
this.maskExt3.setAnchorPoint(cc.p(1,0));
this.maskExt4=cc.Sprite.create(a);
this.maskExt4.setAnchorPoint(cc.p(1,1));
this.addChild(this.maskExt1);
this.addChild(this.maskExt2);
this.addChild(this.maskExt3);
this.addChild(this.maskExt4);
_local0=this.maskExt4.getContentSize();
a = ((this.winSize.width / _local0.width) * 2);
_local0=((this.winSize.height / _local0.height) * 2);
this.maskExt1.setScaleX(a);
this.maskExt2.setScaleX(a);
this.maskExt3.setScaleX(a);
this.maskExt4.setScaleX(a);
this.maskExt1.setScaleY(_local0);
this.maskExt2.setScaleY(_local0);
this.maskExt3.setScaleY(_local0);
this.maskExt4.setScaleY(_local0);
---------------------------------------
==========================================================================E
==================================675==================================S
------------------Argv------------------
a,b,c,d,e,f
---------------------------------------
----------------Content----------------
(a.getRotation() != 0)&&console.log("");
_local0=a.getAnchorPoint();
_local1=a.getContentSize();
if(_local1){
_local1.width=(_local1.width * a.getScaleX());
_local1.height=(_local1.height * a.getScaleY());
} else {
}
_local1=a.getBoundingBox();
_local2=a.getPosition();
_local0=cc.p((_local2.x + (_local1.width * (0.5 - _local0.x))),(_local2.y + (_local1.height * (0.5 - _local0.y))));
a = a.getParent().convertToWorldSpace(_local0);
this.movetoPos(this.getParent().convertToNodeSpace(a),b,c);
---------------------------------------
==========================================================================E
==================================676==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
if(b&&(b > 0)){
a = cc.MoveTo.create(b,a);
a = ty.DisplayUtil.getEaseAction(a,c);
this.runAction(a);
} else {
}
this.setPosition(a);
---------------------------------------
==========================================================================E
==================================677==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
this.movetoTarget(a,b,c);
b = a.getContentSize();
b.width=(b.width * a.getScaleX());
b.height=(b.height * a.getScaleY());
this.changeSize(b);
---------------------------------------
==========================================================================E
==================================678==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.maskExt1.stopAllActions();
this.maskExt2.stopAllActions();
this.maskExt3.stopAllActions();
this.maskExt4.stopAllActions();
this.targetSp&&this.targetSp.stopAllActions();
---------------------------------------
==========================================================================E
==================================679==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.uniqueID=ty.uniqueID||0;
ty.uniqueID=(ty.uniqueID + 1);
return ty.uniqueID;
---------------------------------------
==========================================================================E
==================================680==================================S
------------------Argv------------------
a,b,c,d,e,f,h,g,j,k
---------------------------------------
----------------Content----------------
_local0=20;
_local0=b;
b = false;
b = e;
c = "editboxStyle_pack39_edit_text";
f = "";
e = b && e || (e != null) && c || f || a.getContentSize();
e.width=(e.width - _local0);
if(j){
e.width=(e.width + j);
}
if(j){
j.setPosition(cc.p(((e.width + _local0) * 0.5),(e.height * 0.5)));
b&&j.setInputMode(cc.EDITBOX_INPUT_MODE_PHONENUMBER);
h&&j.setMaxLength(h);
g&&j.setTag(g);
j.setDelegate(d);
a.addChild(j);
j.setPlaceHolder(f);
}
return j;
---------------------------------------
==========================================================================E
==================================681==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
_local0="";
_local0=a&&a.getString();
return _local0;
---------------------------------------
==========================================================================E
==================================682==================================S
------------------Argv------------------
a,b,arguments
---------------------------------------
----------------Content----------------
_local1=arguments;
_local0=_local1.length;
while(_local0){
a = _local1[(_local0 + 1)]||a.replace(RegExp((("\{" + _local0) + "\}"),"gm"),"");
_local0=(_local0 - 1);
}
return a;
---------------------------------------
==========================================================================E
==================================683==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
_local0=cc.Director.getInstance().getWinSize();
_local0=new cc.RenderTexture(_local0.width,_local0.height,cc.Texture2D.PIXEL_FORMAT_RGBA8888);
_local0.begin();
cc.director.getRunningScene().visit();
_local0.end();
return _local0;
---------------------------------------
==========================================================================E
==================================684==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
_aliased4543=jsb.CaptureScreenSprite.create();
_aliased4543.setOnCallback(function () { __FUNC_685__ });
ty.DisplayUtil._screenCapture(_aliased4543);
return _aliased4543;
---------------------------------------
==========================================================================E
==================================685==================================S
------------------Argv------------------
b
---------------------------------------
----------------Content----------------
_screenCaptureBoo = true;
_aliased4543.captureScreenTexture=b;
_aliased4543.runAction(cc.Sequence.create(cc.DelayTime.create(0.01),cc.CallFunc.create(ty.DisplayUtil._screenCaptureEnd,ty.DisplayUtil,_aliased4543)));
---------------------------------------
==========================================================================E
==================================686==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
a.scaleSX=2;
a.captureScreen(a.scaleSX);
---------------------------------------
==========================================================================E
==================================687==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0=cc.view.getFrameSize();
_local1=(_local0.width / _local0.height);
(_local1 > 1.5)?_local0=(640 / _local0.height):(_local1 < 1.5)?_local0=(960 / _local0.width):_local0=1;
_local1=ty.DisplayUtil.getScreenBlurSprite(a.captureScreenTexture,0.4,10,4);
_local1.setScale(((_local1.getScale() * a.scaleSX) * _local0));
a.addChild(_local1,1,1);
a.maskLayer&&a.maskLayer.setVisible(true);
---------------------------------------
==========================================================================E
==================================688==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
b = 10;
c = 4;
a.setAnchorPoint(b || c || cc.p(0,0));
ty.ShaderUtil.blur(a,b,c);
a = ty.DisplayUtil.getSpriteCopy(a);
a.getTexture().setAntiAliasTexParameters();
a.setAnchorPoint(cc.p(0,0));
return a;
---------------------------------------
==========================================================================E
==================================689==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
a.getParent().removeChild(a,true);
---------------------------------------
==========================================================================E
==================================690==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0=a.getAnchorPoint();
a.setAnchorPoint(cc.p(0,0));
_local1=new cc.RenderTexture(a.getContentSize().width,a.getContentSize().height,cc.Texture2D.PIXEL_FORMAT_RGBA8888);
_local1.begin();
a.visit();
_local1.end();
a.setAnchorPoint(_local0);
a = cc.Sprite.createWithSpriteFrame(_local1.getSprite().getSpriteFrame());
a.setAnchorPoint(_local0);
return a;
---------------------------------------
==========================================================================E
==================================691==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
_local0=b||0.4;
a?b = cc.Sprite.createWithTexture(a):b = ty.DisplayUtil.getScreenSprite();
b.setScale(_local0);
b = ty.DisplayUtil._screenBlurSp(b,c,d);
a&&b.setFlippedY(true);
b.setScale((1 / _local0));
return b;
---------------------------------------
==========================================================================E
==================================692==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
_local0=cc.director.getWinSize();
_local0=a.getParent().convertToNodeSpace(cc.p((_local0.width * 0.5),(_local0.height * 0.5)));
if(b){
b = cc.MoveTo.create(b,_local0);
b = ty.DisplayUtil.getEaseAction(b,c,d);
a.runAction(b);
} else {
}
a.setPosition(_local0);
---------------------------------------
==========================================================================E
==================================693==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
if(!(a) || !(a.isVisible())){
return false;
}
a = a.getParent();
while(a){
if(!(a.isVisible())){
return false;
}
a = a.getParent();
}
return true;
---------------------------------------
==========================================================================E
==================================694==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
if(!(b) || !(tm.Utils.isNodeVisible(b))){
return false;
}
_local0=b.getParent();
if(!(_local0)){
return false;
}
_local0=_local0.convertToNodeSpace(ptWorld);
_local1=b.getBoundingBox();
return cc.rectContainsPoint(_local1,_local0);
---------------------------------------
==========================================================================E
==================================695==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
b = ty.DisplayUtil.getBPosInAContainer(a,b);
c = cc.MoveTo.create(c,b);
c = ty.DisplayUtil.getEaseAction(c,d,e);
a.runAction(c);
---------------------------------------
==========================================================================E
==================================696==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
_local0=a.getParent();
a.retain();
_local0.removeChild(a);
c||b.addChild(a,0);
a.release();
---------------------------------------
==========================================================================E
==================================697==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
c = 3;
return c||(b == "easeIn")?a.easing(cc.easeIn(c)):(b == "easeOut")?a.easeOut(cc.easeIn(c)):(b == "easeInOut")?a.easeInOut(cc.easeIn(c)):(b == "easeExponentialIn")?a.easing(cc.easeExponentialIn()):(b == "easeExponentialOut")?a.easing(cc.easeExponentialOut()):(b == "easeExponentialInOut")?a.easing(cc.easeExponentialInOut()):(b == "easeSineIn")?a.easing(cc.easeSineIn()):(b == "easeSineOut")?a.easing(cc.easeSineOut()):(b == "easeSineInOut")?a.easing(cc.easeSineInOut()):(b == "easeElasticIn")?a.easing(cc.easeElasticIn()):(b == "easeElasticOut")?a.easing(cc.easeElasticOut()):(b == "easeElasticInOut")?a.easing(cc.easeElasticInOut(c)):(b == "easeBounceIn")?a.easing(cc.easeBounceIn()):(b == "easeBounceOut")?a.easing(cc.easeBounceOut()):(b == "easeBounceInOut")?a.easing(cc.easeBounceInOut()):(b == "easeBackIn")?a.easing(cc.easeBackIn()):(b == "easeBackOut")?a.easing(cc.easeBackOut()):(b == "easeBackInOut")?a.easing(cc.easeBackInOut()):;
---------------------------------------
==========================================================================E
==================================698==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
return a.getParent().convertToNodeSpace(b.getParent().convertToWorldSpace(b.getPosition()));
---------------------------------------
==========================================================================E
==================================699==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
return a.convertToNodeSpace(b);
---------------------------------------
==========================================================================E
==================================700==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0=this.getLabelTTF(b,"ArialMT",24,cc.size(200,0),cc.TEXT_ALIGNMENT_CENTER,cc.VERTICAL_TEXT_ALIGNMENT_TOP,false,0,0,0);
_local0.setPosition(a.getPosition());
_local0.setAnchorPoint(cc.p(0.5,0.5));
a.getParent().addChild(_local0,a.getLocalZOrder());
return _local0;
---------------------------------------
==========================================================================E
==================================701==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0=a.split(".");
return new ty.global[_local0[0]][_local0[1]](b);
---------------------------------------
==========================================================================E
==================================702==================================S
------------------Argv------------------
a,b,c,d,e,f,h,g,j,k
---------------------------------------
----------------Content----------------
a = cc.LabelTTF.create(a,b,c,d,e,f);
h&&a.setDimensions(d.width,d.height);
a.color=cc.color(g,j,k);
return a;
---------------------------------------
==========================================================================E
==================================703==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0=a.split(".");
if(b){
_local0=cc.spriteFrameCache;
_local0.addSpriteFrames((b + ".plist"),(b + ".png"));
_tempSpriteFrame = _local0.getSpriteFrame((a + ".png"));
_local0=new cc.Sprite(_tempSpriteFrame);
} else {
}
_local0=new cc.Sprite((a + ".png"));
return _local0;
---------------------------------------
==========================================================================E
==================================704==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
_local0=ty.DisplayUtil.screenTexture();
return cc.Sprite.createWithTexture(_local0.getSprite().getTexture());
---------------------------------------
==========================================================================E
==================================705==================================S
------------------Argv------------------
a,b,c,d,e,f,h,g,j,k,l,n,o,m
---------------------------------------
----------------Content----------------
_local0=[];
_local1=0;
_local2=(Math.PI / 180);
_local3=b.x;
_local4=b.y;
_local5=c;
c = a.length;
g&&_local0.push(b);
while((_local1 <= c)){
_local1=(_local1 + 1);
_local1=0;
b = (_local3 + (_local5 * Math.cos((e * _local2))));
g = (_local4 + (_local5 * Math.sin((e * _local2))));
f = (f + h);
e = (e + f);
_local5=(_local5 + d);
_local0.push(cc.p(b,g));
}
d = 0;
while((d < c)){
a[d].setPosition(_local0[d]);
d = (d + 1);
}
---------------------------------------
==========================================================================E
==================================706==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
_local0=[cc.CONTROL_STATE_NORMAL,cc.CONTROL_STATE_HIGHLIGHTED,cc.CONTROL_STATE_DISABLED];
_local1=0;
while((_local1 < b.length)){
_local2=cc.Scale9Sprite.createWithSpriteFrameName(b[_local1]);
_local2&&a.setBackgroundSpriteForState(_local2,_local0[_local1]);
_local1=(_local1 + 1);
_local1=0;
}
---------------------------------------
==========================================================================E
==================================707==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
_local0=a.getTexture().getContentSize();
a.setScaleX((b.width / _local0.width));
a.setScaleY((b.height / _local0.height));
---------------------------------------
==========================================================================E
==================================708==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
_local0=a.getContentSize();
a.setScaleX((b.width / _local0.width));
a.setScaleY((b.height / _local0.height));
a.setOpacity(c);
---------------------------------------
==========================================================================E
==================================709==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
_local0=ty.DisplayUtil.getRectLayer();
_local1=a.getContentSize();
ty.DisplayUtil.scaleDisToSize(_local0,_local1,b);
_local2=a.getAnchorPoint();
a.isIgnoreAnchorPointForPosition()?_local0.setAnchorPoint(cc.p(0,0)):_local0.setAnchorPoint(_local2);
_local0.setPosition(cc.p((_local2.x * _local1.width),(_local2.y * _local1.height)));
a.addChild(_local0);
ty.DisplayUtil.showBoundingBoxPoint(_local0);
---------------------------------------
==========================================================================E
==================================710==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
_local0=a.getParent();
_local1=a.getBoundingBox();
_local2=a.getAnchorPoint();
_local2=0;
while((_local2 < 6)){
_local3=ty.DisplayUtil.getRectLayer();
if((_local2 == 0)){
ty.DisplayUtil.scaleDisToSize(_local3,cc.size(_local1.width,1),255);
_local3.setPosition(cc.p(_local1.x,_local1.y));
_local3.setAnchorPoint(cc.p(0,0.5));
} else if((_local2 == 1)){
ty.DisplayUtil.scaleDisToSize(_local3,cc.size(1,_local1.height),255);
_local3.setPosition(cc.p((_local1.x + _local1.width),_local1.y));
_local3.setAnchorPoint(cc.p(0.5,0));
} else if((_local2 == 2)){
ty.DisplayUtil.scaleDisToSize(_local3,cc.size(_local1.width,1),255);
_local3.setPosition(cc.p((_local1.x + _local1.width),(_local1.y + _local1.height)));
_local3.setAnchorPoint(cc.p(1,0));
} else if((_local2 == 3)){
ty.DisplayUtil.scaleDisToSize(_local3,cc.size(1,_local1.height),255);
_local3.setPosition(cc.p(_local1.x,(_local1.y + _local1.height)));
_local3.setAnchorPoint(cc.p(0.5,1));
} else if((_local2 == 4)){
ty.DisplayUtil.scaleDisToSize(_local3,cc.size(15,3),255);
_local3.setPosition(a.getPosition());
_local3.setRotation(45);
} else if((_local2 == 5)){
ty.DisplayUtil.scaleDisToSize(_local3,cc.size(3,15),255);
_local3.setPosition(a.getPosition());
_local3.setRotation(45);
}
_local0.addChild(_local3);
_local2=(_local2 + 1);
_local2=0;
}
---------------------------------------
==========================================================================E
==================================711==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
_local0=new cc.LayerColor(cc.color(25,255,50,255));
_local0.ignoreAnchor=false;
_local0.setContentSize(100,100);
return _local0;
---------------------------------------
==========================================================================E
==================================712==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
_local0=cc.Layer.create();
_local0.setPosition(cc.p(0,0));
_local0.setAnchorPoint(cc.p(0,0));
while((a.getChildren().length > 0)){
_local1=a.getChildren()[0];
_local1.retain();
a.removeChild(_local1);
_local0.addChild(_local1);
_local1.release();
}
_local1=cc.ClippingNode.create();
_local1.setAnchorPoint(cc.p(0,0));
_local1.setStencil(b);
c?_local1.setInverted(true):_local1.setInverted(false);
_local1.setAlphaThreshold(0);
_local1.setPosition(cc.p(0,0));
b.removeFromParent(false);
_local1.addChild(_local0);
a.addChild(_local1);
return _local0;
---------------------------------------
==========================================================================E
==================================713==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
c?a.getRootNode().animationManager.runAnimationsForSequenceNamedTweenDuration(b,c):a.getRootNode().animationManager.runAnimationsForSequenceNamed(b);
d && e && a.getRootNode().animationManager.setCompletedAnimationCallback(d,e);
---------------------------------------
==========================================================================E
==================================714==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
_local0=a.getChildren();
_local1=0;
while((_local1 < _local0.length)){
this.eachNode(_local0[_local1],b);
_local1=(_local1 + 1);
_local1=0;
}
b(a);
---------------------------------------
==========================================================================E
==================================715==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
a.setTexture(b);
_local0=b.getContentSize();
a.setTextureRect(cc.rect(0,0,_local0.width,_local0.height));
---------------------------------------
==========================================================================E
==================================716==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
return ty.SpecialControl.getProgressBarControl();
---------------------------------------
==========================================================================E
==================================717==================================S
------------------Argv------------------
a,b,c,d
---------------------------------------
----------------Content----------------
if(!(ty.DisplayUtil.imgDownload)){
_local0=cc.Class.extend({_TAG:"ty.DisplayUtil.imgDownload",ctor:function () { __FUNC_718__ },onDestroy:function () { __FUNC_719__ },downloadSprite:function () { __FUNC_720__ },onFinishDownLoad:function () { __FUNC_721__ }});
ty.DisplayUtil.imgDownload=new _local0();
}
ty.DisplayUtil.imgDownload.downloadSprite(a,b,c);
---------------------------------------
==========================================================================E
==================================718==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.AsyncImgDownload.addAsyncImgDownloadObserver(ty.EventType.TUI_IMG_DOWNLOAD,this,this.onFinishDownLoad);
---------------------------------------
==========================================================================E
==================================719==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.AsyncImgDownload.removeAsyncImgDownloadObserver(ty.EventType.TUI_IMG_DOWNLOAD,this,this.onFinishDownLoad);
---------------------------------------
==========================================================================E
==================================720==================================S
------------------Argv------------------
a,b,c,d,j
---------------------------------------
----------------Content----------------
if((b.indexOf("http://") >= 0)){
_local0=cc.Class.extend({_TAG:"ty.DisplayUtil.imgDownload",ctor:function () { __FUNC_718__ },onDestroy:function () { __FUNC_719__ },downloadSprite:function () { __FUNC_720__ },onFinishDownLoad:function () { __FUNC_721__ }});
_local0=d&&a.getContentSize();
ty.AsyncImgDownload.downloadImgAsync(ty.EventType.TUI_IMG_DOWNLOAD,b,c,{sprite:a,contentSize:_local0});
a.isDownloadSprite=this;
}
---------------------------------------
==========================================================================E
==================================721==================================S
------------------Argv------------------
a,b,c,d,j
---------------------------------------
----------------Content----------------
if(a && (a.statusCode == 200) && (a.openErr != 1) && (a.writeErr != 1) && (typeof b.sprite != "undefined")){
_local0=b.sprite;
_local1=b.contentSize;
_local2=cc.TextureCache.getInstance().addImage(a.path);
ty.DisplayUtil.replaceTexture(_local0,_local2);
if(_local1){
_local2=_local0.getContentSize();
_local0.setScaleX((_local1.width / _local2.width));
_local0.setScaleY((_local1.height / _local2.height));
}
_local0.isDownloadSprite=null;
}
---------------------------------------
==========================================================================E
==================================722==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
if(cc.sys.isNative){
_local0=ty.ShaderUtil.programs.gray;
if(!(_local0)){
_local0=cc.GLProgram.createWithFilenames("games/common/img/shader/ccPositionTextureColor_noMVP_vert.vsh","games/common/img/shader/gray.fsh");
ty.ShaderUtil.programs.gray=_local0;
}
gl.useProgram(_local0.getProgram());
a.shaderProgram=_local0;
}
---------------------------------------
==========================================================================E
==================================723==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
if(cc.sys.isNative){
_aliased2316=ty.ShaderUtil.programs[("sepia" + _aliased4543)];
if(!(_aliased2316)){
_aliased2882=cc.GLProgram.createWithFilenames("games/common/img/shader/ccPositionTextureColor_noMVP_vert.vsh","games/common/img/shader/sepia.fsh");
ty.ShaderUtil.programs[("sepia" + _aliased4543)]=_aliased2882;
}
gl.useProgram(_aliased2882.getProgram());
a.shaderProgram=_aliased2882;
a.scheduleUpdate();
a.update=function () { __FUNC_724__ };
}
---------------------------------------
==========================================================================E
==================================724==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
_aliased2882.use();
_aliased2882.setUniformsForBuiltins();
_local0=_aliased2882.getUniformLocationForName("u_degree");
gl.uniform1f(_local0,_aliased4543);
---------------------------------------
==========================================================================E
==================================725==================================S
------------------Argv------------------
a,b,c,d,e,f
---------------------------------------
----------------Content----------------
if(cc.sys.isNative){
_local0=ty.ShaderUtil.programs.outline;
if(!(_local0)){
_local0=cc.GLProgram.createWithFilenames("games/common/img/shader/ccPositionTextureColor_noMVP_vert.vsh","games/common/img/shader/outline.fsh");
ty.ShaderUtil.programs.outline=_local0;
}
gl.useProgram(_local0.getProgram());
a.shaderProgram=_local0;
_local0=a.getGLProgramState();
_local0.setUniformFloat("u_threshold",b);
_local0.setUniformVec3("u_outlineColor",{x:(c / 255),y:(d / 255),z:(e / 255)});
a.setGLProgramState(_local0);
}
---------------------------------------
==========================================================================E
==================================726==================================S
------------------Argv------------------
a,b,c,d,e
---------------------------------------
----------------Content----------------
if(cc.sys.isNative){
_local0=ty.ShaderUtil.programs.blur;
if(!(_local0)){
_local0=cc.GLProgram.createWithFilenames("games/common/img/shader/ccPositionTextureColor_noMVP_vert.vsh","games/common/img/shader/example_Blur.fsh");
ty.ShaderUtil.programs.blur=_local0;
}
_local0=cc.GLProgramState.getOrCreateWithGLProgram(_local0);
_local1=a.getTexture().getContentSizeInPixels();
_local0.setUniformVec2("resolution",{x:_local1.width,y:_local1.height});
_local0.setUniformFloat("blurRadius",b);
_local0.setUniformFloat("sampleNum",c);
a.setGLProgramState(_local0);
}
---------------------------------------
==========================================================================E
==================================727==================================S
------------------Argv------------------
a,b,c
---------------------------------------
----------------Content----------------
if(cc.sys.isNative){
console.log("blur2 - - - - - ");
_local0=ty.ShaderUtil.programs.blur_2;
if(!(_local0)){
_local0=cc.GLProgram.createWithFilenames("games/common/img/shader/ccPositionTextureColor_vert.vsh","games/common/img/shader/blur_2.fsh");
ty.ShaderUtil.programs.blur_2=_local0;
}
_local0=cc.GLProgramState.getOrCreateWithGLProgram(_local0);
_local0.setUniformFloat("dis",b);
a.setGLProgramState(_local0);
}
---------------------------------------
==========================================================================E
==================================728==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
this.preSaveBlur();
---------------------------------------
==========================================================================E
==================================729==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
_local0=ty.ShaderUtil.programs.blur;
if(!(_local0)){
_local0=cc.GLProgram.createWithFilenames("games/common/img/shader/ccPositionTextureColor_noMVP_vert.vsh","games/common/img/shader/example_Blur.fsh");
ty.ShaderUtil.programs.blur=_local0;
}
---------------------------------------
==========================================================================E
==================================730==================================S
------------------Argv------------------
a,b
---------------------------------------
----------------Content----------------
ty.LOGD("TYBOOT"," ty.init be called.");
ty.loginUrl="http://open.tuyoo.com/";
ty.LOG=new ty._Log();
ty.SystemInfo=new ty._SystemInfo();
ty.staticSystemInfo=JSON.parse(ty.SystemInfo.getAllStaticInfo());
ty.LOG.setConfig({level:ty.SystemInfo.getConfig().debugLevel});
ty.TCPConnection=new ty._TCPConnection();
ty.TCPConnection.init();
ty.FileManager=new ty._FileManager();
ty.NotificationManager=new ty._NotificationManager();
ty.NotificationManager.getInitNotification();
ty.Http=new ty._Http();
ty.sendMsg=new ty._SendMS();
ty.HeartBeat=new ty._HeartBeat();
ty.VoiceRecorder=new ty._VoiceRecorder();
ty.LocalStorage=new ty._LocalStorage();
ty.Util=new ty._Util();
ty.LOGD("TYBOOT","create ty.Util...");
ty.AsyncImgDownload=new ty._AsyncImgDownload();
ty.LOGD("TYBOOT","create ty.Util done...");
ty.EncodeDecode=new ty._EncodeDecode();
ty.NewTimer=new ty._NewTimer();
ty.isSmallScreen=false;
cc.Director.getInstance().setIsSmallScene(ty.isSmallScreen);
ty.initJs2native();
ty.SceneManager=new ty._SceneManager();
ty.Dump=new ty._Dump();
ty.EventManager=new ty._EventManager();
ty.sdk_interface_manager=new ty.SdkInterfaceManager();
_local0=jsb.fileUtils.getSearchPaths();
_local1=0;
while((_local1 < _local0.length)){
ty.LOGD("TYBOOT",((("TYFramework_boot searchPaths[" + _local1) + "]=") + _local0[_local1]));
_local1=(_local1 + 1);
_local1=0;
}
if(ty.SystemInfo.getConfig().debug){
ty.LOGD("TYBOOT",("debug version! --" + ty.SystemInfo.getConfig().shellScript.debug));
require(ty.SystemInfo.getConfig().shellScript.debug);
} else {
}
require(ty.SystemInfo.getConfig().shellScript.release);
---------------------------------------
==========================================================================E
==================================731==================================S
------------------Argv------------------

---------------------------------------
----------------Content----------------
ty.LOG.saveLog();
cc.Director.getInstance().end();
---------------------------------------
==========================================================================E
==================================732==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
ty.LOGD("TYDUMP",("
" + ty.Dump.dump(a)));
---------------------------------------
==========================================================================E
==================================733==================================S
------------------Argv------------------
a
---------------------------------------
----------------Content----------------
_local0=ty.Util.getDesignResolutionSize();
ty.LOGD("TYBOOT",(((" DesignResolution size " + _local0.width) + " : ") + _local0.height));
ty.Util.setDesignResolutionSize(960,640,"kResolutionFixedHeight");
cc.Director.getInstance().setContentScaleFactor(1);
_local0=ty.Util.getDesignResolutionSize();
ty.LOGD("TYBOOT",(((" realDesignResolution size " + _local0.width) + " : ") + _local0.height));
cc.BuilderReader.setResourcePath("frame/img/");
testAll();
---------------------------------------
==========================================================================E
