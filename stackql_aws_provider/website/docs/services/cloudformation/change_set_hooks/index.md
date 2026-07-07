--- 
title: change_set_hooks
hide_title: false
hide_table_of_contents: false
keywords:
  - change_set_hooks
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

Creates, updates, deletes, gets or lists a <code>change_set_hooks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="change_set_hooks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.change_set_hooks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_change_set_hooks"
    values={[
        { label: 'describe_change_set_hooks', value: 'describe_change_set_hooks' }
    ]}
>
<TabItem value="describe_change_set_hooks">

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
    <td>Specify the Hook failure mode for non-compliant resources in the followings ways. FAIL Stops provisioning resources. WARN Allows provisioning to continue with a warning message.</td>
</tr>
<tr>
    <td><CopyableCode code="InvocationPoint" /></td>
    <td><code>string</code></td>
    <td>The specific point in the provisioning process where the Hook is invoked.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetDetails" /></td>
    <td><code>string</code></td>
    <td>Specifies details about the target that the Hook will run against.</td>
</tr>
<tr>
    <td><CopyableCode code="TypeConfigurationVersionId" /></td>
    <td><code>string</code></td>
    <td>The version ID of the type configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="TypeName" /></td>
    <td><code>string</code></td>
    <td>The unique name for your Hook. Specifies a three-part namespace for your Hook, with a recommended pattern of Organization::Service::Hook. The following organization namespaces are reserved and can't be used in your Hook type names: Alexa AMZN Amazon ASK AWS Custom Dev</td>
</tr>
<tr>
    <td><CopyableCode code="TypeVersionId" /></td>
    <td><code>string</code></td>
    <td>The version ID of the type specified.</td>
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
    <td><a href="#describe_change_set_hooks"><CopyableCode code="describe_change_set_hooks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ChangeSetName"><code>ChangeSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-LogicalResourceId"><code>LogicalResourceId</code></a></td>
    <td>Returns Hook-related information for the change set and a list of changes that CloudFormation makes when you run the change set.</td>
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
<tr id="parameter-ChangeSetName">
    <td><CopyableCode code="ChangeSetName" /></td>
    <td><code>string</code></td>
    <td>The name or Amazon Resource Name (ARN) of the change set that you want to describe.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-LogicalResourceId">
    <td><CopyableCode code="LogicalResourceId" /></td>
    <td><code>string</code></td>
    <td>If specified, lists only the Hooks related to the specified LogicalResourceId.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
<tr id="parameter-StackName">
    <td><CopyableCode code="StackName" /></td>
    <td><code>string</code></td>
    <td>If you specified the name of a change set, specify the stack name or stack ID (ARN) of the change set you want to describe.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_change_set_hooks"
    values={[
        { label: 'describe_change_set_hooks', value: 'describe_change_set_hooks' }
    ]}
>
<TabItem value="describe_change_set_hooks">

Returns Hook-related information for the change set and a list of changes that CloudFormation makes when you run the change set.

```sql
SELECT
FailureMode,
InvocationPoint,
TargetDetails,
TypeConfigurationVersionId,
TypeName,
TypeVersionId
FROM aws.cloudformation.change_set_hooks
WHERE ChangeSetName = '{{ ChangeSetName }}' -- required
AND region = '{{ region }}' -- required
AND StackName = '{{ StackName }}'
AND NextToken = '{{ NextToken }}'
AND LogicalResourceId = '{{ LogicalResourceId }}'
;
```
</TabItem>
</Tabs>
