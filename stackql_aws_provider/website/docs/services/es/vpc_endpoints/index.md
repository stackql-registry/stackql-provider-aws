--- 
title: vpc_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_endpoints
  - es
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

Creates, updates, deletes, gets or lists a <code>vpc_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.es.vpc_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpc_endpoints"
    values={[
        { label: 'describe_vpc_endpoints', value: 'describe_vpc_endpoints' },
        { label: 'list_vpc_endpoints', value: 'list_vpc_endpoints' }
    ]}
>
<TabItem value="describe_vpc_endpoints">

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
    <td><CopyableCode code="vpc_endpoint_errors" /></td>
    <td><code>array</code></td>
    <td>Any errors associated with the request.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoints" /></td>
    <td><code>array</code></td>
    <td>Information about each requested VPC endpoint.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_vpc_endpoints">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_summary_list" /></td>
    <td><code>array</code></td>
    <td>Information about each endpoint.</td>
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
    <td><a href="#describe_vpc_endpoints"><CopyableCode code="describe_vpc_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes one or more Amazon OpenSearch Service-managed VPC endpoints.</td>
</tr>
<tr>
    <td><a href="#list_vpc_endpoints"><CopyableCode code="list_vpc_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves all Amazon OpenSearch Service-managed VPC endpoints in the current account and Region.</td>
</tr>
<tr>
    <td><a href="#create_vpc_endpoint"><CopyableCode code="create_vpc_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainArn"><code>DomainArn</code></a>, <a href="#parameter-VpcOptions"><code>VpcOptions</code></a></td>
    <td></td>
    <td>Creates an Amazon OpenSearch Service-managed VPC endpoint.</td>
</tr>
<tr>
    <td><a href="#update_vpc_endpoint"><CopyableCode code="update_vpc_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VpcEndpointId"><code>VpcEndpointId</code></a>, <a href="#parameter-VpcOptions"><code>VpcOptions</code></a></td>
    <td></td>
    <td>Modifies an Amazon OpenSearch Service-managed interface VPC endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_vpc_endpoint"><CopyableCode code="delete_vpc_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-vpc_endpoint_id"><code>vpc_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon OpenSearch Service-managed interface VPC endpoint.</td>
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
<tr id="parameter-vpc_endpoint_id">
    <td><CopyableCode code="vpc_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the endpoint to be deleted.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Identifier to allow retrieval of paginated results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vpc_endpoints"
    values={[
        { label: 'describe_vpc_endpoints', value: 'describe_vpc_endpoints' },
        { label: 'list_vpc_endpoints', value: 'list_vpc_endpoints' }
    ]}
>
<TabItem value="describe_vpc_endpoints">

Describes one or more Amazon OpenSearch Service-managed VPC endpoints.

```sql
SELECT
vpc_endpoint_errors,
vpc_endpoints
FROM aws.es.vpc_endpoints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_vpc_endpoints">

Retrieves all Amazon OpenSearch Service-managed VPC endpoints in the current account and Region.

```sql
SELECT
next_token,
vpc_endpoint_summary_list
FROM aws.es.vpc_endpoints
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vpc_endpoint"
    values={[
        { label: 'create_vpc_endpoint', value: 'create_vpc_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vpc_endpoint">

Creates an Amazon OpenSearch Service-managed VPC endpoint.

```sql
INSERT INTO aws.es.vpc_endpoints (
DomainArn,
VpcOptions,
ClientToken,
region
)
SELECT 
'{{ DomainArn }}' /* required */,
'{{ VpcOptions }}' /* required */,
'{{ ClientToken }}',
'{{ region }}'
RETURNING
vpc_endpoint
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpc_endpoints
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpc_endpoints resource.
    - name: DomainArn
      value: "{{ DomainArn }}"
    - name: VpcOptions
      description: |
        Options to specify the subnets and security groups for VPC endpoint. For more information, see VPC Endpoints for Amazon Elasticsearch Service Domains.
      value:
        SubnetIds:
          - "{{ SubnetIds }}"
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_vpc_endpoint"
    values={[
        { label: 'update_vpc_endpoint', value: 'update_vpc_endpoint' }
    ]}
>
<TabItem value="update_vpc_endpoint">

Modifies an Amazon OpenSearch Service-managed interface VPC endpoint.

```sql
UPDATE aws.es.vpc_endpoints
SET 
VpcEndpointId = '{{ VpcEndpointId }}',
VpcOptions = '{{ VpcOptions }}'
WHERE 
region = '{{ region }}' --required
AND VpcEndpointId = '{{ VpcEndpointId }}' --required
AND VpcOptions = '{{ VpcOptions }}' --required
RETURNING
vpc_endpoint;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vpc_endpoint"
    values={[
        { label: 'delete_vpc_endpoint', value: 'delete_vpc_endpoint' }
    ]}
>
<TabItem value="delete_vpc_endpoint">

Deletes an Amazon OpenSearch Service-managed interface VPC endpoint.

```sql
DELETE FROM aws.es.vpc_endpoints
WHERE vpc_endpoint_id = '{{ vpc_endpoint_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
