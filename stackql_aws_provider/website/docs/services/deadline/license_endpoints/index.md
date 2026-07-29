--- 
title: license_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - license_endpoints
  - deadline
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

Creates, updates, deletes, gets or lists a <code>license_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="license_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.license_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_license_endpoint"
    values={[
        { label: 'get_license_endpoint', value: 'get_license_endpoint' },
        { label: 'list_license_endpoints', value: 'list_license_endpoints' }
    ]}
>
<TabItem value="get_license_endpoint">

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
    <td><CopyableCode code="dns_name" /></td>
    <td><code>string</code></td>
    <td>The DNS name.</td>
</tr>
<tr>
    <td><CopyableCode code="license_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The license endpoint ID. (pattern: &lt;code&gt;le-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_ids" /></td>
    <td><code>array</code></td>
    <td>The security group IDs for the license endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the license endpoint. (CREATE_IN_PROGRESS, DELETE_IN_PROGRESS, READY, NOT_READY)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The status message of the license endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_ids" /></td>
    <td><code>array</code></td>
    <td>The subnet IDs.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The VPC (virtual private cloud) ID associated with the license endpoint. (pattern: &lt;code&gt;vpc-&#91;\w&#93;&#123;1,120&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_license_endpoints">

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
    <td><CopyableCode code="license_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The license endpoint ID. (pattern: &lt;code&gt;le-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the license endpoint. (CREATE_IN_PROGRESS, DELETE_IN_PROGRESS, READY, NOT_READY)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The status message of the license endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The VPC (virtual private cloud) ID associated with the license endpoint. (pattern: &lt;code&gt;vpc-&#91;\w&#93;&#123;1,120&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_license_endpoint"><CopyableCode code="get_license_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-license_endpoint_id"><code>license_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a licence endpoint.</td>
</tr>
<tr>
    <td><a href="#list_license_endpoints"><CopyableCode code="list_license_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists license endpoints.</td>
</tr>
<tr>
    <td><a href="#create_license_endpoint"><CopyableCode code="create_license_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-vpcId"><code>vpcId</code></a>, <a href="#parameter-subnetIds"><code>subnetIds</code></a>, <a href="#parameter-securityGroupIds"><code>securityGroupIds</code></a></td>
    <td><a href="#parameter-X-Amz-Client-Token"><code>X-Amz-Client-Token</code></a></td>
    <td>Creates a license endpoint to integrate your various licensed software used for rendering on Deadline Cloud.</td>
</tr>
<tr>
    <td><a href="#delete_license_endpoint"><CopyableCode code="delete_license_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-license_endpoint_id"><code>license_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a license endpoint.</td>
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
<tr id="parameter-license_endpoint_id">
    <td><CopyableCode code="license_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The license endpoint ID of the license endpoint to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-X-Amz-Client-Token">
    <td><CopyableCode code="X-Amz-Client-Token" /></td>
    <td><code>string</code></td>
    <td>The unique token which the server uses to recognize retries of the same request.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null to start from the beginning.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_license_endpoint"
    values={[
        { label: 'get_license_endpoint', value: 'get_license_endpoint' },
        { label: 'list_license_endpoints', value: 'list_license_endpoints' }
    ]}
>
<TabItem value="get_license_endpoint">

Gets a licence endpoint.

```sql
SELECT
dns_name,
license_endpoint_id,
security_group_ids,
status,
status_message,
subnet_ids,
vpc_id
FROM aws.deadline.license_endpoints
WHERE license_endpoint_id = '{{ license_endpoint_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_license_endpoints">

Lists license endpoints.

```sql
SELECT
license_endpoint_id,
status,
status_message,
vpc_id
FROM aws.deadline.license_endpoints
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_license_endpoint"
    values={[
        { label: 'create_license_endpoint', value: 'create_license_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_license_endpoint">

Creates a license endpoint to integrate your various licensed software used for rendering on Deadline Cloud.

```sql
INSERT INTO aws.deadline.license_endpoints (
vpcId,
subnetIds,
securityGroupIds,
tags,
region,
`X-Amz-Client-Token`
)
SELECT 
'{{ vpcId }}' /* required */,
'{{ subnetIds }}' /* required */,
'{{ securityGroupIds }}' /* required */,
'{{ tags }}',
'{{ region }}',
'{{ X-Amz-Client-Token }}'
RETURNING
license_endpoint_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: license_endpoints
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the license_endpoints resource.
    - name: vpcId
      value: "{{ vpcId }}"
    - name: subnetIds
      value:
        - "{{ subnetIds }}"
    - name: securityGroupIds
      value:
        - "{{ securityGroupIds }}"
    - name: tags
      value: "{{ tags }}"
    - name: X-Amz-Client-Token
      value: "{{ X-Amz-Client-Token }}"
      description: The unique token which the server uses to recognize retries of the same request.
      description: The unique token which the server uses to recognize retries of the same request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_license_endpoint"
    values={[
        { label: 'delete_license_endpoint', value: 'delete_license_endpoint' }
    ]}
>
<TabItem value="delete_license_endpoint">

Deletes a license endpoint.

```sql
DELETE FROM aws.deadline.license_endpoints
WHERE license_endpoint_id = '{{ license_endpoint_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
