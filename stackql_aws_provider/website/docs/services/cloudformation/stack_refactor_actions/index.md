--- 
title: stack_refactor_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - stack_refactor_actions
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

Creates, updates, deletes, gets or lists a <code>stack_refactor_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stack_refactor_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.stack_refactor_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_stack_refactor_actions"
    values={[
        { label: 'list_stack_refactor_actions', value: 'list_stack_refactor_actions' }
    ]}
>
<TabItem value="list_stack_refactor_actions">

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
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The action that CloudFormation takes on the stack.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description to help you identify the refactor.</td>
</tr>
<tr>
    <td><CopyableCode code="detection" /></td>
    <td><code>string</code></td>
    <td>The detection type is one of the following: Auto: CloudFormation figured out the mapping on its own. Manual: The customer provided the mapping in the ResourceMapping parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="detection_reason" /></td>
    <td><code>string</code></td>
    <td>The description of the detection type.</td>
</tr>
<tr>
    <td><CopyableCode code="entity" /></td>
    <td><code>string</code></td>
    <td>The type that will be evaluated in the StackRefactorAction. The following are potential Entity types: Stack Resource</td>
</tr>
<tr>
    <td><CopyableCode code="physical_resource_id" /></td>
    <td><code>string</code></td>
    <td>The name or unique identifier associated with the physical instance of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_identifier" /></td>
    <td><code>string</code></td>
    <td>A key-value pair that identifies the target resource. The key is an identifier property (for example, BucketName for AWS::S3::Bucket resources) and the value is the actual property value (for example, MyS3Bucket).</td>
</tr>
<tr>
    <td><CopyableCode code="resource_mapping" /></td>
    <td><code>string</code></td>
    <td>The mapping for the stack resource Source and stack resource Destination.</td>
</tr>
<tr>
    <td><CopyableCode code="tag_resources" /></td>
    <td><code>string</code></td>
    <td>Assigns one or more tags to specified resources.</td>
</tr>
<tr>
    <td><CopyableCode code="untag_resources" /></td>
    <td><code>string</code></td>
    <td>Removes one or more tags to specified resources.</td>
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
    <td><a href="#list_stack_refactor_actions"><CopyableCode code="list_stack_refactor_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-StackRefactorId"><code>StackRefactorId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Lists the stack refactor actions that will be taken after calling the ExecuteStackRefactor action.</td>
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
<tr id="parameter-StackRefactorId">
    <td><CopyableCode code="StackRefactorId" /></td>
    <td><code>string</code></td>
    <td>The ID associated with the stack refactor created from the CreateStackRefactor action.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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
    defaultValue="list_stack_refactor_actions"
    values={[
        { label: 'list_stack_refactor_actions', value: 'list_stack_refactor_actions' }
    ]}
>
<TabItem value="list_stack_refactor_actions">

Lists the stack refactor actions that will be taken after calling the ExecuteStackRefactor action.

```sql
SELECT
action,
description,
detection,
detection_reason,
entity,
physical_resource_id,
resource_identifier,
resource_mapping,
tag_resources,
untag_resources
FROM aws.cloudformation.stack_refactor_actions
WHERE StackRefactorId = '{{ StackRefactorId }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>
