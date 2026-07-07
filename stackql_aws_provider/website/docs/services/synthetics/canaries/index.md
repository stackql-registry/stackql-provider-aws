--- 
title: canaries
hide_title: false
hide_table_of_contents: false
keywords:
  - canaries
  - synthetics
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>canaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="canaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.synthetics.canaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_canary"
    values={[
        { label: 'get_canary', value: 'get_canary' },
        { label: 'describe_canaries', value: 'describe_canaries' }
    ]}
>
<TabItem value="get_canary">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="ArtifactConfig" /></td>
    <td><code>object</code></td>
    <td>A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.</td>
</tr>
<tr>
    <td><CopyableCode code="ArtifactS3Location" /></td>
    <td><code>string</code></td>
    <td>The location in Amazon S3 where Synthetics stores artifacts from the runs of this canary. Artifacts include the log file, screenshots, and HAR files.</td>
</tr>
<tr>
    <td><CopyableCode code="BrowserConfigs" /></td>
    <td><code>array</code></td>
    <td>A structure that specifies the browser type to use for a canary run. CloudWatch Synthetics supports running canaries on both CHROME and FIREFOX browsers. If not specified, browserConfigs defaults to Chrome.</td>
</tr>
<tr>
    <td><CopyableCode code="Code" /></td>
    <td><code>object</code></td>
    <td>This structure contains information about the canary's Lambda handler and where its code is stored by CloudWatch Synthetics.</td>
</tr>
<tr>
    <td><CopyableCode code="DryRunConfig" /></td>
    <td><code>object</code></td>
    <td>Returns the dry run configurations for a canary.</td>
</tr>
<tr>
    <td><CopyableCode code="EngineArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Lambda function that is used as your canary's engine. For more information about Lambda ARN format, see Resources and Conditions for Lambda Actions. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:&#91;a-z&#93;&#123;2,4&#125;(-&#91;a-z&#93;&#123;2,4&#125;)?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:function:&#91;a-zA-Z0-9-_&#93;+(:(\$LATEST|&#91;a-zA-Z0-9-_&#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EngineConfigs" /></td>
    <td><code>array</code></td>
    <td>A list of engine configurations for the canary, one for each browser type that the canary is configured to run on. All runtime versions syn-nodejs-puppeteer-11.0 and above, and syn-nodejs-playwright-3.0 and above, use engineConfigs only. You can no longer use engineArn in these versions. Runtime versions older than syn-nodejs-puppeteer-11.0 and syn-nodejs-playwright-3.0 continue to support engineArn to ensure backward compatibility.</td>
