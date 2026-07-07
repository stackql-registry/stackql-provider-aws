--- 
title: requester_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - requester_gateways
  - rtbfabric
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

Creates, updates, deletes, gets or lists a <code>requester_gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="requester_gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rtbfabric.requester_gateways" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_requester_gateway"
    values={[
        { label: 'get_requester_gateway', value: 'get_requester_gateway' },
        { label: 'list_requester_gateways', value: 'list_requester_gateways' }
    ]}
>
<TabItem value="get_requester_gateway">

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
    <td><CopyableCode code="activeLinksCount" /></td>
    <td><code>integer</code></td>
    <td>The count of active links for the requester gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the requester gateway was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the requester gateway. (pattern: &lt;code&gt;&#91;A-Za-z0-9 &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domainName" /></td>
    <td><code>string</code></td>
    <td>The domain name of the requester gateway. (pattern: &lt;code&gt;(?:&#91;a-z0-9&#93;(?:&#91;a-z0-9-&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?)(?:\.(?:&#91;a-z0-9&#93;(?:&#91;a-z0-9-&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?))+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gateway. (pattern: &lt;code&gt;rtb-gw-&#91;a-z0-9-&#93;&#123;1,25&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="securityGroupIds" /></td>
    <td><code>array</code></td>
    <td>The unique identifiers of the security groups.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the request. (PENDING_CREATION, ACTIVE, PENDING_DELETION, DELETED, ERROR, PENDING_UPDATE, ISOLATED, PENDING_ISOLATION, PENDING_RESTORATION)</td>
</tr>
<tr>
    <td><CopyableCode code="subnetIds" /></td>
    <td><code>array</code></td>
    <td>The unique identifiers of the subnets.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of the key-value pairs for the tag or tags assigned to the specified resource.</td>
</tr>
<tr>
    <td><CopyableCode code="totalLinksCount" /></td>
    <td><code>integer</code></td>
    <td>The total count of links for the requester gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the requester gateway was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Virtual Private Cloud (VPC). (pattern: &lt;code&gt;vpc-&#91;a-f0-9&#93;&#123;8,17&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_requester_gateways">

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
    <td><CopyableCode code="gateway_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gateways.</td>
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
    <td><a href="#get_requester_gateway"><CopyableCode code="get_requester_gateway" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a requester gateway.</td>
</tr>
<tr>
    <td><a href="#list_requester_gateways"><CopyableCode code="list_requester_gateways" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists requester gateways.</td>
</tr>
<tr>
    <td><a href="#create_requester_gateway"><CopyableCode code="create_requester_gateway" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-vpcId"><code>vpcId</code></a>, <a href="#parameter-subnetIds"><code>subnetIds</code></a>, <a href="#parameter-securityGroupIds"><code>securityGroupIds</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Creates a requester gateway.</td>
</tr>
<tr>
    <td><a href="#update_requester_gateway"><CopyableCode code="update_requester_gateway" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Updates a requester gateway.</td>
</tr>
<tr>
    <td><a href="#delete_requester_gateway"><CopyableCode code="delete_requester_gateway" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a requester gateway.</td>
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
<tr id="parameter-gateway_id">
    <td><CopyableCode code="gateway_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gateway.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_requester_gateway"
    values={[
        { label: 'get_requester_gateway', value: 'get_requester_gateway' },
        { label: 'list_requester_gateways', value: 'list_requester_gateways' }
    ]}
>
<TabItem value="get_requester_gateway">

Retrieves information about a requester gateway.

```sql
SELECT
activeLinksCount,
createdAt,
description,
domainName,
gatewayId,
securityGroupIds,
status,
subnetIds,
tags,
totalLinksCount,
updatedAt,
vpcId
FROM aws.rtbfabric.requester_gateways
WHERE gateway_id = '{{ gateway_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_requester_gateways">

Lists requester gateways.

```sql
SELECT
gateway_id
FROM aws.rtbfabric.requester_gateways
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_requester_gateway"
    values={[
        { label: 'create_requester_gateway', value: 'create_requester_gateway' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_requester_gateway">

Creates a requester gateway.

```sql
INSERT INTO aws.rtbfabric.requester_gateways (
vpcId,
subnetIds,
securityGroupIds,
clientToken,
description,
tags,
region
)
SELECT 
'{{ vpcId }}' /* required */,
'{{ subnetIds }}' /* required */,
'{{ securityGroupIds }}' /* required */,
'{{ clientToken }}' /* required */,
'{{ description }}',
'{{ tags }}',
'{{ region }}'
RETURNING
domainName,
gatewayId,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: requester_gateways
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the requester_gateways resource.
    - name: vpcId
      value: "{{ vpcId }}"
    - name: subnetIds
      value:
        - "{{ subnetIds }}"
    - name: securityGroupIds
      value:
        - "{{ securityGroupIds }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: description
      value: "{{ description }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_requester_gateway"
    values={[
        { label: 'update_requester_gateway', value: 'update_requester_gateway' }
    ]}
>
<TabItem value="update_requester_gateway">

Updates a requester gateway.

```sql
UPDATE aws.rtbfabric.requester_gateways
SET 
clientToken = '{{ clientToken }}',
description = '{{ description }}'
WHERE 
gateway_id = '{{ gateway_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}' --required
RETURNING
gatewayId,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_requester_gateway"
    values={[
        { label: 'delete_requester_gateway', value: 'delete_requester_gateway' }
    ]}
>
<TabItem value="delete_requester_gateway">

Deletes a requester gateway.

```sql
DELETE FROM aws.rtbfabric.requester_gateways
WHERE gateway_id = '{{ gateway_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
