--- 
title: resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resources
  - resiliencehubv2
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

Creates, updates, deletes, gets or lists a <code>resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehubv2.resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resources"
    values={[
        { label: 'list_resources', value: 'list_resources' }
    ]}
>
<TabItem value="list_resources">

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
    <td><CopyableCode code="input_source" /></td>
    <td><code>object</code></td>
    <td>The input source that discovered the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>The resource details.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the resource.</td>
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
    <td><a href="#list_resources"><CopyableCode code="list_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-serviceFunctionId"><code>serviceFunctionId</code></a>, <a href="#parameter-awsRegion"><code>awsRegion</code></a>, <a href="#parameter-resourceTypes"><code>resourceTypes</code></a>, <a href="#parameter-billable"><code>billable</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List resources.</td>
</tr>
<tr>
    <td><a href="#create_service_function_resources"><CopyableCode code="create_service_function_resources" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-serviceFunctionId"><code>serviceFunctionId</code></a>, <a href="#parameter-resources"><code>resources</code></a></td>
    <td></td>
    <td>Associates resources with a service function.</td>
</tr>
<tr>
    <td><a href="#delete_service_function_resources"><CopyableCode code="delete_service_function_resources" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes resources from a service function.</td>
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
<tr id="parameter-serviceArn">
    <td><CopyableCode code="serviceArn" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-awsRegion">
    <td><CopyableCode code="awsRegion" /></td>
    <td><code>string</code></td>
    <td>Filter resources by AWS Region.</td>
</tr>
<tr id="parameter-billable">
    <td><CopyableCode code="billable" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to filter non-billable resources. When true (the default), the operation returns only billable resources.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-resourceTypes">
    <td><CopyableCode code="resourceTypes" /></td>
    <td><code>array</code></td>
    <td>The CloudFormation resource types to include in the response.</td>
</tr>
<tr id="parameter-serviceFunctionId">
    <td><CopyableCode code="serviceFunctionId" /></td>
    <td><code>string</code></td>
    <td>Filter resources by service function identifier.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_resources"
    values={[
        { label: 'list_resources', value: 'list_resources' }
    ]}
>
<TabItem value="list_resources">

List resources.

```sql
SELECT
input_source,
resource,
resource_identifier
FROM aws.resiliencehubv2.resources
WHERE serviceArn = '{{ serviceArn }}' -- required
AND region = '{{ region }}' -- required
AND serviceFunctionId = '{{ serviceFunctionId }}'
AND awsRegion = '{{ awsRegion }}'
AND resourceTypes = '{{ resourceTypes }}'
AND billable = '{{ billable }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service_function_resources"
    values={[
        { label: 'create_service_function_resources', value: 'create_service_function_resources' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service_function_resources">

Associates resources with a service function.

```sql
INSERT INTO aws.resiliencehubv2.resources (
serviceArn,
serviceFunctionId,
resources,
region
)
SELECT 
'{{ serviceArn }}' /* required */,
'{{ serviceFunctionId }}' /* required */,
'{{ resources }}' /* required */,
'{{ region }}'
RETURNING
resources,
service_arn,
service_function_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resources
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resources resource.
    - name: serviceArn
      value: "{{ serviceArn }}"
      description: |
        ARN identifier.
    - name: serviceFunctionId
      value: "{{ serviceFunctionId }}"
    - name: resources
      value:
        - "{{ resources }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service_function_resources"
    values={[
        { label: 'delete_service_function_resources', value: 'delete_service_function_resources' }
    ]}
>
<TabItem value="delete_service_function_resources">

Removes resources from a service function.

```sql
DELETE FROM aws.resiliencehubv2.resources
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