</tr>
<tr>
    <td><CopyableCode code="ExecutionRoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role used to run the canary. This role must include lambda.amazonaws.com as a principal in the trust policy. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FailureRetentionPeriodInDays" /></td>
    <td><code>integer</code></td>
    <td>The number of days to retain data about failed runs of this canary. This setting affects the range of information returned by GetCanaryRuns, as well as the range of information displayed in the Synthetics console.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of this canary. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the canary. (pattern: &lt;code&gt;^&#91;0-9a-z_\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProvisionedResourceCleanup" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to also delete the Lambda functions and layers used by this canary when the canary is deleted. If it is AUTOMATIC, the Lambda functions and layers will be deleted when the canary is deleted. If the value of this parameter is OFF, then the value of the DeleteLambda parameter of the DeleteCanary operation determines whether the Lambda functions and layers will be deleted. (AUTOMATIC, OFF)</td>
</tr>
<tr>
    <td><CopyableCode code="RunConfig" /></td>
    <td><code>object</code></td>
    <td>A structure that contains information about a canary run.</td>
</tr>
<tr>
    <td><CopyableCode code="RuntimeVersion" /></td>
    <td><code>string</code></td>
    <td>Specifies the runtime version to use for the canary. For more information about runtime versions, see Canary Runtime Versions.</td>
</tr>
<tr>
    <td><CopyableCode code="Schedule" /></td>
    <td><code>object</code></td>
    <td>A structure that contains information about how often the canary is to run, and when these runs are to stop.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>object</code></td>
    <td>A structure that contains information about the canary's status.</td>
</tr>
<tr>
    <td><CopyableCode code="SuccessRetentionPeriodInDays" /></td>
    <td><code>integer</code></td>
    <td>The number of days to retain data about successful runs of this canary. This setting affects the range of information returned by GetCanaryRuns, as well as the range of information displayed in the Synthetics console.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The list of key-value pairs that are associated with the canary.</td>
</tr>
<tr>
    <td><CopyableCode code="Timeline" /></td>
    <td><code>object</code></td>
    <td>A structure that contains information about when the canary was created, modified, and most recently run.</td>
</tr>
<tr>
    <td><CopyableCode code="VisualReference" /></td>
    <td><code>object</code></td>
    <td>If this canary performs visual monitoring by comparing screenshots, this structure contains the ID of the canary run to use as the baseline for screenshots, and the coordinates of any parts of the screen to ignore during the visual monitoring comparison.</td>
</tr>
<tr>
    <td><CopyableCode code="VisualReferences" /></td>
    <td><code>array</code></td>
    <td>A list of visual reference configurations for the canary, one for each browser type that the canary is configured to run on. Visual references are used for visual monitoring comparisons. syn-nodejs-puppeteer-11.0 and above, and syn-nodejs-playwright-3.0 and above, only supports visualReferences. visualReference field is not supported. Versions older than syn-nodejs-puppeteer-11.0 supports both visualReference and visualReferences for backward compatibility. It is recommended to use visualReferences for consistency and future compatibility.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcConfig" /></td>
    <td><code>object</code></td>
    <td>If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see Running a Canary in a VPC.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_canaries">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="Canaries" /></td>
    <td><code>array</code></td>
    <td>Returns an array. Each item in the array contains the full information about one canary.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates that there is more data available. You can use this token in a subsequent DescribeCanaries operation to retrieve the next set of results.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_canary"><CopyableCode code="get_canary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-dryRunId"><code>dryRunId</code></a></td>
    <td>Retrieves complete information about one canary. You must specify the name of the canary that you want. To get a list of canaries and their names, use DescribeCanaries.</td>
</tr>
<tr>
    <td><a href="#describe_canaries"><CopyableCode code="describe_canaries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation returns a list of the canaries in your account, along with full details about each canary. This operation supports resource-level authorization using an IAM policy and the Names parameter. If you specify the Names parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response. You are required to use the Names parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see Limiting a user to viewing specific canaries.</td>
</tr>
<tr>
    <td><a href="#create_canary"><CopyableCode code="create_canary" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Code"><code>Code</code></a>, <a href="#parameter-ArtifactS3Location"><code>ArtifactS3Location</code></a>, <a href="#parameter-ExecutionRoleArn"><code>ExecutionRoleArn</code></a>, <a href="#parameter-Schedule"><code>Schedule</code></a>, <a href="#parameter-RuntimeVersion"><code>RuntimeVersion</code></a></td>
    <td></td>
    <td>Creates a canary. Canaries are scripts that monitor your endpoints and APIs from the outside-in. Canaries help you check the availability and latency of your web services and troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and metrics. You can set up a canary to run continuously or just once. Do not use CreateCanary to modify an existing canary. Use UpdateCanary instead. To create canaries, you must have the CloudWatchSyntheticsFullAccess policy. If you are creating a new IAM role for the canary, you also need the iam:CreateRole, iam:CreatePolicy and iam:AttachRolePolicy permissions. For more information, see Necessary Roles and Permissions. Do not include secrets or proprietary information in your canary names. The canary name makes up part of the Amazon Resource Name (ARN) for the canary, and the ARN is included in outbound calls over the internet. For more information, see Security Considerations for Synthetics Canaries.</td>
</tr>
<tr>
    <td><a href="#update_canary"><CopyableCode code="update_canary" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the configuration of a canary that has already been created. For multibrowser canaries, you can add or remove browsers by updating the browserConfig list in the update call. For example: To add Firefox to a canary that currently uses Chrome, specify browserConfigs as &#91;CHROME, FIREFOX&#93; To remove Firefox and keep only Chrome, specify browserConfigs as &#91;CHROME&#93; You can't use this operation to update the tags of an existing canary. To change the tags of an existing canary, use TagResource. When you use the dryRunId field when updating a canary, the only other field you can provide is the Schedule. Adding any other field will thrown an exception.</td>
</tr>
<tr>
    <td><a href="#delete_canary"><CopyableCode code="delete_canary" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-deleteLambda"><code>deleteLambda</code></a></td>
    <td>Permanently deletes the specified canary. If the canary's ProvisionedResourceCleanup field is set to AUTOMATIC or you specify DeleteLambda in this operation as true, CloudWatch Synthetics also deletes the Lambda functions and layers that are used by the canary. Other resources used and created by the canary are not automatically deleted. After you delete a canary, you should also delete the following: The CloudWatch alarms created for this canary. These alarms have a name of Synthetics-Alarm-first-198-characters-of-canary-name-canaryId-alarm number Amazon S3 objects and buckets, such as the canary's artifact location. IAM roles created for the canary. If they were created in the console, these roles have the name role/service-role/CloudWatchSyntheticsRole-First-21-Characters-of-CanaryName CloudWatch Logs log groups created for the canary. These logs groups have the name /aws/lambda/cwsyn-First-21-Characters-of-CanaryName Before you delete a canary, you might want to use GetCanary to display the information about this canary. Make note of the information returned by this operation so that you can delete these resources after you delete the canary.</td>
</tr>
<tr>
    <td><a href="#start_canary_dry_run"><CopyableCode code="start_canary_dry_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this operation to start a dry run for a canary that has already been created</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the canary that you want to dry run. To find canary names, use DescribeCanaries.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-deleteLambda">
    <td><CopyableCode code="deleteLambda" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to also delete the Lambda functions and layers used by this canary. The default is false. Your setting for this parameter is used only if the canary doesn't have AUTOMATIC for its ProvisionedResourceCleanup field. If that field is set to AUTOMATIC, then the Lambda functions and layers will be deleted when this canary is deleted. Type: Boolean</td>
</tr>
<tr id="parameter-dryRunId">
    <td><CopyableCode code="dryRunId" /></td>
    <td><code>string</code></td>
    <td>The DryRunId associated with an existing canary’s dry run. You can use this DryRunId to retrieve information about the dry run.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_canary"
    values={[
        { label: 'get_canary', value: 'get_canary' },
        { label: 'describe_canaries', value: 'describe_canaries' }
    ]}
>
<TabItem value="get_canary">

Retrieves complete information about one canary. You must specify the name of the canary that you want. To get a list of canaries and their names, use DescribeCanaries.

```sql
SELECT
ArtifactConfig,
ArtifactS3Location,
BrowserConfigs,
Code,
DryRunConfig,
EngineArn,
EngineConfigs,
ExecutionRoleArn,
FailureRetentionPeriodInDays,
Id,
Name,
ProvisionedResourceCleanup,
RunConfig,
RuntimeVersion,
Schedule,
Status,
SuccessRetentionPeriodInDays,
Tags,
Timeline,
VisualReference,
VisualReferences,
VpcConfig
FROM aws.synthetics.canaries
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
AND dryRunId = '{{ dryRunId }}'
;
```
</TabItem>
<TabItem value="describe_canaries">

This operation returns a list of the canaries in your account, along with full details about each canary. This operation supports resource-level authorization using an IAM policy and the Names parameter. If you specify the Names parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response. You are required to use the Names parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see Limiting a user to viewing specific canaries.

```sql
SELECT
Canaries,
NextToken
FROM aws.synthetics.canaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_canary"
    values={[
        { label: 'create_canary', value: 'create_canary' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_canary">

Creates a canary. Canaries are scripts that monitor your endpoints and APIs from the outside-in. Canaries help you check the availability and latency of your web services and troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and metrics. You can set up a canary to run continuously or just once. Do not use CreateCanary to modify an existing canary. Use UpdateCanary instead. To create canaries, you must have the CloudWatchSyntheticsFullAccess policy. If you are creating a new IAM role for the canary, you also need the iam:CreateRole, iam:CreatePolicy and iam:AttachRolePolicy permissions. For more information, see Necessary Roles and Permissions. Do not include secrets or proprietary information in your canary names. The canary name makes up part of the Amazon Resource Name (ARN) for the canary, and the ARN is included in outbound calls over the internet. For more information, see Security Considerations for Synthetics Canaries.

```sql
INSERT INTO aws.synthetics.canaries (
Name,
Code,
ArtifactS3Location,
ExecutionRoleArn,
Schedule,
RunConfig,
SuccessRetentionPeriodInDays,
FailureRetentionPeriodInDays,
RuntimeVersion,
VpcConfig,
ResourcesToReplicateTags,
ProvisionedResourceCleanup,
BrowserConfigs,
Tags,
ArtifactConfig,
region
)
SELECT 
'{{ Name }}',
'{{ Code }}' /* required */,
'{{ ArtifactS3Location }}' /* required */,
'{{ ExecutionRoleArn }}' /* required */,
'{{ Schedule }}' /* required */,
'{{ RunConfig }}',
{{ SuccessRetentionPeriodInDays }},
{{ FailureRetentionPeriodInDays }},
'{{ RuntimeVersion }}' /* required */,
'{{ VpcConfig }}',
'{{ ResourcesToReplicateTags }}',
'{{ ProvisionedResourceCleanup }}',
'{{ BrowserConfigs }}',
'{{ Tags }}',
'{{ ArtifactConfig }}',
'{{ region }}'
RETURNING
Canary
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: canaries
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the canaries resource.
    - name: Name
      value: "{{ Name }}"
    - name: Code
      description: |
        Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an Amazon S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of Zipfile. If you are uploading your canary scripts with an Amazon S3 bucket, your zip file should include your script in a certain folder structure. For Node.js canaries, the folder structure must be nodejs/node_modules/myCanaryFilename.js For more information, see Packaging your Node.js canary files For Python canaries, the folder structure must be python/myCanaryFilename.py or python/myFolder/myCanaryFilename.py For more information, see Packaging your Python canary files
      value:
        S3Bucket: "{{ S3Bucket }}"
        S3Key: "{{ S3Key }}"
        S3Version: "{{ S3Version }}"
        ZipFile: "{{ ZipFile }}"
        Handler: "{{ Handler }}"
        BlueprintTypes:
          - "{{ BlueprintTypes }}"
        Dependencies:
          - Type: "{{ Type }}"
            Reference: "{{ Reference }}"
    - name: ArtifactS3Location
      value: "{{ ArtifactS3Location }}"
    - name: ExecutionRoleArn
      value: "{{ ExecutionRoleArn }}"
    - name: Schedule
      description: |
        This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
      value:
        Expression: "{{ Expression }}"
        DurationInSeconds: {{ DurationInSeconds }}
        RetryConfig:
          MaxRetries: {{ MaxRetries }}
    - name: RunConfig
      description: |
        A structure that contains input information for a canary run.
      value:
        TimeoutInSeconds: {{ TimeoutInSeconds }}
        MemoryInMB: {{ MemoryInMB }}
        ActiveTracing: {{ ActiveTracing }}
        EnvironmentVariables: "{{ EnvironmentVariables }}"
        EphemeralStorage: {{ EphemeralStorage }}
    - name: SuccessRetentionPeriodInDays
      value: {{ SuccessRetentionPeriodInDays }}
    - name: FailureRetentionPeriodInDays
      value: {{ FailureRetentionPeriodInDays }}
    - name: RuntimeVersion
      value: "{{ RuntimeVersion }}"
    - name: VpcConfig
      description: |
        If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see Running a Canary in a VPC.
      value:
        SubnetIds:
          - "{{ SubnetIds }}"
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
        Ipv6AllowedForDualStack: {{ Ipv6AllowedForDualStack }}
    - name: ResourcesToReplicateTags
      value:
        - "{{ ResourcesToReplicateTags }}"
    - name: ProvisionedResourceCleanup
      value: "{{ ProvisionedResourceCleanup }}"
      valid_values: ['AUTOMATIC', 'OFF']
    - name: BrowserConfigs
      value:
        - BrowserType: "{{ BrowserType }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: ArtifactConfig
      description: |
        A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.
      value:
        S3Encryption:
          EncryptionMode: "{{ EncryptionMode }}"
          KmsKeyArn: "{{ KmsKeyArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_canary"
    values={[
        { label: 'update_canary', value: 'update_canary' }
    ]}
>
<TabItem value="update_canary">

Updates the configuration of a canary that has already been created. For multibrowser canaries, you can add or remove browsers by updating the browserConfig list in the update call. For example: To add Firefox to a canary that currently uses Chrome, specify browserConfigs as [CHROME, FIREFOX] To remove Firefox and keep only Chrome, specify browserConfigs as [CHROME] You can't use this operation to update the tags of an existing canary. To change the tags of an existing canary, use TagResource. When you use the dryRunId field when updating a canary, the only other field you can provide is the Schedule. Adding any other field will thrown an exception.

```sql
UPDATE aws.synthetics.canaries
SET 
Code = '{{ Code }}',
ExecutionRoleArn = '{{ ExecutionRoleArn }}',
RuntimeVersion = '{{ RuntimeVersion }}',
Schedule = '{{ Schedule }}',
RunConfig = '{{ RunConfig }}',
SuccessRetentionPeriodInDays = {{ SuccessRetentionPeriodInDays }},
FailureRetentionPeriodInDays = {{ FailureRetentionPeriodInDays }},
VpcConfig = '{{ VpcConfig }}',
VisualReference = '{{ VisualReference }}',
ArtifactS3Location = '{{ ArtifactS3Location }}',
ArtifactConfig = '{{ ArtifactConfig }}',
ProvisionedResourceCleanup = '{{ ProvisionedResourceCleanup }}',
DryRunId = '{{ DryRunId }}',
VisualReferences = '{{ VisualReferences }}',
BrowserConfigs = '{{ BrowserConfigs }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_canary"
    values={[
        { label: 'delete_canary', value: 'delete_canary' }
    ]}
>
<TabItem value="delete_canary">

Permanently deletes the specified canary. If the canary's ProvisionedResourceCleanup field is set to AUTOMATIC or you specify DeleteLambda in this operation as true, CloudWatch Synthetics also deletes the Lambda functions and layers that are used by the canary. Other resources used and created by the canary are not automatically deleted. After you delete a canary, you should also delete the following: The CloudWatch alarms created for this canary. These alarms have a name of Synthetics-Alarm-first-198-characters-of-canary-name-canaryId-alarm number Amazon S3 objects and buckets, such as the canary's artifact location. IAM roles created for the canary. If they were created in the console, these roles have the name role/service-role/CloudWatchSyntheticsRole-First-21-Characters-of-CanaryName CloudWatch Logs log groups created for the canary. These logs groups have the name /aws/lambda/cwsyn-First-21-Characters-of-CanaryName Before you delete a canary, you might want to use GetCanary to display the information about this canary. Make note of the information returned by this operation so that you can delete these resources after you delete the canary.

```sql
DELETE FROM aws.synthetics.canaries
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND deleteLambda = '{{ deleteLambda }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_canary_dry_run"
    values={[
        { label: 'start_canary_dry_run', value: 'start_canary_dry_run' }
    ]}
>
<TabItem value="start_canary_dry_run">

Use this operation to start a dry run for a canary that has already been created

```sql
EXEC aws.synthetics.canaries.start_canary_dry_run 
@name='{{ name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Code": "{{ Code }}", 
"RuntimeVersion": "{{ RuntimeVersion }}", 
"RunConfig": "{{ RunConfig }}", 
"VpcConfig": "{{ VpcConfig }}", 
"ExecutionRoleArn": "{{ ExecutionRoleArn }}", 
"SuccessRetentionPeriodInDays": {{ SuccessRetentionPeriodInDays }}, 
"FailureRetentionPeriodInDays": {{ FailureRetentionPeriodInDays }}, 
"VisualReference": "{{ VisualReference }}", 
"ArtifactS3Location": "{{ ArtifactS3Location }}", 
"ArtifactConfig": "{{ ArtifactConfig }}", 
"ProvisionedResourceCleanup": "{{ ProvisionedResourceCleanup }}", 
"BrowserConfigs": "{{ BrowserConfigs }}", 
"VisualReferences": "{{ VisualReferences }}"
}'
;
```
</TabItem>
</Tabs>
