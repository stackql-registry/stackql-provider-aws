--- 
title: vpc_endpoint_access
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_endpoint_access
  - opensearch
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

Creates, updates, deletes, gets or lists a <code>vpc_endpoint_access</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_endpoint_access" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.vpc_endpoint_access" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_vpc_endpoint_access"
    values={[
        { label: 'list_vpc_endpoint_access', value: 'list_vpc_endpoint_access' }
    ]}
>
<TabItem value="list_vpc_endpoint_access">

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
    <td><CopyableCode code="authorized_principal_list" /></td>
    <td><code>array</code></td>
    <td>A list of IAM principals that can currently access the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>When nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.</td>
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
    <td><a href="#list_vpc_endpoint_access"><CopyableCode code="list_vpc_endpoint_access" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves information about each Amazon Web Services principal that is allowed to access a given Amazon OpenSearch Service domain through the use of an interface VPC endpoint.</td>
</tr>
<tr>
    <td><a href="#authorize_vpc_endpoint_access"><CopyableCode code="authorize_vpc_endpoint_access" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides access to an Amazon OpenSearch Service domain through the use of an interface VPC endpoint.</td>
</tr>
<tr>
    <td><a href="#revoke_vpc_endpoint_access"><CopyableCode code="revoke_vpc_endpoint_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Revokes access to an Amazon OpenSearch Service domain that was provided through an interface VPC endpoint.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The name of the OpenSearch Service domain.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If your initial ListVpcEndpointAccess operation returns a nextToken, you can include the returned nextToken in subsequent ListVpcEndpointAccess operations, which returns results in the next page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_vpc_endpoint_access"
    values={[
        { label: 'list_vpc_endpoint_access', value: 'list_vpc_endpoint_access' }
    ]}
>
<TabItem value="list_vpc_endpoint_access">

Retrieves information about each Amazon Web Services principal that is allowed to access a given Amazon OpenSearch Service domain through the use of an interface VPC endpoint.

```sql
SELECT
authorized_principal_list,
next_token
FROM aws.opensearch.vpc_endpoint_access
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="authorize_vpc_endpoint_access"
    values={[
        { label: 'authorize_vpc_endpoint_access', value: 'authorize_vpc_endpoint_access' }
    ]}
>
<TabItem value="authorize_vpc_endpoint_access">

Provides access to an Amazon OpenSearch Service domain through the use of an interface VPC endpoint.

```sql
UPDATE aws.opensearch.vpc_endpoint_access
SET 
Account = '{{ Account }}',
Service = '{{ Service }}',
ServiceOptions = '{{ ServiceOptions }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
RETURNING
authorized_principal;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="revoke_vpc_endpoint_access"
    values={[
        { label: 'revoke_vpc_endpoint_access', value: 'revoke_vpc_endpoint_access' }
    ]}
>
<TabItem value="revoke_vpc_endpoint_access">

Revokes access to an Amazon OpenSearch Service domain that was provided through an interface VPC endpoint.

```sql
EXEC aws.opensearch.vpc_endpoint_access.revoke_vpc_endpoint_access 
@domain_name='{{ domain_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Account": "{{ Account }}", 
"Service": "{{ Service }}", 
"ServiceOptions": "{{ ServiceOptions }}"
}'
;
```
</TabItem>
</Tabs>
