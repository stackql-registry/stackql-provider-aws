--- 
title: rescore_execution_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - rescore_execution_plans
  - kendra_ranking
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

Creates, updates, deletes, gets or lists a <code>rescore_execution_plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rescore_execution_plans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kendra_ranking.rescore_execution_plans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_rescore_execution_plan"
    values={[
        { label: 'describe_rescore_execution_plan', value: 'describe_rescore_execution_plan' }
    ]}
>
<TabItem value="describe_rescore_execution_plan">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the rescore execution plan. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_units" /></td>
    <td><code>object</code></td>
    <td>The capacity units set for the rescore execution plan. A capacity of zero indicates that the rescore execution plan is using the default capacity. For more information on the default capacity and additional capacity units, see Adjusting capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp of when the rescore execution plan was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the rescore execution plan. (pattern: &lt;code&gt;^\P&#123;C&#125;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>When the Status field value is FAILED, the ErrorMessage field contains a message that explains why. (pattern: &lt;code&gt;^\P&#123;C&#125;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the rescore execution plan. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name for the rescore execution plan. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the rescore execution plan. When the value is ACTIVE, the rescore execution plan is ready for use. If the Status field value is FAILED, the ErrorMessage field contains a message that explains why. (CREATING, UPDATING, ACTIVE, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp of when the rescore execution plan was last updated.</td>
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
    <td><a href="#describe_rescore_execution_plan"><CopyableCode code="describe_rescore_execution_plan" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the Rescore API.</td>
</tr>
<tr>
    <td><a href="#create_rescore_execution_plan"><CopyableCode code="create_rescore_execution_plan" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the Rescore API. You set the number of capacity units that you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results. For an example of using the CreateRescoreExecutionPlan API, including using the Python and Java SDKs, see Semantically ranking a search service's results.</td>
</tr>
<tr>
    <td><a href="#update_rescore_execution_plan"><CopyableCode code="update_rescore_execution_plan" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the Rescore API. You can update the number of capacity units you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.</td>
</tr>
<tr>
    <td><a href="#delete_rescore_execution_plan"><CopyableCode code="delete_rescore_execution_plan" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the Rescore API.</td>
</tr>
<tr>
    <td><a href="#list_rescore_execution_plans"><CopyableCode code="list_rescore_execution_plans" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists your rescore execution plans. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the Rescore API.</td>
</tr>
<tr>
    <td><a href="#rescore"><CopyableCode code="rescore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RescoreExecutionPlanId"><code>RescoreExecutionPlanId</code></a>, <a href="#parameter-SearchQuery"><code>SearchQuery</code></a>, <a href="#parameter-Documents"><code>Documents</code></a></td>
    <td></td>
    <td>Rescores or re-ranks search results from a search service such as OpenSearch (self managed). You use the semantic search capabilities of Amazon Kendra Intelligent Ranking to improve the search service's results.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_rescore_execution_plan"
    values={[
        { label: 'describe_rescore_execution_plan', value: 'describe_rescore_execution_plan' }
    ]}
>
<TabItem value="describe_rescore_execution_plan">

Gets information about a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the Rescore API.

```sql
SELECT
arn,
capacity_units,
created_at,
description,
error_message,
id,
name,
status,
updated_at
FROM aws.kendra_ranking.rescore_execution_plans
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rescore_execution_plan"
    values={[
        { label: 'create_rescore_execution_plan', value: 'create_rescore_execution_plan' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rescore_execution_plan">

Creates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the Rescore API. You set the number of capacity units that you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results. For an example of using the CreateRescoreExecutionPlan API, including using the Python and Java SDKs, see Semantically ranking a search service's results.

```sql
INSERT INTO aws.kendra_ranking.rescore_execution_plans (
Name,
Description,
CapacityUnits,
Tags,
ClientToken,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ CapacityUnits }}',
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
arn,
id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rescore_execution_plans
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the rescore_execution_plans resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A name for the rescore execution plan.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description for the rescore execution plan.
    - name: CapacityUnits
      description: |
        You can set additional capacity units to meet the needs of your rescore execution plan. You are given a single capacity unit by default. If you want to use the default capacity, you don't set additional capacity units. For more information on the default capacity and additional capacity units, see Adjusting capacity.
      value:
        RescoreCapacityUnits: {{ RescoreCapacityUnits }}
    - name: Tags
      description: |
        A list of key-value pairs that identify or categorize your rescore execution plan. You can also use tags to help control access to the rescore execution plan. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A token that you provide to identify the request to create a rescore execution plan. Multiple calls to the CreateRescoreExecutionPlanRequest API with the same client token will create only one rescore execution plan.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_rescore_execution_plan"
    values={[
        { label: 'update_rescore_execution_plan', value: 'update_rescore_execution_plan' }
    ]}
>
<TabItem value="update_rescore_execution_plan">

Updates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the Rescore API. You can update the number of capacity units you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.

```sql
UPDATE aws.kendra_ranking.rescore_execution_plans
SET 
Id = '{{ Id }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
CapacityUnits = '{{ CapacityUnits }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rescore_execution_plan"
    values={[
        { label: 'delete_rescore_execution_plan', value: 'delete_rescore_execution_plan' }
    ]}
>
<TabItem value="delete_rescore_execution_plan">

Deletes a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the Rescore API.

```sql
DELETE FROM aws.kendra_ranking.rescore_execution_plans
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_rescore_execution_plans"
    values={[
        { label: 'list_rescore_execution_plans', value: 'list_rescore_execution_plans' },
        { label: 'rescore', value: 'rescore' }
    ]}
>
<TabItem value="list_rescore_execution_plans">

Lists your rescore execution plans. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the Rescore API.

```sql
EXEC aws.kendra_ranking.rescore_execution_plans.list_rescore_execution_plans 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
<TabItem value="rescore">

Rescores or re-ranks search results from a search service such as OpenSearch (self managed). You use the semantic search capabilities of Amazon Kendra Intelligent Ranking to improve the search service's results.

```sql
EXEC aws.kendra_ranking.rescore_execution_plans.rescore 
@region='{{ region }}' --required 
@@json=
'{
"RescoreExecutionPlanId": "{{ RescoreExecutionPlanId }}", 
"SearchQuery": "{{ SearchQuery }}", 
"Documents": "{{ Documents }}"
}'
;
```
</TabItem>
</Tabs>
