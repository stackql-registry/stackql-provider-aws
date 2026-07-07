--- 
title: private_graph_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - private_graph_endpoints
  - neptune_graph
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

Creates, updates, deletes, gets or lists a <code>private_graph_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="private_graph_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptune_graph.private_graph_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_private_graph_endpoint"
    values={[
        { label: 'get_private_graph_endpoint', value: 'get_private_graph_endpoint' },
        { label: 'list_private_graph_endpoints', value: 'list_private_graph_endpoints' }
    ]}
>
<TabItem value="get_private_graph_endpoint">

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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the private endpoint. (CREATING, AVAILABLE, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="subnetIds" /></td>
    <td><code>array</code></td>
    <td>The subnet IDs involved.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcEndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the private endpoint. (pattern: &lt;code&gt;vpce-&#91;0-9a-f&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC where the private endpoint is located. (pattern: &lt;code&gt;vpc-&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_private_graph_endpoints">

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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the private graph endpoint. (CREATING, AVAILABLE, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="subnetIds" /></td>
    <td><code>array</code></td>
    <td>The subnet IDs associated with the private graph endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcEndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC endpoint. (pattern: &lt;code&gt;vpce-&#91;0-9a-f&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC in which the private graph endpoint is located. (pattern: &lt;code&gt;vpc-&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_private_graph_endpoint"><CopyableCode code="get_private_graph_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-graph_identifier"><code>graph_identifier</code></a>, <a href="#parameter-vpc_id"><code>vpc_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specified private endpoint.</td>
</tr>
<tr>
    <td><a href="#list_private_graph_endpoints"><CopyableCode code="list_private_graph_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-graph_identifier"><code>graph_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists private endpoints for a specified Neptune Analytics graph.</td>
</tr>
<tr>
    <td><a href="#create_private_graph_endpoint"><CopyableCode code="create_private_graph_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-graph_identifier"><code>graph_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create a private graph endpoint to allow private access to the graph from within a VPC. You can attach security groups to the private graph endpoint. VPC endpoint charges apply.</td>
</tr>
<tr>
    <td><a href="#delete_private_graph_endpoint"><CopyableCode code="delete_private_graph_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-graph_identifier"><code>graph_identifier</code></a>, <a href="#parameter-vpc_id"><code>vpc_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a private graph endpoint.</td>
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
<tr id="parameter-graph_identifier">
    <td><CopyableCode code="graph_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Neptune Analytics graph.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-vpc_id">
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC where the private endpoint is located.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The total number of records to return in the command's output. If the total number of records available is more than the value specified, nextToken is provided in the command's output. To resume pagination, provide the nextToken output value in the nextToken argument of a subsequent command. Do not use the nextToken response element directly outside of the Amazon CLI.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token used to paginate output. When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_private_graph_endpoint"
    values={[
        { label: 'get_private_graph_endpoint', value: 'get_private_graph_endpoint' },
        { label: 'list_private_graph_endpoints', value: 'list_private_graph_endpoints' }
    ]}
>
<TabItem value="get_private_graph_endpoint">

Retrieves information about a specified private endpoint.

```sql
SELECT
status,
subnetIds,
vpcEndpointId,
vpcId
FROM aws.neptune_graph.private_graph_endpoints
WHERE graph_identifier = '{{ graph_identifier }}' -- required
AND vpc_id = '{{ vpc_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_private_graph_endpoints">

Lists private endpoints for a specified Neptune Analytics graph.

```sql
SELECT
status,
subnetIds,
vpcEndpointId,
vpcId
FROM aws.neptune_graph.private_graph_endpoints
WHERE graph_identifier = '{{ graph_identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_private_graph_endpoint"
    values={[
        { label: 'create_private_graph_endpoint', value: 'create_private_graph_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_private_graph_endpoint">

Create a private graph endpoint to allow private access to the graph from within a VPC. You can attach security groups to the private graph endpoint. VPC endpoint charges apply.

```sql
INSERT INTO aws.neptune_graph.private_graph_endpoints (
vpcId,
subnetIds,
vpcSecurityGroupIds,
graph_identifier,
region
)
SELECT 
'{{ vpcId }}',
'{{ subnetIds }}',
'{{ vpcSecurityGroupIds }}',
'{{ graph_identifier }}',
'{{ region }}'
RETURNING
status,
subnetIds,
vpcEndpointId,
vpcId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: private_graph_endpoints
  props:
    - name: graph_identifier
      value: "{{ graph_identifier }}"
      description: Required parameter for the private_graph_endpoints resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the private_graph_endpoints resource.
    - name: vpcId
      value: "{{ vpcId }}"
    - name: subnetIds
      value:
        - "{{ subnetIds }}"
    - name: vpcSecurityGroupIds
      value:
        - "{{ vpcSecurityGroupIds }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_private_graph_endpoint"
    values={[
        { label: 'delete_private_graph_endpoint', value: 'delete_private_graph_endpoint' }
    ]}
>
<TabItem value="delete_private_graph_endpoint">

Deletes a private graph endpoint.

```sql
DELETE FROM aws.neptune_graph.private_graph_endpoints
WHERE graph_identifier = '{{ graph_identifier }}' --required
AND vpc_id = '{{ vpc_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
