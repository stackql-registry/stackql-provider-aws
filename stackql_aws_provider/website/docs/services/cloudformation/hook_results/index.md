--- 
title: hook_results
hide_title: false
hide_table_of_contents: false
keywords:
  - hook_results
  - cloudformation
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

Creates, updates, deletes, gets or lists a <code>hook_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hook_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.hook_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_hook_result"
    values={[
        { label: 'get_hook_result', value: 'get_hook_result' },
        { label: 'list_hook_results', value: 'list_hook_results' }
    ]}
>
<TabItem value="get_hook_result">

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
    <td><CopyableCode code="line_items" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_hook_results">

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
    <td><CopyableCode code="FailureMode" /></td>
    <td><code>string</code></td>
    <td>The failure mode of the invocation.</td>
</tr>
<tr>
    <td><CopyableCode code="HookExecutionTarget" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the target stack or request token of the Cloud Control API operation. Only shown in responses when the request does not specify TargetType and TargetId filters.</td>
</tr>
<tr>
    <td><CopyableCode code="HookResultId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this Hook invocation result.</td>
</tr>
<tr>
    <td><CopyableCode code="HookStatusReason" /></td>
    <td><code>string</code></td>
    <td>A description of the Hook results status. For example, if the Hook result is in a failed state, this may contain additional information for the failed state.</td>
</tr>
<tr>
    <td><CopyableCode code="InvocationPoint" /></td>
    <td><code>string</code></td>
    <td>The specific point in the provisioning process where the Hook is invoked.</td>
</tr>
<tr>
    <td><CopyableCode code="InvokedAt" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the Hook was invoked. Only shown in responses when the request does not specify TargetType and TargetId filters.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the Hook invocation. The following statuses are possible: HOOK_IN_PROGRESS: The Hook is currently running. HOOK_COMPLETE_SUCCEEDED: The Hook completed successfully. HOOK_COMPLETE_FAILED: The Hook completed but failed validation. HOOK_FAILED: The Hook encountered an error during execution.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Hook invocation target.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetType" /></td>
    <td><code>string</code></td>
    <td>The target type that the Hook was invoked against.</td>
</tr>
<tr>
    <td><CopyableCode code="TypeArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Hook that was invoked.</td>
</tr>
<tr>
    <td><CopyableCode code="TypeConfigurationVersionId" /></td>
    <td><code>string</code></td>
    <td>The version of the Hook configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="TypeName" /></td>
    <td><code>string</code></td>
    <td>The name of the Hook that was invoked.</td>
</tr>
<tr>
    <td><CopyableCode code="TypeVersionId" /></td>
    <td><code>string</code></td>
    <td>The version of the Hook that was invoked.</td>
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
    <td><a href="#get_hook_result"><CopyableCode code="get_hook_result" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-HookResultId"><code>HookResultId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information and remediation guidance for a Hook invocation result. If the Hook uses a KMS key to encrypt annotations, callers of the GetHookResult operation must have kms:Decrypt permissions. For more information, see KMS key policy and permissions for encrypting CloudFormation Hooks results at rest in the CloudFormation Hooks User Guide.</td>
</tr>
<tr>
    <td><a href="#list_hook_results"><CopyableCode code="list_hook_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TargetType"><code>TargetType</code></a>, <a href="#parameter-TargetId"><code>TargetId</code></a>, <a href="#parameter-TypeArn"><code>TypeArn</code></a>, <a href="#parameter-Status"><code>Status</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns summaries of invoked Hooks. For more information, see View invocation summaries for CloudFormation Hooks in the CloudFormation Hooks User Guide. This operation supports the following parameter combinations: No parameters: Returns all Hook invocation summaries. TypeArn only: Returns summaries for a specific Hook. TypeArn and Status: Returns summaries for a specific Hook filtered by status. TargetId and TargetType: Returns summaries for a specific Hook invocation target.</td>
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
<tr id="parameter-HookResultId">
    <td><CopyableCode code="HookResultId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ID) of the Hook invocation result that you want details about. You can get the ID from the ListHookResults operation.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
<tr id="parameter-Status">
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Filters results by the status of Hook invocations. Can only be used in combination with TypeArn. Valid values are: HOOK_IN_PROGRESS: The Hook is currently running. HOOK_COMPLETE_SUCCEEDED: The Hook completed successfully. HOOK_COMPLETE_FAILED: The Hook completed but failed validation. HOOK_FAILED: The Hook encountered an error during execution.</td>
</tr>
<tr id="parameter-TargetId">
    <td><CopyableCode code="TargetId" /></td>
    <td><code>string</code></td>
    <td>Filters results by the unique identifier of the target the Hook was invoked against. For change sets, this is the change set ARN. When the target is a Cloud Control API operation, this value must be the HookRequestToken returned by the Cloud Control API request. For more information on the HookRequestToken, see ProgressEvent. Required when TargetType is specified and cannot be used otherwise.</td>
</tr>
<tr id="parameter-TargetType">
    <td><CopyableCode code="TargetType" /></td>
    <td><code>string</code></td>
    <td>Filters results by target type. Currently, only CHANGE_SET and CLOUD_CONTROL are supported filter options. Required when TargetId is specified and cannot be used otherwise.</td>
</tr>
<tr id="parameter-TypeArn">
    <td><CopyableCode code="TypeArn" /></td>
    <td><code>string</code></td>
    <td>Filters results by the ARN of the Hook. Can be used alone or in combination with Status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_hook_result"
    values={[
        { label: 'get_hook_result', value: 'get_hook_result' },
        { label: 'list_hook_results', value: 'list_hook_results' }
    ]}
>
<TabItem value="get_hook_result">

Retrieves detailed information and remediation guidance for a Hook invocation result. If the Hook uses a KMS key to encrypt annotations, callers of the GetHookResult operation must have kms:Decrypt permissions. For more information, see KMS key policy and permissions for encrypting CloudFormation Hooks results at rest in the CloudFormation Hooks User Guide.

```sql
SELECT
line_items
FROM aws.cloudformation.hook_results
WHERE HookResultId = '{{ HookResultId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_hook_results">

Returns summaries of invoked Hooks. For more information, see View invocation summaries for CloudFormation Hooks in the CloudFormation Hooks User Guide. This operation supports the following parameter combinations: No parameters: Returns all Hook invocation summaries. TypeArn only: Returns summaries for a specific Hook. TypeArn and Status: Returns summaries for a specific Hook filtered by status. TargetId and TargetType: Returns summaries for a specific Hook invocation target.

```sql
SELECT
FailureMode,
HookExecutionTarget,
HookResultId,
HookStatusReason,
InvocationPoint,
InvokedAt,
Status,
TargetId,
TargetType,
TypeArn,
TypeConfigurationVersionId,
TypeName,
TypeVersionId
FROM aws.cloudformation.hook_results
WHERE region = '{{ region }}' -- required
AND TargetType = '{{ TargetType }}'
AND TargetId = '{{ TargetId }}'
AND TypeArn = '{{ TypeArn }}'
AND Status = '{{ Status }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
