--- 
title: versions_by_functions
hide_title: false
hide_table_of_contents: false
keywords:
  - versions_by_functions
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

Creates, updates, deletes, gets or lists a <code>versions_by_functions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="versions_by_functions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.versions_by_functions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_versions_by_function"
    values={[
        { label: 'list_versions_by_function', value: 'list_versions_by_function' }
    ]}
>
<TabItem value="list_versions_by_function">

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
    <td><CopyableCode code="architectures" /></td>
    <td><code>array</code></td>
    <td>The instruction set architecture that the function supports. Architecture is a string array with one of the valid values. The default architecture value is x86_64.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_provider_config" /></td>
    <td><code>object</code></td>
    <td>Configuration for the capacity provider that manages compute resources for Lambda functions.</td>
</tr>
<tr>
    <td><CopyableCode code="code_sha_256" /></td>
    <td><code>string</code></td>
    <td>The SHA256 hash of the function's deployment package.</td>
</tr>
<tr>
    <td><CopyableCode code="code_size" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the function's deployment package, in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="config_sha_256" /></td>
    <td><code>string</code></td>
    <td>The SHA256 hash of the function configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="dead_letter_config" /></td>
    <td><code>object</code></td>
    <td>The dead-letter queue for failed asynchronous invocations.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The function's description.</td>
</tr>
<tr>
    <td><CopyableCode code="durable_config" /></td>
    <td><code>object</code></td>
    <td>Configuration settings for durable functions, including execution timeout, retention period for execution history, and an optional ARN of the Key Management Service (KMS) customer managed key that is used to encrypt your durable execution's payload data, including input, output, and error payloads.</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>object</code></td>
    <td>The function's environment variables. Omitted from CloudTrail logs.</td>
</tr>
<tr>
    <td><CopyableCode code="ephemeral_storage" /></td>
    <td><code>object</code></td>
    <td>The size of the function's /tmp directory in MB. The default value is 512, but can be any whole number between 512 and 10,240 MB. For more information, see Configuring ephemeral storage (console).</td>
</tr>
<tr>
    <td><CopyableCode code="file_system_configs" /></td>
    <td><code>array</code></td>
    <td>Connection settings for an Amazon EFS file system or an Amazon S3 Files file system.</td>
