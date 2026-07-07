--- 
title: function_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - function_configurations
  - lambda
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

Creates, updates, deletes, gets or lists a <code>function_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="function_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.function_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_function_configuration"
    values={[
        { label: 'get_function_configuration', value: 'get_function_configuration' }
    ]}
>
<TabItem value="get_function_configuration">

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
    <td><CopyableCode code="Architectures" /></td>
    <td><code>array</code></td>
    <td>The instruction set architecture that the function supports. Architecture is a string array with one of the valid values. The default architecture value is x86_64.</td>
</tr>
<tr>
    <td><CopyableCode code="CapacityProviderConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for the capacity provider that manages compute resources for Lambda functions.</td>
</tr>
<tr>
    <td><CopyableCode code="CodeSha256" /></td>
    <td><code>string</code></td>
    <td>The SHA256 hash of the function's deployment package.</td>
</tr>
<tr>
    <td><CopyableCode code="CodeSize" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the function's deployment package, in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="ConfigSha256" /></td>
    <td><code>string</code></td>
    <td>The SHA256 hash of the function configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="DeadLetterConfig" /></td>
    <td><code>object</code></td>
    <td>The dead-letter queue for failed asynchronous invocations.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The function's description.</td>
</tr>
<tr>
    <td><CopyableCode code="DurableConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration settings for durable functions, including execution timeout and retention period for execution history.</td>
</tr>
<tr>
    <td><CopyableCode code="Environment" /></td>
    <td><code>object</code></td>
    <td>The function's environment variables. Omitted from CloudTrail logs.</td>
</tr>
<tr>
    <td><CopyableCode code="EphemeralStorage" /></td>
    <td><code>object</code></td>
    <td>The size of the function's /tmp directory in MB. The default value is 512, but can be any whole number between 512 and 10,240 MB. For more information, see Configuring ephemeral storage (console).</td>
</tr>
<tr>
    <td><CopyableCode code="FileSystemConfigs" /></td>
    <td><code>array</code></td>
    <td>Connection settings for an Amazon EFS file system or an Amazon S3 Files file system.</td>
