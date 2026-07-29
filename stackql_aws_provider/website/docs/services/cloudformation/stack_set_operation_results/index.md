--- 
title: stack_set_operation_results
hide_title: false
hide_table_of_contents: false
keywords:
  - stack_set_operation_results
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

Creates, updates, deletes, gets or lists a <code>stack_set_operation_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stack_set_operation_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.stack_set_operation_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_stack_set_operation_results"
    values={[
        { label: 'list_stack_set_operation_results', value: 'list_stack_set_operation_results' }
    ]}
>
<TabItem value="list_stack_set_operation_results">

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
    <td><CopyableCode code="account" /></td>
    <td><code>string</code></td>
    <td>&#91;Self-managed permissions&#93; The name of the Amazon Web Services account for this operation result.</td>
</tr>
<tr>
    <td><CopyableCode code="account_gate_result" /></td>
    <td><code>string</code></td>
    <td>The results of the account gate function CloudFormation invokes, if present, before proceeding with StackSet operations in an account.</td>
</tr>
<tr>
    <td><CopyableCode code="organizational_unit_id" /></td>
    <td><code>string</code></td>
    <td>&#91;Service-managed permissions&#93; The organization root ID or organizational unit (OU) IDs that you specified for DeploymentTargets.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Web Services Region for this operation result.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The result status of the StackSet operation for the given account in the given Region. CANCELLED: The operation in the specified account and Region has been canceled. This is either because a user has stopped the StackSet operation, or because the failure tolerance of the StackSet operation has been exceeded. FAILED: The operation in the specified account and Region failed. If the StackSet operation fails in enough accounts within a Region, the failure tolerance for the StackSet operation as a whole might be exceeded. RUNNING: The operation in the specified account and Region is currently in progress. PENDING: The operation in the specified account and Region has yet to start. SUCCEEDED: The operation in the specified account and Region completed successfully.</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the assigned result status.</td>
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
    <td><a href="#list_stack_set_operation_results"><CopyableCode code="list_stack_set_operation_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-StackSetName"><code>StackSetName</code></a>, <a href="#parameter-OperationId"><code>OperationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-CallAs"><code>CallAs</code></a>, <a href="#parameter-Filters"><code>Filters</code></a></td>
    <td>Returns summary information about the results of a StackSet operation. This API provides eventually consistent reads meaning it may take some time but will eventually return the most up-to-date data.</td>
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
<tr id="parameter-OperationId">
    <td><CopyableCode code="OperationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the StackSet operation.</td>
</tr>
<tr id="parameter-StackSetName">
    <td><CopyableCode code="StackSetName" /></td>
    <td><code>string</code></td>
    <td>The name or unique ID of the StackSet that you want to get operation results for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CallAs">
    <td><CopyableCode code="CallAs" /></td>
    <td><code>string</code></td>
    <td>&#91;Service-managed permissions&#93; Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for StackSets with self-managed permissions. If you are signed in to the management account, specify SELF. If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>The filter to apply to operation results.</td>
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
    defaultValue="list_stack_set_operation_results"
    values={[
        { label: 'list_stack_set_operation_results', value: 'list_stack_set_operation_results' }
    ]}
>
<TabItem value="list_stack_set_operation_results">

Returns summary information about the results of a StackSet operation. This API provides eventually consistent reads meaning it may take some time but will eventually return the most up-to-date data.

```sql
SELECT
account,
account_gate_result,
organizational_unit_id,
region,
status,
status_reason
FROM aws.cloudformation.stack_set_operation_results
WHERE StackSetName = '{{ StackSetName }}' -- required
AND OperationId = '{{ OperationId }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND CallAs = '{{ CallAs }}'
AND Filters = '{{ Filters }}'
;
```
</TabItem>
</Tabs>
