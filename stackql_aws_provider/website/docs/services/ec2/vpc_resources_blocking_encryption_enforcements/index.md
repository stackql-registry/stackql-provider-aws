--- 
title: vpc_resources_blocking_encryption_enforcements
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_resources_blocking_encryption_enforcements
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

Creates, updates, deletes, gets or lists a <code>vpc_resources_blocking_encryption_enforcements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_resources_blocking_encryption_enforcements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.vpc_resources_blocking_encryption_enforcements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_vpc_resources_blocking_encryption_enforcement"
    values={[
        { label: 'get_vpc_resources_blocking_encryption_enforcement', value: 'get_vpc_resources_blocking_encryption_enforcement' }
    ]}
>
<TabItem value="get_vpc_resources_blocking_encryption_enforcement">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to include in another request to get the next page of items. This value is null when there are no more items to return.</td>
</tr>
<tr>
    <td><CopyableCode code="NonCompliantResources" /></td>
    <td><code>string</code></td>
    <td>Information about resources that are blocking encryption enforcement.</td>
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
    <td><a href="#get_vpc_resources_blocking_encryption_enforcement"><CopyableCode code="get_vpc_resources_blocking_encryption_enforcement" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Gets information about resources in a VPC that are blocking encryption enforcement. For more information, see Enforce VPC encryption in transit in the Amazon VPC User Guide.</td>
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
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC to check for resources blocking encryption enforcement.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_vpc_resources_blocking_encryption_enforcement"
    values={[
        { label: 'get_vpc_resources_blocking_encryption_enforcement', value: 'get_vpc_resources_blocking_encryption_enforcement' }
    ]}
>
<TabItem value="get_vpc_resources_blocking_encryption_enforcement">

Gets information about resources in a VPC that are blocking encryption enforcement. For more information, see Enforce VPC encryption in transit in the Amazon VPC User Guide.

```sql
SELECT
NextToken,
NonCompliantResources
FROM aws.ec2.vpc_resources_blocking_encryption_enforcements
WHERE VpcId = '{{ VpcId }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
