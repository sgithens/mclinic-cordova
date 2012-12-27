/**
 * Copyright 2012 Muzima Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.mclinic.plugin;

import android.util.Log;
import com.mclinic.api.module.MuzimaModule;
import com.mclinic.api.service.AdministrativeService;
import com.mclinic.search.api.Context;
import com.mclinic.util.FileUtil;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.api.CordovaInterface;
import org.apache.cordova.api.CordovaPlugin;

public abstract class MuzimaPlugin extends CordovaPlugin {

    private final String defaultKey = "uuid";

    private final String lucenePath = "/mnt/sdcard/cordova/lucene";

    private final String configurationPath = "/mnt/sdcard/cordova/configuration";

    private final String TAG = MuzimaPlugin.class.getSimpleName();

    protected Boolean initialized = Boolean.FALSE;

    /**
     * @param cordova The context of the main Activity.
     * @param webView The associated CordovaWebView.
     */
    @Override
    public void initialize(final CordovaInterface cordova, final CordovaWebView webView) {
        super.initialize(cordova, webView);

        if (!initialized) {
            Log.i(TAG, "Initializing internal structure of the plugins.");

            if (FileUtil.storageReady()) {
                Context.initialize(new MuzimaModule(lucenePath, defaultKey));

                AdministrativeService administrativeService = Context.getInstance(AdministrativeService.class);
                administrativeService.initializeRepository(configurationPath);

                Log.i(TAG, "Internal structure of plugins is initialized.");
                initialized = Boolean.TRUE;
            }
        }
    }
}