</tr>
<tr>
    <td><CopyableCode code="function_arn" /></td>
    <td><code>string</code></td>
    <td>The function's Amazon Resource Name (ARN). (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:(eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:function:&#91;a-zA-Z0-9-_\.&#93;+(:(\$LATEST(\.PUBLISHED)?|&#91;a-zA-Z0-9-_&#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="function_name" /></td>
    <td><code>string</code></td>
    <td>The name of the function. (pattern: &lt;code&gt;(arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:(eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:|(((eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:)?(\d&#123;12&#125;:)?))(function:)?(&#91;a-zA-Z0-9-_\.&#93;+)(:(\$LATEST(\.PUBLISHED)?|&#91;a-zA-Z0-9-_&#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="handler" /></td>
    <td><code>string</code></td>
    <td>The function that Lambda calls to begin running your function. (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="image_config_response" /></td>
    <td><code>object</code></td>
    <td>The function's image configuration values.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt the following resources: The function's environment variables. The function's Lambda SnapStart snapshots. When used with SourceKMSKeyArn, the unzipped version of the .zip deployment package that's used for function invocations. For more information, see Specifying a customer managed key for Lambda. The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see Function lifecycle. If you don't provide a customer managed key, Lambda uses an Amazon Web Services owned key or an Amazon Web Services managed key. (pattern: &lt;code&gt;(arn:(aws&#91;a-zA-Z-&#93;*)?:&#91;a-z0-9-.&#93;+:.*)|()&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string</code></td>
    <td>The date and time that the function was last updated, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD). (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_status" /></td>
    <td><code>string</code></td>
    <td>The status of the last update that was performed on the function. This is first set to Successful after function creation completes. (Successful, Failed, InProgress)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the last update that was performed on the function.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_status_reason_code" /></td>
    <td><code>string</code></td>
    <td>The reason code for the last update that was performed on the function. (EniLimitExceeded, InsufficientRolePermissions, InvalidConfiguration, InternalError, SubnetOutOfIPAddresses, InvalidSubnet, InvalidSecurityGroup, ImageDeleted, ImageAccessDenied, InvalidImage, KMSKeyAccessDenied, KMSKeyNotFound, InvalidStateKMSKey, DisabledKMSKey, EFSIOError, EFSMountConnectivityError, EFSMountFailure, EFSMountTimeout, InvalidRuntime, InvalidZipFileException, FunctionError, ServiceQuotaExceededException, VcpuLimitExceeded, CapacityProviderScalingLimitExceeded, InsufficientCapacity, EC2RequestLimitExceeded, FunctionError.InitTimeout, FunctionError.RuntimeInitError, FunctionError.ExtensionInitError, FunctionError.InvalidEntryPoint, FunctionError.InvalidWorkingDirectory, FunctionError.PermissionDenied, FunctionError.TooManyExtensions, FunctionError.InitResourceExhausted, DisallowedByVpcEncryptionControl, DependencyError)</td>
</tr>
<tr>
    <td><CopyableCode code="layers" /></td>
    <td><code>array</code></td>
    <td>The function's layers.</td>
</tr>
<tr>
    <td><CopyableCode code="logging_config" /></td>
    <td><code>object</code></td>
    <td>The function's Amazon CloudWatch Logs configuration settings.</td>
</tr>
<tr>
    <td><CopyableCode code="master_arn" /></td>
    <td><code>string</code></td>
    <td>For Lambda@Edge functions, the ARN of the main function. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:(eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:function:&#91;a-zA-Z0-9-_&#93;+(:(\$LATEST|&#91;a-zA-Z0-9-_&#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="memory_size" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory available to the function at runtime.</td>
</tr>
<tr>
    <td><CopyableCode code="package_type" /></td>
    <td><code>string</code></td>
    <td>The type of deployment package. Set to Image for container image and set Zip for .zip file archive. (Zip, Image)</td>
</tr>
<tr>
    <td><CopyableCode code="revision_id" /></td>
    <td><code>string</code></td>
    <td>The latest updated revision of the function or alias.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The function's execution role. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="runtime" /></td>
    <td><code>string</code></td>
    <td>The identifier of the function's runtime. Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image. The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see Runtime use after deprecation. For a list of all currently supported runtimes, see Supported runtimes. (nodejs, nodejs4.3, nodejs6.10, nodejs8.10, nodejs10.x, nodejs12.x, nodejs14.x, nodejs16.x, nodejs18.x, nodejs20.x, nodejs22.x, nodejs24.x, java8, java8.al2, java11, java17, java21, java25, python2.7, python3.6, python3.7, python3.8, python3.9, python3.10, python3.11, python3.12, python3.13, python3.14, dotnetcore1.0, dotnetcore2.0, dotnetcore2.1, dotnetcore3.1, dotnet6, dotnet8, dotnet10, nodejs4.3-edge, go1.x, ruby2.5, ruby2.7, ruby3.2, ruby3.3, ruby3.4, ruby4.0, provided, provided.al2, provided.al2023, nodejs26.x, python3.15, java8.al2023, java11.al2023, java17.al2023)</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_version_config" /></td>
    <td><code>object</code></td>
    <td>The ARN of the runtime and any errors that occured.</td>
</tr>
<tr>
    <td><CopyableCode code="signing_job_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the signing job. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):(&#91;a-zA-Z0-9\-&#93;)+:((eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;)?:(\d&#123;12&#125;)?:(.*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="signing_profile_version_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the signing profile version. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):(&#91;a-zA-Z0-9\-&#93;)+:((eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;)?:(\d&#123;12&#125;)?:(.*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="snap_start" /></td>
    <td><code>object</code></td>
    <td>Set ApplyOn to PublishedVersions to create a snapshot of the initialized execution environment when you publish a function version. For more information, see Improving startup performance with Lambda SnapStart.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the function. When the state is Inactive, you can reactivate the function by invoking it. (Pending, Active, Inactive, Failed, Deactivating, Deactivated, ActiveNonInvocable, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="state_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the function's current state.</td>
</tr>
<tr>
    <td><CopyableCode code="state_reason_code" /></td>
    <td><code>string</code></td>
    <td>The reason code for the function's current state. When the code is Creating, you can't invoke or modify the function. (Idle, Creating, Restoring, EniLimitExceeded, InsufficientRolePermissions, InvalidConfiguration, InternalError, SubnetOutOfIPAddresses, InvalidSubnet, InvalidSecurityGroup, ImageDeleted, ImageAccessDenied, InvalidImage, KMSKeyAccessDenied, KMSKeyNotFound, InvalidStateKMSKey, DisabledKMSKey, EFSIOError, EFSMountConnectivityError, EFSMountFailure, EFSMountTimeout, InvalidRuntime, InvalidZipFileException, FunctionError, ServiceQuotaExceededException, VcpuLimitExceeded, CapacityProviderScalingLimitExceeded, InsufficientCapacity, EC2RequestLimitExceeded, FunctionError.InitTimeout, FunctionError.RuntimeInitError, FunctionError.ExtensionInitError, FunctionError.InvalidEntryPoint, FunctionError.InvalidWorkingDirectory, FunctionError.PermissionDenied, FunctionError.TooManyExtensions, FunctionError.InitResourceExhausted, DisallowedByVpcEncryptionControl, DrainingDurableExecutions, DependencyError)</td>
</tr>
<tr>
    <td><CopyableCode code="tenancy_config" /></td>
    <td><code>object</code></td>
    <td>Specifies the tenant isolation mode configuration for a Lambda function. This allows you to configure specific tenant isolation strategies for your function invocations. Tenant isolation configuration cannot be modified after function creation.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>integer</code></td>
    <td>The amount of time in seconds that Lambda allows a function to run before stopping it.</td>
</tr>
<tr>
    <td><CopyableCode code="tracing_config" /></td>
    <td><code>object</code></td>
    <td>The function's X-Ray tracing configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the Lambda function. (pattern: &lt;code&gt;(\$LATEST|&#91;0-9&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_config" /></td>
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
    <td><a href="#list_versions_by_function"><CopyableCode code="list_versions_by_function" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Returns a list of versions, with the version-specific configuration of each. Lambda returns up to 50 versions per call.</td>
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
    <td>The name or ARN of the Lambda function. Name formats Function name - MyFunction. Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction. Partial ARN - 123456789012:function:MyFunction. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of versions to return. Note that ListVersionsByFunction returns a maximum of 50 items in each response, even if you set the number higher.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_versions_by_function"
    values={[
        { label: 'list_versions_by_function', value: 'list_versions_by_function' }
    ]}
>
<TabItem value="list_versions_by_function">

Returns a list of versions, with the version-specific configuration of each. Lambda returns up to 50 versions per call.

```sql
SELECT
architectures,
capacity_provider_config,
code_sha_256,
code_size,
config_sha_256,
dead_letter_config,
description,
durable_config,
environment,
ephemeral_storage,
file_system_configs,
function_arn,
function_name,
handler,
image_config_response,
kms_key_arn,
last_modified,
last_update_status,
last_update_status_reason,
last_update_status_reason_code,
layers,
logging_config,
master_arn,
memory_size,
package_type,
revision_id,
role,
runtime,
runtime_version_config,
signing_job_arn,
signing_profile_version_arn,
snap_start,
state,
state_reason,
state_reason_code,
tenancy_config,
timeout,
tracing_config,
version,
vpc_config
FROM aws.lambda.versions_by_functions
WHERE function_name = '{{ function_name }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>
