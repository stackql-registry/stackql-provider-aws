--- 
title: roots
hide_title: false
hide_table_of_contents: false
keywords:
  - roots
  - sts
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

Creates, updates, deletes, gets or lists a <code>roots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="roots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sts.roots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#assume_root"><CopyableCode code="assume_root" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-TargetPrincipal"><code>TargetPrincipal</code></a>, <a href="#parameter-TaskPolicyArn"><code>TaskPolicyArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DurationSeconds"><code>DurationSeconds</code></a>, <a href="#parameter-MinimumSessionTokenSize"><code>MinimumSessionTokenSize</code></a></td>
    <td>Returns a set of short term credentials you can use to perform privileged tasks on a member account in your organization. You must use credentials from an Organizations management account or a delegated administrator account for IAM to call AssumeRoot. You cannot use root user credentials to make this call. Before you can launch a privileged session, you must have centralized root access in your organization. For steps to enable this feature, see Centralize root access for member accounts in the IAM User Guide. The STS global endpoint is not supported for AssumeRoot. You must send this request to a Regional STS endpoint. For more information, see Endpoints. You can track AssumeRoot in CloudTrail logs to determine what actions were performed in a session. For more information, see Track privileged tasks in CloudTrail in the IAM User Guide. When granting access to privileged tasks you should only grant the necessary permissions required to perform that task. For more information, see Security best practices in IAM. In addition, you can use service control policies (SCPs) to manage and limit permissions in your organization. See General examples in the Organizations User Guide for more information on SCPs.</td>
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
<tr id="parameter-TargetPrincipal">
    <td><CopyableCode code="TargetPrincipal" /></td>
    <td><code>string</code></td>
    <td>The member account principal ARN or account ID.</td>
</tr>
<tr id="parameter-TaskPolicyArn">
    <td><CopyableCode code="TaskPolicyArn" /></td>
    <td><code>object</code></td>
    <td>The identity based policy that scopes the session to the privileged tasks that can be performed. You must use one of following Amazon Web Services managed policies to scope root session actions: IAMAuditRootUserCredentials IAMCreateRootUserPassword IAMDeleteRootUserCredentials S3UnlockBucketPolicy SQSUnlockQueuePolicy</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DurationSeconds">
    <td><CopyableCode code="DurationSeconds" /></td>
    <td><code>integer</code></td>
    <td>The duration, in seconds, of the privileged session. The value can range from 0 seconds up to the maximum session duration of 900 seconds (15 minutes). If you specify a value higher than this setting, the operation fails. By default, the value is set to 900 seconds.</td>
</tr>
<tr id="parameter-MinimumSessionTokenSize">
    <td><CopyableCode code="MinimumSessionTokenSize" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="assume_root"
    values={[
        { label: 'assume_root', value: 'assume_root' }
    ]}
>
<TabItem value="assume_root">

Returns a set of short term credentials you can use to perform privileged tasks on a member account in your organization. You must use credentials from an Organizations management account or a delegated administrator account for IAM to call AssumeRoot. You cannot use root user credentials to make this call. Before you can launch a privileged session, you must have centralized root access in your organization. For steps to enable this feature, see Centralize root access for member accounts in the IAM User Guide. The STS global endpoint is not supported for AssumeRoot. You must send this request to a Regional STS endpoint. For more information, see Endpoints. You can track AssumeRoot in CloudTrail logs to determine what actions were performed in a session. For more information, see Track privileged tasks in CloudTrail in the IAM User Guide. When granting access to privileged tasks you should only grant the necessary permissions required to perform that task. For more information, see Security best practices in IAM. In addition, you can use service control policies (SCPs) to manage and limit permissions in your organization. See General examples in the Organizations User Guide for more information on SCPs.

```sql
EXEC aws.sts.roots.assume_root 
@TargetPrincipal='{{ TargetPrincipal }}' --required, 
@TaskPolicyArn='{{ TaskPolicyArn }}' --required, 
@region='{{ region }}' --required, 
@DurationSeconds='{{ DurationSeconds }}', 
@MinimumSessionTokenSize='{{ MinimumSessionTokenSize }}'
;
```
</TabItem>
</Tabs>
