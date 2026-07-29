--- 
title: stack_set_auto_deployment_targets
hide_title: false
hide_table_of_contents: false
keywords:
  - stack_set_auto_deployment_targets
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

Creates, updates, deletes, gets or lists a <code>stack_set_auto_deployment_targets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stack_set_auto_deployment_targets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.stack_set_auto_deployment_targets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_stack_set_auto_deployment_targets"
    values={[
        { label: 'list_stack_set_auto_deployment_targets', value: 'list_stack_set_auto_deployment_targets' }
    ]}
>
<TabItem value="list_stack_set_auto_deployment_targets">

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
    <td><CopyableCode code="organizational_unit_id" /></td>
    <td><code>string</code></td>
    <td>The organization root ID or organizational unit (OU) IDs where the StackSet is targeted.</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>string</code></td>
    <td>The list of Regions targeted for this organization or OU.</td>
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
    <td><a href="#list_stack_set_auto_deployment_targets"><CopyableCode code="list_stack_set_auto_deployment_targets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-StackSetName"><code>StackSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-CallAs"><code>CallAs</code></a></td>
    <td>Returns summary information about deployment targets for a StackSet.</td>
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
<tr id="parameter-StackSetName">
    <td><CopyableCode code="StackSetName" /></td>
    <td><code>string</code></td>
    <td>The name or unique ID of the StackSet that you want to get automatic deployment targets for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CallAs">
    <td><CopyableCode code="CallAs" /></td>
    <td><code>string</code></td>
    <td>Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for StackSets with self-managed permissions. If you are signed in to the management account, specify SELF. If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a NextToken value that you can assign to the NextToken request parameter to get the next set of results.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_stack_set_auto_deployment_targets"
    values={[
        { label: 'list_stack_set_auto_deployment_targets', value: 'list_stack_set_auto_deployment_targets' }
    ]}
>
<TabItem value="list_stack_set_auto_deployment_targets">

Returns summary information about deployment targets for a StackSet.

```sql
SELECT
organizational_unit_id,
regions
FROM aws.cloudformation.stack_set_auto_deployment_targets
WHERE StackSetName = '{{ StackSetName }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND CallAs = '{{ CallAs }}'
;
```
</TabItem>
</Tabs>