</tr>
<tr>
    <td><CopyableCode code="FunctionArn" /></td>
    <td><code>string</code></td>
    <td>The function's Amazon Resource Name (ARN). (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:function:&#91;a-zA-Z0-9-_\.&#93;+(:(\$LATEST(\.PUBLISHED)?|&#91;a-zA-Z0-9-_&#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FunctionName" /></td>
    <td><code>string</code></td>
    <td>The name of the function. (pattern: &lt;code&gt;(arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:)?(&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:)?(\d&#123;12&#125;:)?(function:)?(&#91;a-zA-Z0-9-_\.&#93;+)(:(\$LATEST(\.PUBLISHED)?|&#91;a-zA-Z0-9-_&#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Handler" /></td>
    <td><code>string</code></td>
    <td>The function that Lambda calls to begin running your function. (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ImageConfigResponse" /></td>
    <td><code>object</code></td>
    <td>The function's image configuration values.</td>
</tr>
<tr>
    <td><CopyableCode code="KMSKeyArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt the following resources: The function's environment variables. The function's Lambda SnapStart snapshots. When used with SourceKMSKeyArn, the unzipped version of the .zip deployment package that's used for function invocations. For more information, see Specifying a customer managed key for Lambda. The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see Function lifecycle. If you don't provide a customer managed key, Lambda uses an Amazon Web Services owned key or an Amazon Web Services managed key. (pattern: &lt;code&gt;(arn:(aws&#91;a-zA-Z-&#93;*)?:&#91;a-z0-9-.&#93;+:.*)|()&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModified" /></td>
    <td><code>string</code></td>
    <td>The date and time that the function was last updated, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdateStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the last update that was performed on the function. This is first set to Successful after function creation completes. (Successful, Failed, InProgress)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdateStatusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the last update that was performed on the function.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdateStatusReasonCode" /></td>
    <td><code>string</code></td>
    <td>The reason code for the last update that was performed on the function. (EniLimitExceeded, InsufficientRolePermissions, InvalidConfiguration, InternalError, SubnetOutOfIPAddresses, InvalidSubnet, InvalidSecurityGroup, ImageDeleted, ImageAccessDenied, InvalidImage, KMSKeyAccessDenied, KMSKeyNotFound, InvalidStateKMSKey, DisabledKMSKey, EFSIOError, EFSMountConnectivityError, EFSMountFailure, EFSMountTimeout, InvalidRuntime, InvalidZipFileException, FunctionError, VcpuLimitExceeded, CapacityProviderScalingLimitExceeded, InsufficientCapacity, EC2RequestLimitExceeded, FunctionError.InitTimeout, FunctionError.RuntimeInitError, FunctionError.ExtensionInitError, FunctionError.InvalidEntryPoint, FunctionError.InvalidWorkingDirectory, FunctionError.PermissionDenied, FunctionError.TooManyExtensions, FunctionError.InitResourceExhausted, DisallowedByVpcEncryptionControl)</td>
</tr>
<tr>
    <td><CopyableCode code="Layers" /></td>
    <td><code>array</code></td>
    <td>The function's layers.</td>
</tr>
<tr>
    <td><CopyableCode code="LoggingConfig" /></td>
    <td><code>object</code></td>
    <td>The function's Amazon CloudWatch Logs configuration settings.</td>
</tr>
<tr>
    <td><CopyableCode code="MasterArn" /></td>
    <td><code>string</code></td>
    <td>For Lambda@Edge functions, the ARN of the main function. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:function:&#91;a-zA-Z0-9-_&#93;+(:(\$LATEST|&#91;a-zA-Z0-9-_&#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MemorySize" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory available to the function at runtime.</td>
</tr>
<tr>
    <td><CopyableCode code="PackageType" /></td>
    <td><code>string</code></td>
    <td>The type of deployment package. Set to Image for container image and set Zip for .zip file archive. (Zip, Image)</td>
</tr>
<tr>
    <td><CopyableCode code="RevisionId" /></td>
    <td><code>string</code></td>
    <td>The latest updated revision of the function or alias.</td>
</tr>
<tr>
    <td><CopyableCode code="Role" /></td>
    <td><code>string</code></td>
    <td>The function's execution role. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Runtime" /></td>
    <td><code>string</code></td>
    <td>The identifier of the function's runtime. Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image. The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see Runtime use after deprecation. For a list of all currently supported runtimes, see Supported runtimes. (nodejs, nodejs4.3, nodejs6.10, nodejs8.10, nodejs10.x, nodejs12.x, nodejs14.x, nodejs16.x, java8, java8.al2, java11, python2.7, python3.6, python3.7, python3.8, python3.9, dotnetcore1.0, dotnetcore2.0, dotnetcore2.1, dotnetcore3.1, dotnet6, dotnet8, nodejs4.3-edge, go1.x, ruby2.5, ruby2.7, provided, provided.al2, nodejs18.x, python3.10, java17, ruby3.2, ruby3.3, ruby3.4, python3.11, nodejs20.x, provided.al2023, python3.12, java21, python3.13, nodejs22.x, nodejs24.x, python3.14, java25, dotnet10, ruby4.0)</td>
</tr>
<tr>
    <td><CopyableCode code="RuntimeVersionConfig" /></td>
    <td><code>object</code></td>
    <td>The ARN of the runtime and any errors that occured.</td>
</tr>
<tr>
    <td><CopyableCode code="SigningJobArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the signing job. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):(&#91;a-zA-Z0-9\-&#93;)+:(&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-\d&#123;1&#125;)?:(\d&#123;12&#125;)?:(.*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SigningProfileVersionArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the signing profile version. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):(&#91;a-zA-Z0-9\-&#93;)+:(&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-\d&#123;1&#125;)?:(\d&#123;12&#125;)?:(.*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SnapStart" /></td>
    <td><code>object</code></td>
    <td>Set ApplyOn to PublishedVersions to create a snapshot of the initialized execution environment when you publish a function version. For more information, see Improving startup performance with Lambda SnapStart.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the function. When the state is Inactive, you can reactivate the function by invoking it. (Pending, Active, Inactive, Failed, Deactivating, Deactivated, ActiveNonInvocable, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="StateReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the function's current state.</td>
</tr>
<tr>
    <td><CopyableCode code="StateReasonCode" /></td>
    <td><code>string</code></td>
    <td>The reason code for the function's current state. When the code is Creating, you can't invoke or modify the function. (Idle, Creating, Restoring, EniLimitExceeded, InsufficientRolePermissions, InvalidConfiguration, InternalError, SubnetOutOfIPAddresses, InvalidSubnet, InvalidSecurityGroup, ImageDeleted, ImageAccessDenied, InvalidImage, KMSKeyAccessDenied, KMSKeyNotFound, InvalidStateKMSKey, DisabledKMSKey, EFSIOError, EFSMountConnectivityError, EFSMountFailure, EFSMountTimeout, InvalidRuntime, InvalidZipFileException, FunctionError, DrainingDurableExecutions, VcpuLimitExceeded, CapacityProviderScalingLimitExceeded, InsufficientCapacity, EC2RequestLimitExceeded, FunctionError.InitTimeout, FunctionError.RuntimeInitError, FunctionError.ExtensionInitError, FunctionError.InvalidEntryPoint, FunctionError.InvalidWorkingDirectory, FunctionError.PermissionDenied, FunctionError.TooManyExtensions, FunctionError.InitResourceExhausted, DisallowedByVpcEncryptionControl)</td>
</tr>
<tr>
    <td><CopyableCode code="TenancyConfig" /></td>
    <td><code>object</code></td>
    <td>Specifies the tenant isolation mode configuration for a Lambda function. This allows you to configure specific tenant isolation strategies for your function invocations. Tenant isolation configuration cannot be modified after function creation.</td>
</tr>
<tr>
    <td><CopyableCode code="Timeout" /></td>
    <td><code>integer</code></td>
    <td>The amount of time in seconds that Lambda allows a function to run before stopping it.</td>
</tr>
<tr>
    <td><CopyableCode code="TracingConfig" /></td>
    <td><code>object</code></td>
    <td>The function's X-Ray tracing configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>string</code></td>
    <td>The version of the Lambda function. (pattern: &lt;code&gt;(\$LATEST|&#91;0-9&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="VpcConfig" /></td>
    <td><code>object</code></td>
    <td>The function's networking configuration.</td>
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
    <td><a href="#get_function_configuration"><CopyableCode code="get_function_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Qualifier"><code>Qualifier</code></a></td>
    <td>Returns the version-specific settings of a Lambda function or version. The output includes only options that can vary between versions of a function. To modify these settings, use UpdateFunctionConfiguration. To get all of a function's details, including function-level settings, use GetFunction.</td>
</tr>
<tr>
    <td><a href="#update_function_configuration"><CopyableCode code="update_function_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modify the version-specific settings of a Lambda function. When you update a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute. During this time, you can't modify the function, but you can still invoke it. The LastUpdateStatus, LastUpdateStatusReason, and LastUpdateStatusReasonCode fields in the response from GetFunctionConfiguration indicate when the update is complete and the function is processing events with the new configuration. For more information, see Lambda function states. These settings can vary between versions of a function and are locked when you publish a version. You can't modify the configuration of a published version, only the unpublished version. To configure function concurrency, use PutFunctionConcurrency. To grant invoke permissions to an Amazon Web Services account or Amazon Web Services service, use AddPermission.</td>
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
<tr id="parameter-function_name">
    <td><CopyableCode code="function_name" /></td>
    <td><code>string</code></td>
    <td>The name or ARN of the Lambda function. Name formats Function name – my-function. Function ARN – arn:aws:lambda:us-west-2:123456789012:function:my-function. Partial ARN – 123456789012:function:my-function. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Qualifier">
    <td><CopyableCode code="Qualifier" /></td>
    <td><code>string</code></td>
    <td>Specify a version or alias to get details about a published version of the function.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_function_configuration"
    values={[
        { label: 'get_function_configuration', value: 'get_function_configuration' }
    ]}
>
<TabItem value="get_function_configuration">

Returns the version-specific settings of a Lambda function or version. The output includes only options that can vary between versions of a function. To modify these settings, use UpdateFunctionConfiguration. To get all of a function's details, including function-level settings, use GetFunction.

```sql
SELECT
Architectures,
CapacityProviderConfig,
CodeSha256,
CodeSize,
ConfigSha256,
DeadLetterConfig,
Description,
DurableConfig,
Environment,
EphemeralStorage,
FileSystemConfigs,
FunctionArn,
FunctionName,
Handler,
ImageConfigResponse,
KMSKeyArn,
LastModified,
LastUpdateStatus,
LastUpdateStatusReason,
LastUpdateStatusReasonCode,
Layers,
LoggingConfig,
MasterArn,
MemorySize,
PackageType,
RevisionId,
Role,
Runtime,
RuntimeVersionConfig,
SigningJobArn,
SigningProfileVersionArn,
SnapStart,
State,
StateReason,
StateReasonCode,
TenancyConfig,
Timeout,
TracingConfig,
Version,
VpcConfig
FROM aws.lambda.function_configurations
WHERE function_name = '{{ function_name }}' -- required
AND region = '{{ region }}' -- required
AND Qualifier = '{{ Qualifier }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_function_configuration"
    values={[
        { label: 'update_function_configuration', value: 'update_function_configuration' }
    ]}
>
<TabItem value="update_function_configuration">

Modify the version-specific settings of a Lambda function. When you update a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute. During this time, you can't modify the function, but you can still invoke it. The LastUpdateStatus, LastUpdateStatusReason, and LastUpdateStatusReasonCode fields in the response from GetFunctionConfiguration indicate when the update is complete and the function is processing events with the new configuration. For more information, see Lambda function states. These settings can vary between versions of a function and are locked when you publish a version. You can't modify the configuration of a published version, only the unpublished version. To configure function concurrency, use PutFunctionConcurrency. To grant invoke permissions to an Amazon Web Services account or Amazon Web Services service, use AddPermission.

```sql
UPDATE aws.lambda.function_configurations
SET 
Role = '{{ Role }}',
Handler = '{{ Handler }}',
Description = '{{ Description }}',
Timeout = {{ Timeout }},
MemorySize = {{ MemorySize }},
VpcConfig = '{{ VpcConfig }}',
Environment = '{{ Environment }}',
Runtime = '{{ Runtime }}',
DeadLetterConfig = '{{ DeadLetterConfig }}',
KMSKeyArn = '{{ KMSKeyArn }}',
TracingConfig = '{{ TracingConfig }}',
RevisionId = '{{ RevisionId }}',
Layers = '{{ Layers }}',
FileSystemConfigs = '{{ FileSystemConfigs }}',
ImageConfig = '{{ ImageConfig }}',
EphemeralStorage = '{{ EphemeralStorage }}',
SnapStart = '{{ SnapStart }}',
LoggingConfig = '{{ LoggingConfig }}',
CapacityProviderConfig = '{{ CapacityProviderConfig }}',
DurableConfig = '{{ DurableConfig }}'
WHERE 
function_name = '{{ function_name }}' --required
AND region = '{{ region }}' --required
RETURNING
Architectures,
CapacityProviderConfig,
CodeSha256,
CodeSize,
ConfigSha256,
DeadLetterConfig,
Description,
DurableConfig,
Environment,
EphemeralStorage,
FileSystemConfigs,
FunctionArn,
FunctionName,
Handler,
ImageConfigResponse,
KMSKeyArn,
LastModified,
LastUpdateStatus,
LastUpdateStatusReason,
LastUpdateStatusReasonCode,
Layers,
LoggingConfig,
MasterArn,
MemorySize,
PackageType,
RevisionId,
Role,
Runtime,
RuntimeVersionConfig,
SigningJobArn,
SigningProfileVersionArn,
SnapStart,
State,
StateReason,
StateReasonCode,
TenancyConfig,
Timeout,
TracingConfig,
Version,
VpcConfig;
```
</TabItem>
</Tabs>
