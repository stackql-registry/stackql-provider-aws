--- 
title: functions
hide_title: false
hide_table_of_contents: false
keywords:
  - functions
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

Creates, updates, deletes, gets or lists a <code>functions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="functions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.functions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_function"
    values={[
        { label: 'get_function', value: 'get_function' },
        { label: 'list_functions', value: 'list_functions' }
    ]}
>
<TabItem value="get_function">

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
    <td><CopyableCode code="code" /></td>
    <td><code>object</code></td>
    <td>The deployment package of the function or version.</td>
</tr>
<tr>
    <td><CopyableCode code="concurrency" /></td>
    <td><code>object</code></td>
    <td>The function's reserved concurrency.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Details about a function's configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The function's tags. Lambda returns tag data only if you have explicit allow permissions for lambda:ListTags.</td>
</tr>
<tr>
    <td><CopyableCode code="tags_error" /></td>
    <td><code>object</code></td>
    <td>An object that contains details about an error related to retrieving tags.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_functions">

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
    <td>Configuration settings for durable functions, including execution timeout and retention period for execution history.</td>
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
    <td>The function's Amazon Resource Name (ARN). (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:function:&#91;a-zA-Z0-9-_\.&#93;+(:(\$LATEST(\.PUBLISHED)?|&#91;a-zA-Z0-9-_&#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="function_name" /></td>
    <td><code>string</code></td>
    <td>The name of the function. (pattern: &lt;code&gt;(arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:)?(&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:)?(\d&#123;12&#125;:)?(function:)?(&#91;a-zA-Z0-9-_\.&#93;+)(:(\$LATEST(\.PUBLISHED)?|&#91;a-zA-Z0-9-_&#93;+))?&lt;/code&gt;)</td>
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
    <td>The date and time that the function was last updated, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).</td>
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
    <td>The reason code for the last update that was performed on the function. (EniLimitExceeded, InsufficientRolePermissions, InvalidConfiguration, InternalError, SubnetOutOfIPAddresses, InvalidSubnet, InvalidSecurityGroup, ImageDeleted, ImageAccessDenied, InvalidImage, KMSKeyAccessDenied, KMSKeyNotFound, InvalidStateKMSKey, DisabledKMSKey, EFSIOError, EFSMountConnectivityError, EFSMountFailure, EFSMountTimeout, InvalidRuntime, InvalidZipFileException, FunctionError, VcpuLimitExceeded, CapacityProviderScalingLimitExceeded, InsufficientCapacity, EC2RequestLimitExceeded, FunctionError.InitTimeout, FunctionError.RuntimeInitError, FunctionError.ExtensionInitError, FunctionError.InvalidEntryPoint, FunctionError.InvalidWorkingDirectory, FunctionError.PermissionDenied, FunctionError.TooManyExtensions, FunctionError.InitResourceExhausted, DisallowedByVpcEncryptionControl)</td>
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
    <td>For Lambda@Edge functions, the ARN of the main function. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:function:&#91;a-zA-Z0-9-_&#93;+(:(\$LATEST|&#91;a-zA-Z0-9-_&#93;+))?&lt;/code&gt;)</td>
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
    <td>The identifier of the function's runtime. Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image. The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see Runtime use after deprecation. For a list of all currently supported runtimes, see Supported runtimes. (nodejs, nodejs4.3, nodejs6.10, nodejs8.10, nodejs10.x, nodejs12.x, nodejs14.x, nodejs16.x, java8, java8.al2, java11, python2.7, python3.6, python3.7, python3.8, python3.9, dotnetcore1.0, dotnetcore2.0, dotnetcore2.1, dotnetcore3.1, dotnet6, dotnet8, nodejs4.3-edge, go1.x, ruby2.5, ruby2.7, provided, provided.al2, nodejs18.x, python3.10, java17, ruby3.2, ruby3.3, ruby3.4, python3.11, nodejs20.x, provided.al2023, python3.12, java21, python3.13, nodejs22.x, nodejs24.x, python3.14, java25, dotnet10, ruby4.0)</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_version_config" /></td>
    <td><code>object</code></td>
    <td>The ARN of the runtime and any errors that occured.</td>
</tr>
<tr>
    <td><CopyableCode code="signing_job_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the signing job. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):(&#91;a-zA-Z0-9\-&#93;)+:(&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-\d&#123;1&#125;)?:(\d&#123;12&#125;)?:(.*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="signing_profile_version_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the signing profile version. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):(&#91;a-zA-Z0-9\-&#93;)+:(&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-\d&#123;1&#125;)?:(\d&#123;12&#125;)?:(.*)&lt;/code&gt;)</td>
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
    <td>The reason code for the function's current state. When the code is Creating, you can't invoke or modify the function. (Idle, Creating, Restoring, EniLimitExceeded, InsufficientRolePermissions, InvalidConfiguration, InternalError, SubnetOutOfIPAddresses, InvalidSubnet, InvalidSecurityGroup, ImageDeleted, ImageAccessDenied, InvalidImage, KMSKeyAccessDenied, KMSKeyNotFound, InvalidStateKMSKey, DisabledKMSKey, EFSIOError, EFSMountConnectivityError, EFSMountFailure, EFSMountTimeout, InvalidRuntime, InvalidZipFileException, FunctionError, DrainingDurableExecutions, VcpuLimitExceeded, CapacityProviderScalingLimitExceeded, InsufficientCapacity, EC2RequestLimitExceeded, FunctionError.InitTimeout, FunctionError.RuntimeInitError, FunctionError.ExtensionInitError, FunctionError.InvalidEntryPoint, FunctionError.InvalidWorkingDirectory, FunctionError.PermissionDenied, FunctionError.TooManyExtensions, FunctionError.InitResourceExhausted, DisallowedByVpcEncryptionControl)</td>
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
    <td><a href="#get_function"><CopyableCode code="get_function" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Qualifier"><code>Qualifier</code></a></td>
    <td>Returns information about the function or function version, with a link to download the deployment package that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are returned.</td>
</tr>
<tr>
    <td><a href="#list_functions"><CopyableCode code="list_functions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MasterRegion"><code>MasterRegion</code></a>, <a href="#parameter-FunctionVersion"><code>FunctionVersion</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Returns a list of Lambda functions, with the version-specific configuration of each. Lambda returns up to 50 functions per call. Set FunctionVersion to ALL to include all published versions of each function in addition to the unpublished version. The ListFunctions operation returns a subset of the FunctionConfiguration fields. To get the additional fields (State, StateReasonCode, StateReason, LastUpdateStatus, LastUpdateStatusReason, LastUpdateStatusReasonCode, RuntimeVersionConfig) for a function or version, use GetFunction.</td>
</tr>
<tr>
    <td><a href="#create_function"><CopyableCode code="create_function" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FunctionName"><code>FunctionName</code></a></td>
    <td></td>
    <td>Creates a Lambda function. To create a function, you need a deployment package and an execution role. The deployment package is a .zip file archive or container image that contains your function code. The execution role grants the function permission to use Amazon Web Services services, such as Amazon CloudWatch Logs for log streaming and X-Ray for request tracing. If the deployment package is a container image, then you set the package type to Image. For a container image, the code property must include the URI of a container image in the Amazon ECR registry. You do not need to specify the handler and runtime properties. If the deployment package is a .zip file archive, then you set the package type to Zip. For a .zip file archive, the code property specifies the location of the .zip file. You must also specify the handler and runtime properties. The code in the deployment package must be compatible with the target instruction set architecture of the function (x86-64 or arm64). If you do not specify the architecture, then the default value is x86-64. When you create a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute or so. During this time, you can't invoke or modify the function. The State, StateReason, and StateReasonCode fields in the response from GetFunctionConfiguration indicate when the function is ready to invoke. For more information, see Lambda function states. A function has an unpublished version, and can have published versions and aliases. The unpublished version changes when you update your function's code and configuration. A published version is a snapshot of your function code and configuration that can't be changed. An alias is a named resource that maps to a version, and can be changed to map to a different version. Use the Publish parameter to create version 1 of your function from its initial configuration. The other parameters let you configure version-specific and function-level settings. You can modify version-specific settings later with UpdateFunctionConfiguration. Function-level settings apply to both the unpublished and published versions of the function, and include tags (TagResource) and per-function concurrency limits (PutFunctionConcurrency). You can use code signing if your deployment package is a .zip file archive. To enable code signing for this function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with UpdateFunctionCode, Lambda checks that the code package has a valid signature from a trusted publisher. The code-signing configuration includes set of signing profiles, which define the trusted publishers for this function. If another Amazon Web Services account or an Amazon Web Services service invokes your function, use AddPermission to grant permission by creating a resource-based Identity and Access Management (IAM) policy. You can grant permissions at the function level, on a version, or on an alias. To invoke your function directly, use Invoke. To invoke your function in response to events in other Amazon Web Services services, create an event source mapping (CreateEventSourceMapping), or configure a function trigger in the other service. For more information, see Invoking Lambda functions.</td>
</tr>
<tr>
    <td><a href="#add_permission"><CopyableCode code="add_permission" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StatementId"><code>StatementId</code></a>, <a href="#parameter-Action"><code>Action</code></a>, <a href="#parameter-Principal"><code>Principal</code></a></td>
    <td><a href="#parameter-Qualifier"><code>Qualifier</code></a></td>
    <td>Grants a principal permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function. Note: Lambda does not support adding policies to version $LATEST. To grant permission to another account, specify the account ID as the Principal. To grant permission to an organization defined in Organizations, specify the organization ID as the PrincipalOrgID. For Amazon Web Services services, the principal is a domain-style identifier that the service defines, such as s3.amazonaws.com or sns.amazonaws.com. For Amazon Web Services services, you can also specify the ARN of the associated resource as the SourceArn. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function. This operation adds a statement to a resource-based permissions policy for the function. For more information about function policies, see Using resource-based policies for Lambda.</td>
</tr>
<tr>
    <td><a href="#remove_permission"><CopyableCode code="remove_permission" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-statement_id"><code>statement_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Qualifier"><code>Qualifier</code></a>, <a href="#parameter-RevisionId"><code>RevisionId</code></a></td>
    <td>Revokes function-use permission from an Amazon Web Services service or another Amazon Web Services account. You can get the ID of the statement from the output of GetPolicy.</td>
</tr>
<tr>
    <td><a href="#update_function_code"><CopyableCode code="update_function_code" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a Lambda function's code. If code signing is enabled for the function, the code package must be signed by a trusted publisher. For more information, see Configuring code signing for Lambda. If the function's package type is Image, then you must specify the code package in ImageUri as the URI of a container image in the Amazon ECR registry. If the function's package type is Zip, then you must specify the deployment package as a .zip file archive. Enter the Amazon S3 bucket and key of the code .zip file location. You can also provide the function code inline using the ZipFile field. The code in the deployment package must be compatible with the target instruction set architecture of the function (x86-64 or arm64). The function's code is locked when you publish a version. You can't modify the code of a published version, only the unpublished version. For a function defined as a container image, Lambda resolves the image tag to an image digest. In Amazon ECR, if you update the image tag to a new image, Lambda does not automatically update the function.</td>
</tr>
<tr>
    <td><a href="#delete_function"><CopyableCode code="delete_function" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Qualifier"><code>Qualifier</code></a></td>
    <td>Deletes a Lambda function. To delete a specific function version, use the Qualifier parameter. Otherwise, all versions and aliases are deleted. This doesn't require the user to have explicit permissions for DeleteAlias. A deleted Lambda function cannot be recovered. Ensure that you specify the correct function name and version before deleting. To delete Lambda event source mappings that invoke a function, use DeleteEventSourceMapping. For Amazon Web Services services and resources that invoke your function directly, delete the trigger in the service where you originally configured it.</td>
</tr>
<tr>
    <td><a href="#invoke"><CopyableCode code="invoke" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amz-Invocation-Type"><code>X-Amz-Invocation-Type</code></a>, <a href="#parameter-X-Amz-Log-Type"><code>X-Amz-Log-Type</code></a>, <a href="#parameter-X-Amz-Client-Context"><code>X-Amz-Client-Context</code></a>, <a href="#parameter-X-Amz-Durable-Execution-Name"><code>X-Amz-Durable-Execution-Name</code></a>, <a href="#parameter-Qualifier"><code>Qualifier</code></a>, <a href="#parameter-X-Amz-Tenant-Id"><code>X-Amz-Tenant-Id</code></a></td>
    <td>Invokes a Lambda function. You can invoke a function synchronously (and wait for the response), or asynchronously. By default, Lambda invokes your function synchronously (i.e. theInvocationType is RequestResponse). To invoke a function asynchronously, set InvocationType to Event. Lambda passes the ClientContext object to your function for synchronous invocations only. For synchronous invocations, the maximum payload size is 6 MB. For asynchronous invocations, the maximum payload size is 1 MB. For synchronous invocation, details about the function response, including errors, are included in the response body and headers. For either invocation type, you can find more information in the execution log and trace. When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type, client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an error, Lambda executes the function up to two more times. For more information, see Error handling and automatic retries in Lambda. For asynchronous invocation, Lambda adds events to a queue before sending them to your function. If your function does not have enough capacity to keep up with the queue, events may be lost. Occasionally, your function may receive the same event multiple times, even if no error occurs. To retain events that were not processed, configure your function with a dead-letter queue. The status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your function from executing, such as permissions errors, quota errors, or issues with your function's code and configuration. For example, Lambda returns TooManyRequestsException if running the function would cause you to exceed a concurrency limit at either the account level (ConcurrentInvocationLimitExceeded) or function level (ReservedFunctionConcurrentInvocationLimitExceeded). For functions with a long timeout, your client might disconnect during synchronous invocation while it waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long connections with timeout or keep-alive settings. This operation requires permission for the lambda:InvokeFunction action. For details on how to set up permissions for cross-account invocations, see Granting function access to other accounts.</td>
</tr>
<tr>
    <td><a href="#invoke_async"><CopyableCode code="invoke_async" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InvokeArgs"><code>InvokeArgs</code></a></td>
    <td></td>
    <td>For asynchronous function invocation, use Invoke. Invokes a function asynchronously. The payload limit is 256KB. For larger payloads, for up to 1MB, use Invoke. If you do use the InvokeAsync action, note that it doesn't support the use of X-Ray active tracing. Trace ID is not propagated to the function, even if X-Ray active tracing is turned on.</td>
</tr>
<tr>
    <td><a href="#invoke_with_response_stream"><CopyableCode code="invoke_with_response_stream" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amz-Invocation-Type"><code>X-Amz-Invocation-Type</code></a>, <a href="#parameter-X-Amz-Log-Type"><code>X-Amz-Log-Type</code></a>, <a href="#parameter-X-Amz-Client-Context"><code>X-Amz-Client-Context</code></a>, <a href="#parameter-Qualifier"><code>Qualifier</code></a>, <a href="#parameter-X-Amz-Tenant-Id"><code>X-Amz-Tenant-Id</code></a></td>
    <td>Configure your Lambda functions to stream response payloads back to clients. For more information, see Configuring a Lambda function to stream responses. This operation requires permission for the lambda:InvokeFunction action. For details on how to set up permissions for cross-account invocations, see Granting function access to other accounts.</td>
</tr>
<tr>
    <td><a href="#publish_version"><CopyableCode code="publish_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a version from the current code and configuration of a function. Use versions to create a snapshot of your function code and configuration that doesn't change. Lambda doesn't publish a version if the function's configuration and code haven't changed since the last version. Use UpdateFunctionCode or UpdateFunctionConfiguration to update the function before publishing a version. Clients can invoke versions directly or with an alias. To create an alias, use CreateAlias.</td>
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
<tr id="parameter-statement_id">
    <td><CopyableCode code="statement_id" /></td>
    <td><code>string</code></td>
    <td>Statement ID of the permission to remove.</td>
</tr>
<tr id="parameter-FunctionVersion">
    <td><CopyableCode code="FunctionVersion" /></td>
    <td><code>string</code></td>
    <td>Set to ALL to include entries for all published versions of each function.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</td>
</tr>
<tr id="parameter-MasterRegion">
    <td><CopyableCode code="MasterRegion" /></td>
    <td><code>string</code></td>
    <td>For Lambda@Edge functions, the Amazon Web Services Region of the master function. For example, us-east-1 filters the list of functions to include only Lambda@Edge functions replicated from a master function in US East (N. Virginia). If specified, you must set FunctionVersion to ALL.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of functions to return in the response. Note that ListFunctions returns a maximum of 50 items in each response, even if you set the number higher.</td>
</tr>
<tr id="parameter-Qualifier">
    <td><CopyableCode code="Qualifier" /></td>
    <td><code>string</code></td>
    <td>The alias name.</td>
</tr>
<tr id="parameter-RevisionId">
    <td><CopyableCode code="RevisionId" /></td>
    <td><code>string</code></td>
    <td>Update the policy only if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it.</td>
</tr>
<tr id="parameter-X-Amz-Client-Context">
    <td><CopyableCode code="X-Amz-Client-Context" /></td>
    <td><code>string</code></td>
    <td>Up to 3,583 bytes of base64-encoded data about the invoking client to pass to the function in the context object.</td>
</tr>
<tr id="parameter-X-Amz-Durable-Execution-Name">
    <td><CopyableCode code="X-Amz-Durable-Execution-Name" /></td>
    <td><code>string</code></td>
    <td>Optional unique name for the durable execution. When you start your special function, you can give it a unique name to identify this specific execution. It's like giving a nickname to a task.</td>
</tr>
<tr id="parameter-X-Amz-Invocation-Type">
    <td><CopyableCode code="X-Amz-Invocation-Type" /></td>
    <td><code>string</code></td>
    <td>Use one of the following options: RequestResponse (default) – Invoke the function synchronously. Keep the connection open until the function returns a response or times out. The API operation response includes the function response and additional data. DryRun – Validate parameter values and verify that the IAM user or role has permission to invoke the function.</td>
</tr>
<tr id="parameter-X-Amz-Log-Type">
    <td><CopyableCode code="X-Amz-Log-Type" /></td>
    <td><code>string</code></td>
    <td>Set to Tail to include the execution log in the response. Applies to synchronously invoked functions only.</td>
</tr>
<tr id="parameter-X-Amz-Tenant-Id">
    <td><CopyableCode code="X-Amz-Tenant-Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the tenant in a multi-tenant Lambda function.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_function"
    values={[
        { label: 'get_function', value: 'get_function' },
        { label: 'list_functions', value: 'list_functions' }
    ]}
>
<TabItem value="get_function">

Returns information about the function or function version, with a link to download the deployment package that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are returned.

```sql
SELECT
code,
concurrency,
configuration,
tags,
tags_error
FROM aws.lambda.functions
WHERE function_name = '{{ function_name }}' -- required
AND region = '{{ region }}' -- required
AND Qualifier = '{{ Qualifier }}'
;
```
</TabItem>
<TabItem value="list_functions">

Returns a list of Lambda functions, with the version-specific configuration of each. Lambda returns up to 50 functions per call. Set FunctionVersion to ALL to include all published versions of each function in addition to the unpublished version. The ListFunctions operation returns a subset of the FunctionConfiguration fields. To get the additional fields (State, StateReasonCode, StateReason, LastUpdateStatus, LastUpdateStatusReason, LastUpdateStatusReasonCode, RuntimeVersionConfig) for a function or version, use GetFunction.

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
FROM aws.lambda.functions
WHERE region = '{{ region }}' -- required
AND MasterRegion = '{{ MasterRegion }}'
AND FunctionVersion = '{{ FunctionVersion }}'
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_function"
    values={[
        { label: 'create_function', value: 'create_function' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_function">

Creates a Lambda function. To create a function, you need a deployment package and an execution role. The deployment package is a .zip file archive or container image that contains your function code. The execution role grants the function permission to use Amazon Web Services services, such as Amazon CloudWatch Logs for log streaming and X-Ray for request tracing. If the deployment package is a container image, then you set the package type to Image. For a container image, the code property must include the URI of a container image in the Amazon ECR registry. You do not need to specify the handler and runtime properties. If the deployment package is a .zip file archive, then you set the package type to Zip. For a .zip file archive, the code property specifies the location of the .zip file. You must also specify the handler and runtime properties. The code in the deployment package must be compatible with the target instruction set architecture of the function (x86-64 or arm64). If you do not specify the architecture, then the default value is x86-64. When you create a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute or so. During this time, you can't invoke or modify the function. The State, StateReason, and StateReasonCode fields in the response from GetFunctionConfiguration indicate when the function is ready to invoke. For more information, see Lambda function states. A function has an unpublished version, and can have published versions and aliases. The unpublished version changes when you update your function's code and configuration. A published version is a snapshot of your function code and configuration that can't be changed. An alias is a named resource that maps to a version, and can be changed to map to a different version. Use the Publish parameter to create version 1 of your function from its initial configuration. The other parameters let you configure version-specific and function-level settings. You can modify version-specific settings later with UpdateFunctionConfiguration. Function-level settings apply to both the unpublished and published versions of the function, and include tags (TagResource) and per-function concurrency limits (PutFunctionConcurrency). You can use code signing if your deployment package is a .zip file archive. To enable code signing for this function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with UpdateFunctionCode, Lambda checks that the code package has a valid signature from a trusted publisher. The code-signing configuration includes set of signing profiles, which define the trusted publishers for this function. If another Amazon Web Services account or an Amazon Web Services service invokes your function, use AddPermission to grant permission by creating a resource-based Identity and Access Management (IAM) policy. You can grant permissions at the function level, on a version, or on an alias. To invoke your function directly, use Invoke. To invoke your function in response to events in other Amazon Web Services services, create an event source mapping (CreateEventSourceMapping), or configure a function trigger in the other service. For more information, see Invoking Lambda functions.

```sql
INSERT INTO aws.lambda.functions (
FunctionName,
Runtime,
Role,
Handler,
Code,
Description,
Timeout,
MemorySize,
Publish,
VpcConfig,
PackageType,
DeadLetterConfig,
Environment,
KMSKeyArn,
TracingConfig,
Tags,
Layers,
FileSystemConfigs,
ImageConfig,
CodeSigningConfigArn,
Architectures,
EphemeralStorage,
SnapStart,
LoggingConfig,
CapacityProviderConfig,
PublishTo,
DurableConfig,
TenancyConfig,
region
)
SELECT 
'{{ FunctionName }}' /* required */,
'{{ Runtime }}',
'{{ Role }}',
'{{ Handler }}',
'{{ Code }}',
'{{ Description }}',
{{ Timeout }},
{{ MemorySize }},
{{ Publish }},
'{{ VpcConfig }}',
'{{ PackageType }}',
'{{ DeadLetterConfig }}',
'{{ Environment }}',
'{{ KMSKeyArn }}',
'{{ TracingConfig }}',
'{{ Tags }}',
'{{ Layers }}',
'{{ FileSystemConfigs }}',
'{{ ImageConfig }}',
'{{ CodeSigningConfigArn }}',
'{{ Architectures }}',
'{{ EphemeralStorage }}',
'{{ SnapStart }}',
'{{ LoggingConfig }}',
'{{ CapacityProviderConfig }}',
'{{ PublishTo }}',
'{{ DurableConfig }}',
'{{ TenancyConfig }}',
'{{ region }}'
RETURNING
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
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: functions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the functions resource.
    - name: FunctionName
      value: "{{ FunctionName }}"
    - name: Runtime
      value: "{{ Runtime }}"
      valid_values: ['nodejs', 'nodejs4.3', 'nodejs6.10', 'nodejs8.10', 'nodejs10.x', 'nodejs12.x', 'nodejs14.x', 'nodejs16.x', 'java8', 'java8.al2', 'java11', 'python2.7', 'python3.6', 'python3.7', 'python3.8', 'python3.9', 'dotnetcore1.0', 'dotnetcore2.0', 'dotnetcore2.1', 'dotnetcore3.1', 'dotnet6', 'dotnet8', 'nodejs4.3-edge', 'go1.x', 'ruby2.5', 'ruby2.7', 'provided', 'provided.al2', 'nodejs18.x', 'python3.10', 'java17', 'ruby3.2', 'ruby3.3', 'ruby3.4', 'python3.11', 'nodejs20.x', 'provided.al2023', 'python3.12', 'java21', 'python3.13', 'nodejs22.x', 'nodejs24.x', 'python3.14', 'java25', 'dotnet10', 'ruby4.0']
    - name: Role
      value: "{{ Role }}"
    - name: Handler
      value: "{{ Handler }}"
    - name: Code
      description: |
        The code for the Lambda function. You can either specify an object in Amazon S3, upload a .zip file archive deployment package directly, or specify the URI of a container image.
      value:
        ZipFile: "{{ ZipFile }}"
        S3Bucket: "{{ S3Bucket }}"
        S3Key: "{{ S3Key }}"
        S3ObjectVersion: "{{ S3ObjectVersion }}"
        ImageUri: "{{ ImageUri }}"
        SourceKMSKeyArn: "{{ SourceKMSKeyArn }}"
    - name: Description
      value: "{{ Description }}"
    - name: Timeout
      value: {{ Timeout }}
    - name: MemorySize
      value: {{ MemorySize }}
    - name: Publish
      value: {{ Publish }}
    - name: VpcConfig
      description: |
        The VPC security groups and subnets that are attached to a Lambda function. For more information, see Configuring a Lambda function to access resources in a VPC.
      value:
        SubnetIds:
          - "{{ SubnetIds }}"
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
        Ipv6AllowedForDualStack: {{ Ipv6AllowedForDualStack }}
    - name: PackageType
      value: "{{ PackageType }}"
      valid_values: ['Zip', 'Image']
    - name: DeadLetterConfig
      description: |
        The dead-letter queue for failed asynchronous invocations.
      value:
        TargetArn: "{{ TargetArn }}"
    - name: Environment
      description: |
        A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration.
      value:
        Variables: "{{ Variables }}"
    - name: KMSKeyArn
      value: "{{ KMSKeyArn }}"
    - name: TracingConfig
      description: |
        The function's X-Ray tracing configuration. To sample and record incoming requests, set Mode to Active.
      value:
        Mode: "{{ Mode }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: Layers
      value:
        - "{{ Layers }}"
    - name: FileSystemConfigs
      value:
        - Arn: "{{ Arn }}"
          LocalMountPath: "{{ LocalMountPath }}"
    - name: ImageConfig
      description: |
        Configuration values that override the container image Dockerfile settings. For more information, see Container image settings.
      value:
        EntryPoint:
          - "{{ EntryPoint }}"
        Command:
          - "{{ Command }}"
        WorkingDirectory: "{{ WorkingDirectory }}"
    - name: CodeSigningConfigArn
      value: "{{ CodeSigningConfigArn }}"
    - name: Architectures
      value:
        - "{{ Architectures }}"
    - name: EphemeralStorage
      description: |
        The size of the function's /tmp directory in MB. The default value is 512, but can be any whole number between 512 and 10,240 MB. For more information, see Configuring ephemeral storage (console).
      value:
        Size: {{ Size }}
    - name: SnapStart
      description: |
        The function's Lambda SnapStart setting. Set ApplyOn to PublishedVersions to create a snapshot of the initialized execution environment when you publish a function version.
      value:
        ApplyOn: "{{ ApplyOn }}"
    - name: LoggingConfig
      description: |
        The function's Amazon CloudWatch Logs configuration settings.
      value:
        LogFormat: "{{ LogFormat }}"
        ApplicationLogLevel: "{{ ApplicationLogLevel }}"
        SystemLogLevel: "{{ SystemLogLevel }}"
        LogGroup: "{{ LogGroup }}"
    - name: CapacityProviderConfig
      description: |
        Configuration for the capacity provider that manages compute resources for Lambda functions.
      value:
        LambdaManagedInstancesCapacityProviderConfig:
          CapacityProviderArn: "{{ CapacityProviderArn }}"
          PerExecutionEnvironmentMaxConcurrency: {{ PerExecutionEnvironmentMaxConcurrency }}
          ExecutionEnvironmentMemoryGiBPerVCpu: {{ ExecutionEnvironmentMemoryGiBPerVCpu }}
    - name: PublishTo
      value: "{{ PublishTo }}"
      valid_values: ['LATEST_PUBLISHED']
    - name: DurableConfig
      description: |
        Configuration settings for durable functions, including execution timeout and retention period for execution history.
      value:
        RetentionPeriodInDays: {{ RetentionPeriodInDays }}
        ExecutionTimeout: {{ ExecutionTimeout }}
    - name: TenancyConfig
      description: |
        Specifies the tenant isolation mode configuration for a Lambda function. This allows you to configure specific tenant isolation strategies for your function invocations. Tenant isolation configuration cannot be modified after function creation.
      value:
        TenantIsolationMode: "{{ TenantIsolationMode }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_permission"
    values={[
        { label: 'add_permission', value: 'add_permission' },
        { label: 'remove_permission', value: 'remove_permission' },
        { label: 'update_function_code', value: 'update_function_code' }
    ]}
>
<TabItem value="add_permission">

Grants a principal permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function. Note: Lambda does not support adding policies to version $LATEST. To grant permission to another account, specify the account ID as the Principal. To grant permission to an organization defined in Organizations, specify the organization ID as the PrincipalOrgID. For Amazon Web Services services, the principal is a domain-style identifier that the service defines, such as s3.amazonaws.com or sns.amazonaws.com. For Amazon Web Services services, you can also specify the ARN of the associated resource as the SourceArn. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function. This operation adds a statement to a resource-based permissions policy for the function. For more information about function policies, see Using resource-based policies for Lambda.

```sql
UPDATE aws.lambda.functions
SET 
StatementId = '{{ StatementId }}',
Action = '{{ Action }}',
Principal = '{{ Principal }}',
SourceArn = '{{ SourceArn }}',
SourceAccount = '{{ SourceAccount }}',
EventSourceToken = '{{ EventSourceToken }}',
RevisionId = '{{ RevisionId }}',
PrincipalOrgID = '{{ PrincipalOrgID }}',
FunctionUrlAuthType = '{{ FunctionUrlAuthType }}',
InvokedViaFunctionUrl = {{ InvokedViaFunctionUrl }}
WHERE 
function_name = '{{ function_name }}' --required
AND region = '{{ region }}' --required
AND StatementId = '{{ StatementId }}' --required
AND Action = '{{ Action }}' --required
AND Principal = '{{ Principal }}' --required
AND Qualifier = '{{ Qualifier}}'
RETURNING
statement;
```
</TabItem>
<TabItem value="remove_permission">

Revokes function-use permission from an Amazon Web Services service or another Amazon Web Services account. You can get the ID of the statement from the output of GetPolicy.

```sql
UPDATE aws.lambda.functions
SET 
-- No updatable properties
WHERE 
function_name = '{{ function_name }}' --required
AND statement_id = '{{ statement_id }}' --required
AND region = '{{ region }}' --required
AND Qualifier = '{{ Qualifier}}'
AND RevisionId = '{{ RevisionId}}';
```
</TabItem>
<TabItem value="update_function_code">

Updates a Lambda function's code. If code signing is enabled for the function, the code package must be signed by a trusted publisher. For more information, see Configuring code signing for Lambda. If the function's package type is Image, then you must specify the code package in ImageUri as the URI of a container image in the Amazon ECR registry. If the function's package type is Zip, then you must specify the deployment package as a .zip file archive. Enter the Amazon S3 bucket and key of the code .zip file location. You can also provide the function code inline using the ZipFile field. The code in the deployment package must be compatible with the target instruction set architecture of the function (x86-64 or arm64). The function's code is locked when you publish a version. You can't modify the code of a published version, only the unpublished version. For a function defined as a container image, Lambda resolves the image tag to an image digest. In Amazon ECR, if you update the image tag to a new image, Lambda does not automatically update the function.

```sql
UPDATE aws.lambda.functions
SET 
ZipFile = '{{ ZipFile }}',
S3Bucket = '{{ S3Bucket }}',
S3Key = '{{ S3Key }}',
S3ObjectVersion = '{{ S3ObjectVersion }}',
ImageUri = '{{ ImageUri }}',
Publish = {{ Publish }},
DryRun = {{ DryRun }},
RevisionId = '{{ RevisionId }}',
Architectures = '{{ Architectures }}',
SourceKMSKeyArn = '{{ SourceKMSKeyArn }}',
PublishTo = '{{ PublishTo }}'
WHERE 
function_name = '{{ function_name }}' --required
AND region = '{{ region }}' --required
RETURNING
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
vpc_config;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_function"
    values={[
        { label: 'delete_function', value: 'delete_function' }
    ]}
>
<TabItem value="delete_function">

Deletes a Lambda function. To delete a specific function version, use the Qualifier parameter. Otherwise, all versions and aliases are deleted. This doesn't require the user to have explicit permissions for DeleteAlias. A deleted Lambda function cannot be recovered. Ensure that you specify the correct function name and version before deleting. To delete Lambda event source mappings that invoke a function, use DeleteEventSourceMapping. For Amazon Web Services services and resources that invoke your function directly, delete the trigger in the service where you originally configured it.

```sql
DELETE FROM aws.lambda.functions
WHERE function_name = '{{ function_name }}' --required
AND region = '{{ region }}' --required
AND Qualifier = '{{ Qualifier }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="invoke"
    values={[
        { label: 'invoke', value: 'invoke' },
        { label: 'invoke_async', value: 'invoke_async' },
        { label: 'invoke_with_response_stream', value: 'invoke_with_response_stream' },
        { label: 'publish_version', value: 'publish_version' }
    ]}
>
<TabItem value="invoke">

Invokes a Lambda function. You can invoke a function synchronously (and wait for the response), or asynchronously. By default, Lambda invokes your function synchronously (i.e. theInvocationType is RequestResponse). To invoke a function asynchronously, set InvocationType to Event. Lambda passes the ClientContext object to your function for synchronous invocations only. For synchronous invocations, the maximum payload size is 6 MB. For asynchronous invocations, the maximum payload size is 1 MB. For synchronous invocation, details about the function response, including errors, are included in the response body and headers. For either invocation type, you can find more information in the execution log and trace. When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type, client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an error, Lambda executes the function up to two more times. For more information, see Error handling and automatic retries in Lambda. For asynchronous invocation, Lambda adds events to a queue before sending them to your function. If your function does not have enough capacity to keep up with the queue, events may be lost. Occasionally, your function may receive the same event multiple times, even if no error occurs. To retain events that were not processed, configure your function with a dead-letter queue. The status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your function from executing, such as permissions errors, quota errors, or issues with your function's code and configuration. For example, Lambda returns TooManyRequestsException if running the function would cause you to exceed a concurrency limit at either the account level (ConcurrentInvocationLimitExceeded) or function level (ReservedFunctionConcurrentInvocationLimitExceeded). For functions with a long timeout, your client might disconnect during synchronous invocation while it waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long connections with timeout or keep-alive settings. This operation requires permission for the lambda:InvokeFunction action. For details on how to set up permissions for cross-account invocations, see Granting function access to other accounts.

```sql
EXEC aws.lambda.functions.invoke 
@function_name='{{ function_name }}' --required, 
@region='{{ region }}' --required, 
@X-Amz-Invocation-Type='{{ X-Amz-Invocation-Type }}', 
@X-Amz-Log-Type='{{ X-Amz-Log-Type }}', 
@X-Amz-Client-Context='{{ X-Amz-Client-Context }}', 
@X-Amz-Durable-Execution-Name='{{ X-Amz-Durable-Execution-Name }}', 
@Qualifier='{{ Qualifier }}', 
@X-Amz-Tenant-Id='{{ X-Amz-Tenant-Id }}' 
@@json=
'{
"Payload": "{{ Payload }}"
}'
;
```
</TabItem>
<TabItem value="invoke_async">

For asynchronous function invocation, use Invoke. Invokes a function asynchronously. The payload limit is 256KB. For larger payloads, for up to 1MB, use Invoke. If you do use the InvokeAsync action, note that it doesn't support the use of X-Ray active tracing. Trace ID is not propagated to the function, even if X-Ray active tracing is turned on.

```sql
EXEC aws.lambda.functions.invoke_async 
@function_name='{{ function_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"InvokeArgs": "{{ InvokeArgs }}"
}'
;
```
</TabItem>
<TabItem value="invoke_with_response_stream">

Configure your Lambda functions to stream response payloads back to clients. For more information, see Configuring a Lambda function to stream responses. This operation requires permission for the lambda:InvokeFunction action. For details on how to set up permissions for cross-account invocations, see Granting function access to other accounts.

```sql
EXEC aws.lambda.functions.invoke_with_response_stream 
@function_name='{{ function_name }}' --required, 
@region='{{ region }}' --required, 
@X-Amz-Invocation-Type='{{ X-Amz-Invocation-Type }}', 
@X-Amz-Log-Type='{{ X-Amz-Log-Type }}', 
@X-Amz-Client-Context='{{ X-Amz-Client-Context }}', 
@Qualifier='{{ Qualifier }}', 
@X-Amz-Tenant-Id='{{ X-Amz-Tenant-Id }}' 
@@json=
'{
"Payload": "{{ Payload }}"
}'
;
```
</TabItem>
<TabItem value="publish_version">

Creates a version from the current code and configuration of a function. Use versions to create a snapshot of your function code and configuration that doesn't change. Lambda doesn't publish a version if the function's configuration and code haven't changed since the last version. Use UpdateFunctionCode or UpdateFunctionConfiguration to update the function before publishing a version. Clients can invoke versions directly or with an alias. To create an alias, use CreateAlias.

```sql
EXEC aws.lambda.functions.publish_version 
@function_name='{{ function_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"CodeSha256": "{{ CodeSha256 }}", 
"Description": "{{ Description }}", 
"RevisionId": "{{ RevisionId }}", 
"PublishTo": "{{ PublishTo }}"
}'
;
```
</TabItem>
</Tabs>
