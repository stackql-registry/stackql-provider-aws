--- 
title: service_network_vpc_endpoint_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - service_network_vpc_endpoint_associations
  - vpc_lattice
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

Creates, updates, deletes, gets or lists a <code>service_network_vpc_endpoint_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_network_vpc_endpoint_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.vpc_lattice.service_network_vpc_endpoint_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_service_network_vpc_endpoint_associations"
    values={[
        { label: 'list_service_network_vpc_endpoint_associations', value: 'list_service_network_vpc_endpoint_associations' }
    ]}
>
<TabItem value="list_service_network_vpc_endpoint_associations">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the association.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the association was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="service_network_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service network. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:servicenetwork/sn-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the association.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC endpoint associated with the service network.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_owner_id" /></td>
    <td><code>string</code></td>
    <td>The owner of the VPC endpoint associated with the service network.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC for the association.</td>
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
    <td><a href="#list_service_network_vpc_endpoint_associations"><CopyableCode code="list_service_network_vpc_endpoint_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-serviceNetworkIdentifier"><code>serviceNetworkIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the associations between a service network and a VPC endpoint.</td>
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
<tr id="parameter-serviceNetworkIdentifier">
    <td><CopyableCode code="serviceNetworkIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the service network associated with the VPC endpoint.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum page size.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If there are additional results, a pagination token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_service_network_vpc_endpoint_associations"
    values={[
        { label: 'list_service_network_vpc_endpoint_associations', value: 'list_service_network_vpc_endpoint_associations' }
    ]}
>
<TabItem value="list_service_network_vpc_endpoint_associations">

Lists the associations between a service network and a VPC endpoint.

```sql
SELECT
id,
created_at,
service_network_arn,
state,
vpc_endpoint_id,
vpc_endpoint_owner_id,
vpc_id
FROM aws.vpc_lattice.service_network_vpc_endpoint_associations
WHERE serviceNetworkIdentifier = '{{ serviceNetworkIdentifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
