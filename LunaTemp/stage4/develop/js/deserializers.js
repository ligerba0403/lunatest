var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i204 = root || request.c( 'UnityEngine.JointSpring' )
  var i205 = data
  i204.spring = i205[0]
  i204.damper = i205[1]
  i204.targetPosition = i205[2]
  return i204
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i206 = root || request.c( 'UnityEngine.JointMotor' )
  var i207 = data
  i206.m_TargetVelocity = i207[0]
  i206.m_Force = i207[1]
  i206.m_FreeSpin = i207[2]
  return i206
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i208 = root || request.c( 'UnityEngine.JointLimits' )
  var i209 = data
  i208.m_Min = i209[0]
  i208.m_Max = i209[1]
  i208.m_Bounciness = i209[2]
  i208.m_BounceMinVelocity = i209[3]
  i208.m_ContactDistance = i209[4]
  i208.minBounce = i209[5]
  i208.maxBounce = i209[6]
  return i208
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i210 = root || request.c( 'UnityEngine.JointDrive' )
  var i211 = data
  i210.m_PositionSpring = i211[0]
  i210.m_PositionDamper = i211[1]
  i210.m_MaximumForce = i211[2]
  return i210
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i212 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i213 = data
  i212.m_Spring = i213[0]
  i212.m_Damper = i213[1]
  return i212
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i214 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i215 = data
  i214.m_Limit = i215[0]
  i214.m_Bounciness = i215[1]
  i214.m_ContactDistance = i215[2]
  return i214
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i216 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i217 = data
  i216.m_ExtremumSlip = i217[0]
  i216.m_ExtremumValue = i217[1]
  i216.m_AsymptoteSlip = i217[2]
  i216.m_AsymptoteValue = i217[3]
  i216.m_Stiffness = i217[4]
  return i216
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i218 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i219 = data
  i218.m_LowerAngle = i219[0]
  i218.m_UpperAngle = i219[1]
  return i218
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i220 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i221 = data
  i220.m_MotorSpeed = i221[0]
  i220.m_MaximumMotorTorque = i221[1]
  return i220
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i222 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i223 = data
  i222.m_DampingRatio = i223[0]
  i222.m_Frequency = i223[1]
  i222.m_Angle = i223[2]
  return i222
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i224 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i225 = data
  i224.m_LowerTranslation = i225[0]
  i224.m_UpperTranslation = i225[1]
  return i224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i226 = root || new pc.UnityMaterial()
  var i227 = data
  i226.name = i227[0]
  request.r(i227[1], i227[2], 0, i226, 'shader')
  i226.renderQueue = i227[3]
  i226.enableInstancing = !!i227[4]
  var i229 = i227[5]
  var i228 = []
  for(var i = 0; i < i229.length; i += 1) {
    i228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i229[i + 0]) );
  }
  i226.floatParameters = i228
  var i231 = i227[6]
  var i230 = []
  for(var i = 0; i < i231.length; i += 1) {
    i230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i231[i + 0]) );
  }
  i226.colorParameters = i230
  var i233 = i227[7]
  var i232 = []
  for(var i = 0; i < i233.length; i += 1) {
    i232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i233[i + 0]) );
  }
  i226.vectorParameters = i232
  var i235 = i227[8]
  var i234 = []
  for(var i = 0; i < i235.length; i += 1) {
    i234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i235[i + 0]) );
  }
  i226.textureParameters = i234
  var i237 = i227[9]
  var i236 = []
  for(var i = 0; i < i237.length; i += 1) {
    i236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i237[i + 0]) );
  }
  i226.materialFlags = i236
  return i226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i241 = data
  i240.name = i241[0]
  i240.value = i241[1]
  return i240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i245 = data
  i244.name = i245[0]
  i244.value = new pc.Color(i245[1], i245[2], i245[3], i245[4])
  return i244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i249 = data
  i248.name = i249[0]
  i248.value = new pc.Vec4( i249[1], i249[2], i249[3], i249[4] )
  return i248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i253 = data
  i252.name = i253[0]
  request.r(i253[1], i253[2], 0, i252, 'value')
  return i252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i257 = data
  i256.name = i257[0]
  i256.enabled = !!i257[1]
  return i256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i259 = data
  i258.name = i259[0]
  i258.width = i259[1]
  i258.height = i259[2]
  i258.mipmapCount = i259[3]
  i258.anisoLevel = i259[4]
  i258.filterMode = i259[5]
  i258.hdr = !!i259[6]
  i258.format = i259[7]
  i258.wrapMode = i259[8]
  i258.alphaIsTransparency = !!i259[9]
  i258.alphaSource = i259[10]
  return i258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i261 = data
  i260.name = i261[0]
  i260.atlasId = i261[1]
  i260.mipmapCount = i261[2]
  i260.hdr = !!i261[3]
  i260.size = i261[4]
  i260.anisoLevel = i261[5]
  i260.filterMode = i261[6]
  i260.wrapMode = i261[7]
  var i263 = i261[8]
  var i262 = []
  for(var i = 0; i < i263.length; i += 4) {
    i262.push( UnityEngine.Rect.MinMaxRect(i263[i + 0], i263[i + 1], i263[i + 2], i263[i + 3]) );
  }
  i260.rects = i262
  return i260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i267 = data
  i266.name = i267[0]
  i266.index = i267[1]
  i266.startup = !!i267[2]
  return i266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i269 = data
  i268.position = new pc.Vec3( i269[0], i269[1], i269[2] )
  i268.scale = new pc.Vec3( i269[3], i269[4], i269[5] )
  i268.rotation = new pc.Quat(i269[6], i269[7], i269[8], i269[9])
  return i268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i271 = data
  i270.enabled = !!i271[0]
  i270.aspect = i271[1]
  i270.orthographic = !!i271[2]
  i270.orthographicSize = i271[3]
  i270.backgroundColor = new pc.Color(i271[4], i271[5], i271[6], i271[7])
  i270.nearClipPlane = i271[8]
  i270.farClipPlane = i271[9]
  i270.fieldOfView = i271[10]
  i270.depth = i271[11]
  i270.clearFlags = i271[12]
  i270.cullingMask = i271[13]
  i270.rect = i271[14]
  request.r(i271[15], i271[16], 0, i270, 'targetTexture')
  i270.usePhysicalProperties = !!i271[17]
  i270.focalLength = i271[18]
  i270.sensorSize = new pc.Vec2( i271[19], i271[20] )
  i270.lensShift = new pc.Vec2( i271[21], i271[22] )
  i270.gateFit = i271[23]
  return i270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i273 = data
  i272.name = i273[0]
  i272.tagId = i273[1]
  i272.enabled = !!i273[2]
  i272.isStatic = !!i273[3]
  i272.layer = i273[4]
  return i272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i275 = data
  i274.enabled = !!i275[0]
  i274.type = i275[1]
  i274.color = new pc.Color(i275[2], i275[3], i275[4], i275[5])
  i274.cullingMask = i275[6]
  i274.intensity = i275[7]
  i274.range = i275[8]
  i274.spotAngle = i275[9]
  i274.shadows = i275[10]
  i274.shadowNormalBias = i275[11]
  i274.shadowBias = i275[12]
  i274.shadowStrength = i275[13]
  i274.shadowResolution = i275[14]
  i274.lightmapBakeType = i275[15]
  i274.renderMode = i275[16]
  request.r(i275[17], i275[18], 0, i274, 'cookie')
  i274.cookieSize = i275[19]
  return i274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i277 = data
  i276.ambientIntensity = i277[0]
  i276.reflectionIntensity = i277[1]
  i276.ambientMode = i277[2]
  i276.ambientLight = new pc.Color(i277[3], i277[4], i277[5], i277[6])
  i276.ambientSkyColor = new pc.Color(i277[7], i277[8], i277[9], i277[10])
  i276.ambientGroundColor = new pc.Color(i277[11], i277[12], i277[13], i277[14])
  i276.ambientEquatorColor = new pc.Color(i277[15], i277[16], i277[17], i277[18])
  i276.fogColor = new pc.Color(i277[19], i277[20], i277[21], i277[22])
  i276.fogEndDistance = i277[23]
  i276.fogStartDistance = i277[24]
  i276.fogDensity = i277[25]
  i276.fog = !!i277[26]
  request.r(i277[27], i277[28], 0, i276, 'skybox')
  i276.fogMode = i277[29]
  var i279 = i277[30]
  var i278 = []
  for(var i = 0; i < i279.length; i += 1) {
    i278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i279[i + 0]) );
  }
  i276.lightmaps = i278
  i276.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i277[31], i276.lightProbes)
  i276.lightmapsMode = i277[32]
  i276.mixedBakeMode = i277[33]
  i276.environmentLightingMode = i277[34]
  i276.ambientProbe = new pc.SphericalHarmonicsL2(i277[35])
  i276.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i277[36])
  i276.useReferenceAmbientProbe = !!i277[37]
  request.r(i277[38], i277[39], 0, i276, 'customReflection')
  request.r(i277[40], i277[41], 0, i276, 'defaultReflection')
  i276.defaultReflectionMode = i277[42]
  i276.defaultReflectionResolution = i277[43]
  i276.sunLightObjectId = i277[44]
  i276.pixelLightCount = i277[45]
  i276.defaultReflectionHDR = !!i277[46]
  i276.hasLightDataAsset = !!i277[47]
  i276.hasManualGenerate = !!i277[48]
  return i276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i283 = data
  request.r(i283[0], i283[1], 0, i282, 'lightmapColor')
  request.r(i283[2], i283[3], 0, i282, 'lightmapDirection')
  return i282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i284 = root || new UnityEngine.LightProbes()
  var i285 = data
  return i284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i293 = data
  var i295 = i293[0]
  var i294 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i295.length; i += 1) {
    i294.add(i295[i + 0]);
  }
  i292.invalidShaderVariants = i294
  i292.name = i293[1]
  i292.guid = i293[2]
  var i297 = i293[3]
  var i296 = []
  for(var i = 0; i < i297.length; i += 1) {
    i296.push( i297[i + 0] );
  }
  i292.shaderDefinedKeywords = i296
  var i299 = i293[4]
  var i298 = []
  for(var i = 0; i < i299.length; i += 1) {
    i298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i299[i + 0]) );
  }
  i292.passes = i298
  var i301 = i293[5]
  var i300 = []
  for(var i = 0; i < i301.length; i += 1) {
    i300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i301[i + 0]) );
  }
  i292.usePasses = i300
  var i303 = i293[6]
  var i302 = []
  for(var i = 0; i < i303.length; i += 1) {
    i302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i303[i + 0]) );
  }
  i292.defaultParameterValues = i302
  request.r(i293[7], i293[8], 0, i292, 'unityFallbackShader')
  i292.readDepth = !!i293[9]
  i292.isCreatedByShaderGraph = !!i293[10]
  i292.usedBatchUniforms = i293[11]
  return i292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i310 = root || new pc.UnityShaderPass()
  var i311 = data
  i310.id = i311[0]
  i310.subShaderIndex = i311[1]
  i310.name = i311[2]
  i310.passType = i311[3]
  i310.usePass = !!i311[4]
  i310.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[5], i310.zTest)
  i310.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[6], i310.zWrite)
  i310.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[7], i310.culling)
  i310.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i311[8], i310.blending)
  i310.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i311[9], i310.alphaBlending)
  i310.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[10], i310.colorWriteMask)
  i310.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[11], i310.offsetUnits)
  i310.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[12], i310.offsetFactor)
  i310.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[13], i310.stencilRef)
  i310.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[14], i310.stencilReadMask)
  i310.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[15], i310.stencilWriteMask)
  i310.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i311[16], i310.stencilOp)
  i310.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i311[17], i310.stencilOpFront)
  i310.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i311[18], i310.stencilOpBack)
  var i313 = i311[19]
  var i312 = []
  for(var i = 0; i < i313.length; i += 1) {
    i312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i313[i + 0]) );
  }
  i310.tags = i312
  var i315 = i311[20]
  var i314 = []
  for(var i = 0; i < i315.length; i += 1) {
    i314.push( i315[i + 0] );
  }
  i310.passDefinedKeywords = i314
  var i317 = i311[21]
  var i316 = []
  for(var i = 0; i < i317.length; i += 1) {
    i316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i317[i + 0]) );
  }
  i310.passDefinedKeywordGroups = i316
  var i319 = i311[22]
  var i318 = []
  for(var i = 0; i < i319.length; i += 1) {
    i318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i319[i + 0]) );
  }
  i310.variants = i318
  var i321 = i311[23]
  var i320 = []
  for(var i = 0; i < i321.length; i += 1) {
    i320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i321[i + 0]) );
  }
  i310.excludedVariants = i320
  i310.hasDepthReader = !!i311[24]
  return i310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i323 = data
  i322.val = i323[0]
  i322.name = i323[1]
  return i322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i325 = data
  i324.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i325[0], i324.src)
  i324.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i325[1], i324.dst)
  i324.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i325[2], i324.op)
  return i324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i327 = data
  i326.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i327[0], i326.pass)
  i326.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i327[1], i326.fail)
  i326.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i327[2], i326.zFail)
  i326.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i327[3], i326.comp)
  return i326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i331 = data
  i330.name = i331[0]
  i330.value = i331[1]
  return i330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i335 = data
  var i337 = i335[0]
  var i336 = []
  for(var i = 0; i < i337.length; i += 1) {
    i336.push( i337[i + 0] );
  }
  i334.keywords = i336
  i334.hasDiscard = !!i335[1]
  return i334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i341 = data
  i340.passId = i341[0]
  i340.subShaderIndex = i341[1]
  var i343 = i341[2]
  var i342 = []
  for(var i = 0; i < i343.length; i += 1) {
    i342.push( i343[i + 0] );
  }
  i340.keywords = i342
  i340.vertexProgram = i341[3]
  i340.fragmentProgram = i341[4]
  i340.readDepth = !!i341[5]
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i347 = data
  request.r(i347[0], i347[1], 0, i346, 'shader')
  i346.pass = i347[2]
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i351 = data
  i350.name = i351[0]
  i350.type = i351[1]
  i350.value = new pc.Vec4( i351[2], i351[3], i351[4], i351[5] )
  i350.textureValue = i351[6]
  return i350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i353 = data
  var i355 = i353[0]
  var i354 = []
  for(var i = 0; i < i355.length; i += 1) {
    i354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i355[i + 0]) );
  }
  i352.files = i354
  i352.componentToPrefabIds = i353[1]
  return i352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i359 = data
  i358.path = i359[0]
  request.r(i359[1], i359[2], 0, i358, 'unityObject')
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i361 = data
  var i363 = i361[0]
  var i362 = []
  for(var i = 0; i < i363.length; i += 1) {
    i362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i363[i + 0]) );
  }
  i360.scriptsExecutionOrder = i362
  var i365 = i361[1]
  var i364 = []
  for(var i = 0; i < i365.length; i += 1) {
    i364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i365[i + 0]) );
  }
  i360.sortingLayers = i364
  var i367 = i361[2]
  var i366 = []
  for(var i = 0; i < i367.length; i += 1) {
    i366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i367[i + 0]) );
  }
  i360.cullingLayers = i366
  i360.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i361[3], i360.timeSettings)
  i360.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i361[4], i360.physicsSettings)
  i360.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i361[5], i360.physics2DSettings)
  i360.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i361[6], i360.qualitySettings)
  i360.enableRealtimeShadows = !!i361[7]
  i360.enableAutoInstancing = !!i361[8]
  i360.enableDynamicBatching = !!i361[9]
  i360.lightmapEncodingQuality = i361[10]
  i360.desiredColorSpace = i361[11]
  var i369 = i361[12]
  var i368 = []
  for(var i = 0; i < i369.length; i += 1) {
    i368.push( i369[i + 0] );
  }
  i360.allTags = i368
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i373 = data
  i372.name = i373[0]
  i372.value = i373[1]
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i377 = data
  i376.id = i377[0]
  i376.name = i377[1]
  i376.value = i377[2]
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i381 = data
  i380.id = i381[0]
  i380.name = i381[1]
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i383 = data
  i382.fixedDeltaTime = i383[0]
  i382.maximumDeltaTime = i383[1]
  i382.timeScale = i383[2]
  i382.maximumParticleTimestep = i383[3]
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i385 = data
  i384.gravity = new pc.Vec3( i385[0], i385[1], i385[2] )
  i384.defaultSolverIterations = i385[3]
  i384.bounceThreshold = i385[4]
  i384.autoSyncTransforms = !!i385[5]
  i384.autoSimulation = !!i385[6]
  var i387 = i385[7]
  var i386 = []
  for(var i = 0; i < i387.length; i += 1) {
    i386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i387[i + 0]) );
  }
  i384.collisionMatrix = i386
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i391 = data
  i390.enabled = !!i391[0]
  i390.layerId = i391[1]
  i390.otherLayerId = i391[2]
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i393 = data
  request.r(i393[0], i393[1], 0, i392, 'material')
  i392.gravity = new pc.Vec2( i393[2], i393[3] )
  i392.positionIterations = i393[4]
  i392.velocityIterations = i393[5]
  i392.velocityThreshold = i393[6]
  i392.maxLinearCorrection = i393[7]
  i392.maxAngularCorrection = i393[8]
  i392.maxTranslationSpeed = i393[9]
  i392.maxRotationSpeed = i393[10]
  i392.baumgarteScale = i393[11]
  i392.baumgarteTOIScale = i393[12]
  i392.timeToSleep = i393[13]
  i392.linearSleepTolerance = i393[14]
  i392.angularSleepTolerance = i393[15]
  i392.defaultContactOffset = i393[16]
  i392.autoSimulation = !!i393[17]
  i392.queriesHitTriggers = !!i393[18]
  i392.queriesStartInColliders = !!i393[19]
  i392.callbacksOnDisable = !!i393[20]
  i392.reuseCollisionCallbacks = !!i393[21]
  i392.autoSyncTransforms = !!i393[22]
  var i395 = i393[23]
  var i394 = []
  for(var i = 0; i < i395.length; i += 1) {
    i394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i395[i + 0]) );
  }
  i392.collisionMatrix = i394
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i399 = data
  i398.enabled = !!i399[0]
  i398.layerId = i399[1]
  i398.otherLayerId = i399[2]
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i401 = data
  var i403 = i401[0]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i403[i + 0]) );
  }
  i400.qualityLevels = i402
  var i405 = i401[1]
  var i404 = []
  for(var i = 0; i < i405.length; i += 1) {
    i404.push( i405[i + 0] );
  }
  i400.names = i404
  i400.shadows = i401[2]
  i400.anisotropicFiltering = i401[3]
  i400.antiAliasing = i401[4]
  i400.lodBias = i401[5]
  i400.shadowCascades = i401[6]
  i400.shadowDistance = i401[7]
  i400.shadowmaskMode = i401[8]
  i400.shadowProjection = i401[9]
  i400.shadowResolution = i401[10]
  i400.softParticles = !!i401[11]
  i400.softVegetation = !!i401[12]
  i400.activeColorSpace = i401[13]
  i400.desiredColorSpace = i401[14]
  i400.masterTextureLimit = i401[15]
  i400.maxQueuedFrames = i401[16]
  i400.particleRaycastBudget = i401[17]
  i400.pixelLightCount = i401[18]
  i400.realtimeReflectionProbes = !!i401[19]
  i400.shadowCascade2Split = i401[20]
  i400.shadowCascade4Split = new pc.Vec3( i401[21], i401[22], i401[23] )
  i400.streamingMipmapsActive = !!i401[24]
  i400.vSyncCount = i401[25]
  i400.asyncUploadBufferSize = i401[26]
  i400.asyncUploadTimeSlice = i401[27]
  i400.billboardsFaceCameraPosition = !!i401[28]
  i400.shadowNearPlaneOffset = i401[29]
  i400.streamingMipmapsMemoryBudget = i401[30]
  i400.maximumLODLevel = i401[31]
  i400.streamingMipmapsAddAllCameras = !!i401[32]
  i400.streamingMipmapsMaxLevelReduction = i401[33]
  i400.streamingMipmapsRenderersPerFrame = i401[34]
  i400.resolutionScalingFixedDPIFactor = i401[35]
  i400.streamingMipmapsMaxFileIORequests = i401[36]
  i400.currentQualityLevel = i401[37]
  return i400
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"7":[8],"9":[8],"10":[8],"11":[8],"12":[8],"13":[8],"14":[15],"16":[2],"17":[18],"19":[18],"20":[18],"21":[18],"22":[18],"23":[18],"24":[18],"25":[26],"27":[26],"28":[26],"29":[26],"30":[26],"31":[26],"32":[26],"33":[26],"34":[26],"35":[26],"36":[26],"37":[26],"38":[26],"39":[2],"40":[41],"42":[43],"44":[43],"45":[46],"47":[46],"48":[41,46],"49":[46,50],"51":[46],"52":[50,46],"53":[41],"54":[50,46],"55":[46],"56":[57],"58":[46],"59":[46],"60":[45],"61":[50,46],"62":[46],"63":[45],"64":[46],"65":[46],"66":[46],"67":[46],"68":[46],"69":[46],"70":[46],"71":[46],"72":[46],"73":[50,46],"74":[46],"75":[46],"76":[46],"77":[46],"78":[50,46],"79":[46],"80":[81],"82":[81],"83":[81],"84":[81],"85":[2],"86":[2],"87":[57],"88":[57]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.Material","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.24f1";

Deserializers.productName = "lunatutoo";

Deserializers.lunaInitializationTime = "08/31/2023 19:05:11";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "5.2.0";

Deserializers.lunaSHA = "a655a1e01be315dbfa8d2e1b74c75f56b0112281";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "18022";

Deserializers.projectId = "9936c67fc0daaa74680ba28fd991c293";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.6.4\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.lunatutoo";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "81566f13-03a5-4a29-8026-feb9b3e2c732";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

