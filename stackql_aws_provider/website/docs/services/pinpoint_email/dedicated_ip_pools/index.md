--- 
title: dedicated_ip_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - dedicated_ip_pools
  - pinpoint_email
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

Creates, updates, deletes, gets or lists a <code>dedicated_ip_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dedicated_ip_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_email.dedicated_ip_pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_dedicated_ip_pools"
    values={[
        { label: 'list_dedicated_ip_pools', value: 'list_dedicated_ip_pools' }
    ]}
>
<TabItem value="list_dedicated_ip_pools">

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
    <td><CopyableCode code="dedicated_ip_pool" /></td>
    <td><code>string</code></td>
    <td>A list of all of the dedicated IP pools that are associated with your Amazon Pinpoint account.</td>
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
    <td><a href="#list_dedicated_ip_pools"><CopyableCode code="list_dedicated_ip_pools" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-PageSize"><code>PageSize</code></a></td>
    <td>List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current AWS Region.</td>
</tr>
<tr>
    <td><a href="#create_dedicated_ip_pool"><CopyableCode code="create_dedicated_ip_pool" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PoolName"><code>PoolName</code></a></td>
    <td></td>
    <td>Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Pinpoint account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, Amazon Pinpoint sends it using only the IP addresses in the associated pool.</td>
</tr>
<tr>
    <td><a href="#delete_dedicated_ip_pool"><CopyableCode code="delete_dedicated_ip_pool" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-pool_name"><code>pool_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a dedicated IP pool.</td>
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
<tr id="parameter-pool_name">
    <td><CopyableCode code="pool_name" /></td>
    <td><code>string</code></td>
    <td>The name of the dedicated IP pool that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token returned from a previous call to ListDedicatedIpPools to indicate the position in the list of dedicated IP pools.</td>
</tr>
<tr id="parameter-PageSize">
    <td><CopyableCode code="PageSize" /></td>
    <td><code>integer</code></td>
    <td>The number of results to show in a single call to ListDedicatedIpPools. If the number of results is larger than the number you specified in this parameter, then the response includes a NextToken element, which you can use to obtain additional results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_dedicated_ip_pools"
    values={[
        { label: 'list_dedicated_ip_pools', value: 'list_dedicated_ip_pools' }
    ]}
>
<TabItem value="list_dedicated_ip_pools">

List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current AWS Region.

```sql
SELECT
dedicated_ip_pool
FROM aws.pinpoint_email.dedicated_ip_pools
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND PageSize = '{{ PageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dedicated_ip_pool"
    values={[
        { label: 'create_dedicated_ip_pool', value: 'create_dedicated_ip_pool' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dedicated_ip_pool">

Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Pinpoint account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, Amazon Pinpoint sends it using only the IP addresses in the associated pool.

```sql
INSERT INTO aws.pinpoint_email.dedicated_ip_pools (
PoolName,
Tags,
region
)
SELECT 
'{{ PoolName }}' /* required */,
'{{ Tags }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dedicated_ip_pools
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the dedicated_ip_pools resource.
    - name: PoolName
      value: "{{ PoolName }}"
      description: |
        The name of a dedicated IP pool.
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dedicated_ip_pool"
    values={[
        { label: 'delete_dedicated_ip_pool', value: 'delete_dedicated_ip_pool' }
    ]}
>
<TabItem value="delete_dedicated_ip_pool">

Delete a dedicated IP pool.

```sql
DELETE FROM aws.pinpoint_email.dedicated_ip_pools
WHERE pool_name = '{{ pool_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
