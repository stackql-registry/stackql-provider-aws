--- 
title: mac_hosts
hide_title: false
hide_table_of_contents: false
keywords:
  - mac_hosts
  - ec2
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

Creates, updates, deletes, gets or lists a <code>mac_hosts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mac_hosts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.mac_hosts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_mac_hosts"
    values={[
        { label: 'describe_mac_hosts', value: 'describe_mac_hosts' }
    ]}
>
<TabItem value="describe_mac_hosts">

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
    <td><CopyableCode code="host_id" /></td>
    <td><code>string</code></td>
    <td>The EC2 Mac Dedicated Host ID.</td>
</tr>
<tr>
    <td><CopyableCode code="mac_os_latest_supported_versions" /></td>
    <td><code>string</code></td>
    <td>The latest macOS versions that the EC2 Mac Dedicated Host can launch without being upgraded.</td>
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
    <td><a href="#describe_mac_hosts"><CopyableCode code="describe_mac_hosts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-HostId"><code>HostId</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes the specified EC2 Mac Dedicated Host or all of your EC2 Mac Dedicated Hosts.</td>
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
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. availability-zone - The Availability Zone of the EC2 Mac Dedicated Host. instance-type - The instance type size that the EC2 Mac Dedicated Host is configured to support.</td>
</tr>
<tr id="parameter-HostId">
    <td><CopyableCode code="HostId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the EC2 Mac Dedicated Hosts.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned nextToken value. This value can be between 5 and 500. If maxResults is given a larger value than 500, you receive an error.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_mac_hosts"
    values={[
        { label: 'describe_mac_hosts', value: 'describe_mac_hosts' }
    ]}
>
<TabItem value="describe_mac_hosts">

Describes the specified EC2 Mac Dedicated Host or all of your EC2 Mac Dedicated Hosts.

```sql
SELECT
host_id,
mac_os_latest_supported_versions
FROM aws.ec2.mac_hosts
WHERE region = '{{ region }}' -- required
AND Filter = '{{ Filter }}'
AND HostId = '{{ HostId }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
