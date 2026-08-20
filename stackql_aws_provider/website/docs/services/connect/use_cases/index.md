--- 
title: use_cases
hide_title: false
hide_table_of_contents: false
keywords:
  - use_cases
  - connect
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

Creates, updates, deletes, gets or lists a <code>use_cases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="use_cases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.use_cases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_use_cases"
    values={[
        { label: 'list_use_cases', value: 'list_use_cases' }
    ]}
>
<TabItem value="list_use_cases">

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
    <td><CopyableCode code="use_case_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the use case.</td>
</tr>
<tr>
    <td><CopyableCode code="use_case_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the use case.</td>
</tr>
<tr>
    <td><CopyableCode code="use_case_type" /></td>
    <td><code>string</code></td>
    <td>The type of use case to associate to the integration association. Each integration association can have only one of each use case type. (RULES_EVALUATION, CONNECT_CAMPAIGNS)</td>
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
    <td><a href="#list_use_cases"><CopyableCode code="list_use_cases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-integration_association_id"><code>integration_association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the use cases for the integration association.</td>
</tr>
<tr>
    <td><a href="#create_use_case"><CopyableCode code="create_use_case" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-integration_association_id"><code>integration_association_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UseCaseType"><code>UseCaseType</code></a></td>
    <td></td>
    <td>Creates a use case for an integration association.</td>
</tr>
<tr>
    <td><a href="#delete_use_case"><CopyableCode code="delete_use_case" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-integration_association_id"><code>integration_association_id</code></a>, <a href="#parameter-use_case_id"><code>use_case_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a use case from an integration association.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-integration_association_id">
    <td><CopyableCode code="integration_association_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the integration association.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-use_case_id">
    <td><CopyableCode code="use_case_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the use case.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_use_cases"
    values={[
        { label: 'list_use_cases', value: 'list_use_cases' }
    ]}
>
<TabItem value="list_use_cases">

Lists the use cases for the integration association.

```sql
SELECT
use_case_arn,
use_case_id,
use_case_type
FROM aws.connect.use_cases
WHERE instance_id = '{{ instance_id }}' -- required
AND integration_association_id = '{{ integration_association_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_use_case"
    values={[
        { label: 'create_use_case', value: 'create_use_case' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_use_case">

Creates a use case for an integration association.

```sql
INSERT INTO aws.connect.use_cases (
UseCaseType,
Tags,
instance_id,
integration_association_id,
region
)
SELECT 
'{{ UseCaseType }}' /* required */,
'{{ Tags }}',
'{{ instance_id }}',
'{{ integration_association_id }}',
'{{ region }}'
RETURNING
use_case_arn,
use_case_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: use_cases
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the use_cases resource.
    - name: integration_association_id
      value: "{{ integration_association_id }}"
      description: Required parameter for the use_cases resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the use_cases resource.
    - name: UseCaseType
      value: "{{ UseCaseType }}"
      valid_values: ['RULES_EVALUATION', 'CONNECT_CAMPAIGNS']
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_use_case"
    values={[
        { label: 'delete_use_case', value: 'delete_use_case' }
    ]}
>
<TabItem value="delete_use_case">

Deletes a use case from an integration association.

```sql
DELETE FROM aws.connect.use_cases
WHERE instance_id = '{{ instance_id }}' --required
AND integration_association_id = '{{ integration_association_id }}' --required
AND use_case_id = '{{ use_case_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
