/*
 * Copyright 2020 StreamSets Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.streamsets.pipeline.stage.destination.s3;

import com.streamsets.pipeline.stage.common.S3CommonUpgraderTest;

public class AmazonS3TargetUpgraderTest extends S3CommonUpgraderTest {

  @Override
  protected String getYamlResourceName() {
    return "AmazonS3DTarget.yaml";
  }

  @Override
  protected int getCredentialModeUpgradeVersion() {
    return 12;
  }

  @Override
  protected int getConnectionIntroductionUpgradeVersion() {
    return 13;
  }

  @Override
  protected String getPrefix() {
    return "s3TargetConfigBean.";
  }
}
